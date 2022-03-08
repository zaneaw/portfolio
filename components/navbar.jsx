import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image
                    src="/images/heart.png"
                    width="25px"
                    height="25px"
                    alt=""
                />
            </div>
            <button
                className={styles.navbarToggle}
                onClick={handleClick}
                aria-label="toggle navigation"
            >
                <span className={styles.hamburger}></span>
            </button>
            <nav className={`${styles.nav} ${isOpen ? styles.toggle : ""}`}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link href="/">
                            <a className={styles.navLink}>ABOUT</a>
                        </Link>
                    </li>{" "}
                    <li className={styles.navItem}>
                        <Link href="/">
                            <a className={styles.navLink}>PROJECTS</a>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/">
                            <a className={styles.navLink}>CERTIFICATES</a>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/">
                            <a className={styles.navLink}>FIND ME</a>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/">
                            <a className={styles.navLink}>FEEDBACK</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
