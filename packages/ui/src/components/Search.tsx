import * as React from "react";
import { forwardRef } from "react";
import clsx from "clsx";

export interface SearchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
	/** Size variant */
	size?: "sm" | "md" | "lg";
	/** Show clear button when there's a value */
	clearable?: boolean;
	/** Callback when clear button is clicked */
	onClear?: () => void;
	/** Loading state */
	loading?: boolean;
	/** Validation state */
	validationState?: "none" | "invalid" | "valid";
}

export const Search = forwardRef<HTMLInputElement, SearchProps>(function Search(
	{
		className,
		size = "md",
		clearable = true,
		onClear,
		loading = false,
		validationState = "none",
		value,
		disabled,
		...rest
	},
	ref
) {
	const hasValue = value !== undefined && value !== "";
	const hasError = validationState === "invalid";
	const hasSuccess = validationState === "valid";

	const handleClear = () => {
		onClear?.();
	};

	const sizeClasses = {
		sm: "h-8 pl-9 pr-3 text-sm",
		md: "h-9 pl-10 pr-3.5 text-md",
		lg: "h-10 pl-11 pr-4 text-lg",
	};

	const iconSizeClasses = {
		sm: "w-4 h-4 left-3",
		md: "w-4 h-4 left-3.5",
		lg: "w-5 h-5 left-4",
	};

	const buttonSizeClasses = {
		sm: "right-2 w-5 h-5",
		md: "right-2.5 w-5 h-5",
		lg: "right-3 w-6 h-6",
	};

	return (
		<div className={clsx("relative w-full", className)}>
			{/* Search Icon */}
			<div
				className={clsx(
					"absolute top-1/2 -translate-y-1/2 pointer-events-none text-fg-muted",
					iconSizeClasses[size]
				)}
			>
				<svg
					className="w-full h-full"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<circle cx="11" cy="11" r="8" />
					<path d="m21 21-4.35-4.35" />
				</svg>
			</div>

			{/* Input */}
			<input
				ref={ref}
				type="search"
				value={value}
				disabled={disabled}
				className={clsx(
					"w-full rounded-md border bg-bg-canvas text-fg-default placeholder:text-fg-muted outline-none transition-colors",
					"border-border-default",
					"focus:ring-2 focus:ring-border-focus focus:border-border-focus",
					disabled && "opacity-50 pointer-events-none",
					hasError && "border-state-danger focus:ring-state-danger focus:border-state-danger",
					hasSuccess && "border-state-success focus:ring-state-success focus:border-state-success",
					clearable && hasValue && "pr-10",
					sizeClasses[size]
				)}
				{...rest}
			/>

			{/* Clear Button or Loading Spinner */}
			{clearable && hasValue && !loading && (
				<button
					type="button"
					onClick={handleClear}
					disabled={disabled}
					className={clsx(
						"absolute top-1/2 -translate-y-1/2 p-1 hover:bg-bg-surface rounded transition-colors text-fg-muted hover:text-fg-default",
						buttonSizeClasses[size],
						disabled && "opacity-50 pointer-events-none"
					)}
					aria-label="Clear search"
				>
					<svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			)}

			{/* Loading Spinner */}
			{loading && (
				<div
					className={clsx(
						"absolute top-1/2 -translate-y-1/2 text-fg-muted pointer-events-none",
						buttonSizeClasses[size]
					)}
				>
					<svg
						className="w-full h-full animate-spin"
						fill="none"
						viewBox="0 0 24 24"
					>
						<circle
							className="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							strokeWidth="4"
						/>
						<path
							className="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						/>
					</svg>
				</div>
			)}
		</div>
	);
});

