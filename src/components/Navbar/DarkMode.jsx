import React from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light"
  );

  // Effect to apply the theme
  React.useEffect(() => {
    const element = document.documentElement; // Select the <html> element
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
    localStorage.setItem("theme", theme); // Persist theme to localStorage
  }, [theme]);

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="relative">
      {/* Light Mode Button */}
      <img
        src={LightButton}
        alt="Light Mode"
        onClick={toggleTheme}
        className={`w-12 cursor-pointer transition-all duration-300 absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />
      {/* Dark Mode Button */}
      <img
        src={DarkButton}
        alt="Dark Mode"
        onClick={toggleTheme}
        className={`w-12 cursor-pointer transition-all duration-300 ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default DarkMode;
