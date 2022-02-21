# Vanillas

<style type="text/css">
img {
  display: block;
  padding: 0 !important;
  border-radius: 50%;
  border: 5px solid whitesmoke;
  box-shadow: 1px 1px 2px lightgray inset, 1px 1px 2px gray;
}
</style>
<img
  src="https://raw.githubusercontent.com/arizonatribe/vanillas/master/media/logo_sunset.png"
  alt="Vanillas JS"
  width="250"
  height="250"
  align="right"
/>

JavaScript utility functions. Comparable to [Lodash](https://lodash.com) or [Ramda](https://ramdajs.com), but faster. In some cases it even outperforms native implementations (or leverages native implementations that are messy to type out).

## Why Another Utils Lib?

[Lodash](https://lodash.com)/Underscore created an API many years ago which is [unfavorable to Currying](https://www.youtube.com/watch?v=m3svKOdZijA). For currying to be possible you need the _final_ argument to your function to be the data on which you operate (rather than the first arg). And although Lodash/Underscore has an "fp" (functional programming) subset, the fundamental flaw in the argument order can't be corrected.

A similar utils library [Ramda](https://ramdajs.com) was created as a classic functional programming library, and the most notable change was to reorder the arguments to be favorable to currying. Ramda took it a step further than than (perhaps too far) of making _every_ function in the whole library curried. This isn't always desired. But the more critical flaw with Ramda is it is slow. Very slow.

Vanillas was created to correct those perceived flaws in _both_ Lodash/Underscore and Ramda. It [outperforms](https://github.com/arizonatribe/vanillas/blob/master/BENCHMARKS.md) those libraries, makes currying possible, yet allows you to opt-in to currying.

## Docs

View the [full docs](https://arizonatribe.github.io/vanillas/). These are generated from - and always in-sync with - the JsDoc code annotations.

## Curried vs Non-Curried

Importing from the root `vanillas` namespace yields all the non-curried utility functions (including the `curry()` function itself if you want to do your own). To use the _curried_ versions of the Vanillas utility functions though, just import from the `vanillas/curried` directory rather than from the root.

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
