import { HiArrowDown, HiPlus, HiMinus } from "react-icons/hi2";
import { SiNextdotjs, SiReact, SiFlutter } from "react-icons/si";
import styles from "./Projects.module.css";

const projects = [
    {
        id: "alpine",
        number: "01",
        name: "Alpine Haven",
        category: "Full-stack booking platform",
        Icon: SiNextdotjs,
        description:
            "A quieter way to plan a getaway. A cabin booking platform with discovery, reservations, and secure guest accounts.",
        stack: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "Supabase",
            "NextAuth.js",
        ],
        details: [
            "Cabin filtering, date selection, and reservation management.",
            "Google OAuth, session management, and authorization for guest accounts and reservations.",
            "React Server Components and server actions backed by Supabase PostgreSQL.",
        ],
    },
    {
        id: "subtrack",
        number: "02",
        name: "SubTrack",
        category: "Subscription management",
        Icon: SiReact,
        description:
            "Know what renews next. A home for subscriptions, spending insights, and timely renewal reminders.",
        stack: ["React", "Node.js", "Express", "MongoDB", "Upstash"],
        details: [
            "React dashboards and RESTful APIs for subscription management and spending analytics.",
            "Google OAuth, JWT authentication, OTP verification, and password recovery, with Arcjet protection and rate limiting.",
            "Scheduled renewal emails using Upstash Workflows and Nodemailer.",
        ],
    },
    {
        id: "gym",
        number: "03",
        name: "Better Gym",
        category: "AI-powered fitness app",
        Icon: SiFlutter,
        description:
            "Make every rep count. A mobile fitness app that uses real-time pose detection to assess exercise form.",
        stack: ["Flutter", "Dart", "ML Kit", "Python", "PyTorch"],
        details: [
            "Real-time repetition counting and exercise form assessment using Google ML Kit and BlazePose.",
            "Adapted and trained a 2s-AGCN model in PyTorch to classify correct and incorrect exercise form.",
            "Achieved 98.46% classification accuracy in the project's model evaluation; PHP and MySQL support the application.",
        ],
    },
];

function ProjectArt({ kind }) {
    if (kind === "alpine")
        return (
            <svg
                viewBox="0 0 800 460"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
                aria-hidden="true"
                className={styles.landscape}
            >
                <defs>
                    <linearGradient id="alpine-sky" x2="0" y2="1">
                        <stop stopColor="#b9d5c8" />
                        <stop offset="1" stopColor="#e5e8d8" />
                    </linearGradient>
                    <linearGradient id="alpine-front" x2="0" y2="1">
                        <stop stopColor="#24554b" />
                        <stop offset="1" stopColor="#102e2c" />
                    </linearGradient>
                </defs>
                <path fill="url(#alpine-sky)" d="M0 0h800v460H0z" />
                <circle
                    cx="590"
                    cy="105"
                    r="47"
                    fill="#f9f1d0"
                    opacity=".85"
                />
                <path
                    d="M0 300 170 100 300 252 430 80 670 310 800 190V460H0Z"
                    fill="#91aea4"
                />
                <path
                    d="m122 156 48-56 54 63-47-18-15 19-14-14Zm247-7 61-69 70 68-53-21-17 16-21-22Z"
                    fill="#e7ede2"
                    opacity=".85"
                />
                <path
                    d="M0 345 180 228 360 365 540 212 800 355V460H0Z"
                    fill="#507e6e"
                />
                <path
                    d="M0 380Q170 315 350 370T800 352V460H0Z"
                    fill="url(#alpine-front)"
                />
                <path d="m406 389 64-94 64 94Z" fill="#d8ba86" />
                <path
                    d="m398 389 72-107 73 107h-12l-61-88-59 88Z"
                    fill="#152e2b"
                />
                <path d="M450 351h40v38h-40z" fill="#f9df99" />
                <path
                    d="M470 351v38"
                    stroke="#6c694d"
                    strokeWidth="3"
                />
                {[65, 105, 690, 745].map((x, i) => (
                    <path
                        key={x}
                        d={`M${x} ${280 + i * 9}l-34 92h68Z`}
                        fill="#173d35"
                    />
                ))}
                <path
                    d="M470 390q-45 35-35 70"
                    stroke="#b8b493"
                    strokeWidth="15"
                    opacity=".4"
                />
            </svg>
        );
    if (kind === "subtrack")
        return (
            <div className={styles.orbitArt} aria-hidden="true">
                <div className={styles.orbit} />
                <div className={styles.orbitInner} />
                <div className={styles.subCore}>
                    s<span>↗</span>
                </div>
                <span
                    className={`${styles.orbitToken} ${styles.tokenOne}`}
                >
                    ↻
                </span>
                <span
                    className={`${styles.orbitToken} ${styles.tokenTwo}`}
                >
                    $
                </span>
                <span
                    className={`${styles.orbitToken} ${styles.tokenThree}`}
                >
                    ✓
                </span>
                <div className={styles.artCaption}>
                    TRACK / PLAN / RENEW
                </div>
            </div>
        );
    return (
        <div className={styles.gymArt} aria-hidden="true">
            <span className={styles.scanLabel}>
                MOVEMENT IN FOCUS
            </span>
            <svg viewBox="0 0 440 300" fill="none">
                <circle
                    cx="220"
                    cy="140"
                    r="105"
                    stroke="#c9e69b"
                    strokeOpacity=".12"
                />
                <circle
                    cx="220"
                    cy="140"
                    r="75"
                    stroke="#c9e69b"
                    strokeOpacity=".12"
                />
                <path
                    d="M105 60V35h25m180 0h25v25M105 220v25h25m180 0h25v-25"
                    stroke="#c7e9a3"
                    strokeOpacity=".5"
                />
                <circle
                    cx="225"
                    cy="65"
                    r="16"
                    stroke="#d4efb1"
                    strokeWidth="3"
                />
                <path
                    d="m222 87-14 70 42 30 30 50m-72-80-32 34-32 43m71-130-44 24-30-26m74 2 37 30 37-18"
                    stroke="#d4efb1"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                {[
                    [222, 87],
                    [208, 157],
                    [250, 187],
                    [176, 191],
                    [215, 104],
                    [171, 128],
                    [252, 134],
                    [141, 102],
                    [289, 116],
                    [280, 237],
                    [144, 234],
                ].map(([cx, cy]) => (
                    <circle
                        key={`${cx}-${cy}`}
                        cx={cx}
                        cy={cy}
                        r="5"
                        fill="#d4efb1"
                        stroke="#284435"
                        strokeWidth="2"
                    />
                ))}
            </svg>
            <span className={styles.poseCaption}>
                POSE DETECTION · FORM ASSESSMENT
            </span>
        </div>
    );
}

