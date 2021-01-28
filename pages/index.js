import Head from 'next/head'

import Bio from '../components/bio.tsx'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Natours</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Natours website
        </h1>
        <Bio />
      </main>

      <footer className={styles.footer}>
       footer 
      </footer>
    </div>
  )
}
