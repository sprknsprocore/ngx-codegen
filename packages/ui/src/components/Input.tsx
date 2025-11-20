import * as React from "react";
import { forwardRef } from "react";
import clsx from "clsx";
import { InputBase, type InputBaseProps } from "../primitives/InputBase";

export interface InputProps extends Omit<InputBaseProps, "invalid"> {
	/** Input label */
	label?: string;
	/** Helper text or error message */
	helperText?: string;
	/** Validation state */
	validationState?: "none" | "invalid" | "valid";
	/** Whether the label is required (shows asterisk) */
	required?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
	{ className, label, helperText, validationState = "none", required, ...rest },
	ref
) {
	const hasError = validationState === "invalid";
	const hasSuccess = validationState === "valid";

	return (
		<div className="w-full">
			{label && (
				<label className="block text-sm font-medium text-fg-default mb-1.5">
					{label}
					{required && <span className="text-state-danger ml-0.5">*</span>}
				</label>
			)}
			<InputBase
				ref={ref}
				className={clsx(
					hasError && "border-state-danger focus:ring-state-danger focus:border-state-danger",
					hasSuccess && "border-state-success focus:ring-state-success focus:border-state-success",
					className
				)}
				invalid={hasError}
				required={required}
				{...rest}
			/>
			{helperText && (
				<div
					className={clsx(
						"mt-1.5 text-sm",
						hasError && "text-state-danger",
						hasSuccess && "text-state-success",
						!hasError && !hasSuccess && "text-fg-muted"
					)}
				>
					{helperText}
				</div>
			)}
		</div>
	);
});


