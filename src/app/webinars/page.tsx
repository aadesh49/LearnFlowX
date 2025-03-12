'use client'
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import data from "@/data/webinar.json";

interface Webinar {
    id: number,
    title: string,
    description: string,
    image: string
}

export default function page() {
    return (
        <div className="min-h-screen bg-black py-12 pt-36">
            <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-2 text-white">All Webinars ({data.projects.length})</h1>
            <div className="flex flex-wrap justify-center">
                {data.projects.map((web: Webinar) => (
                    <li key={web.id} className="list-none p-5">
                        <CardContainer className="inter-var m-4 ">
                            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border ">
                                <CardItem
                                    translateZ="30"
                                    className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                    {web.title}
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="40"
                                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                >
                                    {web.description}
                                </CardItem>
                                <CardItem
                                    translateZ="80"
                                    rotateX={20}
                                    rotateZ={-10}
                                    className="w-full mt-4"
                                >
                                    <Image
                                        src={web.image}
                                        height="1000"
                                        width="1000"
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                </CardItem>
                                <div className="flex justify-between items-center mt-20">
                                </div>
                            </CardBody>
                        </CardContainer>
                    </li>
                ))}
            </div>
        </div>
    )
}

