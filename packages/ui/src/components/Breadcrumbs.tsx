import * as React from "react";
import { forwardRef } from "react";
import clsx from "clsx";

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
	separator?: React.ReactNode;
}

const BreadcrumbsRoot = forwardRef<HTMLElement, BreadcrumbsProps>(function Breadcrumbs(
	{ className, separator = "›", children, ...rest },
	ref
) {
	const items = React.Children.toArray(children);

	return (
		<nav ref={ref} aria-label="Breadcrumb" className={clsx("flex items-center", className)} {...rest}>
			<ol className="flex items-center gap-2 text-sm">
				{items.map((child, index) => {
					const isLast = index === items.length - 1;
					return (
						<li key={index} className="flex items-center gap-2">
							{child}
							{!isLast && (
								<span className="text-fg-secondary" aria-hidden="true">
									{separator}
								</span>
							)}
						</li>
					);
				})}
			</ol>
		</nav>
	);
});

export interface BreadcrumbItemProps extends React.ComponentPropsWithoutRef<"a"> {
	active?: boolean;
	icon?: React.ReactNode;
}

const BreadcrumbItem = forwardRef<HTMLAnchorElement, BreadcrumbItemProps>(function BreadcrumbItem(
	{ className, active, icon, children, ...rest },
	ref
) {
	const Component = active ? "span" : "a";
	
	return (
		<Component
			ref={!active ? ref : undefined}
			className={clsx(
				"flex items-center gap-1.5 text-sm",
				active ? "text-fg-default font-semibold" : "text-fg-secondary hover:text-fg-default cursor-pointer",
				className
			)}
			aria-current={active ? "page" : undefined}
			{...(!active ? rest : {})}
		>
			{icon && <span className="inline-flex items-center">{icon}</span>}
			{children}
		</Component>
	);
});

export const Breadcrumbs = Object.assign(BreadcrumbsRoot, {
	Item: BreadcrumbItem,
});


