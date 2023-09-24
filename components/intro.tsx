"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-32 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >

      <motion.h1
        className="mb-4 mt-24 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p>
        <h1 className="font-bold">Hey, there! I'm Firyal,</h1> {" "}
        </p>
        <p>
        <h1 className="font-bold">a DevOps Engineer</h1>
        </p>
      </motion.h1>
    </section>
  );
}
