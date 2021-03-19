import Nav from './NavigationBar';
import Footer from './Footer';
import Head from 'next/head'

import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Amboz Fotografia</title>
            </Head>
            <header>
                <Nav />
            </header>
            <main className={styles.main}>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Layout;