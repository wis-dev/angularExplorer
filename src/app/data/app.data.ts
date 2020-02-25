export const TOPICS = [
    {
        id: 1,
        value: 'Add',
        actions: [
            {
                id: 1,
                value: 'Package',
                data: {
                    command: '`ng add <collection>`',
                    note: '`<collection> - The package to be added.`'
                }
            }
        ]
    },
    {
      id: 2,
      value: 'Analytics',
        actions: [
            {
                id: 1,
                value: 'Project',
                data: {
                    command: '`ng analytics <settingOrProject> <projectSetting>`',
                    note: `
                        \`Replace <settingOrProject> with on|off|ci|project|prompt\`

                        \`Replace <projectSetting> with on|off|prompt\`
                    `
                }
            }
        ]
    },
    {
      id: 3,
      value: 'Build',
        actions: [
            {
                id: 1,
                value: 'Project',
                data: {
                    command: '`ng build <project>`',
                    note: '`<project> - The name of the project to build. Can be an application or a library.`'
                }
            }
        ]
    },
    {
      id: 4,
      value: 'Config',
        actions: [
            {
                id: 1,
                value: 'Angular',
                data: {
                    command: '`ng config <jsonPath> <value>`',
                    note: `
                        \`<jsonPath> - The configuration key to set or query, in JSON path format. For example: "a[3].foo.bar[2]". If no new value is provided, returns the current value of this key.\`

                        \`<value> - If provided, a new value for the given configuration key.\`
                    `
                }
            }
        ]
    },
    {
      id: 5,
      value: 'Deploy',
        actions: [
            {
                id: 1,
                value: 'Project',
                data: {
                    command: '`ng deploy <project>`',
                    note: '`<project> - The name of the project to deploy.`'
                }
            }
        ]
    },
    {
      id: 6,
      value: 'Doc',
        actions: [
            {
                id: 1,
                value: 'Keyword',
                data: {
                    command: '`ng doc <keyword>`',
                    note: '`<keyword> - The keyword to search for, as provided in the search bar in angular.io.`'
                }
            }
        ]
    },
    {
      id: 7,
      value: 'e2e',
        actions: [
            {
                id: 1,
                value: 'Project',
                data: {
                    command: '`ng e2e <project>`',
                    note: '`<project> - The name of the project to build. Can be an application or a library.`'
                }
            }
        ]
    },
    {
      id: 8,
      value: 'Generate',
        actions: [
            {
                id: 1,
                value: 'Schematic',
                data: {
                    command: '`ng generate <schematic>`',
                    note: '`<schematic> - The schematic or collection:schematic to generate.`'
                }
            }
        ]
    },
    {
      id: 9,
      value: 'Help',
        actions: [
            {
                id: 1,
                value: 'Commands',
                data: {
                    command: '`ng help`',
                    note: ''
                }
            }
        ]
    },
    {
      id: 10,
      value: 'Lint',
        actions: [
            {
                id: 1,
                value: 'Package',
                data: {
                    command: '`ng lint <project>`',
                    note: '`<project> - The name of the project to lint.`'
                }
            }
        ]
    },
    {
      id: 11,
      value: 'New',
        actions: [
            {
                id: 1,
                value: 'Workspace',
                data: {
                    command: '`ng new <name>`',
                    note: '`<name> - The name of the new workspace and initial project.`'
                }
            }
        ]
    },
    {
      id: 12,
      value: 'Run',
        actions: [
            {
                id: 1,
                value: 'Architect',
                data: {
                    command: '`ng run <target>`',
                    note: '`<target> - The Architect target to run.`'
                }
            }
        ]
    },
    {
      id: 13,
      value: 'Serve',
        actions: [
            {
                id: 1,
                value: 'Project',
                data: {
                    command: '`ng serve <project>`',
                    note: '`<project> - The name of the project to build. Can be an application or a library.`'
                }
            }
        ]
    },
    {
      id: 14,
      value: 'Test',
        actions: [
            {
                id: 1,
                value: 'Project',
                data: {
                    command: '`ng test <project>`',
                    note: '`<project> - The name of the project to build. Can be an application or a library.`'
                }
            }
        ]
    },
    {
      id: 15,
      value: 'Update',
        actions: [
            {
                id: 1,
                value: 'Dependencies',
                data: {
                    command: '`ng update`',
                    note: '`Updates your application and its dependencies.`'
                }
            }
        ]
    },
    {
      id: 16,
      value: 'Version',
        actions: [
            {
                id: 1,
                value: 'Angular CLI',
                data: {
                    command: '`ng version`',
                    note: '`Outputs Angular CLI version.`'
                }
            }
        ]
    },
    {
      id: 17,
      value: 'xi18n',
        actions: [
            {
                id: 1,
                value: 'Project',
                data: {
                    command: '`ng xi18n <project>`',
                    note: '`<project> - The name of the project to build. Can be an application or a library.`'
                }
            }
        ]
    },
  ];

export const primaryOptions = TOPICS.sort((x, y) => {
    if (x.value < y.value) {
      return -1;
    }
    if (x.value > y.value) {
      return 1;
    }
    return 0;
});
