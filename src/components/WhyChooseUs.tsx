"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

//content to be displayed on parallex section
const content = [
  {
    title: 'Master the Latest Tech Skills',
    description:
      'Stay ahead in the fast-paced tech world with expert-curated courses on web development, AI, cybersecurity, and more. Learn industry-relevant skills that empower you to build real-world applications and take your expertise to the next level.',
  },
  {
    title: 'Hands-On Learning with Real Projects',
    description:
      'Gain practical experience through hands-on projects, coding challenges, and real-world applications. Our project-based learning approach ensures that you don’t just understand concepts but also apply them in real development scenarios.',
  },
  {
    title: 'Interactive & Engaging Learning',
    description:
      'Enhance your learning experience with interactive coding exercises, quizzes, and real-time feedback. With step-by-step guidance and community discussions, you stay engaged and motivated throughout your journey.',
  },
  {
    title: 'Learn from Industry Experts',
    description:
      'Our courses are designed and taught by experienced professionals who have worked in leading tech companies. Gain insights from real-world use cases, best practices, and practical tips that set you apart in the job market.',
  },
  {
    title: 'Always Up-to-Date Curriculum',
    description:
      'Technology is constantly evolving, and so are our courses. We regularly update our curriculum to include the latest frameworks, tools, and industry trends, ensuring you always learn what’s most relevant in today’s tech landscape.',
  },
  {
    title: 'Flexible & Unlimited Learning',
    description:
      'Learn at your own pace with 24/7 access to our ever-expanding library of courses. Whether you’re a beginner or an experienced developer, find courses that match your level and grow your skills anytime, anywhere.',
  },
];

export function WhyChooseUs() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
