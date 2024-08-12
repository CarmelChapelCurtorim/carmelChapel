// components/Hero.js
'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import HeroImage from "@/images/hero.jpg";
import ReactPlayer from 'react-player';

const Hero = ({ isOpen }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!isOpen) {
      const timeout = setTimeout(() => {
        setShowVideo(true);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  const handleVideoEnd = () => {
    setShowVideo(false);
  };

  if (!mounted) return null;

  return (
    <div className='relative min-h-screen min-w-screen'>
      <div className={`relative min-h-screen transition-opacity ${showVideo ? 'opacity-0' : 'opacity-100'}`}>
        <Image
          src={HeroImage}
          alt="Hero"
          className='absolute inset-0 w-full h-full object-cover'
        />

        <div className='absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-70'></div>

        <div className="absolute top-1/2 right-56 transform -translate-y-1/2 text-[#002365] text-left Livvic-Semibold">
          <p className="sm:text-lg md:text-5xl pb-3">"Live by <span className='text-[#80011F] Comforter-Regular font-bold text-5xl'>Faith,</span></p>
          <p className="sm:text-lg md:text-5xl pb-3">&nbsp;&nbsp;Be known by <span className='text-[#80011F] Comforter-Regular font-bold text-5xl'>Love,</span></p>
          <p className="sm:text-lg md:text-5xl pb-3">&nbsp;&nbsp;Be a Voice of <span className='text-[#80011F] Comforter-Regular font-bold text-5xl '>Hope"</span></p>
          <button className="bg-[#80011F] hover:bg-[#80011fdd] text-white Livvic-Medium text-xl font-bold py-2 px-4 rounded-md mt-4 ml-3">
            Visit This Sunday
          </button>
        </div>
      </div>

      {showVideo && (
        <ReactPlayer
          url="https://youtu.be/M1UO2D54gTI?si=UjVam_1nzzoxMmOh"
          className="absolute inset-0 min-w-screen h-full object-cover"
          playing={true}
          controls={false}
          width="100%"
          height="100%"
          onEnded={handleVideoEnd}
        />
      )}
    </div>
  );
};

export default Hero;
