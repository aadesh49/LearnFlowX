"use client";

import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
}: {
    items: {
        quote: string;
        name: string;
        title: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);
    const [start, setStart] = useState(false);

    useEffect(() => {
        if (scrollerRef.current) {
            updateAnimation();
            setStart(true);
        }
    }, []);

    const updateAnimation = () => {
        if (containerRef.current) {
            containerRef.current.style.setProperty(
                "--animation-direction",
                direction === "left" ? "forwards" : "reverse"
            );

            let duration = "15s";
            if (speed === "fast") duration = "10ms";
            if (speed === "slow") duration = "40s";

            containerRef.current.style.setProperty("--animation-duration", duration);
        }
    };

    return (
        <div className="relative w-full h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
            <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl mb-18">Hell nOOOOOOO</h1>
            {/* Matrix Background Grid with Soft Blue Glow */}
            <div className="absolute inset-0 grid grid-cols-20 grid-rows-20 pointer-events-none opacity-30">
                {Array.from({ length: 400 }).map((_, index) => (
                    <div
                        key={index}
                        className="w-full h-full flex items-center justify-center border border-[#1e293b] bg-[#0f172a]
                 shadow-[0_0_5px_#38bdf8] sm:shadow-[0_0_8px_#38bdf8]"
                    >
                    </div>
                ))}
            </div>



            {/* Scrolling Cards */}
            <div
                ref={containerRef}
                className={`relative z-20 max-w-7xl overflow-hidden px-10 
              [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]`}
                style={{
                    "--slate-800": "#1e293b",
                    "--slate-900": "#0f172a",
                } as React.CSSProperties}
            >
                <ul
                    ref={scrollerRef}
                    className={`flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap 
               ${start ? "animate-scroll" : ""}`}
                >
                    {items.map((item) => (
                        <li
                            key={item.name}
                            className="w-[350px] max-w-full h-[200px] relative rounded-2xl border border-b-0 shrink-0 border-slate-700 px-8 py-6 md:w-[450px] transition-opacity duration-500"
                            style={{
                                background: "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
                                opacity: "0.95",
                            }}
                        >
                            <blockquote>
                                <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                                    {item.quote}
                                </span>
                                <div className="relative z-20 mt-6 flex flex-row items-center">
                                    <span className="flex flex-col gap-1">
                                        <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                                            {item.name}
                                        </span>
                                        <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                                            {item.title}
                                        </span>
                                    </span>
                                </div>
                            </blockquote>
                        </li>
                    ))}
                    {/* Extra spacing for smooth ending */}
                    <li className="w-[100px] shrink-0"></li>
                </ul>
            </div>

            <style>
                {`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(calc(-50% - 1rem)); }
          }

          ul {
            animation: scroll var(--animation-duration, 10s) linear infinite var(--animation-direction);
          }
        `}
            </style>
        </div>
    );
};
