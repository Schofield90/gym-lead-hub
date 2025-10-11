import { gyms } from '@/config/gyms';
import { notFound } from 'next/navigation';
import ThankYouClient from '../thank-you/ThankYouClient';

export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  return Object.keys(gyms).map((subdomain) => ({
    subdomain,
  }));
}

export default async function ThankYouMenPage({
  params,
}: {
  params: Promise<{ subdomain: string }>;
}) {
  const { subdomain } = await params;
  const gym = gyms[subdomain];

  if (!gym) {
    notFound();
  }

  return <ThankYouClient gym={gym} />;
}
