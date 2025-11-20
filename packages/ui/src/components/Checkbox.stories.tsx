import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta = {
	title: "Components/Checkbox",
	component: Checkbox,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: "Checkbox label",
	},
};

export const WithDescription: Story = {
	args: {
		label: "Accept terms and conditions",
		description: "I agree to the terms and conditions and privacy policy",
	},
};

export const Checked: Story = {
	args: {
		label: "Checked checkbox",
		checked: true,
	},
};

export const Indeterminate: Story = {
	args: {
		label: "Indeterminate checkbox",
		indeterminate: true,
	},
};

export const Disabled: Story = {
	args: {
		label: "Disabled checkbox",
		disabled: true,
	},
};

export const DisabledChecked: Story = {
	args: {
		label: "Disabled checked",
		disabled: true,
		checked: true,
	},
};

export const Error: Story = {
	args: {
		label: "Error state",
		description: "This field is required",
		validationState: "error",
	},
};

export const Success: Story = {
	args: {
		label: "Success state",
		description: "Verified successfully",
		validationState: "success",
	},
};

export const Small: Story = {
	args: {
		label: "Small checkbox",
		size: "sm",
	},
};

export const Group: Story = {
	render: () => (
		<div className="flex flex-col gap-3">
			<Checkbox label="Option 1" description="Complete sentence written as a command without punctuation" />
			<Checkbox label="Option 2" description="Complete sentence written as a command without punctuation" />
			<Checkbox label="Option 3" description="Complete sentence written as a command without punctuation" checked />
			<Checkbox label="Option 4" description="Complete sentence written as a command without punctuation" />
		</div>
	),
};

