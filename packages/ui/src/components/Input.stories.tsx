import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
	title: "Components/Input",
	component: Input,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
	args: {
		placeholder: "Placeholder",
	},
};

export const WithLabel: Story = {
	args: {
		label: "Label",
		placeholder: "Placeholder",
	},
};

export const WithLabelAndHelper: Story = {
	args: {
		label: "Label",
		placeholder: "Placeholder",
		helperText: "Helper text goes here",
	},
};

export const Required: Story = {
	args: {
		label: "Label",
		placeholder: "Placeholder",
		required: true,
	},
};

export const Focused: Story = {
	args: {
		label: "Label",
		placeholder: "Placeholder",
		autoFocus: true,
	},
};

export const WithValue: Story = {
	args: {
		label: "Label",
		placeholder: "Placeholder",
		defaultValue: "Text value",
	},
};

export const ErrorState: Story = {
	args: {
		label: "Label",
		placeholder: "Placeholder",
		validationState: "invalid",
		helperText: "Error Message/Helper Text",
	},
};

export const SuccessState: Story = {
	args: {
		label: "Label",
		placeholder: "Placeholder",
		validationState: "valid",
		helperText: "Success! Your input is valid",
	},
};

export const Disabled: Story = {
	args: {
		label: "Label",
		placeholder: "Placeholder",
		disabled: true,
	},
};

export const SmallSize: Story = {
	args: {
		label: "Label",
		placeholder: "Placeholder",
		size: "sm",
	},
};

export const MediumSize: Story = {
	args: {
		label: "Label",
		placeholder: "Placeholder",
		size: "md",
	},
};

export const LargeSize: Story = {
	args: {
		label: "Label",
		placeholder: "Placeholder",
		size: "lg",
	},
};

export const AllStates: Story = {
	render: () => (
		<div className="space-y-6 max-w-md">
			<Input label="Default" placeholder="Placeholder" />
			<Input label="With Value" placeholder="Placeholder" defaultValue="Text value" />
			<Input label="Focused" placeholder="Placeholder" autoFocus />
			<Input
				label="Error State"
				placeholder="Placeholder"
				validationState="invalid"
				helperText="Error Message/Helper Text"
			/>
			<Input
				label="Success State"
				placeholder="Placeholder"
				validationState="valid"
				helperText="Success message"
			/>
			<Input label="Disabled" placeholder="Placeholder" disabled />
			<Input label="Required Field" placeholder="Placeholder" required />
		</div>
	),
};


