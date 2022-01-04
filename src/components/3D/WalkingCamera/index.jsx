import React, { useState, useEffect } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

import { addVectors, scaleVector, subtractVectors, crossProduct} from '../../../helpers/trigo';
import useKeyDown from '../../../hooks/useKeyDown'
import useMouseMovement from '../../../hooks/useMouseMovement'


const WalkingCamera = (props) => {
    const { camera } = useThree();

    const key = useKeyDown();
    const mouseMove = useMouseMovement();

    const [frameMove, setFrameMove] = useState({x: 0, y:0})
    const [userPos, setUserPos] = useState([0, props.eyeLevel, 0]);
    const [userRot, setUserRot] = useState([0, 0, 0]);
    const [lookDir, setLookDir] = useState([0, 0, -1]);

    const camRotate = () => {
        if (props.pointerLock) {
            setUserRot([0,userRot[1]-frameMove.x/(400/props.rotateSpeed),0]);       
            setLookDir([- Math.sin(camera.rotation.y), 0, - Math.cos(camera.rotation.y)])
        }
    }

    const camMove = () => {
        if (props.pointerLock) {
            const speed = props.walkSpeed;
            let newPos = [...userPos];
            switch(key) {
                case 'ArrowUp': 
                    newPos = addVectors(userPos, scaleVector(lookDir, speed));  
                    break; 
                case 'ArrowDown': 
                    newPos = subtractVectors(userPos, scaleVector(lookDir, speed));
                    break;
                case 'ArrowLeft': 
                    newPos = subtractVectors(userPos, scaleVector(crossProduct(lookDir, [0, 1, 0]), speed));
                    break;  
                case 'ArrowRight': 
                    newPos = addVectors(userPos, scaleVector(crossProduct(lookDir, [0, 1, 0]), speed)) 
                    break;  
                default:
                    return null; 
            }
            setUserPos(newPos);
        }
    }

    useEffect(() => {
        setFrameMove({...mouseMove});
    },[mouseMove]);

    useFrame(() => {
        camMove();
        camRotate();
        setFrameMove({x: frameMove.x *props.dampening, y: frameMove.y * props.dampening});
    })

    return (
    <PerspectiveCamera 
        position={userPos}
        makeDefault
        rotation={userRot} 
    />)
}

export default WalkingCamera;