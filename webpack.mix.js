const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js')
    .react('resources/js/pages/index.js', 'public/js/pages')
    .react('resources/js/pages/contact.js', 'public/js/pages')
    .react('resources/js/pages/quotation.js', 'public/js/pages')
    
mix.postCss('resources/css/app.css', 'public/css', [
        require('tailwindcss'),
    ]);
