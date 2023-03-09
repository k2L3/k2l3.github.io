/*
 * @Author: LikSeven
 * @Date: 2023-03-08 16:54:17
 * @LastEditTime: 2023-03-09 10:46:39
 * @LastEditors: LikSeven
 * @Description: 
 * @FilePath: \blog\docs\.vitepress\nav.js
 * 下面的代码没有bug!!!
 */
export default [
    {
        text: 'JavaScript基础',
        collapsible: true,    //是不是可以动态展开
        collapsed: true, //默认是不是展开
        items: [
            { text: '语法与数据类型', link: '/articles/basicJs/dataType' } // /guide/install.md
        ]
    },
    { 
        text: 'JavaScript进阶', 
        items: [

        ]
    },
    { text: '手写源码', items: [] },
    { text: 'TypeScript', items: [] },
    { text: 'Node', items: [] },
    { text: "算法", link: "/leetcode/LEET_CODE题解/47. 全排列 II" },
]