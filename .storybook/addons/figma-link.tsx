import React from 'react';
import { addons, types } from '@storybook/manager-api';
import { AddonPanel } from '@storybook/components';
import { useParameter } from '@storybook/manager-api';

const ADDON_ID = 'figma-link';
const PANEL_ID = `${ADDON_ID}/panel`;

interface FigmaConfig {
  type: 'figma';
  url: string;
}

const FigmaPanel: React.FC = () => {
  const figmaConfig = useParameter<FigmaConfig>('design', null);

  if (!figmaConfig || figmaConfig.type !== 'figma' || !figmaConfig.url) {
    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <p style={{ color: '#666' }}>No Figma design linked to this component.</p>
        <p style={{ fontSize: '14px', color: '#999', marginTop: '10px' }}>
          Add a Figma link to your story by including:
        </p>
        <pre style={{ 
          background: '#f5f5f5', 
          padding: '10px', 
          borderRadius: '4px',
          fontSize: '12px',
          marginTop: '10px'
        }}>
{`parameters: {
  design: {
    type: 'figma',
    url: 'https://figma.com/...',
  },
}`}
        </pre>
      </div>
    );
  }

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ 
        padding: '12px 20px', 
        borderBottom: '1px solid #e0e0e0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#f8f8f8'
      }}>
        <span style={{ fontWeight: 600, fontSize: '14px' }}>Figma Design</span>
        <a 
          href={figmaConfig.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '6px 12px',
            background: '#2563eb',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '13px',
            fontWeight: 500
          }}
        >
          Open in Figma →
        </a>
      </div>
      <iframe
        src={`https://www.figma.com/embed?embed_host=storybook&url=${encodeURIComponent(figmaConfig.url)}`}
        style={{ 
          width: '100%', 
          height: '100%', 
          border: 'none',
          flex: 1
        }}
        allowFullScreen
      />
    </div>
  );
};

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Figma',
    match: ({ viewMode }) => viewMode === 'story',
    render: ({ active }) => (
      <AddonPanel active={!!active}>
        <FigmaPanel />
      </AddonPanel>
    ),
  });
});

