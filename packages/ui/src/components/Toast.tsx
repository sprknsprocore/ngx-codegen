import * as React from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const toastRecipe = cva(
	"flex items-start gap-3 rounded-sm px-4 py-3 text-fg-onbrand shadow-lg min-w-80 max-w-md",
	{
		variants: {
			variant: {
				success: "bg-state-success",
				error: "bg-state-danger",
				info: "bg-state-info",
				warning: "bg-state-warn",
			},
		},
		defaultVariants: {
			variant: "info",
		},
	}
);

const SuccessIcon = () => (
	<svg
		width="20"
		height="20"
		viewBox="0 0 20 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className="shrink-0 mt-0.5"
	>
		<path
			d="M16.25 5.625L7.5 14.375L3.75 10.625"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const ErrorIcon = () => (
	<svg
		width="20"
		height="20"
		viewBox="0 0 20 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className="shrink-0 mt-0.5"
	>
		<circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="2" />
		<path
			d="M10 6.25V10.625"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
		/>
		<circle cx="10" cy="13.125" r="0.625" fill="currentColor" />
	</svg>
);

const InfoIcon = () => (
	<svg
		width="20"
		height="20"
		viewBox="0 0 20 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className="shrink-0 mt-0.5"
	>
		<circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="2" />
		<path
			d="M10 9.375V13.75"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
		/>
		<circle cx="10" cy="6.875" r="0.625" fill="currentColor" />
	</svg>
);

const WarningIcon = () => (
	<svg
		width="20"
		height="20"
		viewBox="0 0 20 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className="shrink-0 mt-0.5"
	>
		<path
			d="M10 3.75L17.5 16.25H2.5L10 3.75Z"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M10 8.75V11.25"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
		/>
		<circle cx="10" cy="13.75" r="0.625" fill="currentColor" />
	</svg>
);

const CloseIcon = () => (
	<svg
		width="16"
		height="16"
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M12 4L4 12M4 4L12 12"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export interface ToastProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
		VariantProps<typeof toastRecipe> {
	/** The message to display */
	message: React.ReactNode;
	/** Optional callback when close button is clicked */
	onClose?: () => void;
	/** Whether to show the close button */
	dismissible?: boolean;
}

export const Toast = forwardRef<HTMLDivElement, ToastProps>(function Toast(
	{ className, variant = "info", message, onClose, dismissible = true, ...rest },
	ref
) {
	const iconMap = {
		success: <SuccessIcon />,
		error: <ErrorIcon />,
		info: <InfoIcon />,
		warning: <WarningIcon />,
	};

	const icon = variant ? iconMap[variant] : null;

	return (
		<div ref={ref} className={clsx(toastRecipe({ variant }), className)} role="alert" {...rest}>
			{icon}
			<div className="flex-1 text-sm leading-5">{message}</div>
			{dismissible && (
				<button
					type="button"
					onClick={onClose}
					className="shrink-0 p-0.5 hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded"
					aria-label="Close notification"
				>
					<CloseIcon />
				</button>
			)}
		</div>
	);
});

