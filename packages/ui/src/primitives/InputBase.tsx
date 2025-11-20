import * as React from "react";
import { forwardRef } from "react";
import clsx from "clsx";

export interface InputBaseProps extends React.InputHTMLAttributes<HTMLInputElement> {
	size?: "sm" | "md" | "lg";
	invalid?: boolean;
}

export const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(function InputBase(
	{ className, size = "md", invalid = false, disabled, ...rest },
	ref
) {
	const sizeMap: Record<NonNullable<InputBaseProps["size"]>, string> = {
		sm: "h-8 px-3 text-sm",
		md: "h-9 px-3.5 text-md",
		lg: "h-10 px-4 text-lg",
	};
	return (
		<input
			ref={ref}
			disabled={disabled}
			className={clsx(
				"w-full rounded-md border bg-bg-canvas text-fg-default placeholder:text-fg-muted outline-none transition-colors",
				"border-border-default",
				"focus:ring-2 focus:ring-border-focus focus:border-border-focus",
				disabled && "opacity-50 pointer-events-none",
				invalid && "border-state-danger focus:ring-state-danger focus:border-state-danger",
				sizeMap[size],
				className
			)}
			{...rest}
		/>
	);
});


