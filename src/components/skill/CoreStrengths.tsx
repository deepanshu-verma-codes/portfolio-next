import React from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Cpu, Code2 } from "lucide-react";

const CoreStrengths = () => {
  const strengths = [
    {
      title: "System Architecture",
      description: "Designing scalable, maintainable, and robust full-stack ecosystems using modern patterns.",
      icon: <Cpu size={24} />,
    },
    {
      title: "Performance Optimization",
      description: "Optimizing applications for maximum speed, scalability, and seamless user experiences.",
      icon: <Zap size={24} />,
    },
    {
      title: "Clean Code & Quality",
      description: "Writing readable, well-documented, and testable code that follows industry best practices.",
      icon: <Code2 size={24} />,
    },
    {
      title: "Security Mindset",
      description: "Implementing rigorous security protocols and data protection across the entire stack.",
      icon: <Shield size={24} />,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {strengths.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="p-6 bg-card rounded-xl border border-border hover:border-accent/30 transition-all duration-300 group"
          >
            <div className="text-accent mb-4 p-3 bg-background rounded-lg w-fit group-hover:bg-accent/10 transition-colors">
              {item.icon}
            </div>
            <h3 className="text-card-foreground text-lg font-bold mb-2 font-heading">
              {item.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-body">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoreStrengths;
