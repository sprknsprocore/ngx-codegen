import * as React from "react";
import { forwardRef, useEffect } from "react";
import clsx from "clsx";

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Whether the modal is open */
	open: boolean;
	/** Close handler */
	onClose?: () => void;
	/** Modal title */
	title?: string;
	/** Modal size */
	size?: "sm" | "md" | "lg" | "xl" | "full";
	/** Footer content (typically action buttons) */
	footer?: React.ReactNode;
	/** Whether to show the close button */
	showCloseButton?: boolean;
	/** Whether clicking the backdrop closes the modal */
	closeOnBackdropClick?: boolean;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(function Modal(
	{
		className,
		open,
		onClose,
		title,
		size = "md",
		footer,
		showCloseButton = true,
		closeOnBackdropClick = true,
		children,
		...rest
	},
	ref
) {
	// Handle ESC key
	useEffect(() => {
		if (!open) return;

		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				onClose?.();
			}
		};

		document.addEventListener("keydown", handleEscape);
		return () => document.removeEventListener("keydown", handleEscape);
	}, [open, onClose]);

	// Prevent body scroll when modal is open
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

	if (!open) return null;

	const handleBackdropClick = (e: React.MouseEvent) => {
		if (closeOnBackdropClick && e.target === e.currentTarget) {
			onClose?.();
		}
	};

	const sizeClasses = {
		sm: "max-w-sm",
		md: "max-w-md",
		lg: "max-w-lg",
		xl: "max-w-xl",
		full: "max-w-full mx-4",
	};

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-scrim-medium backdrop-blur-sm"
			onClick={handleBackdropClick}
		>
			<div
				ref={ref}
				className={clsx(
					"relative w-full bg-bg-canvas rounded-lg shadow-4 flex flex-col",
					"max-h-[90vh]",
					sizeClasses[size],
					className
				)}
				role="dialog"
				aria-modal="true"
				aria-labelledby={title ? "modal-title" : undefined}
				{...rest}
			>
				{/* Header */}
				{(title || showCloseButton) && (
					<div className="flex items-center justify-between px-6 py-4 border-b border-border-default">
						{title && (
							<h2 id="modal-title" className="text-lg font-semibold text-fg-default">
								{title}
							</h2>
						)}
						{showCloseButton && (
							<button
								type="button"
								onClick={onClose}
								className="ml-auto text-fg-secondary hover:text-fg-default transition-colors"
								aria-label="Close modal"
							>
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
									<path
										d="M5 5L15 15M5 15L15 5"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
									/>
								</svg>
							</button>
						)}
					</div>
				)}

				{/* Content */}
				<div className="flex-1 overflow-y-auto px-6 py-4">{children}</div>

				{/* Footer */}
				{footer && (
					<div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-border-default">
						{footer}
					</div>
				)}
			</div>
		</div>
	);
});

// Additional component for convenience
export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Primary action button */
	primaryAction?: React.ReactNode;
	/** Secondary action button(s) */
	secondaryAction?: React.ReactNode;
}

export const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(function ModalFooter(
	{ className, primaryAction, secondaryAction, children, ...rest },
	ref
) {
	return (
		<div ref={ref} className={clsx("flex items-center justify-end gap-3", className)} {...rest}>
			{children}
			{secondaryAction}
			{primaryAction}
		</div>
	);
});

