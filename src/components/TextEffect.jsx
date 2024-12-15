import React, { useEffect, useState, useRef } from "react";
import Markdown from "react-markdown";

const TextEffect = ({ text }) => {
  const [visibleWords, setVisibleWords] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    // Reset visibleWords when the text changes
    setVisibleWords([]);

    const words = text.split(" ");
    let index = 0;

    // Clear the previous interval if it exists
    const intervalId = setInterval(() => {
      if (index < words.length) {
        setVisibleWords((prev) => [...prev, words[index]]);
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 80); // Adjust the speed of word appearance here

    return () => clearInterval(intervalId); // Cleanup the interval on unmount
  }, [text]); // Only depend on text prop

  useEffect(() => {
    // Scroll to the bottom when visibleWords changes
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [visibleWords]);

  return (
    <div>
      <Markdown>{visibleWords.join(" ")}</Markdown>
      <div ref={scrollRef}></div>
    </div>
  );
};

export default TextEffect;
