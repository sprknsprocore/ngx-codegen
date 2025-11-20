import * as React from "react";
import { forwardRef, useEffect, useState } from "react";
import clsx from "clsx";
import { createPortal } from "react-dom";

export interface TearSheetProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Whether the tear sheet is open */
	open?: boolean;
	/** Callback when close is requested */
	onClose?: () => void;
	/** Title of the tear sheet */
	title?: React.ReactNode;
	/** Size variant */
	size?: "sm" | "md" | "lg" | "xl";
	/** Show close button */
	showCloseButton?: boolean;
	/** Actions to display in the header */
	actions?: React.ReactNode;
}

export const TearSheet = forwardRef<HTMLDivElement, TearSheetProps>(function TearSheet(
	{ className, open, onClose, title, size = "md", showCloseButton = true, actions, children, ...rest },
	ref
) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (open) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);

	const handleBackdropClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			onClose?.();
		}
	};

	const sizeMap: Record<NonNullable<TearSheetProps["size"]>, string> = {
		sm: "max-w-sm",
		md: "max-w-2xl",
		lg: "max-w-4xl",
		xl: "max-w-6xl",
	};

	if (!mounted) return null;

	const tearSheetContent = (
		<>
			{/* Backdrop */}
			<div
				className={clsx(
					"fixed inset-0 bg-scrim-medium transition-opacity z-40",
					open ? "opacity-100" : "opacity-0 pointer-events-none"
				)}
				onClick={handleBackdropClick}
				aria-hidden="true"
			/>

			{/* TearSheet Panel */}
			<div
				ref={ref}
				role="dialog"
				aria-modal="true"
				className={clsx(
					"fixed top-0 right-0 bottom-0 bg-bg-canvas shadow-4 transition-transform duration-300 z-50",
					"flex flex-col w-full",
					sizeMap[size],
					open ? "translate-x-0" : "translate-x-full",
					className
				)}
				{...rest}
			>
				{/* Header */}
				{(title || actions || showCloseButton) && (
					<div className="flex items-center justify-between px-6 py-4 border-b border-border-default shrink-0">
						<div className="flex items-center gap-4 flex-1 min-w-0">
							{title && (
								<h2 className="text-lg font-semibold text-fg-default truncate">
									{title}
								</h2>
							)}
						</div>
						<div className="flex items-center gap-2">
							{actions}
							{showCloseButton && (
								<button
									type="button"
									onClick={onClose}
									className="p-2 rounded-sm text-fg-secondary hover:text-fg-default hover:bg-bg-surface transition-colors"
									aria-label="Close"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<line x1="18" y1="6" x2="6" y2="18" />
										<line x1="6" y1="6" x2="18" y2="18" />
									</svg>
								</button>
							)}
						</div>
					</div>
				)}

				{/* Content */}
				<div className="flex-1 overflow-y-auto px-6 py-4">
					{children}
				</div>
			</div>
		</>
	);

	return createPortal(tearSheetContent, document.body);
});

