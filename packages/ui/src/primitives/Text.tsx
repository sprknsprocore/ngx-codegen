import * as React from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const textRecipe = cva("text-fg-default", {
	variants: {
		size: {
			xs: "text-xs",
			sm: "text-sm",
			md: "text-md",
			lg: "text-lg",
			xl: "text-xl",
			"2xl": "text-2xl",
		},
		weight: {
			regular: "font-normal",
			medium: "font-medium",
			semibold: "font-semibold",
			bold: "font-bold",
		},
		tone: {
			default: "text-fg-default",
			muted: "text-fg-muted",
			onbrand: "text-fg-onbrand",
			brand: "text-bg-brand", // for on-brand text on brand surfaces
		},
	},
	defaultVariants: {
		size: "md",
		weight: "regular",
		tone: "default",
	},
});

export interface TextProps
	extends React.HTMLAttributes<HTMLSpanElement>,
		VariantProps<typeof textRecipe> {}

export const Text = forwardRef<HTMLSpanElement, TextProps>(function Text(
	{ className, size, weight, tone, ...rest },
	ref
) {
	return <span ref={ref} className={clsx(textRecipe({ size, weight, tone }), className)} {...rest} />;
});


