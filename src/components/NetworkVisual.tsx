import React, { useEffect, useRef, useState } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  layer: number;
  label?: string;
  pulsePhase: number;
}

export const NetworkVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 480);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 420);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
      initNodes();
    };

    window.addEventListener('resize', handleResize);

    // Create structured neural & data pipeline topology
    const nodes: Node[] = [];
    const layerNames = ['Data Pipeline', 'Feature Store', 'Neural Weights', 'Inference'];

    const initNodes = () => {
      nodes.length = 0;
      const layers = 4;
      const nodesPerLayer = [4, 5, 5, 3];

      for (let l = 0; l < layers; l++) {
        const count = nodesPerLayer[l];
        const layerX = width * 0.15 + (l / (layers - 1)) * (width * 0.7);

        for (let i = 0; i < count; i++) {
          const spacing = height / (count + 1);
          const layerY = spacing * (i + 1) + (Math.random() - 0.5) * 12;

          nodes.push({
            x: layerX,
            y: layerY,
            vx: (Math.random() - 0.5) * 0.25,
            vy: (Math.random() - 0.5) * 0.25,
            radius: l === 0 || l === layers - 1 ? 4.5 : 3.8,
            layer: l,
            label: i === 0 ? layerNames[l] : undefined,
            pulsePhase: Math.random() * Math.PI * 2
          });
        }
      }
    };

    initNodes();

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Subtle background grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
      ctx.lineWidth = 1;
      const gridSize = 36;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw connections between adjacent layers
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          if (Math.abs(a.layer - b.layer) === 1) {
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < width * 0.38) {
              const alpha = Math.max(0.04, 0.18 - dist / (width * 0.38));
              ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();

              // Moving signal pulse packet along some connections
              const pulsePos = (time * 0.6 + (i + j) * 0.3) % 1;
              const px = a.x + (b.x - a.x) * pulsePos;
              const py = a.y + (b.y - a.y) * pulsePos;

              ctx.fillStyle = 'rgba(125, 211, 252, 0.65)';
              ctx.beginPath();
              ctx.arc(px, py, 1.6, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      // Draw and update nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Gentle floating
        node.x += node.vx;
        node.y += node.vy;

        // Mouse attraction/repulsion
        if (mousePos) {
          const mdx = node.x - mousePos.x;
          const mdy = node.y - mousePos.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 100 && mdist > 0) {
            const force = (100 - mdist) / 1000;
            node.x += (mdx / mdist) * force * 15;
            node.y += (mdy / mdist) * force * 15;
          }
        }

        // Soft pulse ring
        const pulse = Math.sin(time * 2 + node.pulsePhase) * 0.5 + 0.5;

        // Outer glow
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.radius + 8 + pulse * 4
        );
        gradient.addColorStop(0, 'rgba(56, 189, 248, 0.25)');
        gradient.addColorStop(1, 'rgba(56, 189, 248, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 8 + pulse * 4, 0, Math.PI * 2);
        ctx.fill();

        // Node center
        ctx.fillStyle = node.layer === 0 ? '#38bdf8' : node.layer === 3 ? '#818cf8' : '#e2e8f0';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Node border
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos]);

  return (
    <div
      id="hero-network-visual-container"
      className="relative w-full h-[360px] sm:h-[400px] lg:h-[440px] rounded-2xl bg-[#0c121e]/80 border border-slate-800/80 p-4 overflow-hidden flex flex-col justify-between shadow-2xl backdrop-blur-sm"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseLeave={() => setMousePos(null)}
    >
      {/* Top technical badge overlay */}
      <div className="flex items-center justify-between z-10 select-none">
        <div className="flex items-center space-x-2">
          <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[11px] font-mono tracking-wider uppercase text-cyan-300/90 font-medium">
            Tensor & Pipeline Topology
          </span>
        </div>
        <span className="text-[11px] font-mono text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
          Python • ML • Spark
        </span>
      </div>

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

      {/* Bottom status indicators */}
      <div className="z-10 flex items-center justify-between border-t border-slate-800/60 pt-3 bg-gradient-to-t from-[#0c121e] to-transparent">
        <div className="flex items-center space-x-3 text-[11px] font-mono text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Ingestion
          </span>
          <span className="text-slate-600">→</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            Feature Matrix
          </span>
          <span className="text-slate-600">→</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            Inference
          </span>
        </div>
        <span className="text-[10px] font-mono text-slate-400 hidden sm:inline-block">
          Interactive Canvas
        </span>
      </div>
    </div>
  );
};
