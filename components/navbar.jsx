import { useState } from "react";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import styles from "./navbar.module.css";
import { motion } from "framer-motion";

const navVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4,
        },
    },
};

const liVariant = {
    hidden: { opacity: 0, y: "-100vh" },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", mass: 0.3, damping: 8 },
    },
};

export default function Navbar({ handleOpenFeedback }) {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    function toggleNavbar() {
        return setIsNavbarOpen(!isNavbarOpen);
    }

    return (
        <header className={`${styles.header} navbarHeader`}>
            <motion.div
                className={styles.logoContainer}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2, duration: 1 }}
            >
                <Link href="#" passHref>
                    <motion.a
                        className={styles.heartContainer}
                        whileHover={{ scale: 1.11 }}
                    >
                        <FaHeart className={styles.heartBackground} size={44} />
                        <FaHeart className={styles.heart} size={40} />
                    </motion.a>
                </Link>
            </motion.div>

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
                <motion.ul
                    initial="hidden"
                    animate="visible"
                    variants={navVariant}
                    className={styles.navList}
                >
                    <motion.li
                        variants={liVariant}
                        whileHover={{ scale: 1.1 }}
                        className={styles.navItem}
                    >
                        <Link href="#about">
                            <a
                                className={styles.navLink}
                                onClick={
                                    isNavbarOpen ? toggleNavbar : undefined
                                }
                            >
                                About
                            </a>
                        </Link>
                    </motion.li>
                    <motion.li
                        variants={liVariant}
                        whileHover={{ scale: 1.1 }}
                        className={styles.navItem}
                    >
                        <Link href="#projects">
                            <a
                                className={styles.navLink}
                                onClick={
                                    isNavbarOpen ? toggleNavbar : undefined
                                }
                            >
                                Projects
                            </a>
                        </Link>
                    </motion.li>
                    <motion.li
                        variants={liVariant}
                        whileHover={{ scale: 1.1 }}
                        className={styles.navItem}
                    >
                        <Link href="#certificates">
                            <a
                                className={styles.navLink}
                                onClick={
                                    isNavbarOpen ? toggleNavbar : undefined
                                }
                            >
                                Certificates
                            </a>
                        </Link>
                    </motion.li>
                    <motion.li
                        variants={liVariant}
                        whileHover={{ scale: 1.1 }}
                        className={styles.navItem}
                    >
                        <Link href="#contact">
                            <a
                                className={styles.navLink}
                                onClick={
                                    isNavbarOpen ? toggleNavbar : undefined
                                }
                            >
                                Contact
                            </a>
                        </Link>
                    </motion.li>
                    <motion.li
                        variants={liVariant}
                        whileHover={{ scale: 1.1 }}
                        className={`${styles.navItem} ${styles.feedback}`}
                    >
                        <a
                            className={styles.navLink}
                            onClick={() => {
                                handleOpenFeedback();
                                {
                                    isNavbarOpen && toggleNavbar();
                                }
                            }}
                        >
                            Feedback
                        </a>
                    </motion.li>
                </motion.ul>
            </nav>
        </header>
    );
}
