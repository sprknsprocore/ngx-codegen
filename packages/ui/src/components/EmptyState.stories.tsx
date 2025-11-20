import type { Meta, StoryObj } from "@storybook/react";
import {
	EmptyState,
	EmptyStateCard,
	EmptyStateNoData,
	EmptyStateNoResults,
	EmptyStateNoFiles,
	EmptyStateError,
} from "./EmptyState";
import { Button } from "./Button";

const meta: Meta<typeof EmptyState> = {
	title: "Components/EmptyState",
	component: EmptyState,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

const FolderIcon = () => (
	<svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
		<path d="M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
	</svg>
);

export const Default: Story = {
	args: {
		icon: <FolderIcon />,
		heading: "No files found",
		description: "This folder is empty. Upload files to get started.",
	},
};

export const WithPrimaryAction: Story = {
	args: {
		icon: <FolderIcon />,
		heading: "No files found",
		description: "Upload your first file to get started.",
		primaryAction: <Button>Upload File</Button>,
	},
};

export const WithActions: Story = {
	args: {
		icon: <FolderIcon />,
		heading: "No files found",
		description: "Upload files or create a new folder.",
		primaryAction: <Button>Upload File</Button>,
		secondaryAction: <Button emphasis="secondary">Create Folder</Button>,
	},
};

export const Small: Story = {
	args: {
		size: "sm",
		icon: <FolderIcon />,
		heading: "No items",
		description: "This list is empty.",
	},
};

export const Large: Story = {
	args: {
		size: "lg",
		icon: <FolderIcon />,
		heading: "Welcome to your workspace",
		description: "Get started by uploading your first file or creating a new project.",
		primaryAction: <Button>Get Started</Button>,
	},
};

export const CardVariant: Story = {
	render: () => (
		<EmptyStateCard
			icon={<FolderIcon />}
			heading="No files uploaded"
			description="Drag and drop files here or click to upload."
			primaryAction={<Button>Choose Files</Button>}
		/>
	),
};

export const DashedCard: Story = {
	render: () => (
		<EmptyStateCard
			dashed
			icon={<FolderIcon />}
			heading="Drop files here"
			description="or click to browse"
			primaryAction={<Button emphasis="secondary">Browse Files</Button>}
		/>
	),
};

// Preset examples
export const NoData: Story = {
	render: () => <EmptyStateNoData />,
};

export const NoDataWithAction: Story = {
	render: () => (
		<EmptyStateNoData
			primaryAction={<Button>Add Data</Button>}
		/>
	),
};

export const NoResults: Story = {
	render: () => <EmptyStateNoResults />,
};

export const NoResultsWithAction: Story = {
	render: () => (
		<EmptyStateNoResults
			primaryAction={<Button emphasis="secondary">Clear Filters</Button>}
		/>
	),
};

export const NoFiles: Story = {
	render: () => <EmptyStateNoFiles />,
};

export const NoFilesWithAction: Story = {
	render: () => (
		<EmptyStateNoFiles
			primaryAction={<Button>Upload Files</Button>}
			secondaryAction={<Button emphasis="secondary">Learn More</Button>}
		/>
	),
};

export const Error: Story = {
	render: () => <EmptyStateError />,
};

export const ErrorWithAction: Story = {
	render: () => (
		<EmptyStateError
			primaryAction={<Button>Try Again</Button>}
			secondaryAction={<Button emphasis="secondary">Contact Support</Button>}
		/>
	),
};

// Real-world examples
export const TableEmptyState: Story = {
	render: () => (
		<div className="border border-border-default rounded-sm">
			<div className="bg-bg-surface border-b border-border-default p-4">
				<h3 className="text-h3 text-fg-default">Projects</h3>
			</div>
			<EmptyStateNoData
				heading="No projects yet"
				description="Create your first project to get started."
				primaryAction={<Button>Create Project</Button>}
			/>
		</div>
	),
};

export const SearchEmptyState: Story = {
	render: () => (
		<div className="h-96 flex items-center justify-center">
			<EmptyStateNoResults
				heading='No results for "example query"'
				description="Try different keywords or check your spelling."
				primaryAction={<Button emphasis="secondary">Clear Search</Button>}
			/>
		</div>
	),
};

