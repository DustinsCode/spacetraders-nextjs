import Head from "next/head";
import styles from "../styles/page.module.scss";
import Login from "../components/login";
import Register from "../components/register";

export default function Home() {
    return (
        <div className={styles.flexColumnCenter}>
            <Head>
                <title> Login | SpaceTraders 🚀⭐️</title>
            </Head>

            <main className={styles.content}>
                <h1>Welcome to SpaceTraders, agent.</h1>
                <Login></Login>
                {/* <Register></Register> */}
            </main>

            <footer className={styles.footer}>
                <div>
                    Made with ❤️ by{" "}
                    <a href="https://github.com/dustinscode">DustinsCode</a>
                </div>
            </footer>
        </div>
    );
}
