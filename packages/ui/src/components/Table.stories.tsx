import type { Meta, StoryObj } from "@storybook/react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "./Table";
import { useState } from "react";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  argTypes: {
    striped: { control: "boolean" },
    hoverable: { control: "boolean" }
  }
};
export default meta;
type Story = StoryObj<typeof Table>;

const sampleData = [
  { id: 1, value1: "Value", value2: "Value", value3: "Value", value4: "0.00", value5: "Value", value6: "Value" },
  { id: 2, value1: "Value", value2: "Value", value3: "Value", value4: "0.00", value5: "Value", value6: "Value" },
  { id: 3, value1: "Value", value2: "Value", value3: "Value", value4: "0.00", value5: "Value", value6: "Value" },
  { id: 4, value1: "Value", value2: "Value", value3: "Value", value4: "0.00", value5: "Value", value6: "Value" },
  { id: 5, value1: "Value", value2: "Value", value3: "Value", value4: "0.00", value5: "Value", value6: "Value" },
];

export const Playground: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHead>Header</TableHead>
          <TableHead>Header</TableHead>
          <TableHead>Header</TableHead>
          <TableHead>Header</TableHead>
          <TableHead>Header</TableHead>
          <TableHead>Header</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleData.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.value1}</TableCell>
            <TableCell>{row.value2}</TableCell>
            <TableCell>{row.value3}</TableCell>
            <TableCell>{row.value4}</TableCell>
            <TableCell>{row.value5}</TableCell>
            <TableCell>{row.value6}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
  args: {
    striped: false,
    hoverable: true
  }
};

export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Header</TableHead>
          <TableHead>Header</TableHead>
          <TableHead>Header</TableHead>
          <TableHead>Header</TableHead>
          <TableHead>Header</TableHead>
          <TableHead>Header</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sampleData.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.value1}</TableCell>
            <TableCell>{row.value2}</TableCell>
            <TableCell>{row.value3}</TableCell>
            <TableCell>{row.value4}</TableCell>
            <TableCell>{row.value5}</TableCell>
            <TableCell>{row.value6}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
};

export const WithCheckboxes: Story = {
  render: () => {
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    
    const toggleRow = (id: number) => {
      setSelectedRows(prev =>
        prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
      );
    };
    
    const toggleAll = () => {
      setSelectedRows(prev =>
        prev.length === sampleData.length ? [] : sampleData.map(row => row.id)
      );
    };
    
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <input
                type="checkbox"
                checked={selectedRows.length === sampleData.length}
                onChange={toggleAll}
                className="cursor-pointer"
              />
            </TableHead>
            <TableHead>Header</TableHead>
            <TableHead>Header</TableHead>
            <TableHead>Header</TableHead>
            <TableHead>Header</TableHead>
            <TableHead>Header</TableHead>
            <TableHead>Header</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleData.map((row) => (
            <TableRow key={row.id} selected={selectedRows.includes(row.id)}>
              <TableCell>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(row.id)}
                  onChange={() => toggleRow(row.id)}
                  className="cursor-pointer"
                />
              </TableCell>
              <TableCell>{row.value1}</TableCell>
              <TableCell>{row.value2}</TableCell>
              <TableCell>{row.value3}</TableCell>
              <TableCell>{row.value4}</TableCell>
              <TableCell>{row.value5}</TableCell>
              <TableCell>{row.value6}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
};

export const WithSortableHeaders: Story = {
  render: () => {
    type SortConfig = { key: string; direction: "asc" | "desc" } | null;
    const [sortConfig, setSortConfig] = useState<SortConfig>(null);

    const handleSort = (key: string) => {
      setSortConfig(prev => {
        if (prev?.key === key) {
          return prev.direction === "asc" ? { key, direction: "desc" } : null;
        }
        return { key, direction: "asc" };
      });
    };

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead
              sortable
              sortDirection={sortConfig?.key === "header1" ? sortConfig.direction : null}
              onClick={() => handleSort("header1")}
            >
              Header
            </TableHead>
            <TableHead
              sortable
              sortDirection={sortConfig?.key === "header2" ? sortConfig.direction : null}
              onClick={() => handleSort("header2")}
            >
              Header
            </TableHead>
            <TableHead
              sortable
              sortDirection={sortConfig?.key === "header3" ? sortConfig.direction : null}
              onClick={() => handleSort("header3")}
            >
              Header
            </TableHead>
            <TableHead>Header</TableHead>
            <TableHead>Header</TableHead>
            <TableHead>Header</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.value1}</TableCell>
              <TableCell>{row.value2}</TableCell>
              <TableCell>{row.value3}</TableCell>
              <TableCell>{row.value4}</TableCell>
              <TableCell>{row.value5}</TableCell>
              <TableCell>{row.value6}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
};

export const Compact: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="py-2">Header</TableHead>
          <TableHead className="py-2">Header</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="py-2">Value</TableCell>
          <TableCell className="py-2">Value</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="py-2">Value</TableCell>
          <TableCell className="py-2">Value</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
};

