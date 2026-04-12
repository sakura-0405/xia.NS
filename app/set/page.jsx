import styles from '@/styles/about.module.css';
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.header}>設備配置</div>

        <div className={styles.left}>
          <span><Link href="/" className={styles.Go}>首頁</Link></span>
          <span><Link href="/about" className={styles.Go}>關於我</Link></span>
          <span><Link href="/contact" className={styles.Go}>聯絡我</Link></span>
        </div>

        <div className={styles.main}>
          <table className={`${styles.Profile_Table3} ${styles.Profile_Table_Common}`}>
            <tbody>
              <tr className={styles.Profile_Tr3}>
                <th colSpan="2" className={styles.Profile_Table3_Header}>計算機配置</th>
              </tr>
              <tr className={styles.Profile_Tr3}>
                <th>處理器:</th>
                <td>i5-14400</td>
              </tr>
              <tr className={styles.Profile_Tr3}>
                <th>顯示卡:</th>
                <td>RTX 3070ti</td>
              </tr>
              <tr className={styles.Profile_Tr3}>
                <th>記憶體:</th>
                <td>DDR5-6000 16x2</td>
              </tr >
              <tr className={styles.Profile_Tr3}>
                <th>主機板:</th>
                <td>ASUS B760M-AYW wifi</td>
              </tr >
              <tr className={styles.Profile_Tr3}>
                <th>散熱器:</th>
                <td>利民 PA120</td>
              </tr >
            <tr className={styles.Profile_Tr3}>
              <th>CASE:</th>
              <td>恩傑 h710i</td>
            </tr >
            <tr className={styles.Profile_Tr3}>
              <th>硬碟1:</th>
              <td>WD 240GB 2.5吋</td>
            </tr >
            <tr className={styles.Profile_Tr3}>
              <th>硬碟2:</th>
              <td>UMAX 1TB M.2</td>
            </tr >
            <tr className={styles.Profile_Tr3}>
              <th>硬碟3:</th>
              <td>美光 2TB M.2</td>
            </tr >
        </tbody>
      </table>
        </div>

        <div className={styles.right}>right</div>
      </div>
    </main>
  )
}