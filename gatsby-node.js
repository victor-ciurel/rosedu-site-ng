/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const fs = require('fs-extra')
const path = require('path')

exports.modifyWebpackConfig = ({ config, stage }) => {
  config.merge({
    resolve: {
      root: [path.resolve('./src')]
    }
  })
}
