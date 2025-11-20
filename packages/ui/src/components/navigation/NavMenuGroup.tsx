import * as React from "react";
import { forwardRef } from "react";
import clsx from "clsx";

export interface NavMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Group header text
	 */
	label?: string;
	/**
	 * Whether the group is collapsible
	 */
	collapsible?: boolean;
	/**
	 * Whether the group is initially collapsed (if collapsible)
	 */
	defaultCollapsed?: boolean;
}

export const NavMenuGroup = forwardRef<HTMLDivElement, NavMenuGroupProps>(function NavMenuGroup(
	{ className, children, label, collapsible = false, defaultCollapsed = false, ...rest },
	ref
) {
	const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);

	return (
		<div ref={ref} className={clsx("flex flex-col", className)} {...rest}>
			{label && (
				<button
					type="button"
					onClick={() => collapsible && setIsCollapsed(!isCollapsed)}
					className={clsx(
						"flex items-center px-2 py-2 text-sm font-semibold text-fg-reversed tracking-wide leading-5",
						collapsible
							? "hover:bg-white/10 rounded-md cursor-pointer focus-visible:ring-2 focus-visible:ring-border-focus"
							: "cursor-default"
					)}
					disabled={!collapsible}
				>
					{collapsible && (
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							className={clsx("mr-1 transition-transform", isCollapsed ? "" : "rotate-90")}
						>
							<path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
						</svg>
					)}
					{label}
				</button>
			)}
			{(!collapsible || !isCollapsed) && <div className="flex flex-col gap-0.5">{children}</div>}
		</div>
	);
});

