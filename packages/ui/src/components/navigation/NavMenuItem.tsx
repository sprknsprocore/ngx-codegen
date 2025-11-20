import * as React from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const menuItemRecipe = cva(
	"flex items-center gap-1 px-2 py-2 rounded-md transition-colors relative group",
	{
		variants: {
			state: {
				default: "text-fg-reversed hover:bg-white/10",
				selected: "bg-white/10 text-fg-reversed",
				favorite: "text-fg-reversed hover:bg-white/10",
			},
		},
		defaultVariants: {
			state: "default",
		},
	}
);

export interface NavMenuItemProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof menuItemRecipe> {
	/**
	 * Icon to display (React element or icon component)
	 */
	icon?: React.ReactNode;
	/**
	 * Whether the item is favorited
	 */
	isFavorite?: boolean;
	/**
	 * Callback when favorite is toggled
	 */
	onToggleFavorite?: (e: React.MouseEvent) => void;
	/**
	 * Badge count to display
	 */
	badge?: number;
	/**
	 * Tag label (e.g., "Beta", "New")
	 */
	tag?: string;
	/**
	 * Tag color variant
	 */
	tagVariant?: "beta" | "new" | "pilot";
	/**
	 * Whether the item is currently selected
	 */
	selected?: boolean;
}

const tagColors = {
	beta: "bg-bg-surface text-fg-brand border-bg-surface",
	new: "bg-bg-surface text-fg-brand border-bg-surface",
	pilot: "bg-bg-warning text-fg-warning border-bg-warning",
};

export const NavMenuItem = forwardRef<HTMLButtonElement, NavMenuItemProps>(function NavMenuItem(
	{
		className,
		children,
		icon,
		isFavorite = false,
		onToggleFavorite,
		badge,
		tag,
		tagVariant = "beta",
		selected = false,
		state,
		...rest
	},
	ref
) {
	const itemState = selected ? "selected" : isFavorite ? "favorite" : state || "default";

	const handleFavoriteClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		onToggleFavorite?.(e);
	};

	return (
		<button
			ref={ref}
			className={clsx(menuItemRecipe({ state: itemState }), "focus-visible:ring-2 focus-visible:ring-border-focus", className)}
			{...rest}
		>
			<div className="flex items-center gap-2 flex-1 min-w-0">
				{icon && <div className="shrink-0 w-4 h-4 text-fg-reversed">{icon}</div>}
				<span className="text-sm tracking-wide leading-5 text-ellipsis overflow-hidden whitespace-nowrap flex-1 text-left">
					{children}
				</span>
				{tag && (
					<span
						className={clsx(
							"px-2 py-0.5 rounded-full text-xs font-semibold tracking-wider leading-4 border",
							tagColors[tagVariant]
						)}
					>
						{tag}
					</span>
				)}
			{badge !== undefined && badge > 0 && (
				<span className="px-2 py-0.5 rounded-full text-xs font-semibold tracking-wider leading-4 bg-state-danger text-fg-onbrand flex items-center">
					<span>{badge > 99 ? "99" : badge}</span>
					{badge > 99 && <span>+</span>}
				</span>
			)}
			</div>
		{onToggleFavorite && (
			<button
				type="button"
				onClick={handleFavoriteClick}
				className="shrink-0 w-6 h-6 flex items-center justify-center rounded hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-border-focus"
				aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
			>
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill={isFavorite ? "currentColor" : "none"}
					stroke="currentColor"
					strokeWidth="1.5"
					className="text-fg-reversed opacity-60"
				>
					<path d="M8 2.5l1.5 3 3.5.5-2.5 2.5.5 3.5-3-1.5-3 1.5.5-3.5L3 6l3.5-.5z" />
				</svg>
			</button>
		)}
		</button>
	);
});

