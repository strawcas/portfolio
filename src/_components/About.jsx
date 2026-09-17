import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";
import portrait from "../../public/self-portrait.png";
import styles from "./About.module.css";

export default function About() {
    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className={styles.section}
        >
            <div className={styles.container}>
                <div className={styles.sectionLabel}>
                    <p>
                        <span aria-hidden="true" /> About me
                    </p>
                    <span aria-hidden="true">04 /</span>
                </div>

                <div className={styles.layout}>
                    <figure className={styles.portrait}>
                        <div className={styles.portraitFrame}>
                            <div className={styles.imageWrap}>
                                <Image
                                    src={portrait}
                                    alt="Joseph Gabriel Castro wearing glasses and a yellow jacket"
                                    fill
                                    placeholder="blur"
                                    sizes="(max-width: 540px) calc(100vw - 64px), (max-width: 800px) 400px, (max-width: 1144px) 38vw, 420px"
                                    className={styles.image}
                                />
                            </div>
                            <span
                                className={styles.spark}
                                aria-hidden="true"
                            >
                                ✳
                            </span>
                        </div>
                        <figcaption className={styles.caption}>
                            <span>Joseph Gabriel Castro</span>
                            <span>Software Engineer</span>
                        </figcaption>
                    </figure>

                    <div className={styles.content}>
                        <header className={styles.heading}>
                            <h2 id="about-heading">
                                The person
                                <br />
                                <span>behind the code.</span>
                            </h2>
                        </header>

                        <div className={styles.bio}>
                            <p className={styles.greeting}>
                                Hi, I&apos;m Joseph.
                            </p>
                            <p>
                                I&apos;m a software engineer who
                                enjoys turning ideas into useful
                                applications — connecting thoughtful
                                interfaces with the logic that makes
                                them work.
                            </p>
                            <p>
                                From building web features at Armada
                                Logics to creating booking platforms,
                                subscription tools, and a fitness app,
                                I&apos;ve worked across the frontend,
                                backend, and mobile. I like seeing how
                                all the pieces come together.
                            </p>
                        </div>

                        <dl className={styles.approach}>
                            <div>
                                <dt>
                                    <span aria-hidden="true">01</span>{" "}
                                    Build with purpose
                                </dt>
                                <dd>
                                    Keep the experience clear and the
                                    details considered.
                                </dd>
                            </div>
                            <div>
                                <dt>
                                    <span aria-hidden="true">02</span>{" "}
                                    Stay curious
                                </dt>
                                <dd>
                                    Learn through building, and
                                    improve with every iteration.
                                </dd>
                            </div>
                        </dl>

                        <div className={styles.links}>
                            <a
                                className={styles.primaryLink}
                                href="#projects"
                            >
                                Explore my projects
                                <HiArrowUpRight aria-hidden="true" />
                            </a>
                            <a
                                className={styles.secondaryLink}
                                href="#experience"
                            >
                                My experience
                                <HiArrowUpRight aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
