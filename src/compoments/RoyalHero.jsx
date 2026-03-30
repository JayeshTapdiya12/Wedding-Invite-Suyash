import React, { useRef, useEffect } from 'react';
import '../styles/RoyalHero.css';

const RoyalHero = () => {
    const videoRef = useRef(null);
    const STOP_TIME = 7.5;

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Force attempt to play (Autoplay policy handling)
        const attemptPlay = () => {
            video.play().catch(err => console.log("Autoplay waiting for user interaction"));
        };

        attemptPlay();
    }, []);

    const handleTimeUpdate = () => {
        const video = videoRef.current;
        if (video && video.currentTime >= STOP_TIME) {
            video.pause();
            video.currentTime = STOP_TIME; // Locks it at exactly 5.2s
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
                    onTimeUpdate={handleTimeUpdate}
                    className="hero-video"
                    // Adding "preload" helps ensure the browser has the data to stop accurately
                    preload="auto"
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