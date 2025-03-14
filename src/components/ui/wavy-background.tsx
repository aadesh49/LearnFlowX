"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: unknown;
}) => {
  const noise = createNoise3D();
  let w: number, h: number, nt: number, i: number, x: number;
  let ctx: CanvasRenderingContext2D | null = null;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const getSpeed = () => (speed === "slow" ? 0.001 : 0.002);

  const init = () => {
    const canvas = canvasRef.current;
    if (!canvas) return; // ✅ Ensure canvas is not null

    ctx = canvas.getContext("2d");
    if (!ctx) return; // ✅ Ensure ctx is not null

    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
    nt = 0;

    window.onresize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      if (!ctx) return;
      ctx.filter = `blur(${blur}px)`;
    };

    render(ctx);
  };

  const waveColors = colors ?? ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"];

  const drawWave = (n: number, ctx: CanvasRenderingContext2D) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];

      for (x = 0; x < w; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5);
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  let animationId: number;
  const render = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = backgroundFill || "black";
    ctx.globalAlpha = waveOpacity;
    ctx.fillRect(0, 0, w, h);
    drawWave(5, ctx);
    animationId = requestAnimationFrame(() => render(ctx));
  };

  useEffect(() => {
    init();
    return () => cancelAnimationFrame(animationId);
  }, []);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div className={cn("h-screen flex flex-col items-center justify-center", containerClassName)}>
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={isSafari ? { filter: `blur(${blur}px)` } : {}}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
