# CLAUDE.md - King Legend, Inc

This file provides guidance to Claude Code (claude.ai/code) when working with this project.

## Project Overview

**King Legend, Inc** is a premium brand and entertainment company website built with modern web technologies. This is a Next.js-based marketing website showcasing the company's vision, services, and brand excellence.

## Project Information

- **Location**: `/Volumes/DevOPS 2025/King Legend, Inc`
- **Type**: Corporate website / Brand showcase
- **Status**: Active development
- **Stack**: Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion
- **Deployment**: Vercel (configured)

## Technology Stack

### Core Framework
- **Next.js**: 16.0.2 (App Router)
- **React**: 19.2.0
- **React DOM**: 19.2.0
- **TypeScript**: 5.x

### Styling & Animation
- **Tailwind CSS**: 4.x (with @tailwindcss/postcss)
- **Framer Motion**: 12.23.24 (for animations)
- **PostCSS**: Latest

### Development Tools
- **ESLint**: 9.x (with eslint-config-next)
- **TypeScript Config**: Strict mode enabled

### Fonts
- **Geist Sans**: Google font (primary)
- **Geist Mono**: Google font (monospace)

## Project Structure

```
King Legend, Inc/
├── app/
│   ├── components/
│   │   ├── about/          # About section components (empty)
│   │   ├── contact/        # Contact section components (empty)
│   │   ├── services/       # Services section components (empty)
│   │   └── shared/         # Shared/reusable components
│   │       ├── Button.tsx
│   │       ├── Footer.tsx
│   │       ├── Header.tsx
│   │       └── Navigation.tsx
│   ├── lib/
│   │   ├── context/        # React context providers (empty)
│   │   ├── data/           # Static data and constants (empty)
│   │   └── hooks/          # Custom React hooks (empty)
│   ├── types/              # TypeScript type definitions (empty)
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   └── favicon.ico         # Site favicon
├── public/                 # Static assets
├── node_modules/           # Dependencies
├── .next/                  # Next.js build output
├── .git/                   # Git repository
├── .env                    # Environment variables (minimal)
├── .env.local              # Vercel OIDC token
├── .gitignore              # Git ignore rules
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── postcss.config.mjs      # PostCSS configuration
├── eslint.config.mjs       # ESLint configuration
├── package.json            # Project dependencies
├── package-lock.json       # Locked dependencies
├── README.md               # Default Next.js readme
└── CLAUDE.md               # This file
```

## Key Commands

### Development
```bash
npm run dev       # Start development server on http://localhost:3000
npm run build     # Create production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

### Installation
```bash
npm install       # Install all dependencies
```

## Current Implementation

### Completed Features
- **Homepage** (app/page.tsx)
  - Hero section with gradient text
  - Feature cards (Innovation, Excellence, Vision)
  - Call-to-action buttons
  - Responsive design
  - Dark theme with zinc color palette

- **Layout** (app/layout.tsx)
  - SEO metadata configuration
  - Open Graph tags
  - Google Fonts (Geist Sans, Geist Mono)
  - Responsive HTML structure

- **Styling**
  - Tailwind CSS 4 configured
  - Global styles in globals.css
  - Dark theme design system
  - Gradient effects and animations

### Components Created (Not Yet Implemented)
- `app/components/shared/Button.tsx` - Created but empty
- `app/components/shared/Footer.tsx` - Created but empty
- `app/components/shared/Header.tsx` - Created but empty
- `app/components/shared/Navigation.tsx` - Created but empty

### Directories Created (Empty)
- `app/components/about/` - For about section
- `app/components/contact/` - For contact section
- `app/components/services/` - For services section
- `app/lib/context/` - For React context providers
- `app/lib/data/` - For static data
- `app/lib/hooks/` - For custom hooks
- `app/types/` - For TypeScript types

## Design System

### Colors (Tailwind Classes)
- **Background**: `zinc-900`, `black`
- **Text Primary**: `white`, `zinc-200`
- **Text Secondary**: `zinc-400`, `zinc-500`, `zinc-600`
- **Borders**: `zinc-700`, `zinc-800`
- **Accents**: Gradients from/via/to zinc shades

### Typography
- **Headings**: `text-6xl`, `text-7xl`, `text-8xl` with gradient effects
- **Body**: `text-xl`, `text-2xl`, `text-lg`
- **Font Weight**: `font-bold`, `font-semibold`
- **Tracking**: `tracking-tight`

### Layout Patterns
- Flexbox-based centered layouts
- Grid system for feature cards
- Responsive breakpoints: `sm:`, `md:`, `lg:`
- Padding: `px-6`, `py-24`, `p-8`
- Border radius: `rounded-2xl`, `rounded-full`

## Development Guidelines

### Component Structure
- Use functional components with TypeScript
- Define prop types inline with `{ title: string; description: string }`
- Keep components small and focused
- Use Tailwind classes for styling

### Naming Conventions
- Components: PascalCase (e.g., `FeatureCard`)
- Files: PascalCase for components (e.g., `Button.tsx`)
- Directories: lowercase with hyphens (e.g., `shared/`)

### TypeScript
- Enable strict mode
- Define prop types for all components
- Use `type` for component props
- Use `interface` for complex data structures

### Styling
- Use Tailwind utility classes
- Follow mobile-first responsive design
- Use `group` and `hover:` for interactive states
- Maintain consistent spacing scale

## Git Status

### Current Branch
- `main`

### Recent Changes
- Deleted initial Next.js template files:
  - `app/favicon.ico`
  - `app/globals.css`
  - `app/layout.tsx`
  - `app/page.tsx`

### Untracked Files
- `app/web/` directory
- `desktop.ini` (Windows metadata file)

### Recent Commits
- Initial commit from Create Next App

## Environment Variables

### Development (.env.local)
- `VERCEL_OIDC_TOKEN` - Vercel deployment token (auto-generated)

### Required Environment Variables
Currently, the project does not require additional environment variables for basic operation.

## Deployment

### Vercel Configuration
- Project is connected to Vercel
- Team: `axaiinnovation`
- Project ID: `prj_CkuGAa2ocUye16K8E2ao3Mf8112q`
- Environment: Development
- Plan: Pro

### Build Configuration
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`
- Development Command: `npm run dev`

