import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Bounds,
  Float,
  Sparkles,
  useGLTF,
  ContactShadows,
  PerspectiveCamera,
} from '@react-three/drei';

useGLTF.preload('/models/cottage/scene.gltf');
useGLTF.preload('/models/pumpkin/scene.gltf');
useGLTF.preload('/models/ghost/scene.gltf');

function Cottage() {
  const { scene } = useGLTF('/models/cottage/scene.gltf');
  return <primitive object={scene} rotation={[0, Math.PI * 0.15, 0]} />;
}

function Pumpkin({ position = [0, 0, 0], scale = 1, speed = 1 }) {
  const { scene } = useGLTF('/models/pumpkin/scene.gltf');
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.35 * speed;
    }
  });

  return (
    <Float speed={1.8 * speed} rotationIntensity={0.25} floatIntensity={0.6}>
      <group ref={ref} position={position} scale={scale}>
        <primitive object={scene.clone()} />
      </group>
    </Float>
  );
}

function Ghost({ position = [0, 0, 0], scale = 1 }) {
  const { scene } = useGLTF('/models/ghost/scene.gltf');
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.2) * 0.15;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={ref} position={position} scale={scale}>
      <primitive object={scene.clone()} />
    </group>
  );
}

function HeroSceneContent() {
  return (
    <>
      <color attach="background" args={['#0a0508']} />
      <fog attach="fog" args={['#0a0508', 4, 14]} />
      <PerspectiveCamera makeDefault position={[0, 1.2, 3.2]} fov={50} />
      <ambientLight intensity={0.25} color="#3d1a5c" />
      <pointLight position={[2, 3, 2]} intensity={2.5} color="#ff6b00" />
      <pointLight position={[-2, 1, -1]} intensity={1.2} color="#9b59b6" />
      <spotLight
        position={[0, 4, 0]}
        angle={0.5}
        penumbra={1}
        intensity={1.5}
        color="#ff9933"
        castShadow
      />

      <Bounds fit clip observe margin={1.1}>
        <Cottage />
      </Bounds>

      <Pumpkin position={[0.8, -0.3, 0.6]} scale={0.35} />
      <Ghost position={[-1.1, 0.5, 0.3]} scale={0.45} />
      <Pumpkin position={[-0.5, -0.5, 1.2]} scale={0.2} speed={1.4} />

      <Sparkles count={80} scale={6} size={2} speed={0.3} color="#ff6b00" opacity={0.6} />
      <Sparkles count={40} scale={5} size={1.5} speed={0.2} color="#9b59b6" opacity={0.4} />

      <ContactShadows position={[0, -0.8, 0]} opacity={0.45} scale={8} blur={2.5} far={4} />
    </>
  );
}

export default function HeroScene({ className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-[#0a0508] via-transparent to-transparent z-10" />
      <Canvas shadows dpr={[1, 1.5]} className="h-full w-full rounded-3xl">
        <Suspense fallback={null}>
          <HeroSceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}

export function AboutScene({ className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent via-transparent to-[#0a0508]/80 z-10" />
      <Canvas dpr={[1, 1.5]} className="h-full w-full rounded-2xl">
        <Suspense fallback={null}>
          <color attach="background" args={['#120810']} />
          <fog attach="fog" args={['#120810', 2, 8]} />
          <PerspectiveCamera makeDefault position={[0, 0.5, 2.8]} fov={45} />
          <ambientLight intensity={0.3} color="#4a1942" />
          <pointLight position={[1, 2, 2]} intensity={2} color="#ff6b00" />
          <pointLight position={[-2, 0, 1]} intensity={1} color="#7b2cbf" />
          <Ghost position={[0, 0, 0]} scale={0.55} />
          <Pumpkin position={[1.2, -0.6, 0.5]} scale={0.28} speed={0.8} />
          <Sparkles count={30} scale={4} size={1.5} color="#ff6b00" />
        </Suspense>
      </Canvas>
    </div>
  );
}

export function ProjectsScene({ className = '' }) {
  function RotatingDecor() {
    const group = useRef();
    useFrame((state) => {
      if (group.current) {
        group.current.rotation.y = state.clock.elapsedTime * 0.15;
      }
    });
    return (
      <group ref={group}>
        <Pumpkin position={[-0.6, 0, 0]} scale={0.4} />
        <Ghost position={[0.7, 0.2, 0]} scale={0.35} />
      </group>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <Canvas dpr={[1, 1.5]} className="h-full w-full rounded-xl">
        <Suspense fallback={null}>
          <color attach="background" args={['#0a0508']} />
          <PerspectiveCamera makeDefault position={[0, 0, 3]} fov={40} />
          <ambientLight intensity={0.4} />
          <pointLight position={[2, 2, 2]} intensity={1.5} color="#ff6b00" />
          <RotatingDecor />
        </Suspense>
      </Canvas>
    </div>
  );
}
