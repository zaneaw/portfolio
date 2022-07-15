import Image from 'next/image';
import styles from './hero.module.css';
import { FaTelegramPlane, FaDownload } from 'react-icons/fa';

export default function Hero() {
    return (
        <div className='primaryBackground'>
            <div className='bgi'>
                <section className={styles.grid}>
                    <h2 className={styles.hello}>
                        Hello! I&apos;m Zane, Software Engineer
                    </h2>
                    <h4 className={styles.detail}>
                        Meticulous, detail-oriented and self-motivated{' '}
                        <span className={styles.show}>
                            - My professional experience as a top-producing real
                            estate broker in NYC translates seamlessly into
                            being a great software engineer!
                        </span>
                    </h4>
                    <div className={styles.buttonsContainer}>
                        <a
                            className={`${styles.contact} ${styles.buttons}`}
                            href="mailto:wilsonzanea@gmail.com?subject=Contacting%20You&body=I'd%20like%20to%20hire%20YOU!"
                            target='_blank'
                            rel='noreferrer'
                        >
                            Contact Me <FaTelegramPlane />
                        </a>
                        <a
                            className={`${styles.download} ${styles.buttons}`}
                            href='/downloads/zanescv.pdf'
                            download='ZanesCV'
                        >
                            Download CV <FaDownload />
                        </a>
                    </div>
                    <div className={styles.image}>
                        {/* <Image
                            src='/images/hero-image.svg'
                            height='400px'
                            width='600px'
                            alt='image of a cartoon sitting on a computer desk with a computer next to them.'
                        /> */}
                    </div>
                </section>
            </div>
        </div>
    );
}
