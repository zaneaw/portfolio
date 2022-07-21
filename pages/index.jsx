import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import About from '../components/about';
import Projects from '../components/projects';
import Cert from '../components/cert';
import FindMe from '../components/findMe';
import Footer from '../components/footer';
import Feedback from '../components/feedback';

export default function Home() {
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleOpenFeedback = () => {
        setIsFeedbackOpen(true);
    };

    const handleCloseFeedback = () => {
        setIsFeedbackOpen(false);
        setSubmitSuccess(false);
    };

    return (
        <>
            <Head>
                <title>Zane&apos;s Portfolio</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <link rel='icon' href='/images/heart.png' />
            </Head>
            <Navbar 
                handleOpenFeedback={handleOpenFeedback}
            />
            <div className='z-0 px-4 sm:px-8 md:px-16 lg:px-40 overflow-hidden font-serifCustom tracking-wide'>
                <Hero />
                <Projects />
                <About />
                {/* <Cert /> */}
                <FindMe />
            </div>
            <Footer 
                handleOpenFeedback={handleOpenFeedback}
            />
            {isFeedbackOpen && (
                <Feedback
                    handleCloseFeedback={handleCloseFeedback}
                    submitSuccess={submitSuccess}
                    setSubmitSuccess={setSubmitSuccess}
                />
            )}
        </>
    );
}
