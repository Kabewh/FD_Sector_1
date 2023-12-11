"use client";
import { useRouter } from "next/navigation";
import React, { useRef, useEffect } from "react";

const AutoplayVideo = ({ videoSource }) => {
  const router = useRouter();

  const handleVideoEnd = () => {
    router.push("/descopera/intrebari");
  };

  return (
    <>
      <video
        muted
        controls
        onEnded={handleVideoEnd}
        className="w-[100vh]"
        autoPlay
      >
        <source src={videoSource} type="video/mp4" />
      </video>
    </>
  );
};

export default AutoplayVideo;
