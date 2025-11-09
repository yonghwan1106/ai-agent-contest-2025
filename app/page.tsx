'use client';

import { useEffect } from 'react';
import Hero from '@/components/Hero';
import ProcessTimeline from '@/components/ProcessTimeline';
import ChatSimulator from '@/components/ChatSimulator';
import EffectsSection from '@/components/EffectsSection';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    // 페이지 로드 시 스크롤을 맨 위로 이동
    window.scrollTo(0, 0);

    // 브라우저의 스크롤 복원 비활성화
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <ProcessTimeline />
      <ChatSimulator />
      <EffectsSection />
      <Footer />
    </main>
  );
}
