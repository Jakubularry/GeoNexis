import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function ProjectShowcase() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Marine Conservation', 'Climate Modeling', 'Disaster Response', 'Ocean Mapping'];


  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-[#00B4D8]">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cutting-edge geospatial AI solutions driving marine conservation and climate resilience
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === cat
                  ? 'bg-[#00B4D8] text-white'
                  : 'bg-[#0F1F38] text-gray-400 hover:bg-[#00B4D8]/20 border border-[#00B4D8]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
