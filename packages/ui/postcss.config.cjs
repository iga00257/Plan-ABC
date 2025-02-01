module.exports = {
  plugins: [
    require('postcss-import')({}),
    require('./postcss-breakpoints.cjs'),
    require('postcss-custom-media')(),
    require('postcss-nested')(),
    require('autoprefixer')(),
  ],
}
