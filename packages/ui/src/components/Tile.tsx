import * as React from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { Badge } from "./Badge";

const tile = cva(
	"flex rounded-lg border bg-bg-canvas overflow-hidden transition-shadow hover:shadow-2",
	{
		variants: {
			orientation: {
				vertical: "flex-col",
				horizontal: "flex-row",
			},
			size: {
				sm: "",
				md: "",
				lg: "",
			},
		},
		defaultVariants: {
			orientation: "vertical",
			size: "md",
		},
	}
);

const imageContainer = cva("flex-shrink-0 bg-bg-surface overflow-hidden", {
	variants: {
		orientation: {
			vertical: "w-full",
			horizontal: "w-32",
		},
		size: {
			sm: "h-24",
			md: "h-32",
			lg: "h-48",
		},
	},
	compoundVariants: [
		{ orientation: "horizontal", size: "sm", class: "w-24 h-24" },
		{ orientation: "horizontal", size: "md", class: "w-32 h-32" },
		{ orientation: "horizontal", size: "lg", class: "w-48 h-48" },
	],
	defaultVariants: {
		orientation: "vertical",
		size: "md",
	},
});

export interface TileProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
		VariantProps<typeof tile> {
	/** Image source URL */
	imageSrc?: string;
	/** Image alt text */
	imageAlt?: string;
	/** Tile heading */
	title: React.ReactNode;
	/** Subheading text */
	subheading?: React.ReactNode;
	/** Description text */
	description?: React.ReactNode;
	/** Content block items (label-value pairs) */
	contentBlocks?: Array<{ label: string; value: React.ReactNode }>;
	/** Status badges */
	badges?: Array<{
		label: string;
		tone?: "neutral" | "brand" | "success" | "warn" | "danger";
	}>;
	/** Action buttons or elements */
	actions?: React.ReactNode;
}

export const Tile = forwardRef<HTMLDivElement, TileProps>(function Tile(
	{
		className,
		orientation,
		size,
		imageSrc,
		imageAlt,
		title,
		subheading,
		description,
		contentBlocks,
		badges,
		actions,
		...rest
	},
	ref
) {
	return (
		<div ref={ref} className={clsx(tile({ orientation, size }), className)} {...rest}>
			{imageSrc && (
				<div className={imageContainer({ orientation, size })}>
					<img src={imageSrc} alt={imageAlt || ""} className="w-full h-full object-cover" />
				</div>
			)}
			<div className="flex-1 flex flex-col gap-3 p-4">
				<div className="flex flex-col gap-1">
					{subheading && (
						<div className="text-sm text-fg-muted font-medium">{subheading}</div>
					)}
					<div className="text-lg font-semibold text-fg-default">{title}</div>
				</div>

				{description && <div className="text-sm text-fg-default">{description}</div>}

				{contentBlocks && contentBlocks.length > 0 && (
					<div className="flex flex-col gap-2">
						{contentBlocks.map((block, index) => (
							<div key={index} className="flex flex-col gap-0.5">
								<div className="text-xs text-fg-muted uppercase tracking-wide">
									{block.label}
								</div>
								<div className="text-sm text-fg-default font-medium">
									{block.value}
								</div>
							</div>
						))}
					</div>
				)}

				{badges && badges.length > 0 && (
					<div className="flex flex-wrap gap-2">
						{badges.map((badge, index) => (
							<Badge key={index} size="sm" tone={badge.tone || "neutral"}>
								{badge.label}
							</Badge>
						))}
					</div>
				)}

				{actions && <div className="flex gap-2 mt-auto pt-2">{actions}</div>}
			</div>
		</div>
	);
});

