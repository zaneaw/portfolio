import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from 'react-icons/fi';
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
        { title: 'Work', link: 'work' },
        { title: 'About Me', link: 'about' },
        // { title: 'Certificates' },
        { title: 'Contact', link: 'contact' },
    ];

    const toggleNavbar = () => {
        setIsNavbarOpen((prev) => !prev);
    };

    return (
        <header className='mt-16 z-10 font-serifCustom animate-fadeIn'>
            <nav
                className={`${
                    !showNav && '-translate-y-14'
                } z-10 w-full bg-primary-dark p-2 mx-auto md:px-6 lg:px-16 flex justify-between items-center fixed top-0 transition-all duration-300 ease-out`}
            >
                <Link href='#' passHref>
                    <svg
                        className='w-10 h-10 lg:w-12 lg:h-12 fill-primary hover:fill-primary-light md:fill-primary md:hover:fill-primary-light cursor-pointer transition-all duration-300 ease-out'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                        onClick={() => isNavbarOpen && setIsNavbarOpen()}
                    >
                        <path d='M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z' />
                    </svg>
                </Link>

                <button
                    className='group bg-primary-dark rounded block p-1 md:hidden'
                    onClick={toggleNavbar}
                    aria-label='toggle navigation'
                >
                    <span
                        className={`${
                            isNavbarOpen && 'translate-y-[10px] rotate-45'
                        } group-hover:bg-primary-light block w-[35px] h-[5px] bg-primary rounded my-[5px] mx-auto transition-all duration-300 ease-out`}
                    ></span>
                    <span
                        className={`${
                            isNavbarOpen && 'opacity-0'
                        } group-hover:bg-primary-light block w-[35px] h-[5px] bg-primary rounded my-[5px] mx-auto transition-all duration-300 ease-out`}
                    ></span>
                    <span
                        className={`${
                            isNavbarOpen && '-translate-y-[10px] -rotate-45'
                        } group-hover:bg-primary-light block w-[35px] h-[5px] bg-primary rounded my-[5px] mx-auto transition-all duration-300 ease-out`}
                    ></span>
                </button>

                <div
                    className={`z-50 text-xl min-w-2/5 divide-y-2 divide-primary border-l-2 border-t-2 border-b-2 border-primary fixed right-0 top-[58px] flex flex-col shadow-lg bg-primary-dark/60 backdrop-blur-md transition-all duration-300 ease-out ${
                        !isNavbarOpen && 'translate-x-full'
                    } origin-right
                            md:flex-row md:static md:translate-x-0 md:border-0 md:divide-y-0 md:gap-x-2 md:shadow-none md:text-base`}
                    onClick={() => isNavbarOpen && setIsNavbarOpen()}
                >
                    {navItems.map((navItem) => (
                        <Link
                            href={`#${navItem.link.toLowerCase()}`}
                            key={navItem.title}
                        >
                            <a className='uppercase font-medium md:text-xl lg:font-semibold text-primary tracking-widest md:tracking-wide lg:tracking-widest px-6 py-2 hover:bg-primary hover:text-primary-dark md:hover:bg-primary-dark md:hover:text-primary-light transition-all duration-150 ease-in hover:cursor-pointer md:px-2'>
                                {navItem.title}
                            </a>
                        </Link>
                    ))}
                    <a
                        className='uppercase font-medium md:text-xl lg:font-semibold text-primary tracking-widest px-6 py-2 hover:bg-primary hover:text-primary-dark md:hover:bg-primary-dark md:hover:text-primary-light transition-all duration-150 ease-in hover:cursor-pointer md:px-2'
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
                        className='absolute z-30 top-[58px] left-0 w-[100vw] h-[100vh] backdrop-blur-[2px] transition-all duration-1000 ease-out'
                        onClick={() => isNavbarOpen && setIsNavbarOpen()}
                    ></div>
                )}
            </nav>
            <div className='hidden xs:block'>
                <Link href='#' passHref>
                    <svg
                        className='fixed right-8 lg:right-14 bottom-2 fill-primary-dark border-[1px] border-primary-dark z-10 w-8 h-8 p-1.5 rounded-full cursor-pointer bg-primary opacity-60 transition-all duration-300 ease-out hover:fill-primary hover:bg-primary-dark hover:border-primary animate-translateInUpNav'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 384 512'
                    >
                        <path d='M374.6 246.6C368.4 252.9 360.2 256 352 256s-16.38-3.125-22.62-9.375L224 141.3V448c0 17.69-14.33 31.1-31.1 31.1S160 465.7 160 448V141.3L54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160C387.1 213.9 387.1 234.1 374.6 246.6z' />
                    </svg>
                </Link>

                <div className='z-[9] fixed w-fit right-2 bottom-2 animate-translateInUpNav'>
                    <div className='relative -right-[260px] lg:-right-[236px] flex flex-row flex-nowrap w-full rotate-90 after:h-[1px] after:w-[330px] after:ml-2 after:mt-2.5 after:relative after:bg-gray-light opacity-80'>
                        <a
                            href='mail'
                            className='text-gray-light text-sm font-monoCustom tracking-widest hover:text-pink-light transition-all duration-300 ease-out'
                        >
                            wilsonzanea@gmail.com
                        </a>
                    </div>
                </div>

                <div id='test' className='z-[9] fixed w-fit left-2 lg:left-8 bottom-0 animate-translateInUpNav'>
                    <div className='relative flex flex-col w-full after:w-[1px] after:h-[76px] after:ml-2 after:-mt-1.5 after:relative after:bg-gray-light opacity-80 gap-y-4'>
                        <a href='https://github.com/zaneaw' target='_blank' rel='noreferrer'>
                            <FiGithub size='24px' className='stroke-2 fill-transparent stroke-gray-light hover:stroke-pink-light transition-all duration-300 ease-out' />
                        </a>
                        <a href='https://www.linkedin.com/in/zaneaw/' target='_blank' rel='noreferrer'>
                            <FiLinkedin size='24px' className='stroke-2 fill-transparent stroke-gray-light hover:stroke-pink-light transition-all duration-300 ease-out' />
                        </a>
                        <a href='https://www.instagram.com/zane_ohh/' target='_blank' rel='noreferrer'>
                            <FiInstagram size='24px' className='stroke-2 fill-transparent stroke-gray-light hover:stroke-pink-light transition-all duration-300 ease-out' />
                        </a>
                        <a href='https://twitter.com/zane_ohh' target='_blank' rel='noreferrer'>
                            <FiTwitter size='24px' className='stroke-2 fill-transparent stroke-gray-light hover:stroke-pink-light transition-all duration-300 ease-out' />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
