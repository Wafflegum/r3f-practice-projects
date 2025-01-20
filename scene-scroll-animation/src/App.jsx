import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { Html, Scroll, ScrollControls, Text3D } from "@react-three/drei";
import Text from "./Text.jsx";

function App() {
	return (
		<>
			<Canvas>
				<ScrollControls pages={3} damping={0.1}>
					<Scroll>
						<Text text="Welcome" position={[3.5, 0.115, 1.85]} rotation={[0, Math.PI / 2, 0]} />
						<Text text="Dining" position={[-2.25, 0.25, 2.6]} rotation={[0, 89.5, 0]} scale={0.5} />

						<Text text="Fireplace" position={[-0.5, -0.78, -3]} rotation={[0, -0.3, 0]} scale={0.4} />
						<Text text="Kitchen" position={[3.6, -0.4, -3.2]} rotation={[0, Math.PI / -2, 0]} scale={0.5} />
						<Experience />
					</Scroll>
					<Scroll html style={{ width: "100%" }}>
						<section>
							<h2>Home | About | Contact</h2>
						</section>
					</Scroll>
				</ScrollControls>
			</Canvas>
		</>
	);
}

export default App;
