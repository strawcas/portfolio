import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";
import portrait from "../../public/self-portrait.png";
import styles from "./About.module.css";
import Link from "next/link";

export default function About() {
    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className={styles.section}
        >
            <div className={styles.container}>
                <div className={styles.sectionLabel}></div>

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
                                I&#39;m a software engineer and
                                Computer Science graduate who loves
                                coding, math, web development, game
                                development, and learning how things
                                work. A lot of what I know came from
                                Udemy courses, documentation, and
                                building projects that pushed me
                                beyond what I learned in school.
                            </p>
                            <p>
                                I&#39;m naturally curious and I like
                                understanding things deeply. When I
                                get stuck on an idea, I&#39;ll
                                sometimes literally walk around in
                                circles thinking about it until it
                                finally clicks. I graduated cum laude,
                                but I&#39;m still constantly learning,
                                experimenting, and trying to become a
                                better developer.
                            </p>
                        </div>

                        <div className={styles.links}>
                            <Link
                                className={styles.primaryLink}
                                href="#projects"
                            >
                                Explore my projects
                                <HiArrowUpRight aria-hidden="true" />
                            </Link>
                            <Link
                                className={styles.secondaryLink}
                                href="#experience"
                            >
                                My experience
                                <HiArrowUpRight aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
