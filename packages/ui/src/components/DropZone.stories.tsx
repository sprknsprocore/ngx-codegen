import type { Meta, StoryObj } from "@storybook/react";
import { DropZone, DropZoneCompact } from "./DropZone";
import { Button } from "./Button";
import { useState } from "react";

const meta: Meta<typeof DropZone> = {
	title: "Components/DropZone",
	component: DropZone,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DropZone>;

const UploadIcon = () => (
	<svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
		<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
	</svg>
);

export const Default: Story = {
	args: {
		icon: <UploadIcon />,
	},
	render: (args) => {
		const [files, setFiles] = useState<File[]>([]);

		return (
			<div>
				<DropZone {...args} onDrop={setFiles} />
				{files.length > 0 && (
					<div className="mt-4">
						<p className="text-body-semibold mb-2">Uploaded files:</p>
						<ul className="text-body text-fg-secondary">
							{files.map((file, i) => (
								<li key={i}>
									{file.name} ({(file.size / 1024).toFixed(1)} KB)
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		);
	},
};

export const WithCustomText: Story = {
	args: {
		icon: <UploadIcon />,
		heading: "Upload your documents",
		description: "Drag and drop or click to select files",
		helperText: "Supported formats: PDF, DOC, DOCX (max 10 MB)",
	},
	render: (args) => {
		const [files, setFiles] = useState<File[]>([]);
		return <DropZone {...args} onDrop={setFiles} />;
	},
};

export const WithButton: Story = {
	args: {
		icon: <UploadIcon />,
		trigger: <Button>Choose Files</Button>,
	},
	render: (args) => {
		const [files, setFiles] = useState<File[]>([]);
		return <DropZone {...args} onDrop={setFiles} />;
	},
};

export const ImageOnly: Story = {
	args: {
		icon: (
			<svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
				<path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
			</svg>
		),
		heading: "Upload images",
		description: "PNG, JPG, GIF up to 5MB",
		accept: "image/*",
		maxSize: 5 * 1024 * 1024,
	},
	render: (args) => {
		const [files, setFiles] = useState<File[]>([]);
		return <DropZone {...args} onDrop={setFiles} />;
	},
};

export const SingleFile: Story = {
	args: {
		icon: <UploadIcon />,
		multiple: false,
		heading: "Upload a file",
		description: "Only one file allowed",
	},
	render: (args) => {
		const [file, setFile] = useState<File | null>(null);

		return (
			<div>
				<DropZone
					{...args}
					onDrop={(files) => setFile(files[0] || null)}
				/>
				{file && (
					<div className="mt-4">
						<p className="text-body-semibold mb-2">Uploaded file:</p>
						<p className="text-body text-fg-secondary">
							{file.name} ({(file.size / 1024).toFixed(1)} KB)
						</p>
					</div>
				)}
			</div>
		);
	},
};

export const WithError: Story = {
	args: {
		icon: <UploadIcon />,
		error: "Upload failed. Please try again.",
	},
};

export const Disabled: Story = {
	args: {
		icon: <UploadIcon />,
		disabled: true,
	},
};

export const Small: Story = {
	args: {
		size: "sm",
		icon: <UploadIcon />,
	},
	render: (args) => {
		const [files, setFiles] = useState<File[]>([]);
		return <DropZone {...args} onDrop={setFiles} />;
	},
};

export const Large: Story = {
	args: {
		size: "lg",
		icon: <UploadIcon />,
		heading: "Upload your files",
		description: "Drag and drop files here",
		helperText: "or click to browse from your computer",
	},
	render: (args) => {
		const [files, setFiles] = useState<File[]>([]);
		return <DropZone {...args} onDrop={setFiles} />;
	},
};

export const CompactVariant: Story = {
	render: () => {
		const [files, setFiles] = useState<File[]>([]);

		return (
			<div>
				<DropZoneCompact onDrop={setFiles} />
				{files.length > 0 && (
					<div className="mt-4">
						<p className="text-body-semibold mb-2">Uploaded files:</p>
						<ul className="text-body text-fg-secondary">
							{files.map((file, i) => (
								<li key={i}>{file.name}</li>
							))}
						</ul>
					</div>
				)}
			</div>
		);
	},
};

export const WithValidation: Story = {
	render: () => {
		const [files, setFiles] = useState<File[]>([]);
		const [error, setError] = useState<string | undefined>();

		const handleDrop = (newFiles: File[]) => {
			setError(undefined);
			setFiles((prev) => [...prev, ...newFiles]);
		};

		return (
			<div>
				<DropZone
					icon={<UploadIcon />}
					onDrop={handleDrop}
					accept=".pdf,.doc,.docx"
					maxSize={10 * 1024 * 1024}
					error={error}
					helperText="PDF, DOC, DOCX only (max 10 MB)"
				/>
				{files.length > 0 && (
					<div className="mt-4">
						<p className="text-body-semibold mb-2">Uploaded files:</p>
						<ul className="text-body text-fg-secondary">
							{files.map((file, i) => (
								<li key={i}>
									{file.name} ({(file.size / 1024).toFixed(1)} KB)
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		);
	},
};

export const InForm: Story = {
	render: () => {
		const [files, setFiles] = useState<File[]>([]);

		return (
			<form className="max-w-2xl">
				<div className="mb-4">
					<label className="block text-body-semibold text-fg-default mb-2">
						Project Name
					</label>
					<input
						type="text"
						className="w-full px-3 py-2 border border-border-default rounded-sm"
						placeholder="Enter project name"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-body-semibold text-fg-default mb-2">
						Attachments
					</label>
					<DropZone
						size="sm"
						icon={<UploadIcon />}
						onDrop={setFiles}
					/>
					{files.length > 0 && (
						<div className="mt-2">
							<p className="text-small text-fg-secondary">
								{files.length} file(s) selected
							</p>
						</div>
					)}
				</div>
				<Button type="submit">Submit</Button>
			</form>
		);
	},
};

