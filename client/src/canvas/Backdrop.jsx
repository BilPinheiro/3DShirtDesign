import React, {useRef} from 'react'
import {useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import state from '../store';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';


const Backdrop = () => {
const snap = useSnapshot(state)
const shadows = useRef();
    return (
        <AccumulativeShadows
        ref={shadows}
        temporal
        frames={60}
        alphaTest={0.85}
        scale={10}
        rotation={[Math.PI /2, 0 ,0 ]}
        position = {[0,0,-0.14]}>
            <RandomizedLight
            amount={4} 
            radius={9}
            intensity={0.55}
            ambient={0.25}
            position={[5,5, -5]}
            />
            <RandomizedLight
            amount={4} 
            radius={5}
            intensity={0.25}
            ambient={0.25}
            position={[ -5, 5, 0]}
            />
        </AccumulativeShadows>
  )
}

export default Backdrop