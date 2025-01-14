/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 scene.glb --transform 
Files: scene.glb [3.78MB] > E:\Coding Projects\Web development\React Threejs Fiber\r3f-practice-projects\scene-scroll-animation\public\models\scene-transformed.glb [186.25KB] (95%)
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export function Scene(props) {
	const { nodes, materials } = useGLTF("./models/scene-transformed.glb");
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.group1000603159.geometry}
				material={materials.PaletteMaterial001}
				rotation={[Math.PI / 2, 0, 0]}
			/>
			<mesh
				geometry={nodes.group1221759621.geometry}
				material={materials.PaletteMaterial002}
				rotation={[Math.PI / 2, 0, 0]}
			/>
			<mesh
				geometry={nodes.group1482380847.geometry}
				material={materials.PaletteMaterial003}
				rotation={[Math.PI / 2, 0, 0]}
			/>
		</group>
	);
}

useGLTF.preload("./models/scene-transformed.glb");
