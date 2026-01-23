import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll ke atas dengan cepat
    window.scrollTo(0, 0);

    // Atau untuk animasi yang lebih halus:
    // window.scrollTo({
    //   top: 0,
    //   behavior: 'smooth'
    // });
  }, [pathname]);
};

export default useScrollToTop;
