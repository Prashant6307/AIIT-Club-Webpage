import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import Particles from "./Particles";

function OrbitalSystem() {
  const groupRef = useRef();
  const coreRef = useRef();
  const { mouse } = useThree();

  useFrame((state) => {
    const group = groupRef.current;
    const core = coreRef.current;

    if (!group || !core) return;

    // Mouse parallax + slow rotation
    group.rotation.x = THREE.MathUtils.lerp(
      group.rotation.x,
      mouse.y * 0.12,
      0.025
    );

    group.rotation.y = THREE.MathUtils.lerp(
      group.rotation.y,
      mouse.x * 0.18 + state.clock.elapsedTime * 0.08,
      0.025
    );

    // Floating core
    core.position.y =
      Math.sin(state.clock.elapsedTime * 1.2) * 0.035;

    // Subtle core pulse
    const scale =
      1 + Math.sin(state.clock.elapsedTime * 2) * 0.06;

    core.scale.setScalar(scale);
  });

  return (
    <group ref={groupRef}>
      {/* Outer orbit */}
      <mesh rotation={[Math.PI / 2.5, 0.2, 0]}>
        <torusGeometry args={[1.8, 0.012, 16, 128]} />
        <meshBasicMaterial
          color="#111111"
          transparent
          opacity={0.28}
        />
      </mesh>

      {/* Middle orbit */}
      <mesh rotation={[0.7, Math.PI / 4, 0.4]}>
        <torusGeometry args={[1.35, 0.018, 16, 128]} />
        <meshBasicMaterial
          color="#111111"
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Orange orbit */}
      <mesh rotation={[Math.PI / 2, 0, Math.PI / 5]}>
        <torusGeometry args={[0.85, 0.014, 16, 128]} />
        <meshBasicMaterial
          color="#ff5a00"
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Core */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.11, 24, 24]} />
        <meshBasicMaterial color="#ff5a00" />
      </mesh>
    </group>
  );
}

function TechScene() {
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
      <OrbitalSystem />

      <Particles count={650} />
    </Canvas>
  );
}

export default TechScene;