export default function Projects() {
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
                        <p className={styles.eyebrow}>
                            Ideas put into practice
                        </p>
                        <h2 id="projects-heading">
                            Selected <span>projects.</span>
                        </h2>
                    </div>
                    <p className={styles.intro}>
                        Different challenges.
                        <br />
                        The same curiosity to build.
                    </p>
                </header>
                <div className={styles.grid}>
                    {projects.map(
                        (
                            {
                                id,
                                number,
                                name,
                                category,
                                Icon,
                                description,
                                stack,
                                details,
                            },
                            index,
                        ) => (
                            <article
                                key={id}
                                className={`${styles.card} ${styles[id]} ${index === 0 ? styles.featured : ""}`}
                                aria-labelledby={`${id}-heading`}
                            >
                                <div className={styles.visual}>
                                    <ProjectArt kind={id} />
                                    <span
                                        className={styles.visualLabel}
                                    >
                                        PROJECT / {number}
                                    </span>
                                    <span
                                        className={styles.visualIcon}
                                    >
                                        <Icon aria-hidden="true" />
                                    </span>
                                </div>
                                <div className={styles.content}>
                                    <p className={styles.category}>
                                        {category}
                                    </p>
                                    <h3 id={`${id}-heading`}>
                                        {name}
                                    </h3>
                                    <p className={styles.description}>
                                        {description}
                                    </p>
                                    <ul
                                        className={styles.stack}
                                        aria-label={`${name} technologies`}
                                    >
                                        {stack.map((tech) => (
                                            <li key={tech}>{tech}</li>
                                        ))}
                                    </ul>
                                    <details
                                        className={styles.details}
                                    >
                                        <summary>
                                            Inside the build
                                            <span className="sr-only">
                                                : {name}
                                            </span>
                                            <HiPlus
                                                className={
                                                    styles.plus
                                                }
                                                aria-hidden="true"
                                            />
                                            <HiMinus
                                                className={
                                                    styles.minus
                                                }
                                                aria-hidden="true"
                                            />
                                        </summary>
                                        <ul>
                                            {details.map((detail) => (
                                                <li key={detail}>
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </details>
                                </div>
                            </article>
                        ),
                    )}
                </div>
                <p className={styles.endnote}>
                    <span aria-hidden="true">✦</span> Built with
                    curiosity. Refined through practice.
                </p>
            </div>
        </section>
    );
}
