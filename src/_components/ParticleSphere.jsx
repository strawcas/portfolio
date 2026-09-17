"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ParticleSphere({
    scale = 100,
    particleCount = 5000,
    pointSize = 0.018,
    color = "#a5bfff",
}) {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(
            45,
            container.clientWidth / container.clientHeight,
            0.1,
            100,
        );

        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
        });

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(
            container.clientWidth,
            container.clientHeight,
        );

        renderer.domElement.style.cursor = "grab";
        renderer.domElement.style.touchAction = "none";

        container.appendChild(renderer.domElement);

        // -------------------------
        // SPHERE
        // -------------------------

        const radius = 1.8;

        const positions = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
            const u = Math.random();
            const v = Math.random();

            const theta = 2 * Math.PI * u;
            const phi = Math.acos(2 * v - 1);

            positions[i * 3] =
                radius * Math.sin(phi) * Math.cos(theta);

            positions[i * 3 + 1] = radius * Math.cos(phi);

            positions[i * 3 + 2] =
                radius * Math.sin(phi) * Math.sin(theta);
        }

        const geometry = new THREE.BufferGeometry();

        geometry.setAttribute(
            "position",
            new THREE.BufferAttribute(positions, 3),
        );

        const material = new THREE.PointsMaterial({
            color,
            size: pointSize,
            transparent: true,
            opacity: 0.85,
            sizeAttenuation: true,
        });

        const sphere = new THREE.Points(geometry, material);

        sphere.scale.setScalar(scale / 100);

        scene.add(sphere);

        // -------------------------
        // DRAG + MOMENTUM
        // -------------------------

        const dragSensitivity = 0.005;
        const friction = 0.995;

        let isDragging = false;

        let previousX = 0;
        let previousTime = 0;

        let angularVelocity = 0;

        function handlePointerDown(event) {
            isDragging = true;

            previousX = event.clientX;
            previousTime = event.timeStamp;

            angularVelocity = 0;

            renderer.domElement.style.cursor = "grabbing";

            renderer.domElement.setPointerCapture(event.pointerId);
        }

        function handlePointerMove(event) {
            if (!isDragging) return;

            const deltaX = event.clientX - previousX;

            const deltaTime = Math.max(
                event.timeStamp - previousTime,
                1,
            );

            const rotation = deltaX * dragSensitivity;

            sphere.rotation.y += rotation;

            angularVelocity = rotation / deltaTime;

            previousX = event.clientX;
            previousTime = event.timeStamp;
        }

        function handlePointerUp(event) {
            isDragging = false;

            renderer.domElement.style.cursor = "grab";

            if (
                renderer.domElement.hasPointerCapture(event.pointerId)
            ) {
                renderer.domElement.releasePointerCapture(
                    event.pointerId,
                );
            }
        }

        const canvas = renderer.domElement;

        canvas.addEventListener("pointerdown", handlePointerDown);

        canvas.addEventListener("pointermove", handlePointerMove);

        canvas.addEventListener("pointerup", handlePointerUp);

        canvas.addEventListener("pointercancel", handlePointerUp);

        // -------------------------
        // ANIMATION
        // -------------------------

        let animationFrame;
        let previousFrameTime = performance.now();

        function animate(currentTime) {
            const deltaTime = Math.min(
                currentTime - previousFrameTime,
                50,
            );

            previousFrameTime = currentTime;

            if (!isDragging) {
                sphere.rotation.y += angularVelocity * deltaTime;

                angularVelocity *= friction;
            }

            renderer.render(scene, camera);

            animationFrame = requestAnimationFrame(animate);
        }

        animationFrame = requestAnimationFrame(animate);

        // -------------------------
        // RESIZE
        // -------------------------

        function resize() {
            const width = container.clientWidth;
            const height = container.clientHeight;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();

            renderer.setSize(width, height);
        }

        const resizeObserver = new ResizeObserver(resize);

        resizeObserver.observe(container);

        return () => {
            cancelAnimationFrame(animationFrame);

            resizeObserver.disconnect();

            canvas.removeEventListener(
                "pointerdown",
                handlePointerDown,
            );

            canvas.removeEventListener(
                "pointermove",
                handlePointerMove,
            );

            canvas.removeEventListener("pointerup", handlePointerUp);

            canvas.removeEventListener(
                "pointercancel",
                handlePointerUp,
            );

            geometry.dispose();
            material.dispose();
            renderer.dispose();

            renderer.domElement.remove();
        };
    }, [scale, particleCount, pointSize, color]);

    return <div ref={containerRef} className="h-[500px] w-[500px]" />;
}
