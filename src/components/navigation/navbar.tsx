"use client";
import React from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    React.useEffect(() => {
        const handleScroll = () => {
            setIsOpen(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="h-[var(--nav-bar-height)]"></div>
            <nav className="fixed top-0 flex w-screen flex-wrap items-center justify-between bg-[var(--primary-color)] p-6">
                <div className="mr-6 flex flex-shrink-0 items-center text-white">
                    <span className="text-xl font-semibold tracking-tight">
                        Glicio
                    </span>
                </div>
                <div className="block lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center rounded border border-white px-3 py-2 text-white hover:border-white hover:text-white"
                    >
                        <svg
                            className="h-3 w-3 fill-current"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div className="block w-full flex-grow lg:flex lg:w-auto lg:items-center ">
                    <div
                        className={`max-h-0 overflow-hidden text-sm transition-[max-height] lg:flex-grow ${
                            isOpen ? "max-h-[9999px]" : ""
                        } lg:max-h-[9999px]`}
                    >
                        <a
                            href="#presentation"
                            className="mr-4 mt-4 block text-white hover:text-white lg:mt-0 lg:inline-block"
                        >
                            Home
                        </a>
                        <a
                            href="#projects"
                            className="mr-4 mt-4 block text-white hover:text-white lg:mt-0 lg:inline-block"
                        >
                            Projects
                        </a>
                        <a
                            href="#about"
                            className="mr-4 mt-4 block text-white hover:text-white lg:mt-0 lg:inline-block"
                        >
                            About me
                        </a>
                        <a
                            href="#contact"
                            className="mt-4 block text-white hover:text-white lg:mt-0 lg:inline-block"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}
