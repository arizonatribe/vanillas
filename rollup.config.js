const { babel } = require("@rollup/plugin-babel")
const commonjs = require("@rollup/plugin-commonjs")
const { nodeResolve } = require("@rollup/plugin-node-resolve")
const replace = require("@rollup/plugin-replace")
const {terser} = require("rollup-plugin-terser")

const env = process.env.NODE_ENV

const config = {
  input: "src/index.js",
  output: {
    name: "vanillas",
    exports: "named",
    indent: false,
    file: "build/dist/vanillas.js",
    format: "umd"
  },
  plugins: [
    nodeResolve({jsnext: true}),
    commonjs(),
    babel({exclude: "node_modules/**"}),
    replace({"process.env.NODE_ENV": JSON.stringify(env)})
  ]
}

if (env === "production") {
  config.output.file = "build/dist/vanillas.min.js"
  config.plugins.push(
    terser({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  )
}

module.exports = config
