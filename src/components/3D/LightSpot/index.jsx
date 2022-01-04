import React, { useRef, useEffect } from "react";
import { useThree } from "@react-three/fiber";



const LightSpot = (props) => {
    const group = useRef();
    const { scene } = useThree()

    useEffect(() => {
        group.current.castShadow = true;
        
        const light = group.current.children[0];
        const obj = group.current.children[1];
        scene.add(light.target);
        light.target = obj; 

        light.castShadow=true;
        light.penumbra=0.8
    },[scene])

    return (
        <group position={props.gPos} ref={group}>
            <spotLight
                position={[0, 3, 0]}
                angle={0.55}
                anglePower={1} 
                intensity={1.5} 
                decay={20}/> 
            <object3D name={'spotLightTarget'} position={[0,0,0]} />
        </group>
        
    )
}

export default LightSpot
