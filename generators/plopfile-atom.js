module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'application component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Qual o nome do atom?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/atoms/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/components/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/stories/components/atoms/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/components/atoms/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/atoms/{{pascalCase name}}/styles.tsx',
        templateFile: 'templates/components/styles.ts.hbs'
      }
    ]
  })
}
