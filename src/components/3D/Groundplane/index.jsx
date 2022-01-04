import React from 'react'

const GroundPlane = (props) => {
    return (
        <mesh
            position={props.position}
            rotation={props.rotation}
            receiveShadow={true}
            castShadow={true}
            >
            <planeBufferGeometry attach='geometry' args={props.size} />
            <meshStandardMaterial attach='material' color='white' />
        </mesh>
    )
  }

export default GroundPlane;