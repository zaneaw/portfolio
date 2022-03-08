import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Projects from "../components/projects";
import Cert from "../components/cert";
import FindMe from "../components/findMe";
import Footer from "../components/footer";

export default function Home() {
    return (
        <>
            <Head>
                <title>Zane&apos;s Portfolio</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/images/heart.png" />
            </Head>
            <Navbar />
            <div className="primary-background">
                <Hero />
            </div>
            <div className="secondary-background">
                <About />
            </div>
            {/* <div className="primary-background">
                <Projects />
            </div>
            <div className="secondary-background">
                <Cert />
            </div>
            */}
            {/* <div className="primary-background">
                <FindMe />
            </div> */}
            <Footer />
        </>
    );
}
