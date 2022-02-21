# Vanillas

<img src="https://raw.githubusercontent.com/arizonatribe/vanillas/master/logo.png" alt="Vanillas JS" width="250" height="346" align="right" />

JavaScript utility functions. Comparable to [Lodash](https://lodash.com) or [Ramda](https://ramdajs.com), but faster. In some cases it even outperforms native implementations (or leverages native implementations that are messy to type out).

## Docs

View the [full docs](https://arizonatribe.github.io/vanillas/). These are always in-sync with the JsDoc code annotations.

## Installation

```
npm install vanillas
```

## Benchmarks

Run any of the files in the `benchmark/test/` directory.

Examples (run one or more benchmark tests, space-delimited):
```
npm run benchmark compose
npm run benchmark propAt
npm run benchmark mapObject
npm run benchmark compose mapObject propAt
```

Or you can run all of them (grab a cup of coffee while you wait):

```
npm run benchmark
```

[View Current Benchmarks](https://github.com/arizonatribe/vanillas/blob/master/BENCHMARKS.md)
