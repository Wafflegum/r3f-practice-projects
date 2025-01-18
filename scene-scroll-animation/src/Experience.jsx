import { ScrollControls, OrbitControls, Scroll, Line, PerspectiveCamera, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Scene } from "../public/models/Scene.jsx";
import * as THREE from "three";
import { useMemo, useRef } from "react";

const Experience = () => {
	const linePointsAmount = 250;

	const curve = useMemo(() => {
		return new THREE.CatmullRomCurve3(
			[
				new THREE.Vector3(4, 0, 1.6),
				new THREE.Vector3(-1, 0.25, 2),
				new THREE.Vector3(-0.5, 0, -2),
				new THREE.Vector3(1.5, 0, -2.3),
			],
			false,
			"catmullrom",
			0.4
		);
	}, []);

	const linePoints = useMemo(() => {
		return curve.getPoints(linePointsAmount);
	}, [curve]);

	const cameraGroup = useRef();

	const scroll = useScroll();
	const progressRef = useRef(0);

	useFrame((_state, delta) => {
		if (cameraGroup.current) {
			// Increment progress (loop back to start if exceeding 1)
			progressRef.current = scroll.offset;

			// Get position and tangent along the spline
			const position = curve.getPointAt(progressRef.current);
			const tangent = curve.getTangentAt(progressRef.current);

			// Set camera position
			cameraGroup.current.position.copy(position);

			// Create a look-ahead quaternion based on the tangent
			const up = new THREE.Vector3(0, 1, 0); // Default up direction
			const lookAtMatrix = new THREE.Matrix4();
			lookAtMatrix.lookAt(position, position.clone().add(tangent), up);

			const quaternion = new THREE.Quaternion();
			quaternion.setFromRotationMatrix(lookAtMatrix);

			// Apply quaternion to the camera group
			cameraGroup.current.quaternion.copy(quaternion);
		}
	});

	return (
		<>
			<Line points={linePoints} color={"white"} opacity={0.8} transparent lineWidth={5} />
			{/* <OrbitControls enableZoom={false} /> */}

			<group ref={cameraGroup} position={[4, 0, 1.6]}>
				<PerspectiveCamera fov={50} makeDefault />
			</group>

			<Scene scale={1} position={[0, 0, 0]} />

			{/* <ScrollControls>
				<Scroll>
					<Scene scale={1} position={[0, 0, 0]} />
				</Scroll>
			</ScrollControls> */}
		</>
	);
};

export default Experience;
