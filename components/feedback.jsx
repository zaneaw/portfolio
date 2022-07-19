import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaHeart } from 'react-icons/fa';
import styles from './feedback.module.css';
import Confetti from 'react-confetti';

export default function Feedback({
    isFeedbackOpen,
    handleCloseFeedback,
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
        data.createdOn = new Date().toISOString().split('T')[0];

        fetch('/api/createFeedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data }),
        })
            .then((res) => res.json())

            .catch((err) => {
                console.error('Error: ', err);
            });
        setSubmitSuccess(true);
        reset();
        setRating(null);
    };

    return (
        <div>
            {isFeedbackOpen && (
                <div
                    className={styles.backdrop}
                    onClick={submitSuccess ? handleCloseFeedback : undefined}
                >
                    <div className={styles.modal}>
                        <h4 className={styles.modalTitle}>
                            Send Feedback{' '}
                            <button
                                className={styles.close}
                                type='button'
                                onClick={handleCloseFeedback}
                            >
                                &times;
                            </button>
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
                                        htmlFor='rating'
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
                                                        type='radio'
                                                        {...register('rating', {
                                                            required:
                                                                'Rating required',
                                                        })}
                                                        name='rating'
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
                                                                ? '#c97064'
                                                                : '#e4e5e9'
                                                        }
                                                        size={30}
                                                        name='rating'
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
                                <textarea
                                    id='comments'
                                    placeholder='Your Comments'
                                    name='comments'
                                    rows='4'
                                    className={`${styles.commentsInput} ${styles.input}`}
                                    {...register('comments', {
                                        maxLength: {
                                            value: 120,
                                            message:
                                                'Message too long. Max 120',
                                        },
                                    })}
                                />
                                <p className={styles.error}>
                                    {errors.comments?.message}
                                </p>
                                <input
                                    id='email'
                                    placeholder='Your Email'
                                    name='email'
                                    className={`${styles.emailInput} ${styles.input}`}
                                    {...register('email', {
                                        required: 'Email required',
                                        pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message:
                                                'Please enter a valid email',
                                        },
                                    })}
                                />
                                <p className={styles.error}>
                                    {errors.email?.message}
                                </p>
                                <input
                                    id='name'
                                    placeholder='Your Name'
                                    name='name'
                                    className={`${styles.nameInput} ${styles.input}`}
                                    {...register('name', {
                                        required: 'Name required',
                                        minLength: {
                                            value: 2,
                                            message: 'Min length is 2',
                                        },
                                    })}
                                />
                                <p className={styles.error}>
                                    {errors.name?.message}
                                </p>
                                <div className={styles.buttonContainer}>
                                    <button
                                        className={`${styles.cancelButton} ${styles.formButton}`}
                                        type='button'
                                        onClick={handleCloseFeedback}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className={`${styles.submitButton} ${styles.formButton}`}
                                        type='submit'
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
