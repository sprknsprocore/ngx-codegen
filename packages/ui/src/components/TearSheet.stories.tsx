import type { Meta, StoryObj } from "@storybook/react";
import { TearSheet } from "./TearSheet";
import { Button } from "./Button";
import { useState } from "react";
import { Input } from "./Input";
import { TextArea } from "./TextArea";

const meta: Meta<typeof TearSheet> = {
  title: "Components/TearSheet",
  component: TearSheet,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg", "xl"] },
    open: { control: "boolean" },
    showCloseButton: { control: "boolean" }
  }
};
export default meta;
type Story = StoryObj<typeof TearSheet>;

export const Playground: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open TearSheet</Button>
        <TearSheet {...args} open={open} onClose={() => setOpen(false)}>
          <div className="space-y-4">
            <p className="text-fg-default">
              This is the content of the tear sheet. You can place any content here.
            </p>
          </div>
        </TearSheet>
      </>
    );
  },
  args: {
    title: "Item Name",
    size: "md",
    showCloseButton: true
  }
};

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open TearSheet</Button>
        <TearSheet
          open={open}
          onClose={() => setOpen(false)}
          title="Item Name"
        >
          <div className="space-y-4">
            <p className="text-fg-default">
              Replace Me by Manual Setup (add Form, Table, or Empty State)
            </p>
          </div>
        </TearSheet>
      </>
    );
  }
};

export const WithActions: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open TearSheet with Actions</Button>
        <TearSheet
          open={open}
          onClose={() => setOpen(false)}
          title="Item Name"
          actions={
            <div className="flex gap-2">
              <Button size="sm" emphasis="secondary">
                Verb
              </Button>
              <Button size="sm">
                Verb
              </Button>
            </div>
          }
        >
          <div className="space-y-4">
            <p className="text-fg-default">
              This tear sheet has action buttons in the header.
            </p>
          </div>
        </TearSheet>
      </>
    );
  }
};

export const WithForm: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Form TearSheet</Button>
        <TearSheet
          open={open}
          onClose={() => setOpen(false)}
          title="Admin Child Page Title"
          actions={
            <div className="flex gap-2">
              <Button size="sm" emphasis="secondary" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button size="sm">
                Save
              </Button>
            </div>
          }
        >
          <form className="space-y-6">
            <Input
              label="Input Label"
              placeholder="Enter text..."
              required
            />
            <Input
              label="Input Label"
              placeholder="Enter text..."
            />
            <TextArea
              label="Textarea Label"
              placeholder="Enter description..."
              rows={4}
            />
            <Input
              label="Input Label"
              placeholder="Enter text..."
            />
          </form>
        </TearSheet>
      </>
    );
  }
};

export const WithTabs: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("tab1");
    
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Tabbed TearSheet</Button>
        <TearSheet
          open={open}
          onClose={() => setOpen(false)}
          title="Item Name"
          actions={
            <Button size="sm">Verb</Button>
          }
        >
          <div className="space-y-4">
            {/* Simple tab implementation */}
            <div className="flex gap-1 border-b border-border-default -mx-6 px-6">
              <button
                className={clsx(
                  "px-4 py-2 text-sm font-medium border-b-2 transition-colors",
                  activeTab === "tab1"
                    ? "border-bg-brand text-fg-brand"
                    : "border-transparent text-fg-secondary hover:text-fg-default"
                )}
                onClick={() => setActiveTab("tab1")}
              >
                Tab 1
              </button>
              <button
                className={clsx(
                  "px-4 py-2 text-sm font-medium border-b-2 transition-colors",
                  activeTab === "tab2"
                    ? "border-bg-brand text-fg-brand"
                    : "border-transparent text-fg-secondary hover:text-fg-default"
                )}
                onClick={() => setActiveTab("tab2")}
              >
                Tab 2
              </button>
              <button
                className={clsx(
                  "px-4 py-2 text-sm font-medium border-b-2 transition-colors",
                  activeTab === "tab3"
                    ? "border-bg-brand text-fg-brand"
                    : "border-transparent text-fg-secondary hover:text-fg-default"
                )}
                onClick={() => setActiveTab("tab3")}
              >
                Tab 3
              </button>
            </div>
            
            {activeTab === "tab1" && (
              <div className="py-4">
                <p className="text-fg-default">Content for Tab 1</p>
              </div>
            )}
            {activeTab === "tab2" && (
              <div className="py-4">
                <p className="text-fg-default">Content for Tab 2</p>
              </div>
            )}
            {activeTab === "tab3" && (
              <div className="py-4">
                <p className="text-fg-default">Content for Tab 3</p>
              </div>
            )}
          </div>
        </TearSheet>
      </>
    );
  }
};

export const Sizes: Story = {
  render: () => {
    const [openSize, setOpenSize] = useState<string | null>(null);
    
    return (
      <div className="flex gap-2">
        <Button onClick={() => setOpenSize("sm")}>Small</Button>
        <Button onClick={() => setOpenSize("md")}>Medium</Button>
        <Button onClick={() => setOpenSize("lg")}>Large</Button>
        <Button onClick={() => setOpenSize("xl")}>Extra Large</Button>
        
        <TearSheet
          open={openSize === "sm"}
          onClose={() => setOpenSize(null)}
          title="Small TearSheet"
          size="sm"
        >
          <p className="text-fg-default">Small size tear sheet content</p>
        </TearSheet>
        
        <TearSheet
          open={openSize === "md"}
          onClose={() => setOpenSize(null)}
          title="Medium TearSheet"
          size="md"
        >
          <p className="text-fg-default">Medium size tear sheet content</p>
        </TearSheet>
        
        <TearSheet
          open={openSize === "lg"}
          onClose={() => setOpenSize(null)}
          title="Large TearSheet"
          size="lg"
        >
          <p className="text-fg-default">Large size tear sheet content</p>
        </TearSheet>
        
        <TearSheet
          open={openSize === "xl"}
          onClose={() => setOpenSize(null)}
          title="Extra Large TearSheet"
          size="xl"
        >
          <p className="text-fg-default">Extra large size tear sheet content</p>
        </TearSheet>
      </div>
    );
  }
};

