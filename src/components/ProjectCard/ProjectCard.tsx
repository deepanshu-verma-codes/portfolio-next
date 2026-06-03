import { projectList } from "@/constants/project";
import React from "react";
import Link from "next/link";
import ModernProjectCard from "./ModernProjectCard";

const ProjectCard = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectList.map((project, idx) => (
          <ModernProjectCard key={idx} project={project} index={idx} />
        ))}
      </div>
      
      <div className="flex justify-center mt-16">
        <Link
          href="https://github.com/deepanshu-verma-codes?tab=repositories"
          target="_blank"
          className="px-8 py-4 text-accent border border-accent rounded-md 
            font-code text-sm hover:bg-accent/10 
            transition-all duration-300 ease-in-out"
        >
          Show More
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
