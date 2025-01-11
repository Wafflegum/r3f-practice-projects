import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Clone, OrbitControls } from "@react-three/drei";
import { Bloom, DepthOfField, EffectComposer, Noise, ToneMapping, Vignette } from "@react-three/postprocessing";
import { ToneMappingMode } from "postprocessing";

function Cube({ count }) {
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	// Create an array to store the positions
	const cubes = [];

	// Generate the cubes
	for (let i = 0; i < count; i++) {
		cubes.push(
			<mesh key={i} position={[getRandomInt(-10, 10), 0.5, getRandomInt(-10, 10)]} castShadow receiveShadow>
				<boxGeometry />
				<meshStandardMaterial color="#ff8800" />
			</mesh>
		);
	}

	cubes.push(
		<mesh position={[0, 0.5, 0]} castShadow receiveShadow>
			<boxGeometry />
			<meshStandardMaterial color="#ff8800" />
		</mesh>
	);

	// Return the group of cubes
	return <group>{cubes}</group>;
}

function App() {
	return (
		<>
			<Canvas>
				{/* <EffectComposer>
					<ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
					<DepthOfField focalLength={0.02} focusDistance={0} bokehScale={10} />
					<Bloom luminanceThreshold={0} luminanceSmoothing={5} height={300} />
					<Noise opacity={0.02} />
				</EffectComposer> */}

				<OrbitControls makeDefault />

				<ambientLight />
				<directionalLight position={[2, 5, 3]} castShadow intensity={3} />

				<Cube count={50} />

				<mesh rotation={[Math.PI / -2, 0, 0]} receiveShadow>
					{/* Plane/floor */}
					<planeGeometry args={[100, 100]} />
					<meshStandardMaterial color="white" />
				</mesh>
			</Canvas>
		</>
	);
}

export default App;
