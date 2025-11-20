import * as React from "react";
import { forwardRef } from "react";
import clsx from "clsx";

export interface NavIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * Icon to display (React element)
	 */
	icon: React.ReactNode;
	/**
	 * Accessible label
	 */
	label: string;
	/**
	 * Badge count to display
	 */
	badge?: number;
	/**
	 * Size variant
	 */
	size?: "sm" | "md";
	/**
	 * Theme variant
	 */
	variant?: "dark" | "light";
}

export const NavIconButton = forwardRef<HTMLButtonElement, NavIconButtonProps>(function NavIconButton(
	{ className, icon, label, badge, size = "md", variant = "dark", ...rest },
	ref
) {
	const sizeClasses = {
		sm: "w-8 h-8",
		md: "w-10 h-10",
	};

	const isDark = variant === "dark";

	return (
		<button
			ref={ref}
			type="button"
			aria-label={label}
		className={clsx(
			"relative flex items-center justify-center rounded-md transition-colors",
			isDark
				? "text-fg-reversed hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-border-focus"
				: "text-fg-default hover:bg-bg-surface focus-visible:ring-2 focus-visible:ring-border-focus",
			sizeClasses[size],
			className
		)}
			{...rest}
		>
			{icon}
		{badge !== undefined && badge > 0 && (
			<span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 flex items-center justify-center bg-state-danger text-fg-onbrand text-xs font-semibold rounded-full">
				{badge > 99 ? "99+" : badge}
			</span>
		)}
		</button>
	);
});

