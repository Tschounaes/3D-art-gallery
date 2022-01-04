import React, {Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import { TextureLoader } from 'three';
import { csv } from 'd3-fetch';

import use3dStore from '../../store3D';

// geometries
import ArtGallery from '../../components/3D/Gallery';
import Placeholders from '../../components/3D/Placeholders';

// scene assets
import { CanvasContainer } from './styled';
import WalkingCamera from '../../components/3D/WalkingCamera';
import LightSpot from '../../components/3D/LightSpot';
import PostEffects from '../../components/3D/PostEffects';

// html boiler plates
import Info from '../../components/ImageInfo';
import NavigationInfo from '../../components/NavigationInfo';
import BackButton from '../../components/BackButton';

// load gallery pieces
const cache = {};
const importAll = (r) => r.keys().forEach(key => cache[key] = r(key));
importAll(require.context('../../assets/exibition', false, /\.(png|jpe?g|svg)$/));
const images = Object.entries(cache).map(module => module[1].default);


const ThreeDeSite = () => {
    const container_ref = useRef();
    const { setImageSpreadsheet } = use3dStore();
    const [pointerLock, setPointerLock] = useState(false);  
    const textures = useLoader(TextureLoader, images);

    const handleKeys = (e) => {
        switch (e.code) {
            case 'Space':
                setPointerLock(!pointerLock);
                !pointerLock ? container_ref.current.requestPointerLock() : document.exitPointerLock();
                break;
            case 'Escape':
                setPointerLock(false);
                break;
            default:
                return null;
        } 
    }

    useEffect(() => {
        // set image spreadsheet
        csv('./tables/exibition.csv')
        .then(data => setImageSpreadsheet(data));

        // set primary focus to container
        container_ref.current.focus()

        // debug when PointerLock lost for random reason
        const debug_lock = () => document.pointerLockElement === null ? setPointerLock(false) : null;
        document.addEventListener('pointerlockchange', debug_lock);
        return () => document.removeEventListener('pointerlockchange', debug_lock);
    },[])
  
    return (  
    <CanvasContainer 
        ref={container_ref}     
        tabIndex={'0'}
        onKeyDown={handleKeys}>
    <Canvas
        shadows
        shadowMap
        colorManagement
        >
        <ambientLight 
            intensity={0.235} /> 

        <directionalLight 
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={75}
                shadow-camera-left={-25}
                shadow-camera-right={25}
                shadow-camera-top={25}
                shadow-camera-bottom={-25}
                position={[15,50,8]}
                //shadow-bias={0.001}
                intensity={1.5} />

        <directionalLight 
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={75}
                shadow-camera-left={-25}
                shadow-camera-right={25}
                shadow-camera-top={25}
                shadow-camera-bottom={-25}
                position={[8,1.1,-2.1]}
                //shadow-bias={0.001}
                intensity={0.25} />
        
        <Suspense>
        <LightSpot gPos={[-4.25, 0, -2]}/>
        </Suspense>
        <Suspense>
        <LightSpot gPos={[-6.2, 0, 6.15]}/>
        </Suspense>


        <WalkingCamera 
            eyeLevel={1.8}
            rotateSpeed={0.4} 
            walkSpeed={0.125}
            dampening={0.8}
            pointerLock={pointerLock} />


        <Suspense fallback={null}>
            <ArtGallery />
            <Suspense fallback={null}>
                <Placeholders textures={textures} />
            </Suspense>
        </Suspense>

        <Sky
            distance={450000} // Camera distance (default=450000)
            sunPosition={[1, 3, -2]} // Sun position normal (defaults to inclination and azimuth if not set)
            inclination={0.3} // Sun elevation angle from 0 to 1 (default=0)
            azimuth={0.28} // Sun rotation around the Y axis from 0 to 1 (default=0.25)
        />
        <Suspense>
            <PostEffects />
        </Suspense>
    </Canvas>
    <Info images={images} pointerLock={pointerLock} />
    <NavigationInfo pointerLock={pointerLock}/>
    <BackButton />
    </CanvasContainer>
    )
}

export default ThreeDeSite;

