import * as React from "react";
import { forwardRef, useState, useRef, useEffect } from "react";
import clsx from "clsx";

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "onChange"> {
	/** Current value of the slider */
	value?: number;
	/** Minimum value */
	min?: number;
	/** Maximum value */
	max?: number;
	/** Step increment */
	step?: number;
	/** Callback when value changes */
	onChange?: (value: number) => void;
	/** Show tick marks */
	showTicks?: boolean;
	/** Tick interval (defaults to step) */
	tickInterval?: number;
	/** Show value label above handle */
	showLabel?: boolean;
	/** Custom labels for specific values */
	customLabels?: Record<number, string>;
	/** Show min/max labels */
	showMinMax?: boolean;
}

export const Slider = forwardRef<HTMLInputElement, SliderProps>(function Slider(
	{
		className,
		value = 0,
		min = 0,
		max = 100,
		step = 1,
		onChange,
		showTicks = false,
		tickInterval,
		showLabel = false,
		customLabels,
		showMinMax = true,
		disabled,
		...rest
	},
	ref
) {
	const [currentValue, setCurrentValue] = useState(value);
	const trackRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setCurrentValue(value);
	}, [value]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(e.target.value);
		setCurrentValue(newValue);
		onChange?.(newValue);
	};

	const percentage = ((currentValue - min) / (max - min)) * 100;
	const effectiveTickInterval = tickInterval || step;
	const ticks = showTicks
		? Array.from({ length: Math.floor((max - min) / effectiveTickInterval) + 1 }, (_, i) => min + i * effectiveTickInterval)
		: [];

	return (
		<div className={clsx("w-full", className)}>
			<div className="relative px-1">
				{/* Track background */}
				<div ref={trackRef} className="relative h-1 bg-bg-tertiary rounded-full">
					{/* Track progress */}
					<div
						className="absolute h-full bg-bg-brand rounded-full"
						style={{ width: `${percentage}%` }}
					/>
				</div>

				{/* Ticks */}
				{showTicks && (
					<div className="absolute inset-x-1 top-0 h-1 flex justify-between items-center pointer-events-none">
						{ticks.map((tick) => (
							<div
								key={tick}
								className={clsx(
									"w-0.5 h-2 rounded-full",
									tick <= currentValue ? "bg-bg-brand" : "bg-border-default"
								)}
							/>
						))}
					</div>
				)}

				{/* Range input (invisible but captures interactions) */}
				<input
					ref={ref}
					type="range"
					min={min}
					max={max}
					step={step}
					value={currentValue}
					onChange={handleChange}
					disabled={disabled}
					className={clsx(
						"absolute inset-0 w-full opacity-0 cursor-pointer disabled:cursor-not-allowed",
						"appearance-none"
					)}
					style={{
						WebkitAppearance: "none",
						MozAppearance: "none",
					}}
					{...rest}
				/>

				{/* Thumb */}
				<div
					className={clsx(
						"absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-bg-brand bg-bg-canvas shadow-2 pointer-events-none transition-transform",
						disabled ? "opacity-50" : "hover:scale-110"
					)}
					style={{ left: `calc(${percentage}% - 8px)` }}
				>
					{showLabel && (
						<div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-bg-reversed text-fg-reversed text-sm rounded whitespace-nowrap">
							{currentValue}
						</div>
					)}
				</div>
			</div>

			{/* Labels */}
			{(showMinMax || customLabels) && (
				<div className="relative mt-2 px-1">
					<div className="flex justify-between text-sm text-fg-secondary">
						{showMinMax && <span>{customLabels?.[min] ?? min}</span>}
						{showMinMax && <span>{customLabels?.[max] ?? max}</span>}
					</div>
					{customLabels && (
						<div className="relative h-4">
							{Object.entries(customLabels).map(([val, label]) => {
								const numVal = Number(val);
								const pos = ((numVal - min) / (max - min)) * 100;
								return (
									<span
										key={val}
										className="absolute text-sm text-fg-secondary -translate-x-1/2"
										style={{ left: `${pos}%` }}
									>
										{label}
									</span>
								);
							})}
						</div>
					)}
				</div>
			)}
		</div>
	);
});

