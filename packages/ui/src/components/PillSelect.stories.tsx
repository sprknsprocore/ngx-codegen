import type { Meta, StoryObj } from "@storybook/react";
import { PillSelect } from "./PillSelect";
import { useState } from "react";

const meta: Meta<typeof PillSelect> = {
	title: "Components/PillSelect",
	component: PillSelect,
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
		},
		validationState: {
			control: "select",
			options: ["none", "invalid", "valid"],
		},
		disabled: {
			control: "boolean",
		},
		searchable: {
			control: "boolean",
		},
		showActions: {
			control: "boolean",
		},
	},
};

export default meta;
type Story = StoryObj<typeof PillSelect>;

const sampleOptions = [
	{ value: "1", label: "Option 1", tone: "blue" as const },
	{ value: "2", label: "Option 2", tone: "green" as const },
	{ value: "3", label: "Option 3", tone: "orange" as const },
	{ value: "4", label: "Option 4", tone: "red" as const },
	{ value: "5", label: "Option 5", tone: "yellow" as const },
	{ value: "6", label: "Option 6", tone: "cyan" as const },
	{ value: "7", label: "Option 7", tone: "magenta" as const },
	{ value: "8", label: "Option 8", tone: "purple" as const },
];

export const Default: Story = {
	render: () => {
		const [value, setValue] = useState<string[]>([]);
		return (
			<div className="w-96">
				<PillSelect
					label="Select Options"
					placeholder="Choose multiple options"
					value={value}
					onChange={setValue}
					options={sampleOptions}
				/>
			</div>
		);
	},
};

export const WithSelectedValues: Story = {
	render: () => {
		const [value, setValue] = useState<string[]>(["1", "3", "5"]);
		return (
			<div className="w-96">
				<PillSelect
					label="Selected Values"
					value={value}
					onChange={setValue}
					options={sampleOptions}
				/>
			</div>
		);
	},
};

export const WithHelperText: Story = {
	render: () => {
		const [value, setValue] = useState<string[]>([]);
		return (
			<div className="w-96">
				<PillSelect
					label="Select Options"
					placeholder="Choose options"
					value={value}
					onChange={setValue}
					options={sampleOptions}
					helperText="Select one or more options from the list"
				/>
			</div>
		);
	},
};

export const WithError: Story = {
	render: () => {
		const [value, setValue] = useState<string[]>([]);
		return (
			<div className="w-96">
				<PillSelect
					label="Required Field"
					placeholder="Select at least one option"
					value={value}
					onChange={setValue}
					options={sampleOptions}
					validationState="invalid"
					helperText="Please select at least one option"
					required
				/>
			</div>
		);
	},
};

export const WithSuccess: Story = {
	render: () => {
		const [value, setValue] = useState<string[]>(["1", "2"]);
		return (
			<div className="w-96">
				<PillSelect
					label="Valid Selection"
					value={value}
					onChange={setValue}
					options={sampleOptions}
					validationState="valid"
					helperText="Your selection looks good!"
				/>
			</div>
		);
	},
};

export const Disabled: Story = {
	render: () => {
		return (
			<div className="w-96">
				<PillSelect
					label="Disabled"
					value={["1", "2"]}
					options={sampleOptions}
					disabled
				/>
			</div>
		);
	},
};

export const MaxVisiblePills: Story = {
	render: () => {
		const [value, setValue] = useState<string[]>(["1", "2", "3", "4", "5"]);
		return (
			<div className="w-96">
				<PillSelect
					label="Max 3 Visible Pills"
					value={value}
					onChange={setValue}
					options={sampleOptions}
					maxVisiblePills={3}
					helperText="Only 3 pills shown, rest are indicated with +N"
				/>
			</div>
		);
	},
};

export const WithoutSearch: Story = {
	render: () => {
		const [value, setValue] = useState<string[]>([]);
		return (
			<div className="w-96">
				<PillSelect
					label="No Search"
					value={value}
					onChange={setValue}
					options={sampleOptions}
					searchable={false}
				/>
			</div>
		);
	},
};

export const WithoutActions: Story = {
	render: () => {
		const [value, setValue] = useState<string[]>([]);
		return (
			<div className="w-96">
				<PillSelect
					label="No Action Buttons"
					value={value}
					onChange={setValue}
					options={sampleOptions}
					showActions={false}
				/>
			</div>
		);
	},
};

export const Sizes: Story = {
	render: () => {
		const [valueSm, setValueSm] = useState<string[]>(["1"]);
		const [valueMd, setValueMd] = useState<string[]>(["2"]);
		const [valueLg, setValueLg] = useState<string[]>(["3"]);

		return (
			<div className="flex flex-col gap-4">
				<div className="w-96">
					<PillSelect
						label="Small"
						size="sm"
						value={valueSm}
						onChange={setValueSm}
						options={sampleOptions}
					/>
				</div>
				<div className="w-96">
					<PillSelect
						label="Medium (Default)"
						size="md"
						value={valueMd}
						onChange={setValueMd}
						options={sampleOptions}
					/>
				</div>
				<div className="w-96">
					<PillSelect
						label="Large"
						size="lg"
						value={valueLg}
						onChange={setValueLg}
						options={sampleOptions}
					/>
				</div>
			</div>
		);
	},
};

export const ManyOptions: Story = {
	render: () => {
		const [value, setValue] = useState<string[]>([]);
		const manyOptions = Array.from({ length: 50 }, (_, i) => ({
			value: `${i + 1}`,
			label: `Option ${i + 1}`,
			tone: (["blue", "green", "orange", "red", "yellow", "cyan", "magenta", "purple"] as const)[
				i % 8
			],
		}));

		return (
			<div className="w-96">
				<PillSelect
					label="Many Options with Search"
					placeholder="Search through 50 options"
					value={value}
					onChange={setValue}
					options={manyOptions}
				/>
			</div>
		);
	},
};

