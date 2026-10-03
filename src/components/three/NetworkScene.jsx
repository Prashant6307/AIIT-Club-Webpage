import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function Network() {
  const groupRef = useRef();
  const { mouse } = useThree();

  const nodes = useMemo(() => {
    const result = [];

    for (let i = 0; i < 24; i++) {
      const angle = seededRandom(i + 1) * Math.PI * 2;
      const radius = 0.7 + seededRandom(i + 20) * 1.5;

      result.push([
        Math.cos(angle) * radius,
        (seededRandom(i + 40) - 0.5) * 2.2,
        Math.sin(angle) * radius,
      ]);
    }

    return result;
  }, []);

  useFrame((state) => {
    const group = groupRef.current;

    if (!group) return;

    group.rotation.x = THREE.MathUtils.lerp(
      group.rotation.x,
      mouse.y * 0.15,
      0.025
    );

    group.rotation.y = THREE.MathUtils.lerp(
      group.rotation.y,
      mouse.x * 0.2 + state.clock.elapsedTime * 0.04,
      0.025
    );
  });

  return (
    <group ref={groupRef}>
      {/* Connections */}
      {nodes.map((position, index) => {
        const next = nodes[(index + 1) % nodes.length];

        const start = new THREE.Vector3(...position);
        const end = new THREE.Vector3(...next);

        const direction = new THREE.Vector3()
          .subVectors(end, start);

        const length = direction.length();

        const midpoint = new THREE.Vector3()
          .addVectors(start, end)
          .multiplyScalar(0.5);

        const quaternion = new THREE.Quaternion();

        quaternion.setFromUnitVectors(
          new THREE.Vector3(0, 1, 0),
          direction.normalize()
        );

        return (
          <mesh
            key={`line-${index}`}
            position={midpoint}
            quaternion={quaternion}
          >
            <cylinderGeometry
              args={[0.006, 0.006, length, 6]}
            />

            <meshBasicMaterial
              color="#ffffff"
              transparent
              opacity={0.25}
            />
          </mesh>
        );
      })}

      {/* Nodes */}
      {nodes.map((position, index) => (
        <mesh key={`node-${index}`} position={position}>
          <sphereGeometry
            args={[
              index % 5 === 0 ? 0.07 : 0.035,
              12,
              12,
            ]}
          />

          <meshBasicMaterial
            color={
              index % 5 === 0
                ? "#ff5a00"
                : "#ffffff"
            }
          />
        </mesh>
      ))}

      {/* Central node */}
      <mesh>
        <sphereGeometry args={[0.13, 20, 20]} />

        <meshBasicMaterial color="#ff5a00" />
      </mesh>
    </group>
  );
}

function NetworkScene() {
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
      <Network />
    </Canvas>
  );
}

export default NetworkScene;