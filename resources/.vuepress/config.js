
module.exports = {
  title: 'ObtuseCave',
  description: 'Pseudo Computer Scientist',
  base: '/blog/',
  dest: 'docs',
  
  themeConfig: {
    sidebar: [
      {
          title: 'About',
          collapsable: false,
          children: [
          '/resume'
          ]
      },
      {
          title: 'Kotlin Koans',
          collapsable: true,
          children: [
              'koans/koan0',
              'koans/koan1',
              'koans/koan2'
          ]
      },
      {
          title: 'Rust 속성',
          collapsable: true,
          children: [
              'rust-begin/rust0',
              'rust-begin/rust1'
          ]
      }
      ]
  },
  
  markdown: {
    config: md => {
      md.use(require('markdown-it-footnote'))
    }
   }
}