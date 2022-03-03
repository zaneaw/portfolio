import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from "./carousel.module.css";
import Image from "next/image";

export const EmblaCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
        Autoplay(),
    ]);

    const options = { delay: 5000 };
    const autoplay = Autoplay(options);

    useEffect(() => {
        if (emblaApi) {
            // Embla API is ready
        }
    }, [emblaApi]);

    return (
        <div className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__container}>
                <div className={styles.embla__slide}>
                    <Image
                        src="/images/theo.jpg"
                        height="250px"
                        width="250px"
                        alt=""
                    />
                </div>
                <div className={styles.embla__slide}>
                    <Image
                        src="/images/cooking.jpg"
                        height="250px"
                        width="250px"
                        alt=""
                    />
                </div>
                <div className={styles.embla__slide}>
                    <Image
                        src="/images/park.jpg"
                        height="250px"
                        width="250px"
                        alt=""
                    />
                </div>
                <div className={styles.embla__slide}>
                    <Image
                        src="/images/nyc.jpg"
                        height="250px"
                        width="250px"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};
