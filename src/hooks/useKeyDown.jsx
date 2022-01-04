import { useState, useEffect } from "react";

const useKeyDown = () => {
    const [key, setKey] = useState(null);

    const updateKey = e => {
        if (e.type === 'keydown') {
            setKey(e.code) 
        }
        if (e.type === 'keyup') {
            setKey(null)
        }
    }

    useEffect(()=> {
        window.addEventListener('keydown', updateKey);
        window.addEventListener('keyup', updateKey);
        return () => {
            window.removeEventListener("keydown", updateKey);
            window.removeEventListener("keyup", updateKey);
        };
    }, []);
    
    return key;
};

export default useKeyDown;