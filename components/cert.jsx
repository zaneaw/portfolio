import Image from "next/image";
import styles from "./cert.module.css";
import { motion } from "framer-motion";

const articleVariant = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1, staggerChildren: 1 },
    },
};

const textVariant = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1 },
    },
    hover: { scale: 1.05, translateY: "-15px" },
    tap: { scale: 0.9 },
    view: { visible: { once: true } },
};

export default function Certs() {
    const certs = [
        {
            key: "react",
            title: "Full Stack Web Development with React",
            viewCert: "/cert/react.pdf",
            image: "/images/mern.png",
            width: 1600,
            height: 900,
            alt: "MERN Stack, logos consisting of Mongo DB, React JS, Express JS, and Node JS"
        },
        {
            key: "javascript",
            title: "JavaScript Algorithms and Data Structures",
            viewCert: "/cert/JScript.jpg",
            image: "/images/js-logo.png",
            width: 1052,
            height: 1052,
            alt: "picture"
        },
        {
            key: "django",
            title: "Full Stack Django",
            viewCert: "/cert/django.pdf",
            image: "/images/djgreenbg.png",
            width: 1200,
            height: 546,
            alt: "picture"
        },
        {
            key: "python",
            title: "Scientific Computing with Python",
            viewCert: "/cert/python.png",
            image: "/images/python-logo-small.png",
            width: 1200,
            height: 1200,
            alt: "picture"
        },
    ];

    return (
        <section
            className={`${styles.section} secondaryBackground`}
            id="certificates"
        >
            <motion.h2
                className={`${styles.certificates} sectionHeader`}
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                Certificates
            </motion.h2>

            <div className={styles.articlesContainer}>
                {certs.map((cert) => {
                    return (
                        <motion.article
                            key={cert.key}
                            className={styles.article}
                            variants={articleVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            
                            {/* <motion.h4 className={styles.certTitle}>
                                {cert.title}
                            </motion.h4>  */}
                           
                            <motion.a
                                href={cert.viewCert}
                                target="_blank"
                                className={`${styles.imageContainer} ${styles.reactImage}`}
                                variants={textVariant}
                                whileHover="hover"
                                whileTap="tap"
                                viewport="view"
                            >
                                <Image
                                    src={cert.image}
                                    width={cert.width}
                                    height={cert.height}
                                    alt={cert.alt}
                                />
                            </motion.a>
                            <small className={styles.small}>
                                (click &#9757; to view details)
                            </small>
                        </motion.article>
                    );
                })}
            </div>
        </section>
    );
}
