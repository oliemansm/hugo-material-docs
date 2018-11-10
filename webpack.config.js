/*
 * Copyright (c) 2016-2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

const fs = require("fs")
const cssmin = require("cssmin")
const path = require("path")
const html = require("html-minifier")
const uglify = require("uglify-js")
const webpack = require("webpack")

/* ----------------------------------------------------------------------------
 * Plugins
 * ------------------------------------------------------------------------- */

const CopyPlugin = require("copy-webpack-plugin")
const EventHooksPlugin = require("event-hooks-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const ImageminPlugin = require("imagemin-webpack-plugin").default
const ManifestPlugin = require("webpack-manifest-plugin")

/* ----------------------------------------------------------------------------
 * Configuration
 * ------------------------------------------------------------------------- */

module.exports = env => { // eslint-disable-line complexity
  const config = {

    /* Entrypoints */
    entry: {

      /* Custom Modernizr build */
      "javascripts/modernizr": path.resolve(
        __dirname, "src/assets/javascripts/modernizr.js"
      ),

      /* Application */
      "javascripts/application": path.resolve(
        __dirname, "src/assets/javascripts/application.js"
      )
    },

    /* Loaders */
    module: {
      rules: [

        /* Babel ES6 transformations */
        {
          test: /\.jsx?$/,
          use: "babel-loader",
          exclude: /\/node_modules\//
        },

        /* Custom Modernizr build */
        {
          test: /\.modernizr-autorc$/,
          use: "modernizr-auto-loader"
        },

        /* Cache busting for SVGs */
        {
          test: /\.svg$/,
          use: `file-loader?name=[path][name]${
            env && env.prod ? ".[md5:hash:hex:8]" : ""
          }.[ext]&context=./src`
        },

        {
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        }
      ]
    },

    /* Output */
    output: {
      path: path.resolve(__dirname, "material-site/themes/hugo-material-docs/static"),
      filename: `[name]${env && env.prod ? ".[chunkhash]" : ""}.js`,
      hashDigestLength: 8,
      libraryTarget: "window"
    },

    /* Plugins */
    plugins: [

      /* Combine all dependencies into a single file */
      new webpack.optimize.CommonsChunkPlugin({
        name: "src/assets/javascripts/modernizr.js",
        chunks: [".modernizr-autorc"]
      }),

      /* Provide JSX helper */
      new webpack.ProvidePlugin({
        JSX: path.resolve(__dirname, "src/assets/javascripts/providers/jsx.js")
      })

    ],

    /* Module resolver */
    resolve: {
      modules: [
        path.resolve(__dirname, "node_modules")
      ],
      extensions: [".js", ".jsx", ".scss"],
      alias: {
        modernizr$: path.resolve(__dirname, ".modernizr-autorc")
      }
    },

    /* Sourcemaps */
    devtool: !env || env.prod ? "inline-source-map" : ""
  }

  /* Production compilation */
  if (env && env.prod) {
    config.plugins.push(

      /* Uglify sources */
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          screw_ie8: true,     // eslint-disable-line camelcase
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,     // eslint-disable-line camelcase
          evaluate: true,
          if_return: true,     // eslint-disable-line camelcase
          join_vars: true      // eslint-disable-line camelcase
        },
        output: {
          comments: false
        }
      }),

      /* Minify images */
      new ImageminPlugin({
        test: /\.(ico|png|svg)$/i,
        svgo: null
        // Hack: Temporarily disabled, as SVGO removes the viewbox property
        // and setting the plugin to false doesn't have any effect.
        // {
        //   plugins: [
        //     {
        //       cleanupIDs: false,
        //       removeViewBox: false
        //     }
        //   ]
        // }
      }),

      /* Write manifest */
      new ManifestPlugin({

        /* This is an ugly workaround for the fact that the manifest plugin
           doesn't handle multiple chunks. See http://bit.ly/2BbfER9 */
        map(file) {
          file.name = file.path.replace(/\.[a-z0-9].+\.(css|js|svg)/i, ".$1")
          return file
        }
      }),

      /* Apply manifest */
      new EventHooksPlugin({
        "after-emit": (compilation, cb) => {
          const manifest = require(path.resolve("material/manifest.json"))
          Object.keys(compilation.assets).forEach(name => {
            if (name.match(/\.html/)) {
              const asset = compilation.assets[name]
              const replaced = Object.keys(manifest).reduce((source, key) => {
                return source.replace(key, manifest[key])
              }, asset.source())
              fs.writeFileSync(asset.existsAt, replaced)
            }
          })
          cb()
        }
      })
    )
  }

  /* Oh my god, that was a hell of a setup */
  return config
}
