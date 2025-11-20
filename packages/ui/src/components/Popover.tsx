import * as React from "react";
import { forwardRef, useEffect, useRef, useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const popover = cva(
	"absolute bg-bg-canvas rounded-md border border-border-default z-50",
	{
		variants: {
			shadow: {
				"1": "shadow-1",
				"2": "shadow-2",
				"3": "shadow-3",
				"4": "shadow-4",
			},
			size: {
				sm: "min-w-48 max-w-64",
				md: "min-w-64 max-w-80",
				lg: "min-w-80 max-w-96",
				auto: "",
			},
		},
		defaultVariants: {
			shadow: "2",
			size: "md",
		},
	}
);

const popoverArrow = cva("absolute w-3 h-3 bg-bg-canvas border transform rotate-45", {
	variants: {
		placement: {
			top: "bottom-[-6px] left-1/2 -translate-x-1/2 border-b border-r border-border-default",
			bottom: "top-[-6px] left-1/2 -translate-x-1/2 border-t border-l border-border-default",
			left: "right-[-6px] top-1/2 -translate-y-1/2 border-r border-t border-border-default",
			right: "left-[-6px] top-1/2 -translate-y-1/2 border-l border-b border-border-default",
		},
	},
	defaultVariants: {
		placement: "bottom",
	},
});

export type PopoverPlacement = "top" | "bottom" | "left" | "right";

export interface PopoverProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, "content">,
		VariantProps<typeof popover> {
	/**
	 * Whether the popover is open
	 */
	open?: boolean;
	/**
	 * Callback when popover should close
	 */
	onClose?: () => void;
	/**
	 * The trigger element
	 */
	trigger?: React.ReactNode;
	/**
	 * The content to display in the popover
	 */
	content: React.ReactNode;
	/**
	 * Placement of the popover relative to the trigger
	 */
	placement?: PopoverPlacement;
	/**
	 * Whether to show an arrow pointing to the trigger
	 */
	showArrow?: boolean;
	/**
	 * Offset from the trigger in pixels
	 */
	offset?: number;
}

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(function Popover(
	{
		className,
		shadow,
		size,
		open: controlledOpen,
		onClose,
		trigger,
		content,
		placement = "bottom",
		showArrow = true,
		offset = 8,
		...rest
	},
	ref
) {
	const [internalOpen, setInternalOpen] = useState(false);
	const triggerRef = useRef<HTMLDivElement>(null);
	const popoverRef = useRef<HTMLDivElement>(null);

	const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
	const setIsOpen = onClose ? onClose : () => setInternalOpen(false);

	const handleTriggerClick = () => {
		if (controlledOpen === undefined) {
			setInternalOpen(!internalOpen);
		}
	};

	// Close on outside click
	useEffect(() => {
		if (!isOpen) return;

		const handleClickOutside = (event: MouseEvent) => {
			if (
				triggerRef.current &&
				!triggerRef.current.contains(event.target as Node) &&
				popoverRef.current &&
				!popoverRef.current.contains(event.target as Node)
			) {
				if (controlledOpen === undefined) {
					setInternalOpen(false);
				} else if (onClose) {
					onClose();
				}
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [isOpen, controlledOpen, onClose]);

	// Calculate position
	const [position, setPosition] = useState({ top: 0, left: 0 });

	useEffect(() => {
		if (!isOpen || !triggerRef.current || !popoverRef.current) return;

		const triggerRect = triggerRef.current.getBoundingClientRect();
		const popoverRect = popoverRef.current.getBoundingClientRect();

		let top = 0;
		let left = 0;

		switch (placement) {
			case "top":
				top = triggerRect.top - popoverRect.height - offset;
				left = triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2;
				break;
			case "bottom":
				top = triggerRect.bottom + offset;
				left = triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2;
				break;
			case "left":
				top = triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2;
				left = triggerRect.left - popoverRect.width - offset;
				break;
			case "right":
				top = triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2;
				left = triggerRect.right + offset;
				break;
		}

		setPosition({ top, left });
	}, [isOpen, placement, offset]);

	return (
		<div className="relative inline-block">
			<div ref={triggerRef} onClick={handleTriggerClick}>
				{trigger}
			</div>
			{isOpen && (
				<div
					ref={(node) => {
						popoverRef.current = node;
						if (typeof ref === "function") {
							ref(node);
						} else if (ref) {
							ref.current = node;
						}
					}}
					className={clsx(popover({ shadow, size }), className)}
					style={{
						top: `${position.top}px`,
						left: `${position.left}px`,
						position: "fixed",
					}}
					{...rest}
				>
					{showArrow && <div className={popoverArrow({ placement })} />}
					{content}
				</div>
			)}
		</div>
	);
});

/**
 * PopoverContent - Convenience component for styling popover content
 */
export const PopoverContent = forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(function PopoverContent({ className, ...props }, ref) {
	return <div ref={ref} className={clsx("p-4", className)} {...props} />;
});

/**
 * PopoverHeader - Convenience component for popover headers
 */
export const PopoverHeader = forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(function PopoverHeader({ className, ...props }, ref) {
	return (
		<div
			ref={ref}
			className={clsx(
				"px-4 py-3 border-b border-border-default font-semibold text-fg-default",
				className
			)}
			{...props}
		/>
	);
});

/**
 * PopoverFooter - Convenience component for popover footers
 */
export const PopoverFooter = forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(function PopoverFooter({ className, ...props }, ref) {
	return (
		<div
			ref={ref}
			className={clsx("px-4 py-3 border-t border-border-default", className)}
			{...props}
		/>
	);
});

