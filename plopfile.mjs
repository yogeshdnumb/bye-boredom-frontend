export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  // plop generator code
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      // {
      //   type: "input",
      //   name: "element",
      //   message: "HTML element? (div is default)",
      //   default: "div",
      // },
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.module.scss",
      },
      // templateFile: 'plop-templates/Component.module.scss.hbs',

      // {
      //   type: 'add',
      //   path: 'src/components/{{pascalCase name}}/index.tsx',
      //   templateFile: 'plop-templates/index.tsx.hbs',
      // },
    ],
  });

  plop.setGenerator("page", {
    description: "Create a page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your page name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.module.scss",
      },
    ],
  });

  plop.setGenerator("feature", {
    description: "Create a feature",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your feature name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/features/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/features/{{pascalCase name}}/{{pascalCase name}}.module.scss",
      },
    ],
  });
}
