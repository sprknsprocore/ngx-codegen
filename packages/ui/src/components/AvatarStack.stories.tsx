import type { Meta, StoryObj } from "@storybook/react";
import { AvatarStack } from "./AvatarStack";

const meta = {
	title: "Components/AvatarStack",
	component: AvatarStack,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof AvatarStack>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleAvatars = [
	{ src: "https://i.pravatar.cc/150?img=1", name: "John Doe" },
	{ src: "https://i.pravatar.cc/150?img=2", name: "Jane Smith" },
	{ src: "https://i.pravatar.cc/150?img=3", name: "Bob Johnson" },
	{ src: "https://i.pravatar.cc/150?img=4", name: "Alice Williams" },
	{ src: "https://i.pravatar.cc/150?img=5", name: "Charlie Brown" },
];

const manyAvatars = [
	...sampleAvatars,
	{ name: "David Lee" },
	{ name: "Emma Davis" },
	{ name: "Frank Miller" },
	{ name: "Grace Wilson" },
	{ name: "Henry Moore" },
];

export const Default: Story = {
	args: {
		avatars: sampleAvatars,
	},
};

export const WithOverflow: Story = {
	args: {
		avatars: manyAvatars,
		max: 4,
	},
};

export const LargeOverflow: Story = {
	args: {
		avatars: manyAvatars,
		max: 3,
	},
};

export const Sizes: Story = {
	render: () => (
		<div className="space-y-6">
			<div>
				<p className="text-sm text-fg-secondary mb-2">Small</p>
				<AvatarStack size="sm" avatars={sampleAvatars} max={4} />
			</div>
			<div>
				<p className="text-sm text-fg-secondary mb-2">Medium</p>
				<AvatarStack size="md" avatars={sampleAvatars} max={4} />
			</div>
			<div>
				<p className="text-sm text-fg-secondary mb-2">Large</p>
				<AvatarStack size="lg" avatars={sampleAvatars} max={4} />
			</div>
			<div>
				<p className="text-sm text-fg-secondary mb-2">Extra Large</p>
				<AvatarStack size="xl" avatars={sampleAvatars} max={4} />
			</div>
		</div>
	),
};

export const SpacingVariants: Story = {
	render: () => (
		<div className="space-y-6">
			<div>
				<p className="text-sm text-fg-secondary mb-2">Overlap (default)</p>
				<AvatarStack avatars={sampleAvatars} spacing="overlap" max={4} />
			</div>
			<div>
				<p className="text-sm text-fg-secondary mb-2">Touching</p>
				<AvatarStack avatars={sampleAvatars} spacing="touching" max={4} />
			</div>
			<div>
				<p className="text-sm text-fg-secondary mb-2">Spaced</p>
				<AvatarStack avatars={sampleAvatars} spacing="spaced" max={4} />
			</div>
		</div>
	),
};

export const WithInitials: Story = {
	args: {
		avatars: [
			{ name: "John Doe" },
			{ name: "Jane Smith" },
			{ name: "Bob Johnson" },
			{ name: "Alice Williams" },
		],
	},
};

export const MixedContent: Story = {
	args: {
		avatars: [
			{ src: "https://i.pravatar.cc/150?img=1", name: "John Doe" },
			{ name: "Jane Smith" },
			{ src: "https://i.pravatar.cc/150?img=3", name: "Bob Johnson" },
			{ name: "Alice Williams" },
			{ src: "https://i.pravatar.cc/150?img=5", name: "Charlie Brown" },
		],
		max: 4,
	},
};

export const Few: Story = {
	args: {
		avatars: [
			{ src: "https://i.pravatar.cc/150?img=1", name: "John Doe" },
			{ src: "https://i.pravatar.cc/150?img=2", name: "Jane Smith" },
		],
	},
};

