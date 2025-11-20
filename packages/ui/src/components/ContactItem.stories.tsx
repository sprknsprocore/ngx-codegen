import type { Meta, StoryObj } from "@storybook/react";
import { ContactItem } from "./ContactItem";

const meta = {
	title: "Components/ContactItem",
	component: ContactItem,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof ContactItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		name: "Full Name",
		subtitle: "Title, Company",
	},
};

export const WithInitials: Story = {
	args: {
		name: "Full Name",
		subtitle: "Title, Company",
		initials: "FN",
	},
};

export const AsLink: Story = {
	args: {
		name: "Full Name",
		subtitle: "Title, Company",
		asLink: true,
	},
};

export const Interactive: Story = {
	args: {
		name: "Full Name",
		subtitle: "Title, Company",
		interactive: true,
		onClick: () => alert("Clicked!"),
	},
};

export const Selected: Story = {
	args: {
		name: "Full Name",
		subtitle: "Title, Company",
		interactive: true,
		selected: true,
	},
};

export const Disabled: Story = {
	args: {
		name: "Full Name",
		subtitle: "Title, Company",
		disabled: true,
	},
};

export const Small: Story = {
	args: {
		name: "Full Name",
		subtitle: "Title, Company",
		size: "sm",
	},
};

export const Large: Story = {
	args: {
		name: "Full Name",
		subtitle: "Title, Company",
		size: "lg",
	},
};

export const List: Story = {
	render: () => (
		<div className="w-80 border border-border-default rounded-lg overflow-hidden bg-bg-canvas">
			<ContactItem name="Full Name" subtitle="Title, Company" interactive />
			<ContactItem name="Full Name" subtitle="Title, Company" interactive asLink />
			<ContactItem name="Full Name" subtitle="Title, Company" interactive selected />
			<ContactItem name="Full Name" subtitle="Title, Company" interactive />
			<ContactItem name="Full Name" subtitle="Title, Company" interactive disabled />
		</div>
	),
};

export const Grid: Story = {
	render: () => (
		<div className="grid grid-cols-2 gap-4 p-4 border border-border-default rounded-lg bg-bg-canvas">
			<ContactItem name="Full Name" subtitle="Title, Company" />
			<ContactItem name="Full Name" subtitle="Title, Company" />
			<ContactItem name="Full Name" subtitle="Title, Company" />
			<ContactItem name="Full Name" subtitle="Title, Company" />
			<ContactItem name="Full Name" subtitle="Title, Company" />
			<ContactItem name="Full Name" subtitle="Title, Company" />
		</div>
	),
};

