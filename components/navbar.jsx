import { useState, useEffect } from 'react';
import Link from 'next/link';

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
            setShowNav(scrollY > lastScrollY && !isNavbarOpen ? false : true);
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
    }, [isNavbarOpen]);

    const navItems = [
        { title: 'Projects' },
        { title: 'About' },
        { title: 'Certificates' },
        { title: 'Contact' },
    ];

    const toggleNavbar = () => {
        setIsNavbarOpen((isNavbarOpen) => !isNavbarOpen);
    };

    return (
        <header className={`mt-16 z-10`}>
            <nav
                className={`${
                    !showNav && '-translate-y-14'
                } w-full bg-blue-dark shadow-lg p-2 flex justify-between items-center fixed top-0 transition-all duration-200 ease-out`}
            >
                <Link href='#' passHref>
                    <svg
                        className='w-10 h-10 fill-blue-light hover:fill-red-orange md:fill-blue-light md:hover:fill-red-orange cursor-pointer transition-all duration-300 ease-out'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                        onClick={() => isNavbarOpen && setIsNavbarOpen()}
                    >
                        <path d='M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z' />
                    </svg>
                </Link>

                <button
                    className='group bg-blue-dark rounded block p-1 md:hidden'
                    onClick={toggleNavbar}
                    aria-label='toggle navigation'
                >
                    <span
                        className={`${
                            isNavbarOpen && 'translate-y-[10px] rotate-45'
                        } group-hover:bg-red-orange block w-[35px] h-[5px] bg-blue-light rounded my-[5px] mx-auto transition-all duration-300 ease-out`}
                    ></span>
                    <span
                        className={`${
                            isNavbarOpen && 'opacity-0'
                        } group-hover:bg-red-orange block w-[35px] h-[5px] bg-blue-light rounded my-[5px] mx-auto transition-all duration-300 ease-out`}
                    ></span>
                    <span
                        className={`${
                            isNavbarOpen && '-translate-y-[10px] -rotate-45'
                        } group-hover:bg-red-orange block w-[35px] h-[5px] bg-blue-light rounded my-[5px] mx-auto transition-all duration-300 ease-out`}
                    ></span>
                </button>

                <div
                    className={`z-50 text-xl min-w-2/5 divide-y-2 divide-blue border-l-2 border-b-2 border-blue fixed right-0 top-[60px] flex flex-col shadow-lg bg-blue-dark transition-all duration-300 ease-out ${
                        !isNavbarOpen && 'translate-x-full'
                    } origin-right
                            md:flex-row md:static md:translate-x-0 md:border-0 md:divide-y-0 md:gap-x-2 md:shadow-none md:text-base`}
                    onClick={() => isNavbarOpen && setIsNavbarOpen()}
                >
                    {navItems.map((navItem) => (
                        <Link
                            href={`#${navItem.title.toLowerCase()}`}
                            key={navItem.title}
                        >
                            <a className='uppercase font-medium text-blue-light tracking-widest px-6 py-2 hover:bg-blue hover:text-blue-dark md:hover:bg-blue-dark md:hover:text-red-orange transition-all duration-150 ease-in hover:cursor-pointer md:px-2'>
                                {navItem.title}
                            </a>
                        </Link>
                    ))}
                    <a
                        className='uppercase font-medium text-blue-light tracking-widest px-6 py-2 hover:bg-blue hover:text-blue-dark md:hover:bg-blue-dark md:hover:text-red-orange transition-all duration-150 ease-in hover:cursor-pointer md:px-2'
                        onClick={() => {
                            handleOpenFeedback();
                            {
                                isNavbarOpen && setIsNavbarOpen();
                            }
                        }}
                    >
                        Feedback
                    </a>
                </div>

                {isNavbarOpen && (
                    <div
                        className='absolute z-0 top-[60px] left-0 w-[100vw] h-[100vh] backdrop-blur-[2px] transition-all duration-1000 ease-out'
                        onClick={() => isNavbarOpen && setIsNavbarOpen()}
                    ></div>
                )}
            </nav>
            <Link href='#' passHref>
                <svg
                    className='fill-blue-dark border-[1px] border-blue-dark z-10 w-8 h-8 p-1.5 shadow fixed m-1 right-3 bottom-3 rounded-full cursor-pointer bg-blue opacity-60 transition-all duration-300 ease-out hover:fill-blue hover:bg-blue-dark hover:border-blue'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 384 512'
                >
                    <path d='M374.6 246.6C368.4 252.9 360.2 256 352 256s-16.38-3.125-22.62-9.375L224 141.3V448c0 17.69-14.33 31.1-31.1 31.1S160 465.7 160 448V141.3L54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160C387.1 213.9 387.1 234.1 374.6 246.6z' />
                </svg>
            </Link>
        </header>
    );
}
