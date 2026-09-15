import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiDocument } from "react-icons/hi2";

export default function Header() {
    return (
        <header className="w-full px-8 py-8 md:px-16 lg:px-24">
            <div className="relative flex items-center justify-between">
                {/* LOGO */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl font-black text-[#040517]">
                    JC
                </div>

                {/* NAV */}
                <nav className="absolute left-1/2 -translate-x-1/2">
                    <ul className="flex items-center gap-8 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-white/80 backdrop-blur-md">
                        <li>
                            <a
                                href="#skills"
                                className="relative transition hover:text-white"
                            >
                                SKILLSET
                                <span className="absolute -bottom-3 left-1/2 h-[2px] w-10 -translate-x-1/2 bg-pink-500" />
                            </a>
                        </li>

                        <li>
                            <a
                                href="#experience"
                                className="transition hover:text-white"
                            >
                                EXPERIENCE
                            </a>
                        </li>

                        <li>
                            <a
                                href="#projects"
                                className="transition hover:text-white"
                            >
                                PROJECTS
                            </a>
                        </li>

                        <li>
                            <a
                                href="#about"
                                className="transition hover:text-white"
                            >
                                ABOUT-ME
                            </a>
                        </li>

                        <li>
                            <a
                                href="#contact"
                                className="transition hover:text-white"
                            >
                                CONTACT
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* SOCIAL LINKS */}
                <div className="flex items-center gap-4 text-4xl text-white">
                    <a
                        href="https://github.com/"
                        target="_blank"
                        className="transition hover:text-purple-300 hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        className="transition hover:text-purple-300 hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]"
                    >
                        <FaLinkedinIn />
                    </a>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="transition hover:text-purple-300 hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]"
                    >
                        <HiDocument />
                    </a>
                </div>
            </div>
        </header>
    );
}
