import * as React from "react";
import { forwardRef } from "react";
import clsx from "clsx";

export interface GlobalNavProps extends React.HTMLAttributes<HTMLElement> {
	/**
	 * Logo component or image URL
	 */
	logo?: React.ReactNode | string;
	/**
	 * Callback when logo is clicked
	 */
	onLogoClick?: () => void;
	/**
	 * Company logo or name
	 */
	companyLogo?: React.ReactNode;
	/**
	 * Project picker component
	 */
	projectPicker?: React.ReactNode;
	/**
	 * App selector component
	 */
	appSelector?: React.ReactNode;
	/**
	 * Search component
	 */
	search?: React.ReactNode;
	/**
	 * Left-side navigation items (menu items)
	 */
	leftItems?: React.ReactNode;
	/**
	 * Right-side action items (icons, avatar, etc.)
	 */
	rightItems?: React.ReactNode;
	/**
	 * Whether to show mobile menu button
	 */
	showMobileMenu?: boolean;
	/**
	 * Callback when mobile menu button is clicked
	 */
	onMobileMenuClick?: () => void;
	/**
	 * Whether the navigation is in mobile mode
	 */
	isMobile?: boolean;
}

export const GlobalNav = forwardRef<HTMLElement, GlobalNavProps>(function GlobalNav(
	{
		className,
		logo,
		onLogoClick,
		companyLogo,
		projectPicker,
		appSelector,
		search,
		leftItems,
		rightItems,
		showMobileMenu = false,
		onMobileMenuClick,
		isMobile = false,
		...rest
	},
	ref
) {
	return (
		<nav
			ref={ref}
			className={clsx(
				"w-full h-14 bg-bg-reversed flex items-center px-4 gap-3 shadow-md",
				className
			)}
			{...rest}
		>
			{/* Mobile Menu Button */}
			{showMobileMenu && (
				<button
					type="button"
					onClick={onMobileMenuClick}
					className="flex items-center justify-center w-10 h-10 rounded-md text-fg-reversed hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-border-focus lg:hidden"
					aria-label="Open menu"
				>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
					</svg>
				</button>
			)}

			{/* Logo */}
			{logo && (
				<div className="flex items-center shrink-0">
					{typeof logo === "string" ? (
					<button
						type="button"
						onClick={onLogoClick}
						className="p-2 rounded-md hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-border-focus"
					>
							<img src={logo} alt="Logo" className="h-3.5 w-auto" />
						</button>
					) : (
						logo
					)}
				</div>
			)}

			{/* Company Logo / Branding */}
			{companyLogo && !isMobile && (
				<div className="flex items-center shrink-0">
					{companyLogo}
				</div>
			)}

			{/* Project Picker */}
			{projectPicker && !isMobile && (
				<div className="flex items-center shrink-0">
					{projectPicker}
				</div>
			)}

			{/* Left Navigation Items */}
			{leftItems && !isMobile && (
				<div className="flex items-center gap-1 flex-1 min-w-0">
					{leftItems}
				</div>
			)}

			{/* Search */}
			{search && (
				<div className={clsx("flex items-center", isMobile ? "flex-1" : "max-w-md")}>
					{search}
				</div>
			)}

			{/* Spacer */}
			{!isMobile && <div className="flex-1" />}

			{/* App Selector */}
			{appSelector && !isMobile && (
				<div className="flex items-center shrink-0">
					{appSelector}
				</div>
			)}

			{/* Right Action Items */}
			{rightItems && (
				<div className="flex items-center gap-2 shrink-0">
					{rightItems}
				</div>
			)}
		</nav>
	);
});

