import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import styles from "./navbar.module.css";

export default function Navbar(props) {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    function toggleNavbar() {
        return setIsNavbarOpen(!isNavbarOpen);
    }

    return (
        <header className={styles.header}>
            <FaHeart className={styles.heart} />
            <button
                className={`${styles.hamburger} ${
                    isNavbarOpen && styles.active
                }`}
                onClick={toggleNavbar}
                aria-label="toggle navigation"
            >
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </button>
            <nav className={`${styles.nav} ${!isNavbarOpen && styles.toggle}`}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link href="#about">
                            <a className={styles.navLink}>About</a>
                        </Link>
                    </li>{" "}
                    <li className={styles.navItem}>
                        <Link href="#projects">
                            <a className={styles.navLink}>Projects</a>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="#certificates">
                            <a className={styles.navLink}>Certificates</a>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="#contact">
                            <a className={styles.navLink}>Contact</a>
                        </Link>
                    </li>
                    <li className={`${styles.navItem} ${styles.feedback}`}>
                        <a
                            className={styles.navLink}
                            onClick={props.handleOpenFeedback}
                        >
                            Feedback
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
