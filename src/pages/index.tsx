import { type NextPage } from "next";
import Head from "next/head";
import styles from "../styles/index.module.css";
import Link from "next/link";
import Navbar from "~/components/navigation/navbar";
import ProjectCard from "~/components/projectcard";
import vos from "../static/images/vivaoshow.png";
import mspc from "../static/images/pc.png";
import GitHubButton from "~/components/social/github-button";
import LinkedInButton from "~/components/social/linkedin-button";
import SectionNav from "~/components/navigation/section-nav";
import ContactCard from "~/components/social/contact-card";
import Mail from "~/static/svg/mail";
import DiscordMarkBlue from "~/static/svg/discord-mark-blue";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Glicio</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main
                className="h-screen bg-[var(--neutral-color)] text-white  "
                style={{
                    scrollSnapType: "y mandatory",
                    scrollBehavior: "smooth",
                    scrollPaddingTop: "var(--nav-bar-height)",
                }}
            >
                <SectionNav sections={["presentation", "projects", "about", "contact"]} />
                <Navbar />
                <section
                    id="presentation"
                    className={styles.section}
                    style={{ justifyContent: "center" }}
                >
                    <h1 className="font-mono text-4xl font-semibold">
                        Hi, I{"'"}m <span className={styles.name}>Glicio.</span>
                    </h1>
                    <p className="font-mono text-lg font-semibold">
                        A Full Stack Developer
                    </p>
                    <div className="flex w-full justify-center gap-4 p-4">
                        <GitHubButton />
                        <LinkedInButton />
                    </div>
                </section>
                <section
                    id="projects"
                    className={[
                        styles.section,
                        "bg-[var(--neutral-color-2)] p-4",
                    ].join(" ")}
                >
                    <h2 className="mb-4 text-4xl font-bold mt-8">Projects</h2>
                    <div className="flex h-full w-full flex-col items-center gap-4 ">
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
                <section
                    id="about"
                    className={[
                        styles.section,
                        "bg-[var(--neutral-color)] p-4",
                    ].join(" ")}
                >
                    <h2 className="mb-3 text-4xl font-bold mt-8">About me.</h2>
                    <div className="flex flex-col gap-3 indent-2">
                        <p>
                            I{"'"}m a self-taught Full Stack Developer, or at
                            least that{"'"}s what I{"'"}m trying to be. I{"'"}m
                            currently studying, doing some projects and learning
                            new things I can use in my future projects.
                        </p>
                        <p>
                            I{"'"}m currently living in Brazil, I{"'"}m 25 years
                            old and since I was a kid I{"'"}ve always been
                            interested in technology, I{"'"}ve grown in front of
                            a computer and I{"'"}ve always been fascinated by
                            how it works, but was not until I was 22 that I
                            decided to start learning how to code. Since then I
                            {"'"}ve been learning and trying to improve my
                            skills mainly in the web development area but if I
                            had the time I would also like to learn more about
                            mobile and DevOps.
                        </p>
                        <p>
                            My main language is TypeScript, I have a bit of
                            experience with Java and I{"'"}m also trying to
                            learn Rust. I{"'"}m currently working with React,
                            Next.js, TailwindCSS and Prisma. My goal for now is
                            to learn to use the tools that will allow me to
                            build scalable and maintainable applications in the
                            most fast and efficient way possible. Those are the
                            tools I was able to learn and use in my projects,
                            but I{"'"}m always open to learn new things and
                            improve.
                        </p>
                        <p>
                            I deploy my projects using Vercel, PlanetScale and
                            AWS S3. I used AWS EC2 for a project I did for a
                            friend, but I{"'"}m not very familiar with it yet,
                            and when I found out about Vercel I decided to use
                            it for my projects since it has a cheap for what it
                            offers and it{"'"}s very easy to use.
                        </p>
                    </div>
                </section>
                <section
                    id="contact"
                    className={[
                        styles.section,
                        "bg-[var(--neutral-color-2)] p-4",
                    ].join(" ")}
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
            </main>
        </>
    );
};

export default Home;
