# Angular 12 & Storybook 6

This test was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.17 and Storybook Angular version 6.5.16 I wanted to test for compatability for Angular 12 and Storybook versioning.

## Installation

Before you can run Storybook, make sure you have [Node.js](https://nodejs.org/) and npm (Node Package Manager) installed. If you don't have them installed, you can download and install them from the official websites:

- [Node.js](https://nodejs.org/)
- [npm (included with Node.js installation)](https://www.npmjs.com/)

Once you have Node.js and npm installed, follow these steps to view the project's components and stories using Storybook:

1. Clone this repository to your local machine.

2. Change your working directory to the project folder.

3. Install the project's dependencies.

4. Start the Storybook development server.

5. Open your web browser and navigate to `http://localhost:6006` to access Storybook. You can explore and interact with the project's components and see how they work.

## Development server

Run `npm run ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Previewing the Production Build

To preview the production build of the Angular application, follow these steps:

1. Build the production version of the application using:
   `npm run build`

2. After the build process is complete, you can preview the production build by running:
   `npm run preview-dist`
3. Open your web browser and navigate to `http://localhost:8080` to access the production build. You can explore the finalized version of the project.

   
Please note that you should only run the "preview-dist" command after successfully building the project using "build."

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Storybook Scripts

This project includes several npm scripts that are helpful for working with Storybook:

- `start`: Starts the Angular development server.
- `build`: Builds the project.
- `watch`: Builds the project in watch mode using the "development" configuration.
- `test`: Executes unit tests via Karma.
- `storybook`: Starts the Storybook development server.
- `build-storybook`: Builds the Storybook for production.

For example, you can start Storybook with the following command:

`npm run storybook`

To build the Storybook for production, you can use:

`npm run build-storybook`

For more details on using these scripts, please refer to the project's `package.json`.

## Problems

Upgrading Angular may also require upgrading Storybook. Finding compatibility between the two can be problematic, and due time should be considered when factoring the upgrade.


## Further help

To get more help on the Angular CLI, use `ng help`, or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

