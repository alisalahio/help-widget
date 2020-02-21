module.exports = {
  parser: false,
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {},
    'cssnano': process.env === 'production' ? options.cssnano : false
  }
}
