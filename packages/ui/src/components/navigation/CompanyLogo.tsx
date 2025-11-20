import * as React from "react";
import { forwardRef } from "react";
import clsx from "clsx";

export interface CompanyLogoProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * Company name to display
	 */
	companyName: string;
	/**
	 * Company logo image URL (optional)
	 */
	logoUrl?: string;
	/**
	 * Callback when logo is clicked
	 */
	onClick?: () => void;
}

export const CompanyLogo = forwardRef<HTMLButtonElement, CompanyLogoProps>(function CompanyLogo(
	{ className, companyName, logoUrl, onClick, ...rest },
	ref
) {
	return (
		<button
			ref={ref}
			type="button"
			onClick={onClick}
			className={clsx(
				"flex items-center gap-2 px-2 py-2 rounded-md text-fg-reversed transition-colors",
				"hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-border-focus",
				className
			)}
			{...rest}
		>
			{logoUrl ? (
				<img src={logoUrl} alt={companyName} className="h-6 w-auto max-w-full object-contain" />
			) : (
				<span className="text-sm font-semibold tracking-wide leading-5 whitespace-nowrap">
					{companyName}
				</span>
			)}
		</button>
	);
});

