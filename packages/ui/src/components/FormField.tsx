import * as React from "react";
import { forwardRef } from "react";
import clsx from "clsx";
import { Stack } from "../primitives/Stack";

export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Field label */
	label?: string;
	/** Helper text or error message */
	helperText?: string;
	/** Validation state */
	validationState?: "none" | "invalid" | "valid";
	/** Whether the field is required (shows asterisk) */
	required?: boolean;
	/** Whether to hide the label (still accessible to screen readers) */
	hideLabel?: boolean;
}

export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(function FormField(
	{ className, label, helperText, validationState = "none", required, hideLabel, children, ...rest },
	ref
) {
	const hasError = validationState === "invalid";
	const hasSuccess = validationState === "valid";

	return (
		<Stack ref={ref} gap="1" className={clsx("w-full", className)} {...rest}>
			{label && (
				<label className={clsx(
					"block text-body-semibold text-fg-default",
					hideLabel && "sr-only"
				)}>
					{label}
					{required && <span className="text-state-danger ml-0.5">*</span>}
				</label>
			)}
			{children}
			{helperText && (
				<div
					className={clsx(
						"text-small",
						hasError && "text-state-danger",
						hasSuccess && "text-state-success",
						!hasError && !hasSuccess && "text-fg-secondary"
					)}
				>
					{helperText}
				</div>
			)}
		</Stack>
	);
});

