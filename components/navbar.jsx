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
                className={styles.heartContainer}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2, duration: 1 }}
            >
                <Link className={styles.heart} href="#" passHref>
                    <motion.div
                        className={styles.heartColor}
                        whileHover={{ scale: 1.17 }}
                        transition={{ duration: 0.3 }}
                    >
                        <FaHeart size={40} />
                    </motion.div>
                </Link>
                <motion.div className={styles.heartBackground}>
                    <FaHeart size={44} />
                </motion.div>
            </motion.div>

            <motion.button
                className={`${styles.hamburger} ${
                    isNavbarOpen && styles.active
                }`}
                onClick={toggleNavbar}
                aria-label="toggle navigation"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </motion.button>
            <nav className={`${styles.nav} ${!isNavbarOpen && styles.toggle}`}>
                <motion.ul
                    initial="hidden"
                    animate="visible"
                    variants={navVariant}
                    className={styles.navList}
                >
                    <motion.li
                        variants={liVariant}
                        style={{ originX: 0.01 }}
                        whileHover={{ scale: 1.1 }}
                        className={styles.navItem}
                    >
                        <Link href="#about">
                            <motion.a
                                className={styles.navLink}
                                onClick={
                                    isNavbarOpen ? toggleNavbar : undefined
                                }
                            >
                                About
                            </motion.a>
                        </Link>
                    </motion.li>
                    <motion.li
                        variants={liVariant}
                        style={{ originX: 0.01 }}
                        whileHover={{ scale: 1.1 }}
                        className={styles.navItem}
                    >
                        <Link href="#projects">
                            <motion.a
                                className={styles.navLink}
                                onClick={
                                    isNavbarOpen ? toggleNavbar : undefined
                                }
                            >
                                Projects
                            </motion.a>
                        </Link>
                    </motion.li>
                    <motion.li
                        variants={liVariant}
                        style={{ originX: 0.01 }}
                        whileHover={{ scale: 1.1 }}
                        className={styles.navItem}
                    >
                        <Link href="#certificates">
                            <motion.a
                                className={styles.navLink}
                                onClick={
                                    isNavbarOpen ? toggleNavbar : undefined
                                }
                            >
                                Certificates
                            </motion.a>
                        </Link>
                    </motion.li>
                    <motion.li
                        variants={liVariant}
                        style={{ originX: 0.01 }}
                        whileHover={{ scale: 1.1 }}
                        className={styles.navItem}
                    >
                        <Link href="#contact">
                            <motion.a
                                className={styles.navLink}
                                onClick={
                                    isNavbarOpen ? toggleNavbar : undefined
                                }
                            >
                                Contact
                            </motion.a>
                        </Link>
                    </motion.li>
                    <motion.li
                        variants={liVariant}
                        style={{ originX: 0.01 }}
                        whileHover={{ scale: 1.1 }}
                        className={`${styles.navItem} ${styles.feedback}`}
                    >
                        <motion.a
                            className={styles.navLink}
                            onClick={() => {
                                handleOpenFeedback();
                                {
                                    isNavbarOpen && toggleNavbar();
                                }
                            }}
                        >
                            Feedback
                        </motion.a>
                    </motion.li>
                </motion.ul>
            </nav>
        </header>
    );
}
