const commonjs = require('rollup-plugin-commonjs')
const nodeResolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')
const replace = require('rollup-plugin-replace')
const uglify = require('rollup-plugin-uglify')
const {minify} = require('uglify-es')

const env = process.env.NODE_ENV
const config = {
  input: 'lib/index.js',
  plugins: [nodeResolve({jsnext: true})]
}

if (env === 'es' || env === 'commonjs') {
  config.output = {format: env, indent: false, exports: 'named'}
  config.plugins.push(
    babel({
      plugins: ['external-helpers']
    })
  )
}

if (env === 'development' || env === 'production') {
  config.output = {format: 'umd', name: 'futilities', indent: false, exports: 'named'}
  config.plugins.push(
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    }),
    replace({'process.env.NODE_ENV': JSON.stringify(env)})
  )
}

if (env === 'production') {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    }, minify)
  )
}

module.exports = config
