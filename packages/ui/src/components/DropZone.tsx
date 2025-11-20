import * as React from "react";
import { forwardRef, useRef, useState, useCallback } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { Stack } from "../primitives/Stack";

const dropzone = cva(
	"border-2 border-dashed rounded-sm transition-all cursor-pointer",
	{
	variants: {
		state: {
			idle: "border-border-default bg-bg-surface hover:border-border-hover hover:bg-bg-secondary",
			active: "border-border-focus bg-bg-tertiary",
			error: "border-border-error bg-bg-error",
			disabled: "border-border-default bg-bg-tertiary cursor-not-allowed opacity-50",
		},
			size: {
				sm: "p-6",
				md: "p-8",
				lg: "p-12",
			},
		},
		defaultVariants: {
			state: "idle",
			size: "md",
		},
	}
);

export interface DropZoneProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, "onDrop" | "size">,
		VariantProps<typeof dropzone> {
	/** Callback when files are dropped or selected */
	onDrop?: (files: File[]) => void;
	/** Accepted file types (e.g., "image/*", ".pdf") */
	accept?: string;
	/** Whether multiple files can be uploaded */
	multiple?: boolean;
	/** Maximum file size in bytes */
	maxSize?: number;
	/** Whether the dropzone is disabled */
	disabled?: boolean;
	/** Custom icon */
	icon?: React.ReactNode;
	/** Main heading text */
	heading?: string;
	/** Description text */
	description?: string;
	/** Additional helper text */
	helperText?: string;
	/** Error message */
	error?: string;
	/** Custom trigger button */
	trigger?: React.ReactNode;
}

export const DropZone = forwardRef<HTMLDivElement, DropZoneProps>(function DropZone(
	{
		className,
		state: externalState,
		size,
		onDrop,
		accept,
		multiple = true,
		maxSize,
		disabled,
		icon,
		heading = "Drop files here",
		description = "or click to browse",
		helperText,
		error,
		trigger,
		...rest
	},
	ref
) {
	const inputRef = useRef<HTMLInputElement>(null);
	const [isDragging, setIsDragging] = useState(false);
	const [internalError, setInternalError] = useState<string | undefined>();

	const currentError = error || internalError;
	const currentState = disabled
		? "disabled"
		: currentError
		? "error"
		: isDragging
		? "active"
		: externalState || "idle";

	const validateFiles = useCallback(
		(files: File[]): { valid: File[]; errors: string[] } => {
			const valid: File[] = [];
			const errors: string[] = [];

			files.forEach((file) => {
				// Check file size
				if (maxSize && file.size > maxSize) {
					errors.push(
						`${file.name} exceeds maximum size of ${(maxSize / 1024 / 1024).toFixed(1)} MB`
					);
					return;
				}

				// Check file type
				if (accept) {
					const acceptedTypes = accept.split(",").map((t) => t.trim());
					const fileExtension = `.${file.name.split(".").pop()}`;
					const isAccepted = acceptedTypes.some((type) => {
						if (type.startsWith(".")) {
							return fileExtension === type;
						}
						if (type.endsWith("/*")) {
							const category = type.split("/")[0];
							return file.type.startsWith(`${category}/`);
						}
						return file.type === type;
					});

					if (!isAccepted) {
						errors.push(`${file.name} is not an accepted file type`);
						return;
					}
				}

				valid.push(file);
			});

			return { valid, errors };
		},
		[accept, maxSize]
	);

	const handleFiles = useCallback(
		(files: FileList | null) => {
			if (!files || files.length === 0) return;

			const fileArray = Array.from(files);
			const { valid, errors } = validateFiles(fileArray);

			if (errors.length > 0) {
				setInternalError(errors[0]);
				setTimeout(() => setInternalError(undefined), 5000);
				return;
			}

			setInternalError(undefined);
			onDrop?.(valid);
		},
		[onDrop, validateFiles]
	);

	const handleDragEnter = useCallback((e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(true);
	}, []);

	const handleDragLeave = useCallback((e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		if (e.currentTarget === e.target) {
			setIsDragging(false);
		}
	}, []);

	const handleDragOver = useCallback((e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
	}, []);

	const handleDrop = useCallback(
		(e: React.DragEvent) => {
			e.preventDefault();
			e.stopPropagation();
			setIsDragging(false);

			if (disabled) return;

			handleFiles(e.dataTransfer.files);
		},
		[disabled, handleFiles]
	);

	const handleClick = useCallback(() => {
		if (disabled) return;
		inputRef.current?.click();
	}, [disabled]);

	const handleInputChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			handleFiles(e.target.files);
			// Reset input value so the same file can be selected again
			e.target.value = "";
		},
		[handleFiles]
	);

	return (
		<div
			ref={ref}
			className={clsx(dropzone({ state: currentState, size }), className)}
			onDragEnter={handleDragEnter}
			onDragLeave={handleDragLeave}
			onDragOver={handleDragOver}
			onDrop={handleDrop}
			onClick={handleClick}
			role="button"
			tabIndex={disabled ? -1 : 0}
			onKeyDown={(e) => {
				if ((e.key === "Enter" || e.key === " ") && !disabled) {
					e.preventDefault();
					handleClick();
				}
			}}
			aria-disabled={disabled}
			{...rest}
		>
			<input
				ref={inputRef}
				type="file"
				accept={accept}
				multiple={multiple}
				onChange={handleInputChange}
				disabled={disabled}
				className="sr-only"
				aria-hidden="true"
			/>
			<Stack gap="3" className="items-center text-center">
				{icon && (
					<div
						className={clsx(
							"text-fg-secondary",
							currentError && "text-state-danger"
						)}
					>
						{icon}
					</div>
				)}
				<Stack gap="1">
					<p className="text-h3 text-fg-default">{heading}</p>
					<p className="text-body text-fg-secondary">{description}</p>
					{helperText && !currentError && (
						<p className="text-small text-fg-muted">{helperText}</p>
					)}
					{currentError && (
						<p className="text-small text-state-danger">{currentError}</p>
					)}
				</Stack>
				{trigger}
			</Stack>
		</div>
	);
});

// DropZoneCompact - A more compact variant
export interface DropZoneCompactProps extends Omit<DropZoneProps, "icon" | "heading" | "description"> {
	/** Custom label */
	label?: string;
}

export const DropZoneCompact = forwardRef<HTMLDivElement, DropZoneCompactProps>(
	function DropZoneCompact({ label = "Choose file or drag here", ...rest }, ref) {
		return (
			<DropZone
				ref={ref}
				size="sm"
				heading={label}
				description=""
				icon={
					<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
						<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
					</svg>
				}
				{...rest}
			/>
		);
	}
);

