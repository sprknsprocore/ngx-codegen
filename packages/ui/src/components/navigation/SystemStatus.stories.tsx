import type { Meta, StoryObj } from "@storybook/react";
import { SystemStatus } from "./SystemStatus";

const meta: Meta<typeof SystemStatus> = {
	title: "Navigation/SystemStatus",
	component: SystemStatus,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			<div className="w-64">
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof SystemStatus>;

export const Operational: Story = {
	args: {
		status: "operational",
		onClick: () => console.log("Status clicked"),
	},
};

export const Loading: Story = {
	args: {
		status: "loading",
	},
};

export const Critical: Story = {
	args: {
		status: "critical",
		onClick: () => console.log("Status clicked"),
	},
};

export const Major: Story = {
	args: {
		status: "major",
		onClick: () => console.log("Status clicked"),
	},
};

export const Maintenance: Story = {
	args: {
		status: "maintenance",
		message: "Scheduled maintenance: 2AM - 4AM PST",
		onClick: () => console.log("Status clicked"),
	},
};

export const Minor: Story = {
	args: {
		status: "minor",
		onClick: () => console.log("Status clicked"),
	},
};

export const CustomMessage: Story = {
	args: {
		status: "operational",
		message: "Everything is running smoothly!",
	},
};

