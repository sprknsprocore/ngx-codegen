import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KWGRfHm3E9X7WrL1wtb9Th/%F0%9F%96%A5--Web-Library?m=auto',
    },
  },
  tags: ['autodocs', 'complete'],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    emphasis: { control: "select", options: ["primary", "secondary", "tertiary"] },
    tone: { control: "select", options: ["neutral", "brand", "success", "warn", "danger"] },
    shadow: { control: "select", options: ["none", "sm", "md", "lg"] }
  }
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  args: {
    children: "Button",
    size: "md",
    emphasis: "primary",
    tone: "brand",
    shadow: "none"
  }
};


