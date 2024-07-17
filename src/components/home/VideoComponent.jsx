"use client";
import React, { useRef, useState } from "react";
import Ticker from "./Ticker";
import Image from "next/image";
import { play, videoPic } from "@/assets";

const VideoComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <div className="w-full h-full bg-[#0f121d] relative">
      <Ticker />

      <video
        ref={videoRef}
        width="320"
        height="620"
        preload="none"
        controls={false}
        poster={videoPic.src}
        className="w-full h-[620px]   object-cover object-center"
      >
        <source src={"video1.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        className="    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30  cursor-pointer"
        onClick={handlePlayPause}
      >
        {!isPlaying && <Image src={play} alt="play" width={80} height={80} />}
      </div>
    </div>
  );
};

export default VideoComponent;
