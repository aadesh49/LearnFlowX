"use client"
import Link from "next/link"
import CourseData from "../data/tech_courses.json"
import { BackgroundGradient } from "./ui/background-gradient"

//created a datatype
interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}

export default function FeaturedCourses() {
    //get all the featured courses from the data
    const featuredCourses = CourseData.courses.filter((course: Course) => course.isFeatured)
    return (
        <div className="py-12 bg-gray-900">
            <div>
                <div className="text-center">
                    <h2 className="text-xl text-teal-600 font-semibold tracking-wide">FEATURED COURSES</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With The Best</p>
                </div>
            </div>
            <div className="mt-10 mx-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {/* loop over the courses */}
                    {featuredCourses.map((course: Course) => (
                        <div key={course.id} className="flex justify-center">
                            <BackgroundGradient
                                className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>

                                    <button className="rounded-full p-3 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                                        <span>Explore Now</span>
                                    </button>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-20 text-center">
                <Link className="relative px-6 py-3 bg-gray-700 text-white font-bold rounded-lg transition overflow-hidden border-2 border-transparent hover:border-white shadow-lg hover:scale-100" href="/courses">
                    <span className="relative z-20 ">View All Courses</span>
                </Link>

            </div>
        </div>
    )
}