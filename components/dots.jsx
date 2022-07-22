import { useState, useEffect } from 'react';

export default function LoadingScreen() {
    const [playAnimation, setPlayAnimation] = useState(false);

    const handleAnimationClick = () => {
        setPlayAnimation((prev) => !prev);
    };

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            if (position !== 0) {
                setPlayAnimation(true);
            } else setPlayAnimation(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className='relative w-8 h-8 mx-auto rotate-90 md:rotate-0 animate-[translateIn_800ms]'
            onClick={handleAnimationClick}
        >
            <div
                className={`h-8 w-20 absolute -left-12 ${
                    playAnimation && 'animate-spinDots'
                }`}
                onClick={handleAnimationClick}
            >
                <div
                    className={`w-8 h-8 absolute left-0 rounded-full bg-primary ${
                        playAnimation ? 'animate-onOffReverse' : 'opacity-100'
                    }`}
                    onClick={handleAnimationClick}
                ></div>
                <div
                    className='w-8 h-8 absolute right-0 rounded-full bg-primary'
                    onClick={handleAnimationClick}
                ></div>
            </div>

            <div
                className={`h-8 w-20 absolute left-0 ${
                    playAnimation && 'animate-spinDotsReverse'
                }`}
                onClick={handleAnimationClick}
            >
                <div
                    className='w-8 h-8 absolute left-0 rounded-full bg-primary'
                    onClick={handleAnimationClick}
                ></div>
                <div
                    className={`w-8 h-8 absolute right-0 rounded-full bg-primary ${
                        playAnimation && 'animate-onOff'
                    }`}
                    onClick={handleAnimationClick}
                ></div>
            </div>
        </div>
    );
}
