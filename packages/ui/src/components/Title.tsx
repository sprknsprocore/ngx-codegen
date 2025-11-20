import * as React from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const title = cva("flex items-center gap-2 font-semibold text-fg-default", {
	variants: {
		size: {
			h1: "text-2xl",
			h2: "text-xl",
			h3: "text-lg",
			h4: "text-md",
			h5: "text-sm",
			h6: "text-xs",
		},
		tone: {
			default: "text-fg-default",
			muted: "text-fg-muted",
			brand: "text-bg-brand",
		},
	},
	defaultVariants: {
		size: "h2",
		tone: "default",
	},
});

export interface TitleProps
	extends React.HTMLAttributes<HTMLHeadingElement>,
		VariantProps<typeof title> {
	/** HTML heading level (affects semantic element, not styling) */
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	/** Icon to display before the title */
	icon?: React.ReactNode;
	/** Badge or content to display after the title */
	badge?: React.ReactNode;
}

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(function Title(
	{ className, size, tone, as = "h2", icon, badge, children, ...rest },
	ref
) {
	const Component = as;
	return (
		<Component ref={ref} className={clsx(title({ size, tone }), className)} {...rest}>
			{icon && <span className="flex-shrink-0">{icon}</span>}
			<span className="flex-1">{children}</span>
			{badge && <span className="flex-shrink-0">{badge}</span>}
		</Component>
	);
});

