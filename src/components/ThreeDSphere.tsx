import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useTheme } from '../hooks/useTheme';

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();
  
  // Rotate the sphere
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = meshRef.current.rotation.y += 0.001;
    }
  });
  
  const isDark = theme === 'dark';
  
  return (
    <Sphere args={[3, 100, 200]} ref={meshRef}>
      <MeshDistortMaterial
        color={isDark ? "#2e94ff" : "#00a3ff"}
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

interface ThreeDSphereProps {
  size?: string;
  position?: string;
  className?: string;
}

const ThreeDSphere = ({ 
  size = "w-64 h-64",
  position = "relative",
  className = ""
}: ThreeDSphereProps) => {
  return (
    <div className={`${position} ${size} ${className}`}>
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} enablePan={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} />
          <AnimatedSphere />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeDSphere;