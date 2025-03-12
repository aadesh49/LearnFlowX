"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimonial() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "LearnFlowX has completely transformed the way I learn! The hands-on projects and real-world applications helped me gain confidence in my coding skills. Highly recommend it to anyone serious about tech.",
    name: "Sarah Johnson",
    title: "Software Engineer",
  },
  {
    quote:
      "The interactive lessons and up-to-date content make learning so much easier. I was able to land my first developer job after completing several courses here!",
    name: "Mark Thompson",
    title: "Junior Frontend Developer",
  },
  {
    quote:
      "I love how practical and engaging the courses are. The real-world projects helped me build a strong portfolio, and the guidance from industry experts was invaluable.",
    name: "Emily Davis",
    title: "Full-Stack Developer",
  },
  {
    quote:
      "LearnFlowX provides an amazing learning experience! The structured courses and hands-on approach helped me understand complex topics like React, Next.js, and APIs with ease.",
    name: "James Carter",
    title: "Freelance Web Developer",
  },
  {
    quote:
      "I’ve taken multiple online courses before, but LearnFlowX stands out with its in-depth explanations and focus on practical application. The best part? Learning at my own pace without feeling overwhelmed.",
    name: "Olivia Martinez",
    title: "AI & ML Enthusiast",
  },
];

