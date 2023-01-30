import { useEffect, useRef } from 'react';

type IntervalCallback = () => void;

export function useInterval(callback: IntervalCallback, delay: number) {
  const savedCallback = useRef<IntervalCallback | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current !== null) {
        savedCallback.current();
      }
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
