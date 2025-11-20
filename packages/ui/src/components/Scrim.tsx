import * as React from "react";
import { forwardRef, useEffect } from "react";
import clsx from "clsx";

export interface ScrimProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Whether the scrim is visible */
	open?: boolean;
	/** Callback when scrim is clicked */
	onClose?: () => void;
	/** Prevent closing when clicking the scrim */
	disableBackdropClick?: boolean;
	/** Prevent closing when pressing Escape */
	disableEscapeKeyDown?: boolean;
	/** Z-index of the scrim */
	zIndex?: number;
	/** Opacity level */
	opacity?: "light" | "medium" | "dark";
	/** Disable blur effect */
	disableBlur?: boolean;
	/** Children to render on top of scrim */
	children?: React.ReactNode;
}

export const Scrim = forwardRef<HTMLDivElement, ScrimProps>(function Scrim(
	{
		className,
		open = false,
		onClose,
		disableBackdropClick = false,
		disableEscapeKeyDown = false,
		zIndex = 1000,
		opacity = "medium",
		disableBlur = false,
		children,
		...rest
	},
	ref
) {
	// Handle Escape key
	useEffect(() => {
		if (!open || disableEscapeKeyDown) return;

		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				onClose?.();
			}
		};

		document.addEventListener("keydown", handleEscape);
		return () => document.removeEventListener("keydown", handleEscape);
	}, [open, disableEscapeKeyDown, onClose]);

	// Prevent body scroll when scrim is open
	useEffect(() => {
		if (!open) return;

		const originalOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = originalOverflow;
		};
	}, [open]);

	const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget && !disableBackdropClick) {
			onClose?.();
		}
	};

	const opacityClasses = {
		light: "bg-scrim-light",
		medium: "bg-scrim-medium",
		dark: "bg-scrim-dark",
	};

	if (!open) return null;

	return (
		<div
			ref={ref}
			role="presentation"
			onClick={handleBackdropClick}
			className={clsx(
				"fixed inset-0 flex items-center justify-center transition-opacity",
				opacityClasses[opacity],
				!disableBlur && "backdrop-blur-sm",
				className
			)}
			style={{ zIndex }}
			{...rest}
		>
			{children}
		</div>
	);
});

