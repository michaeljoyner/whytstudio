let mix = require("laravel-mix");
let path = require("path");

require("laravel-mix-tailwind");
require("laravel-mix-purgecss");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix
  .js("resources/js/index.js", "public/js/main.js")
  .less("resources/css/app.less", "public/css/main.css")
  .tailwind()
  .purgeCss({
    globs: [path.join(__dirname, "public/*.html")]
  });
