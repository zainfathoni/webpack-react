// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require("path");

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, "dist"),
  SRC: path.resolve(__dirname, "src"),
  JS: path.resolve(__dirname, "src/js")
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.JS, "app.js"),
  output: {
    path: paths.DIST,
    filename: "app.bundle.js"
  },
  // Dev server configuration
  // Now it uses our "src" folder as a starting point
  devServer: {
    contentBase: paths.SRC
  }
};
