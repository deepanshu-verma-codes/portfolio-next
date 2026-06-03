import React from "react";
import { motion } from "framer-motion";
import { experiences } from "@/constants/exprience";
import Link from "next/link";

const TimelineExperience = () => {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-card-foreground font-heading whitespace-nowrap">
          Where I&apos;ve Worked
        </h2>
        <div className="h-[1px] bg-border w-full" />
      </div>

      <div className="relative mt-8 px-4 md:px-0">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-accent/10 z-0">
           <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="w-full bg-accent shadow-[0_0_8px_#64ffda]" 
           />
        </div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                <motion.div 
                   initial={{ scale: 0 }}
                   whileInView={{ scale: 1 }}
                   transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
                   viewport={{ once: true }}
                   className="w-4 h-4 rounded-full bg-background border-2 border-accent shadow-[0_0_10px_#64ffda]"
                />
              </div>

              {/* Content Card */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className={`w-full md:w-[45%] ml-12 md:ml-0 p-6 bg-card rounded-xl border border-border hover:border-accent/30 transition-all duration-300 shadow-xl group relative z-10`}
              >
                <div className="flex flex-col mb-4">
                  <span className="text-accent font-code text-xs mb-1 uppercase tracking-widest">{exp.date}</span>
                  <h3 className="text-xl font-bold text-card-foreground font-heading group-hover:text-accent transition-colors">
                    {exp.name}
                  </h3>
                  <Link 
                    href={exp.live_link} 
                    target="_blank"
                    className="text-muted-foreground hover:text-accent text-sm font-medium transition-colors"
                  >
                    @ {exp.title}
                  </Link>
                </div>

                <ul className="space-y-3">
                  {exp.description
                    .split("▹")
                    .filter((item) => item.trim() !== "")
                    .map((item, i) => (
                      <li key={i} className="relative pl-6 text-muted-foreground text-sm leading-relaxed font-body">
                        <span className="absolute left-0 top-1.5 text-accent">▹</span>
                        {item.trim()}
                      </li>
                    ))}
                </ul>
              </motion.div>

              {/* Spacer for MD screens to keep alignment */}
              <div className="hidden md:block md:w-[45%]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineExperience;
