/**
 * Token Reference Component
 * 
 * This component documents all available design tokens with visual examples.
 * Display in Storybook for easy reference by designers and developers.
 * 
 * @see Figma: https://www.figma.com/design/CIHfqQZS9xPyV4jYojfKgI/%F0%9F%9B%A0Foundation-Library?m=auto
 */
import React from 'react';
import { tokens } from '@ssot/tokens';

export const TokenReference: React.FC = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto bg-bg-canvas">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-fg-default mb-4">Design Token Reference</h1>
        <p className="text-lg text-fg-secondary">
          Complete visual documentation of all available design tokens in the system.
        </p>
      </header>
      
      {/* Quick Reference */}
      <section className="mb-12 p-6 bg-bg-surface rounded-lg border border-border-default">
        <h2 className="text-2xl font-semibold text-fg-default mb-4">Quick Reference</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-fg-default mb-3">📚 Figma Design System Files</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://www.figma.com/design/CIHfqQZS9xPyV4jYojfKgI/%F0%9F%9B%A0Foundation-Library?m=auto"
                  className="text-fg-brand hover:text-fg-brand-hover underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🛠 Foundation Library →
                </a>
                <br />
                <span className="text-fg-secondary">Colors, Typography, Spacing</span>
              </li>
              <li>
                <a 
                  href="https://www.figma.com/design/KWGRfHm3E9X7WrL1wtb9Th/%F0%9F%96%A5--Web-Library?m=auto"
                  className="text-fg-brand hover:text-fg-brand-hover underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🖥 Web Library →
                </a>
                <br />
                <span className="text-fg-secondary">Core web components</span>
              </li>
              <li>
                <a 
                  href="https://www.figma.com/design/JrWb1OqtipkInevxd0oO6n/%E2%97%BB%EF%B8%8F-Data-Table-Library?m=auto"
                  className="text-fg-brand hover:text-fg-brand-hover underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ◻️ Data Table Library →
                </a>
                <br />
                <span className="text-fg-secondary">Complex data components</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-fg-default mb-3">📖 Usage Guidelines</h3>
            <ul className="space-y-2 text-sm text-fg-secondary">
              <li>✅ Always use semantic tokens (e.g., <code className="bg-bg-tertiary px-1 py-0.5 rounded text-fg-default">bg-bg-canvas</code>)</li>
              <li>❌ Never use arbitrary values (e.g., <code className="bg-bg-tertiary px-1 py-0.5 rounded text-fg-default line-through">bg-[#ffffff]</code>)</li>
              <li>🎨 Reference this page when implementing designs</li>
              <li>🔗 Link Storybook stories to Figma designs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Color Tokens */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-fg-default mb-6">Color Tokens</h2>
        
        {/* Foreground Colors */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-fg-default mb-4">Foreground (Text) Colors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(tokens.color)
              .filter(([name]) => name.startsWith('fg.'))
              .map(([name, value]) => (
                <div 
                  key={name}
                  className="flex items-center gap-4 p-4 rounded-md border border-border-default bg-bg-canvas hover:bg-bg-surface transition-colors"
                >
                  <div 
                    className="w-16 h-16 rounded-md border-2 border-border-default shadow-sm flex-shrink-0 flex items-center justify-center text-2xl"
                    style={{ backgroundColor: '#FFFFFF', color: String(value) }}
                  >
                    Aa
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-sm font-semibold text-fg-default truncate">{name}</div>
                    <div className="font-mono text-xs text-fg-secondary truncate">{String(value)}</div>
                    <div className="mt-1 text-xs text-fg-muted">
                      <code className="bg-bg-tertiary px-1 py-0.5 rounded">text-{name.replace(/\./g, '-')}</code>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Background Colors */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-fg-default mb-4">Background Colors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(tokens.color)
              .filter(([name]) => name.startsWith('bg.'))
              .map(([name, value]) => (
                <div 
                  key={name}
                  className="flex items-center gap-4 p-4 rounded-md border border-border-default bg-bg-canvas hover:bg-bg-surface transition-colors"
                >
                  <div 
                    className="w-16 h-16 rounded-md border-2 border-border-default shadow-sm flex-shrink-0"
                    style={{ backgroundColor: String(value) }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-sm font-semibold text-fg-default truncate">{name}</div>
                    <div className="font-mono text-xs text-fg-secondary truncate">{String(value)}</div>
                    <div className="mt-1 text-xs text-fg-muted">
                      <code className="bg-bg-tertiary px-1 py-0.5 rounded">bg-{name.replace(/\./g, '-')}</code>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Border Colors */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-fg-default mb-4">Border Colors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(tokens.color)
              .filter(([name]) => name.startsWith('border.'))
              .map(([name, value]) => (
                <div 
                  key={name}
                  className="flex items-center gap-4 p-4 rounded-md border border-border-default bg-bg-canvas hover:bg-bg-surface transition-colors"
                >
                  <div 
                    className="w-16 h-16 rounded-md flex-shrink-0 border-4"
                    style={{ borderColor: String(value) }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-sm font-semibold text-fg-default truncate">{name}</div>
                    <div className="font-mono text-xs text-fg-secondary truncate">{String(value)}</div>
                    <div className="mt-1 text-xs text-fg-muted">
                      <code className="bg-bg-tertiary px-1 py-0.5 rounded">border-{name.replace(/\./g, '-')}</code>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* State Colors */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-fg-default mb-4">State Colors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(tokens.color)
              .filter(([name]) => name.startsWith('state.'))
              .map(([name, value]) => (
                <div 
                  key={name}
                  className="flex items-center gap-4 p-4 rounded-md border border-border-default bg-bg-canvas hover:bg-bg-surface transition-colors"
                >
                  <div 
                    className="w-16 h-16 rounded-md border-2 border-border-default shadow-sm flex-shrink-0"
                    style={{ backgroundColor: String(value) }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-sm font-semibold text-fg-default truncate">{name}</div>
                    <div className="font-mono text-xs text-fg-secondary truncate">{String(value)}</div>
                    <div className="mt-1 text-xs text-fg-muted">
                      <code className="bg-bg-tertiary px-1 py-0.5 rounded">bg-{name.replace(/\./g, '-')}</code>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Spacing Tokens */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-fg-default mb-6">Spacing Scale</h2>
        <p className="text-fg-secondary mb-6">
          4px base unit. Use for padding, margin, gap, and other spacing needs.
        </p>
        <div className="grid grid-cols-1 gap-3">
          {Object.entries(tokens.space).map(([name, value]) => (
            <div 
              key={name}
              className="flex items-center gap-4 p-4 rounded-md border border-border-default bg-bg-canvas hover:bg-bg-surface transition-colors"
            >
              <div className="flex items-center gap-2 flex-1">
                <div className="w-32">
                  <div className="font-mono text-sm font-semibold text-fg-default">space.{name}</div>
                  <div className="font-mono text-xs text-fg-secondary">{String(value)}</div>
                </div>
                <div 
                  className="h-8 bg-bg-brand rounded"
                  style={{ width: String(value) }}
                />
              </div>
              <div className="text-xs text-fg-muted">
                <code className="bg-bg-tertiary px-2 py-1 rounded">p-{name}</code>
                {' '}
                <code className="bg-bg-tertiary px-2 py-1 rounded">m-{name}</code>
                {' '}
                <code className="bg-bg-tertiary px-2 py-1 rounded">gap-{name}</code>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Border Radius */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-fg-default mb-6">Border Radius</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(tokens.radius).map(([name, value]) => (
            <div 
              key={name}
              className="flex items-center gap-4 p-4 rounded-md border border-border-default bg-bg-canvas hover:bg-bg-surface transition-colors"
            >
              <div 
                className="w-16 h-16 bg-bg-brand border-2 border-border-default flex-shrink-0"
                style={{ borderRadius: String(value) }}
              />
              <div className="flex-1 min-w-0">
                <div className="font-mono text-sm font-semibold text-fg-default truncate">radius.{name}</div>
                <div className="font-mono text-xs text-fg-secondary truncate">{String(value)}</div>
                <div className="mt-1 text-xs text-fg-muted">
                  <code className="bg-bg-tertiary px-1 py-0.5 rounded">rounded-{name}</code>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shadows */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-fg-default mb-6">Shadows</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(tokens.shadow).map(([name, value]) => (
            <div 
              key={name}
              className="p-4 rounded-md border border-border-default bg-bg-canvas hover:bg-bg-surface transition-colors"
            >
              <div 
                className="w-full h-24 bg-bg-canvas rounded-md mb-4"
                style={{ boxShadow: String(value) }}
              />
              <div className="font-mono text-sm font-semibold text-fg-default">shadow.{name}</div>
              <div className="font-mono text-xs text-fg-secondary mt-1 break-all">{String(value)}</div>
              <div className="mt-2 text-xs text-fg-muted">
                <code className="bg-bg-tertiary px-1 py-0.5 rounded">shadow-{name}</code>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-fg-default mb-6">Typography</h2>
        
        {/* Font Sizes */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-fg-default mb-4">Font Sizes</h3>
          <div className="space-y-3">
            {Object.entries(tokens.typography.size).map(([name, value]) => (
              <div 
                key={name}
                className="flex items-center gap-4 p-4 rounded-md border border-border-default bg-bg-canvas hover:bg-bg-surface transition-colors"
              >
                <div className="flex-1">
                  <span 
                    className="text-fg-default font-sans"
                    style={{ fontSize: String(value) }}
                  >
                    The quick brown fox jumps over the lazy dog
                  </span>
                </div>
                <div className="text-right">
                  <div className="font-mono text-sm font-semibold text-fg-default">size.{name}</div>
                  <div className="font-mono text-xs text-fg-secondary">{String(value)}</div>
                  <div className="mt-1 text-xs text-fg-muted">
                    <code className="bg-bg-tertiary px-1 py-0.5 rounded">text-{name}</code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Font Weights */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-fg-default mb-4">Font Weights</h3>
          <div className="space-y-3">
            {Object.entries(tokens.typography.weight).map(([name, value]) => (
              <div 
                key={name}
                className="flex items-center gap-4 p-4 rounded-md border border-border-default bg-bg-canvas hover:bg-bg-surface transition-colors"
              >
                <div className="flex-1">
                  <span 
                    className="text-fg-default text-lg"
                    style={{ fontWeight: String(value) }}
                  >
                    The quick brown fox jumps over the lazy dog
                  </span>
                </div>
                <div className="text-right">
                  <div className="font-mono text-sm font-semibold text-fg-default">weight.{name}</div>
                  <div className="font-mono text-xs text-fg-secondary">{String(value)}</div>
                  <div className="mt-1 text-xs text-fg-muted">
                    <code className="bg-bg-tertiary px-1 py-0.5 rounded">font-{name}</code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Font Families */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-fg-default mb-4">Font Families</h3>
          <div className="space-y-3">
            {Object.entries(tokens.typography.fontFamily).map(([name, value]) => (
              <div 
                key={name}
                className="flex flex-col gap-2 p-4 rounded-md border border-border-default bg-bg-canvas hover:bg-bg-surface transition-colors"
              >
                <div 
                  className="text-fg-default text-lg"
                  style={{ fontFamily: String(value) }}
                >
                  The quick brown fox jumps over the lazy dog 0123456789
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-mono text-sm font-semibold text-fg-default">fontFamily.{name}</div>
                    <div className="font-mono text-xs text-fg-secondary mt-1 max-w-md truncate">{String(value)}</div>
                  </div>
                  <div className="text-xs text-fg-muted">
                    <code className="bg-bg-tertiary px-1 py-0.5 rounded">font-{name}</code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="mb-12 p-6 bg-bg-surface rounded-lg border border-border-default">
        <h2 className="text-2xl font-semibold text-fg-default mb-4">Usage Examples</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-fg-default mb-2">✅ Good - Using Tokens</h3>
            <pre className="bg-bg-canvas p-4 rounded-md border border-border-default overflow-x-auto">
              <code className="text-sm text-fg-default">{`<div className="bg-bg-canvas text-fg-default border border-border-default rounded-lg p-4">
  <h2 className="text-xl font-semibold text-fg-default mb-2">
    Card Title
  </h2>
  <p className="text-fg-secondary">
    Card description text
  </p>
</div>`}</code>
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-fg-error mb-2">❌ Bad - Arbitrary Values</h3>
            <pre className="bg-bg-canvas p-4 rounded-md border border-border-error overflow-x-auto">
              <code className="text-sm text-fg-default line-through">{`<div className="bg-white text-gray-900 border border-gray-200 rounded-lg p-4">
  <h2 className="text-xl font-semibold text-black mb-2">
    Card Title
  </h2>
  <p className="text-gray-600">
    Card description text
  </p>
</div>`}</code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
};

