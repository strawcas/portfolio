const links = [
    { href: "#skills", label: "SKILLSET", isVisibleSmall: false },
    {
        href: "#experience",
        label: "EXPERIENCE",
        isVisibleSmall: true,
    },
    { href: "#projects", label: "PROJECTS", isVisibleSmall: true },
    { href: "#about", label: "ABOUT-ME", isVisibleSmall: true },
    { href: "#contact", label: "CONTACT", isVisibleSmall: true },
];

export default function Navigation({ floating = false }) {
    return (
        <nav
            aria-label={
                floating ? "Floating navigation" : "Main navigation"
            }
            className={
                floating
                    ? "fixed bottom-[var(--floating-navigation-bottom)] left-1/2 z-50 hidden w-max max-w-[calc(100%-2rem)] -translate-x-1/2 md:block"
                    : "order-last w-full xl:absolute xl:left-1/2 xl:order-none xl:w-auto xl:-translate-x-1/2"
            }
        >
            <ul className="mx-auto flex w-fit max-w-full flex-wrap items-center justify-center gap-x-4 gap-y-1 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-white/80 backdrop-blur-md sm:gap-x-6 sm:px-6 sm:text-sm xl:flex-nowrap xl:gap-x-8 xl:rounded-full [&_a]:inline-flex [&_a]:min-h-11 [&_a]:items-center">
                {links.map(({ href, label, isVisibleSmall }) => (
                    <li
                        key={href}
                        className={`${!isVisibleSmall && "hidden"} min-[420px]:block`}
                    >
                        <a
                            href={href}
                            className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
