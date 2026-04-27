import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.02;
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#2dd4bf"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function FloatingOrb({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
      ref.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * speed * 0.7) * 0.3;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.15, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} transparent opacity={0.7} />
    </mesh>
  );
}

export default function ParticleScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#2dd4bf" />
        <ParticleField />
        <FloatingOrb position={[-3, 1, -2]} color="#2dd4bf" speed={0.8} />
        <FloatingOrb position={[3, -1, -3]} color="#8b5cf6" speed={0.6} />
        <FloatingOrb position={[0, 2, -4]} color="#06b6d4" speed={1} />
      </Canvas>
    </div>
  );
}
