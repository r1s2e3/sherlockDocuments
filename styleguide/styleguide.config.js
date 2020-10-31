const path = require('path')
const resolve = (file) => path.resolve(__dirname, file)

module.exports = {
  title: 'Sherlock docs',
  styleguideDir: resolve('../public/docs'),
  defaultExample: true,
  pagePerSection: true,
  exampleMode: 'expand',
  usageMode: 'expand',
  require: [
    resolve('../src/assets/scss/style.scss'),
    resolve('./src/styleguide-doc.css'),
    resolve('./src/global.requires.js')
  ],
  sections: [
    {
      name: 'О проекте',
      description: 'Данный раздел содержит общую информацию о проекте',
      content: resolve('./src/sections/about.md'),
      external: true
    },
    {
      name: 'Начало работы',
      description: 'Данный раздел содержит информацию о запуске проекта',
      content: resolve('./src/sections/start-guide.md'),
      external: true
    },
    {
      name: 'Зависимости',
      description: 'Данный раздел содержит информацию о зависимостях проекта',
      content: resolve('./src/sections/dependencies.md'),
      external: true
    },
    {
      name: 'Структура проекта',
      description: 'Данный раздел содержит информацию о структуре проекта',
      content: resolve('./src/sections/project-structure.md'),
      external: true
    },
    {
      name: 'Соглашения',
      description: 'Данный раздел описывает соглашения, принятые в проекте',
      content: resolve('./src/sections/agreement.md'),
      external: true
    },
    {
      name: 'Требует рефакторинга',
      description: 'Данный раздел содерждит список задач и компонентов, требующие рефакторинга',
      content: resolve('./src/sections/refactor.md'),
      external: true
    },
    {
      name: 'Библиотека компонентов',
      description: 'Данный раздел представляет собой документацию библиотеки компонентов',
      components: resolve('../src/components/base/**/[a-z]*.vue'),
      external: true,
      sectionDepth: 2
    },
    {
      name: 'Проектные компоненты',
      description: 'Данный раздел представляет собой документацию компонентов специфичных для проекта IDM',
      components: resolve('../src/components/project/**/[a-z]*.vue'),
      external: true,
      sectionDepth: 2
    }
  ],
  // webpackConfig: {
  //   custom config goes here
  // },
  editorConfig: {
    theme: 'pastel-on-dark'
  },
  theme: {
    color: {
      link: '#3eaf7c',
      name: '#3eaf7c',
      linkHover: '#35495e'
    }
  }
}
