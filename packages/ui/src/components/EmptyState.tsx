import * as React from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { Stack } from "../primitives/Stack";

const emptyState = cva("flex flex-col items-center justify-center text-center", {
	variants: {
		size: {
			sm: "p-6 gap-2",
			md: "p-8 gap-3",
			lg: "p-12 gap-4",
		},
	},
	defaultVariants: {
		size: "md",
	},
});

export interface EmptyStateProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof emptyState> {
	/** Icon or illustration to display */
	icon?: React.ReactNode;
	/** Main heading */
	heading: string;
	/** Description text */
	description?: string;
	/** Primary action button */
	primaryAction?: React.ReactNode;
	/** Secondary action button */
	secondaryAction?: React.ReactNode;
}

export const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(function EmptyState(
	{
		className,
		size,
		icon,
		heading,
		description,
		primaryAction,
		secondaryAction,
		...rest
	},
	ref
) {
	return (
		<div ref={ref} className={clsx(emptyState({ size }), className)} {...rest}>
			{icon && (
				<div className="text-fg-secondary">
					{icon}
				</div>
			)}
			<Stack gap="1" className="max-w-md">
				<h3 className="text-h2 text-fg-default">{heading}</h3>
				{description && (
					<p className="text-body text-fg-secondary">{description}</p>
				)}
			</Stack>
			{(primaryAction || secondaryAction) && (
				<div className="flex items-center gap-3 mt-2">
					{primaryAction}
					{secondaryAction}
				</div>
			)}
		</div>
	);
});

// EmptyStateCard - a card variant with border
export interface EmptyStateCardProps extends EmptyStateProps {
	/** Whether to show a dashed border (for dropzones) */
	dashed?: boolean;
}

export const EmptyStateCard = forwardRef<HTMLDivElement, EmptyStateCardProps>(
	function EmptyStateCard(
		{ className, dashed, ...rest },
		ref
	) {
		return (
			<div
				ref={ref}
				className={clsx(
					"bg-bg-surface rounded-sm",
					dashed
						? "border-2 border-dashed border-border-default"
						: "border border-border-default",
					className
				)}
			>
				<EmptyState {...rest} />
			</div>
		);
	}
);

// Preset empty states for common scenarios
export interface EmptyStateNoDataProps
	extends Omit<EmptyStateProps, "icon" | "heading" | "description"> {
	/** Custom heading (defaults to "No data") */
	heading?: string;
	/** Custom description */
	description?: string;
}

export const EmptyStateNoData = forwardRef<HTMLDivElement, EmptyStateNoDataProps>(
	function EmptyStateNoData(
		{ heading = "No data", description = "There is no data to display.", ...rest },
		ref
	) {
		return (
			<EmptyState
				ref={ref}
				icon={
					<svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
						<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
					</svg>
				}
				heading={heading}
				description={description}
				{...rest}
			/>
		);
	}
);

export interface EmptyStateNoResultsProps
	extends Omit<EmptyStateProps, "icon" | "heading" | "description"> {
	/** Custom heading (defaults to "No results found") */
	heading?: string;
	/** Custom description */
	description?: string;
}

export const EmptyStateNoResults = forwardRef<HTMLDivElement, EmptyStateNoResultsProps>(
	function EmptyStateNoResults(
		{
			heading = "No results found",
			description = "Try adjusting your search or filters.",
			...rest
		},
		ref
	) {
		return (
			<EmptyState
				ref={ref}
				icon={
					<svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
						<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
					</svg>
				}
				heading={heading}
				description={description}
				{...rest}
			/>
		);
	}
);

export interface EmptyStateNoFilesProps
	extends Omit<EmptyStateProps, "icon" | "heading" | "description"> {
	/** Custom heading (defaults to "No files") */
	heading?: string;
	/** Custom description */
	description?: string;
}

export const EmptyStateNoFiles = forwardRef<HTMLDivElement, EmptyStateNoFilesProps>(
	function EmptyStateNoFiles(
		{
			heading = "No files",
			description = "Upload files to get started.",
			...rest
		},
		ref
	) {
		return (
			<EmptyState
				ref={ref}
				icon={
					<svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
						<path d="M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
					</svg>
				}
				heading={heading}
				description={description}
				{...rest}
			/>
		);
	}
);

export interface EmptyStateErrorProps
	extends Omit<EmptyStateProps, "icon" | "heading" | "description"> {
	/** Custom heading (defaults to "Something went wrong") */
	heading?: string;
	/** Custom description */
	description?: string;
}

export const EmptyStateError = forwardRef<HTMLDivElement, EmptyStateErrorProps>(
	function EmptyStateError(
		{
			heading = "Something went wrong",
			description = "We encountered an error. Please try again.",
			...rest
		},
		ref
	) {
		return (
			<EmptyState
				ref={ref}
				icon={
					<svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" className="text-state-danger">
						<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
					</svg>
				}
				heading={heading}
				description={description}
				{...rest}
			/>
		);
	}
);

