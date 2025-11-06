import { Canvas } from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import {useMediaQuery} from "react-responsive";
import {Stadium} from "./Stadium.jsx";
import {Ecuador} from "./Ecuador.jsx";



const CampNou = () => {
    const isMobile = useMediaQuery({query: '(max-width: 1024px)'});
    return(
        <Canvas camera={{
            position: [5,5,-20]
        }}>
            <ambientLight intensity={50} color='#1a1a40'/>
            <directionalLight intensity={2} position={[5,5,5]}/>
            <OrbitControls
                enablePan={false}
                maxDistance={10}
                minDistance={5}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2.5}
            />
            <group
                scale={isMobile? 1.3:1}>
            <Stadium scale={0.001} position={[0, -1, 0]} />
            <Ecuador scale={0.5} position={[0, -1, -5]}/>
            </group>
        </Canvas>
    )
}

export default CampNou