import * as React from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { ButtonBase } from "../primitives/ButtonBase";

const toggleRecipe = cva(
	"rounded-sm transition-all border-2 font-medium",
	{
	variants: {
		size: {
			sm: "h-6 px-2 text-xs min-w-12",
			md: "h-8 px-3 text-sm min-w-16",
			lg: "h-10 px-4 text-md min-w-20",
		},
		selected: {
			true: "bg-bg-tertiary border-bg-brand text-fg-brand hover:bg-bg-secondary",
			false: "bg-bg-surface border-border-default text-fg-default hover:bg-bg-secondary",
		},
			loading: {
				true: "cursor-wait pointer-events-none",
				false: "",
			},
		},
		defaultVariants: {
			size: "md",
			selected: false,
			loading: false,
		},
	}
);

export interface ToggleProps
	extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "size"> {
	size?: "sm" | "md" | "lg";
	selected?: boolean;
	loading?: boolean;
}

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(function Toggle(
	{ className, size = "md", selected = false, loading = false, disabled, children, ...rest },
	ref
) {
	return (
		<button
			ref={ref}
			type="button"
			role="switch"
			aria-checked={selected}
			disabled={disabled || loading}
			className={clsx(
				toggleRecipe({ size, selected, loading }),
				"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-50 focus-visible:ring-offset-2",
				disabled && "opacity-50 cursor-not-allowed",
				className
			)}
			{...rest}
		>
			{loading ? (
				<span className="inline-flex items-center justify-center">
					<svg
						className="animate-spin h-4 w-4"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<circle
							className="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							strokeWidth="4"
						/>
						<path
							className="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						/>
					</svg>
				</span>
			) : (
				children
			)}
		</button>
	);
});

