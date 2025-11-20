import type { Meta, StoryObj } from "@storybook/react";
import { NavIconButton } from "./NavIconButton";
import React from "react";

const meta: Meta<typeof NavIconButton> = {
	title: "Navigation/NavIconButton",
	component: NavIconButton,
	parameters: {
		layout: "centered",
		backgrounds: {
			default: "dark",
			values: [
				{ name: "dark", value: "#232729" },
				{ name: "light", value: "#FFFFFF" },
			],
		},
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NavIconButton>;

const HelpIcon = () => (
	<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
		<circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
		<path d="M10 14v.5M10 6.5v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
	</svg>
);

const BellIcon = () => (
	<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
		<path
			d="M10 4a4 4 0 00-4 4v3l-2 2h12l-2-2V8a4 4 0 00-4-4zm0 12a2 2 0 01-2-2h4a2 2 0 01-2 2z"
			stroke="currentColor"
			strokeWidth="1.5"
			fill="none"
		/>
	</svg>
);

const ChatIcon = () => (
	<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
		<path
			d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H8l-5 3v-3a2 2 0 01-2-2V5z"
			stroke="currentColor"
			strokeWidth="1.5"
			fill="none"
		/>
	</svg>
);

export const DarkHelp: Story = {
	args: {
		icon: <HelpIcon />,
		label: "Help",
		variant: "dark",
		onClick: () => console.log("Help clicked"),
	},
};

export const DarkNotifications: Story = {
	args: {
		icon: <BellIcon />,
		label: "Notifications",
		variant: "dark",
		onClick: () => console.log("Notifications clicked"),
	},
};

export const WithBadge: Story = {
	args: {
		icon: <BellIcon />,
		label: "Notifications",
		badge: 5,
		variant: "dark",
		onClick: () => console.log("Notifications clicked"),
	},
};

export const WithLargeBadge: Story = {
	args: {
		icon: <ChatIcon />,
		label: "Messages",
		badge: 150,
		variant: "dark",
		onClick: () => console.log("Messages clicked"),
	},
};

export const LightVariant: Story = {
	args: {
		icon: <HelpIcon />,
		label: "Help",
		variant: "light",
		onClick: () => console.log("Help clicked"),
	},
	parameters: {
		backgrounds: { default: "light" },
	},
};

export const Small: Story = {
	args: {
		icon: <HelpIcon />,
		label: "Help",
		size: "sm",
		variant: "dark",
	},
};

