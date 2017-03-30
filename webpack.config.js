var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'static/js/app.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'static/dist')
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};
