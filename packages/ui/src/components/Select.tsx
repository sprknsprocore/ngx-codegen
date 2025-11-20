import * as React from "react";
import { forwardRef, useState, useRef, useEffect } from "react";
import clsx from "clsx";

export interface SelectOption {
	value: string;
	label: string;
	disabled?: boolean;
}

export interface SelectOptionGroup {
	label: string;
	options: SelectOption[];
}

export interface SelectProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
	/** Label for the select */
	label?: string;
	/** Placeholder text */
	placeholder?: string;
	/** Selected value */
	value?: string;
	/** Options - can be flat array or grouped */
	options?: SelectOption[];
	/** Grouped options */
	groups?: SelectOptionGroup[];
	/** Callback when selection changes */
	onChange?: (value: string) => void;
	/** Helper text or error message */
	helperText?: string;
	/** Validation state */
	validationState?: "none" | "invalid" | "valid";
	/** Whether the field is required */
	required?: boolean;
	/** Disabled state */
	disabled?: boolean;
	/** Enable search/filter */
	searchable?: boolean;
	/** Whether to show clear button */
	clearable?: boolean;
	/** Size variant */
	size?: "sm" | "md" | "lg";
}

export const Select = forwardRef<HTMLDivElement, SelectProps>(function Select(
	{
		className,
		label,
		placeholder = "Select an option",
		value,
		options = [],
		groups = [],
		onChange,
		helperText,
		validationState = "none",
		required,
		disabled,
		searchable = false,
		clearable = false,
		size = "md",
		...rest
	},
	ref
) {
	const [isOpen, setIsOpen] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const [highlightedIndex, setHighlightedIndex] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const hasError = validationState === "invalid";
	const hasSuccess = validationState === "valid";

	// Flatten options from groups or use direct options
	const allOptions = groups.length > 0
		? groups.flatMap(g => g.options)
		: options;

	const selectedOption = allOptions.find(opt => opt.value === value);

	// Filter options based on search
	const filteredOptions = searchQuery
		? allOptions.filter(opt => opt.label.toLowerCase().includes(searchQuery.toLowerCase()))
		: allOptions;

	const filteredGroups = groups.length > 0
		? groups.map(g => ({
			...g,
			options: g.options.filter(opt =>
				searchQuery ? opt.label.toLowerCase().includes(searchQuery.toLowerCase()) : true
			),
		})).filter(g => g.options.length > 0)
		: [];

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
				setIsOpen(false);
				setSearchQuery("");
			}
		};

		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
			return () => document.removeEventListener("mousedown", handleClickOutside);
		}
	}, [isOpen]);

	const handleSelect = (optionValue: string) => {
		onChange?.(optionValue);
		setIsOpen(false);
		setSearchQuery("");
	};

	const handleClear = (e: React.MouseEvent) => {
		e.stopPropagation();
		onChange?.("");
		setSearchQuery("");
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (disabled) return;

		switch (e.key) {
			case "Enter":
			case " ":
				if (!isOpen) {
					setIsOpen(true);
				} else if (filteredOptions[highlightedIndex]) {
					handleSelect(filteredOptions[highlightedIndex].value);
				}
				e.preventDefault();
				break;
			case "ArrowDown":
				setHighlightedIndex(prev =>
					prev < filteredOptions.length - 1 ? prev + 1 : prev
				);
				e.preventDefault();
				break;
			case "ArrowUp":
				setHighlightedIndex(prev => (prev > 0 ? prev - 1 : prev));
				e.preventDefault();
				break;
			case "Escape":
				setIsOpen(false);
				setSearchQuery("");
				break;
		}
	};

	const sizeClasses = {
		sm: "h-8 px-3 text-sm",
		md: "h-9 px-3.5 text-md",
		lg: "h-10 px-4 text-lg",
	};

	return (
		<div ref={containerRef} className={clsx("relative w-full", className)} {...rest}>
			{label && (
				<label className="block text-sm font-medium text-fg-default mb-1.5">
					{label}
					{required && <span className="text-state-danger ml-0.5">*</span>}
				</label>
			)}

			{/* Trigger */}
			<div
				ref={ref}
				role="button"
				tabIndex={disabled ? -1 : 0}
				aria-expanded={isOpen}
				aria-haspopup="listbox"
				onKeyDown={handleKeyDown}
				onClick={() => !disabled && setIsOpen(!isOpen)}
				className={clsx(
					"w-full rounded-md border bg-bg-canvas text-fg-default cursor-pointer transition-colors",
					"flex items-center justify-between gap-2",
					sizeClasses[size],
					"border-border-default",
					"focus:outline-none focus:ring-2 focus:ring-border-focus focus:border-border-focus",
					disabled && "opacity-50 pointer-events-none cursor-not-allowed",
					hasError && "border-state-danger focus:ring-state-danger focus:border-state-danger",
					hasSuccess && "border-state-success focus:ring-state-success focus:border-state-success",
					isOpen && "ring-2 ring-border-focus border-border-focus"
				)}
			>
				<span className={clsx(!selectedOption && "text-fg-muted")}>
					{selectedOption?.label || placeholder}
				</span>
				<div className="flex items-center gap-1">
					{clearable && value && (
						<button
							type="button"
							onClick={handleClear}
							className="p-0.5 hover:bg-bg-surface rounded transition-colors"
							aria-label="Clear selection"
						>
							<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					)}
					<svg
						className={clsx("w-4 h-4 transition-transform", isOpen && "rotate-180")}
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
					</svg>
				</div>
			</div>

			{/* Dropdown */}
			{isOpen && (
				<div className="absolute z-50 w-full mt-1 bg-bg-canvas border border-border-default rounded-md shadow-2 max-h-60 overflow-hidden">
					{searchable && (
						<div className="p-2 border-b border-border-default">
							<div className="relative">
								<input
									ref={inputRef}
									type="text"
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									placeholder="Search..."
									className="w-full h-8 px-3 pr-8 text-sm border border-border-default rounded-md bg-bg-canvas focus:outline-none focus:ring-2 focus:ring-border-focus"
									autoFocus
								/>
								<svg
									className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-fg-muted"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
								</svg>
							</div>
						</div>
					)}

					<div className="overflow-y-auto max-h-52" role="listbox">
						{groups.length > 0 ? (
							filteredGroups.length > 0 ? (
								filteredGroups.map((group, groupIdx) => (
									<div key={groupIdx}>
										<div className="px-3 py-1.5 text-sm font-semibold text-fg-secondary bg-bg-surface">
											{group.label}
										</div>
										{group.options.map((option) => (
											<div
												key={option.value}
												role="option"
												aria-selected={option.value === value}
												onClick={() => !option.disabled && handleSelect(option.value)}
												className={clsx(
													"px-3 py-2 cursor-pointer transition-colors",
													option.value === value && "bg-bg-brand text-fg-onbrand",
													option.value !== value && "hover:bg-bg-surface",
													option.disabled && "opacity-50 cursor-not-allowed"
												)}
											>
												{option.label}
											</div>
										))}
									</div>
								))
							) : (
								<div className="px-3 py-2 text-sm text-fg-muted">No results found</div>
							)
						) : filteredOptions.length > 0 ? (
							filteredOptions.map((option) => (
								<div
									key={option.value}
									role="option"
									aria-selected={option.value === value}
									onClick={() => !option.disabled && handleSelect(option.value)}
									className={clsx(
										"px-3 py-2 cursor-pointer transition-colors",
										option.value === value && "bg-bg-brand text-fg-onbrand",
										option.value !== value && "hover:bg-bg-surface",
										option.disabled && "opacity-50 cursor-not-allowed"
									)}
								>
									{option.label}
								</div>
							))
						) : (
							<div className="px-3 py-2 text-sm text-fg-muted">No options available</div>
						)}
					</div>
				</div>
			)}

			{helperText && (
				<div
					className={clsx(
						"mt-1.5 text-sm",
						hasError && "text-state-danger",
						hasSuccess && "text-state-success",
						!hasError && !hasSuccess && "text-fg-muted"
					)}
				>
					{helperText}
				</div>
			)}
		</div>
	);
});

