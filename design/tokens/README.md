Design Tokens (Source of Truth)
================================

Place design-provided JSON snapshots in this directory. Files are merged by key.

Schema (merged across files):
- color: Record<"semantic.path", Hex|HSL>
- space: Record<key, px|rem>
- radius: Record<key, px|rem>
- shadow: Record<key, CSS box-shadow>
- typography:
  - fontFamily: Record<key, CSS font-family>
  - size: Record<key, rem|px>
  - lineHeight: Record<key, rem|px|number>
  - weight: Record<key, 100-900|string>

Notes:
- Do not mutate tokens in code. Update JSON snapshots instead, then run `npm run build:tokens`.
- Color tokens should provide hex (preferred) or hsl(). Alpha is handled via Tailwind's color opacity.


