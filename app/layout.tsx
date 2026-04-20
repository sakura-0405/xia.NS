import '@/styles/globals.css';
import type { Metadata } from 'next';

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>
        {children}
      </body>
    </html>
  )
}// app/layout.tsx

export const metadata: Metadata = {
  title: {
    template: '%s | 蝦咪毀',
    default: '蝦咪毀', // 沒設定時的預設值
  },
}