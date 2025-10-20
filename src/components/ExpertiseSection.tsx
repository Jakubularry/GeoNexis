import React from 'react';
import { Brain, Satellite, Database, Map, TrendingUp, Shield } from 'lucide-react';

const skills = [
  { name: "Machine Learning & AI", level: 95, icon: Brain },
  { name: "Satellite Remote Sensing", level: 92, icon: Satellite },
  { name: "Geospatial Analysis (GIS)", level: 98, icon: Map },
  { name: "Big Data Processing", level: 88, icon: Database },
  { name: "Climate Modeling", level: 90, icon: TrendingUp },
  { name: "Environmental Security", level: 85, icon: Shield }
];

const technologies = [
  "Python", "TensorFlow", "PyTorch", "QGIS", "ArcGIS", "Google Earth Engine",
  "Sentinel Hub", "PostgreSQL/PostGIS", "Docker", "AWS", "Kubernetes", "GDAL"
];

export default function ExpertiseSection() {
  return (
    <section className="py-20 bg-[#0F1F38]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Technical <span className="text-[#00B4D8]">Expertise</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div key={idx} className="bg-[#0A1628] p-6 rounded-xl border border-[#00B4D8]/20">
                <div className="flex items-center mb-3">
                  <Icon className="text-[#00B4D8] mr-3" size={24} />
                  <span className="text-white font-semibold">{skill.name}</span>
                  <span className="ml-auto text-[#00B4D8] font-mono">{skill.level}%</span>
                </div>
                <div className="w-full bg-[#0F1F38] rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-[#00B4D8] to-[#0096B8] h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-[#0A1628] p-8 rounded-xl border border-[#00B4D8]/20">
          <h3 className="text-2xl font-bold text-white mb-6">Technology Stack</h3>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, idx) => (
              <span key={idx} className="px-4 py-2 bg-[#0F1F38] text-gray-300 rounded-lg border border-[#00B4D8]/30 hover:border-[#00B4D8] hover:text-[#00B4D8] transition-all">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
