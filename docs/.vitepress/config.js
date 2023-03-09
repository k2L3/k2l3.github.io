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