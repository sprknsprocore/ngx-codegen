import type { Meta, StoryObj } from "@storybook/react";
import { NavLogo } from "./NavLogo";

const meta: Meta<typeof NavLogo> = {
	title: "Navigation/NavLogo",
	component: NavLogo,
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
type Story = StoryObj<typeof NavLogo>;

export const Default: Story = {
	args: {
		onClick: () => console.log("Logo clicked"),
	},
};

export const WithCustomImage: Story = {
	args: {
		src: "https://via.placeholder.com/106x14/FF5100/FFFFFF?text=LOGO",
		alt: "Company Logo",
		onClick: () => console.log("Logo clicked"),
	},
};

export const NonClickable: Story = {
	args: {
		src: "https://via.placeholder.com/106x14/FF5100/FFFFFF?text=LOGO",
		alt: "Company Logo",
	},
};

