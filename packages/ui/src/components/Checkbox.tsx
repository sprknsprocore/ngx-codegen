import * as React from "react";
import { forwardRef } from "react";
import clsx from "clsx";

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
	/** Checkbox label */
	label?: string;
	/** Helper or description text */
	description?: string;
	/** Visual state of checkbox */
	validationState?: "none" | "error" | "success";
	/** Indeterminate state (partially checked) */
	indeterminate?: boolean;
	/** Size variant */
	size?: "sm" | "md";
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
	{ className, label, description, validationState = "none", indeterminate = false, disabled, size = "md", ...rest },
	ref
) {
	const hasError = validationState === "error";
	const hasSuccess = validationState === "success";

	const checkboxRef = React.useRef<HTMLInputElement>(null);
	React.useImperativeHandle(ref, () => checkboxRef.current!);

	React.useEffect(() => {
		if (checkboxRef.current) {
			checkboxRef.current.indeterminate = indeterminate;
		}
	}, [indeterminate]);

	const checkboxSize = size === "sm" ? "w-4 h-4" : "w-5 h-5";

	return (
		<label
			className={clsx(
				"inline-flex items-start gap-2",
				disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
				className
			)}
		>
			<div className="relative flex items-center">
				<input
					ref={checkboxRef}
					type="checkbox"
					disabled={disabled}
					className={clsx(
						checkboxSize,
						"rounded border-2 bg-bg-canvas text-bg-brand transition-colors",
						"focus:outline-none focus:ring-2 focus:ring-border-focus focus:ring-offset-2",
						"checked:bg-bg-brand checked:border-bg-brand",
						"disabled:cursor-not-allowed disabled:opacity-50",
						hasError && "border-state-danger focus:ring-state-danger",
						hasSuccess && "border-state-success focus:ring-state-success",
						!hasError && !hasSuccess && "border-border-default",
						"appearance-none",
						"cursor-pointer"
					)}
					style={{
						backgroundImage: rest.checked || indeterminate
							? `url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3E${
									indeterminate
										? "%3Cpath d='M4 8h8' stroke='white' stroke-width='2' stroke-linecap='round'/%3E"
										: "%3Cpath d='M13 4L6 11L3 8' stroke='white' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E"
							  }%3C/svg%3E")`
							: "none",
						backgroundSize: "100% 100%",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}
					{...rest}
				/>
			</div>
			{(label || description) && (
				<div className="flex-1 min-w-0 pt-0.5">
					{label && (
						<div
							className={clsx(
								"text-sm font-medium",
								hasError ? "text-state-danger" : "text-fg-default",
								disabled && "text-fg-disabled"
							)}
						>
							{label}
						</div>
					)}
					{description && (
						<div
							className={clsx(
								"text-sm mt-0.5",
								hasError ? "text-state-danger" : "text-fg-secondary",
								disabled && "text-fg-disabled"
							)}
						>
							{description}
						</div>
					)}
				</div>
			)}
		</label>
	);
});

