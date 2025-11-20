import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "./Box";

const meta: Meta<typeof Box> = {
  title: "Primitives/Box",
  component: Box
};
export default meta;
type Story = StoryObj<typeof Box>;

export const Basic: Story = {
  args: {
    className: "p-4 bg-bg-surface text-fg-default rounded-md",
    children: "Box with token-based background and text color"
  }
};


