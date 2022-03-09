import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        return setIsOpen(!isOpen);
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
                className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
                onClick={handleClick}
                aria-label="toggle navigation"
            >
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </button>
            <nav className={`${styles.nav} ${isOpen ? "" : styles.toggle}`}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link href="/">
                            <a className={styles.navLink}>About</a>
                        </Link>
                    </li>{" "}
                    <li className={styles.navItem}>
                        <Link href="/">
                            <a className={styles.navLink}>Projects</a>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/">
                            <a className={styles.navLink}>Certificates</a>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/">
                            <a className={styles.navLink}>Contact</a>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/">
                            <a className={styles.navLink}>Feedback</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
