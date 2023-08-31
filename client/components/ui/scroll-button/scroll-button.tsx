'use client';

import { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import IconButton from '../icon-button/icon-button';

import { IoArrowUp } from 'react-icons/io5';

const ScrollButton = ({ children }: PropsWithChildren) => {
  const [isShowing, setIsShowing] = useState(false);
  useEffect(() => {
    const showScrollButton = () => {
      if (window.scrollY >= 80) {
        setIsShowing(true);
      } else {
        setIsShowing(false);
      }
    };
    window.addEventListener('scroll', showScrollButton);
    return () => {
      window.removeEventListener('scroll', showScrollButton);
    };
  }, []);

  const handleScrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      {isShowing && (
        <IconButton
          className="fixed bottom-24 right-24 z-10 bg-white transition overflow-hidden"
          icon={IoArrowUp}
          onClick={handleScrollToTop}
        />
      )}
    </>
  );
};

export default ScrollButton;
