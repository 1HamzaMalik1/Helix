'use client';

import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { 
  Search, Palette, Code, TestTube2, Rocket, Settings,
  Calendar, Clock, CheckCircle, Target, BarChart3, Shield, ArrowRight, Zap
} from 'lucide-react';
import { companyInfo } from '@/lib/constants';

export default function Process() {
  const { ref, inView } = useInView({
    threshold: 0.05,
    triggerOnce: true
  });

  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const processSteps = [
    {
      id: 1,
      icon: <Search className="w-5 h-5" />,
      title: 'Discovery',
      description: 'Analysis of requirements, goals, and technical architecture planning.',
      duration: '1-2 Weeks',
      color: '#4F46E5',
      deliverables: ['Project Scope', 'Technical Specs', 'Timeline'],
      benefit: 'Clear roadmap and expectations'
    },
    {
      id: 2,
      icon: <Palette className="w-5 h-5" />,
      title: 'Design',
      description: 'Creating intuitive interfaces and experiences aligned with brand vision.',
      duration: '2-3 Weeks',
      color: '#10B981',
      deliverables: ['UI/UX Design', 'Prototypes', 'Style Guide'],
      benefit: 'Visual blueprint for development'
    },
    {
      id: 3,
      icon: <Code className="w-5 h-5" />,
      title: 'Development',
      description: 'Agile development with clean code practices and continuous integration.',
      duration: '4-12 Weeks',
      color: '#F46530',
      deliverables: ['MVP', 'Weekly Updates', 'Code Repository'],
      benefit: 'High-quality, scalable code'
    },
    {
      id: 4,
      icon: <TestTube2 className="w-5 h-5" />,
      title: 'Testing',
      description: 'Comprehensive testing for performance, security, and reliability.',
      duration: '1-2 Weeks',
      color: '#8B5CF6',
      deliverables: ['Test Reports', 'Bug Fixes', 'Performance Metrics'],
      benefit: 'Bug-free, optimized product'
    },
    {
      id: 5,
      icon: <Rocket className="w-5 h-5" />,
      title: 'Deployment',
      description: 'Seamless deployment with monitoring, documentation, and training.',
      duration: '1 Week',
      color: '#EC4899',
      deliverables: ['Live Product', 'Documentation', 'Client Training'],
      benefit: 'Smooth go-live experience'
    },
    {
      id: 6,
      icon: <Settings className="w-5 h-5" />,
      title: 'Maintenance',
      description: 'Ongoing support, optimization, and feature enhancements.',
      duration: 'Ongoing',
      color: '#06B6D4',
      deliverables: ['Support', 'Updates', 'Analytics'],
      benefit: 'Continuous improvement'
    }
  ];

  // Auto-rotate active step
  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % processSteps.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [inView, processSteps.length]);

  const benefits = [
    {
      icon: <Target className="w-5 h-5" />,
      title: 'Transparent Communication',
      description: 'Regular updates and full project visibility',
      color: '#F46530'
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'Quality Assurance',
      description: 'Comprehensive testing at every stage',
      color: '#10B981'
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'Agile Approach',
      description: 'Flexible and iterative development',
      color: '#4F46E5'
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: 'On-Time Delivery',
      description: '96% of projects delivered on schedule',
      color: '#EC4899'
    }
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-x-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-full">
        
        {/* Section Header */}
        <div className="mb-12 text-center" ref={ref}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-[1px]" style={{ backgroundColor: '#F46530' }} />
            <span className="text-xs font-semibold tracking-wide uppercase" style={{ color: '#2A2E30' }}>
              Our Process
            </span>
            <div className="w-6 h-[1px]" style={{ backgroundColor: '#F46530' }} />
          </div>
          
          <h2 className={`text-3xl lg:text-4xl font-bold mb-6 leading-tight transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ color: '#2A2E30' }}>
            Structured Development
            <span className="block mt-2" style={{ color: '#F46530' }}>Methodology</span>
          </h2>
          
          <p className={`text-sm md:text-md opacity-70 max-w-3xl mx-auto transition-all duration-700 delay-100 ${
            inView ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ color: '#2A2E30' }}>
            A proven approach ensuring quality, transparency, and successful project delivery
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="mb-16 max-w-6xl mx-auto overflow-visible">
          {/* Progress Bar */}
          <div className="relative mb-12 px-4 md:px-6 py-4">
            <div className="absolute top-1/2 left-4 md:left-6 right-4 md:right-6 h-1 -translate-y-1/2" 
                 style={{ backgroundColor: 'rgba(42, 46, 48, 0.1)' }} />
            <div 
              className="absolute top-1/2 left-4 md:left-6 h-1 -translate-y-1/2 transition-all duration-1000"
              style={{ 
                backgroundColor: '#F46530',
                width: `${(activeStep / (processSteps.length - 1)) * 100}%`
              }}
            />
            
            {/* Step Indicators */}
            <div className="relative flex justify-between">
              {processSteps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className={`group relative flex flex-col items-center transition-all duration-300 ${
                    index <= activeStep ? 'scale-100' : 'scale-90'
                  }`}
                >
                  {/* Icon Circle */}
                  <div 
                    className={`w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mb-2 md:mb-3 transition-all duration-500 cursor-pointer ${
                      index === activeStep ? 'scale-110 md:scale-125 shadow-2xl' : 'scale-100 shadow-lg'
                    } ${hoveredStep === index ? 'scale-105 md:scale-110' : ''}`}
                    style={{
                      backgroundColor: index <= activeStep ? step.color : '#FFFFFF',
                      color: index <= activeStep ? '#FFFFFF' : step.color,
                      border: `3px solid ${index <= activeStep ? step.color : 'rgba(42, 46, 48, 0.2)'}`
                    }}
                  >
                    {step.icon}
                    
                    {/* Pulse Animation for Active Step */}
                    {index === activeStep && (
                      <div 
                        className="absolute inset-0 rounded-full animate-ping"
                        style={{ backgroundColor: step.color, opacity: 0.3 }}
                      />
                    )}
                  </div>
                  
                  {/* Step Number */}
                  <span 
                    className="text-xs font-bold mb-1 hidden md:block"
                    style={{ color: index <= activeStep ? step.color : '#2A2E30' }}
                  >
                    Step {index + 1}
                  </span>
                  
                  {/* Step Title */}
                  <span 
                    className={`text-[10px] md:text-xs lg:text-sm font-semibold transition-all duration-300 text-center ${
                      index === activeStep ? 'opacity-100 scale-100 md:scale-110' : 'opacity-70 scale-100'
                    }`}
                    style={{ color: '#2A2E30' }}
                  >
                    {step.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Step Details */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border-2 transition-all duration-500"
               style={{ borderColor: processSteps[activeStep].color }}>
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left: Main Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${processSteps[activeStep].color}15`,
                      color: processSteps[activeStep].color
                    }}
                  >
                    {processSteps[activeStep].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold" style={{ color: '#2A2E30' }}>
                      {processSteps[activeStep].title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-4 h-4" style={{ color: processSteps[activeStep].color }} />
                      <span className="text-sm font-semibold" style={{ color: processSteps[activeStep].color }}>
                        {processSteps[activeStep].duration}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-base leading-relaxed mb-6 opacity-70" style={{ color: '#2A2E30' }}>
                  {processSteps[activeStep].description}
                </p>

                {/* Benefit Badge */}
                <div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg mb-6"
                  style={{ 
                    backgroundColor: `${processSteps[activeStep].color}10`,
                    border: `1px solid ${processSteps[activeStep].color}30`
                  }}
                >
                  <CheckCircle className="w-4 h-4" style={{ color: processSteps[activeStep].color }} />
                  <span className="text-sm font-semibold" style={{ color: processSteps[activeStep].color }}>
                    {processSteps[activeStep].benefit}
                  </span>
                </div>
              </div>

              {/* Right: Deliverables */}
              <div className="md:w-64">
                <h4 className="text-sm font-bold mb-4 uppercase tracking-wide opacity-60" style={{ color: '#2A2E30' }}>
                  Deliverables
                </h4>
                <div className="space-y-3">
                  {processSteps[activeStep].deliverables.map((item, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:translate-x-2"
                      style={{ backgroundColor: 'rgba(42, 46, 48, 0.03)' }}
                    >
                      <div 
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: processSteps[activeStep].color }}
                      >
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium" style={{ color: '#2A2E30' }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-8 text-center" style={{ color: '#2A2E30' }}>
            Why Our Process Works
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`group relative bg-white p-6 rounded-xl border transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  borderColor: 'rgba(42, 46, 48, 0.08)',
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Hover Gradient */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${benefit.color}05 0%, transparent 100%)`
                  }}
                />
                
                <div className="relative z-10">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      backgroundColor: `${benefit.color}15`,
                      color: benefit.color
                    }}
                  >
                    {benefit.icon}
                  </div>
                  
                  <h4 className="text-sm font-bold mb-2" style={{ color: '#2A2E30' }}>
                    {benefit.title}
                  </h4>
                  
                  <p className="text-xs opacity-70 leading-relaxed" style={{ color: '#2A2E30' }}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { value: '98%', label: 'Success Rate', icon: <Target className="w-5 h-5" />, color: '#F46530' },
              { value: '4.9/5', label: 'Client Rating', icon: <BarChart3 className="w-5 h-5" />, color: '#10B981' },
              { value: '96%', label: 'On Time', icon: <Clock className="w-5 h-5" />, color: '#4F46E5' },
              { value: '50+', label: 'Projects', icon: <Shield className="w-5 h-5" />, color: '#EC4899' },
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white p-6 rounded-xl border text-center transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer overflow-hidden"
                style={{ borderColor: 'rgba(42, 46, 48, 0.08)' }}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${stat.color}05 0%, transparent 100%)`
                  }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-3">
                    <div style={{ color: stat.color }}>
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-2" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium opacity-70" style={{ color: '#2A2E30' }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-8 p-6 rounded-2xl border" 
               style={{ 
                 backgroundColor: 'rgba(244, 101, 48, 0.03)',
                 borderColor: 'rgba(244, 101, 48, 0.2)'
               }}>
            <p className="text-base mb-2 font-semibold" style={{ color: '#2A2E30' }}>
              Ready to start your project with our proven methodology?
            </p>
            <p className="text-sm opacity-70" style={{ color: '#2A2E30' }}>
              Schedule a consultation to discuss your requirements
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
    </section>
  );
}
