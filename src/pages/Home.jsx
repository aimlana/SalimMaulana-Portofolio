import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import InfiniteSlider from '../components/InfiniteSlider';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectSection from '../components/ProjectSection';
import Footer from '../components/Footer';
import SplashScreen from '../components/SplashScreen';

function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <Header />

      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      <HeroSection />
      <InfiniteSlider />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <Footer />
    </>
  );
}

export default Home;
