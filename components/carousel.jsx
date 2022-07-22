import useEmblaCarousel from 'embla-carousel-react';

export const EmblaCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

    return (
        <div className='embla overflow-hidden' ref={emblaRef}>
            <div className='embla__container flex'>
                <div className='embla__slide relative flex-[0_0_100%]'>
                    Slide 1
                </div>
                <div className='embla__slide'>Slide 2</div>
                <div className='embla__slide'>Slide 3</div>
            </div>
        </div>
    );
};
