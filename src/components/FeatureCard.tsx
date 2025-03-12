import React, { useEffect, useRef } from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px',
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`slide-in bg-cyber-dark rounded-lg p-6 border border-cyber-blue/20 hover:border-cyber-blue/50 
                transition-all duration-700 opacity-0 translate-y-10`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Icon className="h-8 w-8 text-cyber-blue mb-4" />
      <h3 className="text-lg font-semibold mb-2 text-cyber-blue">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
