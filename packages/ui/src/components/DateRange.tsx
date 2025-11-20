import * as React from "react";
import { forwardRef, useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { Calendar } from "./Calendar";

export interface DateRangeValue {
	from: Date;
	to?: Date;
}

export interface DateRangeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
	/** Selected date range */
	value?: DateRangeValue;
	/** Callback when date range changes */
	onChange?: (range: DateRangeValue | undefined) => void;
	/** Placeholder text for start date */
	placeholderStart?: string;
	/** Placeholder text for end date */
	placeholderEnd?: string;
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
	/** Minimum selectable date */
	minDate?: Date;
	/** Maximum selectable date */
	maxDate?: Date;
	/** Disabled dates */
	disabledDates?: Date[] | ((date: Date) => boolean);
	/** Show preset ranges */
	showPresets?: boolean;
}

export const DateRange = forwardRef<HTMLDivElement, DateRangeProps>(function DateRange(
	{
		className,
		value,
		onChange,
		placeholderStart = "mm / dd / yyyy",
		placeholderEnd = "mm / dd / yyyy",
		label,
		helperText,
		validationState = "none",
		required = false,
		disabled = false,
		minDate,
		maxDate,
		disabledDates,
		showPresets = false,
		...rest
	},
	ref
) {
	const [isOpen, setIsOpen] = useState(false);
	const [startInputValue, setStartInputValue] = useState("");
	const [endInputValue, setEndInputValue] = useState("");
	const [activeInput, setActiveInput] = useState<"start" | "end">("start");
	const containerRef = useRef<HTMLDivElement>(null);
	const hasError = validationState === "error";

	useEffect(() => {
		if (value?.from) {
			setStartInputValue(formatDate(value.from));
		} else {
			setStartInputValue("");
		}
		if (value?.to) {
			setEndInputValue(formatDate(value.to));
		} else {
			setEndInputValue("");
		}
	}, [value]);

	const formatDate = (date: Date): string => {
		const month = String(date.getMonth() + 1).padStart(2, "0");
		const day = String(date.getDate()).padStart(2, "0");
		const year = date.getFullYear();
		return `${month} / ${day} / ${year}`;
	};

	const parseDate = (str: string): Date | null => {
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

	const handleStartInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const rawValue = e.target.value;
		setStartInputValue(rawValue);

		const parsed = parseDate(rawValue);
		if (parsed && !isNaN(parsed.getTime())) {
			onChange?.({ from: parsed, to: value?.to });
		}
	};

	const handleEndInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const rawValue = e.target.value;
		setEndInputValue(rawValue);

		const parsed = parseDate(rawValue);
		if (parsed && !isNaN(parsed.getTime()) && value?.from) {
			onChange?.({ from: value.from, to: parsed });
		}
	};

	const handleStartInputBlur = () => {
		if (startInputValue && value?.from) {
			setStartInputValue(formatDate(value.from));
		}
	};

	const handleEndInputBlur = () => {
		if (endInputValue && value?.to) {
			setEndInputValue(formatDate(value.to));
		}
	};

	const handleCalendarSelect = (date: Date | Date[] | { from: Date; to?: Date } | undefined) => {
		if (date && typeof date === "object" && "from" in date) {
			onChange?.(date.to ? date : undefined);
			if (date.to) {
				setIsOpen(false);
			}
		}
	};

	const handleClear = (e: React.MouseEvent) => {
		e.stopPropagation();
		onChange?.(undefined);
		setStartInputValue("");
		setEndInputValue("");
	};

	const handlePresetClick = (preset: { label: string; getValue: () => DateRangeValue }) => {
		onChange?.(preset.getValue());
		setIsOpen(false);
	};

	const presets = [
		{
			label: "Last 7 days",
			getValue: () => {
				const to = new Date();
				const from = new Date(to);
				from.setDate(from.getDate() - 7);
				return { from, to };
			},
		},
		{
			label: "Last 30 days",
			getValue: () => {
				const to = new Date();
				const from = new Date(to);
				from.setDate(from.getDate() - 30);
				return { from, to };
			},
		},
		{
			label: "This month",
			getValue: () => {
				const now = new Date();
				const from = new Date(now.getFullYear(), now.getMonth(), 1);
				const to = new Date(now.getFullYear(), now.getMonth() + 1, 0);
				return { from, to };
			},
		},
		{
			label: "Last month",
			getValue: () => {
				const now = new Date();
				const from = new Date(now.getFullYear(), now.getMonth() - 1, 1);
				const to = new Date(now.getFullYear(), now.getMonth(), 0);
				return { from, to };
			},
		},
	];

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

	const displayValue = value?.from && value?.to ? `${formatDate(value.from)} - ${formatDate(value.to)}` : "";

	return (
		<div ref={ref} className={clsx("w-full", className)} {...rest}>
			{label && (
				<label className="block text-sm font-medium text-fg-default mb-1.5">
					{label}
					{required && <span className="text-state-danger ml-0.5">*</span>}
				</label>
			)}

			<div ref={containerRef} className="relative">
				<div className="flex gap-2">
					<div className="relative flex-1">
						<input
							type="text"
							value={startInputValue}
							onChange={handleStartInputChange}
							onBlur={handleStartInputBlur}
							onFocus={() => {
								if (!disabled) {
									setActiveInput("start");
									setIsOpen(true);
								}
							}}
							placeholder={placeholderStart}
							disabled={disabled}
							className={clsx(
								"w-full h-9 px-3.5 text-md rounded-md border bg-bg-canvas text-fg-default placeholder:text-fg-muted outline-none transition-colors",
								"focus:ring-2 focus:ring-border-focus focus:border-border-focus",
								hasError && "border-state-danger focus:ring-state-danger focus:border-state-danger",
								!hasError && "border-border-default",
								disabled && "opacity-50 pointer-events-none"
							)}
						/>
					</div>

					<div className="relative flex-1">
						<input
							type="text"
							value={endInputValue}
							onChange={handleEndInputChange}
							onBlur={handleEndInputBlur}
							onFocus={() => {
								if (!disabled) {
									setActiveInput("end");
									setIsOpen(true);
								}
							}}
							placeholder={placeholderEnd}
							disabled={disabled}
							className={clsx(
								"w-full h-9 px-3.5 text-md rounded-md border bg-bg-canvas text-fg-default placeholder:text-fg-muted outline-none transition-colors",
								"focus:ring-2 focus:ring-border-focus focus:border-border-focus",
								hasError && "border-state-danger focus:ring-state-danger focus:border-state-danger",
								!hasError && "border-border-default",
								disabled && "opacity-50 pointer-events-none"
							)}
						/>
					</div>

					{value && !disabled && (
						<button
							type="button"
							onClick={handleClear}
							className="px-3 h-9 hover:bg-bg-surface rounded transition-colors flex items-center"
							aria-label="Clear dates"
						>
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-fg-secondary">
								<path
									d="M12 4L4 12M4 4L12 12"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
								/>
							</svg>
						</button>
					)}
				</div>

				{isOpen && !disabled && (
					<div className="absolute z-50 mt-2">
						<div className="flex gap-4">
							{showPresets && (
								<div className="bg-bg-canvas border border-border-default rounded-lg shadow-2 p-2 w-48">
									<div className="text-xs font-semibold text-fg-secondary px-2 py-1.5">
										Presets
									</div>
									<div className="space-y-1">
										{presets.map((preset) => (
											<button
												key={preset.label}
												type="button"
												onClick={() => handlePresetClick(preset)}
												className="w-full px-2 py-1.5 text-sm text-left hover:bg-bg-surface rounded transition-colors text-fg-default"
											>
												{preset.label}
											</button>
										))}
									</div>
								</div>
							)}
							<Calendar
								mode="range"
								selected={value}
								onSelect={handleCalendarSelect}
								defaultMonth={value?.from || new Date()}
								minDate={minDate}
								maxDate={maxDate}
								disabled={disabledDates}
								numberOfMonths={2}
							/>
						</div>
					</div>
				)}

			{displayValue && (
				<div className="mt-2">
					<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-bg-brand text-fg-onbrand text-sm rounded-full">
						<span>Created: {displayValue}</span>
						{!disabled && (
							<button
								type="button"
								onClick={handleClear}
								className="hover:bg-bg-brand-secondary rounded-full p-0.5 transition-colors"
								aria-label="Clear range"
							>
								<svg
									width="14"
									height="14"
									viewBox="0 0 16 16"
									fill="none"
									className="text-fg-onbrand"
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
					</div>
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

