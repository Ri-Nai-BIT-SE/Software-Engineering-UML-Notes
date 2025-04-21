import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Software-Engineering-UML-Notes",
  description: "A VitePress Site",
  srcDir: './docs',
  base: '/Software-Engineering-UML-Notes/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    editLink: {
      pattern: 'https://github.com/Ri-Nai-BIT-SE/Software-Engineering-UML-Notes/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    nav: [
      { text: 'Home', link: '/' },
    ],
    outline: [2, 5],
    sidebar: [
      {
        text: '第一章-软件需求工程概述',
        link: '/第一章-软件需求工程概述/index.md',
        items: [
          { text: '1. 软件的发展史', link: '/第一章-软件需求工程概述/1-软件的发展史.md' },
          { text: '2. 软件工程', link: '/第一章-软件需求工程概述/2-软件工程.md' },
          { text: '3. 需求工程概述', link: '/第一章-软件需求工程概述/3-需求工程概述.md' },
        ]
      },
      {
        text: '第二章-需求基础',
        link: '/第二章-需求基础/index.md',
        items: [
          { text: '1. 需求的定义和内涵', link: '/第二章-需求基础/1-需求的定义和内涵.md' },
          { text: '2. 需求分类', link: '/第二章-需求基础/2-需求分类.md' },
          { text: '3. 需求工程的路线', link: '/第二章-需求基础/3-需求工程的路线.md' },
          { text: '4. 优秀需求特性与常见需求定义错误', link: '/第二章-需求基础/4-优秀需求特性与常见需求定义错误.md' },
        ]
      },
      {
        text: '第三章-需求工程过程',
        link: '/第三章-需求工程过程/index.md',
        items: [
          { text: '1. 需求工程过程', link: '/第三章-需求工程过程/1-需求工程过程.md' },
          { text: '2. 需求工程过程的活动', link: '/第三章-需求工程过程/2-需求工程过程的活动.md' },
          { text: '3. 需求工程过程的并发和迭代性', link: '/第三章-需求工程过程/3-需求工程过程的并发和迭代性.md' },
          { text: '4. 实践方法的应用', link: '/第三章-需求工程过程/4-实践方法的应用.md' },
        ]
      },
      {
        text: '第四章-需求规格文档',
        link: '/第四章-需求规格文档/index.md',
        items: [
          { text: '1. 需求规格说明概述', link: '/第四章-需求规格文档/1-需求规格说明概述.md' },
          { text: '2. 需求规格说明文档', link: '/第四章-需求规格文档/2-需求规格说明文档.md' },
          { text: '3. 模版的选择与裁剪', link: '/第四章-需求规格文档/3-模版的选择与裁剪.md' },
          { text: '4. 文档写作技巧', link: '/第四章-需求规格文档/4-文档写作技巧.md' },
          { text: '5. 优秀需求规格说明文档的特性', link: '/第四章-需求规格文档/5-优秀需求规格说明文档的特性.md' },
          { text: '6. 需求规格说明的实践调查', link: '/第四章-需求规格文档/6-需求规格说明的实践调查.md' },
        ]
      },
      {
        text: '第五章-需求获取',
        link: '/第五章-需求获取/index.md',
        items: [
          { text: '1. 需求获取概述', link: '/第五章-需求获取/1-需求获取概述.md' },
          { text: '2. 确定项目的前景和范围', link: '/第五章-需求获取/2-确定项目的前景和范围.md' },
          { text: '3. 涉众分析与硬数据采样', link: '/第五章-需求获取/3-涉众分析与硬数据采样.md' },
          { text: '4. 面谈', link: '/第五章-需求获取/4-面谈.md' },
          { text: '5. 原型', link: '/第五章-需求获取/5-原型.md' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ri-Nai-BIT-SE/Software-Engineering-UML-Notes' }
    ],
  },
  markdown: {
    math: true,
  }
})
