import Image from 'next/image';
import styles from './cert.module.css';

export default function Certs() {
    const certs = [
        {
            key: 'react',
            title: 'Full Stack Web Development with React',
            viewCert: '/cert/react.pdf',
            image: '/images/mern.png',
            width: 1600,
            height: 900,
            alt: 'MERN Stack, logos consisting of Mongo DB, React JS, Express JS, and Node JS',
        },
        {
            key: 'javascript',
            title: 'JavaScript Algorithms and Data Structures',
            viewCert: '/cert/JScript.jpg',
            image: '/images/js-logo.png',
            width: 1052,
            height: 1052,
            alt: 'yellow JavaScript logo',
        },
        {
            key: 'django',
            title: 'Full Stack Django',
            viewCert: '/cert/django.pdf',
            image: '/images/djgreenbg.png',
            width: 1200,
            height: 546,
            alt: 'green Django logo',
        },
        {
            key: 'python',
            title: 'Scientific Computing with Python',
            viewCert: '/cert/python.png',
            image: '/images/python-logo-small.png',
            width: 1200,
            height: 1200,
            alt: 'Python programming language logo',
        },
    ];

    return (
        <section
            className='z-0 mt-20 rounded-lg text-gray-light flex flex-col gap-y-8 justify-center items-center'
            id='certificates'
        >
            <h2 className='text-primary text-4xl font-rampart mt-2'>
                Education
            </h2>
            <div className=''>
                {certs.map((cert) => {
                    return (
                        <article key={cert.key} className={styles.article}>
                            {/* <h4 className={styles.certTitle}>
                                {cert.title}
                            </h4>  */}

                            <a
                                href={cert.viewCert}
                                target='_blank'
                                rel='noreferrer'
                                className={`${styles.imageContainer} ${styles.reactImage}`}
                            >
                                <Image
                                    src={cert.image}
                                    width={cert.width}
                                    height={cert.height}
                                    alt={cert.alt}
                                />
                            </a>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
