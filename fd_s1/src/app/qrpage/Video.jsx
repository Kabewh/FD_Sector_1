"use client";
import { useRouter } from "next/navigation";
import React, { useRef, useEffect } from "react";
import { redirect } from "next/navigation";

const AutoplayVideo = ({ videoSource }) => {
  const router = useRouter();
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    router.push("/qrpage/intrebari");
    console.log("video ended");
  };

  return (
    <>
      <video
        controls
        onEnded={handleVideoEnd}
        className="overflow-hidden min-w-full"
        ref={videoRef}
      >
        <source src={videoSource} type="video/mp4" className="w-screen" />
      </video>
    </>
  );
};

export default AutoplayVideo;
