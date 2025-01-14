import "./App.css";
import { ScrollControls, OrbitControls, Scroll } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Scene } from "../public/models/Scene";

function App() {
	return (
		<>
			<Canvas>
				<ScrollControls>
					<Scroll>
						<Scene scale={1} position={[0, 0, 0]} />
					</Scroll>
				</ScrollControls>
				<directionalLight />
				{/* <ScrollControls></ScrollControls> */}
			</Canvas>
		</>
	);
}

export default App;
