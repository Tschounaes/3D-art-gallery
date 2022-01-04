import React from 'react';
import Canvas from '../../components/Canvas';
import { CanvasContainer } from './styled';

const CanvasReact = () => {

    return (
        <CanvasContainer>
            <div>
            <Canvas 
                id='tutorial-canvas'
                height='720'
                width='720'  
            />  
            </div>
        </CanvasContainer> 
        
    )
}

export default CanvasReact;
