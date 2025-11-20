import type { Meta, StoryObj } from "@storybook/react";
import { NavAvatar } from "./NavAvatar";

const meta: Meta<typeof NavAvatar> = {
	title: "Navigation/NavAvatar",
	component: NavAvatar,
	parameters: {
		layout: "centered",
		backgrounds: {
			default: "dark",
			values: [{ name: "dark", value: "#232729" }],
		},
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NavAvatar>;

export const WithInitials: Story = {
	args: {
		name: "John Doe",
		onClick: () => console.log("Avatar clicked"),
	},
};

export const WithImage: Story = {
	args: {
		name: "Jane Smith",
		src: "https://i.pravatar.cc/150?img=5",
		onClick: () => console.log("Avatar clicked"),
	},
};

export const Small: Story = {
	args: {
		name: "John Doe",
		size: "sm",
	},
};

export const Medium: Story = {
	args: {
		name: "Jane Smith",
		size: "md",
	},
};

export const Large: Story = {
	args: {
		name: "Bob Johnson",
		size: "lg",
	},
};

export const WithFocus: Story = {
	args: {
		name: "Alice Cooper",
		hasFocus: true,
	},
};

