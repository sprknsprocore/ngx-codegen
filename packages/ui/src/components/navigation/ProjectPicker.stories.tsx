import type { Meta, StoryObj } from "@storybook/react";
import { ProjectPicker } from "./ProjectPicker";

const meta: Meta<typeof ProjectPicker> = {
	title: "Navigation/ProjectPicker",
	component: ProjectPicker,
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
type Story = StoryObj<typeof ProjectPicker>;

export const NoProjectSelected: Story = {
	args: {
		selectedProject: null,
		onClick: () => console.log("Picker clicked"),
	},
};

export const WithProjectSelected: Story = {
	args: {
		selectedProject: {
			id: "1",
			name: "Seattle Corridor Railway",
			companyName: "Vertigo Construction",
		},
		onClick: () => console.log("Picker clicked"),
	},
};

export const WithProjectImage: Story = {
	args: {
		selectedProject: {
			id: "2",
			name: "Downtown Office Tower",
			companyName: "Acme Construction Co.",
			imageUrl: "https://via.placeholder.com/36x36/2066DF/FFFFFF?text=DT",
		},
		onClick: () => console.log("Picker clicked"),
	},
};

