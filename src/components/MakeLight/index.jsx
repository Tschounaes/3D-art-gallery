import React, { useState, useEffect } from 'react';
import { LightScreenWrapper } from './styled';
import useMouseMovement from '../../hooks/useMouseMovement';


const MakeLight = () => {
    const mouseMove = useMouseMovement();
    const [input, setInput] = useState(0);
    const [energy, setEnergy] = useState(0);
    const [frame, setFrame] = useState(0);
    const [light, setLight] = useState(false);

    const getLight = (raw) => {
        const conv = Math.round(((raw-1.5)/4)*100)/100;
        return conv;
    };

    const distance2d = (a, b) => {
        const vec = [a[0]-b[0], a[1]-b[1]]
        const len = (vec[0]**2 + vec[1]**2)**0.5;
        return len;
    }

    useEffect(() => { 
        setEnergy(input >= 0.0125 ? (input) : 0);
        setInput(input * 0.95);

        if (getLight(energy) >= 1) {
            setLight(true);
        };
       
        //set interval  with a timout callback frame
        const interval = setTimeout(() => {
            if (!light) {
                setFrame(frame+1)
            } else {
                return null;
            }
        }, 17);
        return () => clearTimeout(interval);
    }, [frame]);

    useEffect(() => {
        const orig = [0,0];
        const length = Math.round(distance2d(orig, [mouseMove.x, mouseMove.y]));
        const newEnergy = input + length/1080;
        setInput(newEnergy);
    }, [mouseMove]);

    return (
        <>
        <LightScreenWrapper energy={ getLight(energy) } light={light}>
            <h3>"According to a recent report from KTH Royal Institute of Technology in Sweden, 
                about 10% of the world's total electricity consumption is currently used by the Internet. 
                The figure has risen from 8% in 2012 and may reach 20% by 2025. 
                Some may find this appalling, but to me, it's absolutely fine."
            </h3>
            <div className='darkness'></div>
            <div className='energy'></div>
        </LightScreenWrapper> :
        <p style={ {
            fontSize: '12px', 
            position: 'absolute',
            zIndex: '4', 
            bottom: '2px', 
            left: '5px'
            } }> 
            {!light ? energy <=0.3 ? 'Move your mouse fast to make energy!' : 'Loading...' : ''} </p>
        </>
        
        
    )
}

export default MakeLight
