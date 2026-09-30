import { HeroSection } from '@/components/HeroSection';
import { NetworkIntro } from '@/components/NetworkIntro';
import { HowItWorks } from '@/components/HowItWorks';
import { PathwaysSection } from '@/components/PathwaysSection';
import { EcosystemSection } from '@/components/EcosystemSection';
import { ContactSection } from '@/components/ContactSection';

export default function Home() {
  return (
    <main id="main-content">
      <HeroSection />
      <NetworkIntro />
      <HowItWorks />
      <PathwaysSection />
      <EcosystemSection />
      <ContactSection />
    </main>
  );
}
