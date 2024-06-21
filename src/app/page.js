import dynamic from 'next/dynamic';
import HomeBanner from '@/components/home/HomeBanner';

// Dynamically import components
const ScrollHome = dynamic(() => import('@/components/home/ScrollHome'), {
   loading: () => <p>Loading...</p>
});

const TrustedPartners = dynamic(() => import('@/components/home/TrustedPartners'), {
   loading: () => <p>Loading...</p>
});

export default function Home() {
  return (
    <>
      <HomeBanner />
      <TrustedPartners />
      <ScrollHome />
    </>
  );
}
