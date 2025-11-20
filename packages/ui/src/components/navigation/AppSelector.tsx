import * as React from "react";
import { forwardRef } from "react";
import clsx from "clsx";

export interface AppSelectorProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * Currently selected app name
	 */
	selectedApp?: string | null;
	/**
	 * Callback when selector is clicked
	 */
	onClick?: () => void;
}

export const AppSelector = forwardRef<HTMLButtonElement, AppSelectorProps>(function AppSelector(
	{ className, selectedApp, onClick, ...rest },
	ref
) {
	return (
		<button
			ref={ref}
			type="button"
			onClick={onClick}
			className={clsx(
			"flex items-center gap-1 pl-1.5 pr-0.5 py-0.5 rounded-md bg-white/10 text-fg-reversed transition-colors",
			"hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-border-focus",
				className
			)}
			{...rest}
		>
			{/* App Info */}
			<div className="flex flex-col items-start px-0.5 min-w-0">
				<span className="text-xs text-fg-reversed opacity-60 tracking-wider leading-4 whitespace-nowrap">Apps</span>
				<span className="text-sm font-semibold tracking-wide leading-5 whitespace-nowrap">
					{selectedApp || "Select an App"}
				</span>
			</div>

			{/* Dropdown Caret */}
			<div className="shrink-0 w-6 h-6 flex items-center justify-center">
				<svg width="10" height="7" viewBox="0 0 10 7" fill="none">
					<path d="M1 1.5L5 5.5L9 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
				</svg>
			</div>
		</button>
	);
});

