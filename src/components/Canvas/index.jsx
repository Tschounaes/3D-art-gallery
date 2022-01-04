import React, { useRef, useEffect, useState } from 'react';
import drawApp from './app';
import useMousePosition from '../../hooks/useMousePosition';

const Canvas = (props) => {
    const canvasRef = useRef();
    const { x, y } = useMousePosition();
    const [frame, setFrame] = useState(0)

    useEffect(() => { 
        const draw = () => {
            const canvas = canvasRef.current;
            const dimensions = canvas.getBoundingClientRect();
            const c = canvas.getContext('2d'); 
            
            drawApp(c, x-dimensions.x, y-dimensions.y);
        }
        draw()
        const i = setInterval(()=> {
            setFrame(frame+1);
        },100)
        return () => clearInterval(i);
    },[frame])

  return (
    // spreadding the props from the component to the canvas jsx-Element to make sure
    // I can set all the props needed from outside the component.
    <canvas 
        ref={canvasRef} 
        {...props}/>
  )
}

export default Canvas;