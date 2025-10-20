import React, { useState } from 'react';
import { Waves, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/95 backdrop-blur-sm border-b border-[#00B4D8]/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollTo('hero')} className="flex items-center">
            <Waves className="text-[#00B4D8] mr-2" size={28} />
            <span className="text-white font-bold text-xl">GeoAI Marine</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('projects')} className="text-gray-300 hover:text-[#00B4D8] transition-colors">Projects</button>
            <button onClick={() => scrollTo('expertise')} className="text-gray-300 hover:text-[#00B4D8] transition-colors">Expertise</button>
            <button onClick={() => scrollTo('services')} className="text-gray-300 hover:text-[#00B4D8] transition-colors">Services</button>
            <button onClick={() => scrollTo('contact')} className="px-6 py-2 bg-[#00B4D8] text-white rounded-lg hover:bg-[#0096B8] transition-all">Contact</button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <button onClick={() => scrollTo('projects')} className="block w-full text-left text-gray-300 hover:text-[#00B4D8] transition-colors">Projects</button>
            <button onClick={() => scrollTo('expertise')} className="block w-full text-left text-gray-300 hover:text-[#00B4D8] transition-colors">Expertise</button>
            <button onClick={() => scrollTo('services')} className="block w-full text-left text-gray-300 hover:text-[#00B4D8] transition-colors">Services</button>
            <button onClick={() => scrollTo('contact')} className="block w-full text-left px-6 py-2 bg-[#00B4D8] text-white rounded-lg hover:bg-[#0096B8] transition-all">Contact</button>
          </div>
        )}
      </div>
    </nav>
  );
}
