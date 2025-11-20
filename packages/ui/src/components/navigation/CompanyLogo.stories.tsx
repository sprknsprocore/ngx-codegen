import type { Meta, StoryObj } from "@storybook/react";
import { CompanyLogo } from "./CompanyLogo";

const meta: Meta<typeof CompanyLogo> = {
	title: "Navigation/CompanyLogo",
	component: CompanyLogo,
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
type Story = StoryObj<typeof CompanyLogo>;

export const WithText: Story = {
	args: {
		companyName: "Vertigo Construction",
		onClick: () => console.log("Company logo clicked"),
	},
};

export const WithImage: Story = {
	args: {
		companyName: "Acme Corp",
		logoUrl: "https://via.placeholder.com/92x24/2066DF/FFFFFF?text=ACME",
		onClick: () => console.log("Company logo clicked"),
	},
};

