import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import InfiniteSlider from "../components/InfiniteSlider";

import twoStarPattern from '../assets/images/twoStarPattern.png';

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <InfiniteSlider />

      {/* About Section */}
      <section className='px-5 py-32 flex items-center justify-between'>
        <div className="ps-12">
          <h2 className='font-alumni text-[10rem] text-black font-medium leading-[75%]'>
            About me
          </h2>
          <p className='font-alumni text-4xl text-black w-[57vw] pt-16'>
            I am a passionate Front-End Developer focused on creating responsive
            and visually appealing user interfaces. With a blend of technical
            skills and creative design, I transform ideas into seamless digital
            experiences that engage and delight users.
          </p>
        </div>
        <img src={twoStarPattern} className="me-12 w-[25vw]" />
      </section>

      <Footer />
    </>
  );
}

export default Home;