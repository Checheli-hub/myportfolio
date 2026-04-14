import React from "react";
import restaurant from "./Images/uiux/restaurant.png";
import opays from "./Images/uiux/opays.png";
import xender from "./Images/uiux/xender.png";
import narrative from "./Images/uiux/narrative.png";
import port from "./Images/uiux/port.png";
import portfolio from "./Images/uiux/portfolio.png";

export const ProjectDashBoard = [
  {
    id: 1,
    title: "Narrative - Consumer Insight & Feedback Platform",
    category: "Design",
    action: "demo",
    image: narrative,
    description:
      "Narrative is a user research web application dessigned to collect and analyze user preferences and satisfaction levels for various products and experiences.The platform allows users to interact with structured prompt,provide feedback and generate insights that can inform decision-making and product improvement.",
    tags: ["Figma", "UI Design", "UX Research", "Restaurant"],
    link: "https://www.figma.com/proto/2f7IeReXCqsjSKDKPksSBB/Narrative?node-id=0-1&p=f&t=2sFUdPB31mHX57bA-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1",
  },
  {
    id: 2,
    title: "A Restaurant App",
    category: "Design",
    action: "demo",
    image: restaurant,
    description:
      "An end to-end UI/UX project for modern restaurant app. Designed a visually appetizing onboard experience and a streamlined Menu-to Checkout pipeline to increase conversion rates for guest users.",
    tags: ["Figma", "UI Design", "UX Research", "Restaurant"],
    link: "https://www.figma.com/proto/7iTJzfcVofivYH14OpBPuh/ABDULKUDUS-RESTAURANT?node-id=0-1&p=f&t=SkqFsVHQGYvNMvHa-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
  },

  {
    id: 3,
    title: " A File Sharing App ",
    category: "Design",
    action: "demo",
    image: xender,
    description:
      "A utility-focused mobile application designed for high-speed local file sharing and cloud synchronization.Developed a clean, list-based UI to help users organize media, documents, with a focus on quick-access search and share functionality ",
    tags: ["Figma", "UI Design", "UX Research", "File"],
    link: "https://www.figma.com/proto/J0dXeN4wmSnJJPJGDwiHHJ/xender-project?node-id=5-2&p=f&t=MGHPGOwrJCZWMyTZ-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=5%3A2",
  },

  {
    id: 4,
    title: "A Banking App",
    category: "Design",
    action: "demo",
    image: opays,
    description:
      " A comprehensive redesign of Opay interface focusing on financial accessibility and simplified transaction flows.",
    tags: ["Figma", "UI Design", "UX Research", "Fintech"],
    link: "https://www.figma.com/proto/qeVtwgHEK7K95Mv0xHcJ1H/opay?node-id=0-1&p=f&t=3A3p84VuOiI2pIzB-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A7&show-proto-sidebar=1",
  },

  {
    id: 5,
    title: "Responsive Portfolio Website",
    category: "Web",
    action: "demo",
    image: port,
    description:
      " A responsive portfolio website built with modern web technologies. Focused on clean layout structure, responsive design, and interactive UI elements.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI Design"],
    link: "https://abdulkuduswebsiteportfolio.netlify.app/",
  },

  {
    id: 6,
    title: "Developer Portfolio(React)",
    category: "Web",
    action: "code",
    image: portfolio,
    description:
      " A modern portfolio website built with React, showcasing projects through reusable components and a clean, responsive UI, focused on component-based architecture, interactive elements, and creating a smooth user experience.Continuously updated with new projects and features to demonstrate growth and adaptability in web development.",
    tags: ["React", "CSS", "JavaScript", "Responsive Design"],
    link: "https://github.com/Checheli-hub/myportfolio",
  },
];
