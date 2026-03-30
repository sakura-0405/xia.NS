import styles from '@/styles/about.module.css';
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <header><span className={styles.header}>關於我</span><span><Link href="/" className={styles.Go_Main}>首頁</Link></span></header>

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
            <th colSpan="2">小設定</th>
          </tr>
          <tr className={styles.Profile_Tr2}>
            <th>星座:</th>
            <td>牧羊座</td>
          </tr>
          <tr className={styles.Profile_Tr2}>
            <th>個性:</th>
            <td>瓦斯桶(炸一下就沒了)</td>
          </tr>
          <tr className={styles.Profile_Tr2}>
            <th>興趣:</th>
            <td>吃好吃的，玩好玩的，睡覺，騎車</td>
          </tr>
        </tbody>
      </table>

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


    </main>
  )
}