import * as React from "react";
import { forwardRef } from "react";
import clsx from "clsx";

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Size variant */
	size?: "sm" | "md" | "lg" | "xl";
	/** Optional message to display below spinner */
	message?: string;
	/** Color variant */
	variant?: "brand" | "default" | "light";
}

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(function Spinner(
	{ className, size = "md", message, variant = "brand", ...rest },
	ref
) {
	const sizeMap: Record<NonNullable<SpinnerProps["size"]>, string> = {
		sm: "w-4 h-4 border-2",
		md: "w-8 h-8 border-2",
		lg: "w-12 h-12 border-3",
		xl: "w-16 h-16 border-4",
	};

	const variantMap: Record<NonNullable<SpinnerProps["variant"]>, string> = {
		brand: "border-blue-50 border-t-transparent",
		default: "border-gray-60 border-t-transparent",
		light: "border-gray-85 border-t-transparent",
	};

	return (
		<div
			ref={ref}
			className={clsx("inline-flex flex-col items-center justify-center gap-3", className)}
			{...rest}
		>
			<div
				className={clsx(
					"rounded-full animate-spin",
					sizeMap[size],
					variantMap[variant]
				)}
				role="status"
				aria-label="Loading"
			/>
			{message && (
				<p className="text-sm text-fg-default">
					{message}
				</p>
			)}
		</div>
	);
});

