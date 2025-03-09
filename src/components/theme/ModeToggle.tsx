"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleTheme = () => {
    if (!document.startViewTransition) switchTheme();
    document.startViewTransition(switchTheme);
  };

  if (!mounted) {
    return (
      <Button variant="outline" className="cursor-pointer">
        <Moon />
      </Button>
    );
  }

  return (
    <Button variant="outline" onClick={toggleTheme} className="cursor-pointer">
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
}
