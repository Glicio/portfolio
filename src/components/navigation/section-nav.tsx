import React from "react";
import Chevron from "~/static/svg/chevron";
import styles from "./section-nav.module.css";

/**
 * This component is used to navigate between sections of the page
 * It uses the scroll-behavior: smooth property to scroll to the section
 * @param sections the sections of the page
 * @constant TOP_BAR_HEIGHT the height of the top bar/Navigation bar
 * @returns {JSX.Element} the component
 * */
const TOP_BAR_HEIGHT = 78;
export default function SectionNav({ sections }: { sections: string[] }) {
    const [currentSection, setCurrentSection] = React.useState(0);
    const [elements, setElements] = React.useState<HTMLElement[] | null>(null);

    // This effect is used to get the elements from the DOM
    React.useEffect(() => {
        const elementsList: HTMLElement[] = [];
        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) {
                elementsList.push(element);
            }
        });
        setElements(elementsList);
    }, [sections]);

    // This effect is used to scroll to the section when the currentSection changes
    React.useEffect(() => {
        if (!elements || !elements[currentSection]) return;
        console.log(
            "scrolling to",
            `id: ${elements[currentSection]?.id || ""} offsetTop: ${
                elements[currentSection]?.offsetTop || ""
            }`
        );
        window.scrollTo({
            top: (elements[currentSection]?.offsetTop || 0) - TOP_BAR_HEIGHT,
            behavior: "smooth",
        });
        // runs only when currentSection change. Elements is not a dependency because it doesn't change.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSection]);

    return (
        <div className={["fixed bottom-4 right-4 flex flex-col gap-4", styles["buttons-color"]].join(" ")} >
            <button onClick={() => {
                setCurrentSection(0);
                window.scrollTo(0, 0);
            }}>
                <Chevron direction="double-up" />
            </button>
            <button
                onClick={() => {
                    setCurrentSection((old) => {
                    if (old === 0) return sections.length - 1;
                        return old - 1;
                    });
                }}
            >
                <Chevron direction="up" />
            </button>
            <button
                onClick={() => {
                    setCurrentSection((old) => {
                        if (old === sections.length - 1) return 0;
                        return old + 1;
                    });
                }}
            >
                <Chevron direction="down" />
            </button>
            <button onClick={() => {
                setCurrentSection(sections.length - 1);
             window.scrollTo(0, document.body.scrollHeight);
            }
            }>
                <Chevron direction="double-down" />
            </button>
        </div>
    );
}
