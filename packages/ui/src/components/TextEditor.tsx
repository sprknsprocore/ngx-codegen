import * as React from "react";
import { forwardRef, useState, useRef } from "react";
import clsx from "clsx";

export interface TextEditorProps {
	/** Editor label */
	label?: string;
	/** Initial content (HTML) */
	defaultValue?: string;
	/** Current value (HTML) */
	value?: string;
	/** Change callback */
	onChange?: (value: string) => void;
	/** Placeholder text */
	placeholder?: string;
	/** Helper text or error message */
	helperText?: string;
	/** Validation state */
	validationState?: "none" | "invalid" | "valid";
	/** Whether the editor is disabled */
	disabled?: boolean;
	/** Minimum height */
	minHeight?: string;
	/** Custom class name */
	className?: string;
}

type ToolbarAction =
	| "bold"
	| "italic"
	| "underline"
	| "alignLeft"
	| "alignCenter"
	| "alignRight"
	| "bulletList"
	| "numberList"
	| "outdent"
	| "indent"
	| "strike"
	| "link"
	| "unlink";

export const TextEditor = forwardRef<HTMLDivElement, TextEditorProps>(function TextEditor(
	{
		label,
		defaultValue = "",
		value: controlledValue,
		onChange,
		placeholder = "Start typing...",
		helperText,
		validationState = "none",
		disabled = false,
		minHeight = "200px",
		className,
	},
	ref
) {
	const [internalValue, setInternalValue] = useState(defaultValue);
	const editorRef = useRef<HTMLDivElement>(null);
	const isControlled = controlledValue !== undefined;
	const value = isControlled ? controlledValue : internalValue;

	const hasError = validationState === "invalid";
	const hasSuccess = validationState === "valid";

	const execCommand = (command: string, value?: string) => {
		if (disabled) return;
		document.execCommand(command, false, value);
		handleContentChange();
	};

	const handleContentChange = () => {
		const content = editorRef.current?.innerHTML || "";
		if (!isControlled) {
			setInternalValue(content);
		}
		onChange?.(content);
	};

	const ToolButton = ({
		action,
		icon,
		title,
	}: {
		action: () => void;
		icon: React.ReactNode;
		title: string;
	}) => (
		<button
			type="button"
			onClick={action}
			disabled={disabled}
			title={title}
			className={clsx(
				"p-2 rounded hover:bg-bg-surface transition-colors",
				"disabled:opacity-50 disabled:cursor-not-allowed"
			)}
		>
			{icon}
		</button>
	);

	const Divider = () => <div className="w-px h-6 bg-border-default" />;

	// Icon SVGs
	const BoldIcon = () => (
		<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
			<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
			<path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
		</svg>
	);

	const ItalicIcon = () => (
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
			<line x1="19" y1="4" x2="10" y2="4" />
			<line x1="14" y1="20" x2="5" y2="20" />
			<line x1="15" y1="4" x2="9" y2="20" />
		</svg>
	);

	const UnderlineIcon = () => (
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
			<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />
			<line x1="4" y1="21" x2="20" y2="21" />
		</svg>
	);

	const AlignLeftIcon = () => (
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
			<line x1="17" y1="10" x2="3" y2="10" />
			<line x1="21" y1="6" x2="3" y2="6" />
			<line x1="21" y1="14" x2="3" y2="14" />
			<line x1="17" y1="18" x2="3" y2="18" />
		</svg>
	);

	const AlignCenterIcon = () => (
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
			<line x1="18" y1="10" x2="6" y2="10" />
			<line x1="21" y1="6" x2="3" y2="6" />
			<line x1="21" y1="14" x2="3" y2="14" />
			<line x1="18" y1="18" x2="6" y2="18" />
		</svg>
	);

	const AlignRightIcon = () => (
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
			<line x1="21" y1="10" x2="7" y2="10" />
			<line x1="21" y1="6" x2="3" y2="6" />
			<line x1="21" y1="14" x2="3" y2="14" />
			<line x1="21" y1="18" x2="7" y2="18" />
		</svg>
	);

	const BulletListIcon = () => (
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
			<line x1="8" y1="6" x2="21" y2="6" />
			<line x1="8" y1="12" x2="21" y2="12" />
			<line x1="8" y1="18" x2="21" y2="18" />
			<line x1="3" y1="6" x2="3.01" y2="6" />
			<line x1="3" y1="12" x2="3.01" y2="12" />
			<line x1="3" y1="18" x2="3.01" y2="18" />
		</svg>
	);

	const NumberListIcon = () => (
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
			<line x1="10" y1="6" x2="21" y2="6" />
			<line x1="10" y1="12" x2="21" y2="12" />
			<line x1="10" y1="18" x2="21" y2="18" />
			<path d="M4 6h1v4" />
			<path d="M4 10h2" />
			<path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
		</svg>
	);

	const OutdentIcon = () => (
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
			<polyline points="7 8 3 12 7 16" />
			<line x1="21" y1="12" x2="11" y2="12" />
			<line x1="21" y1="6" x2="11" y2="6" />
			<line x1="21" y1="18" x2="11" y2="18" />
		</svg>
	);

	const IndentIcon = () => (
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
			<polyline points="3 8 7 12 3 16" />
			<line x1="21" y1="12" x2="11" y2="12" />
			<line x1="21" y1="6" x2="11" y2="6" />
			<line x1="21" y1="18" x2="11" y2="18" />
		</svg>
	);

	const StrikeIcon = () => (
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
			<path d="M17.5 5H9a4 4 0 0 0 0 8h6a4 4 0 0 1 0 8H6.5" />
			<line x1="3" y1="12" x2="21" y2="12" />
		</svg>
	);

	const LinkIcon = () => (
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
			<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
			<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
		</svg>
	);

	const UnlinkIcon = () => (
		<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
			<path d="M18.84 12.25l1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" />
			<path d="M5.17 11.75l-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" />
			<line x1="8" y1="2" x2="8" y2="5" />
			<line x1="2" y1="8" x2="5" y2="8" />
			<line x1="16" y1="19" x2="16" y2="22" />
			<line x1="19" y1="16" x2="22" y2="16" />
		</svg>
	);

	return (
		<div ref={ref} className={clsx("w-full", className)}>
			{label && (
				<label className="block text-sm font-medium text-fg-default mb-1.5">{label}</label>
			)}
			<div
				className={clsx(
					"border rounded-md overflow-hidden bg-bg-canvas",
					"border-border-default",
					hasError && "border-state-danger",
					hasSuccess && "border-state-success",
					disabled && "opacity-50 pointer-events-none"
				)}
			>
				{/* Toolbar */}
				<div className="flex items-center gap-1 px-2 py-1.5 border-b border-border-default bg-bg-surface flex-wrap">
					<ToolButton
						action={() => execCommand("bold")}
						icon={<BoldIcon />}
						title="Bold"
					/>
					<ToolButton
						action={() => execCommand("italic")}
						icon={<ItalicIcon />}
						title="Italic"
					/>
					<ToolButton
						action={() => execCommand("underline")}
						icon={<UnderlineIcon />}
						title="Underline"
					/>
					<Divider />
					<ToolButton
						action={() => execCommand("justifyLeft")}
						icon={<AlignLeftIcon />}
						title="Align Left"
					/>
					<ToolButton
						action={() => execCommand("justifyCenter")}
						icon={<AlignCenterIcon />}
						title="Align Center"
					/>
					<ToolButton
						action={() => execCommand("justifyRight")}
						icon={<AlignRightIcon />}
						title="Align Right"
					/>
					<Divider />
					<ToolButton
						action={() => execCommand("insertUnorderedList")}
						icon={<BulletListIcon />}
						title="Bullet List"
					/>
					<ToolButton
						action={() => execCommand("insertOrderedList")}
						icon={<NumberListIcon />}
						title="Numbered List"
					/>
					<Divider />
					<ToolButton
						action={() => execCommand("outdent")}
						icon={<OutdentIcon />}
						title="Outdent"
					/>
					<ToolButton
						action={() => execCommand("indent")}
						icon={<IndentIcon />}
						title="Indent"
					/>
					<Divider />
					<ToolButton
						action={() => execCommand("strikeThrough")}
						icon={<StrikeIcon />}
						title="Strikethrough"
					/>
					<ToolButton
						action={() => {
							const url = prompt("Enter URL:");
							if (url) execCommand("createLink", url);
						}}
						icon={<LinkIcon />}
						title="Insert Link"
					/>
					<ToolButton
						action={() => execCommand("unlink")}
						icon={<UnlinkIcon />}
						title="Remove Link"
					/>
					<select
						className="ml-auto px-2 py-1 text-sm border border-border-default rounded bg-bg-canvas"
						onChange={(e) => execCommand("fontSize", e.target.value)}
						disabled={disabled}
						defaultValue="3"
					>
						<option value="1">10px</option>
						<option value="2">12px</option>
						<option value="3">14px</option>
						<option value="4">16px</option>
						<option value="5">18px</option>
						<option value="6">24px</option>
						<option value="7">32px</option>
					</select>
				</div>

				{/* Editor content */}
				<div
					ref={editorRef}
					contentEditable={!disabled}
					onInput={handleContentChange}
					dangerouslySetInnerHTML={{ __html: value }}
					className={clsx(
						"p-3 outline-none overflow-auto",
						"prose prose-sm max-w-none",
						"focus:ring-2 focus:ring-inset focus:ring-border-focus"
					)}
					style={{ minHeight }}
					data-placeholder={placeholder}
				/>
			</div>
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

