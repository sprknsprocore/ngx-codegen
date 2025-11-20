import * as React from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { ButtonBase, type ButtonBaseProps } from "../primitives/ButtonBase";

const button = cva("", {
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
	defaultVariants: {
		size: "md",
		emphasis: "primary",
		tone: "brand",
		shadow: "none",
	},
});

export interface ButtonProps
	extends Omit<ButtonBaseProps, "size">,
		VariantProps<typeof button> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
	{ className, size, emphasis, tone, shadow, ...rest },
	ref
) {
	return <ButtonBase ref={ref} className={clsx(button({ size, emphasis, tone, shadow }), className)} {...rest} />;
});


