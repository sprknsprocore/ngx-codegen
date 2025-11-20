import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "./TextArea";

const meta: Meta<typeof TextArea> = {
  title: "Components/TextArea",
  component: TextArea,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    validationState: { control: "select", options: ["none", "invalid", "valid"] },
    disabled: { control: "boolean" },
    required: { control: "boolean" }
  }
};
export default meta;
type Story = StoryObj<typeof TextArea>;

export const Playground: Story = {
  args: {
    label: "Label",
    placeholder: "Enter text...",
    size: "md",
    validationState: "none"
  }
};

export const WithLabel: Story = {
  args: {
    label: "Label",
    placeholder: "Enter [Label]"
  }
};

export const WithHelperText: Story = {
  args: {
    label: "Label",
    placeholder: "Enter [Label]",
    helperText: "This is helper text to provide additional context"
  }
};

export const Required: Story = {
  args: {
    label: "Label",
    placeholder: "Enter [Label]",
    required: true
  }
};

export const WithError: Story = {
  args: {
    label: "Label",
    placeholder: "Enter [Label]",
    validationState: "invalid",
    helperText: "Error Message/Helper Text"
  }
};

export const Disabled: Story = {
  args: {
    label: "Label",
    placeholder: "Enter [Label]",
    disabled: true
  }
};

export const Focused: Story = {
  args: {
    label: "Label",
    placeholder: "Enter [Label]",
    autoFocus: true
  }
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <TextArea size="sm" label="Small" placeholder="Enter [Label]" />
      <TextArea size="md" label="Medium (Default)" placeholder="Enter [Label]" />
      <TextArea size="lg" label="Large" placeholder="Enter [Label]" />
    </div>
  )
};

export const NoLabel: Story = {
  args: {
    placeholder: "Enter [Label]"
  }
};

