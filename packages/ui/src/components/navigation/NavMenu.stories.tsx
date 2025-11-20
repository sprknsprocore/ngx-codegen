import type { Meta, StoryObj } from "@storybook/react";
import { NavMenu } from "./NavMenu";
import { NavMenuItem } from "./NavMenuItem";
import { NavMenuGroup } from "./NavMenuGroup";
import React from "react";

const meta: Meta<typeof NavMenu> = {
	title: "Navigation/NavMenu",
	component: NavMenu,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NavMenu>;

const HomeIcon = () => (
	<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
		<path d="M8 2L2 7h2v6h3V9h2v4h3V7h2L8 2z" />
	</svg>
);

export const BasicMenu: Story = {
	args: {
		isOpen: true,
		title: "Navigation Menu",
		children: (
			<div className="px-2">
				<NavMenuItem icon={<HomeIcon />}>Home</NavMenuItem>
				<NavMenuItem icon={<HomeIcon />}>Dashboard</NavMenuItem>
				<NavMenuItem icon={<HomeIcon />}>Projects</NavMenuItem>
				<NavMenuItem icon={<HomeIcon />}>Reports</NavMenuItem>
			</div>
		),
	},
};

export const WithSearch: Story = {
	args: {
		isOpen: true,
		title: "Projects",
		showSearch: true,
		searchPlaceholder: "Search projects...",
		children: (
			<div className="px-2">
				<NavMenuItem icon={<HomeIcon />}>Seattle Railway</NavMenuItem>
				<NavMenuItem icon={<HomeIcon />}>Downtown Tower</NavMenuItem>
				<NavMenuItem icon={<HomeIcon />}>Riverside Development</NavMenuItem>
			</div>
		),
	},
};

export const WithGroups: Story = {
	args: {
		isOpen: true,
		title: "All Tools",
		showSearch: true,
		children: (
			<div className="px-2 space-y-4">
				<NavMenuGroup label="Favorites">
					<NavMenuItem icon={<HomeIcon />} isFavorite>
						Home
					</NavMenuItem>
					<NavMenuItem icon={<HomeIcon />} isFavorite>
						Daily Log
					</NavMenuItem>
				</NavMenuGroup>
				<NavMenuGroup label="Project Tools">
					<NavMenuItem icon={<HomeIcon />}>Schedule</NavMenuItem>
					<NavMenuItem icon={<HomeIcon />}>Drawings</NavMenuItem>
					<NavMenuItem icon={<HomeIcon />} badge={5}>
						RFIs
					</NavMenuItem>
				</NavMenuGroup>
				<NavMenuGroup label="Company Tools">
					<NavMenuItem icon={<HomeIcon />}>Directory</NavMenuItem>
					<NavMenuItem icon={<HomeIcon />}>Admin</NavMenuItem>
				</NavMenuGroup>
			</div>
		),
	},
};

export const WideMenu: Story = {
	args: {
		isOpen: true,
		title: "App Selector",
		width: 400,
		children: (
			<div className="px-2 grid grid-cols-2 gap-2">
				<NavMenuItem icon={<HomeIcon />}>Project Management</NavMenuItem>
				<NavMenuItem icon={<HomeIcon />}>Quality & Safety</NavMenuItem>
				<NavMenuItem icon={<HomeIcon />}>Field Productivity</NavMenuItem>
				<NavMenuItem icon={<HomeIcon />}>Design Coordination</NavMenuItem>
			</div>
		),
	},
};

