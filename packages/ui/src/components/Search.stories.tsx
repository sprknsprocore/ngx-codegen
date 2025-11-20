import type { Meta, StoryObj } from "@storybook/react";
import { Search } from "./Search";
import { useState } from "react";

const meta: Meta<typeof Search> = {
	title: "Components/Search",
	component: Search,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Default: Story = {
	render: (args) => {
		const [value, setValue] = useState("");
		return (
			<Search
				{...args}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				onClear={() => setValue("")}
			/>
		);
	},
	args: {
		placeholder: "Search",
	},
};

export const WithValue: Story = {
	render: (args) => {
		const [value, setValue] = useState("Search query");
		return (
			<Search
				{...args}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				onClear={() => setValue("")}
			/>
		);
	},
	args: {
		placeholder: "Search",
	},
};

export const Loading: Story = {
	render: (args) => {
		const [value, setValue] = useState("Loading...");
		return (
			<Search
				{...args}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				onClear={() => setValue("")}
			/>
		);
	},
	args: {
		placeholder: "Search",
		loading: true,
	},
};

export const Disabled: Story = {
	render: (args) => {
		const [value, setValue] = useState("");
		return (
			<Search
				{...args}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				onClear={() => setValue("")}
			/>
		);
	},
	args: {
		placeholder: "Search",
		disabled: true,
	},
};

export const WithError: Story = {
	render: (args) => {
		const [value, setValue] = useState("Invalid query");
		return (
			<Search
				{...args}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				onClear={() => setValue("")}
			/>
		);
	},
	args: {
		placeholder: "Search",
		validationState: "invalid",
	},
};

export const NotClearable: Story = {
	render: (args) => {
		const [value, setValue] = useState("Cannot clear");
		return (
			<Search
				{...args}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				onClear={() => setValue("")}
			/>
		);
	},
	args: {
		placeholder: "Search",
		clearable: false,
	},
};

export const Sizes: Story = {
	render: () => {
		const [valueSmall, setValueSmall] = useState("");
		const [valueMedium, setValueMedium] = useState("");
		const [valueLarge, setValueLarge] = useState("");

		return (
			<div className="space-y-4 max-w-md">
				<div>
					<p className="text-sm font-medium text-fg-default mb-2">Small</p>
					<Search
						placeholder="Search"
						size="sm"
						value={valueSmall}
						onChange={(e) => setValueSmall(e.target.value)}
						onClear={() => setValueSmall("")}
					/>
				</div>
				<div>
					<p className="text-sm font-medium text-fg-default mb-2">Medium (Default)</p>
					<Search
						placeholder="Search"
						size="md"
						value={valueMedium}
						onChange={(e) => setValueMedium(e.target.value)}
						onClear={() => setValueMedium("")}
					/>
				</div>
				<div>
					<p className="text-sm font-medium text-fg-default mb-2">Large</p>
					<Search
						placeholder="Search"
						size="lg"
						value={valueLarge}
						onChange={(e) => setValueLarge(e.target.value)}
						onClear={() => setValueLarge("")}
					/>
				</div>
			</div>
		);
	},
};

export const AllVariants: Story = {
	render: () => {
		const [value1, setValue1] = useState("");
		const [value2, setValue2] = useState("Active search");
		const [value3, setValue3] = useState("Searching...");
		const [value4, setValue4] = useState("");

		return (
			<div className="space-y-4 max-w-md">
				<div>
					<p className="text-sm font-medium text-fg-default mb-2">Empty</p>
					<Search
						placeholder="Search"
						value={value1}
						onChange={(e) => setValue1(e.target.value)}
						onClear={() => setValue1("")}
					/>
				</div>

				<div>
					<p className="text-sm font-medium text-fg-default mb-2">With Value</p>
					<Search
						placeholder="Search"
						value={value2}
						onChange={(e) => setValue2(e.target.value)}
						onClear={() => setValue2("")}
					/>
				</div>

				<div>
					<p className="text-sm font-medium text-fg-default mb-2">Loading</p>
					<Search
						placeholder="Search"
						value={value3}
						onChange={(e) => setValue3(e.target.value)}
						onClear={() => setValue3("")}
						loading
					/>
				</div>

				<div>
					<p className="text-sm font-medium text-fg-default mb-2">Disabled</p>
					<Search
						placeholder="Search"
						value={value4}
						onChange={(e) => setValue4(e.target.value)}
						onClear={() => setValue4("")}
						disabled
					/>
				</div>
			</div>
		);
	},
};

