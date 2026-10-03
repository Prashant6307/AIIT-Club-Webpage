import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function Particles({ count = 900 }) {
  const pointsRef = useRef();
  const { mouse } = useThree();

  const positions = useMemo(() => {
    const array = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      array[i3] =
        (seededRandom(i * 3 + 1) - 0.5) * 11;

      array[i3 + 1] =
        (seededRandom(i * 3 + 2) - 0.5) * 7;

      array[i3 + 2] =
        (seededRandom(i * 3 + 3) - 0.5) * 5;
    }

    return array;
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const targetX = mouse.y * 0.12;
    const targetY = mouse.x * 0.18;

    pointsRef.current.rotation.x = THREE.MathUtils.lerp(
      pointsRef.current.rotation.x,
      targetX,
      0.025
    );

    pointsRef.current.rotation.y += 0.0008;

    pointsRef.current.rotation.y = THREE.MathUtils.lerp(
      pointsRef.current.rotation.y,
      targetY + pointsRef.current.rotation.y,
      0.025
    );

    pointsRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.3) * 0.04;
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
        size={0.022}
        color="#ff5a00"
        transparent
        opacity={0.65}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default Particles;