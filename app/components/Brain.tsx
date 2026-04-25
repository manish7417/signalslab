// "use client";

// import { Canvas, useFrame } from "@react-three/fiber";
// import { useGLTF } from "@react-three/drei";
// import { useRef } from "react";

// function BrainModel() {
//   const { scene } = useGLTF("/brain.glb");
//   const ref = useRef<any>();

//   // Auto rotation (smooth)
//   useFrame(() => {
//     if (ref.current) {
//       ref.current.rotation.y += 0.003; // slow rotation
//     }
//   });

//   return <primitive ref={ref} object={scene} scale={2} />;
// }

// export default function Brain() {
//   return (
//     <Canvas camera={{ position: [0, 0, 6] }}>
      
//       {/* Soft ambient light */}
//       <ambientLight intensity={0.4} />

//       {/* Neon cyan light */}
//       <pointLight position={[2, 2, 2]} intensity={2} color="#00ffff" />
//       <pointLight position={[-2, -2, -2]} intensity={2} color="#00ffff" />

//       <BrainModel />

//     </Canvas>
//   );
// }