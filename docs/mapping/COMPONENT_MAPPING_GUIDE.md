# Component Mapping Guide

This guide maps Figma variant axes → component props → CVA keys → Tailwind classes → token keys.

## Button

| Figma Axis | Prop      | CVA Key  | Tailwind Classes                                               | Token Keys                          |
|------------|-----------|----------|----------------------------------------------------------------|-------------------------------------|
| Size       | `size`    | sm/md/lg | `h-8 px-3 text-sm` · `h-9 px-4 text-md` · `h-10 px-5 text-lg` | `fontSize.*`, `space.*`             |
| Emphasis   | `emphasis`| primary  | `bg-bg-brand text-fg-onbrand`                                  | `bg.brand`, `fg.onbrand`            |
|            |           | secondary| `bg-bg-surface text-fg-default border border-border-default`   | `bg.surface`, `fg.default`, `border.default` |
|            |           | tertiary | `bg-transparent text-fg-default`                               | `fg.default`                        |
| Tone       | `tone`    | success  | `bg-state-success text-fg-onbrand`                             | `state.success`, `fg.onbrand`       |
|            |           | warn     | `bg-state-warn text-fg-onbrand`                                | `state.warn`, `fg.onbrand`          |
|            |           | danger   | `bg-state-danger text-fg-onbrand`                              | `state.danger`, `fg.onbrand`        |
| Focus      | —         | —        | `focus-visible:ring-2 focus-visible:ring-border-focus`         | `border.focus`                      |

## Input

| Figma Axis | Prop             | Tailwind Classes                                                          | Token Keys                          |
|------------|------------------|---------------------------------------------------------------------------|-------------------------------------|
| Size       | `size`           | `h-8 px-3 text-sm` · `h-9 px-3.5 text-md` · `h-10 px-4 text-lg`          | `fontSize.*`, `space.*`             |
| Default    | —                | `bg-bg-canvas text-fg-default placeholder:text-fg-muted border-border-default` | `bg.canvas`, `fg.default`, `fg.muted`, `border.default` |
| Focus      | —                | `focus:ring-2 focus:ring-border-focus focus:border-border-focus`         | `border.focus`                      |
| Invalid    | `validationState`| `border-state-danger focus:ring-state-danger`                             | `state.danger`                      |

## Card

| Figma Axis | Prop      | Tailwind Classes                                  | Token Keys              |
|------------|-----------|---------------------------------------------------|-------------------------|
| Variant    | `variant` | `bg-bg-surface shadow-md` (elevated)              | `bg.surface`, `shadow.*`|
|            |           | `bg-bg-canvas border border-border-default`       | `bg.canvas`, `border.default` |
| Radius     | `radius`  | `rounded-sm` · `rounded-md` · `rounded-lg` · `rounded-xl` | `radius.*`              |
| Padding    | `padding` | `p-3` · `p-4` · `p-5` · `p-6`                     | `space.*`               |

Notes:
- All colors resolve to `hsl(var(--color-*)/<alpha>)`. Do not use raw hex/rgb/hsl.
- If a Figma visual can’t be achieved with existing tokens, request token additions rather than hardcoding.


