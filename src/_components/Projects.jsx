import Link from "next/link";
import { HiArrowDown, HiArrowUpRight } from "react-icons/hi2";
import projects from "@/_data/projects.json";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

export default function Projects() {
    const featuredProjects = projects.filter(
        (project) => project.featured,
    );

    return (
        <section
            id="projects"
            aria-labelledby="projects-heading"
            className={styles.section}
        >
            <div className={styles.bridge} aria-hidden="true">
                <span />
                <HiArrowDown />
                <span />
            </div>

            <div className={styles.container}>
                <header className={styles.heading}>
                    <div>
                        <h2 id="projects-heading">
                            Selected <span>projects.</span>
                        </h2>
                    </div>
                </header>
                {featuredProjects.length > 0 ? (
                    <div className={styles.grid}>
                        {featuredProjects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                                featured={index === 0}
                            />
                        ))}
                    </div>
                ) : (
                    <p className={styles.empty}>
                        More projects are on the way.
                    </p>
                )}
                <div className={styles.browse}>
                    <Link
                        href="/projects"
                        className={styles.browseLink}
                    >
                        View all projects{" "}
                        <HiArrowUpRight aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
