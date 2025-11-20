import * as React from "react";
import { forwardRef } from "react";
import clsx from "clsx";
import { Button } from "./Button";

export interface PaginationProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
	/**
	 * Current page (1-indexed)
	 */
	page: number;
	/**
	 * Total number of pages
	 */
	totalPages: number;
	/**
	 * Number of items per page
	 */
	pageSize: number;
	/**
	 * Total number of items
	 */
	totalItems: number;
	/**
	 * Callback when page changes
	 */
	onPageChange?: (page: number) => void;
	/**
	 * Whether to show the item range (e.g., "1-10 of 100")
	 */
	showRange?: boolean;
	/**
	 * Whether to show the page dropdown selector
	 */
	showPageSelector?: boolean;
	/**
	 * Disabled state
	 */
	disabled?: boolean;
}

export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(function Pagination(
	{
		className,
		page,
		totalPages,
		pageSize,
		totalItems,
		onPageChange,
		showRange = true,
		showPageSelector = true,
		disabled = false,
		...rest
	},
	ref
) {
	const startItem = Math.min((page - 1) * pageSize + 1, totalItems);
	const endItem = Math.min(page * pageSize, totalItems);
	
	const canGoPrevious = page > 1;
	const canGoNext = page < totalPages;

	const handlePrevious = () => {
		if (canGoPrevious && !disabled) {
			onPageChange?.(page - 1);
		}
	};

	const handleNext = () => {
		if (canGoNext && !disabled) {
			onPageChange?.(page + 1);
		}
	};

	const handlePageSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const newPage = parseInt(e.target.value, 10);
		if (!disabled) {
			onPageChange?.(newPage);
		}
	};

	return (
		<div
			ref={ref}
			className={clsx(
				"inline-flex items-center gap-3 text-sm text-fg-default",
				disabled && "opacity-50 pointer-events-none",
				className
			)}
			{...rest}
		>
			{showRange && (
				<span className="text-fg-secondary">
					{totalItems > 0 ? (
						<>
							<span className="font-medium text-fg-default">
								{startItem}-{endItem}
							</span>{" "}
							of {totalItems.toLocaleString()}
						</>
					) : (
						"0 items"
					)}
				</span>
			)}

			{showPageSelector && totalPages > 1 && (
				<div className="inline-flex items-center gap-2">
					<label htmlFor="page-select" className="text-fg-secondary">
						Page:
					</label>
					<select
						id="page-select"
						value={page}
						onChange={handlePageSelect}
						disabled={disabled}
						className={clsx(
							"h-8 px-2 pr-8 text-sm rounded-md border border-border-default bg-bg-canvas",
							"focus:outline-none focus:ring-2 focus:ring-blue-50 focus:border-blue-50",
							"cursor-pointer transition-colors"
						)}
					>
						{Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
							<option key={p} value={p}>
								{p}
							</option>
						))}
					</select>
				</div>
			)}

			<div className="inline-flex items-center gap-1">
				<Button
					size="sm"
					emphasis="secondary"
					onClick={handlePrevious}
					disabled={!canGoPrevious || disabled}
					aria-label="Previous page"
				>
					<svg
						className="w-4 h-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M15 19l-7-7 7-7"
						/>
					</svg>
				</Button>
				<Button
					size="sm"
					emphasis="secondary"
					onClick={handleNext}
					disabled={!canGoNext || disabled}
					aria-label="Next page"
				>
					<svg
						className="w-4 h-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</Button>
			</div>
		</div>
	);
});

