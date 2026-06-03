import React from "react";
import { motion } from "framer-motion";
import { techStack } from "@/constants/techStack";
import Tooltip from "../ui/tooltip/Tooltip";

const ModernSkillCard = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-card-foreground font-heading whitespace-nowrap">
          My Tech Stack
        </h2>
        <div className="h-[1px] bg-border w-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techStack.map((category: any, idx: number) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group bg-card rounded-xl p-8 border border-border hover:border-accent/30 transition-all duration-300 shadow-xl flex flex-col h-full"
          >
            <div className="mb-6">
                <h3 className="text-card-foreground text-xl font-bold mb-2 font-heading group-hover:text-accent transition-colors">
                    {category.name}
                </h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">
                    {category.description}
                </p>
            </div>

            <div className="grid grid-cols-4 gap-6 mt-auto">
                {category.children.map((tech: any, techIdx: number) => (
                    <Tooltip key={tech.id} content={tech.name} position="top">
                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="flex flex-col items-center justify-center text-muted-foreground hover:text-accent transition-all duration-300"
                        >
                            <div className="mb-1">
                                {React.cloneElement(tech.icon, { className: "text-2xl" })}
                            </div>
                        </motion.div>
                    </Tooltip>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ModernSkillCard;
