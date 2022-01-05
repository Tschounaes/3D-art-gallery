import React, { useRef, useEffect} from 'react';
import { useGLTF } from '@react-three/drei';
import { Color, FogExp2 } from 'three';
import { useThree } from '@react-three/fiber';



export default function ArtGallery(props) {
    const { gl, scene } = useThree()
    const group = useRef()
    const { nodes, materials } = useGLTF('models/art_gallery_textured.glb')

    useEffect(() => {
        materials.glass_mat.setValues({transparent: true, opacity: 0.2, emissive: new Color('#c4eefd')})
        group.current.castShadow = true;
        group.current.receiveShadow = true;
        group.current.children.forEach(mesh => {
            mesh.castShadow = true;
            mesh.receiveShadow = true;
        })        
    }, [group, nodes, materials]);

    useEffect(()=> {
      gl.setPixelRatio(0.5)
      gl.shadowMapSoft = true;
      gl.info.autoReset = false;
      const color = new Color('#ebd8bc');
      const density = 0.023;
      scene.fog = new FogExp2(color, density);
    },[gl, scene])

    useEffect(() => {
      console.log(nodes)
    })

    return (
      <group ref={group} {...props} dispose={null}>
        <mesh geometry={nodes.render_border_dome.geometry} material={nodes.render_border_dome.material} />
        <mesh geometry={nodes.render_dome.geometry} material={nodes.render_dome.material} />
        <mesh geometry={nodes.render_floor.geometry} material={materials.floor_mat} />
        {/*<mesh geometry={nodes.render_glass_dome.geometry} material={materials.glass_mat} />*/}
        <mesh geometry={nodes.render_roof.geometry} material={nodes.render_roof.material} />
        <mesh geometry={nodes.render_side_dome.geometry} material={nodes.render_side_dome.material} />
        <mesh geometry={nodes.render_walls.geometry} material={nodes.render_walls.material} />
        <mesh geometry={nodes.render_interior_wall_0.geometry} material={nodes.render_interior_wall_0.material} />
        <mesh geometry={nodes.render_interior_wall_1.geometry} material={nodes.render_interior_wall_1.material} />
        <mesh geometry={nodes.render_interior_wall_2.geometry} material={nodes.render_interior_wall_2.material} />
        <mesh geometry={nodes.render_interior_wall_3.geometry} material={nodes.render_interior_wall_3.material} />
        <mesh geometry={nodes.render_interior_wall_4.geometry} material={nodes.render_interior_wall_4.material} />
        <mesh geometry={nodes.render_interior_wall_5.geometry} material={nodes.render_interior_wall_5.material} />
        <mesh geometry={nodes.render_interior_wall_6.geometry} material={nodes.render_interior_wall_6.material} />
        <mesh geometry={nodes.render_podest_0.geometry} position={[0,0.15,0]} material={nodes.render_podest_0.material} />
        <mesh geometry={nodes.render_podest_1.geometry} position={[0,0.15,0]} material={nodes.render_podest_1.material} />
        <mesh geometry={nodes.render_roof_structures.geometry} material={nodes.render_roof_structures.material} />
      </group>
    )
  }
  
  useGLTF.preload('models/art_gallery_textured.glb');
