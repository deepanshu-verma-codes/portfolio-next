import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/constants/exprience";
import Link from "next/link";

const ModernExperience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="max-w-4xl mx-auto py-20 px-6 min-h-[600px]">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6] font-heading whitespace-nowrap">
          Where I&apos;ve Worked
        </h2>
        <div className="h-[1px] bg-[#233554] w-full" />
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Tab List */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-[#233554] min-w-[150px] scrollbar-hide">
          {experiences.map((exp, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 text-left font-code text-sm transition-all duration-300 border-b-2 md:border-b-0 md:border-l-2 whitespace-nowrap md:whitespace-normal
                ${
                  activeTab === idx
                    ? "text-[#64ffda] bg-[#112240] border-[#64ffda]"
                    : "text-[#8892b0] border-[#233554] hover:bg-[#112240] hover:text-[#64ffda]"
                }`}
            >
              {exp.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex-grow min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#ccd6f6] font-heading">
                {experiences[activeTab].name}{" "}
                <span className="text-[#64ffda]">
                  @{" "}
                  <Link
                    href={experiences[activeTab].live_link}
                    target="_blank"
                    className="hover:underline"
                  >
                    {experiences[activeTab].title}
                  </Link>
                </span>
              </h3>
              
              <p className="font-code text-sm text-[#8892b0]">
                {experiences[activeTab].date}
              </p>

              <ul className="space-y-4 mt-6">
                {experiences[activeTab].description
                  .split("▹")
                  .filter((item) => item.trim() !== "")
                  .map((item, idx) => (
                    <li
                      key={idx}
                      className="relative pl-8 text-[#8892b0] leading-relaxed font-body text-[16px]"
                    >
                      <span className="absolute left-0 top-1.5 text-[#64ffda] text-sm">
                        ▹
                      </span>
                      {item.trim()}
                    </li>
                  ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ModernExperience;
