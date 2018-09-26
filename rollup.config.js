const babel = require('rollup-plugin-babel')
const nodeResolve = require('rollup-plugin-node-resolve')
const replace = require('rollup-plugin-replace')
const {terser} = require('rollup-plugin-terser')

const configs = [{
  input: 'src/index.js',
  output: {
    name: 'futilities',
    exports: 'named',
    indent: false,
    file: 'lib/index.js',
    format: 'cjs'
  },
  plugins: [
    nodeResolve({jsnext: true}),
    babel()
  ]
}, {
  input: 'src/index.js',
  output: {
    name: 'futilities',
    exports: 'named',
    indent: false,
    file: 'es/index.js',
    format: 'es'
  },
  plugins: [
    nodeResolve({jsnext: true}),
    babel()
  ]
}, {
  input: 'src/index.js',
  output: {
    name: 'futilities',
    exports: 'named',
    indent: false,
    file: 'dist/futilities.js',
    format: 'umd'
  },
  plugins: [
    nodeResolve({jsnext: true}),
    babel({exclude: 'node_modules/**'}),
    replace({'process.env.NODE_ENV': JSON.stringify('development')})
  ]
}, {
  input: 'src/index.js',
  output: {
    name: 'futilities',
    exports: 'named',
    indent: false,
    file: 'dist/futilities.min.js',
    format: 'umd'
  },
  plugins: [
    nodeResolve({jsnext: true}),
    babel({exclude: 'node_modules/**'}),
    replace({'process.env.NODE_ENV': JSON.stringify('production')}),
    terser({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  ]
}]

module.exports = configs
