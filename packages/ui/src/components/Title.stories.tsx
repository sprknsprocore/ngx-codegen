import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "./Title";
import { Badge } from "./Badge";

const meta: Meta<typeof Title> = {
	title: "Components/Title",
	component: Title,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Title>;

// Icon component for demonstrations
const StarIcon = () => (
	<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
		<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
	</svg>
);

const EditIcon = () => (
	<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
		<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
		<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
	</svg>
);

export const Default: Story = {
	args: {
		children: "Heading",
	},
};

export const WithIcon: Story = {
	args: {
		children: "Heading",
		icon: <StarIcon />,
	},
};

export const WithBadge: Story = {
	args: {
		children: "Heading",
		badge: <Badge size="sm" tone="brand">New</Badge>,
	},
};

export const WithIconAndBadge: Story = {
	args: {
		children: "Heading",
		icon: <EditIcon />,
		badge: <Badge size="sm" tone="success">12</Badge>,
	},
};

export const H1Size: Story = {
	args: {
		children: "Heading",
		size: "h1",
		as: "h1",
	},
};

export const H2Size: Story = {
	args: {
		children: "Heading",
		size: "h2",
		as: "h2",
	},
};

export const H3Size: Story = {
	args: {
		children: "Heading",
		size: "h3",
		as: "h3",
	},
};

export const H4Size: Story = {
	args: {
		children: "Heading",
		size: "h4",
		as: "h4",
	},
};

export const H5Size: Story = {
	args: {
		children: "Heading",
		size: "h5",
		as: "h5",
	},
};

export const H6Size: Story = {
	args: {
		children: "Heading",
		size: "h6",
		as: "h6",
	},
};

export const BrandTone: Story = {
	args: {
		children: "Heading",
		tone: "brand",
		icon: <StarIcon />,
	},
};

export const MutedTone: Story = {
	args: {
		children: "Heading",
		tone: "muted",
	},
};

export const AllSizes: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<Title size="h1" as="h1">H1 Heading</Title>
			<Title size="h2" as="h2">H2 Heading</Title>
			<Title size="h3" as="h3">H3 Heading</Title>
			<Title size="h4" as="h4">H4 Heading</Title>
			<Title size="h5" as="h5">H5 Heading</Title>
			<Title size="h6" as="h6">H6 Heading</Title>
		</div>
	),
};

export const AllVariants: Story = {
	render: () => (
		<div className="flex flex-col gap-6">
			<Title>Default Heading</Title>
			<Title icon={<StarIcon />}>Heading with Icon</Title>
			<Title badge={<Badge size="sm" tone="brand">Badge</Badge>}>Heading with Badge</Title>
			<Title icon={<StarIcon />} badge={<Badge size="sm" tone="success">12</Badge>}>
				Complete Heading
			</Title>
			<Title tone="brand">Brand Tone</Title>
			<Title tone="muted">Muted Tone</Title>
		</div>
	),
};

