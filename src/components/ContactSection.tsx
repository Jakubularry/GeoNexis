import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-[#0F1F38]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Let's <span className="text-[#00B4D8]">Connect</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            <p className="text-gray-400 mb-8">
              Interested in collaborating on marine conservation or climate intelligence projects? Let's discuss how geospatial AI can advance your mission.
            </p>

            <div className="space-y-4">
              <a href="mailto:contact@geospatial-ai.com" className="flex items-center text-gray-300 hover:text-[#00B4D8] transition-colors">
                <Mail className="mr-3" size={20} />
                contact@geospatial-ai.com
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-[#00B4D8] transition-colors">
                <Linkedin className="mr-3" size={20} />
                LinkedIn Profile
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-[#00B4D8] transition-colors">
                <Github className="mr-3" size={20} />
                GitHub Repository
              </a>
              <div className="flex items-center text-gray-300">
                <MapPin className="mr-3" size={20} />
                San Francisco Bay Area
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-[#0A1628] p-8 rounded-xl border border-[#00B4D8]/20">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 bg-[#0F1F38] text-white rounded-lg border border-[#00B4D8]/20 focus:border-[#00B4D8] outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 bg-[#0F1F38] text-white rounded-lg border border-[#00B4D8]/20 focus:border-[#00B4D8] outline-none"
                required
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={5}
                className="w-full px-4 py-3 bg-[#0F1F38] text-white rounded-lg border border-[#00B4D8]/20 focus:border-[#00B4D8] outline-none resize-none"
                required
              />
            </div>
            <button type="submit" className="w-full px-6 py-3 bg-[#00B4D8] text-white rounded-lg font-semibold hover:bg-[#0096B8] transition-all flex items-center justify-center">
              <Send size={18} className="mr-2" />
              Send Message
            </button>
            {submitted && (
              <p className="text-[#00B4D8] text-center mt-4">Message sent successfully!</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
