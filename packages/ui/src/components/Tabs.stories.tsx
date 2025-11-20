import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  argTypes: {
    orientation: { control: "select", options: ["horizontal", "vertical"] }
  }
};
export default meta;
type Story = StoryObj<typeof Tabs>;

export const Playground: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        <TabsTrigger value="tab4">Tab 4</TabsTrigger>
        <TabsTrigger value="tab5">Tab 5</TabsTrigger>
        <TabsTrigger value="tab6">Tab 6</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p className="text-fg-default">Content for Tab 1</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p className="text-fg-default">Content for Tab 2</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p className="text-fg-default">Content for Tab 3</p>
      </TabsContent>
      <TabsContent value="tab4">
        <p className="text-fg-default">Content for Tab 4</p>
      </TabsContent>
      <TabsContent value="tab5">
        <p className="text-fg-default">Content for Tab 5</p>
      </TabsContent>
      <TabsContent value="tab6">
        <p className="text-fg-default">Content for Tab 6</p>
      </TabsContent>
    </Tabs>
  ),
  args: {
    defaultValue: "tab1",
    orientation: "horizontal"
  }
};

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        <TabsTrigger value="tab4">Tab 4</TabsTrigger>
        <TabsTrigger value="tab5">Tab 5</TabsTrigger>
        <TabsTrigger value="tab6">Tab 6</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p className="text-fg-default">Content for Tab 1</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p className="text-fg-default">Content for Tab 2</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p className="text-fg-default">Content for Tab 3</p>
      </TabsContent>
      <TabsContent value="tab4">
        <p className="text-fg-default">Content for Tab 4</p>
      </TabsContent>
      <TabsContent value="tab5">
        <p className="text-fg-default">Content for Tab 5</p>
      </TabsContent>
      <TabsContent value="tab6">
        <p className="text-fg-default">Content for Tab 6</p>
      </TabsContent>
    </Tabs>
  )
};

export const WithMoreButton: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        <TabsTrigger value="tab4">Tab 4</TabsTrigger>
        <TabsTrigger value="tab5">Tab 5</TabsTrigger>
        <TabsTrigger value="tab6">Tab 6</TabsTrigger>
        <TabsTrigger value="more">More</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p className="text-fg-default">Content for Tab 1</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p className="text-fg-default">Content for Tab 2</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p className="text-fg-default">Content for Tab 3</p>
      </TabsContent>
      <TabsContent value="tab4">
        <p className="text-fg-default">Content for Tab 4</p>
      </TabsContent>
      <TabsContent value="tab5">
        <p className="text-fg-default">Content for Tab 5</p>
      </TabsContent>
      <TabsContent value="tab6">
        <p className="text-fg-default">Content for Tab 6</p>
      </TabsContent>
      <TabsContent value="more">
        <p className="text-fg-default">More options content</p>
      </TabsContent>
    </Tabs>
  )
};

export const Vertical: Story = {
  render: () => (
    <Tabs defaultValue="tab1" orientation="vertical">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <div className="flex-1 pl-6">
        <TabsContent value="tab1">
          <p className="text-fg-default">Content for Tab 1</p>
        </TabsContent>
        <TabsContent value="tab2">
          <p className="text-fg-default">Content for Tab 2</p>
        </TabsContent>
        <TabsContent value="tab3">
          <p className="text-fg-default">Content for Tab 3</p>
        </TabsContent>
      </div>
    </Tabs>
  )
};

