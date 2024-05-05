module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'application component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Qual o nome do componente?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/organisms/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/components/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/stories/components/organisms/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/components/organisms/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/organisms/{{pascalCase name}}/styles.tsx',
        templateFile: 'templates/components/tyles.ts.hbs'
      }
    ]
  })
}
