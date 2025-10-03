# Gym Lead Hub - Claude Context

## Project Overview
Landing page platform for gym marketing campaigns with subdomain-based routing. Each gym gets their own branded subdomain with customized content.

**Live Site**: https://gymleadhub.co.uk
**Example Gym**: https://randbfitness.gymleadhub.co.uk

## Tech Stack
- **Framework**: Next.js 15.3 with App Router
- **Language**: TypeScript
- **Styling**: CSS Modules + Tailwind CSS
- **Hosting**: Vercel
- **Repository**: https://github.com/Schofield90/gym-lead-hub

## Architecture

### Subdomain Routing
Uses Next.js middleware to detect subdomains and rewrite to gym-specific pages:
- `randbfitness.gymleadhub.co.uk` → `/gyms/randbfitness`
- Middleware at: `src/middleware.ts`
- Dynamic route at: `src/app/gyms/[subdomain]/page.tsx`

### Gym Configuration
Centralized gym data in `src/config/gyms.ts`:
```typescript
export interface GymConfig {
  subdomain: string;
  name: string;
  location: string;
  demographic: string;
  programDuration: string;
  testimonials: { ... };
  // ... more fields
}

export const gyms: Record<string, GymConfig> = {
  randbfitness: { ... }
}
```

### File Structure
```
src/
├── app/
│   ├── gyms/
│   │   └── [subdomain]/
│   │       ├── page.tsx              # Landing page component
│   │       ├── gym-landing.module.css # Scoped styles
│   │       └── gym-landing-global.css # Global styles
│   └── randbfitness/
│       └── page.tsx                   # Redirect to /gyms/randbfitness
├── config/
│   └── gyms.ts                        # Gym configurations
└── middleware.ts                      # Subdomain routing
```

## Current Setup

### R&B Fitness (randbfitness)
- **Subdomain**: randbfitness.gymleadhub.co.uk
- **Target**: Women 25-50 in Bradford
- **Program**: 6 Week Challenge
- **Images in public/**:
  - `r and b logo.png` - Header logo
  - `Rob 1.jpg` - Hero section image
  - `review 1.png` through `review 6.png` - Customer reviews

### Landing Page Sections
1. **Header** - Logo
2. **Hero** - Main headline + image + social proof
3. **Review Images** - 6 customer reviews
4. **Benefits** - 4 benefit cards with emojis (👗, 💪, 🥗, ✨)
5. **Long Testimonial** - Before/after transformation
6. **Features** - 6 features with emojis
7. **Process** - 4-step journey
8. **Video Testimonials** - 3 success stories
9. **Final CTA** - Call to action + disclaimer

## Styling Approach

### CSS Modules
- Component-scoped styles in `gym-landing.module.css`
- Use `styles.className` pattern in JSX
- No global class pollution

### Global Styles
- Universal selectors in `gym-landing-global.css`
- Imported in page.tsx: `import './gym-landing-global.css'`
- Required because CSS modules don't allow `*` selectors

### Key Style Classes
- `.heroContent` - 2-column grid for hero section
- `.reviewImages` - 6-column grid for reviews
- `.benefitEmoji` - 64px emojis in benefits section
- `.videoCard` - Flex layout for video testimonials

## Deployment

### Vercel Setup
1. Project connected to GitHub repo
2. Auto-deploys on push to main
3. Custom domains configured in Vercel dashboard:
   - Main: gymleadhub.co.uk
   - Wildcard: *.gymleadhub.co.uk
   - Specific: randbfitness.gymleadhub.co.uk

### DNS Configuration
- A record: `@` → Vercel IP
- CNAME: `www` → cname.vercel-dns.com
- CNAME: `randbfitness` → cname.vercel-dns.com

### Testing
- Local: http://localhost:3000/gyms/randbfitness
- Live: https://randbfitness.gymleadhub.co.uk
- Hard refresh (Ctrl+Shift+R) to clear cache

## Recent Changes

### Latest Updates (Oct 3, 2025)
1. **Replaced benefit images with emojis**
   - Changed from `<img>` to `<div className={styles.benefitEmoji}>`
   - Added `.benefitEmoji` CSS class (64px font size)

2. **Fixed image paths**
   - Logo: Updated to `/r and b logo.png` (with spaces)
   - Hero: Updated to `/Rob 1.jpg` (with spaces)

3. **CSS improvements**
   - Split global styles from module styles
   - Added proper emoji sizing

### Known Issues
- None currently

## Adding New Gyms

1. **Add gym config** in `src/config/gyms.ts`
2. **Update generateStaticParams** in `page.tsx`
3. **Add subdomain** in Vercel dashboard
4. **Configure DNS** with CNAME record
5. **Add images** to `/public/` directory

## Development

### Local Setup
```bash
npm install
npm run dev
```

### Build
```bash
npm run build
```

### Deploy
```bash
git add .
git commit -m "message"
git push origin main
```

## Important Notes
- **Next.js 15** - Uses Server Components by default
- **Dynamic rendering** - `export const dynamic = 'force-dynamic'`
- **Image paths** - Files with spaces work in Next.js
- **Cache busting** - Use incognito or hard refresh for testing
- **Middleware** - Runs on every request, handles subdomain detection

## Contact
Repository: https://github.com/Schofield90/gym-lead-hub
