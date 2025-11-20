import * as React from "react";
import { forwardRef } from "react";
import clsx from "clsx";

export interface FileListItem {
	id: string;
	name: string;
	size?: string;
	date?: string;
	icon?: React.ReactNode;
	error?: boolean;
	url?: string;
}

export interface FileListItemProps extends React.HTMLAttributes<HTMLDivElement> {
	/** File item data */
	item: FileListItem;
	/** Whether the item is selected */
	selected?: boolean;
	/** Click handler */
	onItemClick?: (id: string) => void;
	/** Delete handler */
	onDelete?: (id: string) => void;
	/** Download handler */
	onDownload?: (id: string) => void;
}

export const FileListItemComponent = forwardRef<HTMLDivElement, FileListItemProps>(
	function FileListItemComponent(
		{ className, item, selected, onItemClick, onDelete, onDownload, ...rest },
		ref
	) {
		return (
			<div
				ref={ref}
				className={clsx(
					"flex items-center gap-3 px-4 py-3 border-b border-border-default transition-colors",
					selected && "bg-bg-secondary",
					item.error && "bg-bg-error border-border-error",
					!selected && !item.error && "hover:bg-bg-surface",
					className
				)}
				{...rest}
			>
				{item.icon && (
					<span className={clsx(
						"shrink-0",
						item.error ? "text-state-danger" : "text-fg-secondary"
					)}>
						{item.icon}
					</span>
				)}
				<div className="flex-1 min-w-0">
					<button
						type="button"
						onClick={() => onItemClick?.(item.id)}
						className={clsx(
							"text-body font-medium text-left truncate w-full hover:underline",
							item.error ? "text-state-danger" : "text-fg-default"
						)}
					>
						{item.name}
					</button>
					{(item.size || item.date) && (
						<p className="text-small text-fg-secondary truncate">
							{[item.size, item.date].filter(Boolean).join(" • ")}
						</p>
					)}
				</div>
				<div className="flex items-center gap-2 shrink-0">
					{onDownload && (
						<button
							type="button"
							onClick={() => onDownload(item.id)}
							className="p-2 text-fg-secondary hover:text-fg-default hover:bg-bg-surface rounded-sm transition-colors"
							aria-label="Download"
						>
							<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
								<path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
							</svg>
						</button>
					)}
					{onDelete && (
						<button
							type="button"
							onClick={() => onDelete(item.id)}
							className="p-2 text-fg-secondary hover:text-state-danger hover:bg-bg-surface rounded-sm transition-colors"
							aria-label="Delete"
						>
							<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
								<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
							</svg>
						</button>
					)}
				</div>
			</div>
		);
	}
);

export interface FileListProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Array of file items */
	items: FileListItem[];
	/** Selected item ID */
	selectedId?: string;
	/** Click handler for items */
	onItemClick?: (id: string) => void;
	/** Delete handler for items */
	onDelete?: (id: string) => void;
	/** Download handler for items */
	onDownload?: (id: string) => void;
	/** Empty state content */
	emptyState?: React.ReactNode;
}

export const FileList = forwardRef<HTMLDivElement, FileListProps>(function FileList(
	{
		className,
		items,
		selectedId,
		onItemClick,
		onDelete,
		onDownload,
		emptyState,
		...rest
	},
	ref
) {
	if (items.length === 0 && emptyState) {
		return (
			<div
				ref={ref}
				className={clsx("flex items-center justify-center p-8", className)}
				{...rest}
			>
				{emptyState}
			</div>
		);
	}

	return (
		<div
			ref={ref}
			className={clsx(
				"border border-border-default rounded-sm overflow-hidden bg-bg-canvas",
				className
			)}
			{...rest}
		>
			{items.map((item) => (
				<FileListItemComponent
					key={item.id}
					item={item}
					selected={item.id === selectedId}
					onItemClick={onItemClick}
					onDelete={onDelete}
					onDownload={onDownload}
				/>
			))}
		</div>
	);
});

