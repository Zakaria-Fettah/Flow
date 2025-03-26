
import React from 'react';
import FeatureCard from './FeatureCard';
import { Layers, Shield, Zap, Layout, Users, LineChart } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Built for speed and performance with optimized code and minimal footprint."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure by Design",
      description: "Enterprise-grade security implementations to keep your data safe."
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Modular Architecture",
      description: "Customize and extend with a flexible, component-based structure."
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: "Responsive UI",
      description: "Beautiful interfaces that work perfectly on any device or screen size."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaborative",
      description: "Built for teams with real-time updates and seamless integration."
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Advanced Analytics",
      description: "Gain insights with comprehensive reporting and visualization tools."
    }
  ];

  return (
    <section id="features" className="section relative overflow-hidden">
      <div className="container px-4 mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex mb-4 px-3 py-1 text-sm bg-accent rounded-full animate-fade-in">
            Features
          </div>
          <h2 className="section-title mb-4 animate-fade-in animate-delay-100">
            Everything you need
          </h2>
          <p className="section-subtitle animate-fade-in animate-delay-200">
            A comprehensive suite of tools designed to enhance your workflow and elevate your projects with thoughtful features and capabilities.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index % 3}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
