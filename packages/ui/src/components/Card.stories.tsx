import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KWGRfHm3E9X7WrL1wtb9Th/%F0%9F%96%A5--Web-Library?m=auto',
    },
  },
  tags: ['autodocs', 'complete'],
  argTypes: {
    variant: { control: "select", options: ["elevated", "outline", "ghost"] },
    radius: { control: "select", options: ["sm", "md", "lg", "xl"] },
    padding: { control: "select", options: ["3", "4", "5", "6"] }
  }
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Playground: Story = {
  args: {
    children: "Card content",
    variant: "outline",
    radius: "lg",
    padding: "4"
  }
};


