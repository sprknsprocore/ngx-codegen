import * as React from "react";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

const form = cva("w-full", {
	variants: {
		layout: {
			"1-column": "grid grid-cols-1 gap-4",
			"2-columns": "grid grid-cols-1 md:grid-cols-2 gap-4",
			"3-columns": "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
			"4-columns": "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
			stack: "flex flex-col gap-4",
		},
	},
	defaultVariants: {
		layout: "1-column",
	},
});

export interface FormProps
	extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "layout">,
		VariantProps<typeof form> {}

export const Form = forwardRef<HTMLFormElement, FormProps>(function Form(
	{ className, layout, children, ...rest },
	ref
) {
	return (
		<form ref={ref} className={clsx(form({ layout }), className)} {...rest}>
			{children}
		</form>
	);
});

// FormSection component for grouping form fields
export interface FormSectionProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Section title */
	title?: string;
	/** Section description */
	description?: string;
}

export const FormSection = forwardRef<HTMLDivElement, FormSectionProps>(function FormSection(
	{ className, title, description, children, ...rest },
	ref
) {
	return (
		<div ref={ref} className={clsx("w-full", className)} {...rest}>
			{(title || description) && (
				<div className="mb-4">
					{title && (
						<h3 className="text-h3 text-fg-default mb-1">{title}</h3>
					)}
					{description && (
						<p className="text-body text-fg-secondary">{description}</p>
					)}
				</div>
			)}
			{children}
		</div>
	);
});

