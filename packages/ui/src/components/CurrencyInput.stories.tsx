import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { CurrencyInput } from "./CurrencyInput";

const meta: Meta<typeof CurrencyInput> = {
	title: "Components/CurrencyInput",
	component: CurrencyInput,
	tags: ["autodocs"],
	argTypes: {
		validationState: {
			control: "select",
			options: ["none", "invalid", "valid"],
		},
		showButtons: {
			control: "boolean",
		},
		currencySymbol: {
			control: "text",
		},
	},
};

export default meta;
type Story = StoryObj<typeof CurrencyInput>;

export const Default: Story = {
	render: () => {
		const [value, setValue] = useState<number | string>(0);
		return (
			<div className="w-64">
				<CurrencyInput label="Label" placeholder="0.00" value={value} onChange={setValue} />
			</div>
		);
	},
};

export const WithValue: Story = {
	render: () => {
		const [value, setValue] = useState<number | string>(1234.56);
		return (
			<div className="w-64">
				<CurrencyInput label="Label" placeholder="0.00" value={value} onChange={setValue} />
			</div>
		);
	},
};

export const DifferentCurrency: Story = {
	render: () => {
		const [value1, setValue1] = useState<number | string>(1234.56);
		const [value2, setValue2] = useState<number | string>(1234.56);
		const [value3, setValue3] = useState<number | string>(1234.56);

		return (
			<div className="flex flex-col gap-6">
				<div className="w-64">
					<CurrencyInput
						label="USD"
						placeholder="0.00"
						value={value1}
						onChange={setValue1}
						currencySymbol="$"
					/>
				</div>
				<div className="w-64">
					<CurrencyInput
						label="EUR"
						placeholder="0.00"
						value={value2}
						onChange={setValue2}
						currencySymbol="€"
					/>
				</div>
				<div className="w-64">
					<CurrencyInput
						label="GBP"
						placeholder="0.00"
						value={value3}
						onChange={setValue3}
						currencySymbol="£"
					/>
				</div>
			</div>
		);
	},
};

export const WithMinMax: Story = {
	render: () => {
		const [value, setValue] = useState<number | string>(50);
		return (
			<div className="w-64">
				<CurrencyInput
					label="Label (min: $0, max: $100)"
					placeholder="0.00"
					value={value}
					onChange={setValue}
					min={0}
					max={100}
					helperText="Value must be between $0 and $100"
				/>
			</div>
		);
	},
};

export const CustomStep: Story = {
	render: () => {
		const [value, setValue] = useState<number | string>(0);
		return (
			<div className="w-64">
				<CurrencyInput
					label="Label (step: $10)"
					placeholder="0.00"
					value={value}
					onChange={setValue}
					step={10}
					helperText="Increments by $10"
				/>
			</div>
		);
	},
};

export const Invalid: Story = {
	render: () => {
		const [value, setValue] = useState<number | string>(150.5);
		return (
			<div className="w-64">
				<CurrencyInput
					label="Label"
					placeholder="0.00"
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
		const [value, setValue] = useState<number | string>(42.99);
		return (
			<div className="w-64">
				<CurrencyInput
					label="Label"
					placeholder="0.00"
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
				<CurrencyInput label="Label" placeholder="0.00" value={1234.56} disabled />
			</div>
		);
	},
};

export const Required: Story = {
	render: () => {
		const [value, setValue] = useState<number | string>("");
		return (
			<div className="w-64">
				<CurrencyInput label="Label" placeholder="0.00" value={value} onChange={setValue} required />
			</div>
		);
	},
};

export const WithoutButtons: Story = {
	render: () => {
		const [value, setValue] = useState<number | string>(1234.56);
		return (
			<div className="w-64">
				<CurrencyInput
					label="Label"
					placeholder="0.00"
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
		const [value2, setValue2] = useState<number | string>(1234.56);
		const [value3, setValue3] = useState<number | string>(9999.99);
		const [value4, setValue4] = useState<number | string>(42.99);

		return (
			<div className="flex flex-col gap-6 p-6">
				<div className="w-64">
					<CurrencyInput label="Label" placeholder="0.00" value={value1} onChange={setValue1} />
				</div>
				<div className="w-64">
					<CurrencyInput
						label="Label"
						placeholder="0.00"
						value={value2}
						onChange={setValue2}
						helperText="Helper text"
					/>
				</div>
				<div className="w-64">
					<CurrencyInput
						label="Label"
						placeholder="0.00"
						value={value3}
						onChange={setValue3}
						validationState="invalid"
						helperText="Error Message/Helper Text"
					/>
				</div>
				<div className="w-64">
					<CurrencyInput
						label="Label"
						placeholder="0.00"
						value={value4}
						onChange={setValue4}
						validationState="valid"
						helperText="Success message"
					/>
				</div>
				<div className="w-64">
					<CurrencyInput label="Label" placeholder="0.00" value={1234.56} disabled />
				</div>
			</div>
		);
	},
};

