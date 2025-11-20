import * as React from "react";
import { forwardRef } from "react";
import clsx from "clsx";

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
	/** Enable zebra striping for rows */
	striped?: boolean;
	/** Enable hover effect on rows */
	hoverable?: boolean;
}

export interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

export interface TableFooterProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
	/** Whether row is selected */
	selected?: boolean;
}

export interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
	/** Enable sorting indicator */
	sortable?: boolean;
	/** Current sort direction */
	sortDirection?: "asc" | "desc" | null;
}

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {}

export const Table = forwardRef<HTMLTableElement, TableProps>(function Table(
	{ className, striped, hoverable, ...rest },
	ref
) {
	return (
		<div className="w-full overflow-auto border border-border-default rounded-sm">
			<table
				ref={ref}
				className={clsx("w-full border-collapse", className)}
				{...rest}
			/>
		</div>
	);
});

export const TableHeader = forwardRef<HTMLTableSectionElement, TableHeaderProps>(function TableHeader(
	{ className, ...rest },
	ref
) {
	return (
		<thead
			ref={ref}
			className={clsx("bg-bg-secondary border-b border-border-default", className)}
			{...rest}
		/>
	);
});

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(function TableBody(
	{ className, ...rest },
	ref
) {
	return <tbody ref={ref} className={clsx("divide-y divide-border-default", className)} {...rest} />;
});

export const TableFooter = forwardRef<HTMLTableSectionElement, TableFooterProps>(function TableFooter(
	{ className, ...rest },
	ref
) {
	return (
		<tfoot
			ref={ref}
			className={clsx("bg-bg-secondary border-t border-border-default font-medium", className)}
			{...rest}
		/>
	);
});

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(function TableRow(
	{ className, selected, ...rest },
	ref
) {
	return (
		<tr
			ref={ref}
			className={clsx(
				"transition-colors hover:bg-bg-surface",
				selected && "bg-bg-tertiary",
				className
			)}
			{...rest}
		/>
	);
});

export const TableHead = forwardRef<HTMLTableCellElement, TableHeadProps>(function TableHead(
	{ className, sortable, sortDirection, children, ...rest },
	ref
) {
	return (
		<th
			ref={ref}
			className={clsx(
				"px-4 py-3 text-left text-sm font-semibold text-fg-default",
				sortable && "cursor-pointer select-none hover:bg-bg-tertiary",
				className
			)}
			{...rest}
		>
			<div className="flex items-center gap-2">
				{children}
				{sortable && (
					<span className="text-fg-secondary text-xs">
						{sortDirection === "asc" && "↑"}
						{sortDirection === "desc" && "↓"}
						{!sortDirection && "↕"}
					</span>
				)}
			</div>
		</th>
	);
});

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(function TableCell(
	{ className, ...rest },
	ref
) {
	return (
		<td
			ref={ref}
			className={clsx("px-4 py-3 text-sm text-fg-default", className)}
			{...rest}
		/>
	);
});

