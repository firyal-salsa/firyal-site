"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I'm a DevOps Engineer from Indonesia with over a year and seven months of experience
      as a Backend Odoo Developer. I earned my S.Tr.Kom degree from Politeknik Piksi Ganesha, 
      which kickstarted my journey into the tech world.
      </p>
      <p>
      I'm committed to lifelong learning. I've worked with various programming languages and tools,
       including Odoo, Next.Js, AWS EC2, Nginx, Docker, and Github Action.
      </p>
    </motion.section>
  );
}
