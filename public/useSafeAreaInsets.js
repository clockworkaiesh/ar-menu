import { useState, useEffect } from 'react';

const useSafeAreaInsets = () => {
  const [safeAreaInsets, setSafeAreaInsets] = useState({});

  useEffect(() => {
    const handleResize = () => {
      const bottomInset = window.innerHeight - document.documentElement.clientHeight;
      setSafeAreaInsets({ bottom: bottomInset });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return safeAreaInsets;
};

export default useSafeAreaInsets;