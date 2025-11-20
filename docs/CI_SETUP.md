# CI/CD Configuration Guide

## Issue: pnpm vs npm

Your CI was configured for `pnpm` but the project uses `npm`. This caused the error:
```
ERR_PNPM_NO_LOCKFILE  Cannot install with "frozen-lockfile" because pnpm-lock.yaml is absent
```

## ✅ Solution Applied

I've configured the project to work with **npm** (recommended since all your dependencies are already managed with npm).

### Files Added/Modified

1. **`.github/workflows/ci.yml`** - Updated to use npm instead of pnpm
2. **`pnpm-workspace.yaml`** - Added (in case you want to use pnpm later)
3. **`.npmrc`** - Added pnpm config (for future pnpm migration)

---

## Option 1: Use npm (Recommended - Current Setup)

The CI workflow now uses npm, which works with your existing `package-lock.json`:

```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '18'
    cache: 'npm'

- name: Install dependencies
  run: npm ci
```

**No changes needed** - it will work with your existing lockfile.

---

## Option 2: Switch to pnpm (If Desired)

If you want to use pnpm throughout your project:

### Step 1: Install pnpm locally
```bash
npm install -g pnpm
# or
corepack enable
corepack prepare pnpm@latest --activate
```

### Step 2: Generate pnpm lockfile
```bash
# Remove npm lockfile
rm package-lock.json

# Install with pnpm (generates pnpm-lock.yaml)
pnpm install

# Commit the new lockfile
git add pnpm-lock.yaml pnpm-workspace.yaml .npmrc
git commit -m "Switch to pnpm"
```

### Step 3: Update CI workflow
```yaml
- name: Setup pnpm
  uses: pnpm/action-setup@v2
  with:
    version: 8

- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '18'
    cache: 'pnpm'

- name: Install dependencies
  run: pnpm install --frozen-lockfile
```

### Step 4: Update scripts
Change all `npm run` to `pnpm run` in your package.json and README.

---

## Current CI Workflow

The workflow now runs:

1. ✅ Checkout code
2. ✅ Setup Node.js 18 with npm cache
3. ✅ Install dependencies (`npm ci`)
4. ✅ Build tokens
5. ✅ Lint code
6. ✅ Type check
7. ✅ Build Storybook
8. ✅ Check token violations

---

## Comparison: npm vs pnpm

| Feature | npm | pnpm |
|---------|-----|------|
| **Lockfile** | package-lock.json | pnpm-lock.yaml |
| **Install Command** | `npm install` | `pnpm install` |
| **CI Command** | `npm ci` | `pnpm install --frozen-lockfile` |
| **Workspace Support** | ✅ Built-in | ✅ Built-in |
| **Disk Space** | More | Less (hard links) |
| **Speed** | Fast | Faster |
| **Current Project** | ✅ Used | ⚠️ Not configured |

---

## Recommendation

**Stick with npm** for now because:
- ✅ Already configured and working
- ✅ Lockfile already exists (package-lock.json)
- ✅ Team is likely familiar with it
- ✅ No migration needed
- ✅ CI will work immediately

**Switch to pnpm later** if you want:
- 💾 Better disk space usage (shared dependencies)
- ⚡ Slightly faster installs
- 🔒 Stricter dependency resolution

---

## Testing the CI

After pushing these changes, the CI will:
1. Run automatically on PR
2. Use npm (not pnpm)
3. Work with existing package-lock.json

You can test locally:
```bash
npm ci
npm run build:tokens
npm run lint
npm run typecheck
npm run build-storybook
npm run check:tokens
```

All should pass! ✅

---

## Next Steps

1. **Commit these changes**:
   ```bash
   git add .github/workflows/ci.yml pnpm-workspace.yaml .npmrc
   git commit -m "Fix CI: Configure for npm instead of pnpm"
   git push
   ```

2. **CI will run** on your PR using npm

3. **Optional**: If you want pnpm, follow "Option 2" above

---

## Files in This Commit

- `.github/workflows/ci.yml` - CI workflow using npm
- `pnpm-workspace.yaml` - Workspace config (for future pnpm use)
- `.npmrc` - pnpm settings (for future pnpm use)
- `docs/CI_SETUP.md` - This guide

