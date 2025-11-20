import * as React from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const avatar = cva("inline-flex items-center justify-center rounded-full shrink-0 overflow-hidden", {
	variants: {
		size: {
			sm: "h-6 w-6 text-xs",
			md: "h-8 w-8 text-sm",
			lg: "h-10 w-10 text-base",
			xl: "h-12 w-12 text-lg",
		},
		variant: {
			image: "bg-bg-tertiary",
			initials: "bg-fg-muted text-fg-onbrand font-semibold",
			icon: "bg-fg-muted text-fg-onbrand",
		},
	},
	defaultVariants: {
		size: "md",
		variant: "initials",
	},
});

export interface AvatarProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
		VariantProps<typeof avatar> {
	/** Image source URL */
	src?: string;
	/** Alt text for the image */
	alt?: string;
	/** User's name - used to generate initials if no image */
	name?: string;
	/** Explicitly provide initials (overrides name) */
	initials?: string;
	/** Custom content to display */
	children?: React.ReactNode;
}

function getInitials(name: string): string {
	const parts = name.trim().split(/\s+/);
	if (parts.length === 0) return "?";
	if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
	return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(function Avatar(
	{ className, size, variant: variantProp, src, alt, name, initials, children, ...rest },
	ref
) {
	const [imageError, setImageError] = React.useState(false);

	// Determine variant based on props
	let variant = variantProp;
	if (!variant) {
		if (src && !imageError) {
			variant = "image";
		} else if (initials || name) {
			variant = "initials";
		} else {
			variant = "icon";
		}
	}

	// Reset image error when src changes
	React.useEffect(() => {
		setImageError(false);
	}, [src]);

	const displayInitials = initials || (name ? getInitials(name) : "");

	return (
		<div
			ref={ref}
			className={clsx(avatar({ size, variant }), className)}
			role="img"
			aria-label={alt || name || "Avatar"}
			{...rest}
		>
			{src && !imageError ? (
				<img
					src={src}
					alt={alt || name || ""}
					className="h-full w-full object-cover"
					onError={() => setImageError(true)}
				/>
			) : children ? (
				children
			) : variant === "initials" && displayInitials ? (
				<span>{displayInitials}</span>
			) : (
				// Default icon
				<svg width="60%" height="60%" viewBox="0 0 16 16" fill="currentColor">
					<path d="M8 8a3 3 0 100-6 3 3 0 000 6zM8 9c-3.314 0-6 2.462-6 5.5v.5h12v-.5c0-3.038-2.686-5.5-6-5.5z" />
				</svg>
			)}
		</div>
	);
});


