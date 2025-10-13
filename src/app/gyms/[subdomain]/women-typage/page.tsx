import { gyms } from '@/config/gyms';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import WomenTYClient from './WomenTYClient';

export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  return Object.keys(gyms).map((subdomain) => ({
    subdomain,
  }));
}

export default async function WomenTYPage({
  params,
}: {
  params: Promise<{ subdomain: string }>;
}) {
  const { subdomain } = await params;
  const gym = gyms[subdomain];

  if (!gym) {
    notFound();
  }

  return (
    <>
      {/* Meta Pixel Script */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '754227894282620');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=754227894282620&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
      <WomenTYClient gym={gym} />
    </>
  );
}
