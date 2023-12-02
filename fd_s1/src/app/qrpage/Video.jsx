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
        style={{ maxHeight: "100%", width: "100%" }}
      >
        <source src={videoSource} type="video/mp4" />
      </video>
    </>
  );
};

export default AutoplayVideo;
