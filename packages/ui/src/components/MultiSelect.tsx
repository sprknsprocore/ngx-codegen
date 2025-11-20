import * as React from "react";
import { forwardRef, useState, useRef, useEffect } from "react";
import clsx from "clsx";

export interface MultiSelectOption {
	label: string;
	value: string;
	avatar?: string;
	subtitle?: string;
	disabled?: boolean;
}

export interface MultiSelectGroup {
	title?: string;
	badge?: string;
	options: MultiSelectOption[];
}

export interface MultiSelectProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
	/** Input label */
	label?: string;
	/** Helper text or error message */
	helperText?: string;
	/** Validation state */
	validationState?: "none" | "invalid" | "valid";
	/** Whether the label is required (shows asterisk) */
	required?: boolean;
	/** Placeholder text */
	placeholder?: string;
	/** Available options */
	options?: MultiSelectOption[];
	/** Grouped options */
	groups?: MultiSelectGroup[];
	/** Selected values */
	value?: string[];
	/** Change handler */
	onChange?: (value: string[]) => void;
	/** Whether the component is disabled */
	disabled?: boolean;
	/** Maximum number of selections */
	maxSelections?: number;
	/** Message to display in dropdown */
	message?: string;
}

export const MultiSelect = forwardRef<HTMLDivElement, MultiSelectProps>(function MultiSelect(
	{
		className,
		label,
		helperText,
		validationState = "none",
		required,
		placeholder = "Placeholder",
		options = [],
		groups = [],
		value = [],
		onChange,
		disabled,
		maxSelections,
		message,
		...rest
	},
	ref
) {
	const [isOpen, setIsOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const containerRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const hasError = validationState === "invalid";
	const hasSuccess = validationState === "valid";
	const hasGroups = groups.length > 0;

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handleRemove = (valueToRemove: string) => {
		if (disabled) return;
		onChange?.(value.filter((v) => v !== valueToRemove));
	};

	const handleSelect = (selectedValue: string) => {
		if (disabled) return;
		
		if (value.includes(selectedValue)) {
			onChange?.(value.filter((v) => v !== selectedValue));
		} else {
			if (maxSelections && value.length >= maxSelections) return;
			onChange?.([...value, selectedValue]);
		}
	};

	const filterOptions = (opts: MultiSelectOption[]) => {
		if (!searchQuery) return opts;
		return opts.filter((option) =>
			option.label.toLowerCase().includes(searchQuery.toLowerCase())
		);
	};

	const getOptionLabel = (optionValue: string): MultiSelectOption | undefined => {
		if (hasGroups) {
			for (const group of groups) {
				const found = group.options.find((opt) => opt.value === optionValue);
				if (found) return found;
			}
		} else {
			return options.find((opt) => opt.value === optionValue);
		}
		return undefined;
	};

	const renderOption = (option: MultiSelectOption) => {
		const isSelected = value.includes(option.value);

		return (
			<button
				key={option.value}
				type="button"
				onClick={() => handleSelect(option.value)}
				disabled={option.disabled}
				className={clsx(
					"w-full px-3 py-2 text-left text-sm transition-colors",
					"hover:bg-bg-surface focus:outline-none focus:bg-bg-surface",
					"disabled:text-fg-disabled disabled:cursor-not-allowed",
					isSelected && "bg-bg-secondary"
				)}
			>
				<div className="flex items-center gap-2">
					<input
						type="checkbox"
						checked={isSelected}
						onChange={() => {}}
						className="w-4 h-4 rounded border-border-default"
					/>
				{option.avatar && (
					<div className="w-8 h-8 rounded-full bg-bg-tertiary flex items-center justify-center text-fg-default text-xs font-semibold flex-shrink-0">
						{option.avatar}
					</div>
				)}
					<div className="flex-1 min-w-0">
						<div className="text-fg-default">{option.label}</div>
						{option.subtitle && (
							<div className="text-xs text-fg-secondary mt-0.5">{option.subtitle}</div>
						)}
					</div>
				</div>
			</button>
		);
	};

	const allOptions = hasGroups ? groups.flatMap((g) => g.options) : options;

	return (
		<div ref={ref} className={clsx("w-full", className)} {...rest}>
			{label && (
				<label className="block text-sm font-medium text-fg-default mb-1.5">
					{label}
					{required && <span className="text-fg-error ml-0.5">*</span>}
				</label>
			)}

			<div ref={containerRef} className="relative">
				<div
					className={clsx(
						"min-h-10 px-3 py-2 bg-bg-canvas border rounded transition-colors",
						"focus-within:outline-none focus-within:ring-2 focus-within:ring-border-focus focus-within:border-border-focus",
						"disabled:bg-bg-tertiary disabled:cursor-not-allowed",
						hasError && "border-border-error focus-within:ring-border-error focus-within:border-border-error",
						hasSuccess && "border-border-success focus-within:ring-border-success focus-within:border-border-success",
						!hasError && !hasSuccess && "border-border-default hover:border-border-hover"
					)}
				>
					<div className="flex flex-wrap gap-1">
						{value.map((v) => {
							const option = getOptionLabel(v);
							if (!option) return null;

						return (
							<span
								key={v}
								className="inline-flex items-center gap-1 px-2 py-1 bg-bg-tertiary text-fg-brand text-sm rounded"
							>
								{option.label}
								<button
									type="button"
									onClick={() => handleRemove(v)}
									disabled={disabled}
									className="hover:text-fg-brand-hover transition-colors"
									aria-label={`Remove ${option.label}`}
								>
										<svg width="12" height="12" viewBox="0 0 12 12" fill="none">
											<path
												d="M3 3L9 9M3 9L9 3"
												stroke="currentColor"
												strokeWidth="1.5"
												strokeLinecap="round"
											/>
										</svg>
									</button>
								</span>
							);
						})}
						<input
							ref={inputRef}
							type="text"
							placeholder={value.length === 0 ? placeholder : ""}
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							onFocus={() => setIsOpen(true)}
							disabled={disabled}
							className="flex-1 min-w-[120px] bg-transparent outline-none placeholder:text-fg-disabled disabled:cursor-not-allowed"
						/>
					</div>
				</div>

				{/* Dropdown */}
				{isOpen && !disabled && (
					<div className="absolute z-50 w-full mt-1 bg-bg-canvas border border-border-default rounded-lg shadow-2 overflow-hidden">
						{/* Search info message */}
						{message && (
							<div className="px-3 py-2 text-sm text-fg-secondary bg-bg-surface border-b border-border-default">
								{message}
							</div>
						)}

						{/* Options */}
						<div className="max-h-80 overflow-y-auto">
							{hasGroups ? (
								groups.map((group, groupIndex) => {
									const filteredOptions = filterOptions(group.options);
									if (filteredOptions.length === 0) return null;

									return (
										<div key={groupIndex}>
											{group.title && (
												<div className="px-3 py-2 text-xs font-semibold text-fg-secondary bg-bg-surface flex items-center justify-between">
													<span>{group.title}</span>
													{group.badge && (
														<span className="px-2 py-0.5 text-xs bg-bg-tertiary text-fg-brand rounded">
															{group.badge}
														</span>
													)}
												</div>
											)}
											<div className="py-1">
												{filteredOptions.map((option) => renderOption(option))}
											</div>
										</div>
									);
								})
							) : (
								<div className="py-1">
									{filterOptions(allOptions).map((option) => renderOption(option))}
								</div>
							)}
						</div>
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

