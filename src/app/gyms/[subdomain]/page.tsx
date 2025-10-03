import { notFound } from 'next/navigation';
import { getGymBySubdomain } from '@/config/gyms';
import GymLandingPageClient from './GymLandingPageClient';
import './gym-landing-global.css';

export const dynamic = 'force-dynamic';
export const dynamicParams = true;

interface PageProps {
  params: Promise<{ subdomain: string }>;
}

export default async function GymLandingPage({ params }: PageProps) {
  const { subdomain } = await params;
  const gym = getGymBySubdomain(subdomain);

  if (!gym) {
    notFound();
  }

  return <GymLandingPageClient gym={gym} />;
}
