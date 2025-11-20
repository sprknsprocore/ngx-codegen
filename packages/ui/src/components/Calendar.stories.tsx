import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "./Calendar";
import { useState } from "react";

const meta = {
	title: "Components/Calendar",
	component: Calendar,
	parameters: {
		layout: "centered",
		design: {
			type: 'figma',
			url: 'https://www.figma.com/design/KWGRfHm3E9X7WrL1wtb9Th/%F0%9F%96%A5--Web-Library?m=auto',
		},
	},
	tags: ["autodocs", "complete"],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const SingleDate: Story = {
	render: () => {
		const [selected, setSelected] = useState<Date | undefined>();
		return (
			<div>
				<Calendar mode="single" selected={selected} onSelect={setSelected} />
				{selected && (
					<p className="mt-4 text-sm text-fg-secondary">
						Selected: {selected.toLocaleDateString()}
					</p>
				)}
			</div>
		);
	},
};

export const DateRange: Story = {
	render: () => {
		const [selected, setSelected] = useState<{ from: Date; to?: Date } | undefined>();
		return (
			<div>
				<Calendar mode="range" selected={selected} onSelect={setSelected as any} />
				{selected && (
					<p className="mt-4 text-sm text-fg-secondary">
						Range: {selected.from.toLocaleDateString()}
						{selected.to && ` - ${selected.to.toLocaleDateString()}`}
					</p>
				)}
			</div>
		);
	},
};

export const MultipleDates: Story = {
	render: () => {
		const [selected, setSelected] = useState<Date[]>([]);
		return (
			<div>
				<Calendar mode="multiple" selected={selected} onSelect={setSelected as any} />
				{selected.length > 0 && (
					<p className="mt-4 text-sm text-fg-secondary">
						Selected: {selected.map((d) => d.toLocaleDateString()).join(", ")}
					</p>
				)}
			</div>
		);
	},
};

export const TwoMonths: Story = {
	render: () => {
		const [selected, setSelected] = useState<{ from: Date; to?: Date } | undefined>();
		return (
			<Calendar mode="range" selected={selected} onSelect={setSelected as any} numberOfMonths={2} />
		);
	},
};

export const WithDisabledDates: Story = {
	render: () => {
		const [selected, setSelected] = useState<Date | undefined>();
		const disabledDates = (date: Date) => {
			// Disable weekends
			return date.getDay() === 0 || date.getDay() === 6;
		};
		return <Calendar mode="single" selected={selected} onSelect={setSelected} disabled={disabledDates} />;
	},
};

export const WithMinMaxDate: Story = {
	render: () => {
		const [selected, setSelected] = useState<Date | undefined>();
		const today = new Date();
		const minDate = new Date(today.getFullYear(), today.getMonth(), 1);
		const maxDate = new Date(today.getFullYear(), today.getMonth() + 2, 0);
		return (
			<Calendar
				mode="single"
				selected={selected}
				onSelect={setSelected}
				minDate={minDate}
				maxDate={maxDate}
			/>
		);
	},
};

