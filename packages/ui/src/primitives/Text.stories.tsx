import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Primitives/Text",
  component: Text,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/CIHfqQZS9xPyV4jYojfKgI/%F0%9F%9B%A0Foundation-Library?m=auto',
    },
  },
  tags: ['autodocs', 'complete'],
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl", "2xl"] },
    weight: { control: "select", options: ["regular", "medium", "semibold", "bold"] },
    tone: { control: "select", options: ["default", "muted", "onbrand", "brand"] }
  }
};
export default meta;
type Story = StoryObj<typeof Text>;

export const Playground: Story = {
  args: {
    children: "Token-first Text primitive",
    size: "md",
    weight: "regular",
    tone: "default"
  }
};


