import * as React from "react";
import { forwardRef } from "react";
import clsx from "clsx";

type GapKey =
	| "0"
	| "0.5"
	| "1"
	| "1.5"
	| "2"
	| "2.5"
	| "3"
	| "4"
	| "5"
	| "6"
	| "8"
	| "10"
	| "12";

export interface InlineProps extends React.HTMLAttributes<HTMLDivElement> {
	gap?: GapKey;
	align?: "start" | "center" | "end" | "baseline";
	justify?: "start" | "center" | "end" | "between";
	wrap?: boolean;
}

export const Inline = forwardRef<HTMLDivElement, InlineProps>(function Inline(
	{ className, gap = "3", align = "center", justify = "start", wrap = false, ...rest },
	ref
) {
	const alignMap: Record<NonNullable<InlineProps["align"]>, string> = {
		start: "items-start",
		center: "items-center",
		end: "items-end",
		baseline: "items-baseline",
	};
	const justifyMap: Record<NonNullable<InlineProps["justify"]>, string> = {
		start: "justify-start",
		center: "justify-center",
		end: "justify-end",
		between: "justify-between",
	};
	return (
		<div
			ref={ref}
			className={clsx("flex", wrap && "flex-wrap", `gap-${gap}`, alignMap[align], justifyMap[justify], className)}
			{...rest}
		/>
	);
});


