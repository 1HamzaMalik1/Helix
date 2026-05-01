'use client';

import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Linkedin, Github, Award, Briefcase, Zap, Star, Target, Globe, Calendar, ArrowRight, TrendingUp, Users, Code } from 'lucide-react';
import { companyInfo, teamMembers } from '@/lib/constants';
import Image from 'next/image';

export default function Team() {
  const { ref, inView } = useInView({
    threshold: 0.05,
    triggerOnce: true
  });

  const [hoveredExpertise, setHoveredExpertise] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'about' | 'expertise' | 'achievements'>('about');

  const stats = [
    { value: '5+', label: 'Years Experience', icon: <Zap className="w-5 h-5" />, color: '#F46530' },
    { value: '50+', label: 'Projects Delivered', icon: <Target className="w-5 h-5" />, color: '#10B981' },
    { value: '70+', label: 'Happy Clients', icon: <Users className="w-5 h-5" />, color: '#4F46E5' },
    { value: '10+', label: 'Technologies', icon: <Code className="w-5 h-5" />, color: '#EC4899' },
  ];

  const achievements = [
    {
      icon: <Award className="w-5 h-5" />,
      title: 'Industry Veteran',
      description: '5+ years delivering exceptional digital solutions',
      color: '#F46530'
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: 'Proven Track Record',
      description: '98% project success rate with global clients',
      color: '#10B981'
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: 'International Reach',
      description: 'Serving clients across 10+ countries worldwide',
      color: '#4F46E5'
    }
  ];

  return (
    <section id="team" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-x-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-full">
        
        {/* Section Header */}
        <div className="mb-12 text-center relative" ref={ref}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-[1px]" style={{ backgroundColor: '#F46530' }} />
            <span className="text-xs font-semibold tracking-wide uppercase" style={{ color: '#2A2E30' }}>
              Leadership Excellence
            </span>
            <div className="w-6 h-[1px]" style={{ backgroundColor: '#F46530' }} />
          </div>

          <h2 className={`text-3xl lg:text-4xl font-bold mb-6 leading-tight transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ color: '#2A2E30' }}>
            Meet Our
            <span className="block mt-2" style={{ color: '#F46530' }}>Technical Architect</span>
          </h2>

          <p className={`text-sm md:text-md opacity-70 max-w-3xl mx-auto transition-all duration-700 delay-100 ${
            inView ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ color: '#2A2E30' }}>
            Led by industry veteran {companyInfo.ceo} with {companyInfo.experience} of 
            delivering exceptional digital solutions to clients worldwide.
          </p>
        </div>

        {/* CEO Profile Card */}
        <div className="max-w-6xl mx-auto mb-16 w-full space-y-8">
          {teamMembers.map((member) => {
            const isCeo = member.name === companyInfo.ceo;
            const memberHasSocials = Boolean(member.linkedin) || Boolean(member.github);

            return (
            <div
              key={member.name}
              className={`bg-white rounded-3xl shadow-2xl overflow-hidden border-2 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ borderColor: 'rgba(244, 101, 48, 0.2)' }}
            >
              {/* Top Section with Gradient Background */}
              <div className={`relative p-6 md:p-8 lg:p-12 overflow-hidden ${
                isCeo
                  ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
                  : 'bg-gradient-to-br from-slate-800 via-indigo-900 to-slate-900'
              }`}>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
                  <div className="absolute inset-0 rounded-full" style={{ 
                    background: 'radial-gradient(circle, #F46530 0%, transparent 70%)' 
                  }} />
                </div>
                <div className="absolute bottom-0 left-0 w-48 h-48 opacity-10">
                  <div className="absolute inset-0 rounded-full" style={{ 
                    background: 'radial-gradient(circle, #FFFFFF 0%, transparent 70%)' 
                  }} />
                </div>

                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                  {/* Avatar */}
                  <div className="relative group flex-shrink-0">
                    <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                    <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={`${member.name}, ${member.role} — HelixCore Studio leadership team photo`}
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
                      <div className="w-full h-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center">
                        <span className="text-5xl font-bold text-white">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    
                    {/* Member Badge */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap shadow-lg"
                         style={{ backgroundColor: '#F46530', color: '#FFFFFF' }}>
                      {isCeo ? '⭐ Founder & CEO' : '🚀 CTO & Senior Software Engineer'}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 text-center md:text-left w-full min-w-0">
                    <h3 className="text-3xl md:text-4xl font-bold mb-2 text-white">
                      {member.name}
                    </h3>
                    <p className="text-lg mb-4 opacity-90" style={{ color: '#F46530' }}>
                      {member.role}
                    </p>
                    <p className="text-base leading-relaxed mb-6 opacity-80 text-white max-w-2xl">
                      {member.bio}
                    </p>

                    {/* Social Links */}
                    {memberHasSocials && (
                      <div className="flex items-center gap-3 justify-center md:justify-start">
                        {member.linkedin ? (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-110"
                          >
                            <Linkedin className="w-5 h-5 text-white group-hover:text-blue-600 transition-colors" />
                          </a>
                        ) : null}
                        {member.github ? (
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-110"
                          >
                            <Github className="w-5 h-5 text-white group-hover:text-gray-900 transition-colors" />
                          </a>
                        ) : null}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Tabs Navigation */}
              <div className="border-b" style={{ borderColor: 'rgba(42, 46, 48, 0.1)' }}>
                <div className="flex justify-center gap-1 p-2">
                  {[
                    { id: 'about', label: 'About', icon: <Briefcase className="w-4 h-4" /> },
                    { id: 'expertise', label: 'Expertise', icon: <Star className="w-4 h-4" /> },
                    { id: 'achievements', label: 'Achievements', icon: <Award className="w-4 h-4" /> }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                        activeTab === tab.id ? 'scale-105' : 'hover:bg-gray-50'
                      }`}
                      style={{
                        backgroundColor: activeTab === tab.id ? 'rgba(244, 101, 48, 0.1)' : 'transparent',
                        color: activeTab === tab.id ? '#F46530' : '#2A2E30'
                      }}
                    >
                      {tab.icon}
                      <span className="hidden sm:inline">{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-4 md:p-8 lg:p-12 overflow-hidden">
                {/* About Tab */}
                {activeTab === 'about' && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-6 rounded-xl border" style={{ borderColor: 'rgba(42, 46, 48, 0.1)' }}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                               style={{ backgroundColor: 'rgba(244, 101, 48, 0.1)' }}>
                            <Briefcase className="w-5 h-5" style={{ color: '#F46530' }} />
                          </div>
                          <h4 className="font-bold" style={{ color: '#2A2E30' }}>Background</h4>
                        </div>
                        <p className="text-sm leading-relaxed opacity-70" style={{ color: '#2A2E30' }}>
                          {isCeo
                            ? `Founded HelixCore Studio with a vision to deliver cutting-edge digital solutions. With a ${companyInfo.degree}, ${member.name} brings deep technical expertise and leadership to every project.`
                            : `${member.name} contributes as CTO & Senior Software Engineer, building robust software architecture and delivering high-quality features across projects.`}
                        </p>
                      </div>

                      <div className="p-6 rounded-xl border" style={{ borderColor: 'rgba(42, 46, 48, 0.1)' }}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                               style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}>
                            <Globe className="w-5 h-5" style={{ color: '#10B981' }} />
                          </div>
                          <h4 className="font-bold" style={{ color: '#2A2E30' }}>Global Impact</h4>
                        </div>
                        <p className="text-sm leading-relaxed opacity-70" style={{ color: '#2A2E30' }}>
                          {isCeo
                            ? 'Successfully delivered 50+ projects to clients across 10+ countries, establishing HelixCore Studio as a trusted partner for businesses worldwide.'
                            : 'Focused on code quality, delivery velocity, and cross-team collaboration to transform requirements into reliable, production-ready solutions.'}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Expertise Tab */}
                {activeTab === 'expertise' && (
                  <div className="animate-fadeIn overflow-hidden">
                    <p className="text-sm opacity-70 mb-6 text-center" style={{ color: '#2A2E30' }}>
                      Specialized skills and technologies mastered over {companyInfo.experience}
                    </p>
                    <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
                      {member.expertise.map((skill, idx) => (
                        <div
                          key={skill}
                          onMouseEnter={() => setHoveredExpertise(idx)}
                          onMouseLeave={() => setHoveredExpertise(null)}
                          className={`group px-3 md:px-5 py-2 md:py-3 rounded-xl font-semibold text-xs md:text-sm transition-all duration-300 cursor-pointer ${
                            hoveredExpertise === idx ? 'scale-105 md:scale-110 shadow-xl' : 'scale-100'
                          }`}
                          style={{
                            backgroundColor: hoveredExpertise === idx 
                              ? '#F46530'
                              : idx % 3 === 0 
                                ? 'rgba(244, 101, 48, 0.1)' 
                                : idx % 3 === 1 
                                  ? 'rgba(16, 185, 129, 0.1)'
                                  : 'rgba(79, 70, 229, 0.1)',
                            color: hoveredExpertise === idx 
                              ? '#FFFFFF'
                              : idx % 3 === 0 
                                ? '#F46530' 
                                : idx % 3 === 1 
                                  ? '#10B981'
                                  : '#4F46E5',
                            border: `2px solid ${
                              hoveredExpertise === idx 
                                ? '#F46530'
                                : idx % 3 === 0 
                                  ? 'rgba(244, 101, 48, 0.3)' 
                                  : idx % 3 === 1 
                                    ? 'rgba(16, 185, 129, 0.3)'
                                    : 'rgba(79, 70, 229, 0.3)'
                            }`
                          }}
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Achievements Tab */}
                {activeTab === 'achievements' && (
                  <div className="grid md:grid-cols-3 gap-6 animate-fadeIn">
                    {achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className="group p-6 rounded-xl border transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
                        style={{ borderColor: 'rgba(42, 46, 48, 0.1)' }}
                      >
                        <div 
                          className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                          style={{
                            backgroundColor: `${achievement.color}15`,
                            color: achievement.color
                          }}
                        >
                          {achievement.icon}
                        </div>
                        <h4 className="font-bold mb-2" style={{ color: '#2A2E30' }}>
                          {achievement.title}
                        </h4>
                        <p className="text-sm opacity-70 leading-relaxed" style={{ color: '#2A2E30' }}>
                          {achievement.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
          })}
        </div>

        {/* Stats Section */}
        <div className={`mb-16 transition-all duration-700 delay-200 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
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
              Interested in working together on your next project?
            </p>
            <p className="text-sm opacity-70" style={{ color: '#2A2E30' }}>
              Let's discuss how we can bring your vision to life
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
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}
