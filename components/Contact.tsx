'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Shield, Users, AlertCircle } from 'lucide-react';
import { companyInfo } from '@/lib/constants';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      // If using mailto fallback, open email client
      if (data.mailtoLink) {
        window.location.href = data.mailtoLink;
        
        // Show success message after a short delay
        setTimeout(() => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          
          // Reset form after 5 seconds
          setTimeout(() => {
            setFormData({
              name: '',
              email: '',
              company: '',
              service: '',
              budget: '',
              message: '',
            });
            setIsSubmitted(false);
          }, 5000);
        }, 1000);
      } else {
        // Direct email send was successful
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            company: '',
            service: '',
            budget: '',
            message: '',
          });
          setIsSubmitted(false);
        }, 5000);
      }
    } catch (err) {
      setIsSubmitting(false);
      
      // As a last resort fallback, create mailto link
      const adminEmail = 'hamzahakim12235@gmail.com';
      const subject = encodeURIComponent(`New Project Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`
Client Information:
Name: ${formData.name}
Email: ${formData.email}
${formData.company ? `Company: ${formData.company}\n` : ''}
Service Required: ${formData.service}
${formData.budget ? `Budget: ${formData.budget}\n` : ''}

Project Details:
${formData.message}
      `.trim());
      
      const mailtoLink = `mailto:${adminEmail}?subject=${subject}&body=${body}`;
      
      setError(`Unable to send automatically. Opening your email client...`);
      
      setTimeout(() => {
        window.location.href = mailtoLink;
        setError('');
        setIsSubmitted(true);
        
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            company: '',
            service: '',
            budget: '',
            message: '',
          });
          setIsSubmitted(false);
        }, 3000);
      }, 2000);
    }
  };

  const whyChooseUs = [
    {
      icon: <Clock className="w-5 h-5" />,
      title: '24-48h Response',
      description: 'Quick turnaround on all inquiries'
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: 'NDA Protected',
      description: 'Your ideas are safe with us'
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Dedicated Team',
      description: 'Expert developers assigned to your project'
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-6 h-[1px]" style={{ backgroundColor: '#F46530' }} />
            <span className="text-xs font-semibold tracking-wide uppercase" style={{ color: '#2A2E30' }}>
              Get In Touch
            </span>
            <div className="w-6 h-[1px]" style={{ backgroundColor: '#F46530' }} />
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight" style={{ color: '#2A2E30' }}>
            Let's Build Something
            <span className="block mt-2" style={{ color: '#F46530' }}>Exceptional</span>
          </h2>
          
          <p className="text-sm md:text-md opacity-70 max-w-3xl mx-auto" style={{ color: '#2A2E30' }}>
            Partner with us to transform your vision into reality. We provide comprehensive project proposals 
            within 24 hours and ensure complete transparency throughout the development process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information Cards */}
          <a href={`mailto:${companyInfo.email}`} 
             className="bg-white border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group block"
             style={{ borderColor: 'rgba(42, 46, 48, 0.1)' }}>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                 style={{ backgroundColor: 'rgba(244, 101, 48, 0.08)' }}>
              <Mail className="w-7 h-7" style={{ color: '#F46530' }} />
            </div>
            <h3 className="text-lg font-bold mb-3" style={{ color: '#2A2E30' }}>Email Us</h3>
            <p className="text-sm opacity-70 hover:opacity-100 transition-opacity mb-2"
               style={{ color: '#2A2E30' }}>
              {companyInfo.email}
            </p>
            <p className="text-xs opacity-60" style={{ color: '#2A2E30' }}>
              For detailed proposals and inquiries
            </p>
          </a>

          <a href={`tel:${companyInfo.phone}`}
             className="bg-white border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group block"
             style={{ borderColor: 'rgba(42, 46, 48, 0.1)' }}>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                 style={{ backgroundColor: 'rgba(244, 101, 48, 0.08)' }}>
              <Phone className="w-7 h-7" style={{ color: '#F46530' }} />
            </div>
            <h3 className="text-lg font-bold mb-3" style={{ color: '#2A2E30' }}>Call Us</h3>
            <p className="text-sm opacity-70 hover:opacity-100 transition-opacity mb-2"
               style={{ color: '#2A2E30' }}>
              {companyInfo.phone}
            </p>
            <p className="text-xs opacity-60" style={{ color: '#2A2E30' }}>
              For urgent project discussions
            </p>
          </a>

          <div className="bg-white border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
               style={{ borderColor: 'rgba(42, 46, 48, 0.1)' }}>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                 style={{ backgroundColor: 'rgba(244, 101, 48, 0.08)' }}>
              <MapPin className="w-7 h-7" style={{ color: '#F46530' }} />
            </div>
            <h3 className="text-lg font-bold mb-3" style={{ color: '#2A2E30' }}>Visit Us</h3>
            <p className="text-sm opacity-70 mb-2" style={{ color: '#2A2E30' }}>
              {companyInfo.location}
            </p>
            <p className="text-xs opacity-60" style={{ color: '#2A2E30' }}>
              Serving clients globally
            </p>
          </div>
        </div>

        {/* Main Form Container */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border rounded-3xl overflow-hidden shadow-2xl"
               style={{ borderColor: 'rgba(42, 46, 48, 0.1)' }}>
            
            {/* Form Header */}
            <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 p-8 lg:p-10 border-b"
                 style={{ borderColor: 'rgba(42, 46, 48, 0.08)' }}>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#2A2E30' }}>
                    Start Your Project
                  </h3>
                  <p className="text-sm opacity-70" style={{ color: '#2A2E30' }}>
                    Fill out the form below and we'll get back to you within 24-48 hours
                  </p>
                </div>
                <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full border"
                     style={{ borderColor: 'rgba(244, 101, 48, 0.2)', backgroundColor: 'rgba(244, 101, 48, 0.05)' }}>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#10B981' }}></div>
                  <span className="text-xs font-semibold" style={{ color: '#2A2E30' }}>Available Now</span>
                </div>
              </div>
            </div>

            {/* Form Body */}
            <div className="p-8 lg:p-10">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                       style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}>
                    <CheckCircle className="w-10 h-10" style={{ color: '#10B981' }} />
                  </div>
                  <h3 className="text-lg font-bold mb-4" style={{ color: '#2A2E30' }}>
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm opacity-70 mb-8 max-w-md mx-auto" style={{ color: '#2A2E30' }}>
                    Thank you for contacting HelixCore Studio. Your email client has been opened with your inquiry. 
                    Please send the email to complete your submission. We'll respond within 24-48 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-sm font-semibold px-6 py-3 rounded-xl transition-all hover:shadow-lg"
                    style={{ backgroundColor: 'rgba(244, 101, 48, 0.1)', color: '#F46530' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 rounded-xl border flex items-start gap-3" 
                         style={{ backgroundColor: 'rgba(239, 68, 68, 0.05)', borderColor: 'rgba(239, 68, 68, 0.2)' }}>
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#EF4444' }} />
                      <p className="text-sm" style={{ color: '#EF4444' }}>{error}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold mb-3" style={{ color: '#2A2E30' }}>
                        Full Name <span style={{ color: '#F46530' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-50 border rounded-xl px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                        style={{ borderColor: 'rgba(42, 46, 48, 0.1)', color: '#2A2E30' }}
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-3" style={{ color: '#2A2E30' }}>
                        Email Address <span style={{ color: '#F46530' }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-50 border rounded-xl px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                        style={{ borderColor: 'rgba(42, 46, 48, 0.1)', color: '#2A2E30' }}
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold mb-3" style={{ color: '#2A2E30' }}>
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border rounded-xl px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                        style={{ borderColor: 'rgba(42, 46, 48, 0.1)', color: '#2A2E30' }}
                        placeholder="Your Company Ltd."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-3" style={{ color: '#2A2E30' }}>
                        Project Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border rounded-xl px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                        style={{ borderColor: 'rgba(42, 46, 48, 0.1)', color: '#2A2E30' }}
                      >
                        <option value="">Select budget range</option>
                        <option value="<5k">Less than $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k+">$50,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-3" style={{ color: '#2A2E30' }}>
                      Service Required <span style={{ color: '#F46530' }}>*</span>
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-50 border rounded-xl px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                      style={{ borderColor: 'rgba(42, 46, 48, 0.1)', color: '#2A2E30' }}
                    >
                      <option value="">Select a service</option>
                      <option value="Unity Game Development">Unity Game Development</option>
                      <option value="HTML5/WebGL Games">HTML5/WebGL Games</option>
                      <option value="AI in Games">AI in Games</option>
                      <option value="Playable Ads">Playable Ads</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                      <option value="Game Porting Services">Game Porting Services</option>
                      <option value="Technical Consulting">Technical Consulting</option>
                      <option value="Other Services">Other Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-3" style={{ color: '#2A2E30' }}>
                      Project Details <span style={{ color: '#F46530' }}>*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-gray-50 border rounded-xl px-4 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all resize-none"
                      style={{ borderColor: 'rgba(42, 46, 48, 0.1)', color: '#2A2E30' }}
                      placeholder="Please describe your project requirements, timeline, and any specific features you need..."
                    />
                  </div>

                  <div className="flex items-start gap-3 p-5 rounded-xl"
                       style={{ backgroundColor: 'rgba(244, 101, 48, 0.05)' }}>
                    <Shield className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#F46530' }} />
                    <div>
                      <p className="text-sm font-bold mb-1" style={{ color: '#2A2E30' }}>
                        Your Privacy is Protected
                      </p>
                      <p className="text-xs opacity-70" style={{ color: '#2A2E30' }}>
                        We respect your privacy and will never share your information. All project discussions 
                        are covered under NDA upon request.
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-5 rounded-xl font-semibold text-sm transition-all shadow-lg hover:shadow-2xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02]"
                    style={{ backgroundColor: '#F46530', color: '#FFFFFF' }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Project Inquiry</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center opacity-60" style={{ color: '#2A2E30' }}>
                    By submitting this form, you agree to receive communications from HelixCore Studio. 
                    We'll never spam you or share your data.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="flex items-start gap-4 p-6 rounded-2xl border hover:shadow-lg transition-all"
                 style={{ borderColor: 'rgba(42, 46, 48, 0.08)', backgroundColor: 'rgba(244, 101, 48, 0.02)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                   style={{ backgroundColor: 'rgba(244, 101, 48, 0.1)', color: '#F46530' }}>
                {item.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold mb-1" style={{ color: '#2A2E30' }}>
                  {item.title}
                </h4>
                <p className="text-xs opacity-70" style={{ color: '#2A2E30' }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
