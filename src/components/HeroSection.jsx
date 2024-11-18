import profilPhoto from '../assets/images/profilePhoto.jpg';

const HeroSection = () => {
  return (
    <section className='pt-2 pb-8 px-3 md:px-5'>
      <p
        className='font-allison leading-[75%] z-10 absolute text-[#EFA235] text-[10vw] right-0 me-12 mt-3
                    md:text-[12vw] md:mt-8 md:me-24
                    lg:text-[14vw] lg:mt-5 lg:me-28'
      >
        Portofolio
      </p>
      <h1
        className='font-alumni font-semibold text-center leading-[75%] text-black tracking-[0.3rem] text-[16vw] mt-6
                      md:text-[19vw] md:mt-16
                      retina:text-[20vw] retina:mt-20
                      lg:text-[20vw] lg:mt-20'
      >
        Salim Maulana
      </h1>

      <div className='w-full overflow-hidden h-[40vh] md:h-[50vh] lg:h-[75vh] pt-4'>
        <img
          src={profilPhoto}
          className='object-cover h-full w-full'
          alt='Profile'
        />
      </div>
    </section>
  );
};

export default HeroSection;
