import styles from '@/styles/set.module.css';
import Link from "next/link";

export default function Page() {
  const specs = [
    { label: "處理器", value: "Intel i5-14400" },
    { label: "顯示卡", value: "NVIDIA RTX 3070ti" },
    { label: "記憶體", value: "DDR5-6000 16x2" },
    { label: "主機板", value: "ASUS B760M-AYW wifi" },
    { label: "散熱器", value: "利民 PA120" },
    { label: "機殼", value: "NZXT H710i" },
    { label: "硬碟1", value: "WD 240GB 2.5吋" },
    { label: "硬碟2", value: "UMAX 1TB M.2" },
    { label: "硬碟3", value: "Micron 2TB M.2" },
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