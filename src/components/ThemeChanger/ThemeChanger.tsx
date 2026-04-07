import { Theme } from "../types";
import { ThemeMode } from "../enums";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectTheme } from "../../store/features/device";
import { setTheme } from "../../store/features/device";

import "./themeChanger.css";

export default function ThemeChanger() {
  const dispatch = useDispatch();

  const themes = Object.values(ThemeMode);
  const loadThemeFromStorage = () => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") ?? "{}";
      const loadedTheme = themes.find(
        (theme) => theme === JSON.parse(savedTheme)
      );
      return loadedTheme ? ThemeMode[loadedTheme] : ThemeMode.dark;
    }
    return ThemeMode.dark;
  };
  const currentTheme: Theme = useSelector(selectTheme);

  useEffect(() => {
    dispatch(setTheme(loadThemeFromStorage()));
    document.body.setAttribute("data-theme", currentTheme);
    return () => {
      document.body.removeAttribute("data-theme");
    };
  }, [currentTheme]);
  const toggleTheme = () => {
    const newTheme =
      themes.find((theme) => theme !== currentTheme) ?? currentTheme;
    localStorage.setItem("theme", JSON.stringify(newTheme));
    dispatch(setTheme(newTheme));
    return newTheme;
  };

  const sunIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );

  const moonIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
  return (
    <>
      <button
        className="theme-toggle icon-btn"
        onClick={toggleTheme}
        title={
          currentTheme === "dark"
            ? "Переключить на светлую тему"
            : "Переключить на темную тему"
        }
      >
        {currentTheme === "dark" ? sunIcon : moonIcon}
      </button>
    </>
  );
}
