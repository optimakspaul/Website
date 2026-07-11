import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PainPointsSection from '@/components/PainPointsSection';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import PainPointMenuSection from '@/components/PainPointMenuSection';
import AssistantShowcase from '@/components/AssistantShowcase';
import PricingSection from '@/components/PricingSection';
import IndustriesSection from '@/components/IndustriesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import WorkflowCheck from '@/components/WorkflowCheck';
import TrustSection from '@/components/TrustSection';
import FaqSection from '@/components/FaqSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <HeroSection />
        <PainPointsSection />
        <BeforeAfterSection />
        <PainPointMenuSection />
        <AssistantShowcase />
        <IndustriesSection />
        <HowItWorksSection />
        <PricingSection />
        <WorkflowCheck />
        <TrustSection />
        <FaqSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
