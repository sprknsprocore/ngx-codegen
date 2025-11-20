import type { Meta, StoryObj } from "@storybook/react";
import { FileSelect, FileSelectListItem, FileSelectGridItem } from "./FileSelect";

const meta: Meta<typeof FileSelect> = {
	title: "Components/FileSelect",
	component: FileSelect,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FileSelect>;

// Mock icon components
const FolderIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
		<path d="M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
	</svg>
);

const FileIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
		<path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
	</svg>
);

const ComputerIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
		<path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
	</svg>
);

const PhotoIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
		<path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
	</svg>
);

const navItems = [
	{ id: "computer", label: "My Computer", icon: <ComputerIcon /> },
	{ id: "files", label: "Files", icon: <FolderIcon /> },
	{ id: "photos", label: "Photos", icon: <PhotoIcon /> },
];

export const ListView: Story = {
	args: {
		navItems,
	},
	render: (args) => (
		<div className="h-96">
			<FileSelect {...args}>
				<div className="flex flex-col">
					<FileSelectListItem
						name="Project Proposal.pdf"
						icon={<FileIcon />}
						size="2.3 MB"
						date="Dec 15, 2024"
						selected
					/>
					<FileSelectListItem
						name="Budget 2025.xlsx"
						icon={<FileIcon />}
						size="1.1 MB"
						date="Dec 14, 2024"
					/>
					<FileSelectListItem
						name="Meeting Notes.docx"
						icon={<FileIcon />}
						size="845 KB"
						date="Dec 13, 2024"
					/>
					<FileSelectListItem
						name="Design Assets"
						icon={<FolderIcon />}
						size="24 items"
						date="Dec 12, 2024"
					/>
					<FileSelectListItem
						name="Corrupted File.zip"
						icon={<FileIcon />}
						size="Unknown"
						date="Dec 10, 2024"
						error
					/>
				</div>
			</FileSelect>
		</div>
	),
};

export const GridView: Story = {
	args: {
		navItems,
	},
	render: (args) => (
		<div className="h-96">
			<FileSelect {...args}>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					<FileSelectGridItem
						name="Project Proposal.pdf"
						preview={<FileIcon />}
						size="2.3 MB"
						selected
					/>
					<FileSelectGridItem
						name="Budget 2025.xlsx"
						preview={<FileIcon />}
						size="1.1 MB"
					/>
					<FileSelectGridItem
						name="Meeting Notes.docx"
						preview={<FileIcon />}
						size="845 KB"
					/>
					<FileSelectGridItem
						name="Design Assets"
						preview={<FolderIcon />}
						size="24 items"
					/>
					<FileSelectGridItem
						name="Team Photo.jpg"
						preview={<PhotoIcon />}
						size="3.2 MB"
					/>
					<FileSelectGridItem
						name="Logo.png"
						preview={<PhotoIcon />}
						size="567 KB"
					/>
				</div>
			</FileSelect>
		</div>
	),
};

export const EmptyState: Story = {
	args: {
		navItems,
	},
	render: (args) => (
		<div className="h-96">
			<FileSelect {...args}>
				<div className="flex flex-col items-center justify-center h-full text-center gap-3">
					<FolderIcon />
					<div>
						<p className="text-h3 text-fg-default mb-1">No files found</p>
						<p className="text-body text-fg-secondary">
							This folder is empty. Try selecting a different location.
						</p>
					</div>
				</div>
			</FileSelect>
		</div>
	),
};

export const WithoutNav: Story = {
	render: () => (
		<div className="h-96">
			<FileSelect>
				<div className="flex flex-col">
					<FileSelectListItem
						name="Document 1.pdf"
						icon={<FileIcon />}
						size="1.5 MB"
						date="Today"
					/>
					<FileSelectListItem
						name="Document 2.pdf"
						icon={<FileIcon />}
						size="2.1 MB"
						date="Yesterday"
					/>
				</div>
			</FileSelect>
		</div>
	),
};

