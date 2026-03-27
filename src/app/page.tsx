"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useUIStore } from "@/store";
import { useActiveSection } from "@/hooks/useActiveSection";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CommandPalette } from "@/components/layout/CommandPalette";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { HeroSection } from "@/sections/HeroSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { TechStackSection } from "@/sections/TechStackSection";
import { AboutSection } from "@/sections/AboutSection";
import { ContactSection } from "@/sections/ContactSection";
import { SectionId } from "@/types";

const SECTION_IDS: SectionId[] = [
  "hero",
  "experience",
  "projects",
  "stack",
  "about",
  "contact",
];

export default function Home() {
  const isLoading = useUIStore((s) => s.isLoading);
  useActiveSection(SECTION_IDS);

  return (
    <>
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>

      {!isLoading && (
        <SmoothScroll>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Navbar />
            <CommandPalette />

            <main>
              <HeroSection />
              <ExperienceSection />
              <ProjectsSection />
              <TechStackSection />
              <AboutSection />
              <ContactSection />
            </main>

            <Footer />
          </motion.div>
        </SmoothScroll>
      )}
    </>
  );
}
