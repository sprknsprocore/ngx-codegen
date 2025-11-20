import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Menu } from "./Menu";
import { Button } from "./Button";

const meta: Meta<typeof Menu> = {
	title: "Components/Menu",
	component: Menu,
	tags: ["autodocs"],
	argTypes: {
		selectionMode: {
			control: "select",
			options: ["none", "single", "multiple"],
		},
		showSearch: {
			control: "boolean",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Menu>;

const simpleOptions = [
	{ label: "Option", value: "option1" },
	{ label: "Option", value: "option2" },
	{ label: "Option", value: "option3" },
	{ label: "Option", value: "option4" },
	{ label: "Option", value: "option5" },
	{ label: "Option", value: "option6" },
	{ label: "Option", value: "option7" },
	{ label: "Option", value: "option8" },
];

const optionsWithIcons = [
	{
		label: "Option",
		value: "option1",
		icon: (
			<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
				<circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
			</svg>
		),
	},
	{
		label: "Option",
		value: "option2",
		icon: (
			<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
				<circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
			</svg>
		),
	},
	{
		label: "Option",
		value: "option3",
		icon: (
			<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
				<circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
			</svg>
		),
	},
];

const userOptions = [
	{ label: "Full Name", value: "user1", avatar: "TT", subtitle: "Title, Company" },
	{ label: "Full Name", value: "user2", avatar: "TT", subtitle: "Title, Company" },
	{ label: "Full Name", value: "user3", avatar: "TT", subtitle: "Title, Company" },
	{ label: "Full Name", value: "user4", avatar: "TT", subtitle: "Title, Company" },
	{ label: "Full Name", value: "user5", avatar: "TT", subtitle: "Title, Company" },
	{ label: "Full Name", value: "user6", avatar: "TT", subtitle: "Title, Company" },
];

export const Default: Story = {
	args: {
		items: simpleOptions,
	},
};

export const WithSearch: Story = {
	args: {
		items: simpleOptions,
		showSearch: true,
		message: "Message",
	},
};

export const WithIcons: Story = {
	args: {
		items: optionsWithIcons,
		showSearch: true,
		message: "Message",
	},
};

export const WithUsers: Story = {
	args: {
		items: userOptions,
		showSearch: true,
		message: "Message",
	},
};

export const WithFooter: Story = {
	args: {
		items: simpleOptions,
		showSearch: true,
		message: "Message",
		footer: (
			<>
				<Button emphasis="secondary" size="sm">
					Verb
				</Button>
				<Button emphasis="primary" size="sm">
					Verb
				</Button>
			</>
		),
	},
};

export const Grouped: Story = {
	args: {
		showSearch: true,
		groups: [
			{
				title: "Grouped Title 1",
				badge: "Value",
				options: [
					{ label: "Option", value: "g1-option1" },
					{ label: "Option", value: "g1-option2" },
					{ label: "Option", value: "g1-option3" },
				],
			},
			{
				title: "Grouped Title 2",
				badge: "Value",
				options: [
					{ label: "Option", value: "g2-option1" },
					{ label: "Option", value: "g2-option2" },
					{ label: "Option", value: "g2-option3" },
				],
			},
		],
	},
};

export const GroupedWithUsers: Story = {
	args: {
		showSearch: true,
		groups: [
			{
				title: "Grouped Title 1",
				options: [
					{ label: "Full Name", value: "g1-user1", avatar: "TT", subtitle: "Title, Company" },
					{ label: "Full Name", value: "g1-user2", avatar: "TT", subtitle: "Title, Company" },
					{ label: "Full Name", value: "g1-user3", avatar: "TT", subtitle: "Title, Company" },
				],
			},
			{
				title: "Grouped Title 2",
				options: [
					{ label: "Full Name", value: "g2-user1", avatar: "TT", subtitle: "Title, Company" },
					{ label: "Full Name", value: "g2-user2", avatar: "TT", subtitle: "Title, Company" },
					{ label: "Full Name", value: "g2-user3", avatar: "TT", subtitle: "Title, Company" },
					{ label: "Full Name", value: "g2-user4", avatar: "TT", subtitle: "Title, Company" },
					{ label: "Full Name", value: "g2-user5", avatar: "TT", subtitle: "Title, Company" },
				],
			},
		],
		footer: (
			<>
				<Button emphasis="secondary" size="sm">
					Verb
				</Button>
				<Button emphasis="primary" size="sm">
					Verb
				</Button>
			</>
		),
	},
};

export const WithCheckboxes: Story = {
	render: () => {
		const [selected, setSelected] = useState<string[]>([]);
		return (
			<Menu
				items={simpleOptions}
				showSearch={true}
				selectionMode="multiple"
				selectedValues={selected}
				onSelectionChange={setSelected}
				message="Message"
				footer={
					<>
						<Button emphasis="secondary" size="sm" onClick={() => setSelected([])}>
							Clear
						</Button>
						<Button emphasis="primary" size="sm">
							Select all
						</Button>
					</>
				}
			/>
		);
	},
};

export const WithRadios: Story = {
	render: () => {
		const [selected, setSelected] = useState<string[]>([]);
		return (
			<Menu
				items={simpleOptions}
				showSearch={true}
				selectionMode="single"
				selectedValues={selected}
				onSelectionChange={setSelected}
				message="Message"
			/>
		);
	},
};

export const Interactive: Story = {
	render: () => {
		const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
		const [selected, setSelected] = useState<string[]>([]);

		return (
			<div className="relative">
				<Button onClick={(e) => setAnchorEl(e.currentTarget)}>Open Menu</Button>
				{anchorEl && (
					<>
						<div
							className="fixed inset-0 z-10"
							onClick={() => setAnchorEl(null)}
						/>
						<div
							className="absolute z-20 mt-2"
							style={{
								top: anchorEl.getBoundingClientRect().bottom + window.scrollY,
								left: anchorEl.getBoundingClientRect().left,
							}}
						>
							<Menu
								items={simpleOptions}
								showSearch={true}
								selectionMode="multiple"
								selectedValues={selected}
								onSelectionChange={setSelected}
								footer={
									<>
										<Button emphasis="secondary" size="sm" onClick={() => setAnchorEl(null)}>
											Cancel
										</Button>
										<Button emphasis="primary" size="sm" onClick={() => setAnchorEl(null)}>
											Apply
										</Button>
									</>
								}
							/>
						</div>
					</>
				)}
			</div>
		);
	},
};

export const Breadcrumb: Story = {
	args: {
		showSearch: true,
		message: "Tier 1 › Tier 2 › Tier 3 ›",
		items: [
			{
				label: "Option",
				value: "option1",
				icon: (
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
						<path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
					</svg>
				),
			},
			{
				label: "Option",
				value: "option2",
				icon: (
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
						<path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
					</svg>
				),
			},
			{
				label: "Option",
				value: "option3",
				icon: (
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
						<path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
					</svg>
				),
			},
		],
		footer: (
			<Button emphasis="primary" size="sm" className="w-full">
				Verb
			</Button>
		),
	},
};

