"use client";

import Image from "next/image";

const SplashScreen = () => {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: 'rgba(255,255,255,0.95)',
      zIndex: 9999,
    }}>
      <Image src="/loader.gif" alt="Loading..." width={80} height={80} priority />
    </div>
  );
};

export default SplashScreen;