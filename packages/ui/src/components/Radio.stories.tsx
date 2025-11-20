import type { Meta, StoryObj } from "@storybook/react";
import { Radio, RadioGroup } from "./Radio";
import { useState } from "react";

const meta: Meta<typeof Radio> = {
	title: "Components/Radio",
	component: Radio,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Radio>;

const radioOptions = [
	{
		value: "1",
		label: "All radio buttons should have a similar sentence or word structure",
	},
	{
		value: "2",
		label: "All radio buttons should have a similar sentence or word structure",
	},
	{
		value: "3",
		label: "All radio buttons should have a similar sentence or word structure",
	},
];

const shortOptions = [
	{ value: "option1", label: "Option1" },
	{ value: "option2", label: "Option2" },
];

export const SingleRadio: Story = {
	render: (args) => {
		const [checked, setChecked] = useState(false);
		return <Radio {...args} checked={checked} onChange={(e) => setChecked(e.target.checked)} />;
	},
	args: {
		label: "All radio buttons should have a similar sentence or word structure",
	},
};

export const RadioGroupVertical: Story = {
	render: (args) => {
		const [value, setValue] = useState("1");
		return (
			<RadioGroup
				name="radio-group-1"
				value={value}
				onChange={setValue}
				options={radioOptions}
			/>
		);
	},
};

export const RadioGroupHorizontal: Story = {
	render: (args) => {
		const [value, setValue] = useState("option1");
		return (
			<RadioGroup
				name="radio-group-2"
				value={value}
				onChange={setValue}
				options={shortOptions}
				orientation="horizontal"
			/>
		);
	},
};

export const WithError: Story = {
	render: (args) => {
		const [value, setValue] = useState("");
		return (
			<div>
				<RadioGroup
					name="radio-group-error"
					value={value}
					onChange={setValue}
					options={radioOptions}
					validationState="invalid"
				/>
				<p className="text-sm text-state-danger mt-2">Please select an option</p>
			</div>
		);
	},
};

export const Disabled: Story = {
	render: (args) => {
		const [value, setValue] = useState("2");
		return (
			<RadioGroup
				name="radio-group-disabled"
				value={value}
				onChange={setValue}
				options={radioOptions}
				disabled
			/>
		);
	},
};

export const DisabledOption: Story = {
	render: (args) => {
		const [value, setValue] = useState("1");
		return (
			<RadioGroup
				name="radio-group-disabled-option"
				value={value}
				onChange={setValue}
				options={[
					{
						value: "1",
						label: "All radio buttons should have a similar sentence or word structure",
					},
					{
						value: "2",
						label: "All radio buttons should have a similar sentence or word structure",
						disabled: true,
					},
					{
						value: "3",
						label: "All radio buttons should have a similar sentence or word structure",
					},
				]}
			/>
		);
	},
};

export const States: Story = {
	render: () => {
		return (
			<div className="space-y-6">
				<div>
					<p className="text-sm font-medium text-fg-default mb-3">Unselected</p>
					<Radio label="All radio buttons should have a similar sentence or word structure" />
				</div>

				<div>
					<p className="text-sm font-medium text-fg-default mb-3">Selected</p>
					<Radio
						label="All radio buttons should have a similar sentence or word structure"
						checked
						readOnly
					/>
				</div>

				<div>
					<p className="text-sm font-medium text-fg-default mb-3">Hover (see in Storybook)</p>
					<Radio label="All radio buttons should have a similar sentence or word structure" />
				</div>

				<div>
					<p className="text-sm font-medium text-fg-default mb-3">Disabled Unselected</p>
					<Radio
						label="All radio buttons should have a similar sentence or word structure"
						disabled
					/>
				</div>

				<div>
					<p className="text-sm font-medium text-fg-default mb-3">Disabled Selected</p>
					<Radio
						label="All radio buttons should have a similar sentence or word structure"
						checked
						disabled
						readOnly
					/>
				</div>

				<div>
					<p className="text-sm font-medium text-fg-default mb-3">Error State</p>
					<Radio
						label="All radio buttons should have a similar sentence or word structure"
						validationState="invalid"
					/>
				</div>
			</div>
		);
	},
};

export const AllVariants: Story = {
	render: () => {
		const [value1, setValue1] = useState("1");
		const [value2, setValue2] = useState("option1");
		const [value3, setValue3] = useState("");

		return (
			<div className="space-y-8 max-w-2xl">
				<div>
					<p className="text-sm font-medium text-fg-default mb-3">Vertical Layout</p>
					<RadioGroup
						name="radio-group-vertical"
						value={value1}
						onChange={setValue1}
						options={radioOptions}
					/>
				</div>

				<div>
					<p className="text-sm font-medium text-fg-default mb-3">Horizontal Layout</p>
					<RadioGroup
						name="radio-group-horizontal"
						value={value2}
						onChange={setValue2}
						options={shortOptions}
						orientation="horizontal"
					/>
				</div>

				<div>
					<p className="text-sm font-medium text-fg-default mb-3">
						Required Field (no selection)
					</p>
					<RadioGroup
						name="radio-group-required"
						value={value3}
						onChange={setValue3}
						options={shortOptions}
						validationState="invalid"
					/>
					{!value3 && <p className="text-sm text-state-danger mt-2">Please select an option</p>}
				</div>
			</div>
		);
	},
};

