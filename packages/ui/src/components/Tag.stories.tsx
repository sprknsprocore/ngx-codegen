import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    variant: { control: "select", options: ["soft", "outline"] }
  }
};
export default meta;
type Story = StoryObj<typeof Tag>;

export const Playground: Story = {
  args: {
    children: "Tag",
    size: "md",
    variant: "soft"
  }
};


