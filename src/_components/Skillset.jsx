import {
    SiJavascript,
    SiTypescript,
    SiPhp,
    SiPython,
    SiDart,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiFlutter,
    SiCodeigniter,
    SiMongodb,
    SiMysql,
    SiPostgresql,
    SiMariadb,
    SiSupabase,
    SiAppwrite,
    SiGit,
    SiDocker,
    SiCloudflare,
    SiVercel,
    SiTailwindcss,
    SiHtml5,
    SiJquery,
} from "react-icons/si";
import { FaAws, FaCss3Alt } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import styles from "./Skillset.module.css";

const groups = [
    {
        name: "Languages",
        items: [
            ["JavaScript", SiJavascript, "#ead66b"],
            ["TypeScript", SiTypescript, "#8eb9f1"],
            ["PHP", SiPhp, "#aaa3dc"],
            ["Python", SiPython, "#81b6db"],
            ["Dart", SiDart, "#6cd1dc"],
            ["C#", TbBrandCSharp, "#b89be8"],
            ["HTML", SiHtml5, "#ed9b83"],
            ["CSS", FaCss3Alt, "#8eb9f1"],
        ],
    },
    {
        name: "Frameworks",
        items: [
            ["React", SiReact, "#8bd5ec"],
            ["Next.js", SiNextdotjs, "#eeeaf6"],
            ["Node.js", SiNodedotjs, "#98c886"],
            ["Express.js", SiExpress, "#d7d2e3"],
            ["Flutter", SiFlutter, "#7bc8ee"],
            ["CodeIgniter", SiCodeigniter, "#ed9b83"],
            ["Tailwind CSS", SiTailwindcss, "#7cd2db"],
            ["jQuery", SiJquery, "#89b7de"],
        ],
    },
    {
        name: "Databases & Platforms",
        items: [
            ["MongoDB", SiMongodb, "#97cc95"],
            ["MySQL", SiMysql, "#8dbdd9"],
            ["PostgreSQL", SiPostgresql, "#98b9df"],
            ["MariaDB", SiMariadb, "#c5b4a0"],
            ["Supabase", SiSupabase, "#8bd7b2"],
            ["Appwrite", SiAppwrite, "#eb8ba9"],
        ],
    },
    {
        name: "Tools",
        items: [
            ["Git", SiGit, "#ed9b83"],
            ["Docker", SiDocker, "#8eb9f1"],
            ["AWS", FaAws, "#ecc18c"],
            ["Cloudflare", SiCloudflare, "#ecc18c"],
            ["Vercel", SiVercel, "#eeeaf6"],
        ],
    },
];

export default function Skillset() {
    return (
        <section
            id="skills"
            aria-labelledby="skills-heading"
            className={styles.section}
        >
            <div className={styles.container}>
                <div className={styles.divider} aria-hidden="true">
                    <span />
                </div>
                <header className={styles.header}>
                    <div>
                        <h2 id="skills-heading">
                            The tech <span>behind it.</span>
                        </h2>
                    </div>
                </header>
                <div className={styles.groups}>
                    {groups.map((group) => (
                        <div
                            className={styles.group}
                            key={group.name}
                        >
                            <div className={styles.groupHeading}>
                                <h3>{group.name}</h3>
                            </div>
                            <ul
                                className={styles.icons}
                                aria-label={group.name}
                            >
                                {group.items.map(
                                    ([name, Icon, color]) => (
                                        <li
                                            key={name}
                                            className={styles.tech}
                                            style={{
                                                "--tech-color": color,
                                            }}
                                        >
                                            <Icon
                                                aria-hidden="true"
                                                className={
                                                    styles.icon
                                                }
                                            />
                                            <span>{name}</span>
                                        </li>
                                    ),
                                )}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
