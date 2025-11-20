import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { TextEditor } from "./TextEditor";

const meta: Meta<typeof TextEditor> = {
	title: "Components/TextEditor",
	component: TextEditor,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TextEditor>;

export const Default: Story = {
	args: {
		placeholder: "Start typing...",
	},
};

export const WithLabel: Story = {
	args: {
		label: "Label",
		placeholder: "Start typing...",
	},
};

export const WithDefaultContent: Story = {
	args: {
		label: "Label",
		defaultValue: "<p><strong>Lorem ipsum dolor sit amet.</strong></p><p>Lorem consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
	},
};

export const WithHelperText: Story = {
	args: {
		label: "Label",
		placeholder: "Start typing...",
		helperText: "Helper text goes here",
	},
};

export const ErrorState: Story = {
	args: {
		label: "Label",
		defaultValue: "<p>Lorem ipsum dolor sit amet.</p><p>Lorem consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
		validationState: "invalid",
		helperText: "Message",
	},
};

export const SuccessState: Story = {
	args: {
		label: "Label",
		defaultValue: "<p>Lorem ipsum dolor sit amet.</p><p>Lorem consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
		validationState: "valid",
		helperText: "Looks good!",
	},
};

export const Disabled: Story = {
	args: {
		label: "Label",
		defaultValue: "<p><strong>Lorem ipsum dolor sit amet.</strong></p><p>Lorem consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
		disabled: true,
	},
};

export const MinimalHeight: Story = {
	args: {
		label: "Label",
		placeholder: "Start typing...",
		minHeight: "100px",
	},
};

export const TallEditor: Story = {
	args: {
		label: "Label",
		placeholder: "Start typing...",
		minHeight: "400px",
	},
};

export const Interactive: Story = {
	render: () => {
		const [content, setContent] = useState("");
		return (
			<div className="space-y-4">
				<TextEditor
					label="Rich Text Editor"
					placeholder="Start typing..."
					value={content}
					onChange={setContent}
					helperText="Use the toolbar to format your text"
				/>
				<div className="p-4 bg-bg-surface rounded-md">
					<div className="text-sm font-medium text-fg-default mb-2">HTML Output:</div>
					<pre className="text-xs text-fg-muted overflow-auto">
						{content || "(empty)"}
					</pre>
				</div>
			</div>
		);
	},
};

export const WithInitialContent: Story = {
	render: () => {
		const [content, setContent] = useState(
			"<h1>Getting Started</h1><p>This is a <strong>rich text editor</strong> with full <em>formatting capabilities</em>.</p><ul><li>Create bullet lists</li><li>Add numbered lists</li><li>Format text with <u>underline</u> and <s>strikethrough</s></li></ul><p>You can also add <a href='https://example.com'>links</a> and more!</p>"
		);
		return (
			<div className="max-w-3xl">
				<TextEditor
					label="Document Editor"
					value={content}
					onChange={setContent}
					minHeight="300px"
				/>
			</div>
		);
	},
};

export const AllStates: Story = {
	render: () => (
		<div className="space-y-6">
			<TextEditor label="Default" placeholder="Start typing..." />
			<TextEditor
				label="With Content"
				defaultValue="<p><strong>Lorem ipsum dolor sit amet.</strong></p>"
			/>
			<TextEditor
				label="Error State"
				defaultValue="<p>Some content</p>"
				validationState="invalid"
				helperText="This field has an error"
			/>
			<TextEditor
				label="Success State"
				defaultValue="<p>Some content</p>"
				validationState="valid"
				helperText="Looks good!"
			/>
			<TextEditor
				label="Disabled"
				defaultValue="<p>Content in disabled editor</p>"
				disabled
			/>
		</div>
	),
};

