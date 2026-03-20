import styles from '@/styles/about.module.css';
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <header><span className={styles.header}>關於我</span><span><Link href="/">首頁</Link></span></header>

      <table className={`${styles.Profile_Table1} ${styles.Profile_Table_Common}`}>
        <tbody>
          <tr rowSpan="2" className={styles.Profile_Tr1}>
            <td><img src="/MyPic.jpg" className={styles.MyPic1}/></td>
            <td className={styles.NameCell}>
              <span className={styles.Name}>赤櫻櫻</span>
              <span className={styles.id}>sakura_0405</span>
            </td>
          </tr>
        </tbody>
      </table>
      
      <table className={`${styles.Profile_Table2} ${styles.Profile_Table_Common}`}>
        <tbody>
          <tr className={styles.Profile_Tr2}>
            <th>星座</th>
            <td>牧羊座</td>
          </tr>
          <tr className={styles.Profile_Tr2}>
            <th>個性</th>
            <td>瓦斯桶(炸一下就沒了)</td>
          </tr>
          <tr className={styles.Profile_Tr2}>
            <th>興趣</th>
            <td>吃好吃的，玩好玩的，睡覺，騎車</td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}