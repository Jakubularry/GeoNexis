import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The geospatial AI models developed transformed our marine conservation efforts. We can now monitor coral health at unprecedented scale and accuracy.",
    author: "Dr. Sarah Chen",
    role: "Director of Marine Research",
    organization: "Ocean Conservation Institute"
  },
  {
    quote: "Outstanding work on our climate resilience project. The predictive models have been instrumental in our coastal adaptation planning.",
    author: "Michael Torres",
    role: "Climate Program Manager",
    organization: "Global Environmental Fund"
  },
  {
    quote: "Exceptional expertise in satellite remote sensing. The analysis provided critical insights for our disaster response operations.",
    author: "Dr. Amara Okafor",
    role: "Emergency Response Coordinator",
    organization: "UN Humanitarian Affairs"
  }
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-[#0F1F38]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Client <span className="text-[#00B4D8]">Testimonials</span>
        </h2>

        <div className="relative bg-[#0A1628] p-10 rounded-xl border border-[#00B4D8]/20">
          <Quote className="text-[#00B4D8] opacity-20 absolute top-6 left-6" size={48} />
          
          <div className="relative z-10">
            <p className="text-gray-300 text-lg mb-6 italic">"{testimonials[current].quote}"</p>
            <div>
              <p className="text-white font-bold">{testimonials[current].author}</p>
              <p className="text-[#00B4D8] text-sm">{testimonials[current].role}</p>
              <p className="text-gray-400 text-sm">{testimonials[current].organization}</p>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="p-2 bg-[#00B4D8]/10 hover:bg-[#00B4D8]/20 rounded-full transition-all">
              <ChevronLeft className="text-[#00B4D8]" />
            </button>
            <button onClick={next} className="p-2 bg-[#00B4D8]/10 hover:bg-[#00B4D8]/20 rounded-full transition-all">
              <ChevronRight className="text-[#00B4D8]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
