import Image from "next/image";
import Link from "next/link";
import React from "react";

/**
 * The cards used in the projects section to show my projects
 * @param title The title of the project
 * @param description The description of the project
 * @param imgSrc The source of the image used in the background of the card
 * @param imgAlt The alt text of the image used in the background of the card
 */
export default function ProjectCard({
    title,
    description,
    imgSrc,
    imgAlt,
    link,
    more,
}: {
    title: string;
    description: React.ReactNode;
    imgSrc: string;
    imgAlt: string;
    link: string;
    more: string;
}) {
    return (
    <Link href={link} className="bg-[var(--neutral-color)] overflow-hidden h-fit w-full rounded-md shadow shadow-black">
        <div className="flex flex-col md:flex-row gap-2">
            <div className="h-[20rem] md:h-full md:w-[128px] overflow-hidden">
                <Image src={imgSrc} alt={imgAlt} width={400} height={600} className="w-full md:w-auto" />
            </div>
            <div id="App info" className="w-full p-2">
                <h3 className="text-2xl font-semibold">
                    {title}
                </h3>
                <p className="text-lg">{description}</p>
                <p className="">{more}</p>
            </div>
        </div>
    </Link>
    );
}
