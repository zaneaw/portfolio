import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
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
            {/* <button className="nav-toggle" aria-label="toggle navigation">
                <span className="hamburger"></span>
            </button> */}
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link href="/">
                            <a className={styles.navLink}>About</a>
                        </Link>
                    </li>{" "}
                    |
                    <li className={styles.navItem}>
                        <Link href="/">
                            <a className={styles.navLink}>Projects</a>
                        </Link>
                    </li>
                    |
                    <li className={styles.navItem}>
                        <Link href="/">
                            <a className={styles.navLink}>Certifications</a>
                        </Link>
                    </li>
                    |
                    <li className={styles.navItem}>
                        <Link href="/">
                            <a className={styles.navLink}>Contact</a>
                        </Link>
                    </li>
                    |
                    <li className={styles.navItem}>
                        <Link href="/">
                            <a className={styles.navLink}>Challenges</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
