import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./Toast";

const meta = {
	title: "Components/Toast",
	component: Toast,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["success", "error", "info", "warning"],
		},
		dismissible: {
			control: "boolean",
		},
	},
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
	args: {
		variant: "success",
		message: "The [item] was successfully created.",
	},
};

export const Error: Story = {
	args: {
		variant: "error",
		message: "Sorry, the [item] couldn't be created. Try again.",
	},
};

export const Info: Story = {
	args: {
		variant: "info",
		message: "This is an informational message.",
	},
};

export const Warning: Story = {
	args: {
		variant: "warning",
		message: "This is a warning message.",
	},
};

export const LongMessage: Story = {
	args: {
		variant: "success",
		message:
			"This is a longer message that demonstrates how the toast handles multiple lines of text. The toast should expand to accommodate the content while maintaining proper spacing and readability.",
	},
};

export const NotDismissible: Story = {
	args: {
		variant: "info",
		message: "This toast cannot be dismissed.",
		dismissible: false,
	},
};

export const AllVariants: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<Toast variant="success" message="The [item] was successfully created." />
			<Toast variant="error" message="Sorry, the [item] couldn't be created. Try again." />
			<Toast variant="info" message="This is an informational message." />
			<Toast variant="warning" message="This is a warning message." />
		</div>
	),
};

export const WithCallback: Story = {
	args: {
		variant: "success",
		message: "Click the X to dismiss (check console)",
		onClose: () => console.log("Toast dismissed!"),
	},
};

