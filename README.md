# Portfolio - Premium Next.js Portfolio Website

A production-grade portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Features modern design, dark/light mode, glassmorphism effects, and Apple-level polish.

## 🎯 Features

- **🎨 Dark/Light Mode** - Seamless theme switching with system preference detection
- **✨ Glassmorphism UI** - Modern glass effect components with backdrop blur
- **⚡ Performance** - Optimized with code splitting, image optimization, and caching
- **📱 Fully Responsive** - Mobile-first design that works on all devices
- **♿ Accessible** - WCAG compliant with keyboard navigation and ARIA labels
- **🔍 SEO Optimized** - Complete metadata, Open Graph, and structured data
- **🎬 Smooth Animations** - Framer Motion for delightful interactions
- **📦 Scalable Structure** - Clean, maintainable component architecture

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Clone and Install Dependencies**
```bash
npm install
```

2. **Run Development Server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for Production**
```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page with showcase
│   └── globals.css         # Global styles & animations
├── components/
│   ├── ThemeProvider.tsx   # Dark/light mode provider
│   ├── ThemeToggle.tsx     # Theme toggle button
│   └── index.ts            # Component exports
├── sections/               # Page sections (Hero, Features, etc.)
├── data/
│   ├── portfolio.ts        # Portfolio configuration
│   └── index.ts            # Data exports
└── lib/
    ├── cn.ts               # Class name utility
    ├── theme.ts            # Design system tokens
    └── index.ts            # Library exports
```

## 🎨 Design System

### Colors

- **Light Mode**: Clean whites with soft grays
- **Dark Mode**: Deep blacks with warm grays
- **Glass Effect**: Semi-transparent backgrounds with blur
- **Gradients**: Subtle, modern gradient combinations

### Typography

- **Heading**: Bold, 700 weight, 1.2 line height
- **Body**: Regular, 400 weight, 1.6 line height
- **Mono**: For code blocks and technical content

### Spacing System

```
xs: 0.5rem (8px)
sm: 1rem (16px)
md: 1.5rem (24px)
lg: 2rem (32px)
xl: 3rem (48px)
2xl: 4rem (64px)
3xl: 6rem (96px)
```

### Animations

- `animate-fade-in` - Fade in effect
- `animate-slide-up` - Slide up with easing
- `animate-slide-down` - Slide down from above
- `animate-scale-in` - Scale and fade in
- `animate-shimmer` - Shimmer loading effect

## 🔧 Customization

### Updating Portfolio Data

Edit `src/data/portfolio.ts`:

```typescript
export const portfolioData = {
  name: 'Your Name',
  title: 'Your Title',
  description: 'Your description',
  // ... more fields
}
```

### Modifying Theme Colors

Edit `tailwind.config.ts` and update the `colors` section in `extend` theme.

### Adding Components

Create new components in `src/components/` and export from `src/components/index.ts`:

```typescript
'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface MyComponentProps {
  // Props
}

export function MyComponent({ }: MyComponentProps) {
  return (
    <motion.div className="glass p-6">
      {/* Content */}
    </motion.div>
  )
}
```

### Creating Sections

Add new sections in `src/sections/` for better organization:

```typescript
'use client'

export function HeroSection() {
  return (
    <section className="section">
      {/* Section content */}
    </section>
  )
}
```

## 🎯 SEO Optimization

Metadata is configured in `src/app/layout.tsx`:

- ✅ Open Graph tags for social sharing
- ✅ Twitter Card integration
- ✅ Structured data support
- ✅ Mobile viewport configuration
- ✅ Favicon and app icons

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels on interactive elements
- Focus-visible states for keyboard navigation
- Color contrast compliance
- Reduced motion support

## 📊 Performance

- **Next.js 15**: Latest optimizations
- **Image Optimization**: Automatic format selection
- **Code Splitting**: Route-based chunks
- **CSS-in-JS**: Tailwind for optimized builds
- **Lighthouse Score**: Target 90+

## 🔐 Security Headers

Configured in `next.config.js`:

- X-DNS-Prefetch-Control
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy

## 📦 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Run ESLint
npm run type-check # Check TypeScript types
```

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

The project builds as a standard Next.js app. Follow your platform's Next.js deployment guide.

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Code Quality**: ESLint
- **Package Manager**: npm

## 📝 Best Practices

1. **Component Organization**: Group related components
2. **Props Typing**: Always use TypeScript interfaces
3. **Naming Conventions**: Use PascalCase for components
4. **CSS Classes**: Use `cn()` utility for conditional classes
5. **Animations**: Leverage Framer Motion for consistency
6. **Data Management**: Centralize in `src/data/`

## 🚦 Development Workflow

1. Create feature branch
2. Make changes in components/sections
3. Test on multiple devices and browsers
4. Run `npm run lint` and `npm run type-check`
5. Build with `npm run build`
6. Deploy when ready

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📄 License

MIT - Feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

---

**Built with ❤️ using modern web technologies.**
