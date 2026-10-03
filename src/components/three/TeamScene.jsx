import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function TeamParticles() {
  const pointsRef = useRef();
  const { mouse } = useThree();

  const positions = useMemo(() => {
    const count = 450;
    const array = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      array[i3] =
        (seededRandom(i * 3 + 1) - 0.5) * 9;

      array[i3 + 1] =
        (seededRandom(i * 3 + 2) - 0.5) * 6;

      array[i3 + 2] =
        (seededRandom(i * 3 + 3) - 0.5) * 4;
    }

    return array;
  }, []);

  useFrame((state) => {
    const points = pointsRef.current;

    if (!points) return;

    points.rotation.x = THREE.MathUtils.lerp(
      points.rotation.x,
      mouse.y * 0.1,
      0.02
    );

    points.rotation.y = THREE.MathUtils.lerp(
      points.rotation.y,
      mouse.x * 0.14 +
        state.clock.elapsedTime * 0.015,
      0.02
    );

    points.position.y =
      Math.sin(state.clock.elapsedTime * 0.3) *
      0.03;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.018}
        color="#ff5a00"
        transparent
        opacity={0.45}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function TeamScene() {
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
      <TeamParticles />
    </Canvas>
  );
}

export default TeamScene;