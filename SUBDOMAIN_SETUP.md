# Gym Landing Page Subdomain Setup

## Overview
This project supports gym-specific landing pages via subdomains (e.g., `randbfitness.gymleadhub.co.uk`).

## How It Works

### 1. Subdomain Routing
- **Middleware** (`src/middleware.ts`) detects subdomains and routes to `/gyms/[subdomain]`
- **Dynamic Route** (`src/app/gyms/[subdomain]/page.tsx`) renders gym-specific content
- **Gym Config** (`src/config/gyms.ts`) stores gym data

### 2. Adding a New Gym

Edit `src/config/gyms.ts`:

```typescript
export const gyms: Record<string, GymConfig> = {
  randbfitness: {
    subdomain: 'randbfitness',
    name: 'R&B Fitness',
    location: 'Your Area',
    // ... other config
  },

  // Add new gym:
  newgym: {
    subdomain: 'newgym',
    name: 'New Gym Name',
    location: 'City Name',
    demographic: 'Busy Adults',
    // ... complete config
  }
};
```

### 3. Vercel Domain Setup

#### Option A: Individual Subdomains (Current Setup)
1. Go to Vercel project → **Settings** → **Domains**
2. Add each subdomain:
   - `randbfitness.gymleadhub.co.uk`
   - Click **Add**
3. Configure DNS (in your domain registrar):
   - Type: `CNAME`
   - Name: `randbfitness`
   - Value: `cname.vercel-dns.com`

#### Option B: Wildcard Subdomain (Recommended for Scale)
1. In Vercel → **Settings** → **Domains**
2. Add: `*.gymleadhub.co.uk`
3. Configure DNS:
   - Type: `CNAME`
   - Name: `*`
   - Value: `cname.vercel-dns.com`

This allows ANY subdomain to work automatically without manual DNS updates.

### 4. Testing Locally

Since localhost doesn't support real subdomains, test via the direct route:

```bash
npm run dev

# Then visit:
http://localhost:3000/gyms/randbfitness
```

### 5. Production URLs

Once DNS is configured:
- Main site: `https://gymleadhub.co.uk`
- R&B Fitness: `https://randbfitness.gymleadhub.co.uk`
- Future gyms: `https://[subdomain].gymleadhub.co.uk`

## File Structure

```
src/
├── config/
│   └── gyms.ts              # Gym configuration data
├── middleware.ts            # Subdomain detection & routing
└── app/
    └── gyms/
        └── [subdomain]/
            └── page.tsx     # Dynamic landing page template
```

## Next Steps

1. ✅ Code is ready
2. ⏳ Add wildcard domain `*.gymleadhub.co.uk` in Vercel
3. ⏳ Configure DNS with CNAME record
4. ⏳ Add placeholder images to `/public` folder
5. ⏳ Test with `randbfitness.gymleadhub.co.uk`

## Adding Images

Place images in `/public` folder:
- `/public/hero-gym-background.jpg`
- `/public/benefit-1.jpg` → `/public/benefit-4.jpg`
- `/public/step-1.jpg` → `/public/step-4.jpg`
- `/public/testimonial-before-after.jpg`
- `/public/testimonial-video-1.jpg` → `/public/testimonial-video-3.jpg`
