import * as React from "react";
import { forwardRef } from "react";
import clsx from "clsx";

export interface ProgressBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
	/** Progress value (0-100) */
	value?: number;
	/** Maximum value (defaults to 100) */
	max?: number;
	/** Size variant */
	size?: "sm" | "md" | "lg";
	/** Color variant */
	variant?: "default" | "success" | "warning" | "danger";
	/** Show label with percentage */
	showLabel?: boolean;
	/** Custom label text */
	label?: string;
	/** Indeterminate/loading state */
	indeterminate?: boolean;
	/** Striped pattern */
	striped?: boolean;
	/** Animate stripes */
	animated?: boolean;
}

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(function ProgressBar(
	{
		className,
		value = 0,
		max = 100,
		size = "md",
		variant = "default",
		showLabel = false,
		label,
		indeterminate = false,
		striped = false,
		animated = false,
		...rest
	},
	ref
) {
	const percentage = indeterminate ? 100 : Math.min(100, Math.max(0, (value / max) * 100));
	const displayLabel = label || `${Math.round(percentage)}%`;

	const sizeClasses = {
		sm: "h-1",
		md: "h-2",
		lg: "h-3",
	};

	const variantClasses = {
		default: "bg-bg-brand",
		success: "bg-state-success",
		warning: "bg-state-warn",
		danger: "bg-state-danger",
	};

	return (
		<div ref={ref} className={clsx("w-full", className)} {...rest}>
			{showLabel && (
				<div className="flex justify-between items-center mb-1.5">
					<span className="text-sm font-medium text-fg-default">{displayLabel}</span>
				</div>
			)}
			<div
				role="progressbar"
				aria-valuemin={0}
				aria-valuemax={max}
				aria-valuenow={indeterminate ? undefined : value}
				className={clsx(
					"w-full bg-bg-tertiary rounded-full overflow-hidden",
					sizeClasses[size]
				)}
			>
				<div
					className={clsx(
						"h-full rounded-full transition-all duration-300 ease-out",
						variantClasses[variant],
						indeterminate && "animate-indeterminate origin-left",
						striped &&
							"bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:20px_100%]",
						animated && striped && "animate-stripe"
					)}
					style={{
						width: indeterminate ? "30%" : `${percentage}%`,
					}}
				/>
			</div>
		</div>
	);
});

