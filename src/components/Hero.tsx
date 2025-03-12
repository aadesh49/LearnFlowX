"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 bg-black">
      {/* Spotlight Container */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10rem] left-[-10rem] w-[60rem] h-[60rem] bg-[radial-gradient(circle,rgba(255,255,255,0.3)_0%,transparent_80%)] rounded-full blur-[12px] opacity-90 animate-pulse" />
      </div>
      
      {/* Content */}
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Conquer the Field of Tech
        </h1>
        <p className="mt-6 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
        LearnFlowX is your gateway to seamless learning. Explore a curated collection of courses designed to help you grow, innovate, and stay ahead in the tech world. Learn at your own pace with a unique and engaging experience.
        </p>
        <div className="mt-6 relative group">
            <Link className="relative px-6 py-3 text-white font-bold rounded-lg transition overflow-hidden border-2 border-transparent group-hover:border-white shadow-lg" href="/">
                <span className="relative z-10">Explore Now</span>
                {/* Animated Border Effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-80 transition-opacity duration-700 hover:scale-50" />
                <span className="absolute inset-0 border-2 border-transparent rounded-lg animate-border-move group-hover:border-white" />
          </Link>
        </div>
      </div>
      
      {/* Tailwind Animations */}
      <style jsx>{`
        @keyframes border-move {
          0% { border-color: transparent; }
          50% { border-color: rgba(255, 255, 255, 0.7); }
          100% { border-color: transparent; }
        }
        .animate-border-move {
          animation: border-move 2s infinite linear;
        }
        @keyframes glow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .animate-glow {
          animation: glow 2s infinite alternate;
        }
      `}</style>
    </div>
  );
}
