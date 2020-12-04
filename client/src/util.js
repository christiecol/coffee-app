import { useState, useEffect } from "react";

// conditional rendering for mobile
export const useViewport = () => {
  //initial window size is undefined so server and client renders match, if applicable
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Window resize handler
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    //state updates with initial window size
    handleResize();

    //cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); //runs on mount
  return windowSize;
};
