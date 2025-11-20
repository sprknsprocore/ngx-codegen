import type { Preview } from "@storybook/react";
import React from "react";
import "../styles/storybook.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
        {
          name: "dark",
          value: "#1a1a1a",
        },
        {
          name: "canvas",
          value: "#f5f5f5",
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "2rem" }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

// Component Status Tags Configuration
// Usage: Add 'complete', 'in-progress', or 'needs-design' tags to component stories
export const tags = {
  complete: {
    badge: { text: '✅ Complete', bg: '#10B981' },
  },
  'in-progress': {
    badge: { text: '🚧 In Progress', bg: '#F59E0B' },
  },
  'needs-design': {
    badge: { text: '🎨 Needs Design', bg: '#DC2626' },
  },
};

export default preview;

