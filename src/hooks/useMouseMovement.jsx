import { useState, useEffect } from "react";

const useMouseMovement = () => {
    const [movement, setMovement] = useState({ x: 0, y: 0 });
    
    const updateMove = e => {
        if (e.movementX >= 5 | e.movementX <= -5) {
            setMovement({ x: e.movementX, y: e.movementY });
        } 
    };

    useEffect(() => {
        window.addEventListener("mousemove", updateMove);
        return () => window.removeEventListener("mousemove", updateMove);
    }, []);

    return movement;
};

export default useMouseMovement;