import type { Meta, StoryObj } from "@storybook/react";
import { NavMenuGroup } from "./NavMenuGroup";
import { NavMenuItem } from "./NavMenuItem";
import React from "react";

const meta: Meta<typeof NavMenuGroup> = {
	title: "Navigation/NavMenuGroup",
	component: NavMenuGroup,
	parameters: {
		layout: "centered",
		backgrounds: {
			default: "dark",
			values: [{ name: "dark", value: "#232729" }],
		},
	},
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			<div className="w-64 p-4">
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof NavMenuGroup>;

const HomeIcon = () => (
	<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
		<path d="M8 2L2 7h2v6h3V9h2v4h3V7h2L8 2z" />
	</svg>
);

export const Default: Story = {
	args: {
		label: "Favorites",
		children: (
			<>
				<NavMenuItem icon={<HomeIcon />}>Home</NavMenuItem>
				<NavMenuItem icon={<HomeIcon />}>Dashboard</NavMenuItem>
				<NavMenuItem icon={<HomeIcon />}>Projects</NavMenuItem>
			</>
		),
	},
};

export const NoLabel: Story = {
	args: {
		children: (
			<>
				<NavMenuItem icon={<HomeIcon />}>Home</NavMenuItem>
				<NavMenuItem icon={<HomeIcon />}>Dashboard</NavMenuItem>
			</>
		),
	},
};

export const Collapsible: Story = {
	args: {
		label: "Company Tools",
		collapsible: true,
		children: (
			<>
				<NavMenuItem icon={<HomeIcon />}>Directory</NavMenuItem>
				<NavMenuItem icon={<HomeIcon />}>Admin</NavMenuItem>
				<NavMenuItem icon={<HomeIcon />}>Reports</NavMenuItem>
			</>
		),
	},
};

export const CollapsibleDefaultCollapsed: Story = {
	args: {
		label: "Advanced Features",
		collapsible: true,
		defaultCollapsed: true,
		children: (
			<>
				<NavMenuItem icon={<HomeIcon />}>Analytics</NavMenuItem>
				<NavMenuItem icon={<HomeIcon />}>Integrations</NavMenuItem>
			</>
		),
	},
};

