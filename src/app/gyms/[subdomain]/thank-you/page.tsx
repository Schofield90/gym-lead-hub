import { gyms } from '@/config/gyms';
import { notFound } from 'next/navigation';
import ThankYouClient from './ThankYouClient';

export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  return Object.keys(gyms).map((subdomain) => ({
    subdomain,
  }));
}

export default async function ThankYouPage({
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
