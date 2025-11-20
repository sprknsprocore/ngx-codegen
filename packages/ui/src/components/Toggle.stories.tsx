import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./Toggle";
import * as React from "react";

const meta = {
	title: "Components/Toggle",
	component: Toggle,
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
		},
		selected: {
			control: "boolean",
		},
		loading: {
			control: "boolean",
		},
		disabled: {
			control: "boolean",
		},
	},
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Label",
		size: "md",
		selected: false,
	},
};

export const Selected: Story = {
	args: {
		children: "Label",
		size: "md",
		selected: true,
	},
};

export const Sizes: Story = {
	render: () => (
		<div className="flex gap-4 items-center">
			<Toggle size="sm">Small</Toggle>
			<Toggle size="md">Medium</Toggle>
			<Toggle size="lg">Large</Toggle>
		</div>
	),
};

export const States: Story = {
	render: () => (
		<div className="flex flex-col gap-6">
			<div className="flex gap-4">
				<div className="flex flex-col gap-2">
					<span className="text-sm text-fg-secondary">Not Selected</span>
					<div className="flex flex-col gap-2">
						<Toggle>Default</Toggle>
						<Toggle className="hover:bg-gray-90">Hover</Toggle>
						<Toggle className="ring-2 ring-blue-50 ring-offset-2">Focus</Toggle>
						<Toggle disabled>Disabled</Toggle>
						<Toggle loading>Loading</Toggle>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<span className="text-sm text-fg-secondary">Selected</span>
					<div className="flex flex-col gap-2">
						<Toggle selected>Default</Toggle>
						<Toggle selected className="hover:bg-blue-85">Hover</Toggle>
						<Toggle selected className="ring-2 ring-blue-50 ring-offset-2">Focus</Toggle>
						<Toggle selected disabled>Disabled</Toggle>
						<Toggle selected loading>Loading</Toggle>
					</div>
				</div>
			</div>
		</div>
	),
};

export const AllSizesAndStates: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<div className="flex gap-4 items-center">
				<span className="text-sm text-fg-secondary w-20">Small</span>
				<Toggle size="sm">Label</Toggle>
				<Toggle size="sm" selected>Label</Toggle>
				<Toggle size="sm" loading>Label</Toggle>
			</div>
			<div className="flex gap-4 items-center">
				<span className="text-sm text-fg-secondary w-20">Medium</span>
				<Toggle size="md">Label</Toggle>
				<Toggle size="md" selected>Label</Toggle>
				<Toggle size="md" loading>Label</Toggle>
			</div>
			<div className="flex gap-4 items-center">
				<span className="text-sm text-fg-secondary w-20">Large</span>
				<Toggle size="lg">Label</Toggle>
				<Toggle size="lg" selected>Label</Toggle>
				<Toggle size="lg" loading>Label</Toggle>
			</div>
		</div>
	),
};

export const Interactive: Story = {
	render: () => {
		const [selected, setSelected] = React.useState(false);
		return (
			<Toggle selected={selected} onClick={() => setSelected(!selected)}>
				{selected ? "On" : "Off"}
			</Toggle>
		);
	},
};

