import Image from "next/image"
import Link from "next/link";

export default function Page() {
  return (
    <main className="main">

      <h1 className="MP1">歡迎光臨</h1>
      <h2 className="MP2">welcome</h2>

    <table className="P_TB" border={1}>
      <tbody>
      <tr>
        <td className="P_td1">
          <Link href = "/about">關於我</Link>
        </td>
      </tr>
      <tr>
        <td className="P_td2">
          <Link href = "/contact">聯絡我</Link>
        </td>
      </tr>
      </tbody>
    </table>
    </main>
  )
}