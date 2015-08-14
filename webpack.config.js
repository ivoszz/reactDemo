const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcPath = path.join(__dirname, 'app');

function getEntrySources (sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-dev-server/client?http://localhost:8080');
    sources.push('webpack/hot/only-dev-server');
  }

  return sources;
}

module.exports = {
  target: 'web',
  entry: {
    index: getEntrySources([path.join(srcPath, 'index.js')]),
    common: ['react']
  },
  resolve: {
    root: srcPath,
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', 'app']
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '',
    filename: 'scripts/[name].js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loaders: ['react-hot', 'jsx', 'babel'], exclude: /node_modules/},
      {test: /\.scss$/, loaders: ['style', 'css', 'sass']}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(srcPath, 'index.html')
    })
  ],
  devServer: {
    contentBase: './build',
    historyApiFallback: true
  }
};
