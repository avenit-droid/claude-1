"use client";

import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";
import { coreFragmentShader, coreVertexShader } from "@/shaders/core";

interface CoreMeshProps {
  stage: number; // 0 = сфера-зерно (about), 1 = ядро (hero), 2 = расщеплённое (tech), 3 = растворяющееся (footer)
}

function CoreMesh({ stage }: CoreMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const [hover, setHover] = useState(0);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uIntensity: { value: 1 },
      uHover: { value: 0 },
      uColorA: { value: new THREE.Color("#7C63E8") },
      uColorB: { value: new THREE.Color("#B8A6FF") },
      uColorC: { value: new THREE.Color("#4FE8C9") },
    }),
    []
  );

  useFrame((state, delta) => {
    uniforms.uTime.value += delta;
    uniforms.uHover.value = THREE.MathUtils.lerp(uniforms.uHover.value, hover, 0.06);

    const targetIntensity = stage === 2 ? 1.7 : stage === 3 ? 0.4 : 1;
    uniforms.uIntensity.value = THREE.MathUtils.lerp(uniforms.uIntensity.value, targetIntensity, 0.03);

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.12) * 0.15;

      const targetScale = stage === 0 ? 0.55 : stage === 3 ? 0.7 : 1;
      const s = THREE.MathUtils.lerp(groupRef.current.scale.x, targetScale, 0.03);
      groupRef.current.scale.setScalar(s);
    }
  });

  return (
    <group ref={groupRef}>
      <mesh
        ref={meshRef}
        onPointerEnter={() => setHover(1)}
        onPointerLeave={() => setHover(0)}
      >
        <icosahedronGeometry args={[1.4, 64]} />
        <shaderMaterial
          vertexShader={coreVertexShader}
          fragmentShader={coreFragmentShader}
          uniforms={uniforms}
        />
      </mesh>
    </group>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const count = 600;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.4 + Math.random() * 2.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.018} color="#D6CCFF" transparent opacity={0.55} sizeAttenuation />
    </points>
  );
}

export default function CoreScene({ stage = 1 }: { stage?: number }) {
  return (
    <Canvas
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 5.2], fov: 42 }}
      aria-hidden="true"
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 3, 5]} intensity={40} color="#B8A6FF" />
      <pointLight position={[-4, -2, -3]} intensity={20} color="#4FE8C9" />
      <CoreMesh stage={stage} />
      <Particles />
      <EffectComposer multisampling={0}>
        <Bloom intensity={1.1} luminanceThreshold={0.15} luminanceSmoothing={0.4} mipmapBlur />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.2} darkness={0.9} />
      </EffectComposer>
    </Canvas>
  );
}
