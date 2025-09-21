"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { techcollections } from "@/constants/index";

const SkillSection = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const [isPaused, setIsPaused] = useState(false);
  const positionRef = useRef(0);

  // Data untuk tech stack dari constants
  const techStack = techcollections.map(item => ({
    name: item.name,
    icon: item.icon,
    link: "#"
  }));

  // Duplikasi data untuk efek infinite
  const duplicatedTechStack = [...techStack, ...techStack];

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const speed = 1; // Pixels per frame

    const animate = () => {
      if (!isPaused) {
        positionRef.current -= speed;
        
        // Reset position ketika mencapai setengah width
        const scrollWidth = scroller.scrollWidth / 2;
        if (Math.abs(positionRef.current) >= scrollWidth) {
          positionRef.current = 0;
        }
        
        scroller.style.transform = `translateX(${positionRef.current}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  return (
    <section className="w-full py-5 bg-background overflow-hidden">
      <div className="container mx-auto px-0">
        <div 
          className="relative w-full max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            ref={scrollerRef}
            className="flex whitespace-nowrap"
            style={{ willChange: 'transform' }}
          >
            {duplicatedTechStack.map((tech, index) => (
              <div
                key={index}
                className="inline-flex flex-col items-center justify-center mx-4 p-6 bg-background rounded-xl shadow-lg hover:bg-suram transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl min-w-[140px] border border-gray-200"
              >
                <Icon 
                  icon={tech.icon} 
                  className="text-4xl mb-2 text-black" 
                />
                <span className="text-black font-medium text-sm mt-2">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* Gradient overlay untuk efek fade di ujung */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;