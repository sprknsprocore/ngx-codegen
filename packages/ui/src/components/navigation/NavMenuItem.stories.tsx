import type { Meta, StoryObj } from "@storybook/react";
import { NavMenuItem } from "./NavMenuItem";
import React from "react";

const meta: Meta<typeof NavMenuItem> = {
	title: "Navigation/NavMenuItem",
	component: NavMenuItem,
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
			<div className="w-56 p-4">
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof NavMenuItem>;

const HomeIcon = () => (
	<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
		<path d="M8 2L2 7h2v6h3V9h2v4h3V7h2L8 2z" />
	</svg>
);

export const Default: Story = {
	args: {
		children: "Menu Item",
		icon: <HomeIcon />,
	},
};

export const Selected: Story = {
	args: {
		children: "Selected Item",
		icon: <HomeIcon />,
		selected: true,
	},
};

export const WithFavorite: Story = {
	args: {
		children: "Favorited Item",
		icon: <HomeIcon />,
		isFavorite: true,
		onToggleFavorite: () => console.log("Toggle favorite"),
	},
};

export const WithBadge: Story = {
	args: {
		children: "Item with Badge",
		icon: <HomeIcon />,
		badge: 5,
	},
};

export const WithLargeBadge: Story = {
	args: {
		children: "Item with Large Badge",
		icon: <HomeIcon />,
		badge: 150,
	},
};

export const WithBetaTag: Story = {
	args: {
		children: "Beta Feature",
		icon: <HomeIcon />,
		tag: "Beta",
		tagVariant: "beta",
	},
};

export const WithNewTag: Story = {
	args: {
		children: "New Feature",
		icon: <HomeIcon />,
		tag: "New",
		tagVariant: "new",
	},
};

export const WithPilotTag: Story = {
	args: {
		children: "Pilot Feature",
		icon: <HomeIcon />,
		tag: "Pilot",
		tagVariant: "pilot",
	},
};

export const WithEverything: Story = {
	args: {
		children: "Complex Item",
		icon: <HomeIcon />,
		selected: true,
		isFavorite: true,
		badge: 99,
		tag: "Beta",
		tagVariant: "beta",
		onToggleFavorite: () => console.log("Toggle favorite"),
	},
};

