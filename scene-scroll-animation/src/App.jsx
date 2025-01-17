import "./App.css";
import { ScrollControls, OrbitControls, Scroll } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Scene } from "../public/models/Scene.jsx";

function App() {
	return (
		<>
			<Canvas shadows >
				<OrbitControls/>
				<ScrollControls>
					<Scroll>
						<Scene scale={1} position={[0, 0, 0]}/>
					</Scroll>
				</ScrollControls>
				<pointLight position={[0, 0, -3.8]} castShadow intensity={5} color={"#ff7b00"}/>
				<pointLight position={[0, 0.8, -3.8]} castShadow intensity={2} color={"#ffae000"}/>
				<ambientLight intensity={0.1} color={"#6285ad"} />
				{/* <ScrollControls></ScrollControls> */}
			</Canvas>
		</>
	);
}

export default App;
