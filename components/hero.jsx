import Dots from '../components/dots';

export default function Hero() {
    return (
        <section className='font-monoCustom text-lg pt-[10vh] flex flex-col gap-[5vh] min-h-[100vh]'>
            {/* Keep div below to make animation translateIn work properly */}
            <div className='-z-10 w-[1px] h-[1px] bg-transparent animate-[translateIn_1000ms] -mb-[5vh]'></div>
            <div className='text-gray-light text-2xl animate-[fadeIn_1000ms]'>
                <p className='pb-2'>Hello, I&apos;m</p>
                <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-light relative inline-block -z-10'>
                    <span className='relative text-primary-dark font-bold text-4xl'>
                        Zane Wilson
                    </span>
                </span>
                <p className='pt-2'>and I build things for the web.</p>
            </div>

            <div className='font-serifCustom max-w-lg animate-[fadeIn_1000ms] animate-[translateIn_1000ms]'>
                <p className='text-base text-gray-light'>
                    I&apos;m a software engineer specializing in building
                    exceptional digital experiences. Currently, I&apos;m focused
                    on developing and updating user experiences and interfaces
                    for&nbsp;
                    <a
                        href='https://share-a-cart.com/'
                        className='group font-monoCustom font-semibold text-pink-light transition-all duration-300 ease-in-out'
                    >
                        <span className='bg-left-bottom bg-gradient-to-r from-pink-light to-pink-light bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                            Share-a-Cart.com
                        </span>
                        <span className='text-gray-light'>.</span>
                    </a>
                    &nbsp;I am in the market for new opportunities!
                </p>
            </div>

            <div className='flex flex-col gap-y-4 gap-x-6 mb-12 justify-center items-center self-center w-full sm:flex-row min-w-fit max-w-3xl text-lg font-semibold animate-[fadeIn_1000ms] animate-[translateIn_1000ms]'>
                <a
                    className='group flex flex-row flex-nowrap w-full justify-center gap-2 border-2 border-primary rounded-xl p-2 hover:bg-primary transition-all duration-300 ease-out'
                    href="mailto:wilsonzanea@gmail.com?subject=Contacting%20You&body=Hi%20Zane!%20I'd%20like%20to%20hire%20you%20:)"
                    target='_blank'
                    rel='noreferrer'
                >
                    <span className='text-primary group-hover:text-primary-dark transition-all duration-300 ease-out'>
                        Email Me
                    </span>
                    <svg
                        className='w-6 fill-primary group-hover:fill-primary-dark transition-all duration-300 ease-out'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                    >
                        <path d='M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z' />
                    </svg>
                </a>
                <a
                    className='group flex flex-row flex-nowrap w-full justify-center gap-2 border-2 border-primary rounded-xl p-2 hover:bg-primary transition-all duration-300 ease-out'
                    href='/downloads/zanescv.pdf'
                    download='ZanesCV'
                >
                    <span className='text-primary group-hover:text-primary-dark transition-all duration-300 ease-out'>Download CV</span>
                    <svg
                        className='w-6 fill-primary group-hover:fill-primary-dark transition-all duration-300 ease-out'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                    >
                        <path d='M480 352h-133.5l-45.25 45.25C289.2 409.3 273.1 416 256 416s-33.16-6.656-45.25-18.75L165.5 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96C512 366.3 497.7 352 480 352zM432 456c-13.2 0-24-10.8-24-24c0-13.2 10.8-24 24-24s24 10.8 24 24C456 445.2 445.2 456 432 456zM233.4 374.6C239.6 380.9 247.8 384 256 384s16.38-3.125 22.62-9.375l128-128c12.49-12.5 12.49-32.75 0-45.25c-12.5-12.5-32.76-12.5-45.25 0L288 274.8V32c0-17.67-14.33-32-32-32C238.3 0 224 14.33 224 32v242.8L150.6 201.4c-12.49-12.5-32.75-12.5-45.25 0c-12.49 12.5-12.49 32.75 0 45.25L233.4 374.6z' />
                    </svg>
                </a>
            </div>
            <div className='animate-[fadeIn_1000ms] animate-[translateIn_1000ms]'>
                <Dots />
            </div>
        </section>
    );
}
