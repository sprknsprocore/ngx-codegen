import * as React from "react";
import { forwardRef, useState } from "react";
import clsx from "clsx";
import { Stack } from "../primitives/Stack";
import { Box } from "../primitives/Box";

export interface FileSelectNavItem {
	id: string;
	label: string;
	icon?: React.ReactNode;
	error?: boolean;
}

export interface FileSelectNavProps extends React.HTMLAttributes<HTMLDivElement> {
	items: FileSelectNavItem[];
	selectedId?: string;
	onSelect?: (id: string) => void;
}

export const FileSelectNav = forwardRef<HTMLDivElement, FileSelectNavProps>(function FileSelectNav(
	{ className, items, selectedId, onSelect, ...rest },
	ref
) {
	return (
		<Stack
			ref={ref}
			gap="0"
			className={clsx(
				"bg-bg-canvas border-r border-border-default min-w-48 max-w-64",
				className
			)}
			{...rest}
		>
			{items.map((item) => {
				const isSelected = item.id === selectedId;
				const hasError = item.error;
				
				return (
				<button
					key={item.id}
					type="button"
					onClick={() => onSelect?.(item.id)}
					className={clsx(
						"flex items-center gap-2 px-8 py-3 text-body text-left transition-colors w-full",
						isSelected && "bg-bg-tertiary border-l-4 border-border-focus font-semibold text-fg-brand",
						!isSelected && "border-l-4 border-transparent",
						hasError && "text-state-danger",
						!isSelected && !hasError && "text-fg-secondary hover:bg-bg-surface"
					)}
				>
						{item.icon && (
							<span className="shrink-0">{item.icon}</span>
						)}
						<span>{item.label}</span>
					</button>
				);
			})}
		</Stack>
	);
});

export interface FileSelectBodyProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Content to display in the main view area */
	children?: React.ReactNode;
}

export const FileSelectBody = forwardRef<HTMLDivElement, FileSelectBodyProps>(function FileSelectBody(
	{ className, children, ...rest },
	ref
) {
	return (
		<Box
			ref={ref}
			className={clsx("flex-1 p-6 overflow-auto bg-bg-canvas", className)}
			{...rest}
		>
			{children}
		</Box>
	);
});

export interface FileSelectProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Navigation items */
	navItems?: FileSelectNavItem[];
	/** Selected navigation item ID */
	selectedNavId?: string;
	/** Callback when navigation item is selected */
	onNavSelect?: (id: string) => void;
	/** Content to display in the main area */
	children?: React.ReactNode;
}

export const FileSelect = forwardRef<HTMLDivElement, FileSelectProps>(function FileSelect(
	{ className, navItems = [], selectedNavId, onNavSelect, children, ...rest },
	ref
) {
	const [internalSelectedId, setInternalSelectedId] = useState<string>(navItems[0]?.id || "");
	const selectedId = selectedNavId ?? internalSelectedId;

	const handleSelect = (id: string) => {
		setInternalSelectedId(id);
		onNavSelect?.(id);
	};

	return (
		<div
			ref={ref}
			className={clsx("flex h-full border border-border-default rounded-sm overflow-hidden", className)}
			{...rest}
		>
			{navItems.length > 0 && (
				<FileSelectNav
					items={navItems}
					selectedId={selectedId}
					onSelect={handleSelect}
				/>
			)}
			<FileSelectBody>{children}</FileSelectBody>
		</div>
	);
});

// FileSelectListItem component for displaying files in list view
export interface FileSelectListItemProps extends React.HTMLAttributes<HTMLDivElement> {
	/** File name */
	name: string;
	/** File icon */
	icon?: React.ReactNode;
	/** File size */
	size?: string;
	/** File date */
	date?: string;
	/** Whether the item is selected */
	selected?: boolean;
	/** Whether the item has an error */
	error?: boolean;
	/** Click handler */
	onItemClick?: () => void;
}

export const FileSelectListItem = forwardRef<HTMLDivElement, FileSelectListItemProps>(
	function FileSelectListItem(
		{ className, name, icon, size, date, selected, error, onItemClick, ...rest },
		ref
	) {
		return (
			<div
				ref={ref}
				role="button"
				tabIndex={0}
				onClick={onItemClick}
				onKeyDown={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						onItemClick?.();
					}
				}}
				className={clsx(
					"flex items-center gap-3 px-4 py-3 border-b border-border-default cursor-pointer transition-colors",
					selected && "bg-bg-secondary",
					error && "bg-bg-error border-border-error",
					!selected && !error && "hover:bg-bg-surface",
					className
				)}
				{...rest}
			>
				{icon && <span className="shrink-0">{icon}</span>}
				<div className="flex-1 min-w-0">
					<p className={clsx(
						"text-body font-medium truncate",
						error ? "text-state-danger" : "text-fg-default"
					)}>
						{name}
					</p>
					{(size || date) && (
						<p className="text-small text-fg-secondary truncate">
							{[size, date].filter(Boolean).join(" • ")}
						</p>
					)}
				</div>
			</div>
		);
	}
);

// FileSelectGridItem component for displaying files in grid view
export interface FileSelectGridItemProps extends React.HTMLAttributes<HTMLDivElement> {
	/** File name */
	name: string;
	/** File preview or icon */
	preview?: React.ReactNode;
	/** File size */
	size?: string;
	/** Whether the item is selected */
	selected?: boolean;
	/** Click handler */
	onItemClick?: () => void;
}

export const FileSelectGridItem = forwardRef<HTMLDivElement, FileSelectGridItemProps>(
	function FileSelectGridItem(
		{ className, name, preview, size, selected, onItemClick, ...rest },
		ref
	) {
		return (
			<div
				ref={ref}
				role="button"
				tabIndex={0}
				onClick={onItemClick}
				onKeyDown={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						onItemClick?.();
					}
				}}
				className={clsx(
					"flex flex-col gap-2 p-3 border border-border-default rounded-sm cursor-pointer transition-all",
					selected && "border-border-focus ring-2 ring-blue-94",
					!selected && "hover:border-border-hover hover:shadow-1",
					className
				)}
				{...rest}
			>
				<div className="aspect-square bg-bg-secondary rounded-sm overflow-hidden flex items-center justify-center">
					{preview}
				</div>
				<div className="min-w-0">
					<p className="text-small font-medium text-fg-default truncate">
						{name}
					</p>
					{size && (
						<p className="text-small text-fg-secondary truncate">
							{size}
						</p>
					)}
				</div>
			</div>
		);
	}
);

