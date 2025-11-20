import * as React from "react";
import { forwardRef, useEffect } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { Button } from "./Button";

const panel = cva(
	"fixed bg-bg-canvas border-border-default flex flex-col z-40 transition-transform duration-300",
	{
		variants: {
			position: {
				left: "top-0 left-0 h-full border-r",
				right: "top-0 right-0 h-full border-l",
				top: "top-0 left-0 w-full border-b",
				bottom: "bottom-0 left-0 w-full border-t",
			},
			size: {
				sm: "",
				md: "",
				lg: "",
				xl: "",
				full: "",
			},
			shadow: {
				none: "",
				"1": "shadow-1",
				"2": "shadow-2",
				"3": "shadow-3",
				"4": "shadow-4",
			},
		},
		compoundVariants: [
			// Left/Right panels - width
			{ position: "left", size: "sm", class: "w-panel-sm" },
			{ position: "left", size: "md", class: "w-panel-md" },
			{ position: "left", size: "lg", class: "w-panel-lg" },
			{ position: "left", size: "xl", class: "w-panel-xl" },
			{ position: "left", size: "full", class: "w-full" },
			{ position: "right", size: "sm", class: "w-panel-sm" },
			{ position: "right", size: "md", class: "w-panel-md" },
			{ position: "right", size: "lg", class: "w-panel-lg" },
			{ position: "right", size: "xl", class: "w-panel-xl" },
			{ position: "right", size: "full", class: "w-full" },
			// Top/Bottom panels - height
			{ position: "top", size: "sm", class: "h-panel-sm" },
			{ position: "top", size: "md", class: "h-panel-md" },
			{ position: "top", size: "lg", class: "h-panel-lg" },
			{ position: "top", size: "xl", class: "h-panel-xl" },
			{ position: "top", size: "full", class: "h-full" },
			{ position: "bottom", size: "sm", class: "h-panel-sm" },
			{ position: "bottom", size: "md", class: "h-panel-md" },
			{ position: "bottom", size: "lg", class: "h-panel-lg" },
			{ position: "bottom", size: "xl", class: "h-panel-xl" },
			{ position: "bottom", size: "full", class: "h-full" },
		],
		defaultVariants: {
			position: "right",
			size: "md",
			shadow: "3",
		},
	}
);

const backdrop = cva(
	"fixed inset-0 bg-scrim-light transition-opacity duration-300",
	{
		variants: {
			visible: {
				true: "opacity-100",
				false: "opacity-0 pointer-events-none",
			},
		},
		defaultVariants: {
			visible: false,
		},
	}
);

export interface PanelProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
		VariantProps<typeof panel> {
	/**
	 * Whether the panel is open
	 */
	open?: boolean;
	/**
	 * Callback when panel should close
	 */
	onClose?: () => void;
	/**
	 * Panel title
	 */
	title?: React.ReactNode;
	/**
	 * Whether to show backdrop/overlay
	 */
	showBackdrop?: boolean;
	/**
	 * Whether backdrop should close panel on click
	 */
	closeOnBackdropClick?: boolean;
	/**
	 * Whether to show close button
	 */
	showCloseButton?: boolean;
	/**
	 * Footer content (typically actions)
	 */
	footer?: React.ReactNode;
}

export const Panel = forwardRef<HTMLDivElement, PanelProps>(function Panel(
	{
		className,
		position,
		size,
		shadow,
		open = false,
		onClose,
		title,
		children,
		showBackdrop = false,
		closeOnBackdropClick = true,
		showCloseButton = true,
		footer,
		...rest
	},
	ref
) {
	// Lock body scroll when panel is open with backdrop
	useEffect(() => {
		if (open && showBackdrop) {
			document.body.style.overflow = "hidden";
			return () => {
				document.body.style.overflow = "";
			};
		}
	}, [open, showBackdrop]);

	// Handle escape key
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

	const getTransformClass = () => {
		if (open) return "translate-x-0 translate-y-0";

		switch (position) {
			case "left":
				return "-translate-x-full";
			case "right":
				return "translate-x-full";
			case "top":
				return "-translate-y-full";
			case "bottom":
				return "translate-y-full";
			default:
				return "translate-x-full";
		}
	};

	const handleBackdropClick = () => {
		if (closeOnBackdropClick) {
			onClose?.();
		}
	};

	return (
		<>
			{/* Backdrop */}
			{showBackdrop && (
				<div
					className={backdrop({ visible: open })}
					onClick={handleBackdropClick}
					style={{ zIndex: 39 }}
				/>
			)}

			{/* Panel */}
			<div
				ref={ref}
				className={clsx(
					panel({ position, size, shadow }),
					getTransformClass(),
					className
				)}
				{...rest}
			>
				{/* Header */}
				{(title || showCloseButton) && (
					<div className="flex items-center justify-between px-4 py-3 border-b border-border-default flex-shrink-0">
						<h2 className="text-lg font-semibold text-fg-default">{title}</h2>
						{showCloseButton && (
							<Button
								size="sm"
								emphasis="tertiary"
								onClick={onClose}
								aria-label="Close panel"
							>
								<svg
									className="w-5 h-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</Button>
						)}
					</div>
				)}

				{/* Content */}
				<div className="flex-1 overflow-y-auto">{children}</div>

				{/* Footer */}
				{footer && (
					<div className="px-4 py-3 border-t border-border-default flex-shrink-0">
						{footer}
					</div>
				)}
			</div>
		</>
	);
});

/**
 * PanelContent - Convenience component for panel content with padding
 */
export const PanelContent = forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(function PanelContent({ className, ...props }, ref) {
	return <div ref={ref} className={clsx("p-4", className)} {...props} />;
});

/**
 * PanelSection - Convenience component for sections within panel content
 */
export const PanelSection = forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & { title?: string }
>(function PanelSection({ className, title, children, ...props }, ref) {
	return (
		<div ref={ref} className={clsx("space-y-3", className)} {...props}>
			{title && <h3 className="text-sm font-semibold text-fg-default">{title}</h3>}
			{children}
		</div>
	);
});

