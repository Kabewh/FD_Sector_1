"use client";
import React, { useRef, useEffect } from "react";

const AutoplayVideo = ({ videoSource }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        // Autoplay was prevented, handle the error here
        console.error("Autoplay was prevented:", error);
      }
    };

    const handleInteraction = () => {
      playVideo();
      document.removeEventListener("click", handleInteraction);
    };

    // Add an event listener for user interaction (click) to initiate autoplay
    document.addEventListener("click", handleInteraction);

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener("click", handleInteraction);
    };
  }, []);

  const handleVideoEnd = () => {
    console.log("caca");
  };

  return (
    <div>
      <video
        onEnded={handleVideoEnd}
        className="w-screen h-screen"
        ref={videoRef}
      >
        <source src={videoSource} type="video/mp4" />
      </video>
    </div>
  );
};

export default AutoplayVideo;
