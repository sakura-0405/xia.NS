import styles from '@/styles/main.module.css'
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '首頁', 
  robots: 'index, follow',
};

export default function Page() {
  return (

    <main className={styles.main}>
      <div className={styles.pageWrapper}>
        <header className={styles.header}>
          <h1 className={styles.MP1}>蝦咪毀</h1>
          <h2 className={styles.MP2}>What is this?</h2>
        </header>

        <nav className={styles.navStack}>
          <Link href="/about" className={`${styles.B} ${styles.B1}`}>
            關於我
          </Link>
          <Link href="/contact" className={`${styles.B} ${styles.B2}`}>
            聯絡我
          </Link>
          <Link href="/set" className={`${styles.B} ${styles.B3}`}>
            設備配置
          </Link>
        </nav>
      </div>
    </main>
  )
}