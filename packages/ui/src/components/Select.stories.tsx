import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";
import { useState } from "react";

const meta: Meta<typeof Select> = {
	title: "Components/Select",
	component: Select,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

const simpleOptions = [
	{ value: "1", label: "Option 1" },
	{ value: "2", label: "Option 2" },
	{ value: "3", label: "Option 3" },
	{ value: "4", label: "Option 4" },
	{ value: "5", label: "Option 5" },
];

const groupedOptions = [
	{
		label: "Grouped Title 1",
		options: [
			{ value: "g1-1", label: "Option 1" },
			{ value: "g1-2", label: "Option 2" },
			{ value: "g1-3", label: "Option 3" },
		],
	},
	{
		label: "Grouped Title 2",
		options: [
			{ value: "g2-1", label: "Option 1" },
			{ value: "g2-2", label: "Option 2" },
			{ value: "g2-3", label: "Option 3" },
		],
	},
];

export const Default: Story = {
	render: (args) => {
		const [value, setValue] = useState("");
		return <Select {...args} value={value} onChange={setValue} />;
	},
	args: {
		label: "Label",
		placeholder: "Placeholder",
		options: simpleOptions,
	},
};

export const WithValue: Story = {
	render: (args) => {
		const [value, setValue] = useState("2");
		return <Select {...args} value={value} onChange={setValue} />;
	},
	args: {
		label: "Label",
		placeholder: "Placeholder",
		options: simpleOptions,
	},
};

export const Searchable: Story = {
	render: (args) => {
		const [value, setValue] = useState("");
		return <Select {...args} value={value} onChange={setValue} />;
	},
	args: {
		label: "Label",
		placeholder: "Placeholder",
		options: simpleOptions,
		searchable: true,
	},
};

export const Clearable: Story = {
	render: (args) => {
		const [value, setValue] = useState("2");
		return <Select {...args} value={value} onChange={setValue} />;
	},
	args: {
		label: "Label",
		placeholder: "Placeholder",
		options: simpleOptions,
		clearable: true,
	},
};

export const WithGroups: Story = {
	render: (args) => {
		const [value, setValue] = useState("");
		return <Select {...args} value={value} onChange={setValue} />;
	},
	args: {
		label: "Label",
		placeholder: "Placeholder",
		groups: groupedOptions,
	},
};

export const WithError: Story = {
	render: (args) => {
		const [value, setValue] = useState("");
		return <Select {...args} value={value} onChange={setValue} />;
	},
	args: {
		label: "Label",
		placeholder: "Placeholder",
		options: simpleOptions,
		validationState: "invalid",
		helperText: "Error Message/Helper Text",
		required: true,
	},
};

export const Disabled: Story = {
	render: (args) => {
		const [value, setValue] = useState("2");
		return <Select {...args} value={value} onChange={setValue} />;
	},
	args: {
		label: "Label",
		placeholder: "Placeholder",
		options: simpleOptions,
		disabled: true,
	},
};

export const Sizes: Story = {
	render: () => {
		const [valueSmall, setValueSmall] = useState("");
		const [valueMedium, setValueMedium] = useState("");
		const [valueLarge, setValueLarge] = useState("");

		return (
			<div className="space-y-4 max-w-md">
				<Select
					label="Small"
					placeholder="Placeholder"
					options={simpleOptions}
					size="sm"
					value={valueSmall}
					onChange={setValueSmall}
				/>
				<Select
					label="Medium (Default)"
					placeholder="Placeholder"
					options={simpleOptions}
					size="md"
					value={valueMedium}
					onChange={setValueMedium}
				/>
				<Select
					label="Large"
					placeholder="Placeholder"
					options={simpleOptions}
					size="lg"
					value={valueLarge}
					onChange={setValueLarge}
				/>
			</div>
		);
	},
};

export const AllVariants: Story = {
	render: () => {
		const [value1, setValue1] = useState("");
		const [value2, setValue2] = useState("2");
		const [value3, setValue3] = useState("");
		const [value4, setValue4] = useState("g1-2");

		return (
			<div className="space-y-6 max-w-md">
				<Select
					label="Basic Select"
					placeholder="Select an option"
					options={simpleOptions}
					value={value1}
					onChange={setValue1}
				/>

				<Select
					label="Searchable & Clearable"
					placeholder="Search options"
					options={simpleOptions}
					value={value2}
					onChange={setValue2}
					searchable
					clearable
				/>

				<Select
					label="Required Field"
					placeholder="Select an option"
					options={simpleOptions}
					value={value3}
					onChange={setValue3}
					required
					validationState="invalid"
					helperText="This field is required"
				/>

				<Select
					label="Grouped Options"
					placeholder="Select an option"
					groups={groupedOptions}
					value={value4}
					onChange={setValue4}
				/>
			</div>
		);
	},
};

