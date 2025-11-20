import * as React from "react";
import { forwardRef } from "react";
import clsx from "clsx";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	variant?: "elevated" | "outline" | "ghost";
	radius?: "sm" | "md" | "lg" | "xl";
	padding?: "3" | "4" | "5" | "6";
}

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
	{ className, variant = "outline", radius = "lg", padding = "4", ...rest },
	ref
) {
	const variantMap: Record<NonNullable<CardProps["variant"]>, string> = {
		elevated: "bg-bg-surface shadow-1",
		outline: "bg-bg-canvas border border-border-default",
		ghost: "bg-transparent",
	};
	const radiusMap: Record<NonNullable<CardProps["radius"]>, string> = {
		sm: "rounded-sm",
		md: "rounded-md",
		lg: "rounded-lg",
		xl: "rounded-xl",
	};
	return (
		<div
			ref={ref}
			className={clsx(variantMap[variant], radiusMap[radius], `p-${padding}`, className)}
			{...rest}
		/>
	);
});


