module.exports = {
  entry: {
    route: ['./src/entry.js']
  },
  output: {
    filename: 'build/[name].js'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.coffee$/,
        loader: 'coffee-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.styl$/,
        loader: 'style!css!stylus'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.coffee', '.css', '.styl']
  }
};