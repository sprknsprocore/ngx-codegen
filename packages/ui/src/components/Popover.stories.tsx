import type { Meta, StoryObj } from "@storybook/react";
import { Popover, PopoverContent, PopoverHeader, PopoverFooter } from "./Popover";
import { Button } from "./Button";
import { useState } from "react";

const meta: Meta<typeof Popover> = {
	title: "Components/Popover",
	component: Popover,
	tags: ["autodocs"],
	argTypes: {
		placement: {
			control: "select",
			options: ["top", "bottom", "left", "right"],
		},
		shadow: {
			control: "select",
			options: ["1", "2", "3", "4"],
		},
		size: {
			control: "select",
			options: ["sm", "md", "lg", "auto"],
		},
		showArrow: {
			control: "boolean",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		return (
			<div className="flex items-center justify-center h-96">
				<Popover
					open={open}
					onClose={() => setOpen(false)}
					trigger={<Button onClick={() => setOpen(!open)}>Toggle Popover</Button>}
					content={
						<PopoverContent>
							<p className="text-sm">This is a simple popover with some content.</p>
						</PopoverContent>
					}
				/>
			</div>
		);
	},
};

export const WithHeader: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		return (
			<div className="flex items-center justify-center h-96">
				<Popover
					open={open}
					onClose={() => setOpen(false)}
					trigger={<Button onClick={() => setOpen(!open)}>Open Popover</Button>}
					content={
						<>
							<PopoverHeader>Popover Title</PopoverHeader>
							<PopoverContent>
								<p className="text-sm text-fg-default mb-2">
									This popover has a header section with a title.
								</p>
								<p className="text-sm text-fg-secondary">
									You can add any content here.
								</p>
							</PopoverContent>
						</>
					}
				/>
			</div>
		);
	},
};

export const WithFooter: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		return (
			<div className="flex items-center justify-center h-96">
				<Popover
					open={open}
					onClose={() => setOpen(false)}
					trigger={<Button onClick={() => setOpen(!open)}>Open Popover</Button>}
					content={
						<>
							<PopoverHeader>Confirmation</PopoverHeader>
							<PopoverContent>
								<p className="text-sm text-fg-default">
									Are you sure you want to proceed with this action?
								</p>
							</PopoverContent>
							<PopoverFooter>
								<div className="flex gap-2 justify-end">
									<Button size="sm" emphasis="secondary" onClick={() => setOpen(false)}>
										Cancel
									</Button>
									<Button size="sm" onClick={() => setOpen(false)}>
										Confirm
									</Button>
								</div>
							</PopoverFooter>
						</>
					}
				/>
			</div>
		);
	},
};

export const PlacementTop: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		return (
			<div className="flex items-center justify-center h-96">
				<Popover
					open={open}
					onClose={() => setOpen(false)}
					placement="top"
					trigger={<Button onClick={() => setOpen(!open)}>Top Placement</Button>}
					content={
						<PopoverContent>
							<p className="text-sm">Popover appears above the trigger.</p>
						</PopoverContent>
					}
				/>
			</div>
		);
	},
};

export const PlacementBottom: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		return (
			<div className="flex items-center justify-center h-96">
				<Popover
					open={open}
					onClose={() => setOpen(false)}
					placement="bottom"
					trigger={<Button onClick={() => setOpen(!open)}>Bottom Placement</Button>}
					content={
						<PopoverContent>
							<p className="text-sm">Popover appears below the trigger.</p>
						</PopoverContent>
					}
				/>
			</div>
		);
	},
};

export const PlacementLeft: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		return (
			<div className="flex items-center justify-center h-96">
				<Popover
					open={open}
					onClose={() => setOpen(false)}
					placement="left"
					trigger={<Button onClick={() => setOpen(!open)}>Left Placement</Button>}
					content={
						<PopoverContent>
							<p className="text-sm">Popover appears to the left of the trigger.</p>
						</PopoverContent>
					}
				/>
			</div>
		);
	},
};

export const PlacementRight: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		return (
			<div className="flex items-center justify-center h-96">
				<Popover
					open={open}
					onClose={() => setOpen(false)}
					placement="right"
					trigger={<Button onClick={() => setOpen(!open)}>Right Placement</Button>}
					content={
						<PopoverContent>
							<p className="text-sm">Popover appears to the right of the trigger.</p>
						</PopoverContent>
					}
				/>
			</div>
		);
	},
};

export const WithoutArrow: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		return (
			<div className="flex items-center justify-center h-96">
				<Popover
					open={open}
					onClose={() => setOpen(false)}
					showArrow={false}
					trigger={<Button onClick={() => setOpen(!open)}>No Arrow</Button>}
					content={
						<PopoverContent>
							<p className="text-sm">This popover has no arrow.</p>
						</PopoverContent>
					}
				/>
			</div>
		);
	},
};

export const Sizes: Story = {
	render: () => (
		<div className="flex gap-4 items-center justify-center h-96">
			{(["sm", "md", "lg"] as const).map((size) => {
				const [open, setOpen] = useState(false);
				return (
					<Popover
						key={size}
						open={open}
						onClose={() => setOpen(false)}
						size={size}
						trigger={
							<Button onClick={() => setOpen(!open)}>
								Size: {size}
							</Button>
						}
						content={
							<PopoverContent>
								<p className="text-sm">This is a {size} popover.</p>
							</PopoverContent>
						}
					/>
				);
			})}
		</div>
	),
};

export const CustomShadow: Story = {
	render: () => (
		<div className="flex gap-4 items-center justify-center h-96">
			{(["1", "2", "3", "4"] as const).map((shadow) => {
				const [open, setOpen] = useState(false);
				return (
					<Popover
						key={shadow}
						open={open}
						onClose={() => setOpen(false)}
						shadow={shadow}
						trigger={
							<Button onClick={() => setOpen(!open)}>
								Shadow: {shadow}
							</Button>
						}
						content={
							<PopoverContent>
								<p className="text-sm">Shadow level {shadow}</p>
							</PopoverContent>
						}
					/>
				);
			})}
		</div>
	),
};

