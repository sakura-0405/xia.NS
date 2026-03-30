import Link from "next/link";
import styles from '@/styles/contact.module.css';

export default function Page() {
  return (
    <main className="main">
    <header>
      <span className={styles.header}>聯絡我</span>

      <span className={styles.Go_Main1}>
      <Link className={`${styles.Go_Main2} ${styles.Links}`} href="/">首頁</Link>

      </span>
    </header>
    <div className={styles.Links}>
      <table className={styles.link_TB}>
		    <tbody>
          <tr>
			      <td className={styles.link_TD}>
              <strong className={styles.discord}>Discord : </strong>
              <Link href="https://discord.gg/PrabXwZtQY" className={`${styles.discord_link} ${styles.Links}`}>豬玀G公園 </Link>
			      </td>
			    </tr>
			    <tr>
			      <td className={styles.link_TD}>
              <strong className={styles.twitch}>Twitch : </strong>
              <Link href="https://www.twitch.tv/sakura_0405" className={`${styles.twitch_link} ${styles.Links}`}>sakura_0405</Link>
			      </td>
			    </tr>
          <tr>
			      <td className={styles.link_TD}>
              <strong className={styles.instagram}>instagram : </strong>
              <Link href="https://www.instagram.com/sakura._.6896_/" className={`${styles.instagram_link} ${styles.Links}`}>sakura._.6896_</Link>
			      </td>
			    </tr>
        </tbody>
	    </table>
    </div>
    </main>
  )
}