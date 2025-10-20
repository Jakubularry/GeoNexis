import React from 'react';
import { Waves, Mail, Linkedin, Github, Twitter } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A1628] border-t border-[#00B4D8]/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Waves className="text-[#00B4D8] mr-2" size={28} />
              <span className="text-white font-bold text-xl">GeoAI Marine</span>
            </div>
            <p className="text-gray-400 text-sm">
              Transforming ocean data into actionable intelligence through cutting-edge geospatial AI
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Geospatial Analysis</a></li>
              <li><a href="#" className="hover:text-[#00B4D8] transition-colors">AI Model Development</a></li>
              <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Strategic Consulting</a></li>
              <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Training & Workshops</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Publications</a></li>
              <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#00B4D8] transition-colors">Documentation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              <a href="mailto:contact@geospatial-ai.com" className="p-2 bg-[#0F1F38] rounded-lg hover:bg-[#00B4D8]/20 transition-all">
                <Mail className="text-[#00B4D8]" size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#0F1F38] rounded-lg hover:bg-[#00B4D8]/20 transition-all">
                <Linkedin className="text-[#00B4D8]" size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#0F1F38] rounded-lg hover:bg-[#00B4D8]/20 transition-all">
                <Github className="text-[#00B4D8]" size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#0F1F38] rounded-lg hover:bg-[#00B4D8]/20 transition-all">
                <Twitter className="text-[#00B4D8]" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#00B4D8]/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Geospatial AI Marine Intelligence. All rights reserved.
          </p>
          <button onClick={scrollToTop} className="text-[#00B4D8] hover:text-white transition-colors text-sm font-semibold">
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
