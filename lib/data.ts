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
    hash: "home",
  },
  {
    name: "About",
    hash: "about",
  },
  {
    name: "Projects",
    hash: "projects",
  },
  {
    name: "Experience",
    hash: "experience",
  },
  {
    name: "Contact",
    hash: "contact",
  },
] as const;

export const experiencesData = [
  {
    title: "DevOps Engineer",
    location: "Jakarta, Indonesia",
    description:
      "Responsible for minimum downtime, service mitigation and life cycle.",
    icon: React.createElement(CgWorkAlt),
    date: "September 2023 - now",
  },
  {
    title: "Software Engineer",
    location: "Bandung, Indonesia",
    description:
      "Handled various projects using Odoo.",
    icon: React.createElement(CgWorkAlt),
    date: "February 2022 - August 2023",
  },
  {
    title: "Graduated DevOps Bootcamp",
    location: "Pijar Camp, Indonesia",
    description:
      "Studied Express.Js, React.Js, Shell Script, AWS, Jenkins, Docker, Kubernetes, Nginx,Prometheus, and Grafana.",
    icon: React.createElement(LuGraduationCap),
    date: "June 2021 - October 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Blanja",
    description:
      `Online Shop web application
      
      https://bit.ly/blanja-porto`,
    tags: ["Express.Js", "React.js", "AWS", "Docker", "Kubernetes", "Nginx", "Jenkins"],
    imageUrl: blanja,
  },
  {
    title: "Ankasa",
    description:
      `Online booking ticket web application
      
      https://bit.ly/ankasa-porto`,
    tags: ["Express.Js", "React.js", "AWS", "Docker", "Kubernetes", "Nginx", "Jenkins"],
    imageUrl: ankasa,
  },
  {
    title: "Maven",
    description:
      " a Personalised Learning web application",
    tags: ["Odoo"],
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
