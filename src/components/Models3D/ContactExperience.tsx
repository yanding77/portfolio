import {Canvas} from "@react-three/fiber";
import {Kame} from './Kame.jsx';
import {Rick} from './Rick.jsx';
import {Jugger} from './Jugger.jsx';

import {OrbitControls} from "@react-three/drei";
import {useMediaQuery} from "react-responsive";

const ContactExperience = () => {
    const isMobile = useMediaQuery({query: "(max-width: 1024px)", });

    return (
        <Canvas camera={{
            position: [0,0, 20]

        }}>
            <ambientLight intensity={50} color='#1a1a40'/>
            <directionalLight intensity={2} position={[10,5,5]}/>

            <OrbitControls
                enableZoom={!isMobile}
                enablePan={false}
                maxDistance={25}
                minDistance={15}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2.5}
            />
            <Kame scale={1} position={[0, -1, 0]} />
            <Rick scale={1.3} position={[4, -1, 5.5]} />
            <Jugger scale={0.3} position={[-8, -1, 5]} rotation={[0, -Math.PI / 3, 0]} />
        </Canvas>
    )
}

export default ContactExperience;