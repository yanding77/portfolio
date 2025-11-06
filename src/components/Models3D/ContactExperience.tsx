import {Canvas} from "@react-three/fiber";
import {Kame} from './Kame.jsx';
import {Jugger} from './Jugger.jsx';
import {Goku} from './Goku.jsx';
import {Pikachu} from './Pikachu.jsx';
import {Homelander} from './Homelander.jsx';
import {Roshi} from './Roshi.jsx';
import {RickMorty} from './RickMorty.jsx';
import {Luffy} from './Luffy.jsx';
import {Cristiano} from './Cristiano.jsx';
import {Mordecai} from './Mordecai.jsx';
import {Rigby} from './Rigby.jsx';
import {OmniMan} from './OmniMan.jsx';
import {Thanos} from './Thanos.jsx';
import {Naruto} from './Naruto.jsx';














import {OrbitControls} from "@react-three/drei";



const ContactExperience = () => {

    return (
        <Canvas camera={{
            position: [0,4, 20]
        }}>
            <ambientLight intensity={50} color='#1a1a40'/>
            <directionalLight intensity={3} position={[10,20,0]}/>

            <OrbitControls
                enablePan={false}
                maxDistance={25}
                minDistance={15}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI / 2}
            />
            <Kame scale={1} position={[0, -1, 0]} />
            <Jugger scale={0.3} position={[-8, -1, 5]} rotation={[0, -Math.PI / 3, 0]} />
            <Goku scale={4} position={[-4.5, -1.1, 2]} rotation={[0, 2 , 0]}/>
            <Pikachu scale={1} position={[1, -1, 6]} rotation={[0, 0 , 0]}/>
            <Homelander scale={0.001} position={[10, 6, 5]} rotation={[0, 4.5 , 0]}/>
            <Roshi scale={0.3} position={[-2, 0, 6]} rotation={[0, 0 , 0]}/>
            <RickMorty scale={0.01} position={[6, -1, 0]} rotation={[0, -1.6 , 0]}/>
            <Luffy scale={0.7} position={[4.5, -1, 2]} rotation={[0, 1 , 0]}/>
            <Cristiano scale={1.3} position={[2, -1.4, -13]} rotation={[0, Math.PI, 0]}/>
            <Rigby scale={0.5} position={[1, 0, -5]} rotation={[0, 3 , 0]}/>
            <Mordecai scale={1.5} position={[2, -1, -5]} rotation={[0, 3 , 0]}/>
            <OmniMan scale={0.09} position={[-1.5, -1, -5]} rotation={[0, 3 , 0]}/>
            <Thanos scale={5} position={[4, -1, 6]} rotation={[0, 0.5 , 0]}/>
            <Naruto scale={1.2} position={[-5, -1.1, -1]} rotation={[0, 4.5 , 0]}/>





        </Canvas>
    )
}

export default ContactExperience;