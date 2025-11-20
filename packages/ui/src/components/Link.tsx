import * as React from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const linkRecipe = cva(
	"underline underline-offset-2 decoration-1 transition-colors focus:outline-none focus:ring-2 focus:ring-border-focus focus:ring-offset-2",
	{
		variants: {
			size: {
				sm: "text-sm",
				md: "text-md",
				lg: "text-lg",
			},
		tone: {
			default: "text-fg-brand hover:text-fg-brand-hover",
			secondary: "text-fg-secondary hover:text-fg-default",
			reversed: "text-fg-reversed hover:opacity-80",
		},
			disabled: {
				true: "text-fg-disabled cursor-not-allowed pointer-events-none no-underline",
				false: "",
			},
		},
		defaultVariants: {
			size: "md",
			tone: "default",
			disabled: false,
		},
	}
);

export interface LinkProps
	extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "disabled">,
		VariantProps<typeof linkRecipe> {
	/** Whether the link is disabled */
	disabled?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
	{ className, size, tone, disabled, ...rest },
	ref
) {
	return (
		<a
			ref={ref}
			className={clsx(linkRecipe({ size, tone, disabled }), className)}
			aria-disabled={disabled ? "true" : undefined}
			tabIndex={disabled ? -1 : undefined}
			{...rest}
		/>
	);
});

