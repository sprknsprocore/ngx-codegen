import type { Meta, StoryObj } from "@storybook/react";
import { Tile } from "./Tile";
import { Button } from "./Button";

const meta: Meta<typeof Tile> = {
	title: "Components/Tile",
	component: Tile,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tile>;

const sampleImage = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop";

export const Default: Story = {
	args: {
		title: "Section Name",
		subheading: "Subheading",
		imageSrc: sampleImage,
		imageAlt: "Construction site",
	},
};

export const WithDescription: Story = {
	args: {
		title: "Section Name",
		subheading: "Subheading",
		description: "Description without a label.",
		imageSrc: sampleImage,
		imageAlt: "Construction site",
	},
};

export const WithContentBlocks: Story = {
	args: {
		title: "Section Name",
		subheading: "Subheading",
		description: "Description without a label.",
		imageSrc: sampleImage,
		imageAlt: "Construction site",
		contentBlocks: [
			{ label: "Label", value: "Content block item with a label and value." },
		],
	},
};

export const WithBadges: Story = {
	args: {
		title: "Section Name",
		subheading: "Subheading",
		description: "Description without a label.",
		imageSrc: sampleImage,
		imageAlt: "Construction site",
		contentBlocks: [
			{ label: "Label", value: "Content block item with a label and value." },
		],
		badges: [
			{ label: "STATUS", tone: "brand" },
			{ label: "STATUS", tone: "success" },
		],
	},
};

export const WithActions: Story = {
	args: {
		title: "Section Name",
		subheading: "Subheading",
		description: "Description without a label.",
		imageSrc: sampleImage,
		imageAlt: "Construction site",
		badges: [
			{ label: "STATUS", tone: "brand" },
			{ label: "STATUS", tone: "success" },
		],
		actions: (
			<>
				<Button size="sm" emphasis="tertiary">
					Tertiary
				</Button>
				<Button size="sm" emphasis="secondary">
					Secondary
				</Button>
			</>
		),
	},
};

export const HorizontalOrientation: Story = {
	args: {
		title: "Section Name",
		subheading: "Subheading",
		description: "Description without a label.",
		imageSrc: sampleImage,
		imageAlt: "Construction site",
		orientation: "horizontal",
		badges: [
			{ label: "STATUS", tone: "brand" },
			{ label: "STATUS", tone: "success" },
		],
	},
};

export const SmallSize: Story = {
	args: {
		title: "Section Name",
		subheading: "Subheading",
		description: "Description without a label.",
		imageSrc: sampleImage,
		imageAlt: "Construction site",
		size: "sm",
	},
};

export const LargeSize: Story = {
	args: {
		title: "Section Name",
		subheading: "Subheading",
		description: "Description without a label.",
		imageSrc: sampleImage,
		imageAlt: "Construction site",
		size: "lg",
		contentBlocks: [
			{ label: "Label", value: "Content block item with a label and value." },
		],
		badges: [
			{ label: "STATUS", tone: "brand" },
			{ label: "STATUS", tone: "success" },
		],
	},
};

export const NoImage: Story = {
	args: {
		title: "Section Name",
		subheading: "Subheading",
		description: "Description without a label.",
		contentBlocks: [
			{ label: "Label", value: "Content block item with a label and value." },
		],
		badges: [
			{ label: "STATUS", tone: "brand" },
		],
	},
};

export const MinimalContent: Story = {
	args: {
		title: "Section Name",
		imageSrc: sampleImage,
		imageAlt: "Construction site",
	},
};

export const CompleteExample: Story = {
	args: {
		title: "Project Overview",
		subheading: "Construction Project",
		description: "A comprehensive construction project including site preparation, foundation work, and structural development.",
		imageSrc: sampleImage,
		imageAlt: "Construction site",
		contentBlocks: [
			{ label: "Location", value: "San Francisco, CA" },
			{ label: "Budget", value: "$2.5M" },
			{ label: "Timeline", value: "12 months" },
		],
		badges: [
			{ label: "ACTIVE", tone: "success" },
			{ label: "ON TRACK", tone: "brand" },
		],
		actions: (
			<>
				<Button size="sm" emphasis="tertiary">
					View Details
				</Button>
				<Button size="sm" emphasis="primary">
					Edit
				</Button>
			</>
		),
	},
};

export const GridLayout: Story = {
	render: () => (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			<Tile
				title="Section Name"
				subheading="Subheading"
				description="Description without a label."
				imageSrc={sampleImage}
				imageAlt="Construction site"
				badges={[{ label: "STATUS", tone: "brand" }]}
			/>
			<Tile
				title="Section Name"
				subheading="Subheading"
				description="Description without a label."
				imageSrc={sampleImage}
				imageAlt="Construction site"
				badges={[{ label: "STATUS", tone: "success" }]}
			/>
			<Tile
				title="Section Name"
				subheading="Subheading"
				description="Description without a label."
				imageSrc={sampleImage}
				imageAlt="Construction site"
				badges={[{ label: "STATUS", tone: "warn" }]}
			/>
		</div>
	),
};

