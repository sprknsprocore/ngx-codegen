import * as React from "react";
import { forwardRef } from "react";
import clsx from "clsx";

type GapKey =
	| "0"
	| "0.5"
	| "1"
	| "1.5"
	| "2"
	| "2.5"
	| "3"
	| "4"
	| "5"
	| "6"
	| "8"
	| "10"
	| "12";

export interface PillsProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Gap between pills (spacing token key)
	 */
	gap?: GapKey;
	/**
	 * Whether pills should wrap to next line
	 */
	wrap?: boolean;
	/**
	 * Maximum number of pills to display before showing overflow
	 */
	maxVisible?: number;
}

export const Pills = forwardRef<HTMLDivElement, PillsProps>(function Pills(
	{ className, gap = "2", wrap = true, children, maxVisible, ...rest },
	ref
) {
	const childArray = React.Children.toArray(children);
	const visibleChildren = maxVisible ? childArray.slice(0, maxVisible) : childArray;
	const hiddenCount = maxVisible ? childArray.length - maxVisible : 0;

	return (
		<div
			ref={ref}
			className={clsx(
				"inline-flex items-center",
				wrap && "flex-wrap",
				`gap-${gap}`,
				className
			)}
			{...rest}
		>
			{visibleChildren}
			{hiddenCount > 0 && (
				<span className="text-sm text-fg-secondary font-semibold">
					+{hiddenCount}
				</span>
			)}
		</div>
	);
});

