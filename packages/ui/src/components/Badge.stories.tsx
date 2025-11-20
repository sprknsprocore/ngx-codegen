import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    variant: { control: "select", options: ["solid", "soft", "outline"] },
    tone: { control: "select", options: ["neutral", "brand", "success", "warn", "danger"] }
  }
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Playground: Story = {
  args: {
    children: "Badge",
    size: "md",
    variant: "soft",
    tone: "neutral"
  }
};


