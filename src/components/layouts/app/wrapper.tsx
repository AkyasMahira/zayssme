"use client"

import Navbar from "@/components/layouts/app/navbar";
import Footer from "@/components/layouts/app/footer";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { cancelFrame, frame, useReducedMotion } from "motion/react";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import SplashScreen from "@/components/SplashScreen";

const Wrapper = ({ children }: PropsWithChildren) => {
  const lenisRef = useRef<LenisRef>(null);
  const prefersReducedMotion = useReducedMotion();
  const [showSplash, setShowSplash] = useState(true);
  const pathname = usePathname();
  const initialPathRef = useRef(true);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  // Hide splash after short delay once client has mounted
  useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 800);
    return () => clearTimeout(t);
  }, []);

  // Show splash on every client-side navigation (but skip the very first mount)
  useEffect(() => {
    if (initialPathRef.current) {
      initialPathRef.current = false;
      return;
    }

    // show splash briefly on route changes
    setShowSplash(true);
    const t = setTimeout(() => setShowSplash(false), 650);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <ReactLenis options={{ autoRaf: false }} ref={lenisRef} root>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <div className="mx-auto w-full max-w-[900px] px-7">
          {!prefersReducedMotion && <Navbar />}
          {children}
          <Footer />
        </div>
      )}
    </ReactLenis>
  );
};

export default Wrapper