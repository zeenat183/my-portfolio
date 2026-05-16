"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="
        relative
        w-14
        h-8
        rounded-full
        border
        border-black/10
        dark:border-white/10
        bg-black/5
        dark:bg-white/5
        flex
        items-center
        px-1
        transition
      "
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        animate={{
          x: theme === "dark" ? 24 : 0,
        }}
        className="
          w-6
          h-6
          rounded-full
          bg-black
          dark:bg-white
          flex
          items-center
          justify-center
          text-white
          dark:text-black
        "
      >
        {theme === "dark" ? <Moon size={14} /> : <Sun size={14} />}
      </motion.div>
    </button>
  );
}
