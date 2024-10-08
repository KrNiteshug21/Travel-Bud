// components/ThemeToggle.js
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the toggle
  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Prevents hydration mismatch

  return (
    <button
      className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
