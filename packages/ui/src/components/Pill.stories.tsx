import type { Meta, StoryObj } from "@storybook/react";
import { Pill } from "./Pill";
import { Pills } from "./Pills";

const meta: Meta<typeof Pill> = {
	title: "Components/Pill",
	component: Pill,
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: "select",
			options: ["sm", "md"],
		},
		variant: {
			control: "select",
			options: ["solid", "outline"],
		},
		tone: {
			control: "select",
			options: ["neutral", "blue", "green", "orange", "red", "yellow", "cyan", "magenta", "purple"],
		},
		disabled: {
			control: "boolean",
		},
		removable: {
			control: "boolean",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Pill>;

export const Default: Story = {
	args: {
		children: "Value",
		tone: "blue",
		variant: "solid",
		size: "md",
	},
};

export const WithIcon: Story = {
	args: {
		children: "Value",
		tone: "blue",
		variant: "solid",
		size: "md",
		icon: (
			<svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
				<circle cx="6" cy="6" r="2" />
			</svg>
		),
	},
};

export const Removable: Story = {
	args: {
		children: "Value",
		tone: "blue",
		variant: "solid",
		size: "md",
		removable: true,
		onRemove: () => console.log("Remove clicked"),
	},
};

export const Disabled: Story = {
	args: {
		children: "Value",
		tone: "neutral",
		variant: "solid",
		size: "md",
		disabled: true,
	},
};

export const AllColors: Story = {
	render: () => (
		<Pills gap="2">
			<Pill tone="neutral">Neutral</Pill>
			<Pill tone="blue">Blue</Pill>
			<Pill tone="green">Green</Pill>
			<Pill tone="orange">Orange</Pill>
			<Pill tone="red">Red</Pill>
			<Pill tone="yellow">Yellow</Pill>
			<Pill tone="cyan">Cyan</Pill>
			<Pill tone="magenta">Magenta</Pill>
			<Pill tone="purple">Purple</Pill>
		</Pills>
	),
};

export const AllColorsOutline: Story = {
	render: () => (
		<Pills gap="2">
			<Pill tone="neutral" variant="outline">Neutral</Pill>
			<Pill tone="blue" variant="outline">Blue</Pill>
			<Pill tone="green" variant="outline">Green</Pill>
			<Pill tone="orange" variant="outline">Orange</Pill>
			<Pill tone="red" variant="outline">Red</Pill>
			<Pill tone="yellow" variant="outline">Yellow</Pill>
			<Pill tone="cyan" variant="outline">Cyan</Pill>
			<Pill tone="magenta" variant="outline">Magenta</Pill>
			<Pill tone="purple" variant="outline">Purple</Pill>
		</Pills>
	),
};

export const RemovablePills: Story = {
	render: () => (
		<Pills gap="2">
			<Pill tone="blue" removable onRemove={() => console.log("Remove blue")}>
				Blue
			</Pill>
			<Pill tone="green" removable onRemove={() => console.log("Remove green")}>
				Green
			</Pill>
			<Pill tone="orange" removable onRemove={() => console.log("Remove orange")}>
				Orange
			</Pill>
			<Pill tone="red" removable onRemove={() => console.log("Remove red")}>
				Red
			</Pill>
		</Pills>
	),
};

export const MixedVariants: Story = {
	render: () => (
		<Pills gap="2">
			<Pill tone="blue" variant="solid">
				Solid
			</Pill>
			<Pill tone="blue" variant="outline">
				Outline
			</Pill>
			<Pill tone="green" variant="solid" removable>
				Removable
			</Pill>
			<Pill tone="neutral" variant="outline" disabled>
				Disabled
			</Pill>
		</Pills>
	),
};

export const WithIcons: Story = {
	render: () => (
		<Pills gap="2">
			<Pill
				tone="blue"
				icon={
					<svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
						<circle cx="6" cy="6" r="2" />
					</svg>
				}
			>
				Pilot
			</Pill>
			<Pill
				tone="magenta"
				icon={
					<svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
						<circle cx="6" cy="6" r="2" />
					</svg>
				}
			>
				Beta
			</Pill>
		</Pills>
	),
};

export const Sizes: Story = {
	render: () => (
		<Pills gap="2">
			<Pill tone="blue" size="sm">
				Small
			</Pill>
			<Pill tone="blue" size="md">
				Medium
			</Pill>
		</Pills>
	),
};

export const OverflowExample: Story = {
	render: () => (
		<Pills gap="2" maxVisible={5}>
			<Pill tone="blue">Value 1</Pill>
			<Pill tone="green">Value 2</Pill>
			<Pill tone="orange">Value 3</Pill>
			<Pill tone="red">Value 4</Pill>
			<Pill tone="yellow">Value 5</Pill>
			<Pill tone="cyan">Value 6</Pill>
			<Pill tone="magenta">Value 7</Pill>
			<Pill tone="purple">Value 8</Pill>
		</Pills>
	),
};

