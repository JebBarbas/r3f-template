import { Sphere, OrbitControls, useEnvironment, Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useControls } from "leva"

function ThreeContent(){
    const { color } = useControls('Material', {
        color: { value: '#dc143c' }
    })

    const envMap = useEnvironment({ files: '/textures/industrial_sunset_02_4k.hdr' })

    return (
        <>
            <Environment map={envMap} background/>

            <Sphere>
                <meshStandardMaterial color={color}/>
            </Sphere>
        </>
    )
}

function App() {
    return (
        <div className="canvas__container">
            <Canvas>
                <color attach="background" args={["black"]}/>

                <ThreeContent/>

                <OrbitControls/>
            </Canvas>
        </div>
    )
}

export default App
