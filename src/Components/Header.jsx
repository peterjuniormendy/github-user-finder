import React from "react";
import { useState } from "react";
import sunIcon from "../assets/icon-sun.svg";
import moon from "../assets/moon-solid.svg";

const Header = () => {
  const [colorTheme, setColorTheme] = useState("");

  const theme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("prefers-color-sheme: dark").matches;

  const checkTheme = () => {
    if (theme === "dark" || (!theme && systemTheme)) {
      document.documentElement.classList.add("dark");
    }
  };

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setColorTheme("Dark");
      return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setColorTheme("Light");
  };

  const toggleIcons = () => {
    if (document.documentElement.classList.contains("dark")) {
      return sunIcon;
    } else {
      return moon;
    }
  };

  checkTheme();
  return (
    <header className="lg:max-w-3xl md:max-w-xl sm:max-w-lg mx-auto py-6 flex justify-between items-center rounded-2xl text-slate-900 dark:text-white">
      <h3 className="text-2xl font-semibold font-mono tracking-tighter text-black dark:text-white">
        devfinder
      </h3>
      <div onClick={toggleTheme} className="cursor-pointer">
        <span className="uppercase tracking-widest text-sm font-medium">
          {colorTheme || (!systemTheme && "Light")}
        </span>
        <img
          src={theme === "dark" || (!theme && systemTheme) ? sunIcon : moon}
          alt="theme icon"
          className="inline-block ml-2 w-4"
        />
      </div>
    </header>
  );
};

export default Header;
