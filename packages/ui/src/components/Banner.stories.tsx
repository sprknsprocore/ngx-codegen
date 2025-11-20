import type { Meta, StoryObj } from "@storybook/react";
import { Banner } from "./Banner";
import { Button } from "./Button";

const meta = {
	title: "Components/Banner",
	component: Banner,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
	render: () => (
		<Banner variant="info">
			<Banner.Content>
				<Banner.Title>Short Summary of What the User Needs to Know</Banner.Title>
				<Banner.Body>
					Additional information and, optionally, any next steps the user should expect.
				</Banner.Body>
			</Banner.Content>
			<Banner.Action>
				<Button size="sm" emphasis="secondary">
					Verb
				</Button>
			</Banner.Action>
			<Banner.Dismiss />
		</Banner>
	),
};

export const Attention: Story = {
	render: () => (
		<Banner variant="attention">
			<Banner.Content>
				<Banner.Title>Short Summary of What the User Needs to Do</Banner.Title>
				<Banner.Body>
					Details of the warning. [Solutions and an optional link to the support site].
				</Banner.Body>
			</Banner.Content>
			<Banner.Action>
				<Button size="sm" emphasis="secondary">
					Verb
				</Button>
			</Banner.Action>
			<Banner.Dismiss />
		</Banner>
	),
};

export const Error: Story = {
	render: () => (
		<Banner variant="error">
			<Banner.Content>
				<Banner.Title>Short Summary of the Issue</Banner.Title>
				<Banner.Body>
					[Double-check / Try] [solutions and an optional link to the support site].
				</Banner.Body>
			</Banner.Content>
			<Banner.Action>
				<Button size="sm" emphasis="secondary">
					Verb
				</Button>
			</Banner.Action>
			<Banner.Dismiss />
		</Banner>
	),
};

export const Success: Story = {
	render: () => (
		<Banner variant="success">
			<Banner.Content>
				<Banner.Title>Action Completed Successfully</Banner.Title>
				<Banner.Body>
					Your changes have been saved and are now active.
				</Banner.Body>
			</Banner.Content>
			<Banner.Dismiss />
		</Banner>
	),
};

export const WithLongContent: Story = {
	render: () => (
		<Banner variant="attention">
			<Banner.Content>
				<Banner.Title>Configure Your Financial Health</Banner.Title>
				<Banner.Body>
					Soon, we will permanently remove the permissions configurations from this page. To manage
					permissions going forward, use our new Permissions tool, which you can find in the Company
					Tools menu.
				</Banner.Body>
			</Banner.Content>
			<Banner.Action>
				<Button size="sm" emphasis="secondary">
					Configure
				</Button>
			</Banner.Action>
			<Banner.Dismiss />
		</Banner>
	),
};

export const ErrorWithDetails: Story = {
	render: () => (
		<Banner variant="error">
			<Banner.Content>
				<Banner.Title>We Couldn't Upload Some of Your Files</Banner.Title>
				<Banner.Body>Sorry, some errors prevented us from uploading your files.</Banner.Body>
			</Banner.Content>
			<Banner.Action>
				<Button size="sm" emphasis="secondary">
					Show Details
				</Button>
			</Banner.Action>
			<Banner.Dismiss />
		</Banner>
	),
};

export const WithoutAction: Story = {
	render: () => (
		<Banner variant="info">
			<Banner.Content>
				<Banner.Title>System Maintenance Scheduled</Banner.Title>
				<Banner.Body>
					We will be performing scheduled maintenance on Sunday from 2:00 AM to 4:00 AM PST.
				</Banner.Body>
			</Banner.Content>
			<Banner.Dismiss />
		</Banner>
	),
};

export const WithoutDismiss: Story = {
	render: () => (
		<Banner variant="attention">
			<Banner.Content>
				<Banner.Title>Action Required</Banner.Title>
				<Banner.Body>
					Please update your payment information to continue using the service.
				</Banner.Body>
			</Banner.Content>
			<Banner.Action>
				<Button size="sm" emphasis="secondary">
					Update
				</Button>
			</Banner.Action>
		</Banner>
	),
};

