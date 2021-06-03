module.exports = {
    title: 'ls个人网站',  // 设置网站标题
    description : 'Adroi',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/ls.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    themeConfig: {
      logo: '/ls.png',  // 左上角logo
      nav : [
          { text: '个人文档', link: '/apiword' },
          { text: '成长日记', link: '/api' },
          { text: '考研笔记', link: '/error' }
      ],
      sidebar: {
          '/' : [
              "/", //指的是根目录的md文件 也就是 README.md 里面的内容
              "apiword",  //根目录创建 apiword.md文件
              "api",//根目录创建 api.md文件
              "error" //根目录创建 error.md文件
          ]
      },
      sidebarDepth : 4
    }
  }