## Next Steps / TODO

### High Priority
1. Implement shared components:
   - Header with navigation
   - Footer with links and copyright
   - Reusable Button component
   - Navigation menu

2. Create main sections:
   - About page/section
   - Services page/section
   - Contact page/section

3. Add routing:
   - Create route structure in app directory
   - Implement navigation between pages

### Medium Priority
4. Implement animations:
   - Add Framer Motion animations
   - Scroll-triggered effects
   - Page transitions

5. Add content management:
   - Define data structures in `app/lib/data/`
   - Create TypeScript types in `app/types/`

6. SEO Optimization:
   - Add sitemap
   - Configure robots.txt
   - Add more Open Graph tags
   - Implement structured data

### Low Priority
7. Performance optimization:
   - Image optimization
   - Code splitting
   - Lazy loading

8. Testing:
   - Add test framework
   - Write unit tests
   - Add E2E tests

## Common Tasks

### Adding a New Page
1. Create a new directory in `app/` (e.g., `app/about/`)
2. Add `page.tsx` with default export
3. Add `layout.tsx` if custom layout needed
4. Update navigation in shared components

### Creating a New Component
1. Create component file in appropriate directory
2. Define TypeScript types for props
3. Implement component with Tailwind styling
4. Export component for use in pages

### Updating Metadata
- Edit `app/layout.tsx`
- Modify the `metadata` object
- Update Open Graph properties

### Styling Changes
- Primary styles: `app/globals.css`
- Component styles: Inline Tailwind classes
- Custom utilities: Add to `globals.css`

## Troubleshooting

### Development Server Issues
```bash
# Clear .next cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Restart dev server
npm run dev
```

### Build Failures
1. Check TypeScript errors: `npm run lint`
2. Verify all imports are correct
3. Ensure all required dependencies are installed
4. Check for missing environment variables

### Styling Not Appearing
1. Verify Tailwind classes are valid
2. Check PostCSS configuration
3. Clear browser cache
4. Restart development server

## Best Practices

### Before Committing
1. Run `npm run lint` to check for errors
2. Test build: `npm run build`
3. Review changes: `git diff`
4. Write descriptive commit messages

### Code Quality
- Keep components under 200 lines
- Extract reusable logic into hooks
- Use semantic HTML elements
- Ensure accessibility (ARIA labels, etc.)
- Test responsive design on multiple screen sizes

### Performance
- Use Next.js Image component for images
- Lazy load components when appropriate
- Minimize client-side JavaScript
- Use server components by default

## Related Documentation

### External Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

### Project Context
This project is part of the DevOPS 2025 drive workspace. See `/Volumes/DevOPS 2025/CLAUDE.md` for:
- Drive maintenance procedures
- System optimization scripts
- Other related projects
- Development environment setup

## Support & Contact

For questions or issues specific to this project:
1. Check this CLAUDE.md file
2. Review Next.js documentation
3. Check git commit history for context
4. Review Vercel deployment logs

---

**Last Updated**: 2025-11-14
**Project Version**: 0.1.0
**Next.js Version**: 16.0.2
