'use client';

import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Gamepad2, Globe, Brain, Megaphone, Code, Smartphone, ShoppingCart, Bot, Cog, Calendar, ChevronDown, Check, ArrowRight } from 'lucide-react';
import { services, companyInfo } from '@/lib/constants';

const iconMap = {
  Gamepad2,
  Globe,
  Brain,
  Megaphone,
  Code,
  Smartphone,
  ShoppingCart,
  Bot,
  Cog
};

export default function Services() {
  const { ref, inView } = useInView({
    threshold: 0.05,
    triggerOnce: true
  });

  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-x-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-full">

        {/* Section Header */}
        <div className="mb-12 text-center" ref={ref}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-[1px]" style={{ backgroundColor: '#F46530' }} />
            <span className="text-xs font-semibold tracking-wide uppercase" style={{ color: '#2A2E30' }}>
              Our Services
            </span>
            <div className="w-6 h-[1px]" style={{ backgroundColor: '#F46530' }} />
          </div>

          <h2 className={`text-3xl lg:text-4xl font-bold mb-6 leading-tight transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ color: '#2A2E30' }}>
            Professional Development
            <span className="block mt-2" style={{ color: '#F46530' }}>Solutions That Scale</span>
          </h2>

          <p className={`text-sm md:text-md opacity-70 max-w-3xl mx-auto transition-all duration-700 delay-100 ${
            inView ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ color: '#2A2E30' }}>
            Comprehensive technology services designed to accelerate your business growth
          </p>
        </div>

        {/* Interactive Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 w-full">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const isExpanded = expandedCard === index;
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={service.title}
                className={`group relative bg-white rounded-2xl border transition-all duration-700 cursor-pointer ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${isExpanded ? 'md:col-span-2 lg:col-span-1 shadow-2xl' : 'hover:shadow-xl'}`}
                style={{ 
                  borderColor: isHovered || isExpanded ? '#F46530' : 'rgba(42, 46, 48, 0.08)',
                  transitionDelay: `${index * 100}ms`,
                  transform: isHovered ? 'translateY(-8px)' : 'translateY(0)'
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => toggleCard(index)}
              >
                {/* Gradient Overlay on Hover */}
                <div 
                  className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
                    isHovered || isExpanded ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    background: 'linear-gradient(135deg, rgba(244, 101, 48, 0.03) 0%, rgba(244, 101, 48, 0.01) 100%)'
                  }}
                />

                {/* Animated Corner Accent */}
                <div 
                  className={`absolute top-0 right-0 w-20 h-20 rounded-bl-full transition-all duration-500 ${
                    isHovered || isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                  }`}
                  style={{
                    background: 'radial-gradient(circle at top right, rgba(244, 101, 48, 0.1), transparent)'
                  }}
                />

                <div className="relative z-10 p-4 md:p-6">
                  {/* Icon with Pulsing Effect */}
                  <div className="mb-4 relative">
                    <div 
                      className={`absolute inset-0 rounded-lg transition-all duration-500 ${
                        isHovered ? 'animate-pulse' : ''
                      }`}
                      style={{
                        backgroundColor: 'rgba(244, 101, 48, 0.1)',
                        filter: 'blur(12px)'
                      }}
                    />
                    <div 
                      className={`relative inline-flex p-4 rounded-lg transition-all duration-300 ${
                        isHovered || isExpanded ? 'scale-110 rotate-3' : 'scale-100 rotate-0'
                      }`}
                      style={{
                        backgroundColor: isHovered || isExpanded ? 'rgba(244, 101, 48, 0.15)' : 'rgba(244, 101, 48, 0.08)',
                        color: '#F46530'
                      }}
                    >
                      {Icon && <Icon className="w-7 h-7" />}
                    </div>
                  </div>

                  {/* Title with Animated Underline */}
                  <div className="mb-3">
                    <h3 className="text-lg font-bold mb-1 relative inline-block" style={{ color: '#2A2E30' }}>
                      {service.title}
                      <span 
                        className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-500 ${
                          isHovered || isExpanded ? 'w-full' : 'w-0'
                        }`}
                        style={{ backgroundColor: '#F46530' }} 
                      />
                    </h3>
                    {(isHovered || isExpanded) && (
                      <div className="inline-flex items-center gap-1 ml-2">
                        <div 
                          className="w-2 h-2 rounded-full animate-ping"
                          style={{ backgroundColor: '#F46530' }}
                        />
                        <span className="text-xs font-semibold" style={{ color: '#F46530' }}>
                          Popular
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm mb-4 leading-relaxed opacity-70 transition-opacity duration-300" 
                     style={{ color: '#2A2E30' }}>
                    {service.description}
                  </p>

                  {/* Features - Always Visible */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.slice(0, isExpanded ? service.features.length : 3).map((feature, idx) => (
                      <span
                        key={feature}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                          isHovered ? 'scale-105' : 'scale-100'
                        }`}
                        style={{
                          backgroundColor: idx === 0 ? 'rgba(244, 101, 48, 0.1)' : 'rgba(42, 46, 48, 0.05)',
                          border: `1px solid ${idx === 0 ? 'rgba(244, 101, 48, 0.2)' : 'rgba(42, 46, 48, 0.1)'}`,
                          color: idx === 0 ? '#F46530' : '#2A2E30'
                        }}
                      >
                        <Check className="w-3 h-3" />
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Expanded Details */}
                  <div 
                    className={`overflow-hidden transition-all duration-500 ${
                      isExpanded ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pt-4 border-t" style={{ borderColor: 'rgba(42, 46, 48, 0.1)' }}>
                      <h4 className="text-sm font-semibold mb-3" style={{ color: '#2A2E30' }}>
                        What's Included:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li 
                            key={idx}
                            className="flex items-start gap-2 text-xs opacity-70"
                            style={{ color: '#2A2E30' }}
                          >
                            <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#10B981' }} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Quick CTA in Expanded State */}
                      <a
                        href={companyInfo.calendlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:gap-3"
                        style={{ 
                          backgroundColor: '#F46530', 
                          color: '#FFFFFF'
                        }}
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Discuss This Service</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Expand/Collapse Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCard(index);
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2 text-sm font-semibold rounded-lg transition-all duration-300 hover:bg-gray-50"
                    style={{ color: '#F46530' }}
                  >
                    <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </button>
                </div>

                {/* Interactive Shimmer Effect */}
                {isHovered && (
                  <div 
                    className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
                  >
                    <div 
                      className="absolute inset-0 opacity-30"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(244, 101, 48, 0.3), transparent)',
                        animation: 'shimmer 2s infinite',
                        transform: 'translateX(-100%)'
                      }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-700 delay-300 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-2xl mx-auto mb-8 p-6 rounded-2xl border" 
               style={{ 
                 backgroundColor: 'rgba(244, 101, 48, 0.03)',
                 borderColor: 'rgba(244, 101, 48, 0.2)'
               }}>
            <p className="text-base mb-2 font-semibold" style={{ color: '#2A2E30' }}>
              Ready to discuss your project?
            </p>
            <p className="text-sm opacity-70" style={{ color: '#2A2E30' }}>
              Get a detailed technical proposal within 24 hours
            </p>
          </div>
          
          <a
            href={companyInfo.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105"
            style={{ 
              backgroundColor: '#F46530', 
              color: '#FFFFFF'
            }}
          >
            <Calendar className="w-5 h-5" />
            <span>Book a Meeting</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}
