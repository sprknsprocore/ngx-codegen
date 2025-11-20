import type { Meta, StoryObj } from "@storybook/react";
import { GlobalNav } from "./GlobalNav";
import { NavLogo } from "./NavLogo";
import { CompanyLogo } from "./CompanyLogo";
import { ProjectPicker } from "./ProjectPicker";
import { AppSelector } from "./AppSelector";
import { NavSearch } from "./NavSearch";
import { NavIconButton } from "./NavIconButton";
import { NavAvatar } from "./NavAvatar";
import { NavMenuItem } from "./NavMenuItem";
import React from "react";

const meta: Meta<typeof GlobalNav> = {
	title: "Navigation/GlobalNav",
	component: GlobalNav,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof GlobalNav>;

const HelpIcon = () => (
	<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
		<circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
		<path d="M10 14v.5M10 6.5v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
	</svg>
);

const BellIcon = () => (
	<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
		<path
			d="M10 4a4 4 0 00-4 4v3l-2 2h12l-2-2V8a4 4 0 00-4-4zm0 12a2 2 0 01-2-2h4a2 2 0 01-2 2z"
			stroke="currentColor"
			strokeWidth="1.5"
			fill="none"
		/>
	</svg>
);

const ChatIcon = () => (
	<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
		<path
			d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H8l-5 3v-3a2 2 0 01-2-2V5z"
			stroke="currentColor"
			strokeWidth="1.5"
			fill="none"
		/>
	</svg>
);

const HomeIcon = () => (
	<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
		<path d="M8 2L2 7h2v6h3V9h2v4h3V7h2L8 2z" />
	</svg>
);

export const Complete: Story = {
	args: {
		logo: <NavLogo onClick={() => console.log("Logo clicked")} />,
		companyLogo: <CompanyLogo companyName="Vertigo Construction" onClick={() => console.log("Company clicked")} />,
		projectPicker: (
			<ProjectPicker
				selectedProject={{
					id: "1",
					name: "Seattle Corridor Railway",
					companyName: "Vertigo Construction",
				}}
				onClick={() => console.log("Project picker clicked")}
			/>
		),
		search: <NavSearch variant="dark" shortcutHint="Ctrl + K" onSearch={(v) => console.log("Search:", v)} />,
		appSelector: <AppSelector selectedApp="Project Management" onClick={() => console.log("App selector clicked")} />,
		rightItems: (
			<>
				<NavIconButton icon={<HelpIcon />} label="Help" variant="dark" />
				<NavIconButton icon={<BellIcon />} label="Notifications" badge={3} variant="dark" />
				<NavIconButton icon={<ChatIcon />} label="Messages" variant="dark" />
				<NavAvatar name="John Doe" onClick={() => console.log("Avatar clicked")} />
			</>
		),
	},
};

export const WithMenuItems: Story = {
	args: {
		logo: <NavLogo />,
		companyLogo: <CompanyLogo companyName="Acme Corp" />,
		projectPicker: <ProjectPicker selectedProject={null} />,
		leftItems: (
			<div className="flex gap-1">
				<NavMenuItem icon={<HomeIcon />} selected>
					Home
				</NavMenuItem>
				<NavMenuItem icon={<HomeIcon />}>Directory</NavMenuItem>
				<NavMenuItem icon={<HomeIcon />} badge={5}>
					RFIs
				</NavMenuItem>
			</div>
		),
		search: <NavSearch variant="dark" />,
		appSelector: <AppSelector selectedApp="Quality & Safety" />,
		rightItems: (
			<>
				<NavIconButton icon={<HelpIcon />} label="Help" variant="dark" />
				<NavAvatar name="Jane Smith" src="https://i.pravatar.cc/150?img=5" />
			</>
		),
	},
};

export const MinimalDesktop: Story = {
	args: {
		logo: <NavLogo />,
		search: <NavSearch variant="dark" />,
		rightItems: (
			<>
				<NavIconButton icon={<HelpIcon />} label="Help" variant="dark" />
				<NavAvatar name="User" />
			</>
		),
	},
};

export const Mobile: Story = {
	args: {
		isMobile: true,
		showMobileMenu: true,
		logo: <NavLogo />,
		search: <NavSearch variant="dark" placeholder="Search..." />,
		rightItems: <NavAvatar name="JD" size="sm" />,
		onMobileMenuClick: () => console.log("Mobile menu clicked"),
	},
};

export const NoProject: Story = {
	args: {
		logo: <NavLogo />,
		companyLogo: <CompanyLogo companyName="Vertigo Construction" />,
		projectPicker: <ProjectPicker selectedProject={null} />,
		search: <NavSearch variant="dark" />,
		appSelector: <AppSelector selectedApp={null} />,
		rightItems: (
			<>
				<NavIconButton icon={<HelpIcon />} label="Help" variant="dark" />
				<NavAvatar name="New User" />
			</>
		),
	},
};

