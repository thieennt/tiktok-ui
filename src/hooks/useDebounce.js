import { useEffect, useState } from 'react';

const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const timeId = setTimeout(() => setDebounceValue(value), delay);

        return () => clearTimeout(timeId);
    }, [value]);

    return debounceValue;
};

export default useDebounce;
