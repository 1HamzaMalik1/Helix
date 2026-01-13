'use client';

import { useEffect, useState } from 'react';
import { ChevronRight, Sparkles, Code2, Cpu, Zap, Globe, Smartphone, Brain, CheckCircle } from 'lucide-react';
import { companyInfo } from '@/lib/constants';

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);

  const services = [
    { text: 'Unity Games', icon: <Code2 className="w-5 h-5" />, desc: 'Immersive gaming experiences' },
    { text: 'Web Development', icon: <Globe className="w-5 h-5" />, desc: 'Scalable digital solutions' },
    { text: 'AI Solutions', icon: <Brain className="w-5 h-5" />, desc: 'Intelligent automation' },
    { text: 'Mobile Apps', icon: <Smartphone className="w-5 h-5" />, desc: 'Native & cross-platform' },
  ];

  // Unity C# code preview
  const unityCode = [
    'using UnityEngine;',
    '',
    'public class GameController : MonoBehaviour',
    '{',
    '    void Start()',
    '    {',
    '        Debug.Log("Game Initialized");',
    '    }',
    '',
    '    void Update()',
    '    {',
    '        transform.Rotate(Vector3.up * Time.deltaTime * 30f);',
    '    }',
    '}'
  ];

  // Cycle services in left column
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Animate hero visibility
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animate Unity code typing line by line
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= unityCode.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 300);
    return () => clearInterval(interval);
  }, [isVisible]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mt-12 md:mt-24 bg-white">
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-64 h-64 opacity-5"
          style={{ background: `radial-gradient(circle at 30% 30%, #F46530, transparent 70%)` }}
        />
        <div 
          className="absolute bottom-0 right-0 w-96 h-96 opacity-5"
          style={{ background: `radial-gradient(circle at 70% 70%, #2A2E30, transparent 70%)` }}
        />
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(#2A2E30 1px, transparent 1px),
              linear-gradient(90deg, #2A2E30 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            
            {/* Slogan Badge */}
            <div className="inline-flex items-center mb-8">
              <div className="flex items-center space-x-2 px-3 py-2 rounded-full border"
                   style={{ borderColor: '#F46530', backgroundColor: 'rgba(244, 101, 48, 0.05)' }}>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#F46530' }}></div>
                <span className="text-xs font-semibold tracking-wide uppercase" style={{ color: '#2A2E30' }}>
                  Professional Development • Proven Results
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              <span className="block" style={{ color: '#2A2E30' }}>Enterprise-Grade</span>
              <span className="block mt-2" style={{ color: '#2A2E30' }}>
                Digital Solutions <span style={{ color: '#F46530' }}>That Scale</span>
              </span>
            </h1>

            {/* Animated Service Display */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 h-12">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg"
                     style={{ backgroundColor: '#F46530', color: '#FFFFFF' }}>
                  {services[textIndex].icon}
                </div>
                <div>
                  <div className="text-lg font-semibold" style={{ color: '#2A2E30' }}>
                    Professional {services[textIndex].text}
                  </div>
                  <div className="text-sm opacity-70" style={{ color: '#2A2E30' }}>
                    {services[textIndex].desc}
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-10">
              <p className="text-sm md:text-md mb-6 leading-relaxed" style={{ color: '#2A2E30' }}>
                {companyInfo.name} delivers 
                <span className="font-semibold" style={{ color: '#F46530' }}> production-ready solutions</span> for 
                businesses worldwide. Our team of seasoned engineers specializes in game development, 
                web applications, and AI integration.
              </p>

              {/* Key Points */}
              <div className="space-y-3">
                {[
                  '5+ years of proven expertise',
                  'Industry veteran leadership',
                  '50+ successful project deliveries',
                  'Trusted by global clients'
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5" style={{ color: '#F46530' }} />
                    <span style={{ color: '#2A2E30' }} className="text-sm font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: '#F46530', color: '#FFFFFF' }}
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Request Consultation</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Column - Unity / C# Visual */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="relative">

              {/* Code Preview Card */}
              <div className="relative bg-[#0F172A] rounded-2xl overflow-hidden shadow-xl">
                
                {/* Header */}
                <div className="flex items-center gap-3 p-4 opacity-80 border-b border-[#2A2E30]/20">
                  <span className="px-2 py-0.5 rounded bg-[#222] text-xs text-green-400">Unity C#</span>
                  <span className="text-xs text-slate-400">GameController.cs</span>
                </div>

                {/* Code Lines */}
                <div className="p-6 font-mono text-sm text-slate-200 space-y-2 relative overflow-hidden">
                  {unityCode.slice(0, visibleLines).map((line, index) => (
                    <div
                      key={index}
                      className={`flex gap-4 transition-all duration-300 ${index === visibleLines - 1 ? 'bg-white/5 rounded px-2' : ''}`}
                    >
                      <span className="opacity-30 w-6 text-right">{index + 1}</span>
                      <span>{highlightCSharp(line)}
                        {index === visibleLines - 1 && (
                          <span className="ml-1 animate-pulse text-orange-400">▋</span>
                        )}
                      </span>
                    </div>
                  ))}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/5 to-transparent animate-scan" />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-xl flex items-center justify-center shadow-lg bg-[#F46530] text-white">
                <Zap className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg border bg-white border-[#2A2E30]/10 text-[#2A2E30]">
                <Code2 className="w-5 h-5" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scan line animation */}
      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scan {
          animation: scan 6s linear infinite;
        }
      `}</style>
    </section>
  );
}

// C# syntax highlighting
function highlightCSharp(line: string) {
  return (
    <>
      {line
        .replace(/using/g, '§using§')
        .replace(/public|class|void/g, '§$&§')
        .replace(/MonoBehaviour/g, '¤MonoBehaviour¤')
        .replace(/Debug\.Log/g, '¤Debug.Log¤')
        .replace(/Start|Update/g, '¤$&¤')
        .replace(/"(.*?)"/g, '¢"$1"¢')
        .split(/(§.*?§|¤.*?¤|¢.*?¢)/g)
        .map((part, i) => {
          if (part.startsWith('§')) return <span key={i} className="text-blue-400">{part.slice(1, -1)}</span>;
          if (part.startsWith('¤')) return <span key={i} className="text-emerald-400">{part.slice(1, -1)}</span>;
          if (part.startsWith('¢')) return <span key={i} className="text-amber-300">{part.slice(1, -1)}</span>;
          return <span key={i}>{part}</span>;
        })}
    </>
  );
}
