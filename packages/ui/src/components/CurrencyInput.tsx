import * as React from "react";
import { forwardRef } from "react";
import clsx from "clsx";

export interface CurrencyInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "value" | "onChange"> {
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
	/** Currency symbol */
	currencySymbol?: string;
	/** Locale for formatting */
	locale?: string;
	/** Show increment/decrement buttons */
	showButtons?: boolean;
	/** Minimum value */
	min?: number;
	/** Maximum value */
	max?: number;
	/** Step increment/decrement */
	step?: number;
}

export const CurrencyInput = forwardRef<HTMLInputElement, CurrencyInputProps>(function CurrencyInput(
	{
		className,
		label,
		helperText,
		validationState = "none",
		required,
		value,
		onChange,
		currencySymbol = "$",
		locale = "en-US",
		showButtons = true,
		min,
		max,
		step = 0.01,
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
		const newValue = Math.round((currentValue + step) * 100) / 100;
		if (max !== undefined && newValue > max) return;
		onChange?.(newValue);
	};

	const handleDecrement = () => {
		if (disabled) return;
		const currentValue = typeof value === "number" ? value : parseFloat(String(value)) || 0;
		const newValue = Math.round((currentValue - step) * 100) / 100;
		if (min !== undefined && newValue < min) return;
		onChange?.(newValue);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const val = e.target.value;
		// Remove currency symbol and any non-numeric characters except decimal and negative
		const cleaned = val.replace(/[^0-9.-]/g, "");
		if (cleaned === "" || cleaned === "-") {
			onChange?.(cleaned);
		} else {
			const numVal = parseFloat(cleaned);
			if (!isNaN(numVal)) {
				onChange?.(numVal);
			}
		}
	};

	// Format display value
	const displayValue = React.useMemo(() => {
		if (value === "" || value === undefined || value === null) return "";
		const numVal = typeof value === "number" ? value : parseFloat(String(value));
		if (isNaN(numVal)) return "";
		return numVal.toFixed(2);
	}, [value]);

	return (
		<div className="w-full">
			{label && (
				<label className="block text-sm font-medium text-fg-default mb-1.5">
					{label}
					{required && <span className="text-fg-error ml-0.5">*</span>}
				</label>
			)}
			<div className="relative">
				<span className="absolute left-3 top-1/2 -translate-y-1/2 text-fg-default pointer-events-none">
					{currencySymbol}
				</span>
				<input
					ref={ref}
					type="text"
					inputMode="decimal"
					value={displayValue}
					onChange={handleInputChange}
					disabled={disabled}
					required={required}
					className={clsx(
						"w-full h-10 pl-7 pr-3 text-md text-fg-default bg-bg-canvas border rounded",
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

