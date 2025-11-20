import * as React from "react";
import { forwardRef, useState, useRef, useEffect } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const tooltipRecipe = cva(
	"absolute z-50 bg-bg-reversed text-fg-reversed text-xs px-3 py-2 rounded-sm shadow-md whitespace-nowrap pointer-events-none",
	{
		variants: {
			placement: {
				top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
				bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
				left: "right-full top-1/2 -translate-y-1/2 mr-2",
				right: "left-full top-1/2 -translate-y-1/2 ml-2",
			},
		},
		defaultVariants: {
			placement: "top",
		},
	}
);

const arrowRecipe = cva("absolute w-2 h-2 bg-bg-reversed rotate-45", {
	variants: {
		placement: {
			top: "top-full left-1/2 -translate-x-1/2 -mt-1",
			bottom: "bottom-full left-1/2 -translate-x-1/2 -mb-1",
			left: "left-full top-1/2 -translate-y-1/2 -ml-1",
			right: "right-full top-1/2 -translate-y-1/2 -mr-1",
		},
	},
	defaultVariants: {
		placement: "top",
	},
});

export interface TooltipProps extends VariantProps<typeof tooltipRecipe> {
	/** The content to display in the tooltip */
	content: React.ReactNode;
	/** The element that triggers the tooltip */
	children: React.ReactElement;
	/** Delay before showing tooltip (ms) */
	delay?: number;
	/** Whether to show an arrow */
	showArrow?: boolean;
	/** Additional className for the tooltip */
	className?: string;
}

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(function Tooltip(
	{ content, children, placement = "top", delay = 200, showArrow = true, className },
	ref
) {
	const [isVisible, setIsVisible] = useState(false);
	const timeoutRef = useRef<NodeJS.Timeout>();
	const containerRef = useRef<HTMLDivElement>(null);

	const handleMouseEnter = () => {
		timeoutRef.current = setTimeout(() => {
			setIsVisible(true);
		}, delay);
	};

	const handleMouseLeave = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		setIsVisible(false);
	};

	useEffect(() => {
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, []);

	return (
		<div
			ref={containerRef}
			className="relative inline-block"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onFocus={handleMouseEnter}
			onBlur={handleMouseLeave}
		>
			{children}
			{isVisible && content && (
				<div ref={ref} className={clsx(tooltipRecipe({ placement }), className)} role="tooltip">
					{content}
					{showArrow && <div className={arrowRecipe({ placement })} />}
				</div>
			)}
		</div>
	);
});

/**
 * TooltipHelp - A help icon with tooltip
 * This is a convenience component for showing help tooltips
 */
export interface TooltipHelpProps extends Omit<TooltipProps, "children"> {
	/** Size of the help icon */
	size?: "sm" | "md" | "lg";
	/** Additional className for the icon container */
	iconClassName?: string;
}

const HelpIcon = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
	const sizeMap = {
		sm: "w-4 h-4",
		md: "w-5 h-5",
		lg: "w-6 h-6",
	};

	return (
		<svg
			className={clsx(sizeMap[size], "text-fg-secondary")}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
			<path
				d="M8 8a2 2 0 114 0c0 .89-.5 1.5-1.5 2-.5.25-.5.5-.5 1"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<circle cx="10" cy="14" r="0.5" fill="currentColor" />
		</svg>
	);
};

export const TooltipHelp = forwardRef<HTMLDivElement, TooltipHelpProps>(function TooltipHelp(
	{ content, size = "md", placement = "top", delay, showArrow, className, iconClassName },
	ref
) {
	return (
		<Tooltip
			ref={ref}
			content={content}
			placement={placement}
			delay={delay}
			showArrow={showArrow}
			className={className}
		>
			<button
				type="button"
				className={clsx(
					"inline-flex items-center justify-center rounded-full hover:bg-bg-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus p-0.5",
					iconClassName
				)}
				aria-label="Help"
			>
				<HelpIcon size={size} />
			</button>
		</Tooltip>
	);
});

