
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, className, delay = 0 }: FeatureCardProps) => {
  const delayClass = delay ? `animate-delay-${delay}00` : '';
  
  return (
    <div 
      className={cn(
        "group p-6 rounded-xl bg-background border border-border/50 transition-all duration-300 hover:shadow-subtle hover:border-border/80 animate-fade-in animate-slide-up",
        delayClass,
        className
      )}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent/80 text-accent-foreground mb-5 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
