import * as React from "react";
import { forwardRef } from "react";
import clsx from "clsx";

export interface BreadcrumbItem {
	label: string;
	href?: string;
	onClick?: () => void;
}

export interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Breadcrumb navigation items */
	breadcrumbs?: BreadcrumbItem[];
	/** Heading text */
	heading: string;
	/** Tabs component or tabs configuration */
	tabs?: React.ReactNode;
	/** Action buttons (rendered on the right) */
	actions?: React.ReactNode;
}

export const PageHeader = forwardRef<HTMLDivElement, PageHeaderProps>(function PageHeader(
	{ className, breadcrumbs, heading, tabs, actions, ...rest },
	ref
) {
	return (
		<div ref={ref} className={clsx("border-b border-border-default bg-bg-canvas", className)} {...rest}>
			<div className="px-6 py-4">
				{/* Breadcrumbs */}
				{breadcrumbs && breadcrumbs.length > 0 && (
					<nav className="flex items-center gap-2 mb-3 text-sm text-fg-secondary">
						{breadcrumbs.map((item, index) => {
							const isLast = index === breadcrumbs.length - 1;
							return (
								<React.Fragment key={index}>
									{item.href || item.onClick ? (
										<a
											href={item.href}
											onClick={item.onClick}
											className={clsx(
												"hover:text-fg-default transition-colors",
												isLast && "text-fg-default font-semibold"
											)}
										>
											{item.label}
										</a>
									) : (
										<span className={clsx(isLast && "text-fg-default font-semibold")}>{item.label}</span>
									)}
									{!isLast && <span className="text-fg-disabled">›</span>}
								</React.Fragment>
							);
						})}
					</nav>
				)}

				{/* Header row with heading and actions */}
				<div className="flex items-center justify-between mb-4">
					<h1 className="text-2xl font-bold text-fg-default">{heading}</h1>
					{actions && <div className="flex items-center gap-2">{actions}</div>}
				</div>

				{/* Tabs */}
				{tabs && <div className="mt-4">{tabs}</div>}
			</div>
		</div>
	);
});

export interface PageHeaderTabsProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Array of tab objects */
	tabs: Array<{
		label: string;
		active?: boolean;
		onClick?: () => void;
		href?: string;
	}>;
	/** Additional tabs in a "More" dropdown */
	moreTab?: React.ReactNode;
}

export const PageHeaderTabs = forwardRef<HTMLDivElement, PageHeaderTabsProps>(function PageHeaderTabs(
	{ className, tabs, moreTab, ...rest },
	ref
) {
	return (
		<div ref={ref} className={clsx("flex items-center gap-1", className)} {...rest}>
			{tabs.map((tab, index) => {
				const Component = tab.href ? "a" : "button";
				return (
					<Component
						key={index}
						href={tab.href}
						onClick={tab.onClick}
						className={clsx(
							"px-4 py-2 text-sm font-medium transition-colors border-b-2",
							tab.active
								? "border-orange-50 text-fg-default"
								: "border-transparent text-fg-secondary hover:text-fg-default hover:border-gray-85"
						)}
					>
						{tab.label}
					</Component>
				);
			})}
			{moreTab && <div className="ml-1">{moreTab}</div>}
		</div>
	);
});

