import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { TieredSelect, type TieredOption } from "./TieredSelect";

const meta: Meta<typeof TieredSelect> = {
	title: "Components/TieredSelect",
	component: TieredSelect,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TieredSelect>;

const sampleOptions: TieredOption[] = [
	{
		id: "tier1-1",
		label: "Tier 1",
		children: [
			{
				id: "tier2-1",
				label: "Tier 2",
				children: [
					{
						id: "tier3-1",
						label: "Tier 3",
						children: [
							{ id: "tier4-1", label: "Option" },
							{ id: "tier4-2", label: "Option" },
						],
					},
					{
						id: "tier3-2",
						label: "Tier 3",
						children: [
							{ id: "tier4-3", label: "Option" },
							{ id: "tier4-4", label: "Option" },
						],
					},
				],
			},
			{
				id: "tier2-2",
				label: "Tier 2",
				children: [
					{ id: "tier3-3", label: "Tier 3" },
					{ id: "tier3-4", label: "Tier 3" },
				],
			},
		],
	},
	{
		id: "tier1-2",
		label: "Tier 1",
		children: [
			{
				id: "tier2-3",
				label: "Tier 2",
				children: [
					{ id: "tier3-5", label: "Tier 3" },
					{ id: "tier3-6", label: "Tier 3" },
				],
			},
		],
	},
	{
		id: "tier1-3",
		label: "Tier 1",
		children: [
			{ id: "tier2-4", label: "Option" },
			{ id: "tier2-5", label: "Option" },
		],
	},
];

export const Default: Story = {
	args: {
		options: sampleOptions,
		placeholder: "Placeholder",
	},
};

export const WithLabel: Story = {
	args: {
		options: sampleOptions,
		label: "Label",
		placeholder: "Placeholder",
	},
};

export const WithValue: Story = {
	args: {
		options: sampleOptions,
		value: ["tier1-1", "tier2-1", "tier3-1", "tier4-1"],
		label: "Label",
	},
};

export const WithSearch: Story = {
	args: {
		options: sampleOptions,
		label: "Label",
		searchable: true,
	},
};

export const WithoutSearch: Story = {
	args: {
		options: sampleOptions,
		label: "Label",
		searchable: false,
	},
};

export const Disabled: Story = {
	args: {
		options: sampleOptions,
		label: "Label",
		disabled: true,
		value: ["tier1-1", "tier2-1", "tier3-1", "tier4-1"],
	},
};

export const Interactive: Story = {
	render: () => {
		const [value, setValue] = useState<string[]>([]);
		return (
			<div className="space-y-4">
				<TieredSelect
					options={sampleOptions}
					value={value}
					onChange={setValue}
					label="Select an option"
					placeholder="Choose..."
				/>
				<div className="text-sm text-fg-muted">
					Selected: {value.length > 0 ? value.join(" > ") : "None"}
				</div>
			</div>
		);
	},
};

export const MultipleSelects: Story = {
	render: () => {
		const [value1, setValue1] = useState<string[]>([]);
		const [value2, setValue2] = useState<string[]>([]);
		return (
			<div className="space-y-6 max-w-md">
				<TieredSelect
					options={sampleOptions}
					value={value1}
					onChange={setValue1}
					label="First Selection"
					placeholder="Choose..."
				/>
				<TieredSelect
					options={sampleOptions}
					value={value2}
					onChange={setValue2}
					label="Second Selection"
					placeholder="Choose..."
				/>
				<div className="text-sm text-fg-muted space-y-1">
					<div>First: {value1.length > 0 ? value1.join(" > ") : "None"}</div>
					<div>Second: {value2.length > 0 ? value2.join(" > ") : "None"}</div>
				</div>
			</div>
		);
	},
};

const realWorldOptions: TieredOption[] = [
	{
		id: "construction",
		label: "Construction",
		children: [
			{
				id: "residential",
				label: "Residential",
				children: [
					{ id: "single-family", label: "Single Family Homes" },
					{ id: "multi-family", label: "Multi-Family Units" },
					{ id: "townhomes", label: "Townhomes" },
				],
			},
			{
				id: "commercial",
				label: "Commercial",
				children: [
					{ id: "office", label: "Office Buildings" },
					{ id: "retail", label: "Retail Spaces" },
					{ id: "industrial", label: "Industrial Facilities" },
				],
			},
			{
				id: "infrastructure",
				label: "Infrastructure",
				children: [
					{ id: "roads", label: "Roads & Highways" },
					{ id: "bridges", label: "Bridges" },
					{ id: "utilities", label: "Utilities" },
				],
			},
		],
	},
	{
		id: "engineering",
		label: "Engineering",
		children: [
			{
				id: "structural",
				label: "Structural Engineering",
				children: [
					{ id: "analysis", label: "Structural Analysis" },
					{ id: "design", label: "Structural Design" },
				],
			},
			{
				id: "civil",
				label: "Civil Engineering",
				children: [
					{ id: "geotechnical", label: "Geotechnical" },
					{ id: "transportation", label: "Transportation" },
				],
			},
		],
	},
	{
		id: "architecture",
		label: "Architecture",
		children: [
			{ id: "conceptual", label: "Conceptual Design" },
			{ id: "detailed", label: "Detailed Design" },
			{ id: "interior", label: "Interior Design" },
		],
	},
];

export const RealWorldExample: Story = {
	render: () => {
		const [value, setValue] = useState<string[]>([]);
		return (
			<div className="space-y-4 max-w-md">
				<TieredSelect
					options={realWorldOptions}
					value={value}
					onChange={setValue}
					label="Project Category"
					placeholder="Select a category..."
				/>
				<div className="p-4 bg-bg-surface rounded-md">
					<div className="text-sm font-medium text-fg-default mb-1">Selected:</div>
					<div className="text-sm text-fg-muted">
						{value.length > 0 ? value.join(" → ") : "No selection"}
					</div>
				</div>
			</div>
		);
	},
};

