import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Cube3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    
    renderer.setSize(400, 400);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);

    // Create glass cube
    const geometry = new THREE.BoxGeometry(3, 3, 3);
    
    // Futuristic holographic material
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.15,
      roughness: 0,
      metalness: 0,
      transmission: 0.95,
      ior: 1.5,
      thickness: 0.2,
      clearcoat: 1,
      clearcoatRoughness: 0,
      emissive: 0x001122,
      emissiveIntensity: 0.3,
    });

    const cube = new THREE.Mesh(geometry, material);
    cube.castShadow = true;
    cube.receiveShadow = true;
    scene.add(cube);

    // Add futuristic wireframe edges
    const edges = new THREE.EdgesGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0x00ffff, 
      transparent: true, 
      opacity: 0.6,
      linewidth: 2
    });
    const wireframe = new THREE.LineSegments(edges, lineMaterial);
    scene.add(wireframe);

    // Add inner glow effect
    const innerGeometry = new THREE.BoxGeometry(2.8, 2.8, 2.8);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0x0088ff,
      transparent: true,
      opacity: 0.1,
      side: THREE.BackSide
    });
    const innerCube = new THREE.Mesh(innerGeometry, innerMaterial);
    scene.add(innerCube);

    // Enhanced lighting setup
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);
    
    // Multiple directional lights for futuristic effect
    const directionalLight1 = new THREE.DirectionalLight(0x00ffff, 1.2);
    directionalLight1.position.set(5, 5, 5);
    directionalLight1.castShadow = true;
    directionalLight1.shadow.mapSize.width = 2048;
    directionalLight1.shadow.mapSize.height = 2048;
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xff0088, 0.8);
    directionalLight2.position.set(-5, -5, 5);
    scene.add(directionalLight2);

    // Add point lights for extra glow
    const pointLight1 = new THREE.PointLight(0x00ffff, 1, 10);
    pointLight1.position.set(2, 2, 2);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff0088, 1, 10);
    pointLight2.position.set(-2, -2, 2);
    scene.add(pointLight2);

    // Position camera further back for larger cube
    camera.position.z = 6;

    // Add floating particles around the cube
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 100;
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00ffff,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Animation variables
    let time = 0;

    // Enhanced animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      time += 0.01;
      
      // Smooth rotation with varying speeds
      cube.rotation.x += 0.008;
      cube.rotation.y += 0.012;
      cube.rotation.z += 0.004;
      
      wireframe.rotation.x += 0.008;
      wireframe.rotation.y += 0.012;
      wireframe.rotation.z += 0.004;
      
      innerCube.rotation.x -= 0.006;
      innerCube.rotation.y -= 0.009;
      innerCube.rotation.z -= 0.003;
      
      // Animate particles
      particles.rotation.y += 0.002;
      
      // Pulsing glow effect
      const pulse = Math.sin(time * 2) * 0.1 + 0.3;
      material.emissiveIntensity = pulse;
      
      // Animate point lights
      pointLight1.position.x = Math.sin(time) * 3;
      pointLight1.position.y = Math.cos(time) * 3;
      
      pointLight2.position.x = Math.cos(time * 1.5) * 3;
      pointLight2.position.y = Math.sin(time * 1.5) * 3;
    scene.add(directionalLight);

    animate();

    // Cleanup
    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      edges.dispose();
      lineMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-[400px] h-[400px] mx-auto" />;
};