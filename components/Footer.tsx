'use client'
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { companyInfo } from '@/lib/constants';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Image 
                src="/logo.svg" 
                alt="Company Logo" 
                width={160} 
                height={50} 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm opacity-70 mb-6" style={{ color: '#2A2E30' }}>
              A premier software development studio delivering innovative game development 
              and enterprise-grade solutions to clients worldwide since 2019.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/hamza-hakim1/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:opacity-80" style={{ color: 'rgba(42, 46, 48, 0.6)' }}>
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/1HamzaMalik1" target="_blank" rel="noopener noreferrer" className="transition-colors hover:opacity-80" style={{ color: 'rgba(42, 46, 48, 0.6)' }}>
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="transition-colors hover:opacity-80" style={{ color: 'rgba(42, 46, 48, 0.6)' }}>
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-6 text-sm" style={{ color: '#2A2E30' }}>Quick Links</h3>
            <ul className="space-y-3">
              {['Services', 'Our Work', 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase().replace(' ', '-'))?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-sm opacity-70 transition-colors"
                    style={{ color: '#2A2E30' }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-6 text-sm" style={{ color: '#2A2E30' }}>Services</h3>
            <ul className="space-y-3">
              {['Unity Development', 'Web Games', 'AI Integration', 'Playable Ads', 'Mobile Apps', 'Web Development'].map((service) => (
                <li key={service}>
                  <span className="text-sm opacity-70 transition-colors cursor-default" style={{ color: '#2A2E30' }}>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-6 text-sm" style={{ color: '#2A2E30' }}>Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5" style={{ color: '#F46530' }} />
                <span className="text-sm opacity-70" style={{ color: '#2A2E30' }}>{companyInfo.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5" style={{ color: '#F46530' }} />
                <span className="text-sm opacity-70" style={{ color: '#2A2E30' }}>{companyInfo.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5" style={{ color: '#F46530' }} />
                <span className="text-sm opacity-70" style={{ color: '#2A2E30' }}>{companyInfo.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm opacity-70 mb-4 md:mb-0" style={{ color: '#2A2E30' }}>
              © {currentYear} {companyInfo.name}. All rights reserved.
            </div>
            <div className="text-xs opacity-70" style={{ color: '#2A2E30' }}>
              Professional Software Development Studio • Trusted by Businesses Worldwide
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}