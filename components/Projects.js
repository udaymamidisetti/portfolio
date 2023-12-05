import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Dynamic-Form"
            backgroundImg="https://res.cloudinary.com/drjnmxyd5/image/upload/v1701767334/Screenshot_2023-12-05_143555_eglh4b.png"
            projectUrl="https://dynamicform-rho.vercel.app/uday"
            tech="React JS"
          />
          {/* <ProjectItem
            title="Ecommerce-clone"
            backgroundImg="https://res.cloudinary.com/drjnmxyd5/image/upload/v1681390071/React_App_9_kdwxjt.png"
            projectUrl="https://next-trend.vercel.app/"
            tech="React JS"
          />
          <ProjectItem
            title="Jobbby-App"
            backgroundImg="https://res.cloudinary.com/drjnmxyd5/image/upload/v1681390074/React_App_10_eingcq.png"
            projectUrl="https://jobby-app-nu.vercel.app/"
            tech="React JS"
          />
          <ProjectItem
            title="Insta-clone"
            backgroundImg="https://res.cloudinary.com/drjnmxyd5/image/upload/v1681388274/Insta_Share_mdbjry.png"
            projectUrl="https://instashare.vercel.app/"
            tech="React JS"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
