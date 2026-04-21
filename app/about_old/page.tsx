import styles from '@/styles/about_old.module.css';
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '代碼存放', 
  robots: 'noindex, nofollow',
};

export default function Page() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>關於我</header>

      <nav className={styles.left}>
        <Link href="/" className={styles.Go}>首頁</Link>
        <Link href="/contact" className={styles.Go}>聯絡我</Link>
        <Link href="/set" className={styles.Go}>設備配置</Link>
      </nav>

      <section className={styles.mainContent}>
        {/* 個人主卡片 */}
        <div className={styles.profileCard}>
          <div className={styles.picWrapper}>
            <img src="/MyPic.jpg" alt="Profile" className={styles.MyPic1}/>
          </div>
          <div className={styles.nameInfo}>
            <h1 className={styles.Name}>赤櫻櫻</h1>
            <span className={styles.id}>sakura_0405</span>
          </div>
        </div>

        {/* 詳細設定區 */}
        <div className={styles.detailsCard}>
          <div className={styles.detailTitle}>小設定</div>
          <div className={styles.detailRow}>
            <span className={styles.label}>星座</span>
            <span className={styles.value}>牡羊座</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.label}>個性</span>
            <span className={styles.value}>瓦斯桶 (炸一下就沒了)</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.label}>興趣</span>
            <span className={styles.value}>吃好吃的、玩好玩的、睡覺、騎車</span>
          </div>
        </div>
      </section>

      <aside className={styles.right}>
        <div className={styles.status}>ONLINE</div>
      </aside>

      <footer className={styles.footer}>
        © 2026 SAKURA_0405 ALL RIGHTS RESERVED.
      </footer>
    </main>
  );
}