import React from 'react';
import { Navbar } from '@/components/ui/navbar';
import { HeroSection } from '@/components/sections/hero-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { CreativePricingDemo } from '@/components/demo/creative-pricing-demo';
import { FooterDemo } from '@/components/demo/footer-demo';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <div className="py-24">
        <CreativePricingDemo />
      </div>
      <FooterDemo />
    </div>
  );
}

export default App;