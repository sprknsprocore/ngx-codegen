import * as React from "react";
import { forwardRef } from "react";
import { Panel, type PanelProps } from "./Panel";

export interface PagePanelProps extends Omit<PanelProps, "showBackdrop" | "closeOnBackdropClick"> {
	/**
	 * Whether backdrop should close panel on click (default: true for page panels)
	 */
	closeOnBackdropClick?: boolean;
}

/**
 * PagePanel - A modal-like panel that overlays the entire page
 * Typically used for forms, detailed views, settings, etc.
 * Always has a backdrop overlay.
 */
export const PagePanel = forwardRef<HTMLDivElement, PagePanelProps>(function PagePanel(
	{ closeOnBackdropClick = true, ...rest },
	ref
) {
	return (
		<Panel
			ref={ref}
			showBackdrop={true}
			closeOnBackdropClick={closeOnBackdropClick}
			{...rest}
		/>
	);
});

