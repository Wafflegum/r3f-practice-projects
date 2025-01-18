import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { Scroll, ScrollControls } from "@react-three/drei";

function App() {
	return (
		<>
			<Canvas>
				<ScrollControls pages={3} damping={0.1}>
					<Scroll>
						<Experience />
					</Scroll>
				</ScrollControls>
			</Canvas>
		</>
	);
}

export default App;
