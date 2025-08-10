import { useState } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.querySelector("html").setAttribute("data-theme", newTheme);
  };

  return (
    <button className="btn btn-bg text-white" onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
}

export default ThemeToggle;
