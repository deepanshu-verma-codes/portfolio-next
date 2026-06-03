"use client";

import React from "react";
import ModernSkillCard from "./ModernSkillCard";
import CoreStrengths from "./CoreStrengths";

export default function Skills() {
 
  return (
    <section>
      <ModernSkillCard />
      <div className="-mt-16">
        <CoreStrengths />
      </div>
    </section>
  );
}
