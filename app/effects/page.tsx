'use client';

import PageHeader from '@/components/PageHeader';
import EffectsSection from '@/components/EffectsSection';
import Footer from '@/components/Footer';

export default function Effects() {
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
