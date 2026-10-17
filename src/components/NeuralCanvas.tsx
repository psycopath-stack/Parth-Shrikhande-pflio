import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface NeuralCanvasProps {
  className?: string;
  interactive?: boolean;
}

export const NeuralCanvas: React.FC<NeuralCanvasProps> = ({
  className = '',
  interactive = true,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [nodeCount, setNodeCount] = useState<number>(75);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050507, 0.0025);

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.z = 180;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Particle nodes configuration
    const PARTICLE_COUNT = 85;
    const CONNECT_DISTANCE = 42;
    const BOUNDS = 75;

    const particlesData: {
      velocity: THREE.Vector3;
      numConnections: number;
    }[] = [];

    const particlePositions = new Float32Array(PARTICLE_COUNT * 3);
    const particleColors = new Float32Array(PARTICLE_COUNT * 3);

    const emeraldColor = new THREE.Color(0x10b981);
    const cyanColor = new THREE.Color(0x34d399);
    const highlightColor = new THREE.Color(0x6ee7b7);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = (Math.random() - 0.5) * BOUNDS * 2;
      const y = (Math.random() - 0.5) * BOUNDS * 2;
      const z = (Math.random() - 0.5) * BOUNDS * 1.5;

      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;

      particlesData.push({
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.35,
          (Math.random() - 0.5) * 0.35,
          (Math.random() - 0.5) * 0.35
        ),
        numConnections: 0,
      });

      // Subtle color gradient between emerald and light cyan
      const mixed = emeraldColor.clone().lerp(cyanColor, Math.random() * 0.6);
      particleColors[i * 3] = mixed.r;
      particleColors[i * 3 + 1] = mixed.g;
      particleColors[i * 3 + 2] = mixed.b;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );
    particlesGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(particleColors, 3)
    );

    // Node particle texture (procedural soft circle)
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.2, 'rgba(52, 211, 153, 0.9)');
      grad.addColorStop(0.6, 'rgba(16, 185, 129, 0.3)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particlesMaterial = new THREE.PointsMaterial({
      size: 4.8,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true,
    });

    const pointCloud = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(pointCloud);

    // Dynamic Line Synapses
    const maxLines = (PARTICLE_COUNT * (PARTICLE_COUNT - 1)) / 2;
    const linePositions = new Float32Array(maxLines * 6);
    const lineColors = new Float32Array(maxLines * 6);

    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage)
    );
    linesGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage)
    );

    const linesMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      linewidth: 1,
    });

    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(linesMesh);

    // Subtle inner glowing core wireframe
    const coreGeo = new THREE.IcosahedronGeometry(28, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    scene.add(coreMesh);

    // Pointer target and smooth tracking values
    const targetRotation = { x: 0, y: 0 };
    const currentRotation = { x: 0, y: 0 };
    const mousePos = { x: 0, y: 0, active: false };

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      mousePos.x = x * 60;
      mousePos.y = y * 60;
      mousePos.active = true;

      targetRotation.y = x * 0.65;
      targetRotation.x = -y * 0.45;
    };

    const handlePointerLeave = () => {
      mousePos.active = false;
      targetRotation.x = 0;
      targetRotation.y = 0;
    };

    if (interactive) {
      container.addEventListener('mousemove', handlePointerMove);
      container.addEventListener('mouseleave', handlePointerLeave);
    }

    // Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newW, height: newH } = entry.contentRect;
        if (newW > 0 && newH > 0) {
          camera.aspect = newW / newH;
          camera.updateProjectionMatrix();
          renderer.setSize(newW, newH);
        }
      }
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = Math.min(clock.getDelta(), 0.1);
      const time = clock.getElapsedTime();

      // Exponential damping for silky smooth rotation
      currentRotation.x = THREE.MathUtils.damp(
        currentRotation.x,
        targetRotation.x,
        3.5,
        delta
      );
      currentRotation.y = THREE.MathUtils.damp(
        currentRotation.y,
        targetRotation.y,
        3.5,
        delta
      );

      // Continuous slow rotation + cursor influence
      pointCloud.rotation.y = time * 0.08 + currentRotation.y;
      pointCloud.rotation.x = Math.sin(time * 0.05) * 0.1 + currentRotation.x;

      linesMesh.rotation.y = pointCloud.rotation.y;
      linesMesh.rotation.x = pointCloud.rotation.x;

      coreMesh.rotation.y = -time * 0.12 + currentRotation.y * 0.5;
      coreMesh.rotation.x = time * 0.09 + currentRotation.x * 0.5;

      // Pulse core scale subtly
      const scale = 1 + Math.sin(time * 1.5) * 0.04;
      coreMesh.scale.set(scale, scale, scale);

      // Particle physics update
      let lineIndex = 0;
      const positions = particlesGeometry.attributes.position.array as Float32Array;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const data = particlesData[i];

        positions[i * 3] += data.velocity.x;
        positions[i * 3 + 1] += data.velocity.y;
        positions[i * 3 + 2] += data.velocity.z;

        // Boundary bounce
        if (positions[i * 3] < -BOUNDS || positions[i * 3] > BOUNDS)
          data.velocity.x = -data.velocity.x;
        if (positions[i * 3 + 1] < -BOUNDS || positions[i * 3 + 1] > BOUNDS)
          data.velocity.y = -data.velocity.y;
        if (positions[i * 3 + 2] < -BOUNDS * 0.8 || positions[i * 3 + 2] > BOUNDS * 0.8)
          data.velocity.z = -data.velocity.z;

        // Neural connections between nearby nodes
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const dx = positions[i * 3] - positions[j * 3];
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
          const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < CONNECT_DISTANCE) {
            const alpha = (1.0 - dist / CONNECT_DISTANCE) * 0.75;

            linePositions[lineIndex * 3] = positions[i * 3];
            linePositions[lineIndex * 3 + 1] = positions[i * 3 + 1];
            linePositions[lineIndex * 3 + 2] = positions[i * 3 + 2];

            const colA = emeraldColor.clone().lerp(highlightColor, alpha);
            lineColors[lineIndex * 3] = colA.r * alpha;
            lineColors[lineIndex * 3 + 1] = colA.g * alpha;
            lineColors[lineIndex * 3 + 2] = colA.b * alpha;
            lineIndex++;

            linePositions[lineIndex * 3] = positions[j * 3];
            linePositions[lineIndex * 3 + 1] = positions[j * 3 + 1];
            linePositions[lineIndex * 3 + 2] = positions[j * 3 + 2];

            lineColors[lineIndex * 3] = colA.r * alpha;
            lineColors[lineIndex * 3 + 1] = colA.g * alpha;
            lineColors[lineIndex * 3 + 2] = colA.b * alpha;
            lineIndex++;
          }
        }
      }

      linesGeometry.setDrawRange(0, lineIndex);
      particlesGeometry.attributes.position.needsUpdate = true;
      linesGeometry.attributes.position.needsUpdate = true;
      linesGeometry.attributes.color.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (interactive) {
        container.removeEventListener('mousemove', handlePointerMove);
        container.removeEventListener('mouseleave', handlePointerLeave);
      }
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      particleTexture.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [interactive]);

  return (
    <div
      className={`relative w-full h-full min-h-[380px] lg:min-h-[460px] cursor-grab active:cursor-grabbing select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div ref={mountRef} className="absolute inset-0 w-full h-full" />
      
      {/* Subtle indicator overlay for interactive 3D control */}
      <div className="absolute bottom-3 right-4 pointer-events-none flex items-center gap-2 text-[11px] text-slate-400 font-mono bg-black/40 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
        <span>Interactive Neural Mesh · Move Cursor to Shift</span>
      </div>
    </div>
  );
};
