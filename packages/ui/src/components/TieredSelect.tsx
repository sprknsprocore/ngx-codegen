import * as React from "react";
import { forwardRef, useState, useCallback } from "react";
import clsx from "clsx";
import { InputBase } from "../primitives/InputBase";

export interface TieredOption {
	id: string;
	label: string;
	children?: TieredOption[];
}

export interface TieredSelectProps {
	/** Options tree */
	options: TieredOption[];
	/** Currently selected option IDs (full path) */
	value?: string[];
	/** Callback when selection changes */
	onChange?: (value: string[]) => void;
	/** Label for the select */
	label?: string;
	/** Placeholder text */
	placeholder?: string;
	/** Whether the select is disabled */
	disabled?: boolean;
	/** Whether to show search input */
	searchable?: boolean;
	/** Custom class name */
	className?: string;
}

export const TieredSelect = forwardRef<HTMLDivElement, TieredSelectProps>(
	function TieredSelect(
		{
			options,
			value = [],
			onChange,
			label,
			placeholder = "Select...",
			disabled = false,
			searchable = true,
			className,
		},
		ref
	) {
		const [isOpen, setIsOpen] = useState(false);
		const [currentPath, setCurrentPath] = useState<string[]>([]);
		const [searchQuery, setSearchQuery] = useState("");

		// Get current level options based on path
		const getCurrentOptions = useCallback((): TieredOption[] => {
			let current = options;
			for (const id of currentPath) {
				const found = current.find((opt) => opt.id === id);
				if (found?.children) {
					current = found.children;
				} else {
					return [];
				}
			}
			return current;
		}, [options, currentPath]);

		// Get breadcrumb path
		const getBreadcrumbs = useCallback((): TieredOption[] => {
			const breadcrumbs: TieredOption[] = [];
			let current = options;
			for (const id of currentPath) {
				const found = current.find((opt) => opt.id === id);
				if (found) {
					breadcrumbs.push(found);
					if (found.children) {
						current = found.children;
					}
				}
			}
			return breadcrumbs;
		}, [options, currentPath]);

		const handleOptionClick = (option: TieredOption) => {
			if (option.children && option.children.length > 0) {
				// Navigate deeper
				setCurrentPath([...currentPath, option.id]);
			} else {
				// Select leaf node
				const newValue = [...currentPath, option.id];
				onChange?.(newValue);
				setIsOpen(false);
				setCurrentPath([]);
				setSearchQuery("");
			}
		};

		const handleBreadcrumbClick = (index: number) => {
			setCurrentPath(currentPath.slice(0, index));
		};

		const handleBackToRoot = () => {
			setCurrentPath([]);
		};

		// Get display value
		const getDisplayValue = (): string => {
			if (value.length === 0) return placeholder;
			let current = options;
			const labels: string[] = [];
			for (const id of value) {
				const found = current.find((opt) => opt.id === id);
				if (found) {
					labels.push(found.label);
					if (found.children) {
						current = found.children;
					}
				}
			}
			return labels.join(" > ");
		};

		const currentOptions = getCurrentOptions();
		const breadcrumbs = getBreadcrumbs();

		// Filter options by search
		const filteredOptions = searchQuery
			? currentOptions.filter((opt) =>
					opt.label.toLowerCase().includes(searchQuery.toLowerCase())
			  )
			: currentOptions;

		const ChevronIcon = () => (
			<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
				<path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" fill="none" />
			</svg>
		);

		const HomeIcon = () => (
			<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
				<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
			</svg>
		);

		return (
			<div ref={ref} className={clsx("relative w-full", className)}>
				{label && (
					<label className="block text-sm font-medium text-fg-default mb-1.5">
						{label}
					</label>
				)}
				<button
					type="button"
					disabled={disabled}
					onClick={() => setIsOpen(!isOpen)}
					className={clsx(
						"w-full h-9 px-3.5 text-md rounded-md border bg-bg-canvas text-fg-default",
						"border-border-default focus:ring-2 focus:ring-border-focus focus:border-border-focus",
						"flex items-center justify-between transition-colors",
						disabled && "opacity-50 pointer-events-none",
						value.length === 0 && "text-fg-muted"
					)}
				>
					<span className="truncate">{getDisplayValue()}</span>
					<ChevronIcon />
				</button>

				{isOpen && (
					<>
						<div
							className="fixed inset-0 z-10"
							onClick={() => {
								setIsOpen(false);
								setCurrentPath([]);
								setSearchQuery("");
							}}
						/>
						<div className="absolute z-20 w-full mt-1 bg-bg-canvas border border-border-default rounded-md shadow-2 overflow-hidden">
							{/* Breadcrumb navigation */}
							{breadcrumbs.length > 0 && (
								<div className="flex items-center gap-1 px-3 py-2 border-b border-border-default bg-bg-surface">
									<button
										type="button"
										onClick={handleBackToRoot}
										className="p-1 hover:bg-bg-tertiary rounded transition-colors"
									>
										<HomeIcon />
									</button>
									{breadcrumbs.map((crumb, index) => (
										<React.Fragment key={crumb.id}>
											<ChevronIcon />
											<button
												type="button"
												onClick={() => handleBreadcrumbClick(index)}
												className="text-sm text-fg-default hover:text-bg-brand transition-colors"
											>
												{crumb.label}
											</button>
										</React.Fragment>
									))}
									<ChevronIcon />
									<span className="text-sm text-fg-muted">Active...</span>
								</div>
							)}

							{/* Search input */}
							{searchable && (
								<div className="p-2 border-b border-border-default">
									<InputBase
										size="sm"
										placeholder="Search"
										value={searchQuery}
										onChange={(e) => setSearchQuery(e.target.value)}
									/>
								</div>
							)}

							{/* Options list */}
							<div className="max-h-64 overflow-y-auto">
								{filteredOptions.length === 0 ? (
									<div className="px-3 py-6 text-sm text-fg-muted text-center">
										No results
									</div>
								) : (
									filteredOptions.map((option) => (
										<button
											key={option.id}
											type="button"
											onClick={() => handleOptionClick(option)}
											className="w-full flex items-center justify-between px-3 py-2 text-sm text-fg-default hover:bg-bg-surface transition-colors"
										>
											<span>{option.label}</span>
											{option.children && option.children.length > 0 && (
												<ChevronIcon />
											)}
										</button>
									))
								)}
							</div>
						</div>
					</>
				)}
			</div>
		);
	}
);

