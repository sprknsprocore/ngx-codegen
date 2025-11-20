import * as React from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { Avatar, type AvatarProps } from "./Avatar";

const avatarStack = cva("inline-flex items-center", {
	variants: {
		size: {
			sm: "h-6",
			md: "h-8",
			lg: "h-10",
			xl: "h-12",
		},
	},
	defaultVariants: {
		size: "md",
	},
});

export interface AvatarStackProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
		VariantProps<typeof avatarStack> {
	/** Array of avatar data */
	avatars: Array<{
		src?: string;
		name?: string;
		initials?: string;
		alt?: string;
	}>;
	/** Maximum number of avatars to display before showing "+X" */
	max?: number;
	/** Spacing between avatars (negative for overlap) */
	spacing?: "overlap" | "touching" | "spaced";
}

const spacingMap = {
	overlap: "-ml-2",
	touching: "ml-0",
	spaced: "ml-2",
};

export const AvatarStack = forwardRef<HTMLDivElement, AvatarStackProps>(function AvatarStack(
	{ className, size, avatars, max = 5, spacing = "overlap", ...rest },
	ref
) {
	const visibleAvatars = avatars.slice(0, max);
	const remainingCount = Math.max(0, avatars.length - max);

	return (
		<div
			ref={ref}
			role="group"
			aria-label={`${avatars.length} users`}
			className={clsx(avatarStack({ size }), className)}
			{...rest}
		>
			{visibleAvatars.map((avatar, index) => (
				<div
					key={index}
					className={clsx(
						"relative ring-2 ring-white rounded-full",
						index > 0 && spacingMap[spacing]
					)}
					style={{ zIndex: visibleAvatars.length - index }}
				>
					<Avatar
						size={size}
						src={avatar.src}
						name={avatar.name}
						initials={avatar.initials}
						alt={avatar.alt}
					/>
				</div>
			))}
		{remainingCount > 0 && (
			<div
				className={clsx(
					"relative inline-flex items-center justify-center rounded-full bg-fg-muted text-fg-onbrand font-semibold ring-2 ring-bg-canvas",
					spacingMap[spacing],
					{
						"h-6 w-6 text-xs": size === "sm",
						"h-8 w-8 text-sm": size === "md",
						"h-10 w-10 text-base": size === "lg",
						"h-12 w-12 text-lg": size === "xl",
					}
				)}
				style={{ zIndex: 0 }}
			>
					<span>+{remainingCount}</span>
				</div>
			)}
		</div>
	);
});


