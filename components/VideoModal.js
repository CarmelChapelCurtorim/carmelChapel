// components/VideoModal.js
'use client';
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const VideoModal = ({ isOpen, handleVideoEnd }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative w-full h-full flex items-center justify-center">
        <button
          className="absolute top-4 right-4 text-white text-7xl z-10"
          onClick={handleVideoEnd}
        >
          &times;
        </button>
        <div className="w-full h-full flex items-center justify-center">
          <ReactPlayer
            url="https://youtu.be/G78sFdjrZ-s?si=UjVam_1nzzoxMmOh"
            className="absolute inset-0 min-w-screen h-full object-cover"
            playing={true}
            controls={false}
            width="100%"
            height="100%"
            onEnded={handleVideoEnd}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
