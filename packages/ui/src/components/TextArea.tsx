import * as React from "react";
import { forwardRef } from "react";
import clsx from "clsx";

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	/** Input label */
	label?: string;
	/** Helper text or error message */
	helperText?: string;
	/** Validation state */
	validationState?: "none" | "invalid" | "valid";
	/** Whether the label is required (shows asterisk) */
	required?: boolean;
	/** Size variant */
	size?: "sm" | "md" | "lg";
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
	{ className, label, helperText, validationState = "none", required, size = "md", disabled, ...rest },
	ref
) {
	const hasError = validationState === "invalid";
	const hasSuccess = validationState === "valid";

	const sizeMap: Record<NonNullable<TextAreaProps["size"]>, string> = {
		sm: "p-2 text-sm min-h-20",
		md: "p-3 text-md min-h-24",
		lg: "p-4 text-lg min-h-32",
	};

	return (
		<div className="w-full">
			{label && (
				<label className="block text-sm font-medium text-fg-default mb-1.5">
					{label}
					{required && <span className="text-fg-error ml-0.5">*</span>}
				</label>
			)}
			<textarea
				ref={ref}
				disabled={disabled}
				className={clsx(
					"w-full rounded-sm border bg-bg-canvas text-fg-default placeholder:text-fg-secondary outline-none transition-colors resize-y",
					"border-border-default",
					"focus:ring-2 focus:ring-border-focus focus:border-border-focus",
					disabled && "opacity-50 pointer-events-none bg-bg-tertiary",
					hasError && "border-border-error focus:ring-border-error focus:border-border-error",
					hasSuccess && "border-border-success focus:ring-border-success focus:border-border-success",
					sizeMap[size],
					className
				)}
				required={required}
				{...rest}
			/>
			{helperText && (
				<div
					className={clsx(
						"mt-1.5 text-sm",
						hasError && "text-fg-error",
						hasSuccess && "text-fg-success",
						!hasError && !hasSuccess && "text-fg-secondary"
					)}
				>
					{helperText}
				</div>
			)}
		</div>
	);
});

