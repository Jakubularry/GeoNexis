import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import ProjectShowcase from './ProjectShowcase';
import ExpertiseSection from './ExpertiseSection';
import ServicesSection from './ServicesSection';
import PublicationsSection from './PublicationsSection';
import TestimonialsSection from './TestimonialsSection';
import BlogSection from './BlogSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A1628]">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <div id="projects">
        <ProjectShowcase />
      </div>
      <div id="expertise">
        <ExpertiseSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <PublicationsSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default AppLayout;

