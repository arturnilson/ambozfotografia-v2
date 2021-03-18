import Nav from './Nav';
import Head from 'next/head'

import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Amboz Fotografia</title>
            </Head>
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout;