import frontEndText from '../assets/images/feDevText.png';
import uiUxText from '../assets/images/uiuxDesText.png';
import webDevText from '../assets/images/webDevText.png';
import star from '../assets/images/star.png';

const InfiniteSlider = () => {
  return (
    <section className='slider bg-black mb-12 py-4 md:py-6 overflow-hidden select-none flex gap-5'>
      <ul className='list-none shrink-0 min-w-full flex justify-between items-center gap-5'>
        <li>
          <img src={frontEndText} className='h-[4vh] md:h-full' />
        </li>
        <li>
          <img src={star} className='w-[4vw] md:w-full' />
        </li>
        <li>
          <img src={webDevText} className='h-[4vh] md:h-full' />
        </li>
        <li>
          <img src={star} className='w-[4vw] md:w-full' />
        </li>
        <li>
          <img src={uiUxText} className='h-[4vh] md:h-full' />
        </li>
        <li>
          <img src={star} className='w-[4vw] md:w-full' />
        </li>
        <li>
          <img src={frontEndText} className='h-[4vh] md:h-full' />
        </li>
        <li>
          <img src={star} className='w-[4vw] md:w-full' />
        </li>
        <li>
          <img src={webDevText} className='h-[4vh] md:h-full' />
        </li>
        <li>
          <img src={star} className='w-[4vw] md:w-full' />
        </li>
        <li>
          <img src={uiUxText} className='h-[4vh] md:h-full' />
        </li>
        <li>
          <img src={star} className='w-[4vw] md:w-full' />
        </li>
      </ul>

      <ul
        aria-hidden='true'
        className='list-none shrink-0 min-w-full flex justify-between items-center gap-5'
      >
        <li>
          <img src={frontEndText} className='h-[4vh] md:h-full' />
        </li>
        <li>
          <img src={star} className='w-[4vw] md:w-full' />
        </li>
        <li>
          <img src={webDevText} className='h-[4vh] md:h-full' />
        </li>
        <li>
          <img src={star} className='w-[4vw] md:w-full' />
        </li>
        <li>
          <img src={uiUxText} className='h-[4vh] md:h-full' />
        </li>
        <li>
          <img src={star} className='w-[4vw] md:w-full' />
        </li>
        <li>
          <img src={frontEndText} className='h-[4vh] md:h-full' />
        </li>
        <li>
          <img src={star} className='w-[4vw] md:w-full' />
        </li>
        <li>
          <img src={webDevText} className='h-[4vh] md:h-full' />
        </li>
        <li>
          <img src={star} className='w-[4vw] md:w-full' />
        </li>
        <li>
          <img src={uiUxText} className='h-[4vh] md:h-full' />
        </li>
        <li>
          <img src={star} className='w-[4vw] md:w-full' />
        </li>
      </ul>

      <style>{`
        img {
          max-width: 100%;
        }

        .slider ul {
          animation: scroll 20s linear infinite;
        }

        .slider:hover ul {
          animation-play-state: paused;
        }
        
        .slider:hover {
          background: #383838;
        }

        @keyframes scroll {
          to {
            transform: translateX(calc(-100% - 1.25rem));
          }
        }
        
      `}</style>
    </section>
  );
};

export default InfiniteSlider;
