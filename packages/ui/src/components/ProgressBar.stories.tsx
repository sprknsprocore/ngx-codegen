import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "./ProgressBar";
import { useState, useEffect } from "react";

const meta: Meta<typeof ProgressBar> = {
	title: "Components/ProgressBar",
	component: ProgressBar,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
	args: {
		value: 33,
	},
};

export const WithLabel: Story = {
	args: {
		value: 65,
		showLabel: true,
	},
};

export const CustomLabel: Story = {
	args: {
		value: 75,
		showLabel: true,
		label: "Loading... 75%",
	},
};

export const Indeterminate: Story = {
	args: {
		indeterminate: true,
		showLabel: true,
		label: "Loading...",
	},
};

export const Striped: Story = {
	args: {
		value: 60,
		striped: true,
	},
};

export const AnimatedStripes: Story = {
	args: {
		value: 60,
		striped: true,
		animated: true,
	},
};

export const Sizes: Story = {
	render: () => {
		return (
			<div className="space-y-6 max-w-md">
				<div>
					<p className="text-sm font-medium text-fg-default mb-2">Small</p>
					<ProgressBar value={33} size="sm" />
				</div>
				<div>
					<p className="text-sm font-medium text-fg-default mb-2">Medium (Default)</p>
					<ProgressBar value={50} size="md" />
				</div>
				<div>
					<p className="text-sm font-medium text-fg-default mb-2">Large</p>
					<ProgressBar value={75} size="lg" />
				</div>
			</div>
		);
	},
};

export const Variants: Story = {
	render: () => {
		return (
			<div className="space-y-6 max-w-md">
				<div>
					<p className="text-sm font-medium text-fg-default mb-2">Default</p>
					<ProgressBar value={40} variant="default" showLabel />
				</div>
				<div>
					<p className="text-sm font-medium text-fg-default mb-2">Success</p>
					<ProgressBar value={100} variant="success" showLabel />
				</div>
				<div>
					<p className="text-sm font-medium text-fg-default mb-2">Warning</p>
					<ProgressBar value={60} variant="warning" showLabel />
				</div>
				<div>
					<p className="text-sm font-medium text-fg-default mb-2">Danger</p>
					<ProgressBar value={25} variant="danger" showLabel />
				</div>
			</div>
		);
	},
};

export const Animated: Story = {
	render: () => {
		const [progress, setProgress] = useState(0);

		useEffect(() => {
			const timer = setInterval(() => {
				setProgress((prev) => {
					if (prev >= 100) return 0;
					return prev + 1;
				});
			}, 50);

			return () => clearInterval(timer);
		}, []);

		return (
			<div className="space-y-4 max-w-md">
				<ProgressBar value={progress} showLabel />
			</div>
		);
	},
};

export const DifferentStates: Story = {
	render: () => {
		return (
			<div className="space-y-6 max-w-md">
				<div>
					<p className="text-sm font-medium text-fg-default mb-2">0% - Not started</p>
					<ProgressBar value={0} showLabel />
				</div>
				<div>
					<p className="text-sm font-medium text-fg-default mb-2">25% - In progress</p>
					<ProgressBar value={25} showLabel />
				</div>
				<div>
					<p className="text-sm font-medium text-fg-default mb-2">50% - Half way</p>
					<ProgressBar value={50} showLabel />
				</div>
				<div>
					<p className="text-sm font-medium text-fg-default mb-2">75% - Almost there</p>
					<ProgressBar value={75} showLabel />
				</div>
				<div>
					<p className="text-sm font-medium text-fg-default mb-2">100% - Complete</p>
					<ProgressBar value={100} showLabel variant="success" />
				</div>
			</div>
		);
	},
};

export const AllVariants: Story = {
	render: () => {
		const [progress, setProgress] = useState(0);

		useEffect(() => {
			const timer = setInterval(() => {
				setProgress((prev) => {
					if (prev >= 100) return 0;
					return prev + 2;
				});
			}, 100);

			return () => clearInterval(timer);
		}, []);

		return (
			<div className="space-y-8 max-w-md">
				<div>
					<h3 className="text-h3 font-semibold mb-4">Default</h3>
					<div className="space-y-4">
						<ProgressBar value={progress} showLabel />
						<ProgressBar value={progress} size="lg" showLabel />
					</div>
				</div>

				<div>
					<h3 className="text-h3 font-semibold mb-4">Loading State</h3>
					<ProgressBar indeterminate showLabel label="Loading..." striped animated />
				</div>

				<div>
					<h3 className="text-h3 font-semibold mb-4">Variants</h3>
					<div className="space-y-3">
						<ProgressBar value={75} variant="default" />
						<ProgressBar value={75} variant="success" />
						<ProgressBar value={75} variant="warning" />
						<ProgressBar value={75} variant="danger" />
					</div>
				</div>

				<div>
					<h3 className="text-h3 font-semibold mb-4">Striped & Animated</h3>
					<div className="space-y-3">
						<ProgressBar value={60} striped />
						<ProgressBar value={60} striped animated />
					</div>
				</div>
			</div>
		);
	},
};

