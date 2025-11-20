import type { Meta, StoryObj } from "@storybook/react";
import { Thumbnail } from "./Thumbnail";

const meta: Meta<typeof Thumbnail> = {
	title: "Components/Thumbnail",
	component: Thumbnail,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Thumbnail>;

// Icon components for demonstrations
const FileIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
		<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
		<polyline points="13 2 13 9 20 9" />
	</svg>
);

const FolderIcon = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
		<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
	</svg>
);

const CheckIcon = () => (
	<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
		<polyline points="3 8 6 11 13 4" />
	</svg>
);

export const WithImage: Story = {
	args: {
		src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=200&h=200&fit=crop",
		alt: "Construction site",
		label: "Filename",
	},
};

export const WithImageSelected: Story = {
	args: {
		src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=200&h=200&fit=crop",
		alt: "Construction site",
		label: "Filename",
		state: "selected",
		badge: <CheckIcon />,
		badgeTone: "brand",
	},
};

export const WithFileIcon: Story = {
	args: {
		icon: <FileIcon />,
		label: "Filename",
	},
};

export const WithFileIconSelected: Story = {
	args: {
		icon: <FileIcon />,
		label: "Filename",
		state: "selected",
		badge: <CheckIcon />,
		badgeTone: "brand",
	},
};

export const WithFolderIcon: Story = {
	args: {
		icon: <FolderIcon />,
		label: "Filename",
	},
};

export const ErrorState: Story = {
	args: {
		icon: <FileIcon />,
		label: "Filename",
		state: "error",
	},
};

export const DisabledState: Story = {
	args: {
		icon: <FileIcon />,
		label: "Filename",
		state: "disabled",
	},
};

export const SmallSize: Story = {
	args: {
		icon: <FileIcon />,
		label: "Filename",
		size: "sm",
	},
};

export const LargeSize: Story = {
	args: {
		src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=200&h=200&fit=crop",
		alt: "Construction site",
		label: "Filename",
		size: "lg",
	},
};

export const ExtraLargeSize: Story = {
	args: {
		src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=200&h=200&fit=crop",
		alt: "Construction site",
		label: "Filename",
		size: "xl",
	},
};

export const CircleShape: Story = {
	args: {
		src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=200&h=200&fit=crop",
		alt: "Construction site",
		label: "Filename",
		shape: "circle",
	},
};

export const AllVariants: Story = {
	render: () => (
		<div className="flex flex-wrap gap-6">
			<Thumbnail
				src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=200&h=200&fit=crop"
				alt="Image"
				label="Filename"
			/>
			<Thumbnail
				src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=200&h=200&fit=crop"
				alt="Image"
				label="Label"
				state="selected"
				badge={<CheckIcon />}
			/>
			<Thumbnail icon={<FileIcon />} label="Filename" />
			<Thumbnail icon={<FolderIcon />} label="Filename" />
			<Thumbnail icon={<FileIcon />} label="Filename" state="selected" badge={<CheckIcon />} />
			<Thumbnail icon={<FileIcon />} label="Filename" state="error" />
			<Thumbnail icon={<FileIcon />} label="Filename" state="disabled" />
		</div>
	),
};

