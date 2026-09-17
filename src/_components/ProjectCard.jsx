import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import {
    HiArrowUpRight,
    HiCodeBracket,
    HiMinus,
    HiPlus,
} from "react-icons/hi2";
import { SiFlutter, SiNextdotjs, SiReact } from "react-icons/si";
import ProjectArt from "./ProjectArt";
import styles from "./Projects.module.css";

const icons = {
    nextjs: SiNextdotjs,
    react: SiReact,
    flutter: SiFlutter,
};

export default function ProjectCard({
    project,
    index,
    featured = false,
    headingLevel = "h3",
}) {
    const {
        id,
        name,
        category,
        description,
        stack = [],
        details = [],
        image,
        imageAlt,
        artwork,
        icon,
        demoUrl,
        githubUrl,
    } = project;
    const Icon = icons[icon] || HiCodeBracket;
    const Heading = headingLevel;

    return (
        <article
            className={`${styles.card} ${styles[artwork] || ""} ${featured ? styles.featured : ""}`}
            aria-labelledby={`${id}-heading`}
        >
            <div className={styles.visual}>
                {image ? (
                    <Image
                        src={image}
                        alt={imageAlt || `${name} preview`}
                        fill
                        sizes="(max-width: 560px) calc(100vw - 48px), (max-width: 1136px) 50vw, 540px"
                        className={styles.projectImage}
                        quality={100}
                    />
                ) : (
                    <ProjectArt kind={artwork} />
                )}
                <span className={styles.visualLabel}>
                    PROJECT / {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.visualIcon}>
                    <Icon aria-hidden="true" />
                </span>
            </div>
            <div className={styles.content}>
                {category && (
                    <p className={styles.category}>{category}</p>
                )}
                <Heading id={`${id}-heading`}>{name}</Heading>
                <p className={styles.description}>{description}</p>
                {stack.length > 0 && (
                    <ul
                        className={styles.stack}
                        aria-label={`${name} technologies`}
                    >
                        {stack.map((tech) => (
                            <li key={tech}>{tech}</li>
                        ))}
                    </ul>
                )}
                {details.length > 0 && (
                    <details className={styles.details}>
                        <summary>
                            Inside the build
                            <span className="sr-only">: {name}</span>
                            <HiPlus
                                className={styles.plus}
                                aria-hidden="true"
                            />
                            <HiMinus
                                className={styles.minus}
                                aria-hidden="true"
                            />
                        </summary>
                        <ul>
                            {details.map((detail) => (
                                <li key={detail}>{detail}</li>
                            ))}
                        </ul>
                    </details>
                )}
                {(demoUrl || githubUrl) && (
                    <div className={styles.links}>
                        {demoUrl && (
                            <a
                                href={demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Live demo
                                <span className="sr-only">
                                    {" "}
                                    for {name} (opens in a new tab)
                                </span>
                                <HiArrowUpRight aria-hidden="true" />
                            </a>
                        )}
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub aria-hidden="true" />
                                Source code
                                <span className="sr-only">
                                    {" "}
                                    for {name} (opens in a new tab)
                                </span>
                            </a>
                        )}
                    </div>
                )}
            </div>
        </article>
    );
}
