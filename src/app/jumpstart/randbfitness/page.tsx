import { getGymBySubdomain } from '@/config/gyms';
import { notFound } from 'next/navigation';
import JumpstartClient from './JumpstartClient';

export const dynamic = 'force-dynamic';

export default function JumpstartPage() {
  const gym = getGymBySubdomain('randbfitness');

  if (!gym) {
    notFound();
  }

  return <JumpstartClient gym={gym} />;
}
