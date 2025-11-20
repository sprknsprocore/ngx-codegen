import * as React from "react";
import { forwardRef, useState } from "react";
import clsx from "clsx";

export interface TreeNodeData {
	id: string;
	label: React.ReactNode;
	children?: TreeNodeData[];
	icon?: React.ReactNode;
	disabled?: boolean;
}

export interface TreeNodeProps {
	node: TreeNodeData;
	level?: number;
	selectedId?: string;
	expandedIds?: Set<string>;
	onToggle?: (id: string) => void;
	onSelect?: (id: string) => void;
}

const ChevronIcon = ({ isExpanded }: { isExpanded: boolean }) => (
	<svg
		className={clsx(
			"w-4 h-4 transition-transform text-fg-default shrink-0",
			isExpanded && "rotate-90"
		)}
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M6 4L10 8L6 12"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const FolderIcon = () => (
	<svg
		className="w-4 h-4 text-fg-secondary shrink-0"
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M2 4.5C2 3.67157 2.67157 3 3.5 3H5.87868C6.21071 3 6.52892 3.13229 6.76256 3.36594L7.48744 4.09081C7.72108 4.32446 8.03929 4.45675 8.37132 4.45675H12.5C13.3284 4.45675 14 5.12832 14 5.95675V11.5C14 12.3284 13.3284 13 12.5 13H3.5C2.67157 13 2 12.3284 2 11.5V4.5Z"
			stroke="currentColor"
			strokeWidth="1.5"
		/>
	</svg>
);

const FileIcon = () => (
	<svg
		className="w-4 h-4 text-fg-secondary shrink-0"
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M9 2H4C3.44772 2 3 2.44772 3 3V13C3 13.5523 3.44772 14 4 14H12C12.5523 14 13 13.5523 13 13V6L9 2Z"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M9 2V6H13"
			stroke="currentColor"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export const TreeNode = forwardRef<HTMLDivElement, TreeNodeProps>(function TreeNode(
	{ node, level = 0, selectedId, expandedIds = new Set(), onToggle, onSelect },
	ref
) {
	const hasChildren = node.children && node.children.length > 0;
	const isExpanded = expandedIds.has(node.id);
	const isSelected = selectedId === node.id;

	const handleToggle = (e: React.MouseEvent) => {
		e.stopPropagation();
		if (hasChildren && onToggle) {
			onToggle(node.id);
		}
	};

	const handleSelect = () => {
		if (!node.disabled && onSelect) {
			onSelect(node.id);
		}
	};

	const indentWidth = level * 20;

	return (
		<div ref={ref}>
		<div
			className={clsx(
				"flex items-center h-7 px-2 text-sm cursor-pointer hover:bg-bg-surface rounded-sm transition-colors",
				isSelected && "bg-bg-tertiary text-fg-brand hover:bg-bg-secondary",
				node.disabled && "opacity-50 cursor-not-allowed"
			)}
			style={{ paddingLeft: `${indentWidth + 8}px` }}
			onClick={handleSelect}
		>
			{hasChildren ? (
				<button
					type="button"
					onClick={handleToggle}
					className="p-0 mr-1 hover:bg-bg-secondary rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
					aria-label={isExpanded ? "Collapse" : "Expand"}
					aria-expanded={isExpanded}
				>
						<ChevronIcon isExpanded={isExpanded} />
					</button>
				) : (
					<span className="w-4 mr-1" />
				)}
				<span className="mr-2">
					{node.icon ? node.icon : hasChildren ? <FolderIcon /> : <FileIcon />}
				</span>
				<span className="truncate">{node.label}</span>
			</div>
			{hasChildren && isExpanded && (
				<div>
					{node.children!.map((child) => (
						<TreeNode
							key={child.id}
							node={child}
							level={level + 1}
							selectedId={selectedId}
							expandedIds={expandedIds}
							onToggle={onToggle}
							onSelect={onSelect}
						/>
					))}
				</div>
			)}
		</div>
	);
});

export interface TreeProps extends React.HTMLAttributes<HTMLDivElement> {
	/** The tree data structure */
	data: TreeNodeData[];
	/** Currently selected node ID */
	selectedId?: string;
	/** Callback when a node is selected */
	onSelect?: (id: string) => void;
	/** Initially expanded node IDs */
	defaultExpandedIds?: string[];
	/** Controlled expanded node IDs */
	expandedIds?: string[];
	/** Callback when a node is expanded/collapsed */
	onExpandedChange?: (expandedIds: string[]) => void;
}

export const Tree = forwardRef<HTMLDivElement, TreeProps>(function Tree(
	{
		data,
		selectedId,
		onSelect,
		defaultExpandedIds = [],
		expandedIds: controlledExpandedIds,
		onExpandedChange,
		className,
		...rest
	},
	ref
) {
	const [internalExpandedIds, setInternalExpandedIds] = useState<Set<string>>(
		new Set(defaultExpandedIds)
	);

	const isControlled = controlledExpandedIds !== undefined;
	const expandedSet = isControlled
		? new Set(controlledExpandedIds)
		: internalExpandedIds;

	const handleToggle = (id: string) => {
		const newExpanded = new Set(expandedSet);
		if (newExpanded.has(id)) {
			newExpanded.delete(id);
		} else {
			newExpanded.add(id);
		}

		if (isControlled && onExpandedChange) {
			onExpandedChange(Array.from(newExpanded));
		} else {
			setInternalExpandedIds(newExpanded);
		}
	};

	return (
		<div
			ref={ref}
			className={clsx("py-1 text-fg-default", className)}
			role="tree"
			{...rest}
		>
			{data.map((node) => (
				<TreeNode
					key={node.id}
					node={node}
					selectedId={selectedId}
					expandedIds={expandedSet}
					onToggle={handleToggle}
					onSelect={onSelect}
				/>
			))}
		</div>
	);
});

