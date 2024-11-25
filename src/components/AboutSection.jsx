import twoStarPattern from '../assets/images/twoStarPattern.png';

const AboutSection = () => {
  return (
    <section
      className='px-5 flex py-20 items-center justify-between
                  md:py-32'
    >
      <div className='px-3 md:px-8 lg:ps-12'>
        <h2
          className='font-alumni text-6xl text-black font-medium leading-[75%]
                      md:text-9xl
                      lg:text-[10rem]'
        >
          About me
        </h2>
        <p
          className='font-alumni text-xl text-black pt-10 text-justify
                      md:text-3xl
                      lg:text-4xl lg:w-[57vw]'
        >
          I am a passionate Front-End Developer focused on creating responsive
          and visually appealing user interfaces. With a blend of technical
          skills and creative design, I transform ideas into seamless digital
          experiences that engage and delight users.
        </p>
      </div>
      <img
        src={twoStarPattern}
        className='absolute right-0 -mt-48 w-[25vw] -z-10 me-9
                    md:w-[20vw] md:-mt-56 md:right-36 md:z-0
                    lg:static lg:mt-0 lg:me-12 lg:w-[25vw]'
        alt='Star Pattern'
      />
    </section>
  );
};

export default AboutSection;
