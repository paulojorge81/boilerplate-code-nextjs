module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'application component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Qual o nome do template?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/templates/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/components/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/stories/components/templates/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/components/templates/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/templates/{{pascalCase name}}/styles.tsx',
        templateFile: 'templates/components/styles.ts.hbs'
      }
    ]
  })
}
