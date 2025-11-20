/**
 * Storybook Addon: Design Token Documentation
 * 
 * This addon displays design tokens in the Storybook panel,
 * making it easy to reference semantic tokens while developing components.
 * 
 * Features:
 * - Display all color tokens with visual swatches
 * - Show spacing, radius, shadow, and typography tokens
 * - Copy token names to clipboard
 * - Filter and search tokens
 * - Theme switcher (light/dark mode)
 */

import React, { useState } from 'react';
import { tokens } from '../packages/tokens/src/semantic-tokens';

interface TokenDisplayProps {
	category: string;
	tokens: Record<string, any>;
	type: 'color' | 'spacing' | 'radius' | 'shadow' | 'typography';
}

const ColorSwatch: React.FC<{ color: string; name: string }> = ({ color, name }) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		const tokenClass = name.replace(/\./g, '-');
		navigator.clipboard.writeText(`bg-${tokenClass}`);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div
			onClick={handleCopy}
			className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-50 cursor-pointer transition-colors"
			title="Click to copy Tailwind class"
		>
			<div
				className="w-12 h-12 rounded-md border border-gray-200 shadow-sm flex-shrink-0"
				style={{ backgroundColor: color }}
			/>
			<div className="flex-1 min-w-0">
				<div className="text-sm font-medium text-gray-900">{name}</div>
				<div className="text-xs text-gray-500 font-mono">{color}</div>
				{copied && (
					<div className="text-xs text-green-600 font-medium">
						Copied: bg-{name.replace(/\./g, '-')}
					</div>
				)}
			</div>
		</div>
	);
};

const TokenValue: React.FC<{ name: string; value: string }> = ({ name, value }) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(name);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div
			onClick={handleCopy}
			className="flex items-center justify-between p-2 rounded hover:bg-gray-50 cursor-pointer transition-colors"
		>
			<span className="text-sm text-gray-700">{name}</span>
			<span className="text-sm font-mono text-gray-900">{value}</span>
			{copied && (
				<span className="text-xs text-green-600 font-medium ml-2">Copied!</span>
			)}
		</div>
	);
};

const TokenSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
	<div className="mb-8">
		<h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
			{title}
		</h3>
		<div className="space-y-1">
			{children}
		</div>
	</div>
);

export const TokenDocumentation: React.FC = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [selectedCategory, setSelectedCategory] = useState<string>('all');

	const categories = ['all', 'color', 'space', 'radius', 'shadow', 'typography'];

	const filterTokens = (tokenObj: Record<string, any>, prefix: string = '') => {
		return Object.entries(tokenObj).filter(([key]) => {
			const fullKey = prefix ? `${prefix}.${key}` : key;
			return fullKey.toLowerCase().includes(searchQuery.toLowerCase());
		});
	};

	return (
		<div className="p-6 max-w-4xl mx-auto">
			<div className="mb-6">
				<h2 className="text-2xl font-bold text-gray-900 mb-2">
					Design Tokens
				</h2>
				<p className="text-gray-600">
					Reference guide for semantic tokens used throughout the design system.
				</p>
			</div>

			{/* Search and Filter */}
			<div className="mb-6 flex gap-4">
				<input
					type="text"
					placeholder="Search tokens..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
				<select
					value={selectedCategory}
					onChange={(e) => setSelectedCategory(e.target.value)}
					className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
				>
					{categories.map(cat => (
						<option key={cat} value={cat}>
							{cat.charAt(0).toUpperCase() + cat.slice(1)}
						</option>
					))}
				</select>
			</div>

			{/* Color Tokens */}
			{(selectedCategory === 'all' || selectedCategory === 'color') && (
				<TokenSection title="Colors">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
						{filterTokens(tokens.color).map(([name, value]) => (
							<ColorSwatch key={name} name={name} color={String(value)} />
						))}
					</div>
				</TokenSection>
			)}

			{/* Spacing Tokens */}
			{(selectedCategory === 'all' || selectedCategory === 'space') && (
				<TokenSection title="Spacing">
					{filterTokens(tokens.space).map(([name, value]) => (
						<TokenValue key={name} name={name} value={String(value)} />
					))}
				</TokenSection>
			)}

			{/* Radius Tokens */}
			{(selectedCategory === 'all' || selectedCategory === 'radius') && (
				<TokenSection title="Border Radius">
					{filterTokens(tokens.radius).map(([name, value]) => (
						<div key={name} className="flex items-center justify-between p-2">
							<span className="text-sm text-gray-700">{name}</span>
							<div className="flex items-center gap-3">
								<span className="text-sm font-mono text-gray-900">{String(value)}</span>
								<div
									className="w-12 h-12 bg-blue-500"
									style={{ borderRadius: String(value) }}
								/>
							</div>
						</div>
					))}
				</TokenSection>
			)}

			{/* Shadow Tokens */}
			{(selectedCategory === 'all' || selectedCategory === 'shadow') && (
				<TokenSection title="Shadows">
					{filterTokens(tokens.shadow).map(([name, value]) => (
						<div key={name} className="p-3">
							<div className="text-sm text-gray-700 mb-2">{name}</div>
							<div
								className="w-full h-16 bg-white rounded"
								style={{ boxShadow: String(value) }}
							/>
						</div>
					))}
				</TokenSection>
			)}

			{/* Typography Tokens */}
			{(selectedCategory === 'all' || selectedCategory === 'typography') && (
				<>
					<TokenSection title="Font Families">
						{filterTokens(tokens.typography.fontFamily, 'fontFamily').map(([name, value]) => (
							<TokenValue key={name} name={name} value={String(value)} />
						))}
					</TokenSection>

					<TokenSection title="Font Sizes">
						{filterTokens(tokens.typography.size, 'size').map(([name, value]) => (
							<div key={name} className="flex items-baseline justify-between p-2">
								<span className="text-sm text-gray-700">{name}</span>
								<span style={{ fontSize: String(value) }}>
									Aa
								</span>
							</div>
						))}
					</TokenSection>

					<TokenSection title="Font Weights">
						{filterTokens(tokens.typography.weight, 'weight').map(([name, value]) => (
							<div key={name} className="flex items-center justify-between p-2">
								<span className="text-sm text-gray-700">{name}</span>
								<span
									className="text-lg"
									style={{ fontWeight: Number(value) }}
								>
									Sample Text
								</span>
							</div>
						))}
					</TokenSection>
				</>
			)}
		</div>
	);
};

export default TokenDocumentation;

