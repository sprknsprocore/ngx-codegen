import * as React from "react";
import { forwardRef, useState } from "react";
import clsx from "clsx";

export interface CalendarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
	/** Selection mode: single date, date range, or multiple dates */
	mode?: "single" | "range" | "multiple";
	/** Selected date(s) */
	selected?: Date | Date[] | { from: Date; to?: Date };
	/** Callback when selection changes */
	onSelect?: (date: Date | Date[] | { from: Date; to?: Date } | undefined) => void;
	/** Disabled dates */
	disabled?: Date[] | ((date: Date) => boolean);
	/** Minimum selectable date */
	minDate?: Date;
	/** Maximum selectable date */
	maxDate?: Date;
	/** Initial month to display */
	defaultMonth?: Date;
	/** Show month/year dropdowns */
	showMonthYearDropdowns?: boolean;
	/** Number of months to display */
	numberOfMonths?: 1 | 2;
}

const MONTHS = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(function Calendar(
	{
		className,
		mode = "single",
		selected,
		onSelect,
		disabled,
		minDate,
		maxDate,
		defaultMonth,
		showMonthYearDropdowns = true,
		numberOfMonths = 1,
		...rest
	},
	ref
) {
	const [currentMonth, setCurrentMonth] = useState(defaultMonth || new Date());

	const isDateDisabled = (date: Date): boolean => {
		if (minDate && date < minDate) return true;
		if (maxDate && date > maxDate) return true;
		if (Array.isArray(disabled)) {
			return disabled.some((d) => isSameDay(d, date));
		}
		if (typeof disabled === "function") {
			return disabled(date);
		}
		return false;
	};

	const isSameDay = (date1: Date, date2: Date): boolean => {
		return (
			date1.getDate() === date2.getDate() &&
			date1.getMonth() === date2.getMonth() &&
			date1.getFullYear() === date2.getFullYear()
		);
	};

	const isDateSelected = (date: Date): boolean => {
		if (!selected) return false;

		if (mode === "single" && selected instanceof Date) {
			return isSameDay(selected, date);
		}

		if (mode === "multiple" && Array.isArray(selected)) {
			return selected.some((d) => isSameDay(d, date));
		}

		if (mode === "range" && selected && typeof selected === "object" && "from" in selected) {
			const { from, to } = selected;
			if (isSameDay(from, date)) return true;
			if (to && isSameDay(to, date)) return true;
			if (to && date > from && date < to) return true;
		}

		return false;
	};

	const isInRange = (date: Date): boolean => {
		if (mode !== "range" || !selected || typeof selected !== "object" || !("from" in selected)) {
			return false;
		}
		const { from, to } = selected;
		if (!to) return false;
		return date > from && date < to;
	};

	const isRangeStart = (date: Date): boolean => {
		if (mode !== "range" || !selected || typeof selected !== "object" || !("from" in selected)) {
			return false;
		}
		return isSameDay(selected.from, date);
	};

	const isRangeEnd = (date: Date): boolean => {
		if (mode !== "range" || !selected || typeof selected !== "object" || !("from" in selected)) {
			return false;
		}
		return selected.to ? isSameDay(selected.to, date) : false;
	};

	const handleDateClick = (date: Date) => {
		if (isDateDisabled(date)) return;

		if (mode === "single") {
			onSelect?.(date);
		} else if (mode === "multiple") {
			const currentSelected = (Array.isArray(selected) ? selected : []) as Date[];
			const isAlreadySelected = currentSelected.some((d) => isSameDay(d, date));

			if (isAlreadySelected) {
				onSelect?.(currentSelected.filter((d) => !isSameDay(d, date)));
			} else {
				onSelect?.([...currentSelected, date]);
			}
		} else if (mode === "range") {
			const currentRange = selected && typeof selected === "object" && "from" in selected ? selected : null;

			if (!currentRange || (currentRange.from && currentRange.to)) {
				// Start new range
				onSelect?.({ from: date });
			} else if (currentRange.from && !currentRange.to) {
				// Complete range
				if (date < currentRange.from) {
					onSelect?.({ from: date, to: currentRange.from });
				} else {
					onSelect?.({ from: currentRange.from, to: date });
				}
			}
		}
	};

	const getDaysInMonth = (month: Date): Date[] => {
		const year = month.getFullYear();
		const monthIndex = month.getMonth();
		const firstDay = new Date(year, monthIndex, 1);
		const lastDay = new Date(year, monthIndex + 1, 0);

		const days: Date[] = [];

		// Add empty cells for days before the first day of the month
		const firstDayOfWeek = firstDay.getDay();
		for (let i = 0; i < firstDayOfWeek; i++) {
			days.push(new Date(year, monthIndex, -(firstDayOfWeek - i - 1)));
		}

		// Add all days in the month
		for (let day = 1; day <= lastDay.getDate(); day++) {
			days.push(new Date(year, monthIndex, day));
		}

		return days;
	};

	const goToPreviousMonth = () => {
		setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
	};

	const goToNextMonth = () => {
		setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
	};

	const renderMonth = (monthDate: Date, monthIndex: number) => {
		const days = getDaysInMonth(monthDate);
		const year = monthDate.getFullYear();
		const monthIdx = monthDate.getMonth();

		return (
			<div key={monthIndex} className="flex flex-col">
				{/* Header */}
				<div className="flex items-center justify-between px-3 py-2 border-b border-border-default">
					{monthIndex === 0 && (
						<button
							type="button"
							onClick={goToPreviousMonth}
							className="p-1 hover:bg-bg-surface rounded transition-colors"
							aria-label="Previous month"
						>
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-fg-default">
								<path
									d="M10 12L6 8L10 4"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>
					)}

					{showMonthYearDropdowns ? (
						<div className="flex items-center gap-2">
							<select
								value={monthIdx}
								onChange={(e) =>
									setCurrentMonth(new Date(year, parseInt(e.target.value), 1))
								}
								className="h-8 px-2 text-sm bg-bg-canvas border border-border-default rounded focus:outline-none focus:ring-2 focus:ring-border-focus"
							>
								{MONTHS.map((month, idx) => (
									<option key={idx} value={idx}>
										{month}
									</option>
								))}
							</select>
							<select
								value={year}
								onChange={(e) =>
									setCurrentMonth(new Date(parseInt(e.target.value), monthIdx, 1))
								}
								className="h-8 px-2 text-sm bg-bg-canvas border border-border-default rounded focus:outline-none focus:ring-2 focus:ring-border-focus"
							>
								{Array.from({ length: 20 }, (_, i) => year - 10 + i).map((y) => (
									<option key={y} value={y}>
										{y}
									</option>
								))}
							</select>
						</div>
					) : (
						<div className="text-sm font-semibold text-fg-default">
							{MONTHS[monthIdx]} {year}
						</div>
					)}

					{(monthIndex === numberOfMonths - 1 || numberOfMonths === 1) && (
						<button
							type="button"
							onClick={goToNextMonth}
							className="p-1 hover:bg-bg-surface rounded transition-colors"
							aria-label="Next month"
						>
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-fg-default">
								<path
									d="M6 4L10 8L6 12"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>
					)}
				</div>

				{/* Weekday headers */}
				<div className="grid grid-cols-7 gap-1 px-3 py-2 text-center">
					{WEEKDAYS.map((day) => (
						<div key={day} className="text-xs font-semibold text-fg-secondary">
							{day}
						</div>
					))}
				</div>

				{/* Days grid */}
				<div className="grid grid-cols-7 gap-1 px-3 pb-3">
					{days.map((date, idx) => {
						const isCurrentMonth = date.getMonth() === monthIdx;
						const isSelected = isDateSelected(date);
						const isDisabled = isDateDisabled(date);
						const isToday = isSameDay(date, new Date());
						const inRange = isInRange(date);
						const rangeStart = isRangeStart(date);
						const rangeEnd = isRangeEnd(date);

						return (
							<button
								key={idx}
								type="button"
								onClick={() => handleDateClick(date)}
								disabled={isDisabled}
							className={clsx(
								"h-8 w-8 flex items-center justify-center text-sm rounded transition-colors relative",
								isCurrentMonth ? "text-fg-default" : "text-fg-muted",
								!isDisabled && !isSelected && "hover:bg-bg-surface",
								isSelected &&
									"bg-bg-brand text-fg-onbrand hover:bg-bg-brand-hover font-semibold",
								inRange && !isSelected && "bg-bg-tertiary",
								rangeStart && "rounded-r-none",
								rangeEnd && "rounded-l-none",
								isToday && !isSelected && "border border-border-focus",
								isDisabled && "opacity-40 cursor-not-allowed"
							)}
						>
								{date.getDate()}
							</button>
						);
					})}
				</div>
			</div>
		);
	};

	const months = Array.from({ length: numberOfMonths }, (_, i) => {
		return new Date(currentMonth.getFullYear(), currentMonth.getMonth() + i, 1);
	});

	return (
		<div
			ref={ref}
			className={clsx(
				"bg-bg-canvas border border-border-default rounded-lg shadow-2 overflow-hidden inline-block",
				className
			)}
			{...rest}
		>
			<div className={clsx("flex", numberOfMonths > 1 && "divide-x divide-border-default")}>
				{months.map((month, idx) => renderMonth(month, idx))}
			</div>
		</div>
	);
});

