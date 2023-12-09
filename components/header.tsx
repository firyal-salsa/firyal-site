"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { SlSocialLinkedin, SlSocialGithub, SlSocialInstagram, SlSocialGoogle } from "react-icons/sl";


export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

    const textShadowStyle = {
      textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #f0f, 0 0 70px #f0f, 0 0 80px #f0f, 0 0 100px #f0f',
    };

  return (
    <header className="z-[999] relative">
      <nav className="fixed left-28 bottom-16 -translate-x-1/2">
        <ul className="">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-end px-3 py-3 transition text-white",
                  {
                    "text-gray-950 dark:text-gray-200 glow-background": activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.p
                    className="absolute inset-0 activ" // Added glow-background here
                    id="activ"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.p>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
        <br />
        <ul className="p-0 w-20 gap-y-1 space-y-4  flex flex-col items-end">
          <li>
            <a href="https://www.linkedin.com/in/firyal-y-salsabila/" target="_blank" rel="noreferrer">
              <SlSocialLinkedin className="w-10 h-10 text-white hover:w-16" />
            </a>
          </li>
          <li>
            <a href="mailto:firsabilac@gmail.com" target="_blank" rel="noreferrer">
              <SlSocialGoogle className="w-10 h-10 text-white hover:w-16" />
            </a>
          </li>
          <li>
            <a href="https://www.github.com/firyal-salsa" target="_blank" rel="noreferrer">
              <SlSocialGithub className="w-10 h-10 text-white hover:w-16" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/viola.tte/" target="_blank" rel="noreferrer">
              <SlSocialInstagram className="w-10 h-10 text-white hover:w-16" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
