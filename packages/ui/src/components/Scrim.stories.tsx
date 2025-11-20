import type { Meta, StoryObj } from "@storybook/react";
import { Scrim } from "./Scrim";
import { useState } from "react";
import { Button } from "./Button";

const meta: Meta<typeof Scrim> = {
	title: "Components/Scrim",
	component: Scrim,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Scrim>;

export const Default: Story = {
	render: (args) => {
		const [open, setOpen] = useState(false);
		return (
			<div className="p-8">
				<Button onClick={() => setOpen(true)}>Open Scrim</Button>
				<Scrim {...args} open={open} onClose={() => setOpen(false)} />
			</div>
		);
	},
	args: {},
};

export const WithContent: Story = {
	render: (args) => {
		const [open, setOpen] = useState(false);
		return (
			<div className="p-8">
				<Button onClick={() => setOpen(true)}>Open Scrim with Content</Button>
				<Scrim {...args} open={open} onClose={() => setOpen(false)}>
					<div className="bg-bg-canvas rounded-lg shadow-4 p-6 max-w-md mx-4">
						<h2 className="text-h2 font-semibold mb-4">Modal Content</h2>
						<p className="text-fg-secondary mb-6">
							This content is centered on the scrim. Click outside or press Escape to close.
						</p>
						<div className="flex gap-2 justify-end">
							<Button emphasis="secondary" onClick={() => setOpen(false)}>
								Cancel
							</Button>
							<Button onClick={() => setOpen(false)}>Confirm</Button>
						</div>
					</div>
				</Scrim>
			</div>
		);
	},
	args: {},
};

export const LightOpacity: Story = {
	render: (args) => {
		const [open, setOpen] = useState(false);
		return (
			<div className="p-8">
				<Button onClick={() => setOpen(true)}>Open Light Scrim</Button>
				<Scrim {...args} open={open} onClose={() => setOpen(false)} opacity="light" />
			</div>
		);
	},
	args: {},
};

export const DarkOpacity: Story = {
	render: (args) => {
		const [open, setOpen] = useState(false);
		return (
			<div className="p-8">
				<Button onClick={() => setOpen(true)}>Open Dark Scrim</Button>
				<Scrim {...args} open={open} onClose={() => setOpen(false)} opacity="dark" />
			</div>
		);
	},
	args: {},
};

export const NoBlur: Story = {
	render: (args) => {
		const [open, setOpen] = useState(false);
		return (
			<div className="p-8">
				<Button onClick={() => setOpen(true)}>Open Scrim without Blur</Button>
				<Scrim {...args} open={open} onClose={() => setOpen(false)} disableBlur />
			</div>
		);
	},
	args: {},
};

export const NoBackdropClick: Story = {
	render: (args) => {
		const [open, setOpen] = useState(false);
		return (
			<div className="p-8">
				<Button onClick={() => setOpen(true)}>Open Scrim (No Backdrop Click)</Button>
				<Scrim {...args} open={open} onClose={() => setOpen(false)} disableBackdropClick>
					<div className="bg-bg-canvas rounded-lg shadow-4 p-6 max-w-md mx-4">
						<h2 className="text-h2 font-semibold mb-4">Click outside won't close</h2>
						<p className="text-fg-secondary mb-6">
							You must use the button below to close this modal.
						</p>
						<Button onClick={() => setOpen(false)}>Close</Button>
					</div>
				</Scrim>
			</div>
		);
	},
	args: {},
};

export const NoEscapeKey: Story = {
	render: (args) => {
		const [open, setOpen] = useState(false);
		return (
			<div className="p-8">
				<Button onClick={() => setOpen(true)}>Open Scrim (No Escape Key)</Button>
				<Scrim {...args} open={open} onClose={() => setOpen(false)} disableEscapeKeyDown>
					<div className="bg-bg-canvas rounded-lg shadow-4 p-6 max-w-md mx-4">
						<h2 className="text-h2 font-semibold mb-4">Escape key disabled</h2>
						<p className="text-fg-secondary mb-6">
							Press Escape won't close this. Use the button or click outside.
						</p>
						<Button onClick={() => setOpen(false)}>Close</Button>
					</div>
				</Scrim>
			</div>
		);
	},
	args: {},
};

export const AllVariants: Story = {
	render: () => {
		const [openLight, setOpenLight] = useState(false);
		const [openMedium, setOpenMedium] = useState(false);
		const [openDark, setOpenDark] = useState(false);

		return (
			<div className="p-8 space-y-4">
				<p className="text-fg-secondary mb-4">
					Scrims are overlay layers that provide focus and context for modal content.
				</p>

				<div className="space-y-2">
					<Button onClick={() => setOpenLight(true)}>Light Scrim</Button>
					<Button onClick={() => setOpenMedium(true)}>Medium Scrim (Default)</Button>
					<Button onClick={() => setOpenDark(true)}>Dark Scrim</Button>
				</div>

				<Scrim open={openLight} onClose={() => setOpenLight(false)} opacity="light">
					<div className="bg-bg-canvas rounded-lg shadow-4 p-6 max-w-md mx-4">
						<h2 className="text-h2 font-semibold mb-2">Light Opacity</h2>
						<p className="text-fg-secondary mb-4">Background is slightly dimmed.</p>
						<Button onClick={() => setOpenLight(false)}>Close</Button>
					</div>
				</Scrim>

				<Scrim open={openMedium} onClose={() => setOpenMedium(false)} opacity="medium">
					<div className="bg-bg-canvas rounded-lg shadow-4 p-6 max-w-md mx-4">
						<h2 className="text-h2 font-semibold mb-2">Medium Opacity</h2>
						<p className="text-fg-secondary mb-4">Standard dimming level.</p>
						<Button onClick={() => setOpenMedium(false)}>Close</Button>
					</div>
				</Scrim>

				<Scrim open={openDark} onClose={() => setOpenDark(false)} opacity="dark">
					<div className="bg-bg-canvas rounded-lg shadow-4 p-6 max-w-md mx-4">
						<h2 className="text-h2 font-semibold mb-2">Dark Opacity</h2>
						<p className="text-fg-secondary mb-4">Strong emphasis on modal content.</p>
						<Button onClick={() => setOpenDark(false)}>Close</Button>
					</div>
				</Scrim>
			</div>
		);
	},
};

