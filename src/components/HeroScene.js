'use client'

import React, { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { 
  Environment, 
  Float, 
  MeshDistortMaterial, 
  GradientTexture,
  OrbitControls
} from '@react-three/drei'
import * as THREE from 'three'
import { useNavigate } from 'react-router-dom' // Updated import
import { useFrame } from '@react-three/fiber'

function AnimatedShape() {
  const meshRef = useRef(null)
  const [hovered, setHovered] = useState(false)
  
  const geometry = useMemo(() => {
    return new THREE.TorusKnotGeometry(1.5, 0.5, 128, 32)
  }, [])

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15

    if (hovered) {
      meshRef.current.scale.set(1.1, 1.1, 1.1)
    } else {
      meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1)
    }
  })

  return (
    <Float
      speed={3}
      rotationIntensity={0.5}
      floatIntensity={1}
    >
      <mesh
        ref={meshRef}
        geometry={geometry}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color="#ffffff"
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0}
          metalness={0.9}
          distort={0.3}
        >
          <GradientTexture
            stops={[0, 0.5, 1]}
            colors={['#00ffff', '#ff00ff', '#ffff00']}
          />
        </MeshDistortMaterial>
      </mesh>
    </Float>
  )
}

function HeroScene() {
  const [showPopup, setShowPopup] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const navigate = useNavigate() // Using useNavigate for routing
  const controlsRef = useRef()

  const handleTagClick = () => {
    setShowPopup((prev) => !prev)
  }

  // Check zoom level and trigger alert/navigation
  useEffect(() => {
    if (!controlsRef.current) return
    const handleZoom = () => {
      const zoomLevel = controlsRef.current.object.zoom

      // Show alert when zoom level is reduced
      if (zoomLevel < 1.5 && !showAlert) {
        setShowAlert(true)
        alert("You're going in Skill Planet, be ready!")
      }

      // Navigate to /projects when zoom is 70% or more
      if (zoomLevel < 0.3) {
        navigate('/projects') // Use navigate instead of history.push
      }
    }

    const interval = setInterval(handleZoom, 100)

    return () => clearInterval(interval)
  }, [showAlert, navigate])

  return (
    <div className="w-[100vw] md:w-[70vw] right-0 h-[60vh] md:h-[100%] z-[100]">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}  // Set initial camera position (Zoomed Out)
        style={{ backgroundColor: 'transparent' }}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        
        {/* Glowing Planet Shape */}
        <AnimatedShape />
        
        <Environment preset="night" />
        
        {/* OrbitControls to set zoom and pan */}
        <OrbitControls 
          ref={controlsRef} 
          enableZoom={true} 
          enablePan={false}
          minZoom={1}  // Minimum zoom level
          maxZoom={5}  // Maximum zoom level
          zoomSpeed={0.5}  // Speed of zoom when user scrolls
        />
      </Canvas>

      {/* Health Tag */}
      <div className="mx-auto absolute bottom-[15%] right-[10%] md:bottom-[10%] md:right-[10%]">
        <span 
          onClick={handleTagClick} 
          onMouseEnter={() => setShowPopup(true)} 
          onMouseLeave={() => setShowPopup(false)} 
          className="text-gray-400 text-[12px] bg-gray-800 px-3 py-1 rounded-full cursor-pointer"
        >
          Skill Planet Health - <strong>90%</strong>
        </span>
      </div>

      {/* Popup Message */}
      {showPopup && (
        <div className="absolute bottom-[20%] right-[15%] bg-black text-[11px] text-white p-2 rounded-md shadow-lg max-w-xs">
          <p>
            Skill Planet Health represents the overall proficiency and expertise of a developer. The higher the skill level, the healthier the planet becomes, indicating a thriving, well-developed skillset.
          </p>
        </div>
      )}
    </div>
  )
}

export default HeroScene;
