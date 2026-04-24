## UI Refactor TODO - Modern SaaS (Stripe/Linear/Notion/Web3)

### Approved Plan Summary
- Global: Update tailwind.config.js + global.css for emerald primary, spacing scale, subtle shadows.
- Layout: Compact header, open AppLayout (less blobs/heavy shadows).
- Pages: Fluid sections, consistent spacing/typography, improved dark contrast.
- Components: Subtle cards/buttons, micro-interactions.
- Priorities: Header compact, dark contrast, spacing balance.

### Step-by-Step Progress

**✅ Step 1: Create this TODO.md** (done)

**✅ Step 2: Update configs (tailwind.config.js, global.css)**
- Extended emerald/slate colors, subtle shadows.
- Updated CSS vars: primary emerald hsl(158 75% 45%/55%), slate backgrounds.
- Dark mode: card hsl(217 32% 15%), improved contrast.

**✅ Step 3: Compact AppHeader.tsx**
- Reduced py-2.5, logo h-10, toggle h-10 w-20, nav gap-1 px-3 py-1.5 text-sm.
- Premium shadcn style with cn(), primary accents, hover-lift animation.

**✅ Step 4: Refine AppLayout.tsx**
- Simplified bg-background + subtle gradient overlay.
- Removed heavy blobs/noise grid.
- Main py-8 md:py-12 px-6→12.
- Footer bg-card/50 ring-border/10, compact responsive layout.

**✅ Step 5: Update HomePage.tsx**
- Hero: fluid lg:grid gap-16, new typography (font-bold leading-tight).
- Features: grid cards rounded-xl shadow-sm hover:shadow-card-hover hover-lift.
- Process: container rounded-3xl gradient accent, steps relative.
- CTA: gradient primary/10 ring-primary/10.
- Consistent spacing space-y-16→24, micro-interactions.

**✅ Step 6: Core pages (ActivityPage, VerifyPage, CreateCertificatePage, UpdateCertificatePage)**
- All ✅ updated to rounded-xl/2xl shadow-sm ring-border/10, fluid layouts.
- Tags: bg-primary/10 ring-primary/20 font-semibold no uppercase.
- Typography: consistent font-bold hierarchy, leading-relaxed.
- Spacing: space-y-16 py-12-20, responsive grids.
- Micro-interactions: hover-lift, shadows.

**✅ Step 7: Components - ConnectWallet.tsx**
- Modern button h-11 rounded-xl, shadcn system, primary hovers.

**⏳ Step 8: Final test & complete**
- pnpm dev verify light/dark responsive all pages/flows.


**⏳ Step 7: Components - ConnectWallet.tsx**
- Update to new shadow/card system, primary colors.

**⏳ Step 8: Final test & complete**
- execute_command pnpm dev
- Verify light/dark responsive flows.


**⏳ Step 7: Components polish**
- ConnectWallet.tsx: use new system colors/shadows.

**⏳ Step 8: Final test**
- pnpm dev
- Light/dark, responsive, flows test.


**⏳ Step 5: Update HomePage.tsx**
- Hero: open layout, balanced spacing.
- Features/Process/CTA: subtle cards ring-1 shadow-sm.

**⏳ Step 6: Pages - ActivityPage.tsx, VerifyPage.tsx, etc.**
- Replace heavy rounded/shadows → rounded-xl shadow-sm ring-border/20.
- Typography hierarchy, spacing space-y-8/12.

**⏳ Step 7: Components - ConnectWallet.tsx, ui/button.tsx**
- UI polish only.

**⏳ Step 8: Test & Complete**
- `pnpm dev`
- Check light/dark, responsive, flows.
- Update TODO with ✅.
- attempt_completion.

Current: Starting configs → layout → pages.

