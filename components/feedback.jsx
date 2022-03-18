import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaHeart } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./feedback.module.css";

const backdropVariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
};

const onSubmit = (values, { resetForm }) => {
    values.createdOn = new Date().toISOString().split("T")[0];
    fetch("/api/createFeedback", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ values }),
    })
        .then((res) => res.json())
        .catch((err) => {
            console.error("Error: ", err);
        });
    resetForm();
};

export default function Feedback({ open, handleClose }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <AnimatePresence exitBeforeEnter>
            {open && (
                <motion.div
                    className={styles.backdrop}
                    variants={backdropVariant}
                    animate="visible"
                    initial="hidden"
                >
                    <motion.div className={styles.modal}>
                        <p className={styles.modalTitle}>
                            Send Feedback{" "}
                            <motion.button className={styles.close} type="button" onClick={handleClose} />
                        </p>
                        <form
                            className={styles.form}
                            onSubmit={handleSubmit((data) => {
                                console.log(data);
                            })}
                        >
                            <label htmlFor="rating">Rating:</label>
                            {[...Array(5)].map((star, i) => {
                                const ratingValue = i + 1;

                                return (
                                    <label key={`heart_${ratingValue}`}>
                                        <input
                                            type="radio"
                                            {...register("rating", {
                                                required: "this is required!",
                                            })}
                                            value={ratingValue}
                                            onClick={() =>
                                                setRating(ratingValue)
                                            }
                                            className={styles.radio}
                                        />
                                        <FaHeart
                                            color={
                                                ratingValue <= (hover || rating)
                                                    ? "#ff0800"
                                                    : "#e4e5e9"
                                            }
                                            size={20}
                                            className={styles.star}
                                            onMouseEnter={() =>
                                                setHover(ratingValue)
                                            }
                                            onMouseLeave={() => setHover()}
                                            value={ratingValue}
                                        />
                                    </label>
                                );
                            })}
                            <br />
                            <label htmlFor="comments">Comments</label>
                            <input
                                id="comments"
                                {...register("comments", {
                                    required: "this is required!",
                                })}
                            />
                            <p>{errors.comments?.message}</p>
                            <label htmlFor="email">Email</label>
                            <input id="email" {...register("email")} />
                            <p>{errors.email?.message}</p>
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                {...register("name", {
                                    required: "this is required!",
                                    minLength: {
                                        value: 4,
                                        message: "Min length is 4",
                                    },
                                })}
                            />
                            <p>{errors.name?.message}</p>
                            <button type="button" onClick={handleClose}>
                                Cancel
                            </button>
                            <button type="submit">Submit</button>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
