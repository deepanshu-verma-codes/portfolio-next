import React from "react";
import { motion } from "framer-motion";
import { experiences } from "@/constants/exprience";
import Link from "next/link";
import { Briefcase } from "lucide-react";

const MilestoneExperience = () => {
  return (
    <div className="max-w-4xl mx-auto py-24 px-6">
      <div className="flex items-center gap-4 mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-card-foreground font-heading whitespace-nowrap">
          Where I&apos;ve Worked
        </h2>
        <div className="h-[1px] bg-border w-full" />
      </div>

      <div className="relative space-y-0">
        {/* Main Vertical Track */}
        <div className="absolute left-6 md:left-[120px] top-0 bottom-0 w-[2px] bg-border/40" />

        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="relative flex flex-col md:flex-row gap-8 md:gap-20 pb-20 last:pb-0"
          >
            {/* Date Column (Desktop) */}
            <div className="hidden md:block w-[120px] pt-1 text-right pr-10">
              <span className="text-xs font-code text-accent uppercase tracking-wider sticky top-24">
                {exp.date.split("–")[0]}
              </span>
            </div>

            {/* Marker */}
            <div className="absolute left-6 md:left-[120px] transform -translate-x-1/2 z-10">
              <div className="w-12 h-12 rounded-full bg-background border-2 border-border flex items-center justify-center group-hover:border-accent transition-colors shadow-sm">
                <Briefcase size={20} className="text-muted-foreground" />
              </div>
            </div>

            {/* Content Column */}
            <div className="pl-16 md:pl-0 flex-grow">
              <div className="bg-card rounded-2xl p-8 border border-border hover:border-accent/40 transition-all duration-300 shadow-xl hover:shadow-2xl group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground font-heading group-hover:text-accent transition-colors">
                      {exp.name}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground font-medium text-sm mt-1">
                      <span className="text-accent">@</span>
                      <Link 
                        href={exp.live_link} 
                        target="_blank"
                        className="hover:underline decoration-accent underline-offset-4"
                      >
                        {exp.title}
                      </Link>
                    </div>
                  </div>
                  <div className="md:hidden">
                    <span className="text-xs font-code text-accent uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full">
                      {exp.date}
                    </span>
                  </div>
                  <div className="hidden md:block">
                     <span className="text-xs font-code text-muted-foreground uppercase tracking-widest">
                      {exp.date}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4">
                  {exp.description
                    .split("▹")
                    .filter((item) => item.trim() !== "")
                    .map((item, i) => (
                      <li key={i} className="relative pl-7 text-muted-foreground text-[15px] leading-relaxed font-body">
                        <span className="absolute left-0 top-1.5 text-accent text-lg leading-none font-bold">▹</span>
                        {item.trim()}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MilestoneExperience;
