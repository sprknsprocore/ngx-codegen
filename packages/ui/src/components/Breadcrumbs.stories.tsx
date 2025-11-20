import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumbs } from "./Breadcrumbs";

const meta = {
	title: "Components/Breadcrumbs",
	component: Breadcrumbs,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

// Simple home icon SVG
const HomeIcon = () => (
	<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
		<path d="M8 2L2 7h2v6h3V9h2v4h3V7h2L8 2z" />
	</svg>
);

export const Default: Story = {
	render: () => (
		<Breadcrumbs>
			<Breadcrumbs.Item href="#" icon={<HomeIcon />}>
				Home
			</Breadcrumbs.Item>
			<Breadcrumbs.Item href="#">Child Page Title</Breadcrumbs.Item>
			<Breadcrumbs.Item active>Active Child Page Title</Breadcrumbs.Item>
		</Breadcrumbs>
	),
};

export const WithToolName: Story = {
	render: () => (
		<Breadcrumbs>
			<Breadcrumbs.Item href="#">Tool Name</Breadcrumbs.Item>
			<Breadcrumbs.Item href="#">Child Page Title</Breadcrumbs.Item>
			<Breadcrumbs.Item active>Active Child Page Title</Breadcrumbs.Item>
		</Breadcrumbs>
	),
};

export const LongPath: Story = {
	render: () => (
		<Breadcrumbs>
			<Breadcrumbs.Item href="#" icon={<HomeIcon />}>
				Home
			</Breadcrumbs.Item>
			<Breadcrumbs.Item href="#">Level 1</Breadcrumbs.Item>
			<Breadcrumbs.Item href="#">Level 2</Breadcrumbs.Item>
			<Breadcrumbs.Item href="#">Level 3</Breadcrumbs.Item>
			<Breadcrumbs.Item active>Current Page</Breadcrumbs.Item>
		</Breadcrumbs>
	),
};

export const CustomSeparator: Story = {
	render: () => (
		<Breadcrumbs separator="/">
			<Breadcrumbs.Item href="#" icon={<HomeIcon />}>
				Home
			</Breadcrumbs.Item>
			<Breadcrumbs.Item href="#">Projects</Breadcrumbs.Item>
			<Breadcrumbs.Item active>Project Name</Breadcrumbs.Item>
		</Breadcrumbs>
	),
};

