import frontEndText from '../assets/images/feDevText.png';
import uiUxText from '../assets/images/uiuxDesText.png';
import webDevText from '../assets/images/webDevText.png';
import star from '../assets/images/star.png';

const InfiniteSlider = () => {
  // Data gambar
  const images = [
    { src: frontEndText, type: 'text' },
    { src: star, type: 'icon' },
    { src: webDevText, type: 'text' },
    { src: star, type: 'icon' },
    { src: uiUxText, type: 'text' },
    { src: star, type: 'icon' },
  ];

  return (
    <section className='slider bg-black py-4 md:py-6 overflow-hidden select-none flex gap-5'>
      {[...Array(2)].map((_, ulIndex) => (
        <ul
          key={ulIndex}
          className={`list-none shrink-0 min-w-full flex justify-between items-center ${
            ulIndex === 1 ? 'ms-10' : ''
          }`}
          aria-hidden={ulIndex === 1 ? 'true' : 'false'}
        >
          {images.map((image, idx) => (
            <li key={idx}>
              <img
                src={image.src}
                className={
                  image.type === 'text'
                    ? 'h-[4vh] md:h-full'
                    : 'w-[4vw] md:w-full'
                }
                alt=''
              />
            </li>
          ))}
        </ul>
      ))}

      <style>{`
        img {
          max-width: 100%;
        }

        .slider ul {
          animation: scroll 10s linear infinite;
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
