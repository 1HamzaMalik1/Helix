'use client';

import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { Linkedin, Github, Award, BookOpen, Briefcase, Zap, Cpu, Sparkles, ChevronRight, Star, Target, Users, Globe } from 'lucide-react';
import { companyInfo, teamMembers } from '@/lib/constants';
import Image from 'next/image';

export default function Team() {
  const { ref, inView } = useInView({
    threshold: 0.05,
    triggerOnce: true
  });

  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const [activeStat, setActiveStat] = useState(0);

  const stats = [
    { value: '5+', label: 'Years Experience', icon: <Zap className="w-4 h-4" />, color: '#F46530' },
    { value: '50+', label: 'Projects Delivered', icon: <Target className="w-4 h-4" />, color: '#2A2E30' },
    { value: '100%', label: 'Client Satisfaction', icon: <Star className="w-4 h-4" />, color: '#F46530' },
    { value: '10+', label: 'Technologies', icon: <Cpu className="w-4 h-4" />, color: '#2A2E30' },
  ];

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setActiveStat((prev) => (prev + 1) % stats.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <section id="team" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center relative">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[2px]" style={{ backgroundColor: '#F46530' }} />
            <span className="text-xs font-semibold tracking-wide uppercase" style={{ color: '#F46530' }}>
              Leadership Excellence
            </span>
            <div className="w-12 h-[2px]" style={{ backgroundColor: '#F46530' }} />
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{ color: '#2A2E30' }}>
            Meet Our
            <span className="block mt-2" style={{ color: '#F46530' }}>Technical Architect</span>
          </h2>

          <p className="text-base md:text-lg opacity-70 max-w-3xl mx-auto" style={{ color: '#2A2E30' }}>
            Led by industry veteran {companyInfo.ceo} with {companyInfo.experience} of 
            delivering exceptional digital solutions to clients worldwide.
          </p>
        </div>

        {/* Featured Leader Profile */}
        <div ref={ref} className="mb-16 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              onMouseEnter={() => setHoveredMember(member.name)}
              onMouseLeave={() => setHoveredMember(null)}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl p-[2px]">
                <div className={`absolute inset-0 rounded-3xl transition-all duration-500 ${
                  hoveredMember === member.name 
                    ? 'bg-gradient-to-r from-[#F46530] via-[#FF8B66] to-[#F46530] opacity-100' 
                    : 'bg-gradient-to-r from-[#F46530]/20 via-gray-200 to-[#F46530]/20 opacity-50'
                }`} />
                <div className="absolute inset-[2px] bg-white rounded-3xl" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 w-32 h-32 opacity-5">
                <div className="absolute inset-0 rounded-full" style={{ 
                  background: 'radial-gradient(circle, #F46530 0%, transparent 70%)' 
                }} />
              </div>
              <div className="absolute bottom-8 left-8 w-24 h-24 opacity-5">
                <div className="absolute inset-0 rounded-full" style={{ 
                  background: 'radial-gradient(circle, #2A2E30 0%, transparent 70%)' 
                }} />
              </div>

              {/* Content */}
              <div className="relative z-10 p-10 lg:p-12">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
                  
                  {/* Enhanced Avatar Section */}
                  <div className="relative flex-shrink-0">
                    <div className={`w-40 h-40 lg:w-48 lg:h-48 rounded-3xl overflow-hidden border-4 transition-all duration-500 group-hover:scale-105 group-hover:rotate-2 ${
                      hoveredMember === member.name ? 'border-[#F46530]' : 'border-white'
                    }`} style={{ boxShadow: '0 20px 60px rgba(42, 46, 48, 0.15)' }}>
                      {member.image && !member.image.includes('team/samran') ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={192}
                          height={192}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLElement;
                            target.style.display = 'none';
                            if (target.nextSibling) {
                              (target.nextSibling as HTMLElement).style.display = 'flex';
                            }
                          }}
                        />
                      ) : null}
                      <div className={`w-full h-full bg-gradient-to-br from-[#2A2E30] to-[#4A4F53] flex items-center justify-center ${
                        member.image && !member.image.includes('team/samran') ? 'hidden' : ''
                      }`}>
                        <span className="text-5xl font-bold text-white">
                          {member.name.split(' ').map(n => n.charAt(0)).join('')}
                        </span>
                      </div>
                    </div>
                    
                    {/* Status Badge */}
                    <div className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-full flex items-center gap-2 border-2 border-white transition-all duration-300 ${
                      hoveredMember === member.name ? 'scale-110' : ''
                    }`} style={{ 
                      backgroundColor: '#F46530',
                      boxShadow: '0 8px 24px rgba(244, 101, 48, 0.3)'
                    }}>
                      <Award className="w-5 h-5 text-white" />
                      <span className="text-sm font-semibold text-white">Founder</span>
                    </div>

                    {/* Animated Particles */}
                    {hoveredMember === member.name && (
                      <>
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-2 h-2 rounded-full animate-ping"
                            style={{
                              backgroundColor: '#F46530',
                              top: `${Math.random() * 100}%`,
                              left: `${Math.random() * 100}%`,
                              animationDelay: `${i * 150}ms`,
                              opacity: 0.6
                            }}
                          />
                        ))}
                      </>
                    )}
                  </div>

                  {/* Member Details */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className="mb-6">
                      <h3 className="text-3xl lg:text-4xl font-bold mb-3" style={{ color: '#2A2E30' }}>
                        {member.name}
                      </h3>
                      <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                        <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: '#F46530' }} />
                        <p className="text-lg font-semibold" style={{ color: '#F46530' }}>
                          {member.role}
                        </p>
                      </div>
                      
                      {/* Social Links */}
                      <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                        {member.linkedin && member.linkedin !== '#' && (
                          <a 
                            href={member.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="p-3 rounded-xl hover:scale-110 transition-all duration-300"
                            style={{ 
                              backgroundColor: 'rgba(244, 101, 48, 0.1)',
                              color: '#F46530'
                            }}
                          >
                            <Linkedin className="w-5 h-5" />
                          </a>
                        )}
                        {member.github && member.github !== '#' && (
                          <a 
                            href={member.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="p-3 rounded-xl hover:scale-110 transition-all duration-300"
                            style={{ 
                              backgroundColor: 'rgba(42, 46, 48, 0.1)',
                              color: '#2A2E30'
                            }}
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-base mb-8 leading-relaxed opacity-80" style={{ color: '#2A2E30' }}>
                      {member.bio}
                    </p>

                    {/* Expertise Section */}
                    <div className="mb-6">
                      <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                        <Briefcase className="w-5 h-5" style={{ color: '#F46530' }} />
                        <span className="text-sm font-bold uppercase tracking-wider" style={{ color: '#2A2E30' }}>
                          Core Expertise
                        </span>
                      </div>
                      <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                        {member.expertise.map((skill, idx) => (
                          <span
                            key={skill}
                            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                              hoveredMember === member.name ? 'translate-y-0' : 'translate-y-1'
                            }`}
                            style={{ 
                              backgroundColor: idx % 2 === 0 ? '#F46530' : 'rgba(42, 46, 48, 0.08)',
                              color: idx % 2 === 0 ? '#FFFFFF' : '#2A2E30',
                              animationDelay: `${idx * 100}ms`,
                              boxShadow: idx % 2 === 0 ? '0 4px 12px rgba(244, 101, 48, 0.2)' : 'none'
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Credentials */}
                    <div className="flex items-center justify-center lg:justify-start gap-3 pt-6 border-t" 
                         style={{ borderColor: 'rgba(42, 46, 48, 0.1)' }}>
                      <div className="p-2 rounded-lg" style={{ backgroundColor: 'rgba(244, 101, 48, 0.1)' }}>
                        <BookOpen className="w-5 h-5" style={{ color: '#F46530' }} />
                      </div>
                      <span className="text-base font-medium" style={{ color: '#2A2E30' }}>
                        {companyInfo.degree}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Animated Stats Section */}
        <div className="mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveStat(index)}
                className={`relative p-6 rounded-xl border transition-all duration-500 cursor-pointer ${
                  activeStat === index ? 'scale-105 shadow-lg' : ''
                }`}
                style={{
                  backgroundColor: activeStat === index ? 'rgba(244, 101, 48, 0.05)' : '#FFFFFF',
                  borderColor: activeStat === index ? 'rgba(244, 101, 48, 0.2)' : 'rgba(42, 46, 48, 0.1)',
                  transform: activeStat === index ? 'translateY(-4px)' : 'none'
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg" style={{ 
                    backgroundColor: activeStat === index ? stat.color : 'rgba(42, 46, 48, 0.05)',
                    color: activeStat === index ? '#FFFFFF' : stat.color
                  }}>
                    {stat.icon}
                  </div>
                  <div className="text-xs font-semibold px-2 py-1 rounded-full" 
                       style={{ 
                         backgroundColor: 'rgba(42, 46, 48, 0.05)',
                         color: '#2A2E30'
                       }}>
                    0{index + 1}
                  </div>
                </div>
                
                <div className="text-lg font-bold mb-2" style={{ color: '#2A2E30' }}>
                  {stat.value}
                </div>
                <div className="text-xs opacity-70" style={{ color: '#2A2E30' }}>
                  {stat.label}
                </div>

                {/* Active Indicator */}
                {activeStat === index && (
                  <div className="absolute bottom-0 left-0 w-full h-1 rounded-b-xl" 
                       style={{ backgroundColor: stat.color }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Our Journey - Modern Design */}
        <div className={`relative overflow-hidden rounded-2xl p-8 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{
          background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%)',
          border: '1px solid rgba(42, 46, 48, 0.1)',
          boxShadow: '0 20px 60px rgba(42, 46, 48, 0.08)'
        }}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full" 
                 style={{ background: 'radial-gradient(circle, #F46530 0%, transparent 70%)' }} />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full" 
                 style={{ background: 'radial-gradient(circle, #2A2E30 0%, transparent 70%)' }} />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl" style={{ backgroundColor: 'rgba(244, 101, 48, 0.1)' }}>
                <Sparkles className="w-5 h-5" style={{ color: '#F46530' }} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#2A2E30' }}>
                  Our Journey
                </h3>
                <p className="text-sm opacity-70" style={{ color: '#2A2E30' }}>
                  Building excellence through innovation
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-sm md:text-md leading-relaxed opacity-70" style={{ color: '#2A2E30' }}>
                  Founded by <span className="font-semibold" style={{ color: '#F46530' }}>{companyInfo.ceo}</span>, HelixCore Studio 
                  has established itself as a trusted partner for businesses seeking cutting-edge digital solutions. 
                  With a proven track record of over 50 successful projects, we deliver excellence across game development, 
                  web applications, and AI integration.
                </p>
                
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full border-2 border-white" 
                         style={{ backgroundColor: '#2A2E30' }} />
                    <div className="w-10 h-10 rounded-full border-2 border-white" 
                         style={{ backgroundColor: '#F46530' }} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: '#2A2E30' }}>
                      Expert Team
                    </div>
                    <div className="text-xs opacity-60" style={{ color: '#2A2E30' }}>
                      Advanced Software Engineering
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                {/* Interactive Globe Element */}
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border-4 opacity-10" style={{ borderColor: '#F46530' }} />
                    <div className="absolute w-24 h-24 rounded-full border-2 animate-spin-slow" 
                         style={{ borderColor: '#2A2E30', borderTopColor: 'transparent' }} />
                    
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center" 
                           style={{ backgroundColor: 'rgba(244, 101, 48, 0.1)' }}>
                        <Globe className="w-8 h-8" style={{ color: '#F46530' }} />
                      </div>
                    </div>

                    {/* Orbiting Dots */}
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-3 h-3 rounded-full animate-orbit"
                        style={{
                          backgroundColor: i % 2 === 0 ? '#F46530' : '#2A2E30',
                          animationDelay: `${i * 0.5}s`,
                          animationDuration: '8s',
                          top: 'calc(50% - 64px * sin(45deg * ' + i + '))',
                          left: 'calc(50% + 64px * cos(45deg * ' + i + '))'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* View Full Story Button */}
            {/* <div className="mt-8 pt-8 border-t" style={{ borderColor: 'rgba(42, 46, 48, 0.1)' }}>
              <button className="group flex items-center gap-2 text-sm font-semibold mx-auto"
                      style={{ color: '#F46530' }}>
                <span>Read Our Full Story</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div> */}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(64px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(64px) rotate(-360deg);
          }
        }
        
        .animate-orbit {
          animation: orbit linear infinite;
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}