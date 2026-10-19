"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import Header from "@/components/Header";
import StatePromise from "@/components/StatePromise";
import StateExpertise from "@/components/StateExpertise";
import StateShowcase from "@/components/StateShowcase";
import FullPreviewModal from "@/components/FullPreviewModal";
import ContactModal from "@/components/ContactModal";
import { SHOWCASE_ITEMS } from "@/components/showcase/showcaseData";

export default function KreatizApp() {
  const [currentState, setCurrentState] = useState<number>(1);
  const [direction, setDirection] = useState<number>(1); // 1 = down, -1 = up
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const [isFullPreviewOpen, setIsFullPreviewOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  const lastScrollTime = useRef<number>(0);
  const touchStartY = useRef<number>(0);

  // Smooth state transition handler with cooldown
  const goToState = useCallback((targetState: number) => {
    if (targetState < 1 || targetState > 3) return;
    setDirection(targetState > currentState ? 1 : -1);
    setCurrentState(targetState);
  }, [currentState]);

  // Wheel event listener with debounce cooldown (750ms)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // If modal or full preview is open, don't hijack wheel
      if (isFullPreviewOpen || isContactOpen) return;

      const now = Date.now();
      if (now - lastScrollTime.current < 750) return;

      // Small threshold to prevent micro-jitters
      if (Math.abs(e.deltaY) < 20) return;

      if (e.deltaY > 0) {
        // Scroll down
        if (currentState < 3) {
          lastScrollTime.current = now;
          goToState(currentState + 1);
        }
      } else if (e.deltaY < 0) {
        // Scroll up
        if (currentState > 1) {
          lastScrollTime.current = now;
          goToState(currentState - 1);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentState, isFullPreviewOpen, isContactOpen, goToState]);

  // Keyboard navigation (Arrow keys, PageUp, PageDown)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isFullPreviewOpen || isContactOpen) return;

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        if (currentState < 3) goToState(currentState + 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        if (currentState > 1) goToState(currentState - 1);
      } else if (currentState === 3) {
        // Lateral arrow keys navigate carousel when in State 3
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          setCarouselIndex((prev) => (prev - 1 + SHOWCASE_ITEMS.length) % SHOWCASE_ITEMS.length);
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          setCarouselIndex((prev) => (prev + 1) % SHOWCASE_ITEMS.length);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentState, isFullPreviewOpen, isContactOpen, goToState]);

  // Touch swipe handling for mobile / trackpad touch
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isFullPreviewOpen || isContactOpen) return;
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY.current - touchEndY;

      if (Math.abs(deltaY) > 50) {
        if (deltaY > 0 && currentState < 3) {
          goToState(currentState + 1);
        } else if (deltaY < 0 && currentState > 1) {
          goToState(currentState - 1);
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentState, isFullPreviewOpen, isContactOpen, goToState]);

  // Parallax animation variants
  const variants: Variants = {
    enter: (dir: number) => ({
      y: dir > 0 ? "40px" : "-40px",
      opacity: 0,
      scale: 0.97,
      filter: "blur(3px)",
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        y: { type: "spring" as const, stiffness: 220, damping: 28 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.4 },
        filter: { duration: 0.3 },
      },
    },
    exit: (dir: number) => ({
      y: dir > 0 ? "-40px" : "40px",
      opacity: 0,
      scale: 0.97,
      filter: "blur(3px)",
      transition: {
        duration: 0.3,
      },
    }),
  };

  const activeShowcaseItem = SHOWCASE_ITEMS[carouselIndex];

  return (
    <main className="fixed inset-0 w-screen h-screen overflow-hidden bg-[#FFFFFF] text-[#0A0B0E] flex flex-col select-none">
      {/* Background Architectural Subtle Grid */}
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-60 z-0"></div>

      {/* Fixed Header */}
      <Header
        currentState={currentState}
        onSelectState={goToState}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Spatial Viewport Area (Calc 100vh - 64px header) */}
      <div className="relative w-full h-[calc(100vh-64px)] mt-16 z-10 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          {currentState === 1 && (
            <motion.div
              key="state-01"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full flex items-center justify-center"
            >
              <StatePromise onNext={() => goToState(2)} />
            </motion.div>
          )}

          {currentState === 2 && (
            <motion.div
              key="state-02"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full flex items-center justify-center"
            >
              <StateExpertise
                onNext={() => goToState(3)}
                onPrev={() => goToState(1)}
              />
            </motion.div>
          )}

          {currentState === 3 && (
            <motion.div
              key="state-03"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full flex items-center justify-center"
            >
              <StateShowcase
                currentIndex={carouselIndex}
                onSelectIndex={setCarouselIndex}
                onOpenFullPreview={() => setIsFullPreviewOpen(true)}
                onPrevState={() => goToState(2)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Option B: Mode Aperçu Grand Format (Expansion plein cadre) */}
      <FullPreviewModal
        isOpen={isFullPreviewOpen}
        onClose={() => setIsFullPreviewOpen(false)}
        activeId={activeShowcaseItem.id}
        onSelectId={(newId) => {
          const idx = SHOWCASE_ITEMS.findIndex((it) => it.id === newId);
          if (idx !== -1) setCarouselIndex(idx);
        }}
      />

      {/* Quick Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </main>
  );
}
