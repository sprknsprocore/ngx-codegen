import * as React from "react";
import { forwardRef } from "react";
import clsx from "clsx";

export interface NavMenuProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Whether the menu is currently open
	 */
	isOpen: boolean;
	/**
	 * Callback when menu should close
	 */
	onClose?: () => void;
	/**
	 * Menu title
	 */
	title?: string;
	/**
	 * Anchor element for positioning
	 */
	anchorEl?: HTMLElement | null;
	/**
	 * Menu width
	 */
	width?: string | number;
	/**
	 * Whether to show search bar at top
	 */
	showSearch?: boolean;
	/**
	 * Search placeholder
	 */
	searchPlaceholder?: string;
	/**
	 * Search value
	 */
	searchValue?: string;
	/**
	 * Search change handler
	 */
	onSearchChange?: (value: string) => void;
}

export const NavMenu = forwardRef<HTMLDivElement, NavMenuProps>(function NavMenu(
	{
		className,
		children,
		isOpen,
		onClose,
		title,
		width = 280,
		showSearch = false,
		searchPlaceholder = "Search...",
		searchValue = "",
		onSearchChange,
		...rest
	},
	ref
) {
	const menuRef = React.useRef<HTMLDivElement>(null);

	// Handle click outside
	React.useEffect(() => {
		if (!isOpen) return;

		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				onClose?.();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [isOpen, onClose]);

	// Handle escape key
	React.useEffect(() => {
		if (!isOpen) return;

		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onClose?.();
			}
		};

		document.addEventListener("keydown", handleEscape);
		return () => document.removeEventListener("keydown", handleEscape);
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<>
		{/* Backdrop */}
		<div
			className="fixed inset-0 bg-scrim-light z-40"
			onClick={onClose}
			aria-hidden="true"
		/>

		{/* Menu */}
		<div
			ref={menuRef}
			className={clsx(
				"fixed bg-bg-canvas rounded-lg shadow-lg z-50 flex flex-col overflow-hidden",
				className
			)}
			style={{ width: typeof width === "number" ? `${width}px` : width }}
			{...rest}
		>
				{/* Header */}
				{title && (
					<div className="flex items-center justify-between px-4 py-3 border-b border-border-default">
						<h3 className="text-base font-semibold text-fg-default">{title}</h3>
					<button
						type="button"
						onClick={onClose}
						className="w-6 h-6 flex items-center justify-center rounded hover:bg-bg-surface text-fg-secondary"
						aria-label="Close menu"
					>
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
								<path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
							</svg>
						</button>
					</div>
				)}

				{/* Search Bar */}
				{showSearch && (
					<div className="px-3 py-2 border-b border-border-default">
						<div className="relative">
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						className="absolute left-3 top-1/2 -translate-y-1/2 text-fg-muted"
					>
						<circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
						<path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
					</svg>
					<input
						type="search"
						value={searchValue}
						onChange={(e) => onSearchChange?.(e.target.value)}
						placeholder={searchPlaceholder}
						className="w-full h-9 pl-10 pr-3 rounded-md border border-border-default bg-bg-canvas text-sm text-fg-default placeholder:text-fg-disabled focus:outline-none focus:ring-2 focus:ring-border-focus"
					/>
						</div>
					</div>
				)}

				{/* Content */}
				<div className="flex-1 overflow-y-auto py-2">
					{children}
				</div>
			</div>
		</>
	);
});

