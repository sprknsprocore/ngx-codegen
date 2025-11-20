import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { MultiSelect } from "./MultiSelect";

const meta: Meta<typeof MultiSelect> = {
	title: "Components/MultiSelect",
	component: MultiSelect,
	tags: ["autodocs"],
	argTypes: {
		validationState: {
			control: "select",
			options: ["none", "invalid", "valid"],
		},
	},
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

const simpleOptions = [
	{ label: "Option", value: "option1" },
	{ label: "Option", value: "option2" },
	{ label: "Option", value: "option3" },
	{ label: "Option", value: "option4" },
	{ label: "Option", value: "option5" },
	{ label: "Option", value: "option6" },
	{ label: "Option", value: "option7" },
	{ label: "Option", value: "option8" },
	{ label: "Option", value: "option9" },
	{ label: "Option", value: "option10" },
];

const userOptions = [
	{ label: "Full Name", value: "user1", avatar: "TT", subtitle: "Title, Company" },
	{ label: "Full Name", value: "user2", avatar: "TT", subtitle: "Title, Company" },
	{ label: "Full Name", value: "user3", avatar: "TT", subtitle: "Title, Company" },
	{ label: "Full Name", value: "user4", avatar: "TT", subtitle: "Title, Company" },
	{ label: "Full Name", value: "user5", avatar: "TT", subtitle: "Title, Company" },
	{ label: "Full Name", value: "user6", avatar: "TT", subtitle: "Title, Company" },
	{ label: "Full Name", value: "user7", avatar: "TT", subtitle: "Title, Company" },
	{ label: "Full Name", value: "user8", avatar: "TT", subtitle: "Title, Company" },
];

export const Default: Story = {
	render: () => {
		const [value, setValue] = useState<string[]>([]);
		return (
			<div className="w-80">
				<MultiSelect label="Label" placeholder="Placeholder" options={simpleOptions} value={value} onChange={setValue} />
			</div>
		);
	},
};

export const WithValues: Story = {
	render: () => {
		const [value, setValue] = useState<string[]>(["option1", "option2"]);
		return (
			<div className="w-80">
				<MultiSelect label="Label" placeholder="Placeholder" options={simpleOptions} value={value} onChange={setValue} />
			</div>
		);
	},
};

export const WithManyValues: Story = {
	render: () => {
		const [value, setValue] = useState<string[]>(["option1", "option2", "option3", "option4"]);
		return (
			<div className="w-80">
				<MultiSelect label="Label" placeholder="Placeholder" options={simpleOptions} value={value} onChange={setValue} />
			</div>
		);
	},
};

export const WithUserOptions: Story = {
	render: () => {
		const [value, setValue] = useState<string[]>(["user1", "user2"]);
		return (
			<div className="w-80">
				<MultiSelect
					label="Label"
					placeholder="Placeholder"
					options={userOptions}
					value={value}
					onChange={setValue}
					message="Message"
				/>
			</div>
		);
	},
};

export const Grouped: Story = {
	render: () => {
		const [value, setValue] = useState<string[]>(["g1-opt1", "g2-opt2"]);
		return (
			<div className="w-80">
				<MultiSelect
					label="Label"
					placeholder="Placeholder"
					groups={[
						{
							title: "Grouped Title 1",
							badge: "Value",
							options: [
								{ label: "Option", value: "g1-opt1" },
								{ label: "Option", value: "g1-opt2" },
								{ label: "Option", value: "g1-opt3" },
							],
						},
						{
							title: "Grouped Title 2",
							badge: "Value",
							options: [
								{ label: "Option", value: "g2-opt1" },
								{ label: "Option", value: "g2-opt2" },
								{ label: "Option", value: "g2-opt3" },
							],
						},
					]}
					value={value}
					onChange={setValue}
				/>
			</div>
		);
	},
};

export const GroupedWithUsers: Story = {
	render: () => {
		const [value, setValue] = useState<string[]>(["g1-user1", "g2-user2"]);
		return (
			<div className="w-80">
				<MultiSelect
					label="Label"
					placeholder="Placeholder"
					groups={[
						{
							title: "Grouped Title 1",
							options: [
								{ label: "Full Name", value: "g1-user1", avatar: "TT", subtitle: "Title, Company" },
								{ label: "Full Name", value: "g1-user2", avatar: "TT", subtitle: "Title, Company" },
								{ label: "Full Name", value: "g1-user3", avatar: "TT", subtitle: "Title, Company" },
							],
						},
						{
							title: "Grouped Title 2",
							options: [
								{ label: "Full Name", value: "g2-user1", avatar: "TT", subtitle: "Title, Company" },
								{ label: "Full Name", value: "g2-user2", avatar: "TT", subtitle: "Title, Company" },
								{ label: "Full Name", value: "g2-user3", avatar: "TT", subtitle: "Title, Company" },
								{ label: "Full Name", value: "g2-user4", avatar: "TT", subtitle: "Title, Company" },
							],
						},
					]}
					value={value}
					onChange={setValue}
					message="Message"
				/>
			</div>
		);
	},
};

export const Invalid: Story = {
	render: () => {
		const [value, setValue] = useState<string[]>(["option1", "option2", "option3", "option4"]);
		return (
			<div className="w-80">
				<MultiSelect
					label="Label"
					placeholder="Placeholder"
					options={simpleOptions}
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
		const [value, setValue] = useState<string[]>(["option1", "option2"]);
		return (
			<div className="w-80">
				<MultiSelect
					label="Label"
					placeholder="Placeholder"
					options={simpleOptions}
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
		const [value] = useState<string[]>(["option1", "option2"]);
		return (
			<div className="w-80">
				<MultiSelect
					label="Label"
					placeholder="Placeholder"
					options={simpleOptions}
					value={value}
					disabled
				/>
			</div>
		);
	},
};

export const Required: Story = {
	render: () => {
		const [value, setValue] = useState<string[]>([]);
		return (
			<div className="w-80">
				<MultiSelect
					label="Label"
					placeholder="Placeholder"
					options={simpleOptions}
					value={value}
					onChange={setValue}
					required
				/>
			</div>
		);
	},
};

export const WithMaxSelections: Story = {
	render: () => {
		const [value, setValue] = useState<string[]>(["option1", "option2"]);
		return (
			<div className="w-80">
				<MultiSelect
					label="Label (max 3 selections)"
					placeholder="Placeholder"
					options={simpleOptions}
					value={value}
					onChange={setValue}
					maxSelections={3}
					helperText={`${value.length}/3 selections`}
				/>
			</div>
		);
	},
};

export const AllStates: Story = {
	render: () => {
		const [value1, setValue1] = useState<string[]>([]);
		const [value2, setValue2] = useState<string[]>(["option1", "option2"]);
		const [value3, setValue3] = useState<string[]>(["option1", "option2", "option3", "option4"]);
		const [value4, setValue4] = useState<string[]>(["option1"]);

		return (
			<div className="flex flex-col gap-6 p-6">
				<div className="w-80">
					<MultiSelect
						label="Label"
						placeholder="Placeholder"
						options={simpleOptions}
						value={value1}
						onChange={setValue1}
					/>
				</div>
				<div className="w-80">
					<MultiSelect
						label="Label"
						placeholder="Placeholder"
						options={simpleOptions}
						value={value2}
						onChange={setValue2}
						helperText="Helper text"
					/>
				</div>
				<div className="w-80">
					<MultiSelect
						label="Label"
						placeholder="Placeholder"
						options={simpleOptions}
						value={value3}
						onChange={setValue3}
						validationState="invalid"
						helperText="Error Message/Helper Text"
					/>
				</div>
				<div className="w-80">
					<MultiSelect
						label="Label"
						placeholder="Placeholder"
						options={simpleOptions}
						value={value4}
						onChange={setValue4}
						validationState="valid"
						helperText="Success message"
					/>
				</div>
				<div className="w-80">
					<MultiSelect
						label="Label"
						placeholder="Placeholder"
						options={simpleOptions}
						value={["option1", "option2"]}
						disabled
					/>
				</div>
			</div>
		);
	},
};

