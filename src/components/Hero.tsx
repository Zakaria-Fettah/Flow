
import React, { useEffect, useRef } from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPos = window.scrollY;
      const elements = heroRef.current.querySelectorAll('.parallax');
      
      elements.forEach((el) => {
        const speed = (el as HTMLElement).dataset.speed || '0.1';
        const movement = scrollPos * parseFloat(speed);
        (el as HTMLElement).style.transform = `translateY(${movement}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-20 w-80 h-80 bg-blue-100 rounded-full opacity-50 filter blur-3xl parallax" data-speed="-0.1"></div>
        <div className="absolute bottom-10 -left-20 w-80 h-80 bg-indigo-50 rounded-full opacity-70 filter blur-3xl parallax" data-speed="0.05"></div>
        <div className="absolute noise-bg inset-0"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto pt-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Badge */}
          <div className="inline-flex mb-8 animate-fade-in">
            <div className="flex items-center gap-2 px-3 py-1 text-sm bg-accent rounded-full">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span>Seamless Experience</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight animate-fade-in">
            Create beautiful digital <br /> experiences that <span className="text-blue-500">matter</span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl mb-10 animate-fade-in animate-delay-100">
            A design system for creating stunning interfaces with pixel-perfect attention to detail and exceptional user experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20 animate-fade-in animate-delay-200">
            <Button 
              variant="primary" 
              size="lg"
              icon={<ArrowRight size={18} />} 
              iconPosition="right"
            >
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
          
          {/* Hero Image */}
          <div className="relative mx-auto max-w-4xl animate-fade-in animate-delay-300">
            <div className="absolute inset-0 -m-4 bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-xl filter blur-xl opacity-70"></div>
            <div className="glass-card rounded-xl overflow-hidden shadow-elevation relative">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" 
                  alt="Dashboard Interface" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
