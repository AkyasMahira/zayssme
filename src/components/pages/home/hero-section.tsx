"use client";

import Image from "next/image";

const HeroSection = () => {
  const bannerImagePath = "/banner.jpeg"; 

  return (
    <section className="relative flex items-start sm:items-center justify-between px-6 py-8 h-40 overflow-hidden">
      <div className="absolute inset-0">
        <Image 
          src={bannerImagePath} 
          alt="Banner" 
          fill 
          priority
          unoptimized={true} 
          style={{ objectFit: 'cover' }}
        />
      </div>
    </section>
  );
};

export default HeroSection;