module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'application component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Qual o nome da molecule?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/molecules/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/components/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/stories/components/molecules/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/components/molecules/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/molecules/{{pascalCase name}}/styles.tsx',
        templateFile: 'templates/components/styles.ts.hbs'
      }
    ]
  })
}
