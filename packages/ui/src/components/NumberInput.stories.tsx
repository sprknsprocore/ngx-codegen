import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { NumberInput } from "./NumberInput";

const meta: Meta<typeof NumberInput> = {
	title: "Components/NumberInput",
	component: NumberInput,
	tags: ["autodocs"],
	argTypes: {
		validationState: {
			control: "select",
			options: ["none", "invalid", "valid"],
		},
		showButtons: {
			control: "boolean",
		},
	},
};

export default meta;
type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {
	render: () => {
		const [value, setValue] = useState<number | string>(0);
		return (
			<div className="w-64">
				<NumberInput label="Label" placeholder="Placeholder" value={value} onChange={setValue} />
			</div>
		);
	},
};

export const WithValue: Story = {
	render: () => {
		const [value, setValue] = useState<number | string>(42);
		return (
			<div className="w-64">
				<NumberInput label="Label" placeholder="Placeholder" value={value} onChange={setValue} />
			</div>
		);
	},
};

export const WithMinMax: Story = {
	render: () => {
		const [value, setValue] = useState<number | string>(5);
		return (
			<div className="w-64">
				<NumberInput
					label="Label (min: 0, max: 10)"
					placeholder="Placeholder"
					value={value}
					onChange={setValue}
					min={0}
					max={10}
					helperText="Value must be between 0 and 10"
				/>
			</div>
		);
	},
};

export const WithStep: Story = {
	render: () => {
		const [value, setValue] = useState<number | string>(0);
		return (
			<div className="w-64">
				<NumberInput
					label="Label (step: 5)"
					placeholder="Placeholder"
					value={value}
					onChange={setValue}
					step={5}
					helperText="Increments by 5"
				/>
			</div>
		);
	},
};

export const Invalid: Story = {
	render: () => {
		const [value, setValue] = useState<number | string>(150);
		return (
			<div className="w-64">
				<NumberInput
					label="Label"
					placeholder="Placeholder"
					value={value}
					onChange={setValue}
					validationState="invalid"
					helperText="Error Message/Helper Text"
				/>
			</div>
		);
	},
};

export const Valid: Story = {
	render: () => {
		const [value, setValue] = useState<number | string>(42);
		return (
			<div className="w-64">
				<NumberInput
					label="Label"
					placeholder="Placeholder"
					value={value}
					onChange={setValue}
					validationState="valid"
					helperText="Success message"
				/>
			</div>
		);
	},
};

export const Disabled: Story = {
	render: () => {
		return (
			<div className="w-64">
				<NumberInput label="Label" placeholder="Placeholder" value={42} disabled />
			</div>
		);
	},
};

export const Required: Story = {
	render: () => {
		const [value, setValue] = useState<number | string>("");
		return (
			<div className="w-64">
				<NumberInput label="Label" placeholder="Placeholder" value={value} onChange={setValue} required />
			</div>
		);
	},
};

export const WithoutButtons: Story = {
	render: () => {
		const [value, setValue] = useState<number | string>(42);
		return (
			<div className="w-64">
				<NumberInput
					label="Label"
					placeholder="Placeholder"
					value={value}
					onChange={setValue}
					showButtons={false}
				/>
			</div>
		);
	},
};

export const AllStates: Story = {
	render: () => {
		const [value1, setValue1] = useState<number | string>("");
		const [value2, setValue2] = useState<number | string>(42);
		const [value3, setValue3] = useState<number | string>(150);
		const [value4, setValue4] = useState<number | string>(99);

		return (
			<div className="flex flex-col gap-6 p-6">
				<div className="w-64">
					<NumberInput label="Label" placeholder="Placeholder" value={value1} onChange={setValue1} />
				</div>
				<div className="w-64">
					<NumberInput
						label="Label"
						placeholder="Placeholder"
						value={value2}
						onChange={setValue2}
						helperText="Helper text"
					/>
				</div>
				<div className="w-64">
					<NumberInput
						label="Label"
						placeholder="Placeholder"
						value={value3}
						onChange={setValue3}
						validationState="invalid"
						helperText="Error Message/Helper Text"
					/>
				</div>
				<div className="w-64">
					<NumberInput
						label="Label"
						placeholder="Placeholder"
						value={value4}
						onChange={setValue4}
						validationState="valid"
						helperText="Success message"
					/>
				</div>
				<div className="w-64">
					<NumberInput label="Label" placeholder="Placeholder" value={42} disabled />
				</div>
			</div>
		);
	},
};

