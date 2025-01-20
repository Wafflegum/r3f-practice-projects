import { Text3D } from "@react-three/drei";

export default function Text({
	text = "Hello",
	position = [3.5, 0, 1.725],
	rotation = [0, Math.PI / 2, 0],
	scale = 0.1,
}) {
	return (
		<>
			<Text3D
				font={"/typefaces/smooch-sans.json"}
				scale={scale}
				position={position}
				rotation={rotation}
				castShadow
			>
				{text}
				<meshToonMaterial color={"white"} emissive={"#757575"} />
			</Text3D>
		</>
	);
}
