"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`p-2 rounded-full bg-transparent border transition-colors ${
        isDark 
          ? "border-white hover:bg-white/10" 
          : "border-black hover:bg-black/5"
      }`}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun size={20} color="white" />
      ) : (
        <Moon size={20} color="black" />
      )}
    </motion.button>
  );
}