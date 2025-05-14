import { createContext, useContext, useState, useEffect } from "react";

// Create theme context
export const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
});

// Hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// Theme provider component
export function ThemeProvider({ children }) {
  // Check for saved theme preference or use system preference
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme on client-side only to avoid hydration mismatch
  useEffect(() => {
    // Check local storage first
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      // Check if user prefers dark mode
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setIsDarkMode(prefersDark);
    }

    // Apply theme class to document
    updateThemeClass(savedTheme === "dark" || (!savedTheme && prefersDark));
  }, []);

  // Handle theme toggle
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);

    // Save to localStorage
    localStorage.setItem("theme", newTheme ? "dark" : "light");

    // Apply theme class to document
    updateThemeClass(newTheme);
  };

  // Function to update document class based on theme
  const updateThemeClass = (isDark) => {
    if (isDark) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
