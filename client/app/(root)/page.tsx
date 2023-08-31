import { Blog, Features, Testimonials } from '@/components/home';
// import { getCampaigns } from '@/lib/contract';

export default async function HomePage() {
  // const campaigns = await getCampaigns();
  return (
    <>
      <Features />
      <Testimonials />
      <Blog />
      {/* <Campaigns /> */}
    </>
  );
}
