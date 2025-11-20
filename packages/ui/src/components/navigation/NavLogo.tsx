import * as React from "react";
import { forwardRef } from "react";
import clsx from "clsx";

export interface NavLogoProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Image source for the logo
	 */
	src?: string;
	/**
	 * Alt text for the logo
	 */
	alt?: string;
	/**
	 * Whether the logo is clickable
	 */
	onClick?: () => void;
}

export const NavLogo = forwardRef<HTMLDivElement, NavLogoProps>(function NavLogo(
	{ className, src, alt = "Logo", onClick, ...rest },
	ref
) {
	const LogoContent = (
		<div
			className={clsx(
				"flex items-center justify-center gap-2 p-2 rounded-md overflow-clip",
				onClick && "cursor-pointer hover:bg-white/10 focus-within:ring-2 focus-within:ring-border-focus",
				className
			)}
			{...rest}
		>
			{src ? (
				<img src={src} alt={alt} className="h-3.5 w-auto" />
			) : (
				<div className="h-3.5 flex items-center">
					{/* Default Procore logo placeholder */}
					<svg width="106" height="14" viewBox="0 0 106 14" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0 0h106v14H0z" fill="currentColor" className="text-fg-reversed" />
					</svg>
				</div>
			)}
		</div>
	);

	if (onClick) {
		return (
			<button ref={ref as any} onClick={onClick} className="border-0 bg-transparent p-0">
				{LogoContent}
			</button>
		);
	}

	return (
		<div ref={ref} className={className}>
			{LogoContent}
		</div>
	);
});

