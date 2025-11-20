import * as React from "react";
import { forwardRef, useState, useRef, useEffect } from "react";
import clsx from "clsx";

export interface DropdownFlyoutOption {
	label: string;
	value: string;
	icon?: React.ReactNode;
	disabled?: boolean;
	children?: DropdownFlyoutOption[];
	onClick?: () => void;
}

export interface DropdownFlyoutProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
	/** Menu options (can be nested) */
	options: DropdownFlyoutOption[];
	/** Trigger element (button, etc.) */
	trigger?: React.ReactNode;
	/** Callback when an option is selected */
	onSelect?: (value: string) => void;
	/** Width of each menu level */
	menuWidth?: number;
	/** Alignment of the first menu relative to trigger */
	align?: "start" | "end";
	/** Whether menu is open (controlled) */
	open?: boolean;
	/** Callback when open state changes */
	onOpenChange?: (open: boolean) => void;
}

interface SubMenuProps {
	option: DropdownFlyoutOption;
	onSelect: (value: string) => void;
	menuWidth: number;
	depth: number;
}

const SubMenu = ({ option, onSelect, menuWidth, depth }: SubMenuProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [position, setPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
	const itemRef = useRef<HTMLButtonElement>(null);
	const submenuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (isOpen && itemRef.current) {
			const rect = itemRef.current.getBoundingClientRect();
			const viewportHeight = window.innerHeight;
			const viewportWidth = window.innerWidth;

			let top = rect.top;
			let left = rect.right;

			// Check if submenu would overflow viewport
			const submenuHeight = submenuRef.current?.offsetHeight || 300;
			if (top + submenuHeight > viewportHeight) {
				top = Math.max(0, viewportHeight - submenuHeight - 20);
			}

			// Check if submenu would overflow right edge
			if (left + menuWidth > viewportWidth) {
				left = rect.left - menuWidth;
			}

			setPosition({ top, left });
		}
	}, [isOpen, menuWidth]);

	const handleClick = () => {
		if (option.children && option.children.length > 0) {
			setIsOpen(!isOpen);
		} else {
			option.onClick?.();
			onSelect(option.value);
		}
	};

	const hasChildren = option.children && option.children.length > 0;

	return (
		<>
			<button
				ref={itemRef}
				type="button"
				onClick={handleClick}
				onMouseEnter={() => hasChildren && setIsOpen(true)}
				onMouseLeave={() => hasChildren && setIsOpen(false)}
				disabled={option.disabled}
				className={clsx(
					"w-full px-3 py-2 text-left text-sm transition-colors flex items-center justify-between gap-2",
					"hover:bg-bg-surface focus:outline-none focus:bg-bg-surface",
					"disabled:text-fg-disabled disabled:cursor-not-allowed disabled:hover:bg-transparent",
					!option.disabled && "text-fg-default"
				)}
			>
				<div className="flex items-center gap-2 flex-1 min-w-0">
					{option.icon && <span className="flex-shrink-0">{option.icon}</span>}
					<span className="truncate">{option.label}</span>
				</div>
				{hasChildren && (
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						className="flex-shrink-0 text-fg-secondary"
					>
						<path
							d="M6 4L10 8L6 12"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				)}
			</button>

			{hasChildren && isOpen && (
				<div
					ref={submenuRef}
					className="fixed z-50"
					style={{
						top: `${position.top}px`,
						left: `${position.left}px`,
						width: `${menuWidth}px`,
					}}
					onMouseEnter={() => setIsOpen(true)}
					onMouseLeave={() => setIsOpen(false)}
				>
					<div className="bg-bg-canvas border border-border-default rounded-lg shadow-2 overflow-hidden py-1">
						{option.children!.map((child) => (
							<SubMenu
								key={child.value}
								option={child}
								onSelect={onSelect}
								menuWidth={menuWidth}
								depth={depth + 1}
							/>
						))}
					</div>
				</div>
			)}
		</>
	);
};

export const DropdownFlyout = forwardRef<HTMLDivElement, DropdownFlyoutProps>(function DropdownFlyout(
	{
		className,
		options,
		trigger,
		onSelect,
		menuWidth = 200,
		align = "start",
		open: controlledOpen,
		onOpenChange,
		...rest
	},
	ref
) {
	const [internalOpen, setInternalOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const triggerRef = useRef<HTMLButtonElement>(null);

	const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

	const setIsOpen = (value: boolean) => {
		if (controlledOpen === undefined) {
			setInternalOpen(value);
		}
		onOpenChange?.(value);
	};

	const handleSelect = (value: string) => {
		onSelect?.(value);
		setIsOpen(false);
	};

	const handleTriggerClick = () => {
		setIsOpen(!isOpen);
	};

	// Close menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen]);

	const defaultTrigger = (
		<button
			ref={triggerRef}
			type="button"
			onClick={handleTriggerClick}
			className="p-2 hover:bg-bg-surface rounded transition-colors"
			aria-label="Open menu"
		>
			<svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-fg-default">
				<circle cx="10" cy="4" r="1.5" fill="currentColor" />
				<circle cx="10" cy="10" r="1.5" fill="currentColor" />
				<circle cx="10" cy="16" r="1.5" fill="currentColor" />
			</svg>
		</button>
	);

	return (
		<div ref={ref} className={clsx("relative inline-block", className)} {...rest}>
			<div ref={containerRef}>
				{trigger ? (
					<div onClick={handleTriggerClick}>{trigger}</div>
				) : (
					defaultTrigger
				)}

				{isOpen && (
					<div
						className={clsx(
							"absolute z-40 mt-2 top-full",
							align === "start" ? "left-0" : "right-0"
						)}
						style={{ width: `${menuWidth}px` }}
					>
						<div className="bg-bg-canvas border border-border-default rounded-lg shadow-2 overflow-hidden py-1">
							{options.map((option) => (
								<SubMenu
									key={option.value}
									option={option}
									onSelect={handleSelect}
									menuWidth={menuWidth}
									depth={0}
								/>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
});

