const mix = require('laravel-mix');
const path = require("path");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.extract([], 'public/js/vendor.js')
    .sass('resources/sass/style.scss', 'public/css')
    .sass('resources/sass/reset.scss', 'public/css')
    .ts('resources/js/app.ts', 'public/js/app.js')
    .vue()

mix.webpackConfig(webpack => {
    return {
        plugins: [
            new webpack.DefinePlugin({
                __VUE_OPTIONS_API__: true, // If you are using the options api.
                __VUE_PROD_DEVTOOLS__: false, // If you don't want people sneaking around your components in production.
            }),
        ],
    }
})
