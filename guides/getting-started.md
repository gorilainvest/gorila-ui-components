For help getting started with a new Angular app, check out the
[Angular CLI](https://cli.angular.io/).

For existing apps, follow these steps to begin using Gorila Invest UI Toolkit.

### Step 1: Install the library

You can use either the npm or yarn command-line tool to install packages. Use whichever is appropriate for your project in the examples below.

#### NPM
```bash

npm install --save @gorilainvest/ui-toolkit

```
#### Yarn
```bash

yarn add @gorilainvest/ui-toolkit

```

### Step 3: Import the component module

Import the NgModule for the component you want to use:

```ts

import { EnhancedTitleModule } from '@gorilainvest/ui-toolkit/dist/ui-enhanced-title';


@NgModule({
  ...
  imports: [
    ...
    EnhancedTitleModule
    ...
  ],
  ...
})
export class PrimatesPartyPageModule { }
```

### Step 4: Use it in your template as you want

If you have doubt how to use the component, you can check an interactive example at [website](ui.gorilainvest.com.br).

```html
<enhanced-title title="The primates" highlight="party"></enhanced-title>
```
