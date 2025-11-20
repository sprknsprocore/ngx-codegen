import type { Meta, StoryObj } from "@storybook/react";
import { SegmentedControl } from "./SegmentedControl";
import { useState } from "react";

const meta: Meta<typeof SegmentedControl> = {
	title: "Components/SegmentedControl",
	component: SegmentedControl,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SegmentedControl>;

const twoOptions = [
	{ value: "1", label: "Label" },
	{ value: "2", label: "Label" },
];

const threeOptions = [
	{ value: "1", label: "Label" },
	{ value: "2", label: "Label" },
	{ value: "3", label: "Label" },
];

const fourOptions = [
	{ value: "list", label: "List" },
	{ value: "grid", label: "Grid" },
	{ value: "kanban", label: "Kanban" },
	{ value: "calendar", label: "Calendar" },
];

export const Default: Story = {
	render: (args) => {
		const [value, setValue] = useState("1");
		return <SegmentedControl {...args} value={value} onChange={setValue} />;
	},
	args: {
		options: threeOptions,
	},
};

export const TwoOptions: Story = {
	render: (args) => {
		const [value, setValue] = useState("1");
		return <SegmentedControl {...args} value={value} onChange={setValue} />;
	},
	args: {
		options: twoOptions,
	},
};

export const ThreeOptions: Story = {
	render: (args) => {
		const [value, setValue] = useState("2");
		return <SegmentedControl {...args} value={value} onChange={setValue} />;
	},
	args: {
		options: threeOptions,
	},
};

export const FourOptions: Story = {
	render: (args) => {
		const [value, setValue] = useState("list");
		return <SegmentedControl {...args} value={value} onChange={setValue} />;
	},
	args: {
		options: fourOptions,
	},
};

export const FullWidth: Story = {
	render: (args) => {
		const [value, setValue] = useState("1");
		return <SegmentedControl {...args} value={value} onChange={setValue} />;
	},
	args: {
		options: threeOptions,
		fullWidth: true,
	},
};

export const Disabled: Story = {
	render: (args) => {
		const [value, setValue] = useState("2");
		return <SegmentedControl {...args} value={value} onChange={setValue} />;
	},
	args: {
		options: threeOptions,
		disabled: true,
	},
};

export const WithDisabledOption: Story = {
	render: (args) => {
		const [value, setValue] = useState("1");
		return <SegmentedControl {...args} value={value} onChange={setValue} />;
	},
	args: {
		options: [
			{ value: "1", label: "Label" },
			{ value: "2", label: "Label", disabled: true },
			{ value: "3", label: "Label" },
		],
	},
};

export const Sizes: Story = {
	render: () => {
		const [valueSmall, setValueSmall] = useState("1");
		const [valueMedium, setValueMedium] = useState("2");
		const [valueLarge, setValueLarge] = useState("3");

		return (
			<div className="space-y-4">
				<div>
					<p className="text-sm font-medium text-fg-default mb-2">Small</p>
					<SegmentedControl
						options={threeOptions}
						value={valueSmall}
						onChange={setValueSmall}
						size="sm"
					/>
				</div>
				<div>
					<p className="text-sm font-medium text-fg-default mb-2">Medium (Default)</p>
					<SegmentedControl
						options={threeOptions}
						value={valueMedium}
						onChange={setValueMedium}
						size="md"
					/>
				</div>
				<div>
					<p className="text-sm font-medium text-fg-default mb-2">Large</p>
					<SegmentedControl
						options={threeOptions}
						value={valueLarge}
						onChange={setValueLarge}
						size="lg"
					/>
				</div>
			</div>
		);
	},
};

export const AllVariants: Story = {
	render: () => {
		const [value1, setValue1] = useState("1");
		const [value2, setValue2] = useState("list");

		return (
			<div className="space-y-6">
				<div>
					<p className="text-sm font-medium text-fg-default mb-2">View Toggle (3 options)</p>
					<SegmentedControl options={threeOptions} value={value1} onChange={setValue1} />
				</div>

				<div>
					<p className="text-sm font-medium text-fg-default mb-2">View Mode (4 options)</p>
					<SegmentedControl options={fourOptions} value={value2} onChange={setValue2} />
				</div>

				<div>
					<p className="text-sm font-medium text-fg-default mb-2">Full Width</p>
					<SegmentedControl
						options={threeOptions}
						value={value1}
						onChange={setValue1}
						fullWidth
					/>
				</div>
			</div>
		);
	},
};

