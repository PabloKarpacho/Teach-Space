import { useState, useEffect } from "react";

const useIsBreakpoint = (breakpoint = 768) => {
  const [isBreakpoint, setIsBreakpoint] = useState(
    window.innerWidth < breakpoint
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsBreakpoint(e.matches);
    };

    // Установка начального значения
    setIsBreakpoint(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [breakpoint]);

  return isBreakpoint;
};

export default useIsBreakpoint;
