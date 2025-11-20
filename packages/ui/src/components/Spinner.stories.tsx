import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg", "xl"] },
    variant: { control: "select", options: ["brand", "default", "light"] }
  }
};
export default meta;
type Story = StoryObj<typeof Spinner>;

export const Playground: Story = {
  args: {
    size: "lg",
    message: "Message",
    variant: "brand"
  }
};

export const WithMessage: Story = {
  args: {
    size: "lg",
    message: "Message"
  }
};

export const WithoutMessage: Story = {
  args: {
    size: "lg"
  }
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-8">
        <Spinner size="sm" message="Small" />
        <Spinner size="md" message="Medium" />
        <Spinner size="lg" message="Large" />
        <Spinner size="xl" message="Extra Large" />
      </div>
    </div>
  )
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <Spinner variant="brand" size="lg" message="Brand (Blue)" />
      <Spinner variant="default" size="lg" message="Default (Gray)" />
      <div className="bg-gray-15 p-6 rounded-md">
        <Spinner variant="light" size="lg" message="Light (for dark backgrounds)" />
      </div>
    </div>
  )
};

export const InlineSpinners: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner size="sm" />
      <span className="text-sm text-fg-default">Loading content...</span>
    </div>
  )
};

