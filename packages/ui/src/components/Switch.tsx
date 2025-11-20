import * as React from "react";
import { forwardRef, useId } from "react";
import clsx from "clsx";

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
	/** Label text */
	label?: string;
	/** Size variant */
	size?: "sm" | "md" | "lg";
	/** Whether the switch is checked */
	checked?: boolean;
	/** Default checked state */
	defaultChecked?: boolean;
	/** On change handler */
	onChange?: (checked: boolean) => void;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
	{ className, label, size = "md", checked, defaultChecked, onChange, disabled, id: providedId, ...rest },
	ref
) {
	const generatedId = useId();
	const id = providedId || generatedId;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(event.target.checked);
	};

	const sizeMap: Record<NonNullable<SwitchProps["size"]>, { track: string; thumb: string; translate: string }> = {
		sm: { track: "w-8 h-4", thumb: "w-3 h-3", translate: "translate-x-4" },
		md: { track: "w-10 h-5", thumb: "w-4 h-4", translate: "translate-x-5" },
		lg: { track: "w-12 h-6", thumb: "w-5 h-5", translate: "translate-x-6" },
	};

	const styles = sizeMap[size];

	return (
		<div className={clsx("inline-flex items-center gap-3", className)}>
			<label
				htmlFor={id}
			className={clsx(
				"relative inline-block flex-shrink-0 rounded-full transition-colors cursor-pointer",
				styles.track,
				disabled && "opacity-50 cursor-not-allowed",
				checked || defaultChecked
					? "bg-bg-brand"
					: "bg-bg-tertiary"
			)}
			>
				<input
					ref={ref}
					id={id}
					type="checkbox"
					className="sr-only peer"
					checked={checked}
					defaultChecked={defaultChecked}
					onChange={handleChange}
					disabled={disabled}
					{...rest}
				/>
			<span
				className={clsx(
					"absolute left-0.5 top-1/2 -translate-y-1/2 rounded-full bg-bg-canvas transition-transform",
					"peer-checked:" + styles.translate,
					styles.thumb
				)}
			/>
			</label>
			{label && (
				<label
					htmlFor={id}
					className={clsx(
						"text-sm text-fg-default cursor-pointer select-none",
						disabled && "opacity-50 cursor-not-allowed"
					)}
				>
					{label}
				</label>
			)}
		</div>
	);
});

