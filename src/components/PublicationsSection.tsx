import React from 'react';
import { FileText, Download, ExternalLink } from 'lucide-react';

const publications = [
  {
    year: "2025",
    title: "Deep Learning for Coral Reef Monitoring: A Multi-Sensor Approach",
    journal: "Remote Sensing of Environment",
    type: "Journal Article",
    link: "#"
  },
  {
    year: "2024",
    title: "AI-Driven Climate Prediction Models for Coastal Resilience",
    journal: "Nature Climate Change",
    type: "Research Paper",
    link: "#"
  },
  {
    year: "2024",
    title: "Automated Marine Debris Detection Using Satellite Imagery",
    journal: "IEEE Geoscience and Remote Sensing",
    type: "Conference Paper",
    link: "#"
  },
  {
    year: "2023",
    title: "Geospatial AI for Ocean Conservation",
    journal: "TEDx Marine Science Summit",
    type: "Keynote",
    link: "#"
  }
];

export default function PublicationsSection() {
  return (
    <section className="py-20 bg-[#0F1F38]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Publications & <span className="text-[#00B4D8]">Speaking</span>
        </h2>

        <div className="space-y-6">
          {publications.map((pub, idx) => (
            <div key={idx} className="bg-[#0A1628] p-6 rounded-xl border border-[#00B4D8]/20 hover:border-[#00B4D8] transition-all group">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex-1 mb-4 md:mb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-[#00B4D8]/10 text-[#00B4D8] text-xs font-semibold rounded-full">
                      {pub.year}
                    </span>
                    <span className="px-3 py-1 bg-[#0F1F38] text-gray-400 text-xs rounded-full border border-[#00B4D8]/20">
                      {pub.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#00B4D8] transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{pub.journal}</p>
                </div>
                <div className="flex gap-2">
                  <a href={pub.link} className="p-2 bg-[#0F1F38] rounded-lg hover:bg-[#00B4D8]/20 transition-all">
                    <Download className="text-[#00B4D8]" size={18} />
                  </a>
                  <a href={pub.link} className="p-2 bg-[#0F1F38] rounded-lg hover:bg-[#00B4D8]/20 transition-all">
                    <ExternalLink className="text-[#00B4D8]" size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
