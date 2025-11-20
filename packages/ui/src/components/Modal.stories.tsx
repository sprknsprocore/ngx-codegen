import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Modal, ModalFooter } from "./Modal";
import { Button } from "./Button";
import { Input } from "./Input";

const meta: Meta<typeof Modal> = {
	title: "Components/Modal",
	component: Modal,
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: "select",
			options: ["sm", "md", "lg", "xl", "full"],
		},
		showCloseButton: {
			control: "boolean",
		},
		closeOnBackdropClick: {
			control: "boolean",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		return (
			<>
				<Button onClick={() => setOpen(true)}>Open Modal</Button>
				<Modal open={open} onClose={() => setOpen(false)} title="Modal Header Text">
					<p className="text-fg-default">This is the modal content area.</p>
				</Modal>
			</>
		);
	},
};

export const WithFooter: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		return (
			<>
				<Button onClick={() => setOpen(true)}>Open Modal</Button>
				<Modal
					open={open}
					onClose={() => setOpen(false)}
					title="Modal Header Text"
					footer={
						<>
							<Button emphasis="secondary" onClick={() => setOpen(false)}>
								Cancel
							</Button>
							<Button emphasis="primary" onClick={() => setOpen(false)}>
								Verb
							</Button>
						</>
					}
				>
					<p className="text-fg-default">This is the modal content area with action buttons in the footer.</p>
				</Modal>
			</>
		);
	},
};

export const WithForm: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		return (
			<>
				<Button onClick={() => setOpen(true)}>Open Modal</Button>
				<Modal
					open={open}
					onClose={() => setOpen(false)}
					title="Modal Header Text"
					footer={
						<>
							<Button emphasis="secondary" onClick={() => setOpen(false)}>
								Cancel
							</Button>
							<Button emphasis="primary" onClick={() => setOpen(false)}>
								Save
							</Button>
						</>
					}
				>
					<div className="space-y-4">
						<Input label="Label" placeholder="Placeholder" />
						<Input label="Label" placeholder="Placeholder" />
						<div className="space-y-2">
							<label className="block text-sm font-medium text-fg-default">Label</label>
							<div className="space-y-2">
								<label className="flex items-center gap-2">
									<input type="checkbox" className="rounded" />
									<span className="text-sm">
										Option 1 Now (16) Complete sentence or two a comment without punctuation
									</span>
								</label>
								<label className="flex items-center gap-2">
									<input type="checkbox" className="rounded" />
									<span className="text-sm">
										Option 2 Now (16) Complete sentence or two a comment without punctuation
									</span>
								</label>
								<label className="flex items-center gap-2">
									<input type="checkbox" className="rounded" />
									<span className="text-sm">
										Option 3 Now (16) Complete sentence or two a comment without punctuation
									</span>
								</label>
							</div>
						</div>
						<div className="space-y-2">
							<label className="block text-sm font-medium text-fg-default">Label</label>
							<div className="space-y-2">
								<label className="flex items-center gap-2">
									<input type="radio" name="radio-group" />
									<span className="text-sm">Option 1 All radio submit should have a simple sentence or two prose</span>
								</label>
								<label className="flex items-center gap-2">
									<input type="radio" name="radio-group" />
									<span className="text-sm">Option 2 All radio submit should have a simple sentence or two prose</span>
								</label>
								<label className="flex items-center gap-2">
									<input type="radio" name="radio-group" />
									<span className="text-sm">Option 3 All radio submit should have a simple sentence or two prose</span>
								</label>
							</div>
						</div>
					</div>
				</Modal>
			</>
		);
	},
};

export const WithWarning: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		return (
			<>
				<Button onClick={() => setOpen(true)}>Open Modal</Button>
				<Modal
					open={open}
					onClose={() => setOpen(false)}
					title="Short 1-3 word question?"
					footer={
						<>
							<Button emphasis="secondary" onClick={() => setOpen(false)}>
								Verb
							</Button>
							<Button emphasis="primary" tone="danger" onClick={() => setOpen(false)}>
								Verb Verb/Action
							</Button>
						</>
					}
				>
					<div className="flex gap-4">
						<div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-90 flex items-center justify-center text-orange-50">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path
									d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
								/>
							</svg>
						</div>
						<div>
							<p className="text-fg-default">Consequences of this action</p>
						</div>
					</div>
				</Modal>
			</>
		);
	},
};

export const Sizes: Story = {
	render: () => {
		const [size, setSize] = useState<"sm" | "md" | "lg" | "xl" | "full" | null>(null);
		return (
			<>
				<div className="flex gap-2">
					<Button onClick={() => setSize("sm")}>Small</Button>
					<Button onClick={() => setSize("md")}>Medium</Button>
					<Button onClick={() => setSize("lg")}>Large</Button>
					<Button onClick={() => setSize("xl")}>Extra Large</Button>
					<Button onClick={() => setSize("full")}>Full Width</Button>
				</div>
				{size && (
					<Modal
						open={!!size}
						onClose={() => setSize(null)}
						title={`${size.toUpperCase()} Modal`}
						size={size}
						footer={
							<>
								<Button emphasis="secondary" onClick={() => setSize(null)}>
									Cancel
								</Button>
								<Button emphasis="primary" onClick={() => setSize(null)}>
									Confirm
								</Button>
							</>
						}
					>
						<p className="text-fg-default">This is a {size} sized modal.</p>
					</Modal>
				)}
			</>
		);
	},
};

export const LongContent: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		return (
			<>
				<Button onClick={() => setOpen(true)}>Open Modal</Button>
				<Modal
					open={open}
					onClose={() => setOpen(false)}
					title="Modal Header Text"
					footer={
						<>
							<Button emphasis="secondary" onClick={() => setOpen(false)}>
								Cancel
							</Button>
							<Button emphasis="primary" onClick={() => setOpen(false)}>
								Confirm
							</Button>
						</>
					}
				>
					<div className="space-y-4">
						{Array.from({ length: 20 }).map((_, i) => (
							<p key={i} className="text-fg-default">
								This is paragraph {i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
						))}
					</div>
				</Modal>
			</>
		);
	},
};

export const NoCloseButton: Story = {
	render: () => {
		const [open, setOpen] = useState(false);
		return (
			<>
				<Button onClick={() => setOpen(true)}>Open Modal</Button>
				<Modal
					open={open}
					onClose={() => setOpen(false)}
					title="Modal Header Text"
					showCloseButton={false}
					closeOnBackdropClick={false}
					footer={
						<>
							<Button emphasis="secondary" onClick={() => setOpen(false)}>
								Cancel
							</Button>
							<Button emphasis="primary" onClick={() => setOpen(false)}>
								Confirm
							</Button>
						</>
					}
				>
					<p className="text-fg-default">This modal can only be closed using the footer buttons.</p>
				</Modal>
			</>
		);
	},
};

