'use client';

import { useEffect } from 'react';
import PageHeader from '@/components/PageHeader';
import EffectsSection from '@/components/EffectsSection';
import Footer from '@/components/Footer';

export default function Effects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      <PageHeader
        title="기대효과"
        subtitle="실질적이고 측정 가능한 가치 창출"
      />
      <EffectsSection />
      <Footer />
    </main>
  );
}
