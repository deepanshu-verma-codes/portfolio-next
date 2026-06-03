import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink, Folder } from "lucide-react";
import { projectType } from "@/types/project";
import Tooltip from "../ui/tooltip/Tooltip";

const ModernProjectCard = ({ project, index }: { project: projectType; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative flex flex-col h-full bg-card rounded-xl overflow-hidden hover:-translate-y-2 transition-all duration-300 border border-border hover:border-accent/40 shadow-2xl"
    >
      {/* Project Image/Logo Header */}
      <div className="relative h-48 w-full overflow-hidden bg-background">
        <Image
          alt={project.title}
          src={project.logo}
          fill
          className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        
        {/* Floating Icons on Image */}
        <div className="absolute top-4 right-4 flex gap-3 z-20">
          {project.live_link !== "#" && (
            <a
              href={project.live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-background/80 rounded-full text-card-foreground hover:text-accent transform hover:scale-110 transition-all duration-200 backdrop-blur-sm border border-white/10"
              aria-label="Live Link"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow relative z-10">
        <div className="flex items-center gap-2 mb-3">
            <Folder size={18} className="text-accent" strokeWidth={1.5} />
            <span className="text-accent font-code text-xs uppercase tracking-widest">Project</span>
        </div>

        <h3 className="text-card-foreground text-xl font-bold mb-3 group-hover:text-accent transition-colors font-heading tracking-tight">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm mb-6 leading-relaxed font-body flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mt-auto border-t border-border pt-4">
          {project.stack_image?.map(({ name, icon: Icon }, idx) => {
             return (
              <Tooltip
                key={idx}
                content={name}
                position="top"
              >
                <div className="text-xl text-muted-foreground hover:text-accent transition-all duration-300 opacity-60 hover:opacity-100 flex items-center justify-center grayscale hover:grayscale-0">
                  <Icon />
                </div>
              </Tooltip>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ModernProjectCard;
