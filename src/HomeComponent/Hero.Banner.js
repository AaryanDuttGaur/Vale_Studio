"use client";
import { useEffect, useRef, useState } from 'react';

export default function HeroBanner() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Initialize audio element
    audioRef.current = new Audio('/video/S1.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!isPlaying || !audioRef.current) return;

    const handleScroll = () => {
      if (!sectionRef.current || !audioRef.current || isMuted) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate visibility percentage
      let visibility = 0;
      
      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        // Section fills entire viewport
        visibility = 1;
      } else if (rect.top > 0 && rect.bottom > windowHeight) {
        // Top of section is visible
        visibility = (windowHeight - rect.top) / windowHeight;
      } else if (rect.top < 0 && rect.bottom < windowHeight) {
        // Bottom of section is visible
        visibility = rect.bottom / windowHeight;
      } else if (rect.top > 0 && rect.bottom < windowHeight) {
        // Entire section is visible
        visibility = 1;
      }

      // Clamp between 0 and 1
      visibility = Math.max(0, Math.min(1, visibility));
      
      // Smooth exponential curve for more natural fade
      const volume = Math.pow(visibility, 1.5) * 0.6; // Max volume at 0.6
      
      audioRef.current.volume = volume;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPlaying, isMuted]);

  const toggleAudio = async () => {
    if (!audioRef.current) return;

    if (!isPlaying) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error('Error playing audio:', error);
      }
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      setIsMuted(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!isPlaying || !audioRef.current) return;
    
    setIsMuted(!isMuted);
    if (!isMuted) {
      audioRef.current.volume = 0;
    } else {
      // Restore volume based on scroll position
      const event = new Event('scroll');
      window.dispatchEvent(event);
    }
  };

  return (
    <section ref={sectionRef} className="herobanner sticky top-0 z-5">
      <div className="w-full h-[100vh] p-3 relative">
        {/* Video Background */}
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/v3.mp4" type="video/mp4" />
        </video>

        {/* Audio Control Button */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
          <div className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg">
            <button
              onClick={toggleAudio}
              className="flex items-center gap-2"
              aria-label={isPlaying ? "Stop ambient audio" : "Play ambient audio"}
            >
              <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-gradient-to-r from-[#D27DF3] to-[#7952ED]' : 'bg-gray-400'} ${isPlaying ? 'animate-pulse' : ''}`}></div>
              <span className="text-white text-sm font-medium">
                {isPlaying ? 'on' : 'Off'}
              </span>
            </button>
            {isPlaying && (
              <button
                onClick={toggleMute}
                className="ml-1 p-1 hover:bg-white/10 rounded-full transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                )}
              </button>
            )}
          </div>
        </div>

        {/* Heading Over Video */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-semibold text-4xl md:text-6xl lg:text-7xl mb-4 drop-shadow-2xl text-white">
            Visuals in <span className="bg-gradient-to-r from-[#D27DF3] to-[#7952ED] text-transparent bg-clip-text">motion</span>, stories that <span className="bg-gradient-to-r from-[#D27DF3] to-[#7952ED] text-transparent bg-clip-text">resonate</span>
          </h1>
          <p className="text-white text-lg md:text-xl lg:text-2xl font-light max-w-2xl drop-shadow-lg">
            Motion graphics, brand visuals, and art direction by Adrian Vale
          </p>
        </div>
      </div>
    </section>
  );
}