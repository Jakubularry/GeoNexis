import React, { useState } from 'react';
import { ExternalLink, ChevronRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  impact?: string;
}

export default function ProjectCard({ title, category, description, image, tags, impact }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-[#0F1F38] rounded-xl overflow-hidden border border-[#00B4D8]/20 hover:border-[#00B4D8] transition-all duration-300 transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-[#0F1F38] via-[#0F1F38]/50 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-90' : 'opacity-60'}`}></div>
        <span className="absolute top-4 left-4 px-3 py-1 bg-[#00B4D8] text-white text-xs font-semibold rounded-full">
          {category}
        </span>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        
        {impact && (
          <div className="mb-4 p-3 bg-[#00B4D8]/10 border border-[#00B4D8]/30 rounded-lg">
            <p className="text-[#00B4D8] text-xs font-semibold">Impact: {impact}</p>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, idx) => (
            <span key={idx} className="px-2 py-1 bg-[#0A1628] text-gray-300 text-xs rounded border border-[#00B4D8]/20">
              {tag}
            </span>
          ))}
        </div>
        
        <button className="flex items-center text-[#00B4D8] hover:text-white transition-colors font-semibold text-sm">
          View Case Study <ChevronRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
}
