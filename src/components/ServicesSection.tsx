import React from 'react';
import { Layers, Cpu, Users } from 'lucide-react';

const services = [
  {
    icon: Layers,
    title: "Geospatial Analysis",
    description: "Advanced satellite imagery processing, multi-temporal analysis, and spatial modeling for marine and coastal environments",
    deliverables: [
      "Custom GIS workflows",
      "Change detection analysis",
      "Spatial data visualization",
      "Interactive mapping dashboards"
    ]
  },
  {
    icon: Cpu,
    title: "AI Model Development",
    description: "Custom machine learning solutions for environmental monitoring, predictive analytics, and automated feature extraction",
    deliverables: [
      "Deep learning models",
      "Computer vision pipelines",
      "Predictive algorithms",
      "Model deployment & optimization"
    ]
  },
  {
    icon: Users,
    title: "Strategic Consulting",
    description: "Expert guidance on geospatial AI strategy, technology selection, and implementation roadmaps for conservation organizations",
    deliverables: [
      "Technology assessments",
      "Strategic roadmaps",
      "Team training & workshops",
      "Implementation support"
    ]
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Services <span className="text-[#00B4D8]">Offered</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Comprehensive geospatial AI solutions tailored to your marine conservation and climate intelligence needs
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className="bg-[#0F1F38] p-8 rounded-xl border border-[#00B4D8]/20 hover:border-[#00B4D8] transition-all group">
                <div className="w-16 h-16 bg-[#00B4D8]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00B4D8]/20 transition-all">
                  <Icon className="text-[#00B4D8]" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <div className="space-y-2">
                  <p className="text-[#00B4D8] font-semibold text-sm mb-3">Key Deliverables:</p>
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#00B4D8] rounded-full mr-2"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
