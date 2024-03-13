import { useEffect } from 'react';

function useEscapeKey(callback) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Escape') {
        callback();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [callback]); // Ensure the effect runs again if the callback changes
}

export default useEscapeKey;
