function getCommands(env, paths) {
  return [{
    name: "linting",
    command: paths.eslint,
    args: ["src"],
    context: { stdio: "inherit", env },
    description: "✅ Linted the source files"
  }, {
    name: "testing",
    command: paths.tape,
    args: ["--require=@babel/register", "test/index.js", ` | ${paths.faucet}`],
    context: { stdio: "inherit", env, shell: true },
    description: "✅ Ran the unit tests"
  }, {
    name: "copying type definitions",
    command: paths.copy,
    args: [paths.types, paths.build],
    context: { stdio: "inherit", env },
    description: "✅ Copied TypeScript type definitions"
  }, {
    name: "transpiling (cjs)",
    command: paths.babel,
    args: ["src", "--out-dir", "build"],
    context: { stdio: "inherit", env: { ...env, BABEL_ENV: "cjs" } },
    description: "✅ Transpiled to CommonJs files"
  }, {
    name: "transpiling (esm)",
    command: paths.babel,
    args: ["src", "--out-dir", "build/es"],
    context: { stdio: "inherit", env: { ...env, BABEL_ENV: "es" } },
    description: "✅ Transpiled to ES Modules (ESM) files"
  }, {
    name: "transpiling (umd)",
    command: paths.rollup,
    args: ["-c"],
    context: { stdio: "inherit", env: { ...env, NODE_ENV: "development" } },
    description: "✅ Transpiled to Universal Module Definition (UMD) files (minified)"
  }, {
    name: "transpiling (umd minified)",
    command: paths.rollup,
    args: ["-c"],
    context: { stdio: "inherit", env: { ...env, NODE_ENV: "production" } },
    description: "✅ Transpiled to Universal Module Definition (UMD) files (minified)"
  }]
}

module.exports = getCommands
