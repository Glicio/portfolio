import { type Metadata } from "next";
import React from "react";
import "./styles.css";
import GitHubButton from "~/components/social/github-button";
import LinkedInButton from "~/components/social/linkedin-button";
import ProjectCard from "~/components/projectcard";
import vos from "../static/images/vivaoshow.png";
import mspc from "../static/images/pc.png";
import tictactoe from "../static/images/tictactoe.jpg";
import jet from "../static/images/djet.png";
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
                    Aspiring software developer.
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
                    <ProjectCard
                        title="My Setup/Meu Setup/Monte seu pc (WIP)"
                        description="A website where you can see other people's setups and also create your own."
                        more="I can't decide the Name! This is a project I'm doing because I'm into computers and wanted to make it easier to people that don't know much about computer parts to build their own computers without much problem."
                        link="https://monteseupc.glicio.dev/"
                        imgSrc={mspc.src}
                        imgAlt="A image of the My Setup website."
                    />
                    <ProjectCard
                        title="Viva o Show (WIP)"
                        description='A place where musicians can post their "Shows" and get hired.'
                        link="https://vivaoshow.com.br"
                        more="This is a project I'm doing with a friend, for a music producer. Since it is a private project in its early stages, I can't show much of it, but you can check the website and go through the registration process."
                        imgSrc={vos.src}
                        imgAlt="A image of the Viva o Show website."
                    />
                </div>
            </section>
        </>
    );
}
