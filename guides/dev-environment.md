# Developer guide

### Folder Structure

    .
    ├── apps
    ├── coverage                     # Code coverage folder
    ├── documentation                # Compodoc documentation folder
    ├── guides                       # Development documentation folder
    ├── libs                                             	 
    ├──── gdk                        # Utilities to create documentation pages (deprecated)
    ├──── shared-styles
    ├──── shell                      # Ui-toolkit library documentation folder (deprecated)
    ├──── ui-toolkit                 # Ui-toolkit library codebase folder
    ├── scripts
    ├── tools
    ├── ...
    └── README.md

### Getting your environment set up

1. Make sure you have `node` installed with a version at _least_ 8.0.0 and `yarn` with a version
   of at least 1.10.0. We recommend using `nvm` to manage your node versions.
2. Run `yarn global add gulp` to install gulp.

3. Fork the `gorilainvest/gorila-ui-components` repo on Github.

4. Clone your fork to your machine with `git clone`.

   Recommendation: name your git remotes `upstream` for `gorilainvest/gorila-ui-components`

   and `<your-username>` for your fork.
5. From the root of the project, run `yarn` or `npm install`.


To build UI Toolkit in dev mode, run `ng build`.
To build UI Toolkit in release mode, run `ng build --prod`

To bring up a local server, run `npm start`. This will automatically watch for changes
and rebuild. The browser should refresh automatically when changes are made.

### Running tests

To run unit tests, run `npm run test`.
To run the e2e tests, run `npm run e2e`.
To run lint, run `npm run lint`.

### Running documentation

To update the documentation, run `npm run compodoc` and open [compodoc](../documentation/index.html) in your browser
