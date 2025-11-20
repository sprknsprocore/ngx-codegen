import * as React from "react";
import { forwardRef } from "react";
import clsx from "clsx";

export interface Project {
	id: string;
	name: string;
	companyName: string;
	imageUrl?: string;
}

export interface ProjectPickerProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onSelect"> {
	/**
	 * Currently selected project
	 */
	selectedProject?: Project | null;
	/**
	 * Callback when project is clicked
	 */
	onClick?: () => void;
	/**
	 * Size variant
	 */
	size?: "sm" | "md";
}

export const ProjectPicker = forwardRef<HTMLButtonElement, ProjectPickerProps>(function ProjectPicker(
	{ className, selectedProject, onClick, size = "md", ...rest },
	ref
) {
	const hasProject = selectedProject !== null && selectedProject !== undefined;

	return (
		<button
			ref={ref}
			type="button"
			onClick={onClick}
			className={clsx(
			"flex items-center gap-1 p-0.5 rounded-md bg-white/10 text-fg-reversed transition-colors",
			"hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-border-focus",
				className
			)}
			{...rest}
		>
			{/* Project Icon/Image */}
			<div className="shrink-0 w-9 h-9 rounded overflow-clip flex items-center justify-center bg-white/20">
				{selectedProject?.imageUrl ? (
					<img src={selectedProject.imageUrl} alt={selectedProject.name} className="w-full h-full object-cover" />
				) : (
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path
							d="M12 3L4 7v10l8 4 8-4V7l-8-4zm0 2l6 3v8l-6 3-6-3V8l6-3z"
							fill="currentColor"
							className="text-fg-reversed"
						/>
					</svg>
				)}
			</div>

			{/* Project Info */}
			<div className="flex flex-col items-start px-0.5 min-w-0">
				<span className="text-xs text-fg-reversed opacity-60 tracking-wider leading-4 whitespace-nowrap">
					{hasProject ? selectedProject.companyName : "Vertigo Construction"}
				</span>
				<span className="text-sm font-semibold tracking-wide leading-5 whitespace-nowrap">
					{hasProject ? selectedProject.name : "Select a Project"}
				</span>
			</div>

			{/* Dropdown Caret */}
			<div className="shrink-0 w-6 h-6 flex items-center justify-center">
				<svg width="10" height="7" viewBox="0 0 10 7" fill="none">
					<path d="M1 1.5L5 5.5L9 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
				</svg>
			</div>
		</button>
	);
});

