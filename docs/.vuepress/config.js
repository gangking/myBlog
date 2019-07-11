module.exports = {
    title: '武人熊大大',
    description: '武人熊大大的个人博客文档，vuepress文档', // 优化SEO
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN'
        }
    },
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }],
        ['link', {
            rel: 'manifest',
            href: '/manifest.json'
        }]
    ],
    base: '/myBlog/',
    serviceWorker: true,
    themeConfig: {
        // sidebar: 'auto',
        // sidebar: [
        //     ['/', '首页'],
        //     ['/css/', 'css首页'],
        //     ['/javascript/', 'javascript首页'],
        //     ['/about/test', 'about首页']
        // ],
        // sidebar: [{
        //         title: 'Group 1',
        //         path: '/css/', // 路径
        //         collapsable: true,// 是否折叠
        //         sidebarDepth: 1,// 深度1
        //         children: [
        //             // '/',
        //             '/css/',
        //             '/css/css1'
        //         ]
        //     },
        //     {
        //         title: 'Group 2',
        //         children: [ /* ... */ ]
        //     }
        // ],
        sidebar: {
            '/css/': [
                '', /* /css/ */
                'css1', /* /css/css1.html */
                'css2' /* /css/css2.html */
            ],
            '/学习心得/': [
                '', /* /javascript/ */
                'React', /* /javascript/javascript1.html */
                'Vue' /* /javascript/javascript2.html */
            ],
            // fallback 放在最前面，会禁止所有的IP地址访问
            '/': [
                '', /* / */
                '/about/', /* /about.html */
                '/about/test', /* /about/test.html */
            ]
        },
        sidebarDepth: 2,
        displayAllHeaders: true, // 显示所有页面标题链接
        activeHeaderLinks: false, // 禁用活动标题
        lastUpdated: '上次更新', // string | boolean 将以合适的日期格式显示在每一页的底部
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'gangking/myBlog',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '编辑文档',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        serviceWorker: {
            updatePopup: {
                massage: "内容已更新",
                buttonText: "刷新"
            }
        },
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'css',
                items: [{
                        text: 'css',
                        link: '/css/'
                    },
                    {
                        text: 'css1',
                        link: '/css/css1/'
                    },
                    {
                        text: 'css2',
                        link: '/css/css2/'
                    }

                ]
            },{
                text: '学习心得',
                items: [{
                        text: 'webpack',
                        link: '/学习心得/'
                    },
                    {
                        text: 'React',
                        link: '/学习心得/React/'
                    },
                    {
                        text: 'Vue',
                        link: '/学习心得/Vue/'
                    }

                ]
            },
            {
                text: 'about',
                link: '/about/test'
            }
        ]
    }
}