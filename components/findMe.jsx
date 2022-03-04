import Image from "next/image";
import styles from "./findMe.module.css";
import { FaGithub } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";

export default function ContactMe() {
    return (
        <section className={styles.grid}>
            <h2 className={styles.findMe}>Find Me</h2>
            <div className={`${styles.bubble} ${styles.githubBubble}`}>
                <FaGithub className={`${styles.icon} ${styles.githubIcon}`} />
            </div>
            <div className={`${styles.bubble} ${styles.emailBubble}`}>
                <ImMail4 className={`${styles.icon} ${styles.emailIcon}`} />
            </div>
        </section>
    );
}
