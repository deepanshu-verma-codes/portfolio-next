import React from "react";
import { socialLinks } from "@/constants/socialLink";
import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "../ui/ThemeToggle";

const Navbar = () => {
  return (
    <div>
      <div className="fixed top-8 right-8 z-50">
        <ThemeToggle />
      </div>
      <div className="hidden sm:block">
        <SocialIcons />
        <EmailFloatingIcon />
      </div>
    </div>
  );
};
export default Navbar;

// === Social Icons ===
function SocialIcons() {
  return (
    <motion.div
      className="fixed bottom-0 left-10 hidden lg:flex flex-col items-center space-y-6 z-50"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.5,
          },
        },
      }}
    >
      {socialLinks.map(({ href, icon: Icon, label }) => (
        <motion.div
          key={label}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="pb-4"
        >
          <Link
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-all duration-300 transform hover:-translate-y-1 block"
          >
            <Icon className="w-5 h-5" />
          </Link>
        </motion.div>
      ))}
      <div className="w-[1px] h-24 bg-foreground/30 transition-colors duration-300" />
    </motion.div>
  );
}

// === Email Floating Icon ===
function EmailFloatingIcon() {
  const email = "vermadeepanshu123@gmail.com";

  return (
    <motion.div
      className="fixed bottom-0 right-10 hidden lg:flex flex-col items-center space-y-6 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <div className="pb-4">
        <a
          href={`https://mail.google.com/mail/?view=cm&to=${email}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send Email"
          className="text-sm text-muted-foreground vertical-text hover:text-accent transition-all duration-300 hover:-translate-y-1 font-code tracking-widest"
          style={{ writingMode: 'vertical-rl' }}
        >
          {email}
        </a>
      </div>
      <div className="w-[1px] h-24 bg-foreground/30 transition-colors duration-300" />
    </motion.div>
  );
}
