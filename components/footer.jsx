import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from 'react-icons/fi';

/* eslint-disable @next/next/no-img-element */
export default function Footer({ handleOpenFeedback }) {
    return (
        <footer className='flex flex-col gap-y-4 font-monoCustom tracking-tight text-gray-light justify-center items-center p-4 mb-8 xs:mx-6'>
            <div className='flex flex-row flex-nowrap gap-6'>
                <a href='https://github.com/zaneaw' target='_blank' rel='noreferrer'>
                    <FiGithub size='32px' className='stroke-2 fill-transparent stroke-primary hover:stroke-pink-light transition-all duration-300 ease-out' />
                </a>
                <a href='https://www.linkedin.com/in/zaneaw/' target='_blank' rel='noreferrer'>
                    <FiLinkedin size='32px' className='stroke-2 fill-transparent stroke-primary hover:stroke-pink-light transition-all duration-300 ease-out' />
                </a>
                <a href='https://www.instagram.com/zane_ohh/' target='_blank' rel='noreferrer'>
                    <FiInstagram size='32px' className='stroke-2 fill-transparent stroke-primary hover:stroke-pink-light transition-all duration-300 ease-out' />
                </a>
                <a href='https://twitter.com/zane_ohh' target='_blank' rel='noreferrer'>
                    <FiTwitter size='32px' className='stroke-2 fill-transparent stroke-primary hover:stroke-pink-light transition-all duration-300 ease-out' />
                </a>
            </div>

            <button
                onClick={handleOpenFeedback}
                className='w-fit border-2 border-primary rounded-lg px-2 py-1 hover:bg-primary text-primary hover:text-primary-dark font-monoCustom text-lg font-semibold uppercase transition-all duration-300 ease-out'
            >
                Send Feedback
            </button>

            <a
                href='https://github.com/zaneaw/portfolio'
                target='_blank'
                rel='noreferrer'
                className='text-center text-sm xs:text-base hover:text-red-orange'
            >
                Designed and Built by Zane Wilson
            </a>
        </footer>
    );
}
