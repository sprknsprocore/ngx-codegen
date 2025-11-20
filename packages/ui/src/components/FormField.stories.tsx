import type { Meta, StoryObj } from "@storybook/react";
import { FormField } from "./FormField";
import { Input } from "./Input";

const meta: Meta<typeof FormField> = {
	title: "Components/FormField",
	component: FormField,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const Default: Story = {
	args: {
		label: "Email Address",
	},
	render: (args) => (
		<FormField {...args}>
			<Input placeholder="Enter email" />
		</FormField>
	),
};

export const Required: Story = {
	args: {
		label: "Email Address",
		required: true,
	},
	render: (args) => (
		<FormField {...args}>
			<Input placeholder="Enter email" />
		</FormField>
	),
};

export const WithHelperText: Story = {
	args: {
		label: "Email Address",
		helperText: "We'll never share your email with anyone",
	},
	render: (args) => (
		<FormField {...args}>
			<Input placeholder="Enter email" />
		</FormField>
	),
};

export const Invalid: Story = {
	args: {
		label: "Email Address",
		validationState: "invalid",
		helperText: "Please enter a valid email address",
	},
	render: (args) => (
		<FormField {...args}>
			<Input placeholder="Enter email" defaultValue="invalid-email" />
		</FormField>
	),
};

export const Valid: Story = {
	args: {
		label: "Email Address",
		validationState: "valid",
		helperText: "Email is available",
	},
	render: (args) => (
		<FormField {...args}>
			<Input placeholder="Enter email" defaultValue="user@example.com" />
		</FormField>
	),
};

