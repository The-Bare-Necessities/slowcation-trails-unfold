import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const FloatingCompass3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });

    renderer.setSize(300, 300);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);

    const compassGroup = new THREE.Group();

    const ringGeometry = new THREE.TorusGeometry(1.5, 0.1, 16, 100);
    const ringMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xc9a961,
      metalness: 0.9,
      roughness: 0.2,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.castShadow = true;
    compassGroup.add(ring);

    const innerRingGeometry = new THREE.TorusGeometry(1.2, 0.05, 16, 100);
    const innerRing = new THREE.Mesh(innerRingGeometry, ringMaterial);
    compassGroup.add(innerRing);

    const circleGeometry = new THREE.CircleGeometry(1.4, 64);
    const circleMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.3,
      roughness: 0.1,
      metalness: 0.1,
      side: THREE.DoubleSide,
    });
    const circle = new THREE.Mesh(circleGeometry, circleMaterial);
    compassGroup.add(circle);

    const needleGeometry = new THREE.ConeGeometry(0.15, 1.5, 4);
    const needleMaterialN = new THREE.MeshPhysicalMaterial({
      color: 0xff4444,
      emissive: 0xff0000,
      emissiveIntensity: 0.5,
      metalness: 0.8,
      roughness: 0.2,
    });
    const needleN = new THREE.Mesh(needleGeometry, needleMaterialN);
    needleN.rotation.z = -Math.PI / 2;
    needleN.position.x = 0.4;
    needleN.castShadow = true;
    compassGroup.add(needleN);

    const needleMaterialS = new THREE.MeshPhysicalMaterial({
      color: 0x888888,
      metalness: 0.8,
      roughness: 0.2,
    });
    const needleS = new THREE.Mesh(needleGeometry, needleMaterialS);
    needleS.rotation.z = Math.PI / 2;
    needleS.position.x = -0.4;
    needleS.castShadow = true;
    compassGroup.add(needleS);

    const centerSphereGeometry = new THREE.SphereGeometry(0.15, 32, 32);
    const centerSphereMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xc9a961,
      metalness: 1,
      roughness: 0.1,
    });
    const centerSphere = new THREE.Mesh(centerSphereGeometry, centerSphereMaterial);
    centerSphere.castShadow = true;
    compassGroup.add(centerSphere);

    for (let i = 0; i < 4; i++) {
      const markGeometry = new THREE.BoxGeometry(0.1, 0.3, 0.05);
      const markMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xc9a961,
        metalness: 0.9,
        roughness: 0.2,
      });
      const mark = new THREE.Mesh(markGeometry, markMaterial);
      const angle = (i * Math.PI) / 2;
      mark.position.x = Math.cos(angle) * 1.3;
      mark.position.y = Math.sin(angle) * 1.3;
      mark.rotation.z = angle;
      compassGroup.add(mark);
    }

    scene.add(compassGroup);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0xff6b6b, 1, 10);
    pointLight1.position.set(2, 2, 2);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x4ecdc4, 1, 10);
    pointLight2.position.set(-2, -2, 2);
    scene.add(pointLight2);

    camera.position.z = 5;

    let time = 0;

    const animate = () => {
      requestAnimationFrame(animate);

      time += 0.01;

      compassGroup.rotation.y = time * 0.5;
      compassGroup.rotation.x = Math.sin(time * 0.3) * 0.1;

      compassGroup.position.y = Math.sin(time * 0.8) * 0.2;

      needleN.rotation.z = -Math.PI / 2 + Math.sin(time * 2) * 0.05;
      needleS.rotation.z = Math.PI / 2 - Math.sin(time * 2) * 0.05;

      pointLight1.position.x = Math.sin(time) * 3;
      pointLight1.position.y = Math.cos(time) * 3;

      pointLight2.position.x = Math.cos(time * 1.3) * 3;
      pointLight2.position.y = Math.sin(time * 1.3) * 3;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      ringGeometry.dispose();
      ringMaterial.dispose();
      innerRingGeometry.dispose();
      circleGeometry.dispose();
      circleMaterial.dispose();
      needleGeometry.dispose();
      needleMaterialN.dispose();
      needleMaterialS.dispose();
      centerSphereGeometry.dispose();
      centerSphereMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-[300px] h-[300px] mx-auto" />;
};
