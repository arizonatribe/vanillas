# Futilities

Function utility helpers for JavaScript. Comparable to [Lodash](https://lodash.com) or [Ramda](https://ramdajs.com), but faster. Even outperforms native implementations (or leverages native implementations that are messy to type out).

## Installation

```
npm install futilities
```

## Benchmarks

Run any of the `*.benchmark.js` files in this repo's `test/` folder.

#### Any

```
Futilities "any" x 10,371,651 ops/sec ±0.50% (90 runs sampled)
Lodash "some" x 9,606,827 ops/sec ±0.47% (91 runs sampled)
Ramda "any" x 4,035,348 ops/sec ±0.63% (90 runs sampled)
Array.some (native) x 10,743,382 ops/sec ±0.60% (89 runs sampled)
Fastest is Array.some (native)
```

#### Assign

```
Futilities "assign" x 3,310,409 ops/sec ±0.63% (88 runs sampled)
Object.assign (native) x 629,694 ops/sec ±0.47% (91 runs sampled
Fastest is Futilities "assign"
```

#### Clone

```
Futilities "clone" x 7,257,434 ops/sec ±0.49% (89 runs sampled)
Lodash "clone" x 1,530,008 ops/sec ±0.56% (88 runs sampled)
Ramda "clone" x 754,609 ops/sec ±0.74% (88 runs sampled)
clone by destructuring (native) x 1,826,349 ops/sec ±0.51% (91 runs sampled)
Object.assign({}, ..) (native) x 1,994,250 ops/sec ±0.55% (88 runs sampled)
Fastest is Futilities "clone"
```

#### CloneDeep

```
Futilities "clone" x 982,192 ops/sec ±0.79% (84 runs sampled)
Lodash "cloneDeep" x 251,224 ops/sec ±0.69% (86 runs sampled)
Ramda "clone" x 246,035 ops/sec ±0.88% (88 runs sampled)
clone by destructuring (native) x 406,078 ops/sec ±0.77% (88 runs sampled)
Fastest is Futilities "clone"
```

#### Compose

```
Futilities "compose" x 125,784,302 ops/sec ±0.69% (90 runs sampled)
Redux "compose" x 12,064,234 ops/sec ±0.60% (90 runs sampled)
Ramda "compose" x 816,960 ops/sec ±1.22% (87 runs sampled)
Fastest is Futilities "compose"
```

#### Concat

```
Futilities "concat" x 46,878,383 ops/sec ±0.52% (91 runs sampled)
Lodash "concat" x 2,444,155 ops/sec ±0.61% (91 runs sampled)
Ramda "concat" x 6,934,991 ops/sec ±0.61% (88 runs sampled)
[ ...val1, ...val2 ] (native) x 21,480,488 ops/sec ±3.52% (90 runs sampled)
Fastest is Futilities "concat"
```

#### Each

```
Futilities "each" x 159,957,182 ops/sec ±1.20% (89 runs sampled)
Lodash "each" x 4,320,212 ops/sec ±1.20% (89 runs sampled)
Array.forEach (native) x 133,559,849 ops/sec ±0.76% (85 runs sampled)
Fastest is Futilities "each"
```

#### Entries

Native is considerably faster than any other implementation, but if you're in a situation where you have to support older browsers or are running an older version of NodeJs, perhaps you can use this implementation.

```
Futilities "entries" x 11,010,327 ops/sec ±0.73% (89 runs sampled)
Lodash "toPairs" x 6,712,076 ops/sec ±2.55% (87 runs sampled)
Ramda "toPairs" x 5,070,977 ops/sec ±0.49% (90 runs sampled)
Object.entries( ) (native) x 20,405,515 ops/sec ±8.88% (84 runs sampled)
Fastest is Object.entries( ) (native)
```

#### Find

```
Futilities "find" x 10,195,808 ops/sec ±0.61% (89 runs sampled)
Lodash "find" x 6,274,331 ops/sec ±0.52% (87 runs sampled)
Ramda "find" x 4,090,253 ops/sec ±0.54% (86 runs sampled)
Array.find (native) x 10,378,951 ops/sec ±0.77% (87 runs sampled)
Fastest is Array.find (native)
```

#### FindIndex

```
Futilities "findIndex" x 10,287,743 ops/sec ±0.64% (87 runs sampled)
Lodash "findIndex" x 9,575,133 ops/sec ±0.51% (91 runs sampled)
Ramda "findIndex" x 4,112,058 ops/sec ±0.58% (89 runs sampled)
Array.findIndex (native) x 10,422,023 ops/sec ±0.66% (88 runs sampled)
Fastest is Array.findIndex (native)
```

#### Map

```
Futilities "map" x 5,419,323 ops/sec ±0.53% (89 runs sampled)
Lodash "map" x 4,036,126 ops/sec ±0.55% (90 runs sampled)
Ramda "map" x 2,621,080 ops/sec ±0.71% (81 runs sampled)
Array.map (native) x 5,478,367 ops/sec ±0.46% (91 runs sampled)
Fastest is Array.map (native)
```

#### MapObject

```
Futilities "mapObject" x 3,141,917 ops/sec ±0.58% (89 runs sampled)
Lodash "mapValues" x 2,182,519 ops/sec ±0.45% (87 runs sampled)
Ramda "map" x 924,442 ops/sec ±0.93% (88 runs sampled)
Object.keys( ).reduce() (native) x 535,165 ops/sec ±0.62% (91 runs sampled)
Object.entries().reduce() (native) x 533,170 ops/sec ±0.63% (89 runs sampled)
Fastest is Futilities "mapObject"
```

#### MapString

```
Futilities "map" x 424,190 ops/sec ±0.49% (89 runs sampled)
String.split().map().join() (native) x 297,798 ops/sec ±0.42% (91 runs sampled)
Fastest is Futilities "map"
```

#### Merge

```
Futilities "merge" x 2,869,548 ops/sec ±1.08% (87 runs sampled)
Lodash "merge" x 2,533,053 ops/sec ±0.45% (91 runs sampled)
Ramda "merge" x 701,610 ops/sec ±0.63% (88 runs sampled)
Object.assign({}, ..) (native) x 754,347 ops/sec ±0.49% (90 runs sampled)
Fastest is Futilities "merge"
```

#### Omit

```
Futilities "omit" x 6,875,125 ops/sec ±0.51% (89 runs sampled)
Lodash "omit" x 472,669 ops/sec ±0.59% (90 runs sampled)
Ramda "omit" x 5,259,488 ops/sec ±0.66% (87 runs sampled)
Object.keys().filter().reduce() (native) x 815,126 ops/sec ±0.68% (86 runs sampled)
Fastest is Futilities "omit"
```

#### Pick

```
Futilities "pick" x 10,894,150 ops/sec ±0.63% (88 runs sampled)
Lodash "pick" x 873,444 ops/sec ±0.69% (89 runs sampled)
Ramda "pick" x 7,812,656 ops/sec ±0.94% (86 runs sampled)
Array.prototype.reduce (native) x 996,410 ops/sec ±0.68% (87 runs sampled)
Fastest is Futilities "pick"
```

#### PropAt

There's really no comparison to native in this type of functionality. It's recommended (if possible) you add the [babel-plugin-optional-chaining](https://www.npmjs.com/package/babel-plugin-transform-optional-chaining) to your `.babelrc` (or webpack `babel-loader`) since it transpiles down to the (very messy and typo-prone) native syntax from the `obj?.lorem?.consectetur?.adipiscing` syntax (which is currently a Stage 1 ECMAScript proposal).

```
Futilities "propAt" x 41,396,072 ops/sec ±0.43% (90 runs sampled)
Lodash "get" x 26,546,926 ops/sec ±0.51% (91 runs sampled)
Ramda "path" x 24,092,101 ops/sec ±0.50% (90 runs sampled)
&& until you find it (native) x 757,239,104 ops/sec ±1.65% (82 runs sampled)
Fastest is && until you find it (native)
```

#### Reduce

```
Futilities "reduce" x 645,224 ops/sec ±0.65% (90 runs sampled)
Lodash "reduce" x 582,406 ops/sec ±0.77% (84 runs sampled)
Ramda "reduce" x 548,940 ops/sec ±0.63% (87 runs sampled)
Array.reduce (native) x 640,364 ops/sec ±0.65% (87 runs sampled)
Fastest is (pretty much) a tie between Futilities "reduce" and Array.reduce (native)
```

#### Size

Strings:
```
Futilities "size" x 805,000,722 ops/sec ±0.65% (88 runs sampled)
Lodash "size" x 51,594,600 ops/sec ±0.80% (87 runs sampled)
Ramda "length" x 6,853,714 ops/sec ±0.47% (87 runs sampled)
Fastest is Futilities "size"
```

Arrays:
```
Futilities "size" x 772,753,368 ops/sec ±1.46% (86 runs sampled)
Lodash "size" x 23,710,436 ops/sec ±1.98% (88 runs sampled)
Ramda "length" x 7,131,694 ops/sec ±0.59% (90 runs sampled)
Fastest is Futilities "size"
```

Objects:
```
Futilities "size" x 67,945,118 ops/sec ±0.57% (91 runs sampled)
Lodash "size" x 23,298,147 ops/sec ±0.33% (93 runs sampled)
Fastest is Futilities "size"
```
