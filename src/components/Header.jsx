import { motion } from 'framer-motion';
import myLogo from '../assets/images/sLogoCrayola.png';
import topRightArrow from '../assets/images/topRightArrow.svg';

const Header = () => {
  return (
    <header className='py-3 px-3 md:px-7 border-b-2 border-black w-full'>
      <div className='flex justify-between items-center'>
        {/* LEFT */}
        <div className='flex items-center gap-3'>
          <button>
            <div className='flex flex-col items-end gap-1.5'>
              <span className='h-0.5 w-4 bg-black'></span>
              <span className='h-0.5 w-6 bg-black'></span>
              <span className='h-0.5 w-6 bg-black'></span>
            </div>
          </button>
          <p className='font-alumni text-black text-3xl font-medium hidden md:block'>
            Menu
          </p>
        </div>

        <motion.a
          layoutId='brand'
          href='/home'
          className='flex items-center gap-2 md:gap-3 cursor-pointer'
          transition={{
            type: 'spring',
            stiffness: 55,
            damping: 18,
            mass: 1.2,
          }}
        >
          <img src={myLogo} className='w-4 md:w-5' />
          <h1 className='font-alumni text-3xl md:text-4xl text-crayola font-semibold'>
            Salim Maulana
          </h1>
        </motion.a>

        {/* RIGHT */}
        <a href='#' className='flex gap-2 items-center'>
          <h1 className='font-alumni text-3xl text-black font-medium hidden md:block'>
            Contact me
          </h1>
          <img src={topRightArrow} className='h-4 md:h-full' />
        </a>
      </div>
    </header>
  );
};

export default Header;
