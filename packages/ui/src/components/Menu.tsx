import * as React from "react";
import { forwardRef, useState } from "react";
import clsx from "clsx";

export interface MenuOption {
	label: string;
	value: string;
	avatar?: string;
	subtitle?: string;
	icon?: React.ReactNode;
	disabled?: boolean;
	onClick?: () => void;
}

export interface MenuGroup {
	title?: string;
	options: MenuOption[];
	badge?: string;
}

export interface MenuProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
	/** Menu items - can be flat array or grouped */
	items?: MenuOption[];
	/** Grouped menu items */
	groups?: MenuGroup[];
	/** Whether to show search input */
	showSearch?: boolean;
	/** Search placeholder */
	searchPlaceholder?: string;
	/** Footer content (typically action buttons) */
	footer?: React.ReactNode;
	/** Message to display (e.g., status or helper text) */
	message?: string;
	/** Selection mode */
	selectionMode?: "none" | "single" | "multiple";
	/** Selected values (for single or multiple selection) */
	selectedValues?: string[];
	/** Selection change handler */
	onSelectionChange?: (values: string[]) => void;
	/** Width of the menu */
	width?: string | number;
}

export const Menu = forwardRef<HTMLDivElement, MenuProps>(function Menu(
	{
		className,
		items = [],
		groups = [],
		showSearch = false,
		searchPlaceholder = "Search",
		footer,
		message,
		selectionMode = "none",
		selectedValues = [],
		onSelectionChange,
		width = 280,
		...rest
	},
	ref
) {
	const [searchQuery, setSearchQuery] = useState("");

	const handleSelect = (value: string) => {
		if (selectionMode === "none") return;

		let newValues: string[];
		if (selectionMode === "single") {
			newValues = [value];
		} else {
			// multiple
			if (selectedValues.includes(value)) {
				newValues = selectedValues.filter((v) => v !== value);
			} else {
				newValues = [...selectedValues, value];
			}
		}
		onSelectionChange?.(newValues);
	};

	const filterOptions = (options: MenuOption[]) => {
		if (!searchQuery) return options;
		return options.filter((option) =>
			option.label.toLowerCase().includes(searchQuery.toLowerCase())
		);
	};

	const renderOption = (option: MenuOption) => {
		const isSelected = selectedValues.includes(option.value);
		const showCheckbox = selectionMode === "multiple";
		const showRadio = selectionMode === "single";

		return (
			<button
				key={option.value}
				onClick={() => {
					option.onClick?.();
					handleSelect(option.value);
				}}
				disabled={option.disabled}
				className={clsx(
					"w-full px-3 py-2 text-left text-sm transition-colors",
					"hover:bg-bg-surface focus:outline-none focus:bg-bg-surface",
					"disabled:text-fg-disabled disabled:cursor-not-allowed",
					isSelected && "bg-bg-secondary",
					option.disabled && "hover:bg-transparent"
				)}
			>
				<div className="flex items-center gap-2">
					{showCheckbox && (
						<input
							type="checkbox"
							checked={isSelected}
							onChange={() => {}}
							className="w-4 h-4 rounded border-border-default"
						/>
					)}
					{showRadio && (
						<input
							type="radio"
							checked={isSelected}
							onChange={() => {}}
							className="w-4 h-4 border-border-default"
						/>
					)}
				{option.avatar && (
					<div className="w-8 h-8 rounded-full bg-bg-tertiary flex items-center justify-center text-fg-default text-xs font-semibold flex-shrink-0">
						{option.avatar}
					</div>
				)}
					<div className="flex-1 min-w-0">
						<div className="flex items-center gap-2">
							{option.icon && <span className="flex-shrink-0">{option.icon}</span>}
							<span className={clsx("text-fg-default", option.disabled && "text-fg-disabled")}>
								{option.label}
							</span>
						</div>
						{option.subtitle && (
							<div className="text-xs text-fg-secondary mt-0.5">{option.subtitle}</div>
						)}
					</div>
				</div>
			</button>
		);
	};

	const hasGroups = groups.length > 0;
	const displayItems = hasGroups ? [] : items;

	return (
		<div
			ref={ref}
			className={clsx(
				"bg-bg-canvas border border-border-default rounded-lg shadow-2 overflow-hidden",
				className
			)}
			style={{ width: typeof width === "number" ? `${width}px` : width }}
			{...rest}
		>
			{/* Search */}
			{showSearch && (
				<div className="p-2 border-b border-border-default">
					<div className="relative">
						<svg
							className="absolute left-2 top-1/2 -translate-y-1/2 text-fg-secondary"
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
						>
							<circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
							<path d="M11 11L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
						</svg>
						<input
							type="text"
							placeholder={searchPlaceholder}
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="w-full h-8 pl-8 pr-3 text-sm bg-bg-canvas border border-border-default rounded focus:outline-none focus:ring-2 focus:ring-border-focus focus:border-border-focus"
						/>
					</div>
				</div>
			)}

			{/* Message */}
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
						{filterOptions(displayItems).map((option) => renderOption(option))}
					</div>
				)}
			</div>

			{/* Footer */}
			{footer && (
				<div className="flex items-center justify-between gap-2 px-3 py-2 border-t border-border-default bg-bg-surface">
					{footer}
				</div>
			)}
		</div>
	);
});

