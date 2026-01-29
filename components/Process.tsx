'use client';

import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { 
  Search, Palette, Code, TestTube2, Rocket, Settings,
  ChevronRight, Clock, CheckCircle, Target, BarChart3, Shield, Calendar
} from 'lucide-react';
import { companyInfo } from '@/lib/constants';

export default function Process() {
  const { ref, inView } = useInView({
    threshold: 0.05,
    triggerOnce: true
  });

  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 1,
      icon: <Search className="w-5 h-5" />,
      title: 'Discovery',
      description: 'Analysis of requirements, goals, and technical architecture planning.',
      duration: '1-2 Weeks',
      color: '#4F46E5',
      deliverables: ['Project Scope', 'Technical Specs', 'Timeline']
    },
    {
      id: 2,
      icon: <Palette className="w-5 h-5" />,
      title: 'Design',
      description: 'Creating intuitive interfaces and experiences aligned with brand vision.',
      duration: '2-3 Weeks',
      color: '#10B981',
      deliverables: ['UI/UX Design', 'Prototypes', 'Style Guide']
    },
    {
      id: 3,
      icon: <Code className="w-5 h-5" />,
      title: 'Development',
      description: 'Agile development with clean code practices and continuous integration.',
      duration: '4-12 Weeks',
      color: '#F46530',
      deliverables: ['MVP', 'Weekly Updates', 'Code Repository']
    },
    {
      id: 4,
      icon: <TestTube2 className="w-5 h-5" />,
      title: 'Testing',
      description: 'Comprehensive testing for performance, security, and reliability.',
      duration: '1-2 Weeks',
      color: '#8B5CF6',
      deliverables: ['Test Reports', 'Bug Fixes', 'Performance Metrics']
    },
    {
      id: 5,
      icon: <Rocket className="w-5 h-5" />,
      title: 'Deployment',
      description: 'Seamless deployment with monitoring, documentation, and training.',
      duration: '1 Week',
      color: '#EC4899',
      deliverables: ['Live Product', 'Documentation', 'Client Training']
    },
    {
      id: 6,
      icon: <Settings className="w-5 h-5" />,
      title: 'Maintenance',
      description: 'Ongoing support, optimization, and feature enhancements.',
      duration: 'Ongoing',
      color: '#06B6D4',
      deliverables: ['Support', 'Updates', 'Analytics']
    }
  ];

  const benefits = [
    {
      title: 'Transparent Communication',
      description: 'Regular updates and full project visibility.'
    },
    {
      title: 'Quality Assurance',
      description: 'Comprehensive testing at every stage.'
    },
    {
      title: 'Client Collaboration',
      description: 'Involved throughout the process.'
    },
    {
      title: 'On-Time Delivery',
      description: '96% of projects delivered on schedule.'
    }
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-[1px]" style={{ backgroundColor: '#F46530' }} />
            <span className="text-xs font-semibold tracking-wide uppercase" style={{ color: '#2A2E30' }}>
              Our Process
            </span>
            <div className="w-6 h-[1px]" style={{ backgroundColor: '#F46530' }} />
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight" style={{ color: '#2A2E30' }}>
            Structured Development
            <span className="block mt-2" style={{ color: '#F46530' }}>Methodology</span>
          </h2>
          <p className="text-sm md:text-md opacity-70 max-w-3xl mx-auto" style={{ color: '#2A2E30' }}>
            A proven approach ensuring quality, transparency, and successful project delivery
          </p>
        </div>

        {/* Mobile-Friendly Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 md:mb-16">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-xl cursor-pointer ${
                activeStep === index ? 'ring-2 shadow-lg' : ''
              }`}
              style={{
                borderColor: activeStep === index ? step.color : 'rgba(42, 46, 48, 0.1)',
                backgroundColor: activeStep === index ? `${step.color}05` : '#ffffff'
              }}
              onClick={() => setActiveStep(index)}
            >
              {/* Card Content */}
              <div className="p-6">
                {/* Icon and Number */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                    activeStep === index ? 'scale-110' : ''
                  }`}
                  style={{
                    backgroundColor: `${step.color}15`,
                    color: step.color
                  }}>
                    {step.icon}
                  </div>
                  <div className="text-xs font-bold px-2 py-1 rounded-full" 
                       style={{ 
                         backgroundColor: 'rgba(42, 46, 48, 0.05)',
                         color: '#2A2E30'
                       }}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-2" style={{ color: '#2A2E30' }}>
                  {step.title}
                </h3>

                {/* Duration */}
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-3.5 h-3.5" style={{ color: step.color }} />
                  <span className="text-xs font-semibold opacity-70" style={{ color: '#2A2E30' }}>
                    {step.duration}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm opacity-70 mb-4 leading-relaxed" style={{ color: '#2A2E30' }}>
                  {step.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-2">
                  {step.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#10B981' }} />
                      <span className="text-xs opacity-70" style={{ color: '#2A2E30' }}>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Active Indicator */}
                {activeStep === index && (
                  <div className="absolute bottom-0 left-0 w-full h-1" 
                       style={{ backgroundColor: step.color }} />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-lg font-bold mb-6 md:mb-8" style={{ color: '#2A2E30' }}>
            Why It Works
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`p-5 rounded-xl border bg-white transition-all duration-300 hover:shadow-lg hover:border-gray-200 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
                style={{ 
                  borderColor: 'rgba(42, 46, 48, 0.08)',
                  transitionDelay: `${index * 50}ms`
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#F46530' }} />
                  <h4 className="text-sm font-semibold" style={{ color: '#2A2E30' }}>
                    {benefit.title}
                  </h4>
                </div>
                <p className="text-xs opacity-70" style={{ color: '#2A2E30' }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mb-12 md:mb-16" ref={ref}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { value: '98%', label: 'Success Rate', icon: <Target className="w-4 h-4" /> },
              { value: '4.9/5', label: 'Client Rating', icon: <BarChart3 className="w-4 h-4" /> },
              { value: '96%', label: 'On Time', icon: <Clock className="w-4 h-4" /> },
              { value: '50+', label: 'Projects', icon: <Shield className="w-4 h-4" /> },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-5 md:p-6 rounded-xl border bg-white text-center hover:shadow-lg transition-all"
                style={{ borderColor: 'rgba(42, 46, 48, 0.08)' }}
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div style={{ color: 'rgba(42, 46, 48, 0.4)' }}>
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl font-bold" style={{ color: '#2A2E30' }}>
                    {stat.value}
                  </div>
                </div>
                <div className="text-xs opacity-70" style={{ color: '#2A2E30' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-base mb-6 opacity-70" style={{ color: '#2A2E30' }}>
            Ready to start your project with our proven methodology?
          </p>
          <a
            href={companyInfo.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
            style={{ 
              backgroundColor: '#F46530', 
              color: '#FFFFFF'
            }}
          >
            <Calendar className="w-5 h-5" />
            <span>Book a Meeting</span>
          </a>
        </div>
      </div>
    </section>
  );
}
