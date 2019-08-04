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
      '/webpack/': getWebpackSidebar('Webpack开发', '介绍'),
      '/react/': getReactSidebar('React开发', '介绍'),
      '/vue/': getVueSidebar('Vue开发', '介绍'),
      '/es6/': getEs6Sidebar('Es6语法', '介绍'),
      '/studyNotes/': getThemeSidebar('前端开发', '介绍'),
      '/node/': getNodeSidebar('后端技术', '介绍'),
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
      // link: '/studyNotes/'
      items: [
        {
          text: 'Webpack',
          link: '/webpack/'
        },
        {
          text: 'React',
          link: '/react/'
        },
        {
          text: 'Vue',
          link: '/vue/'
        },
        {
          text: 'ES6',
          link: '/es6/'
        }

      ]
    },
    {
      text: '后端技术',
      link: '/node/'
    },
    {
      text: '生活与创作',
      link: '/about/'
    }
    ]
  }
}

function getNodeSidebar (groupA, introductionA) {
  return [{
    title: groupA,
    collapsable: false,
    sidebarDepth: 2,
    children: [
      ['', introductionA],
      ['nodeJs', 'NodeJs'],
      ['CodeManagement', '代码管理工具']
    ]
  },]
}

function getThemeSidebar (groupA, introductionA) {
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
  },]
}

function getWebpackSidebar (groupA, introductionA) {
  return [{
    title: groupA,
    collapsable: false,
    sidebarDepth: 2,
    children: [
      ['', introductionA],
      '01'
    ]
  },]
}

function getEs6Sidebar (groupA, introductionA) {
  return [{
    title: groupA,
    collapsable: false,
    sidebarDepth: 2,
    children: [
      ['', introductionA],
      '01'
    ]
  },]
}

function getVueSidebar (groupA, introductionA) {
  return [{
    title: groupA,
    collapsable: false,
    sidebarDepth: 2,
    children: [
      ['', introductionA],
      '01'
    ]
  },]
}

function getReactSidebar (groupA, introductionA) {
  return [{
    title: groupA,
    collapsable: false,
    sidebarDepth: 2,
    children: [
      ['', introductionA],
      ['01', 'React基础'],
      ['02', 'React慕课笔记'],
      ['03', '简书项目']
    ]
  },]
}

function getMySelfSidebar (groupA, introductionA) {
  return [{
    title: groupA,
    collapsable: false,
    sidebarDepth: 2,
    children: [
      ['', introductionA],
      ['01', '自命不凡，却无足轻重'],
      ['02', '前端专业方向的尽头'],
      ['03', '学不进去，没时间学怎么办？'],
    ]
  },]
}