import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";
import { useState } from "react";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    disabled: { control: "boolean" },
    checked: { control: "boolean" }
  }
};
export default meta;
type Story = StoryObj<typeof Switch>;

export const Playground: Story = {
  args: {
    label: "Noun (OR) Sentence written as a command without punctuation",
    size: "md"
  }
};

export const Checked: Story = {
  args: {
    label: "Noun (OR) Sentence written as a command without punctuation",
    defaultChecked: true
  }
};

export const Unchecked: Story = {
  args: {
    label: "Noun (OR) Sentence written as a command without punctuation",
    defaultChecked: false
  }
};

export const Disabled: Story = {
  args: {
    label: "Noun (OR) Sentence written as a command without punctuation",
    disabled: true,
    defaultChecked: false
  }
};

export const DisabledChecked: Story = {
  args: {
    label: "Noun (OR) Sentence written as a command without punctuation",
    disabled: true,
    defaultChecked: true
  }
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch size="sm" label="Small Switch" defaultChecked />
      <Switch size="md" label="Medium Switch (Default)" defaultChecked />
      <Switch size="lg" label="Large Switch" defaultChecked />
    </div>
  )
};

export const WithoutLabel: Story = {
  args: {
    defaultChecked: true
  }
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div className="flex flex-col gap-4">
        <Switch
          label="Controlled switch"
          checked={checked}
          onChange={setChecked}
        />
        <p className="text-sm text-fg-secondary">
          Switch is {checked ? "ON" : "OFF"}
        </p>
      </div>
    );
  }
};

