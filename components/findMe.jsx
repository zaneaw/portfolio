export default function ContactMe() {
    return (
        <section
            className='z-0 flex flex-col gap-y-8 justify-center items-center my-40'
            id='contact'
        >
            <h2 className='text-primary text-5xl font-rampart mt-2 text-center'>
                Contact Me
            </h2>
            <p className='text-gray-light font-serifCustom tracking-wide text-center max-w-[520px]'>
                I&apos;m actively searching for more a permament position and
                my&nbsp;
                <a
                    className='group text-pink-light transition-all duration-300 ease-in-out'
                    href="mailto:wilsonzanea@gmail.com?subject=Contacting%20You&body=Hi%20Zane!%20I'd%20like%20to%20hire%20you%20:)"
                    target='_blank'
                    rel='noreferrer'
                >
                    <span className='font-monoCustom bg-left-bottom bg-gradient-to-r from-pink-light to-pink-light bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                        inbox is open
                    </span>
                </a>
                ! Whether you have a question, some feedback or just want to say
                hi, I&apos;ll try my best to get back to you!
            </p>

            <a
                className='w-full max-w-[200px] text-center border-2 border-pink-light rounded-xl p-2 hover:bg-pink-light text-pink-light hover:text-primary-dark font-monoCustom text-lg font-semibold uppercase transition-all duration-300 ease-out'
                href="mailto:wilsonzanea@gmail.com?subject=Contacting%20You&body=Hi%20Zane!%20I'd%20like%20to%20hire%20you%20:)"
                target='_blank'
                rel='noreferrer'
            >
                Email Me
            </a>
        </section>
    );
}
