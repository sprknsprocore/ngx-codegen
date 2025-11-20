import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta = {
	title: "Components/Avatar",
	component: Avatar,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: "select",
			options: ["sm", "md", "lg", "xl"],
		},
	},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		name: "John Doe",
	},
};

export const WithImage: Story = {
	args: {
		src: "https://i.pravatar.cc/150?img=1",
		name: "John Doe",
		alt: "John Doe",
	},
};

export const Initials: Story = {
	args: {
		name: "Sarah Connor",
	},
};

export const CustomInitials: Story = {
	args: {
		initials: "DC",
	},
};

export const Sizes: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<Avatar size="sm" name="John Doe" />
			<Avatar size="md" name="John Doe" />
			<Avatar size="lg" name="John Doe" />
			<Avatar size="xl" name="John Doe" />
		</div>
	),
};

export const WithImages: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<Avatar size="sm" src="https://i.pravatar.cc/150?img=1" name="User 1" />
			<Avatar size="md" src="https://i.pravatar.cc/150?img=2" name="User 2" />
			<Avatar size="lg" src="https://i.pravatar.cc/150?img=3" name="User 3" />
			<Avatar size="xl" src="https://i.pravatar.cc/150?img=4" name="User 4" />
		</div>
	),
};

export const Fallback: Story = {
	args: {
		src: "https://invalid-url.com/image.jpg",
		name: "Jane Smith",
	},
};

export const DefaultIcon: Story = {
	args: {},
};

export const Gallery: Story = {
	render: () => (
		<div className="space-y-6">
			<div>
				<h3 className="text-sm font-semibold mb-3">With Images</h3>
				<div className="flex items-center gap-3">
					<Avatar src="https://i.pravatar.cc/150?img=1" name="User 1" />
					<Avatar src="https://i.pravatar.cc/150?img=2" name="User 2" />
					<Avatar src="https://i.pravatar.cc/150?img=3" name="User 3" />
				</div>
			</div>
			<div>
				<h3 className="text-sm font-semibold mb-3">With Initials</h3>
				<div className="flex items-center gap-3">
					<Avatar name="John Doe" />
					<Avatar name="Sarah Connor" />
					<Avatar name="Mike Johnson" />
				</div>
			</div>
			<div>
				<h3 className="text-sm font-semibold mb-3">Default Icons</h3>
				<div className="flex items-center gap-3">
					<Avatar />
					<Avatar />
					<Avatar />
				</div>
			</div>
		</div>
	),
};

