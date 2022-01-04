import React, { useRef, useState, useEffect } from 'react'
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import { TransformControls } from '@react-three/drei';

import testImg from '../../../assets/gold-banner.jpeg';

const Image = (props) => {
    const cadrage = useRef();
    const texture = useLoader(TextureLoader, testImg);

    const [size, setSize] = useState([1, 1])

    useEffect(() => {
        const h = texture.image.naturalHeight;
        const w = texture.image.naturalWidth;
        const aspect = w/h;
        setSize([aspect, 1]);
    },[])

    return (
        <mesh
            {...props}
            ref={cadrage}
            receiveShadow={true}
            castShadow={true}
            >
            <planeBufferGeometry attach='geometry' args={[size[0]*props.size, size[1]*props.size]} />
            <meshStandardMaterial attach='material' map={texture} color='white' />
        </mesh>
    )
  }

export default Image;