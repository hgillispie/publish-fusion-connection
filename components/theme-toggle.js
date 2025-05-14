import { useTheme } from "@/lib/theme-context";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();
  // To avoid hydration mismatch, we'll track if component has mounted
  const [mounted, setMounted] = useState(false);

  // Once component mounts, we can render it safely with the correct state
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return empty div with the same dimensions to avoid layout shift
    return <div className="inline-flex h-6 w-12"></div>;
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex items-center justify-center rounded-full p-1 transition-colors"
      title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative h-6 w-12 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors">
        <div
          className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out ${
            isDarkMode ? "translate-x-6 bg-blue-600" : "translate-x-0"
          }`}
        />
      </div>
      <span className="sr-only">{isDarkMode ? "Dark Mode" : "Light Mode"}</span>

      {/* Sun/Moon icons */}
      <div className="absolute pointer-events-none">
        {isDarkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-yellow-300 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-yellow-500 ml-7"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
    </button>
  );
}
