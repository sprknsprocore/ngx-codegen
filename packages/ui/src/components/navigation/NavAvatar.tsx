import * as React from "react";
import { forwardRef } from "react";
import clsx from "clsx";

export interface NavAvatarProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * User's display name or initials
	 */
	name?: string;
	/**
	 * Avatar image URL
	 */
	src?: string;
	/**
	 * Size of the avatar
	 */
	size?: "sm" | "md" | "lg";
	/**
	 * Whether the avatar has focus styling
	 */
	hasFocus?: boolean;
}

export const NavAvatar = forwardRef<HTMLButtonElement, NavAvatarProps>(function NavAvatar(
	{ className, name = "", src, size = "md", hasFocus = false, ...rest },
	ref
) {
	const sizeClasses = {
		sm: "w-8 h-8 text-xs",
		md: "w-10 h-10 text-sm",
		lg: "w-12 h-12 text-base",
	};

	// Get initials from name
	const initials = name
		.split(" ")
		.map((n) => n[0])
		.join("")
		.toUpperCase()
		.slice(0, 2);

	return (
		<button
			ref={ref}
			type="button"
			className={clsx(
				"rounded-full overflow-hidden flex items-center justify-center bg-bg-tertiary text-fg-default font-semibold",
				"hover:ring-2 hover:ring-gray-60 transition-all",
				hasFocus && "ring-2 ring-border-focus",
				"focus-visible:ring-2 focus-visible:ring-border-focus",
				sizeClasses[size],
				className
			)}
			{...rest}
		>
			{src ? (
				<img src={src} alt={name} className="w-full h-full object-cover" />
			) : (
				<span>{initials || "?"}</span>
			)}
		</button>
	);
});

