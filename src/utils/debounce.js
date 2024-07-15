import { useCallback } from 'react';

export const useDebounce = (callback, delay) => {
    const debounce = useCallback(
        (...args) => {
            const timer = setTimeout(() => {
                callback(...args);
            }, delay);
            return () => clearTimeout(timer);
        },
        [callback, delay]
    );

    return debounce;
};

export default useDebounce;
