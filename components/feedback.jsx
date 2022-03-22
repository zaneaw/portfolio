import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaHeart } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./feedback.module.css";
import Confetti from "react-confetti";

const backdropVariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
};

export default function Feedback({
    open,
    handleClose,
    submitSuccess,
    setSubmitSuccess,
}) {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [submitValue, setSubmitValue] = useState();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data, e) => {
        setSubmitValue(data);
        data.createdOn = new Date().toISOString().split("T")[0];

        console.log(data);

        fetch("/api/createFeedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ data }),
        })
            .then((res) => res.json())

            .catch((err) => {
                console.error("Error: ", err);
            });
        setSubmitSuccess(true);
        reset();
        setRating(null);
    };

    console.log(errors);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className={styles.backdrop}
                    variants={backdropVariant}
                    animate="visible"
                    initial="hidden"
                    onClick={submitSuccess ? handleClose : undefined}
                >
                    <motion.div className={styles.modal}>
                        <h4 className={styles.modalTitle}>
                            Send Feedback{" "}
                            <motion.button
                                className={styles.close}
                                type="button"
                                onClick={handleClose}
                            >
                                &times;
                            </motion.button>
                        </h4>
                        {submitSuccess && (
                            <div>
                                <Confetti />
                                <p>Submission Successful!</p>

                                <strong> Thank you!</strong>
                                <br />

                                <small>Click anywhere to exit</small>
                            </div>
                        )}
                        {!submitSuccess && (
                            <form
                                className={styles.form}
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <div className={styles.ratingContainer}>
                                    <label
                                        htmlFor="rating"
                                        className={styles.ratingLabel}
                                    >
                                        Rating:
                                    </label>
                                    <div className={styles.starContainer}>
                                        {[...Array(5)].map((star, i) => {
                                            const ratingValue = i + 1;

                                            return (
                                                <label
                                                    key={`heart_${ratingValue}`}
                                                >
                                                    <input
                                                        type="radio"
                                                        {...register("rating", {
                                                            required:
                                                                "Rating required",
                                                        })}
                                                        name="rating"
                                                        value={ratingValue}
                                                        onClick={() =>
                                                            setRating(
                                                                ratingValue
                                                            )
                                                        }
                                                        className={styles.radio}
                                                    />
                                                    <FaHeart
                                                        color={
                                                            ratingValue <=
                                                            (hover || rating)
                                                                ? "#c97064"
                                                                : "#e4e5e9"
                                                        }
                                                        size={30}
                                                        name="rating"
                                                        className={styles.star}
                                                        onMouseEnter={() =>
                                                            setHover(
                                                                ratingValue
                                                            )
                                                        }
                                                        onMouseLeave={() =>
                                                            setHover()
                                                        }
                                                    />
                                                </label>
                                            );
                                        })}
                                    </div>
                                    <p
                                        className={`${styles.error} ${styles.ratingError}`}
                                    >
                                        {errors.rating?.message}
                                    </p>
                                </div>
                                <br />
                                <motion.textarea
                                    whileHover={{ scale: 1.05 }}
                                    whileFocus={{ scale: 1.05 }}
                                    id="comments"
                                    placeholder="Your Comments"
                                    name="comments"
                                    rows="4"
                                    className={`${styles.commentsInput} ${styles.input}`}
                                    {...register("comments", {
                                        maxLength: {
                                            value: 120,
                                            message:
                                                "Message too long. Max 120",
                                        },
                                    })}
                                />
                                <p className={styles.error}>
                                    {errors.comments?.message}
                                </p>
                                <motion.input
                                    whileHover={{ scale: 1.05 }}
                                    whileFocus={{ scale: 1.05 }}
                                    id="email"
                                    placeholder="Your Email"
                                    name="email"
                                    className={`${styles.emailInput} ${styles.input}`}
                                    {...register("email", {
                                        required: "Email required",
                                        pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message:
                                                "Please enter a valid email",
                                        },
                                    })}
                                />
                                <p className={styles.error}>
                                    {errors.email?.message}
                                </p>
                                <motion.input
                                    whileHover={{ scale: 1.05 }}
                                    whileFocus={{ scale: 1.05 }}
                                    id="name"
                                    placeholder="Your Name"
                                    name="name"
                                    className={`${styles.nameInput} ${styles.input}`}
                                    {...register("name", {
                                        required: "Name required",
                                        minLength: {
                                            value: 2,
                                            message: "Min length is 2",
                                        },
                                    })}
                                />
                                <p className={styles.error}>
                                    {errors.name?.message}
                                </p>
                                <div className={styles.buttonContainer}>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`${styles.cancelButton} ${styles.formButton}`}
                                        type="button"
                                        onClick={handleClose}
                                    >
                                        Cancel
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`${styles.submitButton} ${styles.formButton}`}
                                        type="submit"
                                    >
                                        Submit
                                    </motion.button>
                                </div>
                            </form>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
