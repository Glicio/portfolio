import { type Metadata } from "next";
import React from "react";
import "./styles.css";
import GitHubButton from "~/components/social/github-button";
import LinkedInButton from "~/components/social/linkedin-button";
import ProjectCard from "~/components/projectcard";
import vos from "../static/images/vivaoshow.png";
import tictactoe from "../static/images/tictactoe.jpg";
import jet from "../static/images/djet.png";
import ContactCard from "~/components/social/contact-card";
import Link from "next/link";
import Mail from "~/static/svg/mail";
import DiscordMarkBlue from "~/static/svg/discord-mark-blue";
export const metadata: Metadata = {
    title: "Home",
    description: "The main page of my portfolio",
};

const JetDescription = () => {
    return (
        <>
            <p>
                JET is a simple todo app that you can use with a team or by
                yourself.
            </p>
            <p>
                It{"'"}s a project that I{"'"}ve spent some time on, and I think it has
                helped me learn a lot about web development and data handling.
            </p>
        </>
    );
}
const VOSDescription = () => {
    return (
        <>
            <p>
                This one is quite the challenge. It{"'"}s a marketplace-like website
                that I{"'"}m developing for a client.
                It{"'"}s helping me learn a lot about web development and
                communication with clients and their ideas.
            </p>
            <p>
                It{"'"}s still in development, and it{"'"}s not available for the public yet.
                I consider it a big project, with a lot of complexity, and it{"'"}s where I spend most of my time nowadays.
            </p>
        </>
    );
}
export default function Page() {
    const sectionHeight = "calc(100vh - 2.75rem)";

    return (
        <>
            <section
                id="presentation"
                className="flex  flex-col items-center justify-center bg-[var(--neutral-color)] text-white"
                style={{
                    minHeight: sectionHeight,
                }}
            >
                <h1 className="font-mono text-4xl font-semibold">
                    Hi, I{"'"}m <span className={""}>Glicio.</span>
                </h1>
                <p className="font-mono text-lg font-semibold">
                    Software Developer.
                </p>
                <div className="flex w-full justify-center gap-4 p-4">
                    <GitHubButton />
                    <LinkedInButton />
                </div>
            </section>
            <section
                className="flex flex-col items-center justify-center bg-[var(--neutral-color-2)] p-4 text-white"
                id="projects"
                style={{
                    minHeight: sectionHeight,
                }}
            >
                <h2 className="mb-4 text-4xl font-bold mt-8">Projects</h2>
                <div className="flex h-full w-full flex-col items-center gap-4 ">
                    <ProjectCard
                        title="JET"
                        description="Just Enough To-Do"
                        link="https://djet.app/"
                        imgSrc={jet.src}
                        more={<JetDescription />}
                        imgAlt="A image of the JET webapp."
                    />
                    <ProjectCard
                        title="Tic-Tac-Toe"
                        description="A simple Tic-Tac-Toe game"
                        link="/games/tictactoe"
                        imgSrc={tictactoe.src}
                        more="Thats it, just a simple Tic-Tac-Toe game. I made it just because."
                        imgAlt="A image of the Tic-Tac-Toe game."
                    />
                    {/*
                    <ProjectCard
                        title="My Setup/Meu Setup/Monte seu pc (WIP)"
                        description="A website where you can see other people's setups and also create your own."
                        more="I can't decide the Name! This is a project I'm doing because I'm into computers and wanted to make it easier to people that don't know much about computer parts to build their own computers without much problem."
                        link="https://monteseupc.glicio.dev/"
                        imgSrc={mspc.src}
                        imgAlt="A image of the My Setup website."
                    />*/}
                    <ProjectCard
                        title="Viva o Show (WIP)"
                        description='A marketplace for bands and musicians to post their shows and for people to find them.'
                        link="https://vivaoshow.com.br"
                        more={<VOSDescription />}
                        imgSrc={vos.src}
                        imgAlt="A image of the Viva o Show website."
                    />
                </div>
            </section>
                <section
                    id="about"
                    className="flex flex-col items-center justify-center bg-[var(--neutral-color)] text-white p-6"
                    style={{
                        minHeight: sectionHeight,
                    }}
                >
                    <h2 className="mb-3 text-4xl font-bold mt-8">About me.</h2>
                    <div className="flex flex-col gap-3 indent-2">
                        <p>
                            Hi, I{"'"}m Glicio, 25 Y/O, currently living in Brazil.
                            I{"'"}m a self-taught software developer, I started
                            learning to code in 2019, and I{"'"}ve been doing it
                            ever since and I{"'"}m currently working for an emerging startup called{" "}
                            <a
                                href="https://x3mmotion.com/"
                                >X3M Motion</a>
                        </p>
                        <p>
                        My main focus is on web development, but I{"'"}m also
                        interested in game development and mobile development.
                        In terms of infrastructure, I{"'"}m familiar with S3 for object storage, I deploy my projects on Vercel, use Planetscale for databases.
                        </p>
                        <h3 className="text-3xl">Things I use</h3>
                        <section id="thech" className="flex gap-4">
                            <div>
                            <span className="text-lg"> 
                                Languages, Frameworks, libraries and etc.
                            </span>
                                <ul className="list-disc list-inside">
                                    <li>React</li>
                                    <li>Next.js</li>
                                    <li>Prisma</li>
                                    <li>Typescript</li>
                                    <li>TailwindCSS</li>
                                    <li>Node.js</li>
                                </ul>
                            </div>
                            <div>
                            <span className="text-lg">
                                Infrastructure and services
                            </span>
                                <ul className="list-disc list-inside">
                                    <li>Vercel - Hosting</li>
                                    <li>Planetscale - Databases</li>
                                    <li>S3 - Object Storage</li>
                                    <li>Sendgrid - Email</li>
                                    <li>TWILIO - SMS</li>
                                </ul>
                            </div>
                            <div>
                            <span className="text-lg">
                                Tools
                            </span>
                                <ul className="list-disc list-inside">
                                    <li>NeoVim - IDE/Text editor</li>
                                    <li>Co-pilot - AI pair programming (mainly for boilerplate code)</li>
                                    <li>Git - Version Control</li>
                                    <li>Ubunto - Main OS</li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </section>
                <section
                    id="contact"
                    className="flex flex-col items-center justify-center bg-[var(--neutral-color-2)] text-white p-6"
                    style={{
                        minHeight: sectionHeight,
                    }}
                >
                    <h2 className="mb-3 text-4xl font-bold mt-8">Contact Info.</h2>
                    <div className="my-auto flex flex-col items-center w-full gap-4">
                    <div className="flex flex-col gap-3 indent-2">
                    <p>You can contact me by any of theses:</p>
                    </div>
                    <div className="w-full flex justify-center flex-wrap gap-4">

                        <ContactCard title="Email" icon={<Mail />}>
                            <Link
                                href="mailto:glicioo@outlook.com"
                                className="border-b border-dotted"
                            >
                                glicioo@outlook.com
                            </Link>
                        </ContactCard>
                        <ContactCard title="Discord" icon={<DiscordMarkBlue />}>
                            <Link
                                href={`https://discord.com/users/330774943652511754`}
                                className="border-b border-dotted"
                            >
                                Glicio#3863
                            </Link>
                        </ContactCard>
                        </div>
                    </div>
                </section>
        </>
    );
}
