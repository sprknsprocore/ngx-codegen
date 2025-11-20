import * as React from "react";
import { forwardRef } from "react";
import clsx from "clsx";

export interface SegmentedControlOption {
	value: string;
	label: string;
	disabled?: boolean;
}

export interface SegmentedControlProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
	/** Options to display */
	options: SegmentedControlOption[];
	/** Selected value */
	value?: string;
	/** Callback when selection changes */
	onChange?: (value: string) => void;
	/** Size variant */
	size?: "sm" | "md" | "lg";
	/** Full width */
	fullWidth?: boolean;
	/** Disabled state */
	disabled?: boolean;
}

export const SegmentedControl = forwardRef<HTMLDivElement, SegmentedControlProps>(
	function SegmentedControl(
		{
			className,
			options,
			value,
			onChange,
			size = "md",
			fullWidth = false,
			disabled = false,
			...rest
		},
		ref
	) {
		const handleSelect = (optionValue: string, optionDisabled?: boolean) => {
			if (disabled || optionDisabled) return;
			onChange?.(optionValue);
		};

		const sizeClasses = {
			sm: "h-8 px-3 text-sm",
			md: "h-9 px-4 text-md",
			lg: "h-10 px-5 text-lg",
		};

		const selectedIndex = options.findIndex((opt) => opt.value === value);

		return (
			<div
				ref={ref}
				role="radiogroup"
				className={clsx(
					"relative inline-flex items-center bg-bg-surface border border-border-default rounded-md p-0.5",
					fullWidth && "w-full",
					disabled && "opacity-50 pointer-events-none",
					className
				)}
				{...rest}
			>
				{/* Animated background slider */}
				{selectedIndex !== -1 && (
					<div
						className="absolute bg-bg-canvas border border-border-default rounded shadow-1 transition-all duration-200 ease-out"
						style={{
							left: `calc(${(selectedIndex / options.length) * 100}% + 2px)`,
							width: `calc(${100 / options.length}% - 4px)`,
							top: "2px",
							bottom: "2px",
						}}
					/>
				)}

				{/* Options */}
				{options.map((option) => (
					<button
						key={option.value}
						type="button"
						role="radio"
						aria-checked={option.value === value}
						disabled={disabled || option.disabled}
						onClick={() => handleSelect(option.value, option.disabled)}
						className={clsx(
							"relative z-10 flex-1 inline-flex items-center justify-center rounded transition-colors font-medium",
							sizeClasses[size],
							option.value === value
								? "text-fg-default"
								: "text-fg-secondary hover:text-fg-default",
							(disabled || option.disabled) && "cursor-not-allowed",
							!disabled && !option.disabled && "cursor-pointer",
							fullWidth && "flex-1"
						)}
					>
						{option.label}
					</button>
				))}
			</div>
		);
	}
);

