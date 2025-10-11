import { gyms } from '@/config/gyms';
import { notFound } from 'next/navigation';
import MenLPClient from './MenLPClient';

export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  return Object.keys(gyms).map((subdomain) => ({
    subdomain,
  }));
}

export default async function MenLPPage({
  params,
}: {
  params: Promise<{ subdomain: string }>;
}) {
  const { subdomain } = await params;
  const gym = gyms[subdomain];

  if (!gym) {
    notFound();
  }

  return <MenLPClient gym={gym} />;
}
