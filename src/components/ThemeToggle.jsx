"use client";

import { useTheme } from "../providers/ThemeProvider";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="p-2 rounded-md">
      {theme === "dark" ? <Moon color="white" /> : <Sun />}
    </button>
  );
};

export default ThemeToggle;
