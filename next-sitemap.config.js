/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://xia-beryl.vercel.app', // 你的網站網址
  generateRobotsTxt: true, // 自動幫你生成 robots.txt
  sitemapSize: 7000,
  // (選填) 如果你有不想被搜尋到的頁面，可以加在下面
  exclude: ['/about_old'], 
}