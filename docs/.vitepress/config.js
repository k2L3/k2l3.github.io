/*
 * @Author: LikSeven
 * @Date: 2023-03-08 16:21:39
 * @LastEditTime: 2023-03-09 14:10:56
 * @LastEditors: LikSeven
 * @Description: 
 * @FilePath: \blog\docs\.vitepress\config.js
 * 下面的代码没有bug!!!
 */
import router from "./router";
module.exports = {
    base: '/blog/',
    title: '小李的博客',
    description: 'XXX',
    lang: 'cn-ZH',
    themeConfig: {
        sidebar: router,
        nav: router, 
        siteTitle: "前端菜鸟历险记",
        // logo: "/logo.jpg", 
        socialLinks: [{ icon: "github", link: "https://github.com/k2L3" }]
    }
}