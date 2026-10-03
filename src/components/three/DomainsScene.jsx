import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const domains = [
  "WEB",
  "AI / ML",
  "UI / UX",
  "APP",
  "CLOUD",
  "CYBER",
  "IOT",
];

function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function DomainNodes() {
  const groupRef = useRef();
  const { mouse } = useThree();

  const nodes = useMemo(() => {
    return domains.map((_, index) => {
      const angle =
        (index / domains.length) * Math.PI * 2;

      const radius = 1.65;

      return [
        Math.cos(angle) * radius,
        (seededRandom(index + 10) - 0.5) * 0.7,
        Math.sin(angle) * radius,
      ];
    });
  }, []);

  useFrame((state) => {
    const group = groupRef.current;

    if (!group) return;

    group.rotation.x = THREE.MathUtils.lerp(
      group.rotation.x,
      mouse.y * 0.12,
      0.025
    );

    group.rotation.y = THREE.MathUtils.lerp(
      group.rotation.y,
      mouse.x * 0.18 +
        state.clock.elapsedTime * 0.05,
      0.025
    );
  });

  return (
    <group ref={groupRef}>
      {/* Central core */}
      <mesh>
        <sphereGeometry args={[0.16, 24, 24]} />
        <meshBasicMaterial color="#ff5a00" />
      </mesh>

      {/* Central rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.45, 0.008, 8, 64]} />
        <meshBasicMaterial
          color="#ff5a00"
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Domain nodes */}
      {nodes.map((position, index) => (
        <group key={domains[index]}>
          {/* Connection to center */}
          <Connection
            start={[0, 0, 0]}
            end={position}
          />

          {/* Node */}
          <mesh position={position}>
            <sphereGeometry
              args={[
                index === 0 ? 0.1 : 0.07,
                16,
                16,
              ]}
            />

            <meshBasicMaterial
              color={
                index % 2 === 0
                  ? "#ff5a00"
                  : "#111111"
              }
            />
          </mesh>

          {/* Outer orbit */}
          <mesh
            position={position}
            rotation={[
              Math.PI / 2,
              index * 0.4,
              0,
            ]}
          >
            <torusGeometry
              args={[0.16, 0.006, 8, 32]}
            />

            <meshBasicMaterial
              color="#111111"
              transparent
              opacity={0.35}
            />
          </mesh>
        </group>
      ))}

      {/* Outer system */}
      <mesh rotation={[Math.PI / 2.2, 0.3, 0]}>
        <torusGeometry
          args={[1.95, 0.008, 8, 96]}
        />

        <meshBasicMaterial
          color="#111111"
          transparent
          opacity={0.2}
        />
      </mesh>
    </group>
  );
}

function Connection({ start, end }) {
  const startVector = new THREE.Vector3(...start);
  const endVector = new THREE.Vector3(...end);

  const direction = new THREE.Vector3()
    .subVectors(endVector, startVector);

  const length = direction.length();

  const midpoint = new THREE.Vector3()
    .addVectors(startVector, endVector)
    .multiplyScalar(0.5);

  const quaternion = new THREE.Quaternion();

  quaternion.setFromUnitVectors(
    new THREE.Vector3(0, 1, 0),
    direction.clone().normalize()
  );

  return (
    <mesh
      position={midpoint}
      quaternion={quaternion}
    >
      <cylinderGeometry
        args={[0.004, 0.004, length, 6]}
      />

      <meshBasicMaterial
        color="#111111"
        transparent
        opacity={0.22}
      />
    </mesh>
  );
}

function DomainsScene() {
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
      <DomainNodes />
    </Canvas>
  );
}

export default DomainsScene;