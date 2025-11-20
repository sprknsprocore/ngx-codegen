import type { Meta, StoryObj } from "@storybook/react";
import { DateRange, type DateRangeValue } from "./DateRange";
import { useState } from "react";

const meta = {
	title: "Components/DateRange",
	component: DateRange,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof DateRange>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => {
		const [value, setValue] = useState<DateRangeValue | undefined>();
		return (
			<div className="w-full">
				<DateRange value={value} onChange={setValue} />
			</div>
		);
	},
};

export const WithLabel: Story = {
	render: () => {
		const [value, setValue] = useState<DateRangeValue | undefined>();
		return (
			<div className="w-full">
				<DateRange value={value} onChange={setValue} label="Date Range" />
			</div>
		);
	},
};

export const WithValue: Story = {
	render: () => {
		const [value, setValue] = useState<DateRangeValue>({
			from: new Date(2024, 3, 2),
			to: new Date(2024, 3, 21),
		});
		return (
			<div className="w-full">
				<DateRange value={value} onChange={setValue} label="Project Timeline" />
			</div>
		);
	},
};

export const WithPresets: Story = {
	render: () => {
		const [value, setValue] = useState<DateRangeValue | undefined>();
		return (
			<div className="w-full">
				<DateRange value={value} onChange={setValue} label="Report Period" showPresets />
			</div>
		);
	},
};

export const Required: Story = {
	render: () => {
		const [value, setValue] = useState<DateRangeValue | undefined>();
		return (
			<div className="w-full">
				<DateRange value={value} onChange={setValue} label="Booking Dates" required />
			</div>
		);
	},
};

export const WithError: Story = {
	render: () => {
		const [value, setValue] = useState<DateRangeValue | undefined>();
		return (
			<div className="w-full">
				<DateRange
					value={value}
					onChange={setValue}
					label="Contract Period"
					helperText="Both start and end dates are required"
					validationState="error"
				/>
			</div>
		);
	},
};

export const Disabled: Story = {
	render: () => {
		const [value] = useState<DateRangeValue>({
			from: new Date(2024, 3, 2),
			to: new Date(2024, 3, 21),
		});
		return (
			<div className="w-full">
				<DateRange value={value} label="Locked Period" disabled />
			</div>
		);
	},
};

export const WithMinMaxDate: Story = {
	render: () => {
		const [value, setValue] = useState<DateRangeValue | undefined>();
		const today = new Date();
		const minDate = today;
		const maxDate = new Date(today.getFullYear(), today.getMonth() + 3, 0);
		return (
			<div className="w-full">
				<DateRange
					value={value}
					onChange={setValue}
					label="Available Period"
					helperText="Only next 3 months available"
					minDate={minDate}
					maxDate={maxDate}
				/>
			</div>
		);
	},
};

export const InForm: Story = {
	render: () => {
		const [projectRange, setProjectRange] = useState<DateRangeValue | undefined>();
		const [deliveryRange, setDeliveryRange] = useState<DateRangeValue | undefined>();
		return (
			<div className="w-full space-y-4">
				<DateRange
					value={projectRange}
					onChange={setProjectRange}
					label="Project Duration"
					required
					showPresets
				/>
				<DateRange
					value={deliveryRange}
					onChange={setDeliveryRange}
					label="Delivery Window"
					required
				/>
			</div>
		);
	},
};

