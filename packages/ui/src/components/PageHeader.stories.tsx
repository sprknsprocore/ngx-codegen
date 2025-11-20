import type { Meta, StoryObj } from "@storybook/react";
import { PageHeader, PageHeaderTabs } from "./PageHeader";
import { Button } from "./Button";

const meta: Meta<typeof PageHeader> = {
	title: "Components/PageHeader",
	component: PageHeader,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
};

export default meta;
type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {
	args: {
		heading: "Heading",
		breadcrumbs: [
			{ label: "Tool Name", href: "#" },
			{ label: "Child Page Title", href: "#" },
			{ label: "Active Child Page Title" },
		],
	},
};

export const WithTabs: Story = {
	args: {
		heading: "Heading",
		breadcrumbs: [
			{ label: "Tool Name", href: "#" },
			{ label: "Child Page Title", href: "#" },
			{ label: "Active Child Page Title" },
		],
		tabs: (
			<PageHeaderTabs
				tabs={[
					{ label: "Tab 1", active: true },
					{ label: "Tab 2" },
					{ label: "Tab 3" },
					{ label: "Tab 4" },
					{ label: "Tab 5" },
					{ label: "Tab 6" },
				]}
				moreTab={
					<button className="px-3 py-2 text-sm font-medium text-fg-secondary hover:text-fg-default">
						More ▾
					</button>
				}
			/>
		),
	},
};

export const WithActions: Story = {
	args: {
		heading: "Heading",
		breadcrumbs: [
			{ label: "Tool Name", href: "#" },
			{ label: "Child Page Title", href: "#" },
			{ label: "Active Child Page Title" },
		],
		tabs: (
			<PageHeaderTabs
				tabs={[
					{ label: "Tab 1", active: true },
					{ label: "Tab 2" },
					{ label: "Tab 3" },
					{ label: "Tab 4" },
					{ label: "Tab 5" },
					{ label: "Tab 6" },
				]}
				moreTab={
					<button className="px-3 py-2 text-sm font-medium text-fg-secondary hover:text-fg-default">
						More ▾
					</button>
				}
			/>
		),
		actions: (
			<>
				<Button emphasis="secondary">Verb</Button>
				<Button emphasis="primary">Verb</Button>
				<button className="px-2 py-2 text-fg-secondary hover:text-fg-default">⋮</button>
			</>
		),
	},
};

export const WithMultipleActions: Story = {
	args: {
		heading: "Heading",
		breadcrumbs: [
			{ label: "Tool Name", href: "#" },
			{ label: "Child Page Title", href: "#" },
			{ label: "Active Child Page Title" },
		],
		tabs: (
			<PageHeaderTabs
				tabs={[
					{ label: "Tab 1", active: true },
					{ label: "Tab 2" },
					{ label: "Tab 3" },
					{ label: "Tab 4" },
					{ label: "Tab 5" },
					{ label: "Tab 6" },
				]}
				moreTab={
					<button className="px-3 py-2 text-sm font-medium text-fg-secondary hover:text-fg-default">
						More ▾
					</button>
				}
			/>
		),
		actions: (
			<>
				<Button emphasis="primary">Verb</Button>
				<Button emphasis="secondary">Verb</Button>
				<Button emphasis="secondary">Verb</Button>
				<button className="px-2 py-2 text-fg-secondary hover:text-fg-default">⋮</button>
			</>
		),
	},
};

export const WithToggle: Story = {
	args: {
		heading: "Heading",
		breadcrumbs: [
			{ label: "Tool Name", href: "#" },
			{ label: "Child Page Title", href: "#" },
			{ label: "Active Child Page Title" },
		],
		tabs: (
			<PageHeaderTabs
				tabs={[
					{ label: "Tab 1", active: true },
					{ label: "Tab 2" },
					{ label: "Tab 3" },
					{ label: "Tab 4" },
					{ label: "Tab 5" },
					{ label: "Tab 6" },
				]}
				moreTab={
					<button className="px-3 py-2 text-sm font-medium text-fg-secondary hover:text-fg-default">
						More ▾
					</button>
				}
			/>
		),
		actions: (
			<>
				<Button emphasis="primary">Verb</Button>
				<Button emphasis="secondary">Verb</Button>
				<Button emphasis="secondary">Verb</Button>
				<button className="flex items-center gap-2 px-3 py-2 text-sm text-fg-default hover:bg-bg-surface rounded">
					<span>Toggle</span>
				</button>
			</>
		),
	},
};

export const NoBreadcrumbs: Story = {
	args: {
		heading: "Heading",
		tabs: (
			<PageHeaderTabs
				tabs={[
					{ label: "Tab 1", active: true },
					{ label: "Tab 2" },
					{ label: "Tab 3" },
				]}
			/>
		),
		actions: <Button emphasis="primary">Verb</Button>,
	},
};

export const NoTabs: Story = {
	args: {
		heading: "Heading",
		breadcrumbs: [
			{ label: "Tool Name", href: "#" },
			{ label: "Child Page Title", href: "#" },
			{ label: "Active Child Page Title" },
		],
		actions: <Button emphasis="primary">Verb</Button>,
	},
};

