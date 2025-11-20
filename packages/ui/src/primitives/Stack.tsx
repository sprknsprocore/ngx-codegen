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

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
	gap?: GapKey;
	align?: "start" | "center" | "end" | "stretch";
	justify?: "start" | "center" | "end" | "between";
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(function Stack(
	{ className, gap = "3", align = "stretch", justify = "start", ...rest },
	ref
) {
	const alignMap: Record<NonNullable<StackProps["align"]>, string> = {
		start: "items-start",
		center: "items-center",
		end: "items-end",
		stretch: "items-stretch",
	};
	const justifyMap: Record<NonNullable<StackProps["justify"]>, string> = {
		start: "justify-start",
		center: "justify-center",
		end: "justify-end",
		between: "justify-between",
	};
	return (
		<div
			ref={ref}
			className={clsx("flex flex-col", `gap-${gap}`, alignMap[align], justifyMap[justify], className)}
			{...rest}
		/>
	);
});


