

## Add Top Navigation + Step Indicator (All English)

### Overview
Add two new sections above the Persona Gallery: a dark navigation bar and a step progress indicator. All text will be in **English** (the screenshot had Chinese — we'll translate everything).

### Components

**1. `src/components/TopNav.tsx`** — Dark header bar
- Left: Logo icon + "Virtual Persona" (Playfair Display serif) + subtitle "Hypothesis Validation Platform"
- Right: Navigation links — "VALIDATION HISTORY", "PROXY LIBRARY", "DOCS" (uppercase, wide letter-spacing, magazine style)

**2. `src/components/StepIndicator.tsx`** — Three-step flow
- Step 1: "Persona Scope" — subtitle "Select target personas" (current/active)
- Step 2: "Hypothesis Input" — subtitle "Define your hypothesis"
- Step 3: "Validation Output" — subtitle "Review validation results"
- Active step: solid dot + bold text; future steps: hollow dot + muted text; thin line connectors between steps

**3. `src/pages/Index.tsx`** — Integration
- Import and place TopNav + StepIndicator at top
- Remove or simplify existing "Persona Gallery" header (redundant with step indicator)
- Adjust top padding

### Design Notes
- NavBar: dark background matching the sheet overlay aesthetic; links use the same uppercase tracking style as card labels
- StepIndicator: light/white background, minimalist typography consistent with card design system
- All text English per project language rule

