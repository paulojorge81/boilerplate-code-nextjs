module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'application component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Qual o nome da sua page?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/app/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/pages/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/stories/pages/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/pages/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/pages/{{pascalCase name}}/styles.tsx',
        templateFile: 'templates/pages/styles.ts.hbs'
      }
    ]
  })
}
