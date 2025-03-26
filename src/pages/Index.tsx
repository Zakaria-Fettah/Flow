
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

const Index = () => {
  // Preload images for smoother transitions
  useEffect(() => {
    const preloadImages = () => {
      const imagesToPreload = [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
      ];
      
      imagesToPreload.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };
    
    preloadImages();
    
    // Smooth appearance of the page
    document.body.classList.add('animate-fade-in');
    
    return () => {
      document.body.classList.remove('animate-fade-in');
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        
        {/* Additional sections will go here in future updates */}
        <section id="benefits" className="section bg-accent/30">
          <div className="container px-4 mx-auto text-center">
            <h2 className="section-title mb-8 animate-fade-in">Ready to get started?</h2>
            <p className="section-subtitle mx-auto mb-8 animate-fade-in animate-delay-100">
              Join thousands of creators building with our platform
            </p>
            <div className="inline-block animate-fade-in animate-delay-200">
              <a 
                href="#" 
                className="inline-flex items-center justify-center h-12 px-8 font-medium bg-primary text-primary-foreground rounded-lg transition-all hover:opacity-90 shadow-button"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
