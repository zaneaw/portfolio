import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaHeart } from 'react-icons/fa';
import styles from './feedback.module.css';
import Confetti from 'react-confetti';

export default function Feedback({
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
        <div className='w-full flex justify-center font-monoCustom'>
            <div className='z-50 fixed top-40 w-11/12 mx-4 max-w-5xl px-4 pb-4 pt-2 rounded-lg bg-primary-dark border-2 border-primary'>
                <h4 className='text-red-orange text-2xl xs:text-3xl font-monoCustom font-semibold'>
                    Send Feedback
                </h4>
                <div
                    className='group absolute top-2 right-2 px-1 cursor-pointer'
                    onClick={handleCloseFeedback}
                >
                    <svg
                        className='w-4 fill-gray-light group-hover:fill-gray-400 transition-all duration-300 ease-out'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 320 512'
                    >
                        <path d='M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z' />
                    </svg>
                </div>

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
                        className='flex flex-col gap-2 p-1 xs:p-2 mt-6'
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className='flex flex-col'>
                            <div className='flex justify-between'>
                                <label
                                    htmlFor='rating'
                                    className={`text-lg xs:text-xl font-semibold ${errors.rating?.message ? 'text-pink-light' : 'text-primary'}`}
                                >
                                    Rating:
                                </label>
                                <div className='flex flex-row flex-nowrap'>
                                    {[...Array(5)].map((star, i) => {
                                        const ratingValue = i + 1;

                                        return (
                                            <label key={`heart_${ratingValue}`}>
                                                <input
                                                    type='radio'
                                                    {...register('rating', {
                                                        required:
                                                            'Rating required*',
                                                    })}
                                                    name='rating'
                                                    value={ratingValue}
                                                    onClick={() =>
                                                        setRating(ratingValue)
                                                    }
                                                    className='hidden'
                                                />
                                                <FaHeart
                                                    color={
                                                        ratingValue <=
                                                        (hover || rating)
                                                            ? '#6495ED'
                                                            : '#EDF6F9'
                                                    }
                                                    size={30}
                                                    name='rating'
                                                    className='cursor-pointer p-0.5 transition-all duration-300 ease-out'
                                                    onMouseEnter={() =>
                                                        setHover(ratingValue)
                                                    }
                                                    onMouseLeave={() =>
                                                        setHover()
                                                    }
                                                />
                                            </label>
                                        );
                                    })}
                                </div>
                            </div>
                            {errors.rating?.message && (
                                <p className='font-monoCustom italic text-sm text-pink-light'>
                                    {errors.rating?.message}
                                </p>
                            )}
                        </div>

                        <div className='flex flex-col'>
                            <label
                                htmlFor='name'
                                className='text-primary text-lg xs:text-xl font-semibold'
                            >
                                Name:
                            </label>
                            <input
                                id='name'
                                placeholder='Your Name'
                                name='name'
                                className={`w-full px-2 py-1 text-lg rounded-md focus:outline-none text-primary-dark font-semibold ${errors.name?.message && 'border-2 border-pink-light'}`}
                                {...register('name', {
                                    required: 'Name required*',
                                    minLength: {
                                        value: 2,
                                        message: 'Min length is 2',
                                    },
                                })}
                            />
                            {errors.name?.message && (
                                <p className='font-monoCustom italic text-sm text-pink-light'>
                                    {errors.name?.message}
                                </p>
                            )}
                        </div>

                        <div className='flex flex-col'>
                            <label
                                htmlFor='email'
                                className='text-primary text-lg xs:text-xl font-semibold'
                            >
                                Email:
                            </label>
                            <input
                                id='email'
                                placeholder='Your Email'
                                name='email'
                                className={`${styles.emailInput} ${styles.input}`}
                                {...register('email', {
                                    required: 'Email required*',
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: 'Please enter a valid email',
                                    },
                                })}
                            />
                            {errors.email?.message && (
                                <p className='font-monoCustom italic text-sm text-pink-light'>
                                    {errors.email?.message}
                                </p>
                            )}
                        </div>

                        <label
                            htmlFor='name'
                            className='text-primary text-lg xs:text-xl font-semibold'
                        >
                            Name:
                        </label>
                        <textarea
                            id='comments'
                            placeholder='Your Comments'
                            name='comments'
                            rows='4'
                            className={`${styles.commentsInput} ${styles.input}`}
                            {...register('comments', {
                                maxLength: {
                                    value: 120,
                                    message: 'Message too long. Max 120',
                                },
                            })}
                        />
                        <p className={styles.error}>
                            {errors.comments?.message}
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
            <div
                className='z-30 fixed top-0 w-[100vw] h-[100vh] backdrop-blur'
                onClick={submitSuccess ? handleCloseFeedback : undefined}
            ></div>
        </div>
    );
}
