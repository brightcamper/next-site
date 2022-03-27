import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import * as styles from '../styles/home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>brightcamper | Home</title>
        <meta name="keywords" content="projects"/>
      </Head>
      <section className={styles.header}>
          <div>
            <h2>Software</h2>
            <h3>Design</h3>
            <p>A software and design studio</p>
            <Link href="/projects"><a className={styles.btn}>My Portfolio Projects</a></Link>
          </div>
          <Image
            src="/banner.png"
            alt="banner"
            width="100%"
            height="100%"
            layout='responsive'
            objectFit='contain'
          />
      </section>
    </>
  )
}