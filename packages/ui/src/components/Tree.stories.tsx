import type { Meta, StoryObj } from "@storybook/react";
import { Tree, type TreeNodeData } from "./Tree";
import * as React from "react";

const meta = {
	title: "Components/Tree",
	component: Tree,
	tags: ["autodocs"],
} satisfies Meta<typeof Tree>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData: TreeNodeData[] = [
	{
		id: "1",
		label: "Label",
		children: [
			{
				id: "1-1",
				label: "Label",
			},
			{
				id: "1-2",
				label: "Label",
			},
		],
	},
	{
		id: "2",
		label: "Label",
		children: [
			{
				id: "2-1",
				label: "Label",
				children: [
					{
						id: "2-1-1",
						label: "Label",
					},
					{
						id: "2-1-2",
						label: "Label",
					},
				],
			},
		],
	},
	{
		id: "3",
		label: "Label",
	},
	{
		id: "4",
		label: "Label",
		disabled: true,
	},
];

const fileSystemData: TreeNodeData[] = [
	{
		id: "root",
		label: "src",
		children: [
			{
				id: "components",
				label: "components",
				children: [
					{
						id: "button-tsx",
						label: "Button.tsx",
					},
					{
						id: "input-tsx",
						label: "Input.tsx",
					},
					{
						id: "tree-tsx",
						label: "Tree.tsx",
					},
				],
			},
			{
				id: "utils",
				label: "utils",
				children: [
					{
						id: "helpers-ts",
						label: "helpers.ts",
					},
					{
						id: "constants-ts",
						label: "constants.ts",
					},
				],
			},
			{
				id: "index-ts",
				label: "index.ts",
			},
		],
	},
	{
		id: "public",
		label: "public",
		children: [
			{
				id: "favicon-ico",
				label: "favicon.ico",
			},
		],
	},
	{
		id: "package-json",
		label: "package.json",
	},
];

export const Default: Story = {
	args: {
		data: sampleData,
		defaultExpandedIds: ["1", "2"],
	},
};

export const FileSystem: Story = {
	render: () => {
		const [selectedId, setSelectedId] = React.useState<string>();
		return (
			<div className="w-80 border border-border-default rounded-md p-2">
				<Tree
					data={fileSystemData}
					defaultExpandedIds={["root", "components"]}
					selectedId={selectedId}
					onSelect={setSelectedId}
				/>
			</div>
		);
	},
};

export const WithSelection: Story = {
	render: () => {
		const [selectedId, setSelectedId] = React.useState<string>("1-1");
		return (
			<div className="flex flex-col gap-4">
				<div className="w-80 border border-border-default rounded-md p-2">
					<Tree
						data={sampleData}
						defaultExpandedIds={["1", "2", "2-1"]}
						selectedId={selectedId}
						onSelect={setSelectedId}
					/>
				</div>
				<p className="text-sm text-fg-secondary">Selected ID: {selectedId || "None"}</p>
			</div>
		);
	},
};

export const ControlledExpansion: Story = {
	render: () => {
		const [expandedIds, setExpandedIds] = React.useState<string[]>(["1"]);
		const [selectedId, setSelectedId] = React.useState<string>();

		return (
			<div className="flex flex-col gap-4">
				<div className="w-80 border border-border-default rounded-md p-2">
					<Tree
						data={sampleData}
						expandedIds={expandedIds}
						onExpandedChange={setExpandedIds}
						selectedId={selectedId}
						onSelect={setSelectedId}
					/>
				</div>
				<div className="flex gap-2">
					<button
						onClick={() => setExpandedIds(["1", "2", "2-1"])}
						className="px-3 py-1 text-sm bg-bg-brand text-white rounded-sm"
					>
						Expand All
					</button>
					<button
						onClick={() => setExpandedIds([])}
						className="px-3 py-1 text-sm bg-bg-surface border border-border-default rounded-sm"
					>
						Collapse All
					</button>
				</div>
			</div>
		);
	},
};

export const DeeplyNested: Story = {
	render: () => {
		const deepData: TreeNodeData[] = [
			{
				id: "1",
				label: "Level 1",
				children: [
					{
						id: "1-1",
						label: "Level 2",
						children: [
							{
								id: "1-1-1",
								label: "Level 3",
								children: [
									{
										id: "1-1-1-1",
										label: "Level 4",
										children: [
											{
												id: "1-1-1-1-1",
												label: "Level 5",
											},
										],
									},
								],
							},
						],
					},
				],
			},
		];

		return (
			<div className="w-96 border border-border-default rounded-md p-2">
				<Tree data={deepData} defaultExpandedIds={["1", "1-1", "1-1-1", "1-1-1-1"]} />
			</div>
		);
	},
};

export const WithDisabledNodes: Story = {
	render: () => {
		const dataWithDisabled: TreeNodeData[] = [
			{
				id: "1",
				label: "Available Item",
			},
			{
				id: "2",
				label: "Disabled Item",
				disabled: true,
			},
			{
				id: "3",
				label: "Folder",
				children: [
					{
						id: "3-1",
						label: "Available Child",
					},
					{
						id: "3-2",
						label: "Disabled Child",
						disabled: true,
					},
				],
			},
		];

		return (
			<div className="w-80 border border-border-default rounded-md p-2">
				<Tree data={dataWithDisabled} defaultExpandedIds={["3"]} />
			</div>
		);
	},
};

export const Empty: Story = {
	render: () => (
		<div className="w-80 border border-border-default rounded-md p-2">
			<Tree data={[]} />
			<p className="text-sm text-fg-secondary text-center py-4">No items</p>
		</div>
	),
};

