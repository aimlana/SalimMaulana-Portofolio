import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import myLogo from '../assets/images/sLogoCrayola.png';

// eslint-disable-next-line react/prop-types
const SplashScreen = ({ onComplete }) => {
  const fullText = 'Salim Maulana';

  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    let i = 0;

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        clearInterval(cursorInterval);

        // 🔥 typing SELESAI → cursor DIHAPUS TOTAL
        setTypingDone(true);

        // kasih 1 frame stabil → baru naik ke header
        setTimeout(() => {
          onComplete();
        }, 150);
      }
    }, 140);

    return () => {
      clearInterval(cursorInterval);
      clearInterval(typingInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className='fixed inset-0 z-[9999] bg-black flex items-center justify-center'
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* BRAND — SATU-SATUNYA ELEMEN YANG PINDAH */}
      <motion.div
        layoutId='brand'
        className='flex items-center gap-4 md:gap-6'
        transition={{
          type: 'spring',
          stiffness: 55,
          damping: 18,
          mass: 1.2,
        }}
      >
        <img src={myLogo} className='w-14 md:w-20' />

        <div className='relative'>
          <h1 className='font-alumni text-5xl md:text-8xl text-crayola font-semibold leading-none opacity-0'>
            {fullText}
          </h1>

          {!typingDone && (
            <h1 className='absolute inset-0 font-alumni text-5xl md:text-8xl text-crayola font-semibold leading-none'>
              {typedText}
              <span
                className={`inline-block w-[3px] h-[1em] ml-2 align-middle ${
                  showCursor ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ backgroundColor: '#FF6B6B' }}
              />
            </h1>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
