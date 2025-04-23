import { defineConfig } from 'vitepress'
import { MermaidMarkdown, MermaidPlugin } from 'vitepress-plugin-mermaid';

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
    outline: [1, 5],
    sidebar: [
      {
        collapsed: true,
        text: '第一章-软件需求工程概述',
        base: '/第一章-软件需求工程概述/',
        link: 'index.md',
        items: [
          { text: '1. 软件的发展史', link: '1-软件的发展史.md' },
          { text: '2. 软件工程', link: '2-软件工程.md' },
          { text: '3. 需求工程概述', link: '3-需求工程概述.md' },
        ]
      },
      {
        collapsed: true,
        text: '第二章-需求基础',
        base: '/第二章-需求基础/',
        link: 'index.md',
        items: [
          { text: '1. 需求的定义和内涵', link: '1-需求的定义和内涵.md' },
          { text: '2. 需求分类', link: '2-需求分类.md' },
          { text: '3. 需求工程的路线', link: '3-需求工程的路线.md' },
          { text: '4. 优秀需求特性与常见需求定义错误', link: '4-优秀需求特性与常见需求定义错误.md' },
        ]
      },
      {
        collapsed: true,
        text: '第三章-需求工程过程',
        base: '/第三章-需求工程过程/',
        link: 'index.md',
        items: [
          { text: '1. 需求工程过程', link: '1-需求工程过程.md' },
          { text: '2. 需求工程过程的活动', link: '2-需求工程过程的活动.md' },
          { text: '3. 需求工程过程的并发和迭代性', link: '3-需求工程过程的并发和迭代性.md' },
          { text: '4. 实践方法的应用', link: '4-实践方法的应用.md' },
        ]
      },
      {
        collapsed: true,
        text: '第四章-需求规格文档',
        base: '/第四章-需求规格文档/',
        link: 'index.md',
        items: [
          { text: '1. 需求规格说明概述', link: '1-需求规格说明概述.md' },
          { text: '2. 需求规格说明文档', link: '2-需求规格说明文档.md' },
          { text: '3. 模版的选择与裁剪', link: '3-模版的选择与裁剪.md' },
          { text: '4. 文档写作技巧', link: '4-文档写作技巧.md' },
          { text: '5. 优秀需求规格说明文档的特性', link: '5-优秀需求规格说明文档的特性.md' },
          { text: '6. 需求规格说明的实践调查', link: '6-需求规格说明的实践调查.md' },
        ]
      },
      {
        collapsed: true,
        text: '第五章-需求获取',
        base: '/第五章-需求获取/',
        link: 'index.md',
        items: [
          { text: '1. 需求获取概述', link: '1-需求获取概述.md' },
          { text: '2. 确定项目的前景和范围', link: '2-确定项目的前景和范围.md' },
          { text: '3. 涉众分析与硬数据采样', link: '3-涉众分析与硬数据采样.md' },
          { text: '4. 面谈', link: '4-面谈.md' },
          { text: '5. 原型', link: '5-原型.md' },
        ]
      },
      {
        collapsed: true,
        text: '第六章-需求分析概述',
        base: '/第六章-需求分析概述/',
        link: 'index.md',
        items: [
          { text: 'no other here' }
        ]
      },
      {
        collapsed: true,
        text: '第七章-结构化需求分析方法',
        base: '/第七章-结构化需求分析方法/',
        link: 'index.md',
        items: [
          { text: '1. 结构化需求分析与建模', link: '1-结构化需求分析与建模.md' },
          { text: '2. 过程建模', link: '2-过程建模.md' },
          { text: '3. 数据建模', link: '3-数据建模.md' },
        ]
      },
      {
        collapsed: true,
        text: '第八章-面向对象分析与UML建模',
        base: '/第八章-面向对象分析与UML建模/',
        link: 'index.md',
        items: [
          { text: '1. 面向对象分析与UML建模概述', link: '1-面向对象分析与UML建模概述.md' },
          { text: '2. UML总体说明', link: '2-UML总体说明.md' },
          { text: '3. 用例模型', link: '3-用例模型.md' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ri-Nai-BIT-SE/Software-Engineering-UML-Notes' }
    ],
  },
  markdown: {
    math: true,
    config(md) {
      md.use(MermaidMarkdown);
    },
  },
  vite: {
    plugins: [MermaidPlugin()],
    optimizeDeps: {
      include: ['mermaid'],
    },
    ssr: {
      noExternal: ['mermaid'],
    },
  },
})
