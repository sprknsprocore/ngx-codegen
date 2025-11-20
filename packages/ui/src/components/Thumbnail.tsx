import * as React from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const thumbnail = cva(
	"relative inline-flex items-center justify-center rounded-md overflow-hidden bg-bg-surface border transition-colors",
	{
		variants: {
			size: {
				sm: "w-12 h-12",
				md: "w-16 h-16",
				lg: "w-24 h-24",
				xl: "w-32 h-32",
			},
			state: {
				default: "border-border-default",
				selected: "border-border-focus ring-2 ring-border-focus",
				error: "border-state-danger",
				disabled: "opacity-50 pointer-events-none",
			},
			shape: {
				square: "rounded-md",
				circle: "rounded-full",
			},
		},
		defaultVariants: {
			size: "md",
			state: "default",
			shape: "square",
		},
	}
);

const badge = cva(
	"absolute flex items-center justify-center rounded-full border-2 border-bg-canvas",
	{
		variants: {
			position: {
				"top-right": "top-0 right-0 -translate-y-1/4 translate-x-1/4",
				"bottom-right": "bottom-0 right-0 translate-y-1/4 translate-x-1/4",
			},
			tone: {
				brand: "bg-bg-brand text-fg-onbrand",
				success: "bg-state-success text-fg-onbrand",
				danger: "bg-state-danger text-fg-onbrand",
				neutral: "bg-fg-muted text-fg-onbrand",
			},
			size: {
				sm: "w-5 h-5 text-xs",
				md: "w-6 h-6 text-sm",
			},
		},
		defaultVariants: {
			position: "top-right",
			tone: "brand",
			size: "md",
		},
	}
);

export interface ThumbnailProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
		VariantProps<typeof thumbnail> {
	/** Image src URL */
	src?: string;
	/** Alt text for image */
	alt?: string;
	/** Icon element to display instead of image */
	icon?: React.ReactNode;
	/** Badge content (icon or text) */
	badge?: React.ReactNode;
	/** Badge position */
	badgePosition?: VariantProps<typeof badge>["position"];
	/** Badge tone */
	badgeTone?: VariantProps<typeof badge>["tone"];
	/** Label text below thumbnail */
	label?: string;
}

export const Thumbnail = forwardRef<HTMLDivElement, ThumbnailProps>(function Thumbnail(
	{
		className,
		size,
		state,
		shape,
		src,
		alt,
		icon,
		badge: badgeContent,
		badgePosition,
		badgeTone,
		label,
		...rest
	},
	ref
) {
	return (
		<div className="inline-flex flex-col items-center gap-2">
			<div
				ref={ref}
				className={clsx(thumbnail({ size, state, shape }), className)}
				{...rest}
			>
				{src ? (
					<img src={src} alt={alt || ""} className="w-full h-full object-cover" />
				) : icon ? (
					<div className="flex items-center justify-center text-fg-muted">{icon}</div>
				) : (
					<div className="flex items-center justify-center text-fg-muted text-xs">
						{alt || "No preview"}
					</div>
				)}
				{badgeContent && (
					<div
						className={badge({
							position: badgePosition,
							tone: badgeTone,
							size: size === "sm" ? "sm" : "md",
						})}
					>
						{badgeContent}
					</div>
				)}
			</div>
			{label && (
				<span className="text-sm text-fg-default text-center max-w-full truncate">
					{label}
				</span>
			)}
		</div>
	);
});

