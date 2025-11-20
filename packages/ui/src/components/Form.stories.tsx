import type { Meta, StoryObj } from "@storybook/react";
import { Form, FormSection } from "./Form";
import { FormField } from "./FormField";
import { Input } from "./Input";
import { Select } from "./Select";
import { TextArea } from "./TextArea";
import { Button } from "./Button";

const meta: Meta<typeof Form> = {
	title: "Components/Form",
	component: Form,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Form>;

export const OneColumn: Story = {
	args: {
		layout: "1-column",
	},
	render: (args) => (
		<Form {...args}>
			<FormField label="First Name" required>
				<Input placeholder="Enter first name" />
			</FormField>
			<FormField label="Last Name" required>
				<Input placeholder="Enter last name" />
			</FormField>
			<FormField label="Email" validationState="none">
				<Input type="email" placeholder="Enter email" />
			</FormField>
			<FormField label="Phone">
				<Input type="tel" placeholder="Enter phone number" />
			</FormField>
			<div className="flex gap-3 justify-end">
				<Button emphasis="secondary">Cancel</Button>
				<Button type="submit">Submit</Button>
			</div>
		</Form>
	),
};

export const TwoColumns: Story = {
	args: {
		layout: "2-columns",
	},
	render: (args) => (
		<Form {...args}>
			<FormField label="First Name" required>
				<Input placeholder="Enter first name" />
			</FormField>
			<FormField label="Last Name" required>
				<Input placeholder="Enter last name" />
			</FormField>
			<FormField label="Email">
				<Input type="email" placeholder="Enter email" />
			</FormField>
			<FormField label="Phone">
				<Input type="tel" placeholder="Enter phone number" />
			</FormField>
			<FormField label="Company">
				<Input placeholder="Enter company name" />
			</FormField>
			<FormField label="Job Title">
				<Input placeholder="Enter job title" />
			</FormField>
			<div className="col-span-full flex gap-3 justify-end">
				<Button emphasis="secondary">Cancel</Button>
				<Button type="submit">Submit</Button>
			</div>
		</Form>
	),
};

export const ThreeColumns: Story = {
	args: {
		layout: "3-columns",
	},
	render: (args) => (
		<Form {...args}>
			<FormField label="First Name" required>
				<Input placeholder="Enter first name" />
			</FormField>
			<FormField label="Middle Name">
				<Input placeholder="Enter middle name" />
			</FormField>
			<FormField label="Last Name" required>
				<Input placeholder="Enter last name" />
			</FormField>
			<FormField label="Email">
				<Input type="email" placeholder="Enter email" />
			</FormField>
			<FormField label="Phone">
				<Input type="tel" placeholder="Enter phone number" />
			</FormField>
			<FormField label="Role">
				<Select>
					<option>Select role</option>
					<option>Admin</option>
					<option>User</option>
				</Select>
			</FormField>
			<div className="col-span-full flex gap-3 justify-end">
				<Button emphasis="secondary">Cancel</Button>
				<Button type="submit">Submit</Button>
			</div>
		</Form>
	),
};

export const FourColumns: Story = {
	args: {
		layout: "4-columns",
	},
	render: (args) => (
		<Form {...args}>
			<FormField label="First Name">
				<Input placeholder="First name" />
			</FormField>
			<FormField label="Middle Name">
				<Input placeholder="Middle name" />
			</FormField>
			<FormField label="Last Name">
				<Input placeholder="Last name" />
			</FormField>
			<FormField label="Suffix">
				<Input placeholder="Suffix" />
			</FormField>
			<FormField label="Email">
				<Input type="email" placeholder="Email" />
			</FormField>
			<FormField label="Phone">
				<Input type="tel" placeholder="Phone" />
			</FormField>
			<FormField label="Department">
				<Select>
					<option>Select department</option>
					<option>Engineering</option>
					<option>Design</option>
					<option>Sales</option>
				</Select>
			</FormField>
			<FormField label="Role">
				<Select>
					<option>Select role</option>
					<option>Manager</option>
					<option>Employee</option>
				</Select>
			</FormField>
			<div className="col-span-full flex gap-3 justify-end">
				<Button emphasis="secondary">Cancel</Button>
				<Button type="submit">Submit</Button>
			</div>
		</Form>
	),
};

export const WithSections: Story = {
	args: {
		layout: "2-columns",
	},
	render: (args) => (
		<Form {...args}>
			<FormSection
				title="Personal Information"
				description="Enter your personal details"
				className="col-span-full"
			>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<FormField label="First Name" required>
						<Input placeholder="Enter first name" />
					</FormField>
					<FormField label="Last Name" required>
						<Input placeholder="Enter last name" />
					</FormField>
				</div>
			</FormSection>

			<FormSection
				title="Contact Information"
				description="How can we reach you?"
				className="col-span-full"
			>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<FormField label="Email" required>
						<Input type="email" placeholder="Enter email" />
					</FormField>
					<FormField label="Phone">
						<Input type="tel" placeholder="Enter phone number" />
					</FormField>
				</div>
			</FormSection>

			<FormField label="Additional Notes" className="col-span-full">
				<TextArea placeholder="Enter any additional information" rows={4} />
			</FormField>

			<div className="col-span-full flex gap-3 justify-end">
				<Button emphasis="secondary">Cancel</Button>
				<Button type="submit">Submit</Button>
			</div>
		</Form>
	),
};

export const WithValidation: Story = {
	args: {
		layout: "1-column",
	},
	render: (args) => (
		<Form {...args}>
			<FormField
				label="Username"
				required
				validationState="invalid"
				helperText="Username is already taken"
			>
				<Input defaultValue="johndoe" />
			</FormField>
			<FormField
				label="Email"
				required
				validationState="valid"
				helperText="Email is available"
			>
				<Input type="email" defaultValue="john.doe@example.com" />
			</FormField>
			<FormField
				label="Password"
				required
				helperText="Must be at least 8 characters"
			>
				<Input type="password" />
			</FormField>
			<div className="flex gap-3 justify-end">
				<Button emphasis="secondary">Cancel</Button>
				<Button type="submit">Submit</Button>
			</div>
		</Form>
	),
};

