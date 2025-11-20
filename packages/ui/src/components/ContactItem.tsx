import * as React from "react";
import { forwardRef } from "react";
import clsx from "clsx";

export interface ContactItemProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Contact full name */
	name: string;
	/** Contact title or company */
	subtitle?: string;
	/** Avatar initials (1-2 characters) */
	initials?: string;
	/** Avatar image URL */
	avatarUrl?: string;
	/** Whether the item is interactive (clickable) */
	interactive?: boolean;
	/** Whether the item is selected */
	selected?: boolean;
	/** Whether the item is disabled */
	disabled?: boolean;
	/** Size variant */
	size?: "sm" | "md" | "lg";
	/** Link variant - displays name as a link */
	asLink?: boolean;
}

export const ContactItem = forwardRef<HTMLDivElement, ContactItemProps>(function ContactItem(
	{
		className,
		name,
		subtitle,
		initials,
		avatarUrl,
		interactive = false,
		selected = false,
		disabled = false,
		size = "md",
		asLink = false,
		onClick,
		...rest
	},
	ref
) {
	const sizeMap = {
		sm: {
			avatar: "w-6 h-6 text-xs",
			text: "text-xs",
			gap: "gap-2",
		},
		md: {
			avatar: "w-8 h-8 text-sm",
			text: "text-sm",
			gap: "gap-2.5",
		},
		lg: {
			avatar: "w-10 h-10 text-base",
			text: "text-base",
			gap: "gap-3",
		},
	};

	const sizes = sizeMap[size];

	// Generate initials from name if not provided
	const displayInitials =
		initials ||
		name
			.split(" ")
			.map((word) => word[0])
			.filter(Boolean)
			.slice(0, 2)
			.join("")
			.toUpperCase();

	const Component = interactive && !disabled ? "button" : "div";

	return (
		<Component
			ref={ref as any}
			onClick={disabled ? undefined : onClick}
			disabled={disabled}
			className={clsx(
				"flex items-center w-full",
				sizes.gap,
				interactive && !disabled && "cursor-pointer hover:bg-bg-surface transition-colors",
				interactive && "py-2 px-3 rounded-md text-left",
				selected && "bg-bg-secondary",
				disabled && "opacity-50 cursor-not-allowed",
				className
			)}
			{...rest}
		>
		{/* Avatar */}
		<div
			className={clsx(
				sizes.avatar,
				"rounded-full flex-shrink-0 flex items-center justify-center font-semibold",
				avatarUrl ? "bg-bg-tertiary" : "bg-fg-muted text-fg-onbrand"
			)}
		>
				{avatarUrl ? (
					<img src={avatarUrl} alt={name} className="w-full h-full rounded-full object-cover" />
				) : (
					<span>{displayInitials}</span>
				)}
			</div>

			{/* Text */}
			<div className="flex-1 min-w-0">
				<div
					className={clsx(
						sizes.text,
						"font-medium truncate",
						asLink ? "text-fg-brand hover:underline" : "text-fg-default",
						disabled && "text-fg-disabled"
					)}
				>
					{name}
				</div>
				{subtitle && (
					<div
						className={clsx(
							sizes.text,
							"text-fg-secondary truncate mt-0.5",
							disabled && "text-fg-disabled"
						)}
					>
						{subtitle}
					</div>
				)}
			</div>
		</Component>
	);
});

