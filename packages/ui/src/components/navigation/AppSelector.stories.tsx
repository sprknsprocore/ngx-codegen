import type { Meta, StoryObj } from "@storybook/react";
import { AppSelector } from "./AppSelector";

const meta: Meta<typeof AppSelector> = {
	title: "Navigation/AppSelector",
	component: AppSelector,
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
type Story = StoryObj<typeof AppSelector>;

export const NoAppSelected: Story = {
	args: {
		selectedApp: null,
		onClick: () => console.log("App selector clicked"),
	},
};

export const WithAppSelected: Story = {
	args: {
		selectedApp: "Project Management",
		onClick: () => console.log("App selector clicked"),
	},
};

export const WithQualityApp: Story = {
	args: {
		selectedApp: "Quality & Safety",
		onClick: () => console.log("App selector clicked"),
	},
};

