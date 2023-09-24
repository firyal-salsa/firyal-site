import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import maven from "@/public/maven.png";
import ankasa from "@/public/ankasa.png";
import blanja from "@/public/blanja.png"

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
    title: "Blanja",
    description:
      "Online Shop web application",
    tags: ["Express.Js", "React.js", "AWS", "Docker", "Kubernetes", "Nginx", "Jenkins"],
    imageUrl: blanja,
  },
  {
    title: "Ankasa",
    description:
      "Online booking ticket web application",
    tags: ["Express.Js", "React.js", "AWS", "Docker", "Kubernetes", "Nginx", "Jenkins"],
    imageUrl: ankasa,
  },
  {
    title: "Maven",
    description:
      " a Personalised Learning web application",
    tags: ["Odoo", "Svelte"],
    imageUrl: maven,
  },
] as const;

export const skillsData = [
  "Odoo",
  "Python",
  "JavaScript",
  "AWS",
  "Docker"
] as const;
