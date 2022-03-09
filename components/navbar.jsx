import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import styles from "./navbar.module.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        return setIsOpen(!isOpen);
    }

    return (
        <header className={styles.header}>
            <FaHeart className={styles.heart} />
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
                </ul>
            </nav>
        </header>
    );
}
