import * as React from "react";
import { forwardRef, useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { Pill } from "./Pill";
import { Button } from "./Button";

export interface PillSelectOption {
	value: string;
	label: string;
	disabled?: boolean;
	/**
	 * Color tone for the pill when selected
	 */
	tone?: "neutral" | "blue" | "green" | "orange" | "red" | "yellow" | "cyan" | "magenta" | "purple";
}

export interface PillSelectProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
	/** Label for the select */
	label?: string;
	/** Placeholder text */
	placeholder?: string;
	/** Selected values */
	value?: string[];
	/** Options */
	options?: PillSelectOption[];
	/** Callback when selection changes */
	onChange?: (value: string[]) => void;
	/** Helper text or error message */
	helperText?: string;
	/** Validation state */
	validationState?: "none" | "invalid" | "valid";
	/** Whether the field is required */
	required?: boolean;
	/** Disabled state */
	disabled?: boolean;
	/** Whether to show search */
	searchable?: boolean;
	/** Size variant */
	size?: "sm" | "md" | "lg";
	/** Maximum number of pills to show before "+N" indicator */
	maxVisiblePills?: number;
	/** Show action buttons in dropdown */
	showActions?: boolean;
}

export const PillSelect = forwardRef<HTMLDivElement, PillSelectProps>(function PillSelect(
	{
		className,
		label,
		placeholder = "Select values",
		value = [],
		options = [],
		onChange,
		helperText,
		validationState = "none",
		required,
		disabled,
		searchable = true,
		size = "md",
		maxVisiblePills,
		showActions = true,
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

	const selectedOptions = options.filter((opt) => value.includes(opt.value));
	const visiblePills = maxVisiblePills
		? selectedOptions.slice(0, maxVisiblePills)
		: selectedOptions;
	const hiddenCount = maxVisiblePills
		? Math.max(0, selectedOptions.length - maxVisiblePills)
		: 0;

	// Filter options based on search
	const filteredOptions = searchQuery
		? options.filter((opt) => opt.label.toLowerCase().includes(searchQuery.toLowerCase()))
		: options;

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

	const handleToggle = (optionValue: string) => {
		const newValue = value.includes(optionValue)
			? value.filter((v) => v !== optionValue)
			: [...value, optionValue];
		onChange?.(newValue);
	};

	const handleRemove = (optionValue: string) => {
		const newValue = value.filter((v) => v !== optionValue);
		onChange?.(newValue);
	};

	const handleClearAll = () => {
		onChange?.([]);
	};

	const handleSelectAll = () => {
		onChange?.(options.filter((opt) => !opt.disabled).map((opt) => opt.value));
	};

	const sizeClasses = {
		sm: "min-h-8 px-2 py-1 text-sm",
		md: "min-h-9 px-3 py-1.5 text-md",
		lg: "min-h-10 px-4 py-2 text-lg",
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
			onClick={() => !disabled && setIsOpen(!isOpen)}
			className={clsx(
				"w-full rounded-md border bg-bg-canvas text-fg-default cursor-pointer transition-colors",
				"flex flex-wrap items-center gap-1.5",
				sizeClasses[size],
				"border-border-default",
				"focus:outline-none focus:ring-2 focus:ring-blue-50 focus:border-blue-50",
				disabled && "opacity-50 pointer-events-none cursor-not-allowed",
				hasError && "border-state-danger focus:ring-state-danger focus:border-state-danger",
				hasSuccess && "border-state-success focus:ring-state-success focus:border-state-success",
					isOpen && "ring-2 ring-blue-50 border-blue-50"
				)}
			>
				{visiblePills.length > 0 ? (
					<>
						{visiblePills.map((option) => (
							<Pill
								key={option.value}
								size="sm"
								tone={option.tone || "blue"}
								removable
								onRemove={(e) => {
									e.stopPropagation();
									handleRemove(option.value);
								}}
							>
								{option.label}
							</Pill>
						))}
						{hiddenCount > 0 && (
							<span className="text-sm text-fg-secondary font-semibold">
								+{hiddenCount}
							</span>
						)}
					</>
				) : (
					<span className="text-fg-secondary">{placeholder}</span>
				)}
				<div className="ml-auto flex items-center gap-1">
					{value.length > 0 && (
						<button
							type="button"
							onClick={(e) => {
								e.stopPropagation();
								handleClearAll();
							}}
							className="p-0.5 hover:bg-bg-surface rounded transition-colors"
							aria-label="Clear all"
						>
							<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					)}
					<svg
						className={clsx("w-4 h-4 transition-transform flex-shrink-0", isOpen && "rotate-180")}
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</div>
			</div>

		{/* Dropdown */}
		{isOpen && (
			<div className="absolute z-50 w-full mt-1 bg-bg-canvas border border-border-default rounded-md shadow-2 max-h-80 overflow-hidden flex flex-col">
				{searchable && (
					<div className="p-2 border-b border-border-default flex-shrink-0">
						<div className="relative">
							<input
								ref={inputRef}
								type="text"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								placeholder="Search"
								className="w-full h-8 px-3 pr-8 text-sm border border-border-default rounded-md bg-bg-canvas focus:outline-none focus:ring-2 focus:ring-blue-50"
								autoFocus
							/>
								<svg
									className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-fg-secondary"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
							</div>
						</div>
					)}

					<div className="overflow-y-auto flex-1" role="listbox">
						{filteredOptions.length > 0 ? (
							filteredOptions.map((option) => {
								const isSelected = value.includes(option.value);
								return (
									<div
										key={option.value}
										role="option"
										aria-selected={isSelected}
										onClick={() => !option.disabled && handleToggle(option.value)}
										className={clsx(
											"px-3 py-2 cursor-pointer transition-colors flex items-center gap-2",
											"hover:bg-bg-surface",
											option.disabled && "opacity-50 cursor-not-allowed"
										)}
									>
									<div
										className={clsx(
											"w-4 h-4 rounded border flex items-center justify-center flex-shrink-0",
											isSelected
												? "bg-bg-brand border-bg-brand"
												: "bg-bg-canvas border-border-default"
										)}
									>
										{isSelected && (
											<svg
												className="w-3 h-3 text-fg-onbrand"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={3}
														d="M5 13l4 4L19 7"
													/>
												</svg>
											)}
										</div>
										<span className="text-sm text-fg-default">{option.label}</span>
									</div>
								);
							})
						) : (
							<div className="px-3 py-2 text-sm text-fg-secondary">No results found</div>
						)}
					</div>

					{showActions && (
						<div className="p-2 border-t border-border-default flex justify-end gap-2 flex-shrink-0">
							<Button size="sm" emphasis="secondary" onClick={handleClearAll}>
								Clear
							</Button>
							<Button size="sm" emphasis="secondary" onClick={handleSelectAll}>
								Select All
							</Button>
							<Button size="sm" onClick={() => setIsOpen(false)}>
								Done
							</Button>
						</div>
					)}
				</div>
			)}

		{helperText && (
			<div
				className={clsx(
					"mt-1.5 text-sm",
					hasError && "text-state-danger",
					hasSuccess && "text-state-success",
					!hasError && !hasSuccess && "text-fg-secondary"
				)}
			>
				{helperText}
			</div>
		)}
		</div>
	);
});

