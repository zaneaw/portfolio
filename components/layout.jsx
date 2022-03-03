import Head from "next/head";
import styles from "./layout.module.css";

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/images/heart.png" />
                <meta name="description" content="Zane's Portfolio Website." />
            </Head>
            <main>{children}</main>
        </div>
    );
}
