import * as React from "react";
import clsx from "clsx";

export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: "sm" | "md" | "lg";
  title?: string;
}

const sizeMap: Record<NonNullable<IconProps["size"]>, string> = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6"
};

export function Icon({
  size = "md",
  className,
  children,
  role = "img",
  ...rest
}: IconProps) {
  return (
    <svg
      role={role}
      className={clsx("inline-block align-middle text-fg-default", sizeMap[size], className)}
      aria-hidden={rest["aria-label"] ? undefined : true}
      {...rest}
    >
      {children}
    </svg>
  );
}


