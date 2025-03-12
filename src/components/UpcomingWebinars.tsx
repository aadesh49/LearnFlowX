import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
import data from "@/data/webinar.json"

export default function UpcomingWebinars() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Upcoming Webinars</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Coding Journey</p>
        </div>
        <div className="mt-5">
          <HoverEffect items={data.projects} />
        </div>
        <div className="mt-5 text-center">
          <Link href={"/webinars"} className="relative px-6 py-3 bg-gray-700 text-white font-bold rounded-lg transition overflow-hidden border-2 border-transparent hover:border-white shadow-lg hover:scale-100">
            <span className="relative z-20 ">View all the Webinars</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
