'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function Globe() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        canvas.width = canvas.offsetWidth * 2;
        canvas.height = canvas.offsetHeight * 2;
        ctx.scale(2, 2);

        const width = canvas.offsetWidth;
        const height = canvas.offsetHeight;
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(width, height) / 2 - 20;

        let rotation = 0;

        // Montreal coordinates
        const montreal = { lat: 45.5017, lng: -73.5673 };
        const usa = { lat: 37.0902, lng: -95.7129 };

        // Convert lat/lng to 3D coordinates
        const latLngTo3D = (lat: number, lng: number, r: number, rot: number) => {
            const phi = (90 - lat) * (Math.PI / 180);
            const theta = (lng + rot) * (Math.PI / 180);

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.cos(phi);
            const z = r * Math.sin(phi) * Math.sin(theta);

            return { x, y, z };
        };

        // Project 3D to 2D
        const project = (x: number, y: number, z: number) => {
            const scale = 200 / (200 + z);
            return {
                x: centerX + x * scale,
                y: centerY - y * scale,
                visible: z > -radius,
            };
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw globe circle
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
            ctx.strokeStyle = 'rgba(6, 182, 212, 0.3)';
            ctx.lineWidth = 1;
            ctx.stroke();

            // Draw globe fill
            const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
            gradient.addColorStop(0, 'rgba(6, 32, 86, 0.3)');
            gradient.addColorStop(1, 'rgba(6, 32, 86, 0.1)');
            ctx.fillStyle = gradient;
            ctx.fill();

            // Draw latitude lines
            for (let lat = -60; lat <= 60; lat += 30) {
                ctx.beginPath();
                for (let lng = -180; lng <= 180; lng += 5) {
                    const pos3D = latLngTo3D(lat, lng, radius, rotation);
                    const pos2D = project(pos3D.x, pos3D.y, pos3D.z);

                    if (lng === -180) {
                        ctx.moveTo(pos2D.x, pos2D.y);
                    } else if (pos2D.visible) {
                        ctx.lineTo(pos2D.x, pos2D.y);
                    }
                }
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }

            // Draw longitude lines
            for (let lng = -180; lng <= 180; lng += 30) {
                ctx.beginPath();
                for (let lat = -90; lat <= 90; lat += 5) {
                    const pos3D = latLngTo3D(lat, lng, radius, rotation);
                    const pos2D = project(pos3D.x, pos3D.y, pos3D.z);

                    if (lat === -90) {
                        ctx.moveTo(pos2D.x, pos2D.y);
                    } else if (pos2D.visible) {
                        ctx.lineTo(pos2D.x, pos2D.y);
                    }
                }
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }

            // Draw Montreal marker
            const montrealPos3D = latLngTo3D(montreal.lat, montreal.lng, radius, rotation);
            const montrealPos2D = project(montrealPos3D.x, montrealPos3D.y, montrealPos3D.z);

            if (montrealPos2D.visible) {
                // Glow
                const glowGradient = ctx.createRadialGradient(
                    montrealPos2D.x,
                    montrealPos2D.y,
                    0,
                    montrealPos2D.x,
                    montrealPos2D.y,
                    15
                );
                glowGradient.addColorStop(0, 'rgba(239, 68, 68, 0.6)');
                glowGradient.addColorStop(1, 'rgba(239, 68, 68, 0)');
                ctx.fillStyle = glowGradient;
                ctx.beginPath();
                ctx.arc(montrealPos2D.x, montrealPos2D.y, 15, 0, Math.PI * 2);
                ctx.fill();

                // Marker
                ctx.beginPath();
                ctx.arc(montrealPos2D.x, montrealPos2D.y, 4, 0, Math.PI * 2);
                ctx.fillStyle = '#ef4444';
                ctx.fill();
            }

            // Draw USA marker
            const usaPos3D = latLngTo3D(usa.lat, usa.lng, radius, rotation);
            const usaPos2D = project(usaPos3D.x, usaPos3D.y, usaPos3D.z);

            if (usaPos2D.visible) {
                // Glow
                const glowGradient = ctx.createRadialGradient(
                    usaPos2D.x,
                    usaPos2D.y,
                    0,
                    usaPos2D.x,
                    usaPos2D.y,
                    15
                );
                glowGradient.addColorStop(0, 'rgba(59, 130, 246, 0.6)');
                glowGradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
                ctx.fillStyle = glowGradient;
                ctx.beginPath();
                ctx.arc(usaPos2D.x, usaPos2D.y, 15, 0, Math.PI * 2);
                ctx.fill();

                // Marker
                ctx.beginPath();
                ctx.arc(usaPos2D.x, usaPos2D.y, 4, 0, Math.PI * 2);
                ctx.fillStyle = '#3b82f6';
                ctx.fill();
            }

            rotation += 0.2;
            requestAnimationFrame(animate);
        };

        animate();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-64"
        >
            <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{ filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.3))' }}
            />
        </motion.div>
    );
}
