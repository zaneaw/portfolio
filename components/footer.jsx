import Feedback from "./feedback";
import styles from "./footer.module.css";
import { motion } from "framer-motion";

export default function Footer(props) {
    return (
        <div className={styles.footer}>
            <span>&copy; 2022 Zane Wilson</span>
            <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className={styles.top}
            >
                &uarr; Back to Top &uarr;
            </motion.a>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variant="outlined"
                type="button"
                onClick={props.handleOpenFeedback}
                className={styles.feedbackButton}
            >
                Send Feedback
            </motion.button>
            <Feedback
                open={props.isFeedbackOpen}
                handleClose={props.handleCloseFeedback}
            />
        </div>
    );
}
