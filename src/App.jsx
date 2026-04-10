import { useState, useEffect } from 'react';
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


function App() {
  const [stage, setStage] = useState("intro");

  useEffect(() => {
    // 5.2s duration: Exactly the length of your video fragment
    const timer = setTimeout(() => {
      setStage("reveal");
    }, 7600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* STAGE 1: Cinematic Intro (Starts immediately) */}
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
                <WeddingEvents />
                <VenueSection />
                {/* <Blessings /> */}
              </>
            } />
            <Route path="/photogallery" element={<PhotoGallery />} />
            <Route path="/venue" element={<VenueSection />} />
            <Route path="/events" element={<WeddingEvents />} />
            <Route path="/story" element={<StoryEpisodes />} />
            {/* <Route path="/blessing" element={<Blessings />} /> */}

          </Routes>

        </div>
      )}
    </Router>
  );
}

export default App;