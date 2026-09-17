import styles from "./Experience.module.css";

const highlights = [
    {
        title: "Responsive by design",
        description:
            "Built responsive web pages and features with PHP, CodeIgniter, jQuery, HTML and CSS, supporting desktop and mobile layouts.",
    },
    {
        title: "From interface to logic",
        description:
            "Implemented frontend and backend functionality, connecting dynamic interfaces with server-side application logic.",
    },
    {
        title: "Better with every iteration",
        description:
            "Debugged and improved existing features for consistent usability across desktop and mobile interfaces.",
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            aria-labelledby="experience-heading"
            className={styles.section}
        >
            <div className={styles.container}>
                <header className={styles.heading}>
                    <p className={styles.eyebrow}>
                        <span /> The journey so far
                    </p>
                    <div className={styles.headingRow}>
                        <h2 id="experience-heading">
                            Work
                            <br />
                            <span>experience.</span>
                        </h2>
                        <p className={styles.intro}>
                            Turning what I learn into
                            <br />
                            things people can use.
                        </p>
                    </div>
                </header>
                <article
                    className={styles.entry}
                    aria-labelledby="experience-role"
                >
                    <div className={styles.period}>
                        <span className={styles.year}>2025</span>
                        <p>
                            <time dateTime="2025-06">June</time> —{" "}
                            <time dateTime="2025-08">August</time>
                        </p>
                        <span className={styles.label}>
                            Traineeship
                        </span>
                    </div>
                    <div className={styles.details}>
                        <div className={styles.companyRow}>
                            <p className={styles.company}>
                                Armada Logics
                            </p>
                            <span
                                className={styles.index}
                                aria-hidden="true"
                            >
                                01 /
                            </span>
                        </div>
                        <h3 id="experience-role">
                            Junior Software
                            <br
                                className={styles.desktopBreak}
                            />{" "}
                            Engineer Trainee
                        </h3>
                        <p className={styles.location}>
                            La Union, Philippines
                        </p>
                        <ul className={styles.highlights}>
                            {highlights.map((item, index) => (
                                <li key={item.title}>
                                    <span
                                        className={styles.number}
                                        aria-hidden="true"
                                    >
                                        0{index + 1}
                                    </span>
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className={styles.stack}>
                            <p className={styles.stackLabel}>
                                Worked with
                            </p>
                            <ul aria-label="Technologies used">
                                {[
                                    "PHP",
                                    "CodeIgniter",
                                    "jQuery",
                                    "HTML",
                                    "CSS",
                                ].map((technology) => (
                                    <li key={technology}>
                                        {technology}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </article>
                <div className={styles.footer} aria-hidden="true">
                    <span>Learning. Building. Growing.</span>
                    <span>✦</span>
                </div>
            </div>
        </section>
    );
}
