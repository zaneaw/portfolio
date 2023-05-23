import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Confetti from 'react-confetti';

export default function Feedback({
  isFeedbackOpen,
  handleCloseFeedback,
  fadeOutFeedback,
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
    <div
      className={`h-fit w-screen flex justify-center items-center font-monoCustom ${
        isFeedbackOpen ? 'animate-[fadeIn_300ms]' : 'hidden'
      } ${fadeOutFeedback && 'animate-[fadeOut_500ms]'}`}
    >
      {submitSuccess && (
        <div className='fixed top-0 left-0 z-50'>
          <Confetti />
        </div>
      )}
      <div
        className='z-20 fixed top-0 left-0 w-screen h-screen backdrop-blur'
        onClick={submitSuccess ? handleCloseFeedback : undefined}
      ></div>
      <div className='overflow-y-auto z-50 fixed top-[10%] w-11/12 max-w-5xl h-fit max-h-[80%] mx-4 px-4 pb-4 pt-2 rounded-lg bg-primary-dark border-2 border-primary'>
        <h4 className='text-red-orange text-2xl xs:text-3xl font-monoCustom font-semibold'>
          Send Feedback
        </h4>
        <div
          className='group absolute top-2 right-2 px-1 cursor-pointer'
          onClick={handleCloseFeedback}
        >
          <svg
            className='w-4 fill-primary group-hover:fill-primary-light transition-all duration-300 ease-out'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 320 512'
          >
            <path d='M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z' />
          </svg>
        </div>

        {submitSuccess && (
          <div className='text-gray-light'>
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
                  className='text-primary text-lg xs:text-xl font-semibold'
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
                            required: 'Rating required*',
                          })}
                          name='rating'
                          value={ratingValue}
                          onClick={() => setRating(ratingValue)}
                          className='hidden'
                        />
                        <svg
                          className={`w-8 cursor-pointer p-0.5 transition-all duration-300 ease-out ${
                            ratingValue <= (hover || rating)
                              ? 'fill-primary'
                              : 'fill-off-white'
                          }`}
                          name='rating'
                          onMouseEnter={() => setHover(ratingValue)}
                          onMouseLeave={() => setHover()}
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 512 512'
                        >
                          <path d='M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z' />
                        </svg>
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
                className='text-primary text-lg xs:text-xl font-semibold w-fit'
              >
                Name:
              </label>
              <input
                id='name'
                placeholder='Your Name'
                name='name'
                className={`w-full px-2 py-1 text-lg rounded-md text-primary-dark font-semibold focus-visible:outline-primary outline outline-offset-0 outline-[3px] ${
                  errors.name?.message && 'border-2 border-pink-light'
                }`}
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
                className='text-primary text-lg xs:text-xl font-semibold w-fit'
              >
                Email:
              </label>
              <input
                id='email'
                placeholder='Your Email'
                name='email'
                className={`w-full px-2 py-1 text-lg rounded-md text-primary-dark font-semibold focus-visible:outline-primary outline outline-offset-0 outline-[3px] ${
                  errors.email?.message && 'border-2 border-pink-light'
                }`}
                {...register('email', {
                  required: 'Email required*',
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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

            <div className='flex flex-col'>
              <label
                htmlFor='comments'
                className='text-primary text-lg xs:text-xl font-semibold w-fit'
              >
                Comments:
              </label>
              <textarea
                id='comments'
                placeholder='Your Comments'
                name='comments'
                rows='4'
                className={`w-full px-2 py-1 text-lg rounded-md text-primary-dark font-semibold focus-visible:outline-primary outline outline-offset-0 outline-[3px] ${
                  errors.comments?.message && 'border-2 border-pink-light'
                }`}
                {...register('comments', {
                  maxLength: {
                    value: 120,
                    message: 'Message too long. Max 120 characters',
                  },
                })}
              />
              {errors.comments?.message && (
                <p className='font-monoCustom italic text-sm text-pink-light'>
                  {errors.comments?.message}
                </p>
              )}
            </div>

            <div className='mt-4 flex flex-row justify-between gap-2'>
              <button
                className='grow-0 border-2 font-semibold border-primary text-primary hover:bg-primary hover:text-primary-dark rounded-lg px-4 py-2 transition-all duration-300 ease-out'
                type='button'
                onClick={handleCloseFeedback}
              >
                Cancel
              </button>
              <button
                className='grow border-2 font-semibold border-red-orange text-primary-dark bg-red-orange hover:bg-primary-dark hover:text-red-orange rounded-lg px-4 py-2 transition-all duration-300 ease-out'
                type='submit'
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
