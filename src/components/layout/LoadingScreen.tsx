"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useUIStore } from "@/store";

export function LoadingScreen() {
  const setIsLoading = useUIStore((s) => s.setIsLoading);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    const delay = setTimeout(() => {
      timer = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            clearInterval(timer);
            setTimeout(() => {
              setVisible(false);
              setTimeout(() => setIsLoading(false), 300);
            }, 100);
            return 100;
          }
          return p + Math.random() * 30 + 12;
        });
      }, 50);
    }, 100);
    return () => {
      clearTimeout(delay);
      clearInterval(timer);
    };
  }, [setIsLoading]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#080a0f]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Glow orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

          <motion.div
            className="flex flex-col items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Logo mark */}
            <div className="relative">
              <motion.div
                className="w-16 h-16 rounded-2xl border border-cyan-500/30 overflow-hidden"
                animate={{ borderColor: ["rgba(110,231,247,0.3)", "rgba(110,231,247,0.8)", "rgba(110,231,247,0.3)"] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Image
                  src="/ph.png"
                  alt="Prakash H"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                  priority
                />
              </motion.div>
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{ boxShadow: ["0 0 0px rgba(110,231,247,0)", "0 0 30px rgba(110,231,247,0.3)", "0 0 0px rgba(110,231,247,0)"] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>

            {/* Name */}
            <div className="text-center">
              <p className="text-sm text-zinc-500 font-mono tracking-[0.3em] uppercase mb-1">
                Initializing
              </p>
              <p className="text-lg font-semibold text-white/80">Prakash H — Portfolio</p>
            </div>

            {/* Progress bar */}
            <div className="w-48 h-px bg-white/10 relative overflow-hidden rounded-full">
              <motion.div
                className="absolute inset-y-0 left-0 bg-linear-to-r from-cyan-500 to-indigo-500 rounded-full"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <p className="text-xs font-mono text-zinc-600">
              {Math.min(Math.round(progress), 100)}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
