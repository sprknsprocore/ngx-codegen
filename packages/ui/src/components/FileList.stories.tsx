import type { Meta, StoryObj } from "@storybook/react";
import { FileList } from "./FileList";
import { useState } from "react";

const meta: Meta<typeof FileList> = {
	title: "Components/FileList",
	component: FileList,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FileList>;

// Mock icon components
const FileIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
		<path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
	</svg>
);

const PdfIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
		<path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm10 5.5h1v-3h-1v3z" />
	</svg>
);

const ImageIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
		<path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
	</svg>
);

const mockFiles = [
	{
		id: "1",
		name: "Project Proposal.pdf",
		size: "2.3 MB",
		date: "Dec 15, 2024",
		icon: <PdfIcon />,
	},
	{
		id: "2",
		name: "Budget 2025.xlsx",
		size: "1.1 MB",
		date: "Dec 14, 2024",
		icon: <FileIcon />,
	},
	{
		id: "3",
		name: "Meeting Notes.docx",
		size: "845 KB",
		date: "Dec 13, 2024",
		icon: <FileIcon />,
	},
	{
		id: "4",
		name: "Team Photo.jpg",
		size: "3.2 MB",
		date: "Dec 12, 2024",
		icon: <ImageIcon />,
	},
	{
		id: "5",
		name: "Corrupted File.zip",
		size: "Unknown",
		date: "Dec 10, 2024",
		icon: <FileIcon />,
		error: true,
	},
];

export const Default: Story = {
	args: {
		items: mockFiles,
	},
};

export const WithSelection: Story = {
	render: () => {
		const [selectedId, setSelectedId] = useState<string | undefined>("2");
		
		return (
			<FileList
				items={mockFiles}
				selectedId={selectedId}
				onItemClick={setSelectedId}
			/>
		);
	},
};

export const WithActions: Story = {
	render: () => {
		const [items, setItems] = useState(mockFiles);
		const [selectedId, setSelectedId] = useState<string | undefined>();
		
		const handleDelete = (id: string) => {
			setItems(items.filter((item) => item.id !== id));
			if (selectedId === id) {
				setSelectedId(undefined);
			}
		};
		
		const handleDownload = (id: string) => {
			const item = items.find((item) => item.id === id);
			console.log("Downloading:", item?.name);
		};
		
		return (
			<FileList
				items={items}
				selectedId={selectedId}
				onItemClick={setSelectedId}
				onDelete={handleDelete}
				onDownload={handleDownload}
			/>
		);
	},
};

export const Empty: Story = {
	args: {
		items: [],
		emptyState: (
			<div className="text-center">
				<FileIcon />
				<div className="mt-3">
					<p className="text-h3 text-fg-default mb-1">No files</p>
					<p className="text-body text-fg-secondary">
						Upload files to get started
					</p>
				</div>
			</div>
		),
	},
};

export const WithErrors: Story = {
	args: {
		items: [
			{
				id: "1",
				name: "Valid File.pdf",
				size: "1.2 MB",
				date: "Today",
				icon: <PdfIcon />,
			},
			{
				id: "2",
				name: "Corrupted File.zip",
				size: "Unknown",
				date: "Yesterday",
				icon: <FileIcon />,
				error: true,
			},
			{
				id: "3",
				name: "Failed Upload.jpg",
				size: "0 KB",
				date: "2 days ago",
				icon: <ImageIcon />,
				error: true,
			},
		],
	},
};

