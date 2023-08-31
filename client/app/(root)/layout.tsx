import { Footer, Header, Navbar } from '@/components/shared';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <Header />
      <main className='flex-1'>{children}</main>
      <Footer />
    </>
  );
}