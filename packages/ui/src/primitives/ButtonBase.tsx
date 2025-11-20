import * as React from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const buttonRecipe = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-md transition-colors disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
	{
		variants: {
			size: {
				sm: "h-8 px-3 text-sm",
				md: "h-9 px-4 text-md",
				lg: "h-10 px-5 text-lg",
			},
			emphasis: {
				primary: "bg-bg-brand text-fg-onbrand hover:opacity-95",
				secondary: "bg-bg-surface text-fg-default border border-border-default hover:bg-bg-canvas",
				tertiary: "bg-transparent text-fg-default hover:bg-bg-surface",
			},
			tone: {
				neutral: "",
				brand: "",
				success: "bg-state-success text-fg-onbrand hover:opacity-95",
				warn: "bg-state-warn text-fg-onbrand hover:opacity-95",
				danger: "bg-state-danger text-fg-onbrand hover:opacity-95",
			},
			shadow: {
				none: "",
				"1": "shadow-1",
				"2": "shadow-2",
				"3": "shadow-3",
				"4": "shadow-4",
			},
		},
		compoundVariants: [
			{ emphasis: "primary", tone: "brand", class: "bg-bg-brand" },
			{ emphasis: "secondary", tone: "brand", class: "border-border-default" },
			{ emphasis: "tertiary", tone: "brand", class: "text-fg-default" },
		],
		defaultVariants: {
			size: "md",
			emphasis: "primary",
			tone: "brand",
			shadow: "none",
		},
	}
);

export interface ButtonBaseProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonRecipe> {}

export const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>(function ButtonBase(
	{ className, size, emphasis, tone, shadow, ...rest },
	ref
) {
	return (
		<button ref={ref} className={clsx(buttonRecipe({ size, emphasis, tone, shadow }), className)} {...rest} />
	);
});


