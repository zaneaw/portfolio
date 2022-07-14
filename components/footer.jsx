import styles from './footer.module.css';

export default function Footer(props) {
    return (
        <div className={styles.footer}>
            <span>&copy; 2022 Zane Wilson</span>
            <a href='#' className={styles.top}>
                &uarr; Back to Top &uarr;
            </a>
            <button
                type='button'
                onClick={props.handleOpenFeedback}
                className={styles.feedbackButton}
            >
                Send Feedback
            </button>
        </div>
    );
}
