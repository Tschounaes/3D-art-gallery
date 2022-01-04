import React from 'react'

const Box = (props) => {
    return (
        <mesh
            {...props}
            castShadow={true}
            receiveShadow={true}
            >
            <boxBufferGeometry args={props.size} />
            <meshStandardMaterial attach="material" color={props.color} /> 
        </mesh>
    )
  }

export default Box;