import type { Meta, StoryObj } from "@storybook/react";
import { Panel, PanelContent, PanelSection } from "./Panel";
import { DockPanel } from "./DockPanel";
import { PagePanel } from "./PagePanel";
import { Button } from "./Button";
import { Input } from "./Input";
import { useState } from "react";

const meta: Meta<typeof Panel> = {
	title: "Components/Panel",
	component: Panel,
	tags: ["autodocs"],
	argTypes: {
		position: {
			control: "select",
			options: ["left", "right", "top", "bottom"],
		},
		size: {
			control: "select",
			options: ["sm", "md", "lg", "xl", "full"],
		},
		shadow: {
			control: "select",
			options: ["none", "1", "2", "3", "4"],
		},
		open: {
			control: "boolean",
		},
		showBackdrop: {
			control: "boolean",
		},
		closeOnBackdropClick: {
			control: "boolean",
		},
		showCloseButton: {
			control: "boolean",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Panel>;

export const Default: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		return (
			<div>
				<Button onClick={() => setOpen(true)}>Open Panel</Button>
				<Panel open={open} onClose={() => setOpen(false)} title="Panel Title">
					<PanelContent>
						<p className="text-sm text-fg-default">
							This is a basic panel with some content.
						</p>
					</PanelContent>
				</Panel>
			</div>
		);
	},
};

export const WithBackdrop: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		return (
			<div>
				<Button onClick={() => setOpen(true)}>Open Panel with Backdrop</Button>
				<Panel
					open={open}
					onClose={() => setOpen(false)}
					title="Panel with Backdrop"
					showBackdrop
				>
					<PanelContent>
						<p className="text-sm text-fg-default">
							This panel has a backdrop overlay. Click outside to close.
						</p>
					</PanelContent>
				</Panel>
			</div>
		);
	},
};

export const WithFooter: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		return (
			<div>
				<Button onClick={() => setOpen(true)}>Open Panel with Footer</Button>
				<Panel
					open={open}
					onClose={() => setOpen(false)}
					title="Panel with Actions"
					showBackdrop
					footer={
						<div className="flex gap-2 justify-end">
							<Button emphasis="secondary" onClick={() => setOpen(false)}>
								Cancel
							</Button>
							<Button onClick={() => setOpen(false)}>Save</Button>
						</div>
					}
				>
					<PanelContent>
						<PanelSection title="Section 1">
							<Input label="Field 1" placeholder="Enter value" />
							<Input label="Field 2" placeholder="Enter value" />
						</PanelSection>
						<PanelSection title="Section 2">
							<Input label="Field 3" placeholder="Enter value" />
							<Input label="Field 4" placeholder="Enter value" />
						</PanelSection>
					</PanelContent>
				</Panel>
			</div>
		);
	},
};

export const LeftPosition: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		return (
			<div>
				<Button onClick={() => setOpen(true)}>Open Left Panel</Button>
				<Panel open={open} onClose={() => setOpen(false)} title="Left Panel" position="left">
					<PanelContent>
						<p className="text-sm text-fg-default">Panel slides in from the left.</p>
					</PanelContent>
				</Panel>
			</div>
		);
	},
};

export const RightPosition: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		return (
			<div>
				<Button onClick={() => setOpen(true)}>Open Right Panel</Button>
				<Panel open={open} onClose={() => setOpen(false)} title="Right Panel" position="right">
					<PanelContent>
						<p className="text-sm text-fg-default">Panel slides in from the right.</p>
					</PanelContent>
				</Panel>
			</div>
		);
	},
};

export const Sizes: Story = {
	render: () => {
		const [openSm, setOpenSm] = useState(false);
		const [openMd, setOpenMd] = useState(false);
		const [openLg, setOpenLg] = useState(false);
		const [openXl, setOpenXl] = useState(false);

		return (
			<div className="flex gap-2">
				<Button onClick={() => setOpenSm(true)}>Small</Button>
				<Button onClick={() => setOpenMd(true)}>Medium</Button>
				<Button onClick={() => setOpenLg(true)}>Large</Button>
				<Button onClick={() => setOpenXl(true)}>XLarge</Button>

				<Panel open={openSm} onClose={() => setOpenSm(false)} title="Small Panel" size="sm">
					<PanelContent>
						<p className="text-sm">Small panel (256px)</p>
					</PanelContent>
				</Panel>
				<Panel open={openMd} onClose={() => setOpenMd(false)} title="Medium Panel" size="md">
					<PanelContent>
						<p className="text-sm">Medium panel (320px)</p>
					</PanelContent>
				</Panel>
				<Panel open={openLg} onClose={() => setOpenLg(false)} title="Large Panel" size="lg">
					<PanelContent>
						<p className="text-sm">Large panel (384px)</p>
					</PanelContent>
				</Panel>
				<Panel open={openXl} onClose={() => setOpenXl(false)} title="XLarge Panel" size="xl">
					<PanelContent>
						<p className="text-sm">XLarge panel (480px)</p>
					</PanelContent>
				</Panel>
			</div>
		);
	},
};

export const DockPanelStory: Story = {
	name: "Dock Panel",
	render: () => {
		const [open, setOpen] = useState(false);
		const [docked, setDocked] = useState(false);
		return (
			<div>
				<Button onClick={() => setOpen(true)}>Open Dock Panel</Button>
				<DockPanel
					open={open}
					onClose={() => setOpen(false)}
					title="Dock Panel"
					docked={docked}
					onDockChange={setDocked}
				>
					<PanelContent>
						<PanelSection title="Properties">
							<Input label="Name" placeholder="Enter name" />
							<Input label="Value" placeholder="Enter value" />
							<div className="text-sm text-fg-secondary mt-4">
								{docked ? "Panel is docked" : "Panel is floating"}
							</div>
						</PanelSection>
					</PanelContent>
				</DockPanel>
			</div>
		);
	},
};

export const PagePanelStory: Story = {
	name: "Page Panel",
	render: () => {
		const [open, setOpen] = useState(false);
		return (
			<div>
				<Button onClick={() => setOpen(true)}>Open Page Panel</Button>
				<PagePanel
					open={open}
					onClose={() => setOpen(false)}
					title="Page Level Panel"
					footer={
						<div className="flex gap-2 justify-end">
							<Button emphasis="secondary" onClick={() => setOpen(false)}>
								Cancel
							</Button>
							<Button onClick={() => setOpen(false)}>Save</Button>
						</div>
					}
				>
					<PanelContent>
						<PanelSection title="User Information">
							<Input label="First Name" placeholder="John" />
							<Input label="Last Name" placeholder="Doe" />
							<Input label="Email" type="email" placeholder="john@example.com" />
						</PanelSection>
						<PanelSection title="Preferences">
							<Input label="Language" placeholder="English" />
							<Input label="Timezone" placeholder="UTC" />
						</PanelSection>
					</PanelContent>
				</PagePanel>
			</div>
		);
	},
};

export const LongContent: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		return (
			<div>
				<Button onClick={() => setOpen(true)}>Open Panel with Long Content</Button>
				<Panel open={open} onClose={() => setOpen(false)} title="Long Content" showBackdrop>
					<PanelContent>
						{Array.from({ length: 20 }).map((_, i) => (
							<PanelSection key={i} title={`Section ${i + 1}`}>
								<p className="text-sm text-fg-default">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</p>
							</PanelSection>
						))}
					</PanelContent>
				</Panel>
			</div>
		);
	},
};

