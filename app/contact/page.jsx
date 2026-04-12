import Link from "next/link";
import styles from '@/styles/contact.module.css';

export default function Page() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.header}>
          <header>
            <span className={styles.header}>聯絡我</span>
          </header>
        </div>

        <div className={`${styles.Links} ${styles.main}`}>
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

        <div className={styles.left}>
          <span><Link href="/" className={styles.Go}>首頁</Link></span>
          <span><Link href="/about" className={styles.Go}>關於我</Link></span>
          <span><Link href="/set" className={styles.Go}>設備配置</Link></span>
        </div>
        <div className={styles.right}>right</div>

      </div>
    </main>
  )
}