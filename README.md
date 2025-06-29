# Gym Growth Consultancy Website

A modern, high-converting one-page website for a gym business growth consultancy, built with Next.js and designed to capture leads through an integrated contact form.

## 🚀 Features

- **Modern Design**: Professional, mobile-first responsive design with Tailwind CSS
- **High-Converting Layout**: Optimized for lead generation with clear value propositions
- **Form Integration**: Contact form with GoHighLevel webhook integration
- **Form Validation**: Client-side validation using react-hook-form and zod
- **SEO Optimized**: Proper metadata and structured content for search engines
- **Performance**: Built with Next.js 15 for optimal performance and user experience

## 🎯 Target Audience

Boutique gym owners looking to:
- Generate more qualified leads
- Increase monthly revenue
- Scale their fitness business operations
- Improve sales conversion rates

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **Form Handling**: react-hook-form with zod validation
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Deployment**: Vercel (recommended)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/gym-growth-consultancy.git
cd gym-growth-consultancy
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your GoHighLevel webhook URL:
```env
GOHIGHLEVEL_WEBHOOK_URL=your_actual_webhook_url_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── api/contact/          # Contact form API endpoint
│   ├── globals.css           # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Homepage
└── components/
    └── sections/
        ├── Hero.tsx         # Hero section with CTA
        ├── Problems.tsx     # Problem/solution section
        ├── Services.tsx     # Services overview
        ├── Testimonials.tsx # Social proof section
        ├── ContactForm.tsx  # Lead capture form
        └── Footer.tsx       # Footer with contact info
```

## 🔧 Configuration

### GoHighLevel Integration

1. Log into your GoHighLevel account
2. Create a new webhook in your funnel or automation
3. Copy the webhook URL
4. Add it to your `.env.local` file as `GOHIGHLEVEL_WEBHOOK_URL`

### Form Fields

The contact form captures:
- Full Name (required)
- Email Address (required) 
- Gym Name (required)
- Phone Number (required)
- Current Monthly Revenue (required dropdown)

Additional data automatically captured:
- UTM tracking parameters
- Submission timestamp
- Source identifier

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub:
```bash
git remote add origin https://github.com/yourusername/gym-growth-consultancy.git
git branch -M main
git push -u origin main
```

2. Connect your GitHub repository to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard
   - Deploy

3. Set environment variables in Vercel:
   - Go to Project Settings > Environment Variables
   - Add `GOHIGHLEVEL_WEBHOOK_URL` with your webhook URL

### Manual GitHub Setup

If you don't have GitHub CLI installed:

1. Create a new repository on GitHub.com
2. Add the remote origin:
```bash
git remote add origin https://github.com/yourusername/gym-growth-consultancy.git
```
3. Push your code:
```bash
git branch -M main
git push -u origin main
```

## 📊 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting  
- **SEO**: Optimized metadata and Open Graph tags
- **Responsive**: Mobile-first design approach
- **Accessibility**: Semantic HTML and ARIA labels

## 🎨 Customization

### Colors & Branding

Edit the Tailwind classes in components to match your brand:
- Primary: `blue-600` and `cyan-600` (gradient)
- Secondary: `slate-900` and `gray-900`
- Accent: `green-600` for success states

### Content

Update the following files to customize content:
- `Hero.tsx`: Main headline and value proposition
- `Problems.tsx`: Customer pain points
- `Services.tsx`: Service offerings and features
- `Testimonials.tsx`: Customer success stories
- `ContactForm.tsx`: Form fields and labels

## 📈 Analytics & Tracking

The website includes:
- UTM parameter tracking
- Form submission analytics
- Conversion event tracking (ready for Google Analytics/Facebook Pixel)

## 🔒 Security Features

- Form validation (client and server-side)
- CSRF protection via Next.js
- Environment variable protection
- Secure API endpoints

## 📞 Support

For questions or customization requests, contact:
- Email: hello@gymgrowthpro.co.uk
- Phone: +44 20 7123 4567

## 📄 License

This project is licensed under the MIT License. See LICENSE file for details.

---

Built with ❤️ for gym owners who want to scale their businesses.