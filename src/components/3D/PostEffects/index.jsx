import { EffectComposer, Vignette, HueSaturation, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import { useThree } from '@react-three/fiber';
import React, {useRef, useEffect } from 'react';


function PostEffects() {
    const { scene, camera, gl } = useThree()
    const composer_elem = useRef()

    useEffect(()=> { 
        gl.info.reset();
    },[camera, scene, gl])

    return (
       
        <EffectComposer multisampling={0} ref={composer_elem}>
            <ChromaticAberration 
                offset={[0.00125, 0.00125]}/>
            <Bloom 
                luminanceThreshold={0.2}
                luminanceSmoothing={0.1}
                intensity={0.66}/>
            <HueSaturation 
                hue={-0.1} 
                saturation={0.085}/>
            <Vignette 
                eskil={false} 
                offset={0.2} 
                darkness={0.7} />
        </EffectComposer>
       
    )
}

export default PostEffects


