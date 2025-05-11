import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// This component handles scrolling to anchors when navigating between pages
const ScrollToAnchor = () => {
  const location = useLocation();
  const lastHash = useRef('');

  // Effect to handle anchor scrolling
  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1); // Remove the # character
    }
    
    // If there's a hash in the URL, find the element and scroll to it
    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        const element = document.getElementById(lastHash.current);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        lastHash.current = '';
      }, 100);
    }
  }, [location]);

  return null; // This component doesn't render anything
};

export default ScrollToAnchor;
