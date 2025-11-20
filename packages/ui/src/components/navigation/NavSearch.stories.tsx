import type { Meta, StoryObj } from "@storybook/react";
import { NavSearch } from "./NavSearch";

const meta: Meta<typeof NavSearch> = {
	title: "Navigation/NavSearch",
	component: NavSearch,
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
	decorators: [
		(Story) => (
			<div className="w-96">
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof NavSearch>;

export const DarkVariant: Story = {
	args: {
		variant: "dark",
		onSearch: (value) => console.log("Search:", value),
	},
};

export const LightVariant: Story = {
	args: {
		variant: "light",
		onSearch: (value) => console.log("Search:", value),
	},
	parameters: {
		backgrounds: { default: "light" },
	},
};

export const WithShortcutHint: Story = {
	args: {
		variant: "dark",
		shortcutHint: "Ctrl + K",
		onSearch: (value) => console.log("Search:", value),
	},
};

export const WithCustomPlaceholder: Story = {
	args: {
		variant: "dark",
		placeholder: "Search projects, tasks, and more...",
		onSearch: (value) => console.log("Search:", value),
	},
};

