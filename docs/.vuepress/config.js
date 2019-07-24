module.exports = {
    title: 'MrXiong',
    description: '熊刚的个人博客首页，熊刚的技术作品，熊刚的生活成长', // 优化SEO
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
        sidebar: {
            '/social/': [
                'weixin'
            ],
            '/studyNotes/': getThemeSidebar('前端开发', '介绍'),
            '/about/': getMySelfSidebar('关于我', '目录'),
            '/': [
                '',
                '/about/',
            ]
        },
        activeHeaderLinks: false,
        lastUpdated: '上次更新',
        repo: 'gangking/myBlog',
        repoLabel: '查看源码',
        editLinks: true,
        editLinkText: '编辑文档',
        docsDir: 'docs',
        serviceWorker: {
            updatePopup: {
                massage: "内容已更新",
                buttonText: "刷新"
            }
        },
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: '社交媒体',
                items: [
                    {
                        text: '微信',
                        link: '/social/weixin/'
                    }

                ]
            }, {
                text: '前端技术',
                link: '/studyNotes/'
            },
            {
                text: '生活与创作',
                link: '/about/'
            }
        ]
    }
}

function getThemeSidebar(groupA, introductionA) {
    return [{
        title: groupA,
        collapsable: false,
        sidebarDepth: 2,
        children: [
            ['', introductionA],
            'Webpack',
            'React',
            'Vue'
        ]
    }, ]
}

function getMySelfSidebar(groupA, introductionA) {
    return [{
        title: groupA,
        collapsable: false,
        sidebarDepth: 2,
        children: [
            ['', introductionA],
            ['01', '自命不凡，却无足轻重'],
        ]
    }, ]
}