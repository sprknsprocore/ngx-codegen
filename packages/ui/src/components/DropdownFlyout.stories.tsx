import type { Meta, StoryObj } from "@storybook/react";
import { DropdownFlyout, type DropdownFlyoutOption } from "./DropdownFlyout";

const meta = {
	title: "Components/DropdownFlyout",
	component: DropdownFlyout,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof DropdownFlyout>;

export default meta;
type Story = StoryObj<typeof meta>;

const simpleOptions: DropdownFlyoutOption[] = [
	{ label: "Option", value: "1" },
	{ label: "Option", value: "2" },
	{ label: "Option", value: "3" },
];

const nestedOptions: DropdownFlyoutOption[] = [
	{
		label: "Option",
		value: "1",
		children: [
			{ label: "Option", value: "1-1" },
			{ label: "Option", value: "1-2" },
			{ label: "Option", value: "1-3" },
		],
	},
	{
		label: "Option",
		value: "2",
		children: [
			{ label: "Option", value: "2-1" },
			{ label: "Option", value: "2-2" },
			{ label: "Option", value: "2-3" },
		],
	},
	{
		label: "Option",
		value: "3",
		children: [
			{ label: "Option", value: "3-1" },
			{ label: "Option", value: "3-2" },
			{ label: "Option", value: "3-3" },
		],
	},
];

const deeplyNestedOptions: DropdownFlyoutOption[] = [
	{
		label: "Option",
		value: "1",
		children: [
			{
				label: "Option",
				value: "1-1",
				children: [
					{ label: "Option", value: "1-1-1" },
					{ label: "Option", value: "1-1-2" },
					{ label: "Option", value: "1-1-3" },
					{ label: "Option", value: "1-1-4" },
				],
			},
			{
				label: "Option",
				value: "1-2",
				children: [
					{ label: "Option", value: "1-2-1" },
					{ label: "Option", value: "1-2-2" },
					{ label: "Option", value: "1-2-3" },
				],
			},
			{ label: "Option", value: "1-3" },
		],
	},
	{
		label: "Option",
		value: "2",
		children: [
			{ label: "Option", value: "2-1" },
			{ label: "Option", value: "2-2" },
		],
	},
	{ label: "Option", value: "3" },
];

export const Default: Story = {
	args: {
		options: simpleOptions,
		onSelect: (value) => console.log("Selected:", value),
	},
};

export const Nested: Story = {
	args: {
		options: nestedOptions,
		onSelect: (value) => console.log("Selected:", value),
	},
};

export const DeeplyNested: Story = {
	args: {
		options: deeplyNestedOptions,
		onSelect: (value) => console.log("Selected:", value),
	},
};

export const WithCustomTrigger: Story = {
	args: {
		options: nestedOptions,
		trigger: (
			<button className="px-4 py-2 bg-bg-brand text-fg-onbrand rounded-md hover:opacity-95 transition-colors">
				Open Menu
			</button>
		),
		onSelect: (value) => console.log("Selected:", value),
	},
};

export const AlignEnd: Story = {
	args: {
		options: nestedOptions,
		align: "end",
		onSelect: (value) => console.log("Selected:", value),
	},
};

export const WideMenu: Story = {
	args: {
		options: [
			{
				label: "Documents and Files",
				value: "docs",
				children: [
					{ label: "Recent Documents", value: "docs-recent" },
					{ label: "Shared with Me", value: "docs-shared" },
					{ label: "Archived Files", value: "docs-archived" },
				],
			},
			{
				label: "Settings and Preferences",
				value: "settings",
				children: [
					{ label: "Account Settings", value: "settings-account" },
					{ label: "Privacy Controls", value: "settings-privacy" },
					{ label: "Notification Preferences", value: "settings-notifications" },
				],
			},
		],
		menuWidth: 280,
		onSelect: (value) => console.log("Selected:", value),
	},
};

export const WithDisabledOptions: Story = {
	args: {
		options: [
			{ label: "Option 1", value: "1" },
			{ label: "Option 2 (Disabled)", value: "2", disabled: true },
			{
				label: "Option 3",
				value: "3",
				children: [
					{ label: "Sub Option 1", value: "3-1" },
					{ label: "Sub Option 2 (Disabled)", value: "3-2", disabled: true },
					{ label: "Sub Option 3", value: "3-3" },
				],
			},
		],
		onSelect: (value) => console.log("Selected:", value),
	},
};

export const RealWorldExample: Story = {
	args: {
		options: [
			{
				label: "File",
				value: "file",
				children: [
					{ label: "New Document", value: "file-new-doc" },
					{ label: "New Folder", value: "file-new-folder" },
					{
						label: "Open Recent",
						value: "file-recent",
						children: [
							{ label: "Project A.docx", value: "file-recent-1" },
							{ label: "Report.pdf", value: "file-recent-2" },
							{ label: "Notes.txt", value: "file-recent-3" },
						],
					},
					{ label: "Save", value: "file-save" },
					{ label: "Save As...", value: "file-save-as" },
				],
			},
			{
				label: "Edit",
				value: "edit",
				children: [
					{ label: "Undo", value: "edit-undo" },
					{ label: "Redo", value: "edit-redo" },
					{ label: "Cut", value: "edit-cut" },
					{ label: "Copy", value: "edit-copy" },
					{ label: "Paste", value: "edit-paste" },
				],
			},
			{
				label: "View",
				value: "view",
				children: [
					{ label: "Zoom In", value: "view-zoom-in" },
					{ label: "Zoom Out", value: "view-zoom-out" },
					{ label: "Full Screen", value: "view-fullscreen" },
				],
			},
		],
		onSelect: (value) => alert(`Selected: ${value}`),
	},
};

