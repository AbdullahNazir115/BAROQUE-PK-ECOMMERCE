import React, { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    // You can also add an event listener to handle navigation changes
    const handleScroll = () => {
      window.scrollTo(0, 0);
    };

    // Listen for changes in the route and scroll to the top
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Run this effect only once when the component mounts

  return null; // This component doesn't render anything
};

export default ScrollToTop;
