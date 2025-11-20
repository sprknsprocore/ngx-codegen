import * as React from "react";
import { forwardRef } from "react";
import clsx from "clsx";

export interface NavSearchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
	/**
	 * Callback when search is triggered
	 */
	onSearch?: (value: string) => void;
	/**
	 * Whether to show the search icon button
	 */
	showSearchButton?: boolean;
	/**
	 * Keyboard shortcut hint (e.g., "Ctrl + K")
	 */
	shortcutHint?: string;
	/**
	 * Whether the input is in the navigation bar (dark theme)
	 */
	variant?: "dark" | "light";
}

export const NavSearch = forwardRef<HTMLInputElement, NavSearchProps>(function NavSearch(
	{
		className,
		onSearch,
		showSearchButton = true,
		shortcutHint,
		variant = "dark",
		placeholder = "Search or Ask a Question",
		...rest
	},
	ref
) {
	const [value, setValue] = React.useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSearch?.(value);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handleSubmit(e);
		}
	};

	const isDark = variant === "dark";

	return (
		<form onSubmit={handleSubmit} className={clsx("relative flex items-center", className)}>
		{/* Search Icon */}
		<div
			className={clsx(
				"absolute left-3 pointer-events-none",
				isDark ? "text-fg-reversed opacity-60" : "text-fg-muted"
			)}
		>
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
					<circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
					<path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
				</svg>
			</div>

			{/* Input */}
			<input
				ref={ref}
				type="search"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				onKeyDown={handleKeyDown}
				placeholder={placeholder}
			className={clsx(
				"w-full h-10 pl-10 pr-20 rounded-md border transition-colors text-sm tracking-wide leading-5",
				"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
				isDark
					? "bg-white/10 border-white/10 text-fg-reversed placeholder:text-fg-reversed/60"
					: "bg-bg-canvas border-border-default text-fg-default placeholder:text-fg-disabled",
				className
			)}
				{...rest}
			/>

			{/* Shortcut Hint or Clear Button */}
			<div className="absolute right-3 flex items-center gap-2">
			{value && (
				<button
					type="button"
					onClick={() => setValue("")}
					className={clsx(
						"w-5 h-5 flex items-center justify-center rounded hover:bg-white/10",
						isDark ? "text-fg-reversed opacity-60" : "text-fg-muted"
					)}
					aria-label="Clear search"
				>
						<svg width="12" height="12" viewBox="0 0 12 12" fill="none">
							<path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
						</svg>
					</button>
				)}
			{shortcutHint && !value && (
				<kbd
					className={clsx(
						"px-1.5 py-0.5 text-xs rounded border font-mono",
						isDark
							? "bg-white/10 border-white/20 text-fg-reversed opacity-60"
							: "bg-bg-surface border-border-default text-fg-secondary"
					)}
				>
					{shortcutHint}
				</kbd>
			)}
			</div>
		</form>
	);
});

