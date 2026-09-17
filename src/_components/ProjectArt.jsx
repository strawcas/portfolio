import styles from "./Projects.module.css";

export default function ProjectArt({ kind }) {
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
    if (kind !== "gym") {
        return (
            <div className={styles.placeholderArt} aria-hidden="true">
                <span className={styles.placeholderMark}>
                    &lt;/&gt;
                </span>
                <span className={styles.placeholderCaption}>
                    IDEA → BUILD → REFINE
                </span>
            </div>
        );
    }
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
