# Portfolio Project - Development Guidelines

## Project Overview

A production-grade Next.js 15 portfolio website with TypeScript, Tailwind CSS, Framer Motion, and a complete design system featuring dark/light mode, glassmorphism effects, and Apple-level polish.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Home page showcase
│   └── globals.css        # Global styles, animations, utilities
├── components/            # Reusable UI components
│   ├── ThemeProvider.tsx  # Dark/light mode context & logic
│   ├── ThemeToggle.tsx    # Theme toggle button
│   └── index.ts           # Component barrel exports
├── sections/              # Page sections (Hero, Features, CTA, Footer)
├── data/                  # Portfolio configuration
│   ├── portfolio.ts       # Portfolio content data
│   └── index.ts           # Data barrel exports
└── lib/                   # Utilities & theme system
    ├── cn.ts              # Class name composition utility
    ├── theme.ts           # Design tokens and constants
    └── index.ts           # Library barrel exports
public/                    # Static assets
├── site.webmanifest      # PWA manifest
└── favicon.ico           # Favicon (placeholder)
```

## Design System

### Color Palette

**Light Mode:**
- Background: #FFFFFF
- Foreground: #0F0F0F
- Muted: #F5F5F5
- Muted Foreground: #737373
- Border: #E5E5E5

**Dark Mode:**
- Background: #0F0F0F
- Foreground: #FFFFFF
- Muted: #1F1F1F
- Muted Foreground: #A1A1A1
- Border: #2A2A2A

### Typography

- **Font Families**: Inter / Geist Sans (system fonts)
- **Headings**: Bold (700), 1.2 line height
- **Body**: Regular (400), 1.6 line height
- **Mono**: For code blocks

### Spacing Scale

- xs: 8px | sm: 16px | md: 24px | lg: 32px
- xl: 48px | 2xl: 64px | 3xl: 96px

### Component Classes

```css
.glass              /* Glassmorphism effect */
.glass-sm           /* Small glass variant */
.h1, .h2, .h3, .h4 /* Typography */
.body-lg, .body-sm  /* Body text */
.container-padding  /* Responsive padding */
.section            /* Full section layout */
.transition-smooth  /* Smooth transitions */
.focus-ring         /* Accessibility focus state */
```

## Key Features

### 1. Dark/Light Mode
- Automatic system preference detection
- Manual toggle with smooth transitions
- Persistent storage via localStorage
- All components support both themes

### 2. Glassmorphism Design
- `.glass` class with blur backdrop
- Semi-transparent backgrounds
- Soft, modern aesthetics
- Theme-aware shadows

### 3. Animations
- Framer Motion integration
- Custom CSS animations
- Smooth page transitions
- Lazy load animations with InView

### 4. Responsive Design
- Mobile-first approach
- Touch-friendly interactions
- Adaptive layouts
- Tested on all breakpoints

### 5. SEO Optimization
- Complete metadata setup
- Open Graph tags
- Twitter Card support
- Structured data ready
- Robots meta configuration

### 6. Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus management
- Color contrast compliance

## Development Guidelines

### Adding Components

1. Create in `src/components/`
2. Use TypeScript interfaces for props
3. Export from `src/components/index.ts`
4. Include proper TypeScript types

```typescript
'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface ComponentProps {
  title: string
  variant?: 'primary' | 'secondary'
}

export function MyComponent({ title, variant = 'primary' }: ComponentProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn('glass p-6', variant === 'primary' && 'bg-foreground')}
    >
      {title}
    </motion.div>
  )
}
```

### Adding Sections

Create in `src/sections/` for better organization:

```typescript
'use client'

import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section className="section bg-gradient-to-br from-background to-muted">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Section content */}
      </motion.div>
    </section>
  )
}
```

### Styling Best Practices

1. Use Tailwind classes first
2. Use `cn()` for conditional classes
3. Use CSS variables for theming
4. Apply animations with Framer Motion
5. Maintain consistent spacing

```typescript
className={cn(
  'rounded-lg p-4 transition-smooth',
  'hover:shadow-lg',
  'dark:bg-muted dark:text-foreground',
  active && 'bg-primary text-primary-foreground'
)}
```

### Data Management

All portfolio content is centralized in `src/data/portfolio.ts`:

```typescript
export const portfolioData = {
  name: 'Your Name',
  title: 'Your Title',
  projects: [...],
  skills: {...},
  experience: [...],
}
```

Import and use throughout the app:

```typescript
import { portfolioData } from '@/data'

// Use: portfolioData.name, portfolioData.projects, etc.
```

## Scripts & Commands

```bash
npm run dev         # Start development server (Port 3000)
npm run build       # Build for production
npm start          # Start production server
npm run lint       # Run ESLint
npm run type-check # Check TypeScript errors
```

## Testing Checklist

- [ ] Test dark/light mode toggle
- [ ] Verify responsive layouts on mobile/tablet/desktop
- [ ] Check keyboard navigation
- [ ] Test all animations
- [ ] Verify SEO metadata
- [ ] Check accessibility with screen reader
- [ ] Test on multiple browsers
- [ ] Verify performance with Lighthouse

## Deployment

### Vercel (Recommended)

```bash
vercel
```

### Other Platforms

Works with any Node.js hosting supporting Next.js.

## Performance Targets

- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## Common Tasks

### Update Portfolio Content
Edit `src/data/portfolio.ts`

### Change Theme Colors
Edit `tailwind.config.ts` → `colors` section

### Add New Page
Create `src/app/[page]/page.tsx`

### Add Animation
Add keyframe to `src/app/globals.css` and use via class

### Modify Layout
Edit `src/app/layout.tsx`

## Troubleshooting

### Dark mode not persisting
- Check localStorage isn't disabled
- Verify ThemeProvider wraps app
- Check for hydration issues

### Animations not smooth
- Verify Framer Motion is installed
- Check GPU acceleration in CSS
- Review animation performance

### Styling conflicts
- Use `cn()` for class conflicts
- Check Tailwind precedence
- Verify dark mode class is applied

## Next Steps

1. Customize portfolio data
2. Add your projects and experience
3. Update social links
4. Add project images
5. Deploy to production
6. Set up analytics
7. Configure custom domain

## Resources

- [Next.js Docs](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [TypeScript](https://www.typescriptlang.org)

---

**Last Updated**: April 22, 2024
