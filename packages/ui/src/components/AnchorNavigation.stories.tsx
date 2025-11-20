import type { Meta, StoryObj } from "@storybook/react";
import { AnchorNavigation } from "./AnchorNavigation";
import { useState } from "react";

const meta = {
	title: "Components/AnchorNavigation",
	component: AnchorNavigation,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof AnchorNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<AnchorNavigation>
			<AnchorNavigation.Item href="#section1" active>
				Section Name 1
			</AnchorNavigation.Item>
			<AnchorNavigation.Item href="#section2">Section Name 2</AnchorNavigation.Item>
			<AnchorNavigation.Item href="#section3">Section Name 3</AnchorNavigation.Item>
			<AnchorNavigation.Item href="#section4">Section Name 4</AnchorNavigation.Item>
		</AnchorNavigation>
	),
};

export const Interactive: Story = {
	render: function InteractiveStory() {
		const [active, setActive] = useState("section1");

		return (
			<div className="flex gap-8">
				<AnchorNavigation className="w-48">
					<AnchorNavigation.Item
						href="#section1"
						active={active === "section1"}
						onClick={(e) => {
							e.preventDefault();
							setActive("section1");
						}}
					>
						Overview
					</AnchorNavigation.Item>
					<AnchorNavigation.Item
						href="#section2"
						active={active === "section2"}
						onClick={(e) => {
							e.preventDefault();
							setActive("section2");
						}}
					>
						Getting Started
					</AnchorNavigation.Item>
					<AnchorNavigation.Item
						href="#section3"
						active={active === "section3"}
						onClick={(e) => {
							e.preventDefault();
							setActive("section3");
						}}
					>
						Configuration
					</AnchorNavigation.Item>
					<AnchorNavigation.Item
						href="#section4"
						active={active === "section4"}
						onClick={(e) => {
							e.preventDefault();
							setActive("section4");
						}}
					>
						API Reference
					</AnchorNavigation.Item>
					<AnchorNavigation.Item
						href="#section5"
						active={active === "section5"}
						onClick={(e) => {
							e.preventDefault();
							setActive("section5");
						}}
					>
						Troubleshooting
					</AnchorNavigation.Item>
				</AnchorNavigation>

				<div className="flex-1 text-sm text-fg-secondary">
					Click on the navigation items to see the active state change.
				</div>
			</div>
		);
	},
};

export const LongLabels: Story = {
	render: () => (
		<AnchorNavigation className="w-64">
			<AnchorNavigation.Item href="#section1" active>
				Introduction to the Platform
			</AnchorNavigation.Item>
			<AnchorNavigation.Item href="#section2">
				Advanced Configuration Options
			</AnchorNavigation.Item>
			<AnchorNavigation.Item href="#section3">
				User Management and Permissions
			</AnchorNavigation.Item>
			<AnchorNavigation.Item href="#section4">
				Integration with Third-Party Services
			</AnchorNavigation.Item>
		</AnchorNavigation>
	),
};

export const ManyItems: Story = {
	render: () => (
		<AnchorNavigation>
			<AnchorNavigation.Item href="#section1" active>
				Section 1
			</AnchorNavigation.Item>
			<AnchorNavigation.Item href="#section2">Section 2</AnchorNavigation.Item>
			<AnchorNavigation.Item href="#section3">Section 3</AnchorNavigation.Item>
			<AnchorNavigation.Item href="#section4">Section 4</AnchorNavigation.Item>
			<AnchorNavigation.Item href="#section5">Section 5</AnchorNavigation.Item>
			<AnchorNavigation.Item href="#section6">Section 6</AnchorNavigation.Item>
			<AnchorNavigation.Item href="#section7">Section 7</AnchorNavigation.Item>
			<AnchorNavigation.Item href="#section8">Section 8</AnchorNavigation.Item>
			<AnchorNavigation.Item href="#section9">Section 9</AnchorNavigation.Item>
			<AnchorNavigation.Item href="#section10">Section 10</AnchorNavigation.Item>
		</AnchorNavigation>
	),
};

export const InSidebar: Story = {
	render: () => (
		<div className="flex gap-8 h-96">
			<aside className="w-56 border-r border-border-default p-4 bg-bg-surface">
				<h2 className="text-sm font-semibold text-fg-default mb-4">On This Page</h2>
				<AnchorNavigation>
					<AnchorNavigation.Item href="#overview" active>
						Overview
					</AnchorNavigation.Item>
					<AnchorNavigation.Item href="#features">Features</AnchorNavigation.Item>
					<AnchorNavigation.Item href="#installation">Installation</AnchorNavigation.Item>
					<AnchorNavigation.Item href="#usage">Usage</AnchorNavigation.Item>
					<AnchorNavigation.Item href="#api">API</AnchorNavigation.Item>
					<AnchorNavigation.Item href="#examples">Examples</AnchorNavigation.Item>
				</AnchorNavigation>
			</aside>
			<main className="flex-1 p-4">
				<div className="prose max-w-none">
					<h1 className="text-2xl font-bold mb-4">Documentation Page</h1>
					<p className="text-fg-secondary">
						This demonstrates how the anchor navigation component can be used in a typical
						documentation layout with a sidebar.
					</p>
				</div>
			</main>
		</div>
	),
};

