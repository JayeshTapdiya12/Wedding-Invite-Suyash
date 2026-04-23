import React, { useRef, useEffect } from "react";
import "../styles/RoyalHero.css";

const RoyalHero = ({ onOpen }) => {
  const videoRef = useRef(null);
  const hasFiredRef = useRef(false);
  const STOP_TIME = 7.5;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const attemptPlay = () => {
      video.play().catch(() => {
        console.log("Autoplay blocked, waiting for user interaction");
      });
    };

    attemptPlay();
  }, []);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.currentTime >= STOP_TIME) {
      video.pause();
      video.currentTime = STOP_TIME;
      if (onOpen && !hasFiredRef.current) {
        hasFiredRef.current = true;
        onOpen();
      }
    }
  };

  return (
    <section className="hero-section">
      <div className="video-container">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          onTimeUpdate={handleTimeUpdate}
          className="hero-video"
        >
          <source
            src="https://res.cloudinary.com/dwsv6ggaa/video/upload/v1774888884/From_KlickPin_CF_Engaged_couple_illustration___Engaged_couples_illustration_hpdj3s.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default RoyalHero;
