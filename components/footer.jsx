import Feedback from "./feedback";
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <span>&copy; 2022 Zane Wilson</span>
            <a href="#" className={styles.top}>
                &uarr; Back to Top &uarr;
            </a>
            <Feedback />
        </div>
    );
}
