import {Environment, Float, OrbitControls, useGLTF} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import type {TechStackProps} from "../../constants/types.ts";

const TechIcon = ({model}: TechStackProps) => {
    const scene = useGLTF(model.modelPath);

    return (
        <Canvas>
            <ambientLight intensity={0.3}/>
            <directionalLight position = {[5,5,5]} intensity={1}/>
            <Environment preset="city"/>
            <OrbitControls enableZoom={false}/>
            <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
                <group scale={model.scale}>
                <primitive object={scene.scene} />
                </group>
            </Float>

        </Canvas>
    )
}

export default TechIcon;