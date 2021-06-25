module.exports = {
    title: 'ls个人网站', 
    description : 'Adroi',
    head: [ 
      ['link', { rel: 'icon', href: '/ls.png' }],
    ],
    themeConfig: {
      logo: '/ls.png',
      nav : [
          { text: '个人文档', link: '/个人文档' },
          { text: '成长日记', link: '/成长日记' },
          { text: '考研笔记', link: '/考研笔记' }
      ],
      sidebar: {
          '/' : [
              "/", 
              "个人文档", 
              "成长日记",
              "考研笔记"
          ]
      },
      sidebarDepth : 4
    }
  }