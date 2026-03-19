import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const allSkills = [
  'REACT.JS', 'NEXT.JS', 'REACT NATIVE', 'SWIFT', 'TAILWIND CSS',
  'NODE.JS', 'EXPRESS.JS', 'JAVA', 'SPRING BOOT', 'LARAVEL',
  'TYPESCRIPT', 'JAVASCRIPT', 'PYTHON', 'C++', 'C#',
  'POSTGRESQL', 'MONGODB', 'DOCKER', 'GIT', 'JWT',
];

function HelixStrands() {
  const groupRef = useRef<THREE.Group>(null);
  const particlesCount = 80;
  const connectionCount = 20;

  const { positions1, positions2, connections } = useMemo(() => {
    const p1 = new Float32Array(particlesCount * 3);
    const p2 = new Float32Array(particlesCount * 3);
    const conn = new Float32Array(connectionCount * 6);
    const height = 12;

    for (let i = 0; i < particlesCount; i++) {
      const t = (i / particlesCount) * Math.PI * 4;
      const y = (i / particlesCount) * height - height / 2;
      const r = 1.8;

      p1[i * 3] = Math.cos(t) * r;
      p1[i * 3 + 1] = y;
      p1[i * 3 + 2] = Math.sin(t) * r;

      p2[i * 3] = Math.cos(t + Math.PI) * r;
      p2[i * 3 + 1] = y;
      p2[i * 3 + 2] = Math.sin(t + Math.PI) * r;
    }

    for (let i = 0; i < connectionCount; i++) {
      const idx = Math.floor((i / connectionCount) * particlesCount);
      conn[i * 6] = p1[idx * 3];
      conn[i * 6 + 1] = p1[idx * 3 + 1];
      conn[i * 6 + 2] = p1[idx * 3 + 2];
      conn[i * 6 + 3] = p2[idx * 3];
      conn[i * 6 + 4] = p2[idx * 3 + 1];
      conn[i * 6 + 5] = p2[idx * 3 + 2];
    }

    return { positions1: p1, positions2: p2, connections: conn };
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Strand 1 */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesCount}
            array={positions1}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial color="#00e5ff" size={0.08} transparent opacity={0.8} sizeAttenuation />
      </points>

      {/* Strand 2 */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesCount}
            array={positions2}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial color="#00ff9d" size={0.08} transparent opacity={0.8} sizeAttenuation />
      </points>

      {/* Cross connections */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={connectionCount * 2}
            array={connections}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#00e5ff" transparent opacity={0.15} />
      </lineSegments>
    </group>
  );
}

export default function DNAHelix() {
  return (
    <div className="absolute inset-0 opacity-40 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <HelixStrands />
      </Canvas>
    </div>
  );
}
