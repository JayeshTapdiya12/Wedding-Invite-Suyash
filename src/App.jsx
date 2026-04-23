import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoyalHero from './compoments/RoyalHero';
import CoupleReveal from './compoments/CoupleReveal';
import Navbar from './compoments/Navbar';
import './App.css';
import CountDown from './compoments/CountDown';
import StoryEpisodes from './compoments/StoryEpisodes';
import WeddingEvents from './compoments/WeddingEvents';
import VenueSection from './compoments/VenueSection';
import PhotoGallery from './compoments/PhotoGallery';
import Blessings from './compoments/Blessing';
import Footer from './compoments/Footer';
import PhotoCarousel from './compoments/PhotoCarousel';

function App() {
  const [stage, setStage] = useState("intro");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStage("reveal");
    }, 7600);
    return () => clearTimeout(timer);
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <Router>
      <audio ref={audioRef} src="/songs.mpeg" loop preload="auto" />

      {/* Music button — shows 🔇 initially, click to play */}
      <button 
        onClick={toggleMusic}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          padding: '10px',
          borderRadius: '50%',
          cursor: 'pointer',
          background: 'rgba(255,255,255,0.8)',
          border: '1px solid #ccc'
        }}
      >
        {isPlaying ? "🔊" : "🔇"}
      </button>

      {/* STAGE 1: Cinematic Intro */}
      {stage === "intro" && (
        <div className="fullscreen-stage">
          <RoyalHero />
        </div>
      )}

      {/* STAGE 2: Reveal Content */}
      {stage === "reveal" && (
        <div className="app-main-layout">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <CoupleReveal />
                <CountDown />
                <StoryEpisodes />
                <PhotoCarousel />
                <WeddingEvents />
                <VenueSection />
                <Blessings />
                <Footer />
              </>
            } />
            <Route path="/photogallery" element={<PhotoGallery />} />
            <Route path="/venue" element={<VenueSection />} />
            <Route path="/events" element={<WeddingEvents />} />
            <Route path="/story" element={<StoryEpisodes />} />
            <Route path="/blessing" element={<Blessings />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
