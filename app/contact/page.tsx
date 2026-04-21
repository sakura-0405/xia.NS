import Link from "next/link";
import styles from '@/styles/contact.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '聯絡我', 
  robots: 'index, follow',
};

export default function Page() {
  return (
    <main className={styles.container}>
      {/* 修正：移除多餘的層次，直接使用 header */}
      <header className={styles.header}>聯絡我</header>

      <nav className={styles.left}>
        <Link href="/" className={styles.Go}>首頁</Link>
        <Link href="/about" className={styles.Go}>關於我</Link>
        <Link href="/set" className={styles.Go}>設備配置</Link>
      </nav>

      <section className={styles.mainContent}>
        <div className={styles.linkStack}>
          {/* Discord */}
          <Link href="https://discord.gg/PrabXwZtQY" target="_blank" rel="noopener noreferrer" className={`${styles.linkCard} ${styles.discordCard}`}>
            <span className={styles.platform}>Discord</span>
            <span className={styles.username}>豬玀G公園</span>
          </Link>

          {/* Twitch */}
          <Link href="https://www.twitch.tv/sakura_0405" target="_blank" rel="noopener noreferrer" className={`${styles.linkCard} ${styles.twitchCard}`}>
            <span className={styles.platform}>Twitch</span>
            <span className={styles.username}>sakura_0405</span>
          </Link>

          {/* Instagram */}
          <Link href="https://www.instagram.com/sakura._.6896_/" target="_blank" rel="noopener noreferrer" className={`${styles.linkCard} ${styles.instagramCard}`}>
            <span className={styles.platform}>Instagram</span>
            <span className={styles.username}>sakura._.6896_</span>
          </Link>
        </div>
      </section>

      <aside className={styles.right}>
        <div className={styles.contactIcon}>@</div>
      </aside>

      <footer className={styles.footer}>
        LET'S CONNECT
      </footer>
    </main>
  );
}