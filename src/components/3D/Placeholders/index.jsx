import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import use3dStore from '../../../store3D';


import extractName from '../../../helpers/extractName';
import { Color } from 'three';


const Placeholders = props => {
  const group = useRef();
  const { nodes, materials } = useGLTF('models/pictures_scene.glb');
  const { setSelectImage } = use3dStore();
  const textures = props.textures;
  const overAllScale = 1.67;
  const selectDist = 8.0;

  const getScale = (tex) => {
    if (tex) {
    const h = tex.image.naturalHeight;
    const w = tex.image.naturalWidth;
    const aspect = w/h;
    return aspect;
    } else {
      return 1;
    }
  }

  const handleSelect = (e) => {
    if( e.distance <= selectDist ) {
      //console.log(e.intersections[0].object)
      let name = '';
      try {
        const path = e.intersections[0].object.material.map.image.src;
        name = extractName(path);
      } catch { name = 'empty_frame' };
      setSelectImage(name)
    }
  }

  const handleIn = (e) => {
    if( e.distance <= selectDist ) {
      document.getElementById('root').style.cursor = 'crosshair';
      const on = new Color('#0c0c0c');
      e.object.material.emissive = on;
    }
  }

  const handleOut = () => {
    document.getElementById('root').style.cursor = 'default';
    const off = new Color('#000000');
    Object.values(materials).forEach((mat) => {
      mat.emissive = off;
    })
  }

  useEffect(() => {
    group.current.receiveShadow = true;
    group.current.children.forEach((mesh, index) => {
      mesh.receiveShadow=true;
      mesh.material.map = textures[index];

      // fix position: geo to object
      const center = mesh.geometry.boundingSphere.center;
      mesh.position.set(center.x, center.y, center.z);
      mesh.geometry.translate(-center.x, -center.y, -center.z);

      // apply scale
      const scale = getScale(textures[index]);
      mesh.scale.set(overAllScale * scale, overAllScale * 1, overAllScale * scale);
    })
  },[textures]);


  return (
    <group ref={group} {...props} dispose={null} onClick={handleSelect} onPointerEnter={handleIn} onPointerLeave={handleOut}>
      <mesh geometry={nodes.glb_render_image_0.geometry} material={materials.glb_render_image_0_mat} />
      <mesh geometry={nodes.glb_render_image_1.geometry} material={materials.glb_render_image_1_mat} />
      <mesh geometry={nodes.glb_render_image_2.geometry} material={materials.glb_render_image_2_mat} />
      <mesh geometry={nodes.glb_render_image_3.geometry} material={materials.glb_render_image_3_mat} />
      <mesh geometry={nodes.glb_render_image_4.geometry} material={materials.glb_render_image_4_mat} />
      <mesh geometry={nodes.glb_render_image_5.geometry} material={materials.glb_render_image_5_mat} />
      <mesh geometry={nodes.glb_render_image_6.geometry} material={materials.glb_render_image_6_mat} />
      <mesh geometry={nodes.glb_render_image_7.geometry} material={materials.glb_render_image_7_mat} />
      <mesh geometry={nodes.glb_render_image_8.geometry} material={materials.glb_render_image_8_mat} />
      <mesh geometry={nodes.glb_render_image_9.geometry} material={materials.glb_render_image_9_mat} />
      <mesh geometry={nodes.glb_render_image_10.geometry} material={materials.glb_render_image_10_mat} />
      <mesh geometry={nodes.glb_render_image_11.geometry} material={materials.glb_render_image_11_mat} />
      <mesh geometry={nodes.glb_render_image_12.geometry} material={materials.glb_render_image_12_mat} />
      <mesh geometry={nodes.glb_render_image_13.geometry} material={materials.glb_render_image_13_mat} />
      <mesh geometry={nodes.glb_render_image_14.geometry} material={materials.glb_render_image_14_mat} />
      <mesh geometry={nodes.glb_render_image_15.geometry} material={materials.glb_render_image_15_mat} />
      <mesh geometry={nodes.glb_render_image_16.geometry} material={materials.glb_render_image_16_mat} />
      <mesh geometry={nodes.glb_render_image_17.geometry} material={materials.glb_render_image_17_mat} />
      <mesh geometry={nodes.glb_render_image_18.geometry} material={materials.glb_render_image_18_mat} />
      <mesh geometry={nodes.glb_render_image_19.geometry} material={materials.glb_render_image_19_mat} />
      <mesh geometry={nodes.glb_render_image_20.geometry} material={materials.glb_render_image_20_mat} />
      <mesh geometry={nodes.glb_render_image_21.geometry} material={materials.glb_render_image_21_mat} />
      <mesh geometry={nodes.glb_render_image_22.geometry} material={materials.glb_render_image_22_mat} />
      <mesh geometry={nodes.glb_render_image_23.geometry} material={materials.glb_render_image_23_mat} />
      <mesh geometry={nodes.glb_render_image_24.geometry} material={materials.glb_render_image_24_mat} />
      <mesh geometry={nodes.glb_render_image_25.geometry} material={materials.glb_render_image_25_mat} />
      <mesh geometry={nodes.glb_render_image_26.geometry} material={materials.glb_render_image_26_mat} />
      <mesh geometry={nodes.glb_render_image_27.geometry} material={materials.glb_render_image_27_mat} />
    </group>
  )
}

useGLTF.preload('models/pictures_scene.glb')

export default Placeholders;