import * as React from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const tag = cva("inline-flex items-center rounded-md whitespace-nowrap", {
	variants: {
		size: {
			sm: "text-xs px-2 py-0.5",
			md: "text-sm px-2.5 py-0.5",
			lg: "text-md px-3 py-1",
		},
		variant: {
			soft: "bg-bg-surface text-fg-default",
			outline: "border border-border-default text-fg-default",
		},
	},
	defaultVariants: {
		size: "md",
		variant: "soft",
	},
});

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof tag> {}

export const Tag = forwardRef<HTMLSpanElement, TagProps>(function Tag({ className, size, variant, ...rest }, ref) {
	return <span ref={ref} className={clsx(tag({ size, variant }), className)} {...rest} />;
});


