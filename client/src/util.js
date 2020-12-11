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

//sort recipes
// const tweets = Object.values(data.tweetsById);
// const sortedTweets = tweets.sort((a, b) =>
//   a.timestamp < b.timestamp ? 1 : b.timestamp < a.timestamp ? -1 : 0
// );
// // console.log(tweets);
// setHomeStatus("idle");
// setCurrentFeed(sortedTweets);
