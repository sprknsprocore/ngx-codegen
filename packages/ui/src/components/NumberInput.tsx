import * as React from "react";
import { forwardRef, useState } from "react";
import clsx from "clsx";

export interface NumberInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "value" | "onChange"> {
	/** Input label */
	label?: string;
	/** Helper text or error message */
	helperText?: string;
	/** Validation state */
	validationState?: "none" | "invalid" | "valid";
	/** Whether the label is required (shows asterisk) */
	required?: boolean;
	/** Current value */
	value?: number | string;
	/** Change handler */
	onChange?: (value: number | string) => void;
	/** Minimum value */
	min?: number;
	/** Maximum value */
	max?: number;
	/** Step increment/decrement */
	step?: number;
	/** Show increment/decrement buttons */
	showButtons?: boolean;
}

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(function NumberInput(
	{
		className,
		label,
		helperText,
		validationState = "none",
		required,
		value,
		onChange,
		min,
		max,
		step = 1,
		showButtons = true,
		disabled,
		...rest
	},
	ref
) {
	const hasError = validationState === "invalid";
	const hasSuccess = validationState === "valid";

	const handleIncrement = () => {
		if (disabled) return;
		const currentValue = typeof value === "number" ? value : parseFloat(String(value)) || 0;
		const newValue = currentValue + step;
		if (max !== undefined && newValue > max) return;
		onChange?.(newValue);
	};

	const handleDecrement = () => {
		if (disabled) return;
		const currentValue = typeof value === "number" ? value : parseFloat(String(value)) || 0;
		const newValue = currentValue - step;
		if (min !== undefined && newValue < min) return;
		onChange?.(newValue);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const val = e.target.value;
		if (val === "" || val === "-") {
			onChange?.(val);
		} else {
			const numVal = parseFloat(val);
			if (!isNaN(numVal)) {
				onChange?.(numVal);
			}
		}
	};

	return (
		<div className="w-full">
			{label && (
				<label className="block text-sm font-medium text-fg-default mb-1.5">
					{label}
					{required && <span className="text-fg-error ml-0.5">*</span>}
				</label>
			)}
			<div className="relative">
				<input
					ref={ref}
					type="text"
					inputMode="numeric"
					value={value ?? ""}
					onChange={handleInputChange}
					min={min}
					max={max}
					step={step}
					disabled={disabled}
					required={required}
					className={clsx(
						"w-full h-10 px-3 text-md text-fg-default bg-bg-canvas border rounded",
						"transition-colors placeholder:text-fg-disabled",
						"focus:outline-none focus:ring-2 focus:ring-border-focus focus:border-border-focus",
						"disabled:bg-bg-tertiary disabled:text-fg-disabled disabled:cursor-not-allowed",
						hasError && "border-border-error focus:ring-border-error focus:border-border-error",
						hasSuccess && "border-border-success focus:ring-border-success focus:border-border-success",
						!hasError && !hasSuccess && "border-border-default hover:border-border-hover",
						showButtons && "pr-10",
						className
					)}
					{...rest}
				/>
				{showButtons && (
					<div className="absolute right-1 top-1/2 -translate-y-1/2 flex flex-col">
						<button
							type="button"
							onClick={handleIncrement}
							disabled={disabled || (max !== undefined && Number(value) >= max)}
							className={clsx(
								"w-6 h-4 flex items-center justify-center text-fg-secondary hover:text-fg-default",
								"disabled:text-fg-disabled disabled:cursor-not-allowed",
								"transition-colors"
							)}
							aria-label="Increment"
						>
							<svg width="12" height="12" viewBox="0 0 12 12" fill="none">
								<path d="M6 3L6 9M3 6L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
							</svg>
						</button>
						<button
							type="button"
							onClick={handleDecrement}
							disabled={disabled || (min !== undefined && Number(value) <= min)}
							className={clsx(
								"w-6 h-4 flex items-center justify-center text-fg-secondary hover:text-fg-default",
								"disabled:text-fg-disabled disabled:cursor-not-allowed",
								"transition-colors"
							)}
							aria-label="Decrement"
						>
							<svg width="12" height="12" viewBox="0 0 12 12" fill="none">
								<path d="M3 6L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
							</svg>
						</button>
					</div>
				)}
			</div>
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

