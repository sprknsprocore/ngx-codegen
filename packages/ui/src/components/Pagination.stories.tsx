import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "./Pagination";
import { useState } from "react";

const meta: Meta<typeof Pagination> = {
	title: "Components/Pagination",
	component: Pagination,
	tags: ["autodocs"],
	argTypes: {
		showRange: {
			control: "boolean",
		},
		showPageSelector: {
			control: "boolean",
		},
		disabled: {
			control: "boolean",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
	render: () => {
		const [page, setPage] = useState(1);
		return (
			<Pagination
				page={page}
				totalPages={20}
				pageSize={10}
				totalItems={200}
				onPageChange={setPage}
			/>
		);
	},
};

export const LargeDataset: Story = {
	render: () => {
		const [page, setPage] = useState(5);
		return (
			<Pagination
				page={page}
				totalPages={100}
				pageSize={50}
				totalItems={5000}
				onPageChange={setPage}
			/>
		);
	},
};

export const FirstPage: Story = {
	render: () => {
		const [page, setPage] = useState(1);
		return (
			<Pagination
				page={page}
				totalPages={10}
				pageSize={25}
				totalItems={250}
				onPageChange={setPage}
			/>
		);
	},
};

export const LastPage: Story = {
	render: () => {
		const [page, setPage] = useState(10);
		return (
			<Pagination
				page={page}
				totalPages={10}
				pageSize={25}
				totalItems={250}
				onPageChange={setPage}
			/>
		);
	},
};

export const WithoutRange: Story = {
	render: () => {
		const [page, setPage] = useState(1);
		return (
			<Pagination
				page={page}
				totalPages={10}
				pageSize={10}
				totalItems={100}
				onPageChange={setPage}
				showRange={false}
			/>
		);
	},
};

export const WithoutPageSelector: Story = {
	render: () => {
		const [page, setPage] = useState(1);
		return (
			<Pagination
				page={page}
				totalPages={10}
				pageSize={10}
				totalItems={100}
				onPageChange={setPage}
				showPageSelector={false}
			/>
		);
	},
};

export const MinimalControls: Story = {
	render: () => {
		const [page, setPage] = useState(1);
		return (
			<Pagination
				page={page}
				totalPages={10}
				pageSize={10}
				totalItems={100}
				onPageChange={setPage}
				showRange={false}
				showPageSelector={false}
			/>
		);
	},
};

export const SinglePage: Story = {
	render: () => {
		return (
			<Pagination
				page={1}
				totalPages={1}
				pageSize={10}
				totalItems={5}
				onPageChange={() => {}}
			/>
		);
	},
};

export const EmptyData: Story = {
	render: () => {
		return (
			<Pagination
				page={1}
				totalPages={0}
				pageSize={10}
				totalItems={0}
				onPageChange={() => {}}
			/>
		);
	},
};

export const Disabled: Story = {
	render: () => {
		const [page, setPage] = useState(5);
		return (
			<Pagination
				page={page}
				totalPages={10}
				pageSize={10}
				totalItems={100}
				onPageChange={setPage}
				disabled
			/>
		);
	},
};

export const Interactive: Story = {
	render: () => {
		const [page, setPage] = useState(1);
		const totalItems = 1000;
		const pageSize = 50;
		const totalPages = Math.ceil(totalItems / pageSize);

		return (
			<div className="space-y-4">
				<div className="p-4 bg-bg-surface rounded-md border border-border-default">
					<h3 className="text-lg font-semibold mb-2">Data Table</h3>
					<p className="text-sm text-fg-secondary mb-4">
						Showing items {(page - 1) * pageSize + 1} to{" "}
						{Math.min(page * pageSize, totalItems)} of {totalItems}
					</p>
					<div className="grid grid-cols-1 gap-2">
						{Array.from({ length: Math.min(pageSize, totalItems - (page - 1) * pageSize) }).map(
							(_, i) => {
								const itemNumber = (page - 1) * pageSize + i + 1;
								return (
									<div
										key={i}
										className="p-2 bg-white border border-border-default rounded"
									>
										Item {itemNumber}
									</div>
								);
							}
						)}
					</div>
				</div>
				<Pagination
					page={page}
					totalPages={totalPages}
					pageSize={pageSize}
					totalItems={totalItems}
					onPageChange={setPage}
				/>
			</div>
		);
	},
};

