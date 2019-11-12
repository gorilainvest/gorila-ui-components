# GorilaAppWidgetsSystem

This is the home for the Gorila team's components, built by developers for developers using [Nrwl Nx](https://nrwl.io/nx).

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/881883aeb9584cb08886a73375d81f9f)](https://app.codacy.com/app/guilhermejcgois/gorila-ui-components?utm_source=github.com&utm_medium=referral&utm_content=gorilainvest/gorila-ui-components&utm_campaign=Badge_Grade_Dashboard)
[![Build Status](https://travis-ci.org/gorilainvest/gorila-ui-components.svg?branch=master)](https://travis-ci.org/gorilainvest/gorila-ui-components)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/gorilainvest/gorila-ui-components/graphs/commit-activity)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

### Getting Started

See our [Getting Started Guide](./additional-documentation/getting-started.html) if you're building a project with ours widgets.

If you'd like to contribute, you must follow our [contributing guidelines](./additional-documentation/contributing.html).

### Developing

#### Lib folder
- create a new folder in libs/ui-toolkit/your-lib
- your folder must contain all needed config files like package.json, tsconfig, etc (check an existent folder)
- create a src subfolder with your data. It must contain a index.ts file that exports all files from your lib.

#### Shell folder
- Add your new component in the shell folder to see the changes while you developing and to send it to http://ui.gorilainvest.com.br

To do this, create a new component in some of categories of menu: layout, popups-modals, presentational, etc. The directorie of the new component is libs/shell/your-selected-categorie/src/lib/ui/your-component-folder

This folder will contain some controllers that helps people to use your library. So, if you have an input named "value", create a form where people can edit the "value" field and see the results of the changes. To help you, just check the existent examples.

- add your new lib in the nx.json file (to display your component in the side menu)
- add your new lib as project in the angular.json file
- add your new lib in the CODEOWNERS file (in project root directorie)
- add the dependencies in the package.json
- add your new lib in the tsconfig.json paths entry: @gorilainvest/ui-toolkit/your-lib

### Running

To run the application just use npm start command in the root directorie.
