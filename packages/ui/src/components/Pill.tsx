import * as React from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const pill = cva(
	"inline-flex items-center gap-1 rounded-full font-semibold whitespace-nowrap transition-colors",
	{
		variants: {
			size: {
				sm: "text-xs px-2 py-0.5 h-5",
				md: "text-sm px-3 py-1 h-6",
			},
		variant: {
			solid: "",
			outline: "bg-bg-canvas",
		},
			tone: {
				neutral: "",
				blue: "",
				green: "",
				orange: "",
				red: "",
				yellow: "",
				cyan: "",
				magenta: "",
				purple: "",
			},
			disabled: {
				true: "opacity-50 cursor-not-allowed",
				false: "",
			},
		},
	compoundVariants: [
		// Solid variants - using semantic tokens
		{
			variant: "solid",
			tone: "neutral",
			class: "bg-fg-muted text-fg-onbrand",
		},
		{
			variant: "solid",
			tone: "blue",
			class: "bg-bg-brand text-fg-onbrand",
		},
		{
			variant: "solid",
			tone: "green",
			class: "bg-state-success text-fg-onbrand",
		},
		{
			variant: "solid",
			tone: "orange",
			class: "bg-state-warn text-fg-onbrand",
		},
		{
			variant: "solid",
			tone: "red",
			class: "bg-state-danger text-fg-onbrand",
		},
		{
			variant: "solid",
			tone: "yellow",
			class: "bg-state-warn text-fg-onbrand",
		},
		{
			variant: "solid",
			tone: "cyan",
			class: "bg-state-info text-fg-onbrand",
		},
		{
			variant: "solid",
			tone: "magenta",
			class: "bg-bg-brand text-fg-onbrand",
		},
		{
			variant: "solid",
			tone: "purple",
			class: "bg-bg-brand text-fg-onbrand",
		},
		// Outline variants - using semantic tokens
		{
			variant: "outline",
			tone: "neutral",
			class: "border border-border-default text-fg-default",
		},
		{
			variant: "outline",
			tone: "blue",
			class: "border border-bg-brand text-fg-brand",
		},
		{
			variant: "outline",
			tone: "green",
			class: "border border-state-success text-state-success",
		},
		{
			variant: "outline",
			tone: "orange",
			class: "border border-state-warn text-state-warn",
		},
		{
			variant: "outline",
			tone: "red",
			class: "border border-state-danger text-state-danger",
		},
		{
			variant: "outline",
			tone: "yellow",
			class: "border border-state-warn text-state-warn",
		},
		{
			variant: "outline",
			tone: "cyan",
			class: "border border-state-info text-state-info",
		},
		{
			variant: "outline",
			tone: "magenta",
			class: "border border-bg-brand text-fg-brand",
		},
		{
			variant: "outline",
			tone: "purple",
			class: "border border-bg-brand text-fg-brand",
		},
	],
		defaultVariants: {
			size: "md",
			variant: "solid",
			tone: "neutral",
			disabled: false,
		},
	}
);

const closeButton = cva(
	"inline-flex items-center justify-center rounded-full hover:opacity-75 transition-opacity flex-shrink-0",
	{
		variants: {
			size: {
				sm: "w-3 h-3",
				md: "w-4 h-4",
			},
		},
		defaultVariants: {
			size: "md",
		},
	}
);

export interface PillProps
	extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children">,
		VariantProps<typeof pill> {
	/**
	 * The content/label of the pill
	 */
	children: React.ReactNode;
	/**
	 * Optional icon to display before the label
	 */
	icon?: React.ReactNode;
	/**
	 * Whether the pill can be removed/closed
	 */
	removable?: boolean;
	/**
	 * Callback when the remove button is clicked
	 */
	onRemove?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Pill = forwardRef<HTMLSpanElement, PillProps>(function Pill(
	{ className, size, variant, tone, disabled, children, icon, removable, onRemove, ...rest },
	ref
) {
	return (
		<span
			ref={ref}
			className={clsx(pill({ size, variant, tone, disabled }), className)}
			{...rest}
		>
			{icon && <span className="inline-flex items-center">{icon}</span>}
			<span>{children}</span>
			{removable && (
				<button
					type="button"
					className={closeButton({ size })}
					onClick={onRemove}
					disabled={disabled}
					aria-label="Remove"
				>
					<svg
						width="100%"
						height="100%"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M9 3L3 9M3 3L9 9"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>
			)}
		</span>
	);
});

