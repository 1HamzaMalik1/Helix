'use client';

import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { testimonials, companyInfo } from '@/lib/constants';

export default function Testimonials() {
  const { ref, inView } = useInView({
    threshold: 0.05,
    triggerOnce: true
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-current' : ''}`}
        style={{ color: i < rating ? '#F46530' : '#E5E7EB' }}
      />
    ));
  };

  const getCountryFlag = (countryCode: string) => {
    return `https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`;
  };

  const getCurrentTestimonial = () => testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-x-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-full">
        
        {/* Section Header */}
        <div className="mb-12 text-center relative" ref={ref}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-[1px]" style={{ backgroundColor: '#F46530' }} />
            <span className="text-xs font-semibold tracking-wide uppercase" style={{ color: '#2A2E30' }}>
              Client Success Stories
            </span>
            <div className="w-6 h-[1px]" style={{ backgroundColor: '#F46530' }} />
          </div>

          <h2 className={`text-3xl lg:text-4xl font-bold mb-6 leading-tight transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ color: '#2A2E30' }}>
            What Our Clients
            <span className="block mt-2" style={{ color: '#F46530' }}>Are Saying</span>
          </h2>

          <p className={`text-sm md:text-md opacity-70 max-w-3xl mx-auto transition-all duration-700 delay-100 ${
            inView ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ color: '#2A2E30' }}>
            Trusted by clients worldwide for delivering exceptional results and exceeding expectations
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-3xl mx-auto px-4 md:px-0">
          
          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-0 md:left-0 lg:-left-12 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110"
            style={{ 
              backgroundColor: '#F46530',
              boxShadow: '0 8px 24px rgba(244, 101, 48, 0.3)'
            }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 md:right-0 lg:-right-12 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110"
            style={{ 
              backgroundColor: '#F46530',
              boxShadow: '0 8px 24px rgba(244, 101, 48, 0.3)'
            }}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Clean Testimonial Card */}
          <div className="mb-8 px-2 md:px-0">
            {getCurrentTestimonial() && (
              <div
                className={`bg-white rounded-xl p-8 md:p-10 transition-all duration-700 border ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  boxShadow: '0 4px 20px rgba(42, 46, 48, 0.08)',
                  borderColor: 'rgba(42, 46, 48, 0.08)'
                }}
              >
                {/* Rating */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {renderStars(getCurrentTestimonial().rating)}
                </div>

                {/* Comment */}
                <p className="text-base md:text-lg leading-relaxed mb-8 text-center max-w-2xl mx-auto" 
                   style={{ color: '#2A2E30' }}>
                  "{getCurrentTestimonial().comment}"
                </p>

                {/* Client Info */}
                <div className="flex flex-col items-center gap-3 pt-6 border-t" 
                     style={{ borderColor: 'rgba(42, 46, 48, 0.06)' }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" 
                       style={{ 
                         backgroundColor: 'rgba(244, 101, 48, 0.1)'
                       }}>
                    <span className="text-lg font-bold" style={{ color: '#F46530' }}>
                      {getCurrentTestimonial().name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  
                  <div className="text-center">
                    <h4 className="font-semibold mb-1" style={{ color: '#2A2E30' }}>
                      {getCurrentTestimonial().name}
                    </h4>
                    <div className="flex items-center justify-center gap-2">
                      <img 
                        src={getCountryFlag(getCurrentTestimonial().countryCode)} 
                        alt={getCurrentTestimonial().country}
                        className="w-4 h-3 object-cover rounded-sm"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <span className="text-sm opacity-60" style={{ color: '#2A2E30' }}>
                        {getCurrentTestimonial().country}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mb-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: currentIndex === index ? '32px' : '8px',
                  height: '8px',
                  backgroundColor: currentIndex === index ? '#F46530' : 'rgba(42, 46, 48, 0.2)'
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Clean CTA Section */}
        <div className={`mt-12 text-center transition-all duration-700 delay-200 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-base mb-6 opacity-70" style={{ color: '#2A2E30' }}>
            Ready to bring your project to life?
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
            <span>Schedule a Consultation</span>
          </a>
        </div>

        {/* Stats Section */}
        <div className={`mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto transition-all duration-700 delay-300 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center p-6 rounded-xl" style={{ backgroundColor: 'rgba(244, 101, 48, 0.05)' }}>
            <div className="text-3xl font-bold mb-2" style={{ color: '#F46530' }}>
              70+
            </div>
            <div className="text-sm opacity-70" style={{ color: '#2A2E30' }}>
              Happy Clients
            </div>
          </div>
          
          <div className="text-center p-6 rounded-xl" style={{ backgroundColor: 'rgba(244, 101, 48, 0.05)' }}>
            <div className="text-3xl font-bold mb-2" style={{ color: '#F46530' }}>
              4.9
            </div>
            <div className="text-sm opacity-70" style={{ color: '#2A2E30' }}>
              Average Rating
            </div>
          </div>

          <div className="text-center p-6 rounded-xl" style={{ backgroundColor: 'rgba(244, 101, 48, 0.05)' }}>
            <div className="text-3xl font-bold mb-2" style={{ color: '#F46530' }}>
              10+
            </div>
            <div className="text-sm opacity-70" style={{ color: '#2A2E30' }}>
              Countries Served
            </div>
          </div>

          <div className="text-center p-6 rounded-xl" style={{ backgroundColor: 'rgba(244, 101, 48, 0.05)' }}>
            <div className="text-3xl font-bold mb-2" style={{ color: '#F46530' }}>
              98%
            </div>
            <div className="text-sm opacity-70" style={{ color: '#2A2E30' }}>
              Satisfaction Rate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
