import * as React from "react";
import { type ElementType, forwardRef } from "react";
import clsx from "clsx";

type PropsOf<T extends ElementType> = React.ComponentPropsWithoutRef<T>;

export type BoxProps<T extends ElementType = "div"> = {
	as?: T;
	className?: string;
} & Omit<PropsOf<T>, "as" | "className">;

export const Box = forwardRef(function Box<T extends ElementType = "div">(
	props: BoxProps<T>,
	ref: React.Ref<Element>
) {
	const { as, className, ...rest } = props as BoxProps<ElementType>;
	const Component = (as ?? "div") as ElementType;
	return <Component ref={ref as any} className={clsx(className)} {...rest} />;
}) as <T extends ElementType = "div">(p: BoxProps<T> & { ref?: React.Ref<Element> }) => JSX.Element;


