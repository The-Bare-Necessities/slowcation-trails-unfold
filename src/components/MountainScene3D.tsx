import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const MountainScene3D = () => {
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

    renderer.setSize(500, 500);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);

    const mountains: THREE.Mesh[] = [];
    const mountainCount = 5;

    for (let i = 0; i < mountainCount; i++) {
      const geometry = new THREE.ConeGeometry(1.5 - i * 0.2, 2 + i * 0.3, 4);
      const material = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color().setHSL(0.55, 0.6, 0.3 + i * 0.1),
        transparent: true,
        opacity: 0.7,
        roughness: 0.3,
        metalness: 0.2,
        clearcoat: 0.5,
        clearcoatRoughness: 0.3,
      });

      const mountain = new THREE.Mesh(geometry, material);
      mountain.position.set(
        (i - 2) * 1.5,
        -1 + i * 0.1,
        -i * 0.8
      );
      mountain.castShadow = true;
      mountain.receiveShadow = true;
      scene.add(mountain);
      mountains.push(mountain);
    }

    const treeGeometry = new THREE.ConeGeometry(0.3, 0.8, 6);
    const treeMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x2d5016,
      transparent: true,
      opacity: 0.8,
      roughness: 0.7,
    });

    const trees: THREE.Mesh[] = [];
    for (let i = 0; i < 8; i++) {
      const tree = new THREE.Mesh(treeGeometry, treeMaterial);
      tree.position.set(
        (Math.random() - 0.5) * 8,
        -1.5,
        (Math.random() - 0.5) * 6
      );
      tree.castShadow = true;
      scene.add(tree);
      trees.push(tree);
    }

    const cloudGeometry = new THREE.SphereGeometry(0.5, 16, 16);
    const cloudMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.4,
      roughness: 1,
      transmission: 0.3,
    });

    const clouds: THREE.Group[] = [];
    for (let i = 0; i < 5; i++) {
      const cloudGroup = new THREE.Group();

      for (let j = 0; j < 3; j++) {
        const cloudPart = new THREE.Mesh(cloudGeometry, cloudMaterial);
        cloudPart.position.set(
          (Math.random() - 0.5) * 1,
          (Math.random() - 0.5) * 0.3,
          (Math.random() - 0.5) * 0.5
        );
        cloudPart.scale.set(
          1 + Math.random() * 0.5,
          0.8 + Math.random() * 0.3,
          0.8 + Math.random() * 0.3
        );
        cloudGroup.add(cloudPart);
      }

      cloudGroup.position.set(
        (Math.random() - 0.5) * 10,
        2 + Math.random() * 2,
        (Math.random() - 0.5) * 5
      );
      scene.add(cloudGroup);
      clouds.push(cloudGroup);
    }

    const leafGeometry = new THREE.SphereGeometry(0.1, 8, 8);
    const leafMaterial = new THREE.MeshBasicMaterial({
      color: 0x90ee90,
      transparent: true,
      opacity: 0.7,
    });

    const leaves: THREE.Mesh[] = [];
    for (let i = 0; i < 20; i++) {
      const leaf = new THREE.Mesh(leafGeometry, leafMaterial);
      leaf.position.set(
        (Math.random() - 0.5) * 12,
        Math.random() * 6 - 1,
        (Math.random() - 0.5) * 8
      );
      scene.add(leaf);
      leaves.push(leaf);
    }

    const hutGroup = new THREE.Group();

    const hutWallGeometry = new THREE.BoxGeometry(0.8, 0.6, 0.8);
    const hutWallMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x8b6f47,
      roughness: 0.8,
      metalness: 0.1,
    });
    const hutWall = new THREE.Mesh(hutWallGeometry, hutWallMaterial);
    hutWall.position.y = 0.3;
    hutWall.castShadow = true;
    hutWall.receiveShadow = true;
    hutGroup.add(hutWall);

    const roofGeometry = new THREE.ConeGeometry(0.65, 0.5, 4);
    const roofMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xb22222,
      roughness: 0.6,
      metalness: 0.2,
    });
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.y = 0.85;
    roof.rotation.y = Math.PI / 4;
    roof.castShadow = true;
    hutGroup.add(roof);

    const doorGeometry = new THREE.BoxGeometry(0.25, 0.4, 0.05);
    const doorMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x4a3728,
      roughness: 0.9,
    });
    const door = new THREE.Mesh(doorGeometry, doorMaterial);
    door.position.set(0, 0.2, 0.42);
    hutGroup.add(door);

    const windowGeometry = new THREE.BoxGeometry(0.15, 0.15, 0.05);
    const windowMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffd700,
      emissive: 0xffaa00,
      emissiveIntensity: 0.5,
      transparent: true,
      opacity: 0.8,
    });
    const window1 = new THREE.Mesh(windowGeometry, windowMaterial);
    window1.position.set(0.25, 0.4, 0.42);
    hutGroup.add(window1);

    const window2 = new THREE.Mesh(windowGeometry, windowMaterial);
    window2.position.set(-0.25, 0.4, 0.42);
    hutGroup.add(window2);

    hutGroup.position.set(2, -1.4, 2);
    hutGroup.scale.set(0.8, 0.8, 0.8);
    scene.add(hutGroup);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffd700, 1.2);
    sunLight.position.set(5, 8, 5);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    scene.add(sunLight);

    const fillLight = new THREE.DirectionalLight(0x87ceeb, 0.6);
    fillLight.position.set(-5, 3, -5);
    scene.add(fillLight);

    const fogLight = new THREE.PointLight(0xb0c4de, 0.8, 20);
    fogLight.position.set(0, 1, 0);
    scene.add(fogLight);

    camera.position.set(0, 1, 8);
    camera.lookAt(0, 0, 0);

    let time = 0;

    const animate = () => {
      requestAnimationFrame(animate);

      time += 0.01;

      mountains.forEach((mountain, index) => {
        mountain.rotation.y = Math.sin(time * 0.3 + index) * 0.1;
        mountain.position.y = -1 + index * 0.1 + Math.sin(time * 0.5 + index) * 0.05;
      });

      trees.forEach((tree, index) => {
        tree.rotation.z = Math.sin(time * 0.8 + index) * 0.05;
      });

      clouds.forEach((cloud, index) => {
        cloud.position.x += 0.01;
        if (cloud.position.x > 12) cloud.position.x = -12;
        cloud.position.y += Math.sin(time + index) * 0.002;
      });

      leaves.forEach((leaf, index) => {
        leaf.position.y += Math.sin(time * 2 + index) * 0.01;
        leaf.position.x += Math.cos(time * 0.5 + index) * 0.005;
        leaf.rotation.x += 0.02;
        leaf.rotation.y += 0.03;

        if (leaf.position.y < -2) leaf.position.y = 5;
        if (Math.abs(leaf.position.x) > 6) leaf.position.x *= -0.9;
      });

      camera.position.x = Math.sin(time * 0.1) * 0.5;
      camera.position.y = 1 + Math.sin(time * 0.15) * 0.3;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      mountains.forEach(m => {
        m.geometry.dispose();
        (m.material as THREE.Material).dispose();
      });
      trees.forEach(t => {
        t.geometry.dispose();
        (t.material as THREE.Material).dispose();
      });
      leaves.forEach(l => {
        l.geometry.dispose();
        (l.material as THREE.Material).dispose();
      });
      treeGeometry.dispose();
      treeMaterial.dispose();
      cloudGeometry.dispose();
      cloudMaterial.dispose();
      leafGeometry.dispose();
      leafMaterial.dispose();
      hutWallGeometry.dispose();
      hutWallMaterial.dispose();
      roofGeometry.dispose();
      roofMaterial.dispose();
      doorGeometry.dispose();
      doorMaterial.dispose();
      windowGeometry.dispose();
      windowMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-[500px] h-[500px] mx-auto" />;
};
