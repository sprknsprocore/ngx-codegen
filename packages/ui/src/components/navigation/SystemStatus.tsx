import * as React from "react";
import { forwardRef } from "react";
import clsx from "clsx";

export type SystemStatusType = "operational" | "loading" | "critical" | "major" | "maintenance" | "minor";

export interface SystemStatusProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Current system status
	 */
	status: SystemStatusType;
	/**
	 * Optional status message
	 */
	message?: string;
	/**
	 * Callback when status is clicked
	 */
	onClick?: () => void;
}

const statusConfig: Record<SystemStatusType, { label: string; color: string; icon: string }> = {
	operational: {
		label: "All Systems Operational",
		color: "text-state-success bg-bg-success",
		icon: "✓",
	},
	loading: {
		label: "Checking Status...",
		color: "text-fg-secondary bg-bg-tertiary",
		icon: "⟳",
	},
	critical: {
		label: "Critical Issue",
		color: "text-state-danger bg-bg-error",
		icon: "!",
	},
	major: {
		label: "Major Outage",
		color: "text-state-danger bg-bg-error",
		icon: "!",
	},
	maintenance: {
		label: "Scheduled Maintenance",
		color: "text-state-info bg-state-selected",
		icon: "⚙",
	},
	minor: {
		label: "Minor Issue",
		color: "text-state-warn bg-bg-warning",
		icon: "⚠",
	},
};

export const SystemStatus = forwardRef<HTMLDivElement, SystemStatusProps>(function SystemStatus(
	{ className, status, message, onClick, ...rest },
	ref
) {
	const config = statusConfig[status];
	const isClickable = onClick !== undefined;

	const content = (
		<div
			className={clsx(
				"flex items-center gap-2 px-2 py-2 rounded-md transition-colors",
				config.color,
				isClickable && "cursor-pointer hover:opacity-80 focus-visible:ring-2 focus-visible:ring-border-focus",
				className
			)}
			{...rest}
		>
			<span className="text-base">{config.icon}</span>
			<span className="text-sm font-normal tracking-wide leading-5">
				{message || config.label}
			</span>
		</div>
	);

	if (isClickable) {
		return (
			<button ref={ref as any} type="button" onClick={onClick} className="w-full text-left border-0 bg-transparent p-0">
				{content}
			</button>
		);
	}

	return (
		<div ref={ref} className="w-full">
			{content}
		</div>
	);
});

