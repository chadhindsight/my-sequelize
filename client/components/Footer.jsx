export default function Footer() {
    return (
        <footer
            className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left footer">
            <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
                © {new Date().getFullYear()} Copyright:
                <a
                    className="text-neutral-800 dark:text-neutral-400"
                    href="https://chadhindsight.github.io/" target="_blank" rel="noreferrer">
                    Chad Hinds</a>
            </div>
            <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
                © {new Date().getFullYear()} Copyright:
                <a
                    className="text-neutral-800 dark:text-neutral-400"
                    href="https://tailwind-elements.com/" target="_blank" rel="noreferrer">
                    Tailwind Elements</a>
            </div>
        </footer>
    );
}
