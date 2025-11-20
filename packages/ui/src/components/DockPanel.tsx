import * as React from "react";
import { forwardRef } from "react";
import { Panel, type PanelProps } from "./Panel";

export interface DockPanelProps extends Omit<PanelProps, "showBackdrop"> {
	/**
	 * Whether the panel is docked (pinned)
	 */
	docked?: boolean;
	/**
	 * Callback when dock state changes
	 */
	onDockChange?: (docked: boolean) => void;
}

/**
 * DockPanel - A panel that can be docked to the side of the page
 * Typically used for tool panels, property inspectors, etc.
 * Does not have a backdrop overlay.
 */
export const DockPanel = forwardRef<HTMLDivElement, DockPanelProps>(function DockPanel(
	{ docked = false, onDockChange, title, showCloseButton = true, ...rest },
	ref
) {
	const enhancedTitle = title && (
		<div className="flex items-center gap-2 w-full">
			<span className="flex-1">{title}</span>
			<button
				type="button"
				onClick={() => onDockChange?.(!docked)}
				className="p-1 hover:bg-bg-surface rounded transition-colors"
				aria-label={docked ? "Undock panel" : "Dock panel"}
				title={docked ? "Undock panel" : "Dock panel"}
			>
				{docked ? (
					<svg
						className="w-4 h-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
						/>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
						/>
					</svg>
				) : (
					<svg
						className="w-4 h-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
						/>
					</svg>
				)}
			</button>
		</div>
	);

	return (
		<Panel
			ref={ref}
			title={enhancedTitle}
			showBackdrop={false}
			showCloseButton={showCloseButton}
			{...rest}
		/>
	);
});

