import type { Meta, StoryObj } from "@storybook/react";
import { DateSelect } from "./DateSelect";
import { useState } from "react";

const meta = {
	title: "Components/DateSelect",
	component: DateSelect,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof DateSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => {
		const [value, setValue] = useState<Date | undefined>();
		return (
			<div className="w-80">
				<DateSelect value={value} onChange={setValue} />
			</div>
		);
	},
};

export const WithLabel: Story = {
	render: () => {
		const [value, setValue] = useState<Date | undefined>();
		return (
			<div className="w-80">
				<DateSelect value={value} onChange={setValue} label="Select Date" />
			</div>
		);
	},
};

export const WithHelperText: Story = {
	render: () => {
		const [value, setValue] = useState<Date | undefined>();
		return (
			<div className="w-80">
				<DateSelect
					value={value}
					onChange={setValue}
					label="Delivery Date"
					helperText="Choose your preferred delivery date"
				/>
			</div>
		);
	},
};

export const Required: Story = {
	render: () => {
		const [value, setValue] = useState<Date | undefined>();
		return (
			<div className="w-80">
				<DateSelect value={value} onChange={setValue} label="Birth Date" required />
			</div>
		);
	},
};

export const WithError: Story = {
	render: () => {
		const [value, setValue] = useState<Date | undefined>();
		return (
			<div className="w-80">
				<DateSelect
					value={value}
					onChange={setValue}
					label="Start Date"
					helperText="This field is required"
					validationState="error"
				/>
			</div>
		);
	},
};

export const Disabled: Story = {
	render: () => {
		const [value] = useState<Date>(new Date());
		return (
			<div className="w-80">
				<DateSelect value={value} label="Disabled Field" disabled />
			</div>
		);
	},
};

export const WithValue: Story = {
	render: () => {
		const [value, setValue] = useState<Date>(new Date(2024, 6, 21));
		return (
			<div className="w-80">
				<DateSelect value={value} onChange={setValue} label="Appointment Date" />
			</div>
		);
	},
};

export const WithMinMaxDate: Story = {
	render: () => {
		const [value, setValue] = useState<Date | undefined>();
		const today = new Date();
		const minDate = new Date(today.getFullYear(), today.getMonth(), 1);
		const maxDate = new Date(today.getFullYear(), today.getMonth() + 2, 0);
		return (
			<div className="w-80">
				<DateSelect
					value={value}
					onChange={setValue}
					label="Available Dates"
					helperText="Only current and next 2 months available"
					minDate={minDate}
					maxDate={maxDate}
				/>
			</div>
		);
	},
};

export const InForm: Story = {
	render: () => {
		const [startDate, setStartDate] = useState<Date | undefined>();
		const [endDate, setEndDate] = useState<Date | undefined>();
		return (
			<div className="w-96 space-y-4">
				<DateSelect value={startDate} onChange={setStartDate} label="Start Date" required />
				<DateSelect value={endDate} onChange={setEndDate} label="End Date" required />
			</div>
		);
	},
};

