import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
    HiArrowUp,
    HiArrowUpRight,
    HiDocumentText,
} from "react-icons/hi2";
import { contactLinks } from "@/_data/contact";
import styles from "./Contact.module.css";

const profiles = [
    {
        name: "GitHub",
        description: "Explore my code",
        href: contactLinks.github,
        Icon: FaGithub,
    },
    {
        name: "LinkedIn",
        description: "Connect with me",
        href: contactLinks.linkedin,
        Icon: FaLinkedinIn,
    },
    {
        name: "Résumé",
        description: "Experience & skills",
        href: contactLinks.resume,
        Icon: HiDocumentText,
    },
];

export default function Contact() {
    return (
        <section
            id="contact"
            aria-labelledby="contact-heading"
            className={styles.section}
        >
            <div className={styles.container}>
                <div className={styles.sectionLabel}>
                    <p>Contact</p>
                    <span aria-hidden="true">05 /</span>
                </div>

                <header className={styles.heading}>
                    <h2 id="contact-heading">
                        Have an idea?
                        <br />
                        <span>Let&apos;s talk.</span>
                    </h2>
                    <p>
                        A project, an opportunity, or just a hello.
                        I&apos;d love to hear what you have in mind.
                    </p>
                </header>

                <div className={styles.email}>
                    <p className={styles.emailLabel}>Say hello</p>
                    <a
                        href={`mailto:${contactLinks.email}`}
                        className={styles.emailLink}
                    >
                        <span>{contactLinks.email}</span>
                        <span
                            className={styles.emailArrow}
                            aria-hidden="true"
                        >
                            <HiArrowUpRight />
                        </span>
                    </a>
                </div>

                <nav
                    aria-label="Connect with Joseph"
                    className={styles.profiles}
                >
                    {profiles.map(
                        ({ name, description, href, Icon }) => (
                            <a
                                key={name}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.profileLink}
                            >
                                <Icon
                                    className={styles.profileIcon}
                                    aria-hidden="true"
                                />
                                <span className={styles.profileText}>
                                    <span
                                        className={styles.profileName}
                                    >
                                        {name}
                                    </span>
                                    <span
                                        className={
                                            styles.profileDescription
                                        }
                                    >
                                        {description}
                                    </span>
                                </span>
                                <HiArrowUpRight
                                    className={styles.profileArrow}
                                    aria-hidden="true"
                                />
                                <span className="sr-only">
                                    {" "}
                                    (opens in a new tab)
                                </span>
                            </a>
                        ),
                    )}
                </nav>

                <footer className={styles.footer}>
                    <p>
                        Joseph Gabriel Castro
                        <span>Software Engineer</span>
                    </p>
                    <a href="#top">
                        Back to top
                        <HiArrowUp aria-hidden="true" />
                    </a>
                </footer>
            </div>
        </section>
    );
}
