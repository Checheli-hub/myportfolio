import React from "react";
import nodejs from "./Images/nodejs.png";
import mongodb from "./Images/mongodb.png";
import javascript from "./Images/javascript.png";
import htmlcsss from "./Images/htmlcsss.png";
import figma from "./Images/figma.png";
import reactimg from "./Images/reactimg.png";
import bootstrap from "./Images/bootstrap.png";

export const TechStackData = [
  {
    id: 1,
    title: "React.Js",
    feature: "Building dynamic, component-based user interfaces with React",
    description: "Frontend Development",
    percentage: "90%",
    image: reactimg,
  },

  {
    id: 2,
    title: "Node.js",
    feature: "Backend support for web application using Apis and MongoDB",
    description: "Backend Development",
    percentage: "60%",
    image: nodejs,
  },
  {
    id: 3,
    title: "MongoDB",
    feature: "NoSQL databases; can store and retrieve data in the cloud",
    description: "Database Management",
    percentage: "60%",
    image: mongodb,
  },
  {
    id: 4,
    title: "Bootstrap",
    feature: "Utility-first CSS framework for rapid UI development",
    description: "UI Styling",
    percentage: "85%",
    image: bootstrap,
  },
  {
    id: 5,
    title: "UI/UX Design",
    feature: "User interface and user experience design principles",
    description: "Design",
    percentage: "90%",
    image: figma,
  },

  {
    id: 6,
    title: "JavaScript(ES6+)",
    feature: "Modern JavaScript for Web development",
    description: "Programming Language",
    percentage: "80%",
    image: javascript,
  },

  {
    id: 7,
    title: "HTML & CSS",
    feature: "Semantic markup and modern styling techniques",
    description: "Web Fundamentals",
    percentage: "90%",
    image: htmlcsss,
  },
];
