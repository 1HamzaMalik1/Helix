'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight, Cpu, Heart, Code, Zap, BookOpen } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [hoveredItem, setHoveredItem] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll
      const sections = ['services', 'portfolio', 'team', 'process', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      setActiveSection(current || '');
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: 'Services', id: 'services', icon: <Cpu className="w-4 h-4" />, desc: 'Our capabilities' },
    { label: 'Team', id: 'team', icon: <Heart className="w-4 h-4" />, desc: 'Expert developers' },
    { label: 'Process', id: 'process', icon: <Zap className="w-4 h-4" />, desc: 'Our methodology' },
    { label: 'Contact', id: 'contact', icon: <Code className="w-4 h-4" />, desc: 'Start a project' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#FFFFFF]/98 backdrop-blur-xl border-b border-gray-200 py-2 shadow-lg' 
            : 'bg-[#FFFFFF] py-4'
        }`}
        style={{ backgroundColor: 'var(--accent, #FFFFFF)' }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo with slogan */}
            <Link href="/" className="flex items-center group">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Image 
                    src="/logo.svg" 
                    alt="HelixCore Studio logo — AI, game and web development company" 
                    width={180} 
                    height={60} 
                    className="h-14 w-auto transition-transform group-hover:scale-105 duration-300"
                    priority
                    style={{ filter: 'brightness(0.9)' }}
                  />
                </div>
                {/* <div className="hidden md:block pl-3 border-l border-gray-200">
                  <div className="text-xs font-semibold tracking-wider uppercase" style={{ color: 'var(--secondary, #F46530)' }}>
                    Smart tech • strong care
                  </div>
                  <div className="text-[10px] text-gray-500 font-medium mt-0.5">
                    SOFTWARE HOUSE
                  </div>
                </div> */}
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.id} className="relative">
                  <button
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem('')}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-5 py-2.5 rounded-lg transition-all duration-300 group ${
                      activeSection === item.id 
                        ? 'font-semibold' 
                        : 'hover:bg-gray-50'
                    }`}
                    style={{ 
                      color: activeSection === item.id ? 'var(--secondary, #F46530)' : 'var(--primary, #2A2E30)'
                    }}
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <span className="text-sm">{item.label}</span>
                    </div>
                    
                    {/* Tooltip with description */}
                    <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all duration-300 ${
                      hoveredItem === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 pointer-events-none'
                    }`}
                    style={{ 
                      backgroundColor: 'var(--secondary, #F46530)',
                      color: 'var(--accent, #FFFFFF)'
                    }}>
                      {item.desc}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45"
                           style={{ backgroundColor: 'var(--secondary, #F46530)' }}></div>
                    </div>
                    
                    {/* Active indicator */}
                    {activeSection === item.id && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-1 rounded-full"
                           style={{ backgroundColor: 'var(--secondary, #F46530)' }}></div>
                    )}
                  </button>
                </div>
              ))}

              <Link
                href="/blog"
                className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-gray-50 flex items-center gap-2"
                style={{ color: 'var(--primary, #2A2E30)' }}
              >
                <BookOpen className="w-4 h-4" />
                Blog
              </Link>
              
              {/* CTA Button */}
              <div className="flex items-center gap-2 ml-4">
                <a
                  href="https://calendly.com/hamzahakim12235"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group px-5 py-2 rounded-xl hover:shadow-lg transition-all duration-300 shadow-md hover:scale-105 flex items-center text-sm font-semibold"
                  style={{ 
                    backgroundColor: 'var(--secondary, #F46530)',
                    color: 'var(--accent, #FFFFFF)'
                  }}
                >
                  <div className="absolute -inset-1 bg-[#F46530]/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <span className="relative flex items-center gap-2">
                    Book Meeting
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              style={{ color: 'var(--primary, #2A2E30)' }}
            >
              <div className={`relative w-6 h-5 transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                <span className={`absolute left-0 w-6 h-0.5 rounded-full transition-all duration-300 ${
                  isOpen ? 'top-2 rotate-45' : 'top-0'
                }`}
                style={{ backgroundColor: 'currentColor' }}></span>
                <span className={`absolute left-0 top-2 w-6 h-0.5 rounded-full transition-all duration-300 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
                style={{ backgroundColor: 'currentColor' }}></span>
                <span className={`absolute left-0 w-6 h-0.5 rounded-full transition-all duration-300 ${
                  isOpen ? 'top-2 -rotate-45' : 'top-4'
                }`}
                style={{ backgroundColor: 'currentColor' }}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div className={`lg:hidden fixed inset-0 top-0 z-40 transition-all duration-300 ease-in-out ${
        isOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none delay-300'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundColor: 'var(--primary, #2A2E30)' }}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Slide-in Panel */}
        <div className={`absolute right-0 top-20 h-full w-80 max-w-[85vw] transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backgroundColor: 'var(--accent, #FFFFFF)' }}>
          <div className="flex flex-col h-full overflow-y-auto">
            {/* Mobile Header */}
            {/* <div className="p-6 border-b flex-shrink-0" style={{ borderColor: 'rgba(42, 46, 48, 0.1)' }}>
              <div className="flex items-center justify-between mb-4">
                <Image 
                  src="/logo.svg" 
                  alt="Company Logo" 
                  width={120} 
                  height={30} 
                  className="h-8 w-auto"
                  style={{ filter: 'brightness(0.9)' }}
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  style={{ color: 'var(--primary, #2A2E30)' }}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="text-sm font-semibold tracking-wide uppercase" 
                   style={{ color: 'var(--secondary, #F46530)' }}>
                Professional Development Studio
              </div>
            </div> */}

            {/* Mobile Navigation Items */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 group ${
                      activeSection === item.id
                        ? 'border-l-4' 
                        : 'hover:bg-gray-50'
                    }`}
                    style={{ 
                      borderLeftColor: activeSection === item.id ? 'var(--secondary, #F46530)' : 'transparent',
                      backgroundColor: activeSection === item.id ? 'rgba(244, 101, 48, 0.05)' : 'transparent'
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg transition-colors ${
                        activeSection === item.id 
                          ? 'bg-white shadow-sm' 
                          : 'bg-gray-100 group-hover:bg-white'
                      }`}
                      style={{ 
                        color: activeSection === item.id ? 'var(--secondary, #F46530)' : 'var(--primary, #2A2E30)'
                      }}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-sm mb-0.5" 
                             style={{ 
                               color: activeSection === item.id ? 'var(--secondary, #F46530)' : 'var(--primary, #2A2E30)'
                             }}>
                          {item.label}
                        </div>
                        <div className="text-xs font-medium opacity-70"
                             style={{ color: 'var(--primary, #2A2E30)' }}>
                          {item.desc}
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                        activeSection === item.id ? 'text-[#F46530]' : 'text-gray-400'
                      }`} />
                    </div>
                  </button>
                ))}
                <Link
                  href="/blog"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-left p-4 rounded-xl transition-all duration-200 hover:bg-gray-50 flex items-center gap-3 border-l-4 border-transparent"
                  style={{ color: 'var(--primary, #2A2E30)' }}
                >
                  <div className="p-2 rounded-lg bg-gray-100">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm">Blog</div>
                    <div className="text-xs font-medium opacity-70">Guides &amp; insights</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </Link>
              </div>
              
              {/* Mobile CTA */}
              <div className="mt-8 p-5 rounded-2xl border" 
                   style={{ 
                     backgroundColor: 'rgba(244, 101, 48, 0.05)',
                     borderColor: 'rgba(244, 101, 48, 0.2)'
                   }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full" 
                       style={{ backgroundColor: 'var(--secondary, #F46530)' }}></div>
                  <h3 className="font-semibold text-sm" style={{ color: 'var(--primary, #2A2E30)' }}>
                    Ready to Start?
                  </h3>
                </div>
                <p className="text-sm opacity-70 mb-4" style={{ color: 'var(--primary, #2A2E30)' }}>
                  Partner with us to build <strong>enterprise-grade solutions</strong> that drive real business value.
                </p>
                <a
                  href="https://calendly.com/hamzahakim12235"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold text-center group flex items-center justify-center"
                  style={{ 
                    backgroundColor: 'var(--secondary, #F46530)',
                    color: 'var(--accent, #FFFFFF)'
                  }}
                >
                  <span className="flex items-center justify-center">
                    Book a Meeting
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </div>
            </div>

            {/* Mobile Footer */}
            <div className="p-6 border-t flex-shrink-0" style={{ borderColor: 'rgba(42, 46, 48, 0.1)' }}>
              <div className="flex items-center justify-center gap-6">
                <a href="https://www.linkedin.com/in/hamza-hakim1/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                   style={{ color: 'var(--primary, #2A2E30)' }}>
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://github.com/1HamzaMalik1" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                   style={{ color: 'var(--primary, #2A2E30)' }}>
                  <span className="sr-only">GitHub</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                   style={{ color: 'var(--primary, #2A2E30)' }}>
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}