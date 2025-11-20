import * as React from "react";
import { forwardRef, useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { Calendar } from "./Calendar";

export interface DateSelectProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
	/** Selected date */
	value?: Date;
	/** Callback when date changes */
	onChange?: (date: Date | undefined) => void;
	/** Placeholder text */
	placeholder?: string;
	/** Input label */
	label?: string;
	/** Helper text or error message */
	helperText?: string;
	/** Validation state */
	validationState?: "none" | "error" | "success";
	/** Whether the field is required */
	required?: boolean;
	/** Whether the field is disabled */
	disabled?: boolean;
	/** Date format string */
	format?: string;
	/** Minimum selectable date */
	minDate?: Date;
	/** Maximum selectable date */
	maxDate?: Date;
	/** Disabled dates */
	disabledDates?: Date[] | ((date: Date) => boolean);
}

export const DateSelect = forwardRef<HTMLDivElement, DateSelectProps>(function DateSelect(
	{
		className,
		value,
		onChange,
		placeholder = "mm / dd / yyyy",
		label,
		helperText,
		validationState = "none",
		required = false,
		disabled = false,
		format = "MM/DD/YYYY",
		minDate,
		maxDate,
		disabledDates,
		...rest
	},
	ref
) {
	const [isOpen, setIsOpen] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const containerRef = useRef<HTMLDivElement>(null);
	const hasError = validationState === "error";

	useEffect(() => {
		if (value) {
			setInputValue(formatDate(value));
		} else {
			setInputValue("");
		}
	}, [value]);

	const formatDate = (date: Date): string => {
		const month = String(date.getMonth() + 1).padStart(2, "0");
		const day = String(date.getDate()).padStart(2, "0");
		const year = date.getFullYear();
		return `${month} / ${day} / ${year}`;
	};

	const parseDate = (str: string): Date | null => {
		// Remove spaces and slashes for parsing
		const cleaned = str.replace(/[\s/]/g, "");
		if (cleaned.length !== 8) return null;

		const month = parseInt(cleaned.substring(0, 2), 10);
		const day = parseInt(cleaned.substring(2, 4), 10);
		const year = parseInt(cleaned.substring(4, 8), 10);

		if (isNaN(month) || isNaN(day) || isNaN(year)) return null;
		if (month < 1 || month > 12) return null;
		if (day < 1 || day > 31) return null;

		return new Date(year, month - 1, day);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const rawValue = e.target.value;
		setInputValue(rawValue);

		// Try to parse the date
		const parsed = parseDate(rawValue);
		if (parsed && !isNaN(parsed.getTime())) {
			onChange?.(parsed);
		}
	};

	const handleInputBlur = () => {
		if (inputValue && value) {
			setInputValue(formatDate(value));
		}
	};

	const handleCalendarSelect = (date: Date | Date[] | { from: Date; to?: Date } | undefined) => {
		if (date instanceof Date) {
			onChange?.(date);
			setIsOpen(false);
		}
	};

	const handleClear = (e: React.MouseEvent) => {
		e.stopPropagation();
		onChange?.(undefined);
		setInputValue("");
	};

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen]);

	return (
		<div ref={ref} className={clsx("w-full", className)} {...rest}>
			{label && (
				<label className="block text-sm font-medium text-fg-default mb-1.5">
					{label}
					{required && <span className="text-state-danger ml-0.5">*</span>}
				</label>
			)}

			<div ref={containerRef} className="relative">
				<div className="relative">
					<input
						type="text"
						value={inputValue}
						onChange={handleInputChange}
						onBlur={handleInputBlur}
						onFocus={() => !disabled && setIsOpen(true)}
						placeholder={placeholder}
						disabled={disabled}
						className={clsx(
							"w-full h-9 pl-3.5 pr-20 text-md rounded-md border bg-bg-canvas text-fg-default placeholder:text-fg-muted outline-none transition-colors",
							"focus:ring-2 focus:ring-border-focus focus:border-border-focus",
							hasError && "border-state-danger focus:ring-state-danger focus:border-state-danger",
							!hasError && "border-border-default",
							disabled && "opacity-50 pointer-events-none"
						)}
					/>
					<div className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center gap-1">
						{value && !disabled && (
							<button
								type="button"
								onClick={handleClear}
								className="p-1.5 hover:bg-bg-surface rounded transition-colors"
								aria-label="Clear date"
							>
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									className="text-fg-secondary"
								>
									<path
										d="M12 4L4 12M4 4L12 12"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
									/>
								</svg>
							</button>
						)}
						<button
							type="button"
							onClick={() => !disabled && setIsOpen(!isOpen)}
							disabled={disabled}
							className="p-1.5 hover:bg-bg-surface rounded transition-colors"
							aria-label="Open calendar"
						>
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								className="text-fg-secondary"
							>
								<rect
									x="2"
									y="3"
									width="12"
									height="11"
									rx="1"
									stroke="currentColor"
									strokeWidth="1.5"
								/>
								<path d="M2 6H14" stroke="currentColor" strokeWidth="1.5" />
								<path d="M5 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
								<path d="M11 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
							</svg>
						</button>
					</div>
				</div>

				{isOpen && !disabled && (
					<div className="absolute z-50 mt-2">
						<Calendar
							mode="single"
							selected={value}
							onSelect={handleCalendarSelect}
							defaultMonth={value || new Date()}
							minDate={minDate}
							maxDate={maxDate}
							disabled={disabledDates}
						/>
					</div>
				)}
			</div>

			{helperText && (
				<div
					className={clsx(
						"mt-1.5 text-sm",
						hasError && "text-state-danger",
						!hasError && "text-fg-muted"
					)}
				>
					{helperText}
				</div>
			)}
		</div>
	);
});

