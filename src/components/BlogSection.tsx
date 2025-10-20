import React from 'react';
import { Clock, Calendar } from 'lucide-react';
import { blogPosts } from '../data/blog';

export default function BlogSection() {
  return (
    <section className="py-20 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Insights & <span className="text-[#00B4D8]">Research</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Latest thoughts on geospatial AI, marine technology, and climate intelligence
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-[#0F1F38] rounded-xl overflow-hidden border border-[#00B4D8]/20 hover:border-[#00B4D8] transition-all group cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-4 right-4 px-3 py-1 bg-[#00B4D8] text-white text-xs font-semibold rounded-full">
                  {post.category}
                </span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-gray-400 text-xs mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00B4D8] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
