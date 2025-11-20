import * as React from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const badge = cva("inline-flex items-center rounded-full whitespace-nowrap", {
	variants: {
		size: {
			sm: "text-xs px-2 py-0.5",
			md: "text-sm px-2.5 py-0.5",
			lg: "text-md px-3 py-1",
		},
		variant: {
			solid: "",
			soft: "",
			outline: "",
		},
		tone: {
			neutral: "",
			brand: "",
			success: "",
			warn: "",
			danger: "",
		},
	},
	compoundVariants: [
		{ variant: "solid", tone: "neutral", class: "bg-fg-muted text-bg-canvas" },
		{ variant: "solid", tone: "brand", class: "bg-bg-brand text-fg-onbrand" },
		{ variant: "solid", tone: "success", class: "bg-state-success text-fg-onbrand" },
		{ variant: "solid", tone: "warn", class: "bg-state-warn text-fg-onbrand" },
		{ variant: "solid", tone: "danger", class: "bg-state-danger text-fg-onbrand" },

		{ variant: "soft", tone: "neutral", class: "bg-bg-surface text-fg-default" },
		{ variant: "soft", tone: "brand", class: "bg-bg-surface text-bg-brand" },
		{ variant: "soft", tone: "success", class: "bg-bg-surface text-state-success" },
		{ variant: "soft", tone: "warn", class: "bg-bg-surface text-state-warn" },
		{ variant: "soft", tone: "danger", class: "bg-bg-surface text-state-danger" },

		{ variant: "outline", tone: "neutral", class: "border border-border-default text-fg-default" },
		{ variant: "outline", tone: "brand", class: "border border-bg-brand text-bg-brand" },
		{ variant: "outline", tone: "success", class: "border border-state-success text-state-success" },
		{ variant: "outline", tone: "warn", class: "border border-state-warn text-state-warn" },
		{ variant: "outline", tone: "danger", class: "border border-state-danger text-state-danger" },
	],
	defaultVariants: {
		size: "md",
		variant: "soft",
		tone: "neutral",
	},
});

export interface BadgeProps
	extends React.HTMLAttributes<HTMLSpanElement>,
		VariantProps<typeof badge> {}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
	{ className, size, variant, tone, ...rest },
	ref
) {
	return <span ref={ref} className={clsx(badge({ size, variant, tone }), className)} {...rest} />;
});


