'use client';

import { useInView } from 'react-intersection-observer';
import { Gamepad2, Globe, Brain, Megaphone, Code, Smartphone, ArrowRight, Zap, Sparkles } from 'lucide-react';
import { services } from '@/lib/constants';

const iconMap = {
  Gamepad2,
  Globe,
  Brain,
  Megaphone,
  Code,
  Smartphone
};

export default function Services() {
  const { ref, inView } = useInView({
    threshold: 0.05,
    triggerOnce: true
  });

  const techKeywords = [
    'React', 'Unity', 'Node.js', 'Python', 'AI/ML', 'AWS', 'Docker', 'Flutter',
    'TypeScript', 'Three.js', 'Next.js', 'TensorFlow', 'Firebase', 'MongoDB'
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[1px]" style={{ backgroundColor: '#F46530' }} />
            <span className="text-xs font-semibold tracking-wide uppercase" style={{ color: '#F46530' }}>
              Services
            </span>
          </div>

          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight" style={{ color: '#2A2E30' }}>
              <span className="relative">
                <span className="relative z-10">Technical Excellence</span>
                <div className="absolute -bottom-1 left-0 w-20 h-1 rounded-full" style={{ backgroundColor: '#F46530' }} />
              </span>
            </h2>

            <p className="text-sm md:text-md opacity-70" style={{ color: '#2A2E30' }}>
              Cutting-edge solutions built with precision engineering and innovative technology.
            </p>
          </div>
        </div>

        {/* Tech Keywords Scroller */}
        <div className="mb-12 overflow-hidden">
          <div className="flex space-x-6 animate-marquee">
            {[...techKeywords, ...techKeywords].map((keyword, idx) => (
              <div
                key={idx}
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap backdrop-blur-sm"
                style={{
                  color: '#FFFFFF',
                  backgroundColor: 'rgba(42, 46, 48, 0.9)'
                }}
              >
                <div className="w-1.5 h-1.5 rounded-full mr-2 animate-pulse" style={{ backgroundColor: '#F46530' }} />
                {keyword}
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Services Grid */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={service.title}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Card Background Layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 rounded-2xl" />

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-transparent via-gray-200 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-white rounded-2xl" />
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{
                        backgroundColor: '#F46530',
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${i * 100}ms`
                      }}
                    />
                  ))}
                </div>

                {/* Card Content */}
                <div className="relative z-10 p-8">
                  {/* Icon Container with Glow Effect */}
                  <div className="relative mb-6">
                    <div className="absolute -inset-4 bg-gradient-to-br from-[#F46530]/20 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                      <div className="inline-flex p-4 rounded-xl border backdrop-blur-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                        style={{
                          backgroundColor: 'rgba(244, 101, 48, 0.08)',
                          borderColor: 'rgba(244, 101, 48, 0.2)',
                          color: '#F46530'
                        }}>
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Service Title with Underline */}
                  <h3 className="text-lg font-semibold mb-4 relative inline-block"
                    style={{ color: '#2A2E30' }}>
                    {service.title}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-500 ease-out"
                      style={{ backgroundColor: '#F46530' }} />
                  </h3>

                  {/* Description */}
                  <p className="text-sm mb-6 leading-relaxed opacity-80" style={{ color: '#2A2E30' }}>
                    {service.description}
                  </p>

                  {/* Tech Tags with Hover Effect */}
                  <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <span
                          key={feature}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 group-hover:translate-y-0.5"
                          style={{
                            backgroundColor: idx === 0 ? 'rgba(244, 101, 48, 0.1)' : 'rgba(42, 46, 48, 0.05)',
                            border: `1px solid ${idx === 0 ? 'rgba(244, 101, 48, 0.2)' : 'rgba(42, 46, 48, 0.1)'}`,
                            color: idx === 0 ? '#F46530' : '#2A2E30'
                          }}
                        >
                          {idx === 0 && (
                            <Sparkles className="w-3 h-3" />
                          )}
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Button */}
                  <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'rgba(42, 46, 48, 0.1)' }}>
                    <span className="text-xs font-medium opacity-60" style={{ color: '#2A2E30' }}>
                      {index === 1 ? 'High Demand' : index === 2 ? 'Growing' : 'Core Service'}
                    </span>

                    <button
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 group/btn opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
                      style={{
                        backgroundColor: '#F46530',
                        color: '#FFFFFF'
                      }}
                    >
                      <span>Discuss</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-[#F46530]/10 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 w-16 h-16 overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-8 h-8 bg-gradient-to-tr from-[#2A2E30]/5 to-transparent" />
                </div>
              </div>
            );
          })}
        </div>
        {/* Enhanced CTA */}
        <div className="mt-20 text-center">
          <div className="relative inline-block">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#F46530]/20 to-transparent rounded-2xl blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500" />

            {/* CTA Button */}
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl flex items-center gap-3 mx-auto"
              style={{
                backgroundColor: '#F46530',
                color: '#FFFFFF'
              }}
            >
              <span>Schedule Consultation</span>
              <div className="relative">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <ArrowRight className="absolute top-0 left-0 w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
              </div>
            </button>
          </div>

          {/* Supporting Text */}
          <p className="mt-6 text-sm opacity-70 max-w-md mx-auto" style={{ color: '#2A2E30' }}>
            Get a detailed technical proposal within 24 hours
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
          display: flex;
          width: max-content;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .group:hover .floating-icon {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}