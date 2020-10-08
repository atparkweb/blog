/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    devServer: {
      watchOptions: {
	ignored: /\.#|node_modules|~$/,
      },
    }
  })
};

// You can delete this file if you're not using it
