import styles from '@/styles/set.module.css';
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '設備配置', 
  robots: 'index, follow',
};

export default function Page() {
  const specs = [
    { label: "處理器", value: "Intel i5-14400" },
    { label: "顯示卡", value: "MSI RTX 3070 Ti SUPRIM X 8G" },
    { label: "記憶體", value: "ADATA DDR5-6000 16GBx2 XPG Lancer Blade RGB" },
    { label: "主機板", value: "ASUS B760M-AYW wifi" },
    { label: "散熱器", value: "Thermalright Peerless Assassin 120" },
    { label: "機殼", value: "NZXT H710i" },
    { label: "硬碟1", value: "WD SSD 250GB 2.5吋" },
    { label: "硬碟2", value: "UMAX M1500 1TB M.2" },
    { label: "硬碟3", value: "Micron Crucial P3 2TB Plus M.2" },
    { label: "電源", value: "MONTECH TITAN GOLD 1000W" },
  ];

  return (
    <main className={styles.container}>
      <header className={styles.header}>設備配置</header>

      <nav className={styles.left}>
        <Link href="/" className={styles.Go}>首頁</Link>
        <Link href="/about" className={styles.Go}>關於我</Link>
        <Link href="/contact" className={styles.Go}>聯絡我</Link>
      </nav>

      <section className={styles.mainContent}>
        <div className={styles.specsCard}>
          <div className={styles.specsTitle}>計算機配置</div>
          <div className={styles.specsList}>
            {specs.map((spec, index) => (
              <div key={index} className={styles.specRow}>
                <span className={styles.specLabel}>{spec.label}</span>
                <span className={styles.specValue}>{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <aside className={styles.right}>
        <div className={styles.techStatus}>SYSTEM READY</div>
      </aside>

      <footer className={styles.footer}>
        HARDWARE ARCHITECTURE v1.0
      </footer>
    </main>
  );
}