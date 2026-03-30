import React, { useRef, useEffect } from 'react';
import '../styles/RoyalHero.css';

const RoyalHero = () => {
    const videoRef = useRef(null);
    const STOP_TIME = 10;

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
                        src="https://res.cloudinary.com/dwsv6ggaa/video/upload/v1774888245/From_Main_Klickpin_CF-_Magical_Beach-Themed_Ring_Ceremony_Invitation_-_3hrmJPiz9_xb3ozi.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
};

export default RoyalHero;