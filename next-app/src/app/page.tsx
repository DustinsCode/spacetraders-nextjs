import Head from "next/head";
import styles from "../styles/page.module.scss";

export default function Home() {
    return (
        <div className={styles.flexColumnCenter}>
            <Head>
                <title> Login | SpaceTraders 🚀⭐️</title>
            </Head>
          
            <main className={styles.content}>
              <h1>Welcome to SpaceTraders, agent.</h1>
              <div className={`${styles.login} ${styles.flexColumnCenter}`}>
                <h3>Please identify yourself:</h3>
                <input type='password' placeholder="Agent Token"></input>
              </div>
            </main>

            <footer className={styles.footer}>
               <div>
                Made with ❤️ by <a href="https://github.com/dustinscode">DustinsCode</a>
               </div>
            </footer>
        </div>
    );
}
