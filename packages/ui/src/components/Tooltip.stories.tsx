import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, TooltipHelp } from "./Tooltip";
import { Button } from "./Button";
import * as React from "react";

const meta = {
	title: "Components/Tooltip",
	component: Tooltip,
	tags: ["autodocs"],
	argTypes: {
		placement: {
			control: "select",
			options: ["top", "bottom", "left", "right"],
		},
		delay: {
			control: "number",
		},
		showArrow: {
			control: "boolean",
		},
	},
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		content: "Concise sentence written in sentence case.",
		children: <Button>Hover me</Button>,
		placement: "top",
	},
};

export const Placements: Story = {
	render: () => (
		<div className="flex flex-col gap-32 items-center justify-center p-20">
			<Tooltip content="Concise sentence written in sentence case." placement="top">
				<Button>Top</Button>
			</Tooltip>
			<div className="flex gap-32 items-center">
				<Tooltip content="Concise sentence written in sentence case." placement="left">
					<Button>Left</Button>
				</Tooltip>
				<Tooltip content="Concise sentence written in sentence case." placement="right">
					<Button>Right</Button>
				</Tooltip>
			</div>
			<Tooltip content="Concise sentence written in sentence case." placement="bottom">
				<Button>Bottom</Button>
			</Tooltip>
		</div>
	),
};

export const WithoutArrow: Story = {
	args: {
		content: "Concise sentence written in sentence case.",
		children: <Button>Hover me</Button>,
		placement: "top",
		showArrow: false,
	},
};

export const WithDelay: Story = {
	args: {
		content: "This tooltip appears after a longer delay.",
		children: <Button>Hover me (500ms delay)</Button>,
		placement: "top",
		delay: 500,
	},
};

export const LongContent: Story = {
	render: () => (
		<Tooltip
			content="This is a longer tooltip message that demonstrates how the component handles more text content."
			placement="top"
		>
			<Button>Hover for long tooltip</Button>
		</Tooltip>
	),
};

export const HelpIcon: Story = {
	render: () => (
		<div className="flex gap-8 items-center p-8">
			<div className="flex items-center gap-2">
				<label htmlFor="input1" className="text-sm font-medium">
					Field Label
				</label>
				<TooltipHelp
					content="This is helpful information about this field."
					placement="top"
					size="sm"
				/>
			</div>
			<div className="flex items-center gap-2">
				<label htmlFor="input2" className="text-sm font-medium">
					Another Field
				</label>
				<TooltipHelp
					content="More helpful information here."
					placement="right"
					size="md"
				/>
			</div>
		</div>
	),
};

export const HelpIconSizes: Story = {
	render: () => (
		<div className="flex gap-6 items-center p-8">
			<TooltipHelp content="Small help icon" size="sm" />
			<TooltipHelp content="Medium help icon" size="md" />
			<TooltipHelp content="Large help icon" size="lg" />
		</div>
	),
};

export const OnTextElements: Story = {
	render: () => (
		<div className="flex flex-col gap-4 p-8">
			<p className="text-sm">
				This is some text with{" "}
				<Tooltip content="Additional information" placement="top">
					<span className="underline decoration-dotted cursor-help">a tooltip</span>
				</Tooltip>{" "}
				inline.
			</p>
			<p className="text-sm">
				Hover over{" "}
				<Tooltip content="Another helpful note" placement="bottom">
					<span className="font-semibold cursor-help">this text</span>
				</Tooltip>{" "}
				for more info.
			</p>
		</div>
	),
};

