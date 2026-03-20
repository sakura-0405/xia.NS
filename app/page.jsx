import styles from '@/styles/main.module.css'
import Link from "next/link";

export default function Page() {
  return (
  <main className={styles.main}>
    <div className={styles.pageWrapper}>
        <h1 className={styles.MP1}>歡迎</h1>
        <h2 className={styles.MP2}>welcome</h2>

      <table className={styles.P_TB}>
        <tbody>
        <tr>
          <td className={styles.P_td1}>
            <Link href = "/about">關於我</Link>
          </td>
        </tr>
        <tr>
          <td className={styles.P_td2}>
            <Link href = "/contact">聯絡我</Link>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </main>
  )
}