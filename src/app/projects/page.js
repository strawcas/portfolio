import Link from "next/link";
import { HiArrowLeft, HiArrowUpRight } from "react-icons/hi2";
import ProjectCard from "@/_components/ProjectCard";
import projects from "@/_data/projects.json";
import styles from "@/_components/Projects.module.css";

export const metadata = {
    title: "Projects | Joseph Gabriel Castro",
    description:
        "A collection of web, mobile, and full-stack projects by Joseph Gabriel Castro.",
};

export default function ProjectsPage() {
    return (
        <main className={`${styles.section} ${styles.archive}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.backLink}>
                    <HiArrowLeft aria-hidden="true" /> Back to home
                </Link>
                <header
                    className={`${styles.heading} ${styles.archiveHeading}`}
                >
                    <div>
                        <h1>
                            All <span>projects.</span>
                        </h1>
                    </div>
                </header>
                <div className={styles.collectionMeta}>
                    <span>
                        {String(projects.length).padStart(2, "0")}{" "}
                        {projects.length === 1
                            ? "project"
                            : "projects"}
                    </span>
                </div>
                {projects.length > 0 ? (
                    <div
                        className={`${styles.grid} ${styles.archiveGrid}`}
                    >
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                                headingLevel="h2"
                            />
                        ))}
                    </div>
                ) : (
                    <div className={styles.empty}>
                        <h2>More ideas in the making.</h2>
                        <p>New projects will appear here soon.</p>
                    </div>
                )}
                <footer className={styles.archiveFooter}>
                    <p>Have something in mind?</p>
                    <Link
                        href="/#contact"
                        className={styles.browseLink}
                    >
                        Let&apos;s talk{" "}
                        <HiArrowUpRight aria-hidden="true" />
                    </Link>
                </footer>
            </div>
        </main>
    );
}
