import * as React from "react";
import { forwardRef } from "react";
import clsx from "clsx";

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
	/** Label text */
	label?: string;
	/** Helper text */
	helperText?: string;
	/** Validation state */
	validationState?: "none" | "invalid" | "valid";
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
	{
		className,
		label,
		helperText,
		validationState = "none",
		disabled,
		checked,
		id,
		...rest
	},
	ref
) {
	const hasError = validationState === "invalid";
	const hasSuccess = validationState === "valid";
	const inputId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;

	return (
		<div className={clsx("flex items-start gap-2", className)}>
			<div className="relative flex items-center justify-center mt-0.5">
				<input
					ref={ref}
					type="radio"
					id={inputId}
					checked={checked}
					disabled={disabled}
					className={clsx(
						"peer appearance-none w-4 h-4 border-2 rounded-full cursor-pointer transition-colors",
						"border-border-default bg-bg-canvas",
						"checked:border-bg-brand checked:bg-bg-brand",
						"focus:outline-none focus:ring-2 focus:ring-border-focus focus:ring-offset-1",
						disabled && "opacity-50 cursor-not-allowed",
						hasError && "border-state-danger checked:border-state-danger checked:bg-state-danger",
						hasSuccess && "border-state-success checked:border-state-success checked:bg-state-success"
					)}
					{...rest}
				/>
				{/* Inner dot */}
				<div
					className={clsx(
						"absolute w-2 h-2 rounded-full bg-bg-canvas pointer-events-none transition-opacity",
						checked ? "opacity-100" : "opacity-0"
					)}
				/>
			</div>

			{(label || helperText) && (
				<div className="flex-1">
					{label && (
						<label
							htmlFor={inputId}
							className={clsx(
								"block text-sm font-medium text-fg-default cursor-pointer",
								disabled && "opacity-50 cursor-not-allowed"
							)}
						>
							{label}
						</label>
					)}
					{helperText && (
						<p
							className={clsx(
								"text-sm mt-0.5",
								hasError && "text-state-danger",
								hasSuccess && "text-state-success",
								!hasError && !hasSuccess && "text-fg-muted"
							)}
						>
							{helperText}
						</p>
					)}
				</div>
			)}
		</div>
	);
});

export interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
	/** Radio group name */
	name: string;
	/** Selected value */
	value?: string;
	/** Callback when selection changes */
	onChange?: (value: string) => void;
	/** Radio options */
	options: Array<{
		value: string;
		label: string;
		helperText?: string;
		disabled?: boolean;
	}>;
	/** Validation state */
	validationState?: "none" | "invalid" | "valid";
	/** Disabled state for entire group */
	disabled?: boolean;
	/** Orientation */
	orientation?: "vertical" | "horizontal";
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(function RadioGroup(
	{
		className,
		name,
		value,
		onChange,
		options,
		validationState = "none",
		disabled = false,
		orientation = "vertical",
		...rest
	},
	ref
) {
	const handleChange = (optionValue: string) => {
		onChange?.(optionValue);
	};

	return (
		<div
			ref={ref}
			role="radiogroup"
			className={clsx(
				"flex",
				orientation === "vertical" ? "flex-col gap-3" : "flex-row flex-wrap gap-4",
				className
			)}
			{...rest}
		>
			{options.map((option) => (
				<Radio
					key={option.value}
					name={name}
					value={option.value}
					checked={value === option.value}
					onChange={() => handleChange(option.value)}
					label={option.label}
					helperText={option.helperText}
					disabled={disabled || option.disabled}
					validationState={validationState}
				/>
			))}
		</div>
	);
});

