import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "DevOps Engineer",
    location: "Jakarta, Indonesia",
    description:
      "I am working as fulltime DevOps Engineer, Support CI/CD pipeline for developer team, Provide Infrastructure recovery disaster.",
    icon: React.createElement(CgWorkAlt),
    date: "September 2023 - now",
  },
  {
    title: "Software Engineer",
    location: "Bandung, Indonesia",
    description:
      "I worked as a Software Engineer for 1 year 7 month, I used Odoo",
    icon: React.createElement(CgWorkAlt),
    date: "February 2022 - August 2023",
  },
  {
    title: "Graduate Bootcamp",
    location: "Arkademy Tech Academy, Indonesia",
    description:
      "I took DevOps class.",
    icon: React.createElement(LuGraduationCap),
    date: "June 2021 - October 2021",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Odoo",
  "Python",
  "JavaScript",
  "AWS",
  "Docker"
] as const;
