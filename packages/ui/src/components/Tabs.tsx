import * as React from "react";
import { forwardRef, createContext, useContext, useState } from "react";
import clsx from "clsx";

interface TabsContextValue {
	activeTab: string;
	setActiveTab: (value: string) => void;
	orientation?: "horizontal" | "vertical";
}

const TabsContext = createContext<TabsContextValue | null>(null);

const useTabsContext = () => {
	const context = useContext(TabsContext);
	if (!context) {
		throw new Error("Tabs compound components must be used within a Tabs component");
	}
	return context;
};

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Default active tab value */
	defaultValue?: string;
	/** Controlled active tab value */
	value?: string;
	/** On value change handler */
	onValueChange?: (value: string) => void;
	/** Orientation of tabs */
	orientation?: "horizontal" | "vertical";
}

export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/** Tab value */
	value: string;
}

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Tab value */
	value: string;
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(function Tabs(
	{ className, defaultValue = "", value, onValueChange, orientation = "horizontal", children, ...rest },
	ref
) {
	const [activeTab, setActiveTab] = useState(value ?? defaultValue);

	const handleSetActiveTab = (newValue: string) => {
		if (value === undefined) {
			setActiveTab(newValue);
		}
		onValueChange?.(newValue);
	};

	const contextValue: TabsContextValue = {
		activeTab: value ?? activeTab,
		setActiveTab: handleSetActiveTab,
		orientation,
	};

	return (
		<TabsContext.Provider value={contextValue}>
			<div
				ref={ref}
				className={clsx("w-full", orientation === "vertical" && "flex", className)}
				{...rest}
			>
				{children}
			</div>
		</TabsContext.Provider>
	);
});

export const TabsList = forwardRef<HTMLDivElement, TabsListProps>(function TabsList(
	{ className, children, ...rest },
	ref
) {
	const { orientation } = useTabsContext();

	return (
		<div
			ref={ref}
			role="tablist"
			aria-orientation={orientation}
			className={clsx(
				"inline-flex gap-0 border-b border-border-default",
				orientation === "vertical" && "flex-col border-b-0 border-r",
				className
			)}
			{...rest}
		>
			{children}
		</div>
	);
});

export const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(function TabsTrigger(
	{ className, value, children, disabled, ...rest },
	ref
) {
	const { activeTab, setActiveTab, orientation } = useTabsContext();
	const isActive = activeTab === value;

	return (
		<button
			ref={ref}
			role="tab"
			type="button"
			aria-selected={isActive}
			aria-controls={`tab-content-${value}`}
			disabled={disabled}
			onClick={() => setActiveTab(value)}
			className={clsx(
				"relative px-4 py-2.5 text-sm font-medium transition-colors whitespace-nowrap",
				"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus",
				isActive
					? "text-fg-brand after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-bg-brand"
					: "text-fg-secondary hover:text-fg-default",
				disabled && "opacity-50 cursor-not-allowed pointer-events-none",
				orientation === "vertical" &&
					isActive &&
					"after:inset-y-0 after:left-auto after:right-0 after:w-0.5 after:h-auto",
				className
			)}
			{...rest}
		>
			{children}
		</button>
	);
});

export const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(function TabsContent(
	{ className, value, children, ...rest },
	ref
) {
	const { activeTab } = useTabsContext();
	const isActive = activeTab === value;

	if (!isActive) return null;

	return (
		<div
			ref={ref}
			role="tabpanel"
			id={`tab-content-${value}`}
			aria-labelledby={`tab-${value}`}
			className={clsx("mt-4", className)}
			{...rest}
		>
			{children}
		</div>
	);
});

