import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Floating particles component (plankton/bubbles)
const FloatingParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 800;

  const { positions, sizes, speeds } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const speeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      // Distribute particles in a large volume
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

      // Vary particle sizes for depth perception
      sizes[i] = Math.random() * 0.8 + 0.2;
      
      // Random upward drift speeds
      speeds[i] = Math.random() * 0.3 + 0.1;
    }

    return { positions, sizes, speeds };
  }, []);

  useFrame((state) => {
    if (!particlesRef.current) return;

    const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < particleCount; i++) {
      // Gentle upward drift
      positions[i * 3 + 1] += speeds[i] * 0.01;

      // Reset particles that float too high
      if (positions[i * 3 + 1] > 20) {
        positions[i * 3 + 1] = -20;
      }

      // Add subtle horizontal sway
      positions[i * 3] += Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.002;
      positions[i * 3 + 2] += Math.cos(state.clock.elapsedTime * 0.3 + i) * 0.002;
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        color="#7dd3e8"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

// Caustic light rays from surface
const CausticRays = () => {
  const raysRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!raysRef.current) return;
    
    // Gentle rotation and movement
    raysRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    raysRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.5;
  });

  return (
    <group ref={raysRef} position={[0, 15, -10]}>
      {[...Array(12)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 12) * Math.PI * 2) * 8,
            0,
            Math.sin((i / 12) * Math.PI * 2) * 8
          ]}
          rotation={[Math.PI / 2, 0, (i / 12) * Math.PI * 2]}
        >
          <coneGeometry args={[0.3, 25, 8, 1, true]} />
          <meshBasicMaterial
            color="#4dd4e8"
            transparent
            opacity={0.08}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
};

// Ocean floor silhouette
const OceanFloor = () => {
  return (
    <mesh position={[0, -15, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[100, 100, 20, 20]} />
      <meshStandardMaterial
        color="#0a1f3d"
        roughness={0.9}
        metalness={0.1}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
};

// Interactive camera controller with cursor parallax
const CameraController = () => {
  const { camera } = useThree();
  const targetRotation = useRef({ x: 0, y: 0 });
  const currentRotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse position to -1 to 1
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Subtle rotation targets
      targetRotation.current = {
        x: y * 0.15,
        y: x * 0.15
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    // Smooth lerp for camera rotation
    currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * 0.05;
    currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * 0.05;

    camera.rotation.x = currentRotation.current.x;
    camera.rotation.y = currentRotation.current.y;
  });

  return null;
};

// Ambient atmosphere with fog and gradient
const Atmosphere = () => {
  const { scene } = useThree();

  useEffect(() => {
    scene.fog = new THREE.FogExp2(0x0a2540, 0.015);
  }, [scene]);

  return (
    <>
      <ambientLight intensity={0.4} color="#4a90a8" />
      <directionalLight
        position={[0, 20, 0]}
        intensity={0.8}
        color="#7dd3e8"
        castShadow={false}
      />
      <hemisphereLight
        args={["#4a90a8", "#0a1f3d", 0.6]}
      />
    </>
  );
};

// Subtle volumetric light effect
const VolumetricLight = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.05;
  });

  return (
    <mesh ref={meshRef} position={[0, 10, -5]}>
      <cylinderGeometry args={[15, 18, 30, 32, 1, true]} />
      <meshBasicMaterial
        color="#2a7f9f"
        transparent
        opacity={0.03}
        side={THREE.DoubleSide}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
};

// Main underwater scene component
const UnderwaterScene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} />
      <CameraController />
      <Atmosphere />
      
      {/* Gradient background sphere */}
      <mesh>
        <sphereGeometry args={[80, 32, 32]} />
        <meshBasicMaterial
          color="#0d2d47"
          side={THREE.BackSide}
        />
      </mesh>

      <VolumetricLight />
      <CausticRays />
      <FloatingParticles />
      <OceanFloor />
    </>
  );
};

// Exported component
const UnderwaterBackground: React.FC = () => {
  return (
    // Use top/right/bottom/left to avoid 100vw/100vh issues (scrollbar adds width)
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -1,
      background: 'linear-gradient(to bottom, #1a4d5e 0%, #0a1f3d 50%, #051120 100%)'
    }}>
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
        dpr={[1, 2]}
      >
        <UnderwaterScene />
      </Canvas>
    </div>
  );
};

export default UnderwaterBackground;