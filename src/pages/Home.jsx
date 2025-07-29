import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import InfiniteSlider from '../components/InfiniteSlider';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection'

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <InfiniteSlider />
      <AboutSection />
      <ExperienceSection />
      <Footer />
    </>
  );
}

export default Home;
