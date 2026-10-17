'use client';
import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ConsultationModal from '@/components/ui/ConsultationModal';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

const articles = [
  {
    title: 'Top 5 Causes of Endoscope Damage & How Hospitals Can Prevent Them',
    category: 'Endoscopy Maintenance',
    date: 'October 12, 2024',
    readTime: '5 min read',
    img: '/images/flexible-endoscope.webp',
    excerpt: 'Prevent fluid invasion, bending rubber punctures, and channel crimps with these evidence-based handling protocols for biomedical teams.',
    author: 'Biomedical Engineering Team'
  },
  {
    title: 'Why Genuine OEM Parts Matter for Karl Storz & Olympus Repairs',
    category: 'Quality Standards',
    date: 'September 28, 2024',
    readTime: '4 min read',
    img: '/images/storz-equipment.webp',
    excerpt: 'How counterfeit or substandard optical components reduce surgical visibility, void warranties, and increase long-term hospital maintenance expenses.',
    author: 'Senior Technical Lead'
  },
  {
    title: 'Extending Ultrasound Transducer Lifespan: Lens & Cable Care Guide',
    category: 'Ultrasound Diagnostics',
    date: 'September 15, 2024',
    readTime: '6 min read',
    img: '/images/ultrasound-probe.webp',
    excerpt: 'Detailed guide on preventing delamination, acoustic lens degradation, and strain relief cracking in high-frequency hospital probes.',
    author: 'Ultrasound Specialist'
  },
  {
    title: 'Understanding AMC vs. PPM: Maximizing Hospital Uptime Across the UAE',
    category: 'Hospital Operations',
    date: 'August 30, 2024',
    readTime: '7 min read',
    img: '/images/technician-repair.webp',
    excerpt: 'A comprehensive operational comparison between Annual Maintenance Contracts and Periodic Preventive Maintenance for clinical facilities.',
    author: 'Operations Director'
  }
];

export default function BlogPage() {
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#06162d]">
      <Header theme="dark" active="blog" />

      <main className="flex-grow">
        {/* Hero Header */}
        <section className="pt-12 pb-20 bg-gradient-to-b from-[#0c2b57] to-[#06162d] text-center text-white px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-sky-400 uppercase">
              BIOMEDICAL INSIGHTS & UPDATES
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Clinical Engineering <span className="text-sky-400">& Tech Articles</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Stay informed with the latest insights, best practices, and equipment care strategies from certified biomedical specialists at AJ Medical.
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 bg-slate-50 text-[#06162d] rounded-t-[3rem]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {articles.map((post, idx) => (
                <article
                  key={idx}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={post.img}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#06162d]/90 backdrop-blur-md text-sky-400 text-xs font-bold px-3 py-1 rounded-full">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-7 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-3 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar size={13} /> {post.date}
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Clock size={13} /> {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-[#06162d] mb-3 group-hover:text-sky-600 transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
                        <User size={14} className="text-sky-600" /> {post.author}
                      </span>
                      <button
                        onClick={() => setIsConsultOpen(true)}
                        className="text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1"
                      >
                        <span>Read Full Guide</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer showNewsletter={false} />

      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
        initialService="Biomedical Technical Inquiries"
      />
    </div>
  );
}
