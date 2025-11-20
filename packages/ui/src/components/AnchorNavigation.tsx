import * as React from "react";
import { forwardRef } from "react";
import clsx from "clsx";

export interface AnchorNavigationProps extends React.HTMLAttributes<HTMLElement> {
	/** Accessibility label for the navigation */
	"aria-label"?: string;
}

const AnchorNavigationRoot = forwardRef<HTMLElement, AnchorNavigationProps>(
	function AnchorNavigation({ className, children, "aria-label": ariaLabel, ...rest }, ref) {
		return (
			<nav
				ref={ref}
				aria-label={ariaLabel || "Anchor navigation"}
				className={clsx("flex flex-col", className)}
				{...rest}
			>
				{children}
			</nav>
		);
	}
);

export interface AnchorNavigationItemProps extends React.ComponentPropsWithoutRef<"a"> {
	/** Whether this item is currently active */
	active?: boolean;
}

const AnchorNavigationItem = forwardRef<HTMLAnchorElement, AnchorNavigationItemProps>(
	function AnchorNavigationItem({ className, active, children, ...rest }, ref) {
		return (
		<a
			ref={ref}
			className={clsx(
				"relative pl-4 py-2 text-sm border-l-4 transition-colors",
				active
					? "border-l-fg-default text-fg-default font-semibold bg-bg-surface"
					: "border-l-transparent text-fg-secondary hover:text-fg-default hover:bg-bg-tertiary",
				className
			)}
			aria-current={active ? "location" : undefined}
			{...rest}
		>
				{children}
			</a>
		);
	}
);

export const AnchorNavigation = Object.assign(AnchorNavigationRoot, {
	Item: AnchorNavigationItem,
});


