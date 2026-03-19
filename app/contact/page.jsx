import Image from "next/image"

export default function Page() {
  return (
    <main className="main">
      <header className="header">
        蝦
      </header>

    <div className="Profile">
      <table className="profile_TB">
        <tbody>
          <tr>
            <td>
              <img src="/MyPic.jpg" className="MyPic1"/>
            </td>
            <td className="td1">
              <h1>蝦?</h1>
              <span className="Name1"><a href="https://www.instagram.com/sakura._.6896_">赤櫻櫻</a></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="Links">
      <table className="link_TB">
		    <tbody>
          <tr>
			      <td className="discord_link">
				      <strong className="DC1">Discord</strong> : <a href="https://discord.gg/WwGGnV5D3s" target="_blank" rel="noopener noreferrer"><strong className="P1">豬玀G公園 (server)</strong></a>
			        </td>
			      </tr>
			      <tr>
			        <td className="twitch_link">
			          <strong className="TC1">Twitch</strong> : <a href="https://www.twitch.tv/sakura_0405" target="_blank" rel="noopener noreferrer"><strong className="P2">sakura_0405</strong></a>
			        </td>
			      </tr>
          </tbody>
	    </table>
    </div>




    </main>
  )
}