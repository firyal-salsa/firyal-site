"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import SectionHeading from "./section-heading";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <motion.section
          ref={ref}
          className="mb-32 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.175 }}
          id="intro"
        >
          <SectionHeading>
            <h3>
              Firyal Yusriyah Salsabila
            </h3>
            <h1>
              DevOps Engineer
            </h1>
          </SectionHeading>
        </motion.section>
  );
}
