import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

const meta: Meta<typeof Link> = {
	title: "Components/Link",
	component: Link,
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
		},
		tone: {
			control: "select",
			options: ["default", "secondary", "reversed"],
		},
		disabled: {
			control: "boolean",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
	args: {
		children: "Link title",
		href: "#",
	},
};

export const Sizes: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<Link href="#" size="sm">
				Small link
			</Link>
			<Link href="#" size="md">
				Medium link (default)
			</Link>
			<Link href="#" size="lg">
				Large link
			</Link>
		</div>
	),
};

export const Tones: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<Link href="#" tone="default">
				Default (brand) link
			</Link>
			<Link href="#" tone="secondary">
				Secondary link
			</Link>
			<div className="bg-gray-15 p-4 rounded">
				<Link href="#" tone="reversed">
					Reversed link (on dark background)
				</Link>
			</div>
		</div>
	),
};

export const Disabled: Story = {
	args: {
		children: "Disabled link",
		href: "#",
		disabled: true,
	},
};

export const InText: Story = {
	render: () => (
		<p className="text-md text-fg-default">
			This is a paragraph with an{" "}
			<Link href="#" size="md">
				inline link
			</Link>{" "}
			in the middle of it.
		</p>
	),
};

export const LinkList: Story = {
	render: () => (
		<div className="flex flex-col gap-2">
			<Link href="#">Link title</Link>
			<Link href="#">Link title</Link>
			<Link href="#">Link title</Link>
			<Link href="#">Link title</Link>
			<Link href="#">Link title</Link>
			<Link href="#">Link title</Link>
			<Link href="#">Link title</Link>
			<Link href="#">Link title</Link>
			<Link href="#">Link title</Link>
			<Link href="#">Link title</Link>
		</div>
	),
};

