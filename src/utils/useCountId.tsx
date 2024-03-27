import { useMemo } from 'react';

let count = 0;
export function useCountId() {
  return useMemo(() => {
    count = count + 1;
    return count;
  }, []);
}
