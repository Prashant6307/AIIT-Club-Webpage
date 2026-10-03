import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function ExperimentalCore() {
  const groupRef = useRef();
  const { mouse } = useThree();

  useFrame((state) => {
    const group = groupRef.current;

    if (!group) return;

    // Mouse interaction
    group.rotation.x = THREE.MathUtils.lerp(
      group.rotation.x,
      mouse.y * 0.18,
      0.025
    );

    group.rotation.y = THREE.MathUtils.lerp(
      group.rotation.y,
      mouse.x * 0.22 +
        state.clock.elapsedTime * 0.12,
      0.025
    );

    // Floating movement
    group.position.y =
      Math.sin(state.clock.elapsedTime * 0.7) * 0.08;
  });

  return (
    <group ref={groupRef}>

      {/* Outer orbit 1 */}
      <mesh rotation={[Math.PI / 2, 0.3, 0]}>
        <torusGeometry
          args={[0.95, 0.012, 12, 96]}
        />

        <meshBasicMaterial
          color="#111111"
          transparent
          opacity={0.45}
        />
      </mesh>

      {/* Outer orange orbit */}
      <mesh rotation={[0.8, Math.PI / 3, 0.2]}>
        <torusGeometry
          args={[1.2, 0.008, 12, 96]}
        />

        <meshBasicMaterial
          color="#ff5a00"
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Large outer orbit */}
      <mesh rotation={[1.3, 0.2, Math.PI / 4]}>
        <torusGeometry
          args={[1.5, 0.006, 12, 96]}
        />

        <meshBasicMaterial
          color="#111111"
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* Floating orange point */}
      <mesh position={[1.1, 0.5, 0]}>
        <sphereGeometry args={[0.045, 12, 12]} />
        <meshBasicMaterial color="#ff5a00" />
      </mesh>

      {/* Floating black point */}
      <mesh position={[-1.0, -0.4, 0.2]}>
        <sphereGeometry args={[0.035, 12, 12]} />
        <meshBasicMaterial color="#111111" />
      </mesh>

      {/* Floating orange point */}
      <mesh position={[0.2, 1.0, -0.3]}>
        <sphereGeometry args={[0.03, 12, 12]} />
        <meshBasicMaterial color="#ff5a00" />
      </mesh>

    </group>
  );
}

function ProjectScene() {
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
      <ExperimentalCore />
    </Canvas>
  );
}

export default ProjectScene;