import * as React from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const banner = cva(
	"flex items-start gap-3 p-4 bg-bg-canvas border-l-4 rounded-sm shadow-1",
	{
		variants: {
			variant: {
				info: "border-l-blue-50",
				attention: "border-l-yellow-40",
				error: "border-l-red-50",
				success: "border-l-green-30",
			},
		},
		defaultVariants: {
			variant: "info",
		},
	}
);

export interface BannerProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof banner> {
	onDismiss?: () => void;
}

const BannerRoot = forwardRef<HTMLDivElement, BannerProps>(function Banner(
	{ className, variant, children, onDismiss, ...rest },
	ref
) {
	return (
		<div
			ref={ref}
			role="alert"
			className={clsx(banner({ variant }), className)}
			{...rest}
		>
			<BannerIcon variant={variant} />
			<div className="flex-1 flex items-start gap-3">
				{children}
			</div>
		</div>
	);
});

interface BannerIconProps {
	variant?: "info" | "attention" | "error" | "success" | null;
}

function BannerIcon({ variant }: BannerIconProps) {
	const iconColor = {
		info: "text-state-info",
		attention: "text-state-warn",
		error: "text-state-danger",
		success: "text-state-success",
	}[variant || "info"];

	if (variant === "info") {
		return (
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="currentColor"
				className={clsx("shrink-0 mt-0.5", iconColor)}
			>
				<circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
				<path d="M10 6v4M10 13v1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
			</svg>
		);
	}

	if (variant === "attention") {
		return (
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="currentColor"
				className={clsx("shrink-0 mt-0.5", iconColor)}
			>
				<path
					d="M9.134 2.5a1 1 0 011.732 0l7.5 13A1 1 0 0117.5 17h-15a1 1 0 01-.866-1.5l7.5-13z"
					stroke="currentColor"
					strokeWidth="1.5"
					fill="none"
				/>
				<path d="M10 7v4M10 14v1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
			</svg>
		);
	}

	if (variant === "error") {
		return (
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="currentColor"
				className={clsx("shrink-0 mt-0.5", iconColor)}
			>
				<circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
				<path d="M7 7l6 6M13 7l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
			</svg>
		);
	}

	if (variant === "success") {
		return (
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="currentColor"
				className={clsx("shrink-0 mt-0.5", iconColor)}
			>
				<circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
				<path d="M6 10l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		);
	}

	return null;
}

const BannerContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	function BannerContent({ className, children, ...rest }, ref) {
		return (
			<div ref={ref} className={clsx("flex-1", className)} {...rest}>
				{children}
			</div>
		);
	}
);

const BannerTitle = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	function BannerTitle({ className, children, ...rest }, ref) {
		return (
			<div ref={ref} className={clsx("text-sm font-semibold text-fg-default", className)} {...rest}>
				{children}
			</div>
		);
	}
);

const BannerBody = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	function BannerBody({ className, children, ...rest }, ref) {
		return (
			<div ref={ref} className={clsx("text-sm text-fg-default mt-1", className)} {...rest}>
				{children}
			</div>
		);
	}
);

const BannerAction = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	function BannerAction({ className, children, ...rest }, ref) {
		return (
			<div ref={ref} className={clsx("shrink-0", className)} {...rest}>
				{children}
			</div>
		);
	}
);

interface BannerDismissProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const BannerDismiss = forwardRef<HTMLButtonElement, BannerDismissProps>(
	function BannerDismiss({ className, ...rest }, ref) {
		return (
			<button
				ref={ref}
				type="button"
				aria-label="Dismiss"
				className={clsx(
					"shrink-0 p-1 -mr-1 text-fg-secondary hover:text-fg-default rounded",
					"focus:outline-none focus:ring-2 focus:ring-border-focus",
					className
				)}
				{...rest}
			>
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor">
					<path d="M4 4l8 8M12 4l-8 8" strokeWidth="2" strokeLinecap="round" />
				</svg>
			</button>
		);
	}
);

export const Banner = Object.assign(BannerRoot, {
	Content: BannerContent,
	Title: BannerTitle,
	Body: BannerBody,
	Action: BannerAction,
	Dismiss: BannerDismiss,
});


