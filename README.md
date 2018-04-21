# ROSEdu Website
Built using [Gatsby.js](http://gatsbyjs.org)

[Gatsby documentation available here.](https://www.gatsbyjs.org/docs/)

A Gatsby-based presentational website for [ROSEdu.](https://github.com/rosedu)

* .eslint.rc config using standard.js
* Mock for Jest styles (so that styles imports don't break your tests)

# Repo structure

The repo is structured as follows:

* `📁src/` - website sources
    * `📁assets/` - static file assets, such as images and external stylesheets
    * `📁components/` - React components that make up the page.
    * `📁pages/` - components that define website pages
* `📁static/` - files that will be stored directly in the website root
* `📐.eslint.rc` - ESLint configuration
* `📐gatsby-config.js` - Gatsby configuration options. [Read more about this here.](https://www.gatsbyjs.org/docs/gatsby-config/)
* `📐gatsby-node.js` - Gatsby Node API options. Sets the default import path to the `src/` folder. You most certainly won't need to edit this. [Read more about this here.](https://www.gatsbyjs.org/docs/node-apis/)

Legend: 📁 - Folder, 📐 - configuration file

# Install and configuration

## Installing
* `yarn` && `yarn develop` to develop
* `yarn test` to run tests

## Deploying
* `yarn build` and deploy contents of `public` folder

## Writing tests

The Jest runner is configured to look for all files named `*.test.js` and run all the tests in them. I recommend placing the test file in the same folder with the component it's testing.

To run tests use `yarn test`, and `yarn test-coverage` if you want a coverage report as well.

## Configuring Analytics and Hotjar

To configure Google Analytics and Hotjar, insert your Google Analytics Tracking ID and Hotjar script version and ID into `gatsby-config.js`.
