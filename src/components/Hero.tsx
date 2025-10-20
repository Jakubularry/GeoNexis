import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A1628]">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://d64gsuwffb70l.cloudfront.net/68f57cec49d38ff134f9bf73_1760918824002_970b3ea9.webp" 
          alt="Satellite Earth View"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/50 via-[#0A1628]/70 to-[#0A1628]"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="inline-block px-4 py-2 bg-[#00B4D8]/10 border border-[#00B4D8]/30 rounded-full mb-6">
          <span className="text-[#00B4D8] text-sm font-mono">Geospatial AI • Marine Intelligence • Climate Tech</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Transforming Ocean Data<br />Into <span className="text-[#00B4D8]">Actionable Intelligence</span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          AI-powered geospatial analysis for marine conservation, climate resilience, and sustainable ocean management
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={scrollToProjects}
            className="px-8 py-4 bg-[#00B4D8] text-white rounded-lg font-semibold hover:bg-[#0096B8] transition-all transform hover:scale-105"
          >
            View Projects
          </button>
          <button 
            onClick={scrollToContact}
            className="px-8 py-4 bg-transparent border-2 border-[#00B4D8] text-[#00B4D8] rounded-lg font-semibold hover:bg-[#00B4D8]/10 transition-all"
          >
            Get In Touch
          </button>
        </div>
      </div>
      
      <button 
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#00B4D8] animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </div>
  );
}
