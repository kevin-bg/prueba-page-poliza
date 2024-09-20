import React, { useEffect, useState } from "react";

export default function useWindowDimensions() {
  const [windowSize, setWindowSize] = useState({
    resizeWidth: 1200,
    resizeHeight: 800,
  });

  if (typeof window !== "undefined") {
    windowSize.resizeWidth = window ? window.innerWidth : 1200;
    windowSize.resizeHeight = window ? window.innerHeight : 800;
  }

  function changeWindowSize() {
    setWindowSize({ resizeWidth: window.innerWidth, resizeHeight: window.innerHeight });
  }

  useEffect(() => {
    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return windowSize;
}
