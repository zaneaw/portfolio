import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaHeart, FaArrowUp } from 'react-icons/fa';
import styles from './navbar.module.css';

export default function Navbar({ handleOpenFeedback }) {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [showNav, setShowNav] = useState(true);

    useEffect(() => {
        const threshold = 0;
        let lastScrollY = window.pageYOffset;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.pageYOffset;

            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }
            setShowNav(scrollY > lastScrollY ? false : true);
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [showNav]);

    const normalClick = isNavbarOpen ? toggleNavbar : undefined;

    const navItems = [
        { title: 'About', click: normalClick },
        { title: 'Projects', click: normalClick },
        { title: 'Certificates', click: normalClick },
        { title: 'Contact', click: normalClick },
    ];

    function toggleNavbar() {
        return setIsNavbarOpen(!isNavbarOpen);
    }

    return (
        <header className={`mt-16 z-10`}>
            <nav className={`${!showNav && '-translate-y-14'} w-full bg-blue-dark p-2 flex justify-between items-center fixed top-0 transition-all duration-200 ease-out`}>
                <Link href='#' passHref>
                    <div>
                        <FaHeart size={40} color={'#006D77'} />
                    </div>
                </Link>

                <button
                    className={`${isNavbarOpen && styles.active} bg-blue-dark rounded block p-1`}
                    onClick={toggleNavbar}
                    aria-label='toggle navigation'
                >
                    <span
                        className={`${isNavbarOpen && 'translate-y-[10px] rotate-45'} block w-[35px] h-[5px] bg-blue rounded my-[5px] mx-auto transition-all duration-200 ease-in-out`}
                    ></span>
                    <span
                        className={`${isNavbarOpen && 'opacity-0'} block w-[35px] h-[5px] bg-blue rounded my-[5px] mx-auto transition-all duration-200 ease-in-out`}
                    ></span>
                    <span
                        className={`${isNavbarOpen && '-translate-y-[10px] -rotate-45'} block w-[35px] h-[5px] bg-blue rounded my-[5px] mx-auto transition-all duration-200 ease-in-out`}
                    ></span>
                </button>
                <div
                    className={`fixed right-[10px] top-10 ${
                        !isNavbarOpen && styles.toggle
                    }`}
                >
                    <ul className={styles.navList}>
                        {navItems.map((navItem) => (
                            <li
                                // fix style below - add to CSS
                                style={{ originX: 0.01 }}
                                className={styles.navItem}
                                key={navItem.title}
                            >
                                <Link href={`#${navItem.title.toLowerCase()}`}>
                                    <a
                                        className={styles.navLink}
                                        onClick={navItem.click}
                                    >
                                        {navItem.title}
                                    </a>
                                </Link>
                            </li>
                        ))}
                        <li
                            // fix style below - add to CSS
                            style={{ originX: 0.01 }}
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
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='z-10 p-1.5 fixed right-4 bottom-4 rounded-full cursor-pointer bg-blue shadow opacity-75 hover:animate-pulse transition-all duration-300 ease-in-out hover:scale-95'>
                <Link href='#' passHref>
                    <div>
                        <FaArrowUp size={24} color={'#83C5BE'} />
                    </div>
                </Link>
            </div>
        </header>
    );
}
