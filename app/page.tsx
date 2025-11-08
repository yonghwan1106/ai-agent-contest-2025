import Hero from '@/components/Hero';
import ProcessTimeline from '@/components/ProcessTimeline';
import ChatSimulator from '@/components/ChatSimulator';
import EffectsSection from '@/components/EffectsSection';
import Footer from '@/components/Footer';

export default function Home() {
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
