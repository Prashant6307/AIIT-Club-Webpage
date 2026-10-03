import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function EventEnvironment() {
  const groupRef = useRef();
  const { mouse } = useThree();

  useFrame((state) => {
    const group = groupRef.current;

    if (!group) return;

    group.rotation.x = THREE.MathUtils.lerp(
      group.rotation.x,
      mouse.y * 0.08,
      0.025
    );

    group.rotation.y = THREE.MathUtils.lerp(
      group.rotation.y,
      mouse.x * 0.12 +
        state.clock.elapsedTime * 0.025,
      0.025
    );
  });

  return (
    <group ref={groupRef}>

      {/* Horizontal scanning lines */}
      {Array.from({ length: 9 }).map((_, index) => (
        <mesh
          key={`horizontal-${index}`}
          position={[
            0,
            (index - 4) * 0.45,
            -1.5,
          ]}
        >
          <boxGeometry
            args={[7, 0.006, 0.006]}
          />

          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.08}
          />
        </mesh>
      ))}

      {/* Vertical scanning lines */}
      {Array.from({ length: 9 }).map((_, index) => (
        <mesh
          key={`vertical-${index}`}
          position={[
            (index - 4) * 0.7,
            0,
            -1.5,
          ]}
        >
          <boxGeometry
            args={[0.006, 5, 0.006]}
          />

          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.06}
          />
        </mesh>
      ))}

      {/* Orange event markers */}
      <mesh position={[-2.2, 0.8, 0]}>
        <sphereGeometry args={[0.045, 12, 12]} />
        <meshBasicMaterial color="#ff5a00" />
      </mesh>

      <mesh position={[1.8, -0.9, 0]}>
        <sphereGeometry args={[0.035, 12, 12]} />
        <meshBasicMaterial color="#ff5a00" />
      </mesh>

      <mesh position={[2.5, 1.1, -0.5]}>
        <sphereGeometry args={[0.025, 12, 12]} />
        <meshBasicMaterial color="#ff5a00" />
      </mesh>

    </group>
  );
}

function EventsScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 50,
      }}
      dpr={[1, 2]}
      gl={{
        alpha: true,
        antialias: true,
      }}
    >
      <EventEnvironment />
    </Canvas>
  );
}

export default EventsScene;