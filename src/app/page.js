import dynamic from 'next/dynamic';
import HomeBanner from '@/components/home/HomeBanner';

// Dynamically import components
const ScrollHome = dynamic(() => import('@/components/home/ScrollHome'), {
  ssr: false, // Optional: If you want to disable SSR for this component
  loading: () => <p>Loading...</p> // Optional: Loading component
});

const TrustedPartners = dynamic(() => import('@/components/home/TrustedPartners'), {
  ssr: false, // Optional: If you want to disable SSR for this component
  loading: () => <p>Loading...</p> // Optional: Loading component
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
