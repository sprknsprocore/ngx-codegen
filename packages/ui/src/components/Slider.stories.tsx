import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./Slider";
import { useState } from "react";

const meta: Meta<typeof Slider> = {
	title: "Components/Slider",
	component: Slider,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
	argTypes: {
		value: {
			control: { type: "number" },
			description: "Current value of the slider",
		},
		min: {
			control: { type: "number" },
			description: "Minimum value",
		},
		max: {
			control: { type: "number" },
			description: "Maximum value",
		},
		step: {
			control: { type: "number" },
			description: "Step increment",
		},
		showTicks: {
			control: { type: "boolean" },
			description: "Show tick marks",
		},
		showLabel: {
			control: { type: "boolean" },
			description: "Show value label above handle",
		},
		showMinMax: {
			control: { type: "boolean" },
			description: "Show min/max labels",
		},
		disabled: {
			control: { type: "boolean" },
			description: "Disabled state",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
	render: (args) => {
		const [value, setValue] = useState(50);
		return <Slider {...args} value={value} onChange={setValue} />;
	},
	args: {
		min: 0,
		max: 100,
		step: 1,
		showMinMax: true,
	},
};

export const WithTicks: Story = {
	render: (args) => {
		const [value, setValue] = useState(50);
		return <Slider {...args} value={value} onChange={setValue} />;
	},
	args: {
		min: 0,
		max: 100,
		step: 10,
		showTicks: true,
		showMinMax: true,
	},
};

export const WithLabel: Story = {
	render: (args) => {
		const [value, setValue] = useState(50);
		return <Slider {...args} value={value} onChange={setValue} />;
	},
	args: {
		min: 0,
		max: 100,
		step: 1,
		showLabel: true,
		showMinMax: true,
	},
};

export const WithCustomLabels: Story = {
	render: (args) => {
		const [value, setValue] = useState(3);
		return (
			<div className="space-y-8">
				<Slider
					{...args}
					value={value}
					onChange={setValue}
					min={0}
					max={6}
					step={1}
					showTicks
					customLabels={{
						0: "Mon",
						1: "Tue",
						2: "Wed",
						3: "Thu",
						4: "Fri",
						5: "Sat",
						6: "Sun",
					}}
				/>
			</div>
		);
	},
	args: {},
};

export const SmallRange: Story = {
	render: (args) => {
		const [value, setValue] = useState(2);
		return <Slider {...args} value={value} onChange={setValue} />;
	},
	args: {
		min: 0,
		max: 5,
		step: 1,
		showTicks: true,
		showMinMax: true,
	},
};

export const Disabled: Story = {
	render: (args) => {
		const [value, setValue] = useState(60);
		return <Slider {...args} value={value} onChange={setValue} />;
	},
	args: {
		min: 0,
		max: 100,
		step: 1,
		disabled: true,
		showMinMax: true,
	},
};

export const AllVariants: Story = {
	render: () => {
		const [value1, setValue1] = useState(50);
		const [value2, setValue2] = useState(50);
		const [value3, setValue3] = useState(60);
		const [value4, setValue4] = useState(3);

		return (
			<div className="space-y-8 max-w-md">
				<div>
					<p className="text-sm font-medium text-fg-default mb-3">Basic Slider</p>
					<Slider value={value1} onChange={setValue1} min={0} max={100} step={1} showMinMax />
				</div>

				<div>
					<p className="text-sm font-medium text-fg-default mb-3">With Ticks</p>
					<Slider value={value2} onChange={setValue2} min={0} max={100} step={10} showTicks showMinMax />
				</div>

				<div>
					<p className="text-sm font-medium text-fg-default mb-3">With Label</p>
					<Slider value={value3} onChange={setValue3} min={0} max={100} step={1} showLabel showMinMax />
				</div>

				<div>
					<p className="text-sm font-medium text-fg-default mb-3">Days of Week</p>
					<Slider
						value={value4}
						onChange={setValue4}
						min={0}
						max={6}
						step={1}
						showTicks
						customLabels={{
							0: "Mon",
							1: "Tue",
							2: "Wed",
							3: "Thu",
							4: "Fri",
							5: "Sat",
							6: "Sun",
						}}
					/>
				</div>
			</div>
		);
	},
};

