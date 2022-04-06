# Benchmark tests

This project regularly benchmarks itself against similar projects like [lodash](https://www.npmjs.com/package/lodash), [ramda](https://www.npmjs.com/package/ramda) and [fxjs](https://www.npmjs.com/package/fxjs). In addition to benchmarking against those three main util libraries, there are a few benchmarks against specialized libraries (as is the case for the [fuzzy filter](#fuzzy) and the many [object validator](#validate) libraries out there).

Not every library offers the same functionality, but if you notice any untested util function, please submit an __issue__ so the benchmark test can be added.

Table of Contents:

  - [any](#any)
  - [assign](#assign)
  - [clone](#clone)
  - [cloneDeep](#clonedeep)
  - [compose](#compose)
  - [concat](#concat)
  - [cond](#cond)
  - [contains](#contains)
  - [curry](#curry)
  - [difference](#difference)
  - [each](#each)
  - [entries](#entries)
  - [escape](#escape)
  - [filter](#filter)
  - [filterObject](#filterobject)
  - [find](#find)
  - [findIndex](#findindex)
  - [flatten](#flatten)
  - [fuzzy](#fuzzy)
  - [intersection](#intersection)
  - [invert](#invert)
  - [isEmpty](#isempty)
  - [isEqual](#isequal)
  - [isObject](#isobject)
  - [isPromise](#ispromise)
  - [map](#map)
  - [mapObject](#mapobject)
  - [mapSpec](#mapspec)
  - [mapString](#mapstring)
  - [merge](#merge)
  - [omit](#omit)
  - [pick](#pick)
  - [pipe](#pipe)
  - [propAt](#propat)
  - [propEquals](#propequals)
  - [reduce](#reduce)
  - [size](#size)
  - [uniq](#uniq)
  - [uniqBy](#uniqby)
  - [validate](#validate)
  - [values](#values)

# Any

Check an Array of items (of any type) to see if any item satisfies a given predicate function.

```
[Vanillas "any"]
  - 8,907,373 ops/sec
  - 465,468 times executed
  - 95 runs sampled
[Lodash "some"]
  - 8,520,540 ops/sec
  - 452,374 times executed
  - 94 runs sampled
[FxJs "some"]
  - 74,865 ops/sec
  - 4,070 times executed
  - 84 runs sampled
[Ramda "any"]
  - 5,305,245 ops/sec
  - 283,101 times executed
  - 93 runs sampled
[(native) "Array.some()"]
  - 8,377,863 ops/sec
  - 452,698 times executed
  - 90 runs sampled

⏱ Fastest is Vanillas "any" 🚀
   - Lodash "some" .............. 4.54% slower!
   - FxJs "some" ................ 11,797.87% slower!
   - Ramda "any" ................ 67.9% slower!
   - (native) "Array.some()" .... 6.32% slower!
```

# Assign

Assigns the values from one or more Objects onto another Object.

```
[Vanillas "assign"]
  - 2,766,048 ops/sec
  - 141,143 times executed
  - 95 runs sampled
[FxJs "assign"]
  - 197,000 ops/sec
  - 9,957 times executed
  - 98 runs sampled
[(native) "Object.assign()"]
  - 3,479,202 ops/sec
  - 176,732 times executed
  - 96 runs sampled

⏱ Fastest is (native) "Object.assign()" 🚀
   - Vanillas "assign" ............. 25.78% slower!
   - FxJs "assign" ................. 1,666.09% slower!
```

# Clone

Recursively copies the content of an Object into a new Object

Separated into two test suites because Lodash separates clone and "deep" cloning into two different util functions.

"Deep" clone:

```
[Vanillas "clone"]
  - 1,016,538 ops/sec
  - 51,398 times executed
  - 96 runs sampled
[Lodash "cloneDeep"]
  - 259,058 ops/sec
  - 13,173 times executed
  - 94 runs sampled
[Ramda "clone"]
  - 221,290 ops/sec
  - 11,205 times executed
  - 96 runs sampled
[FxJs "clone"]
  - 3,986 ops/sec
  - 225 times executed
  - 91 runs sampled
[(native) "clone by destructuring"]
  - 351,799 ops/sec
  - 17,890 times executed
  - 94 runs sampled

⏱ Fastest is Vanillas "clone" 🚀
   - Lodash "cloneDeep" ................... 292.4% slower!
   - Ramda "clone" ........................ 359.37% slower!
   - FxJs "clone" ......................... 25,403.52% slower!
   - (native) "clone by destructuring" .... 188.95% slower!
```

"Shallow" clone:

```
[Vanillas "clone"]
  - 4,418,125 ops/sec
  - 225,377 times executed
  - 96 runs sampled
[Lodash "clone"]
  - 1,386,279 ops/sec
  - 72,170 times executed
  - 94 runs sampled
[Ramda "clone"]
  - 642,387 ops/sec
  - 33,030 times executed
  - 97 runs sampled
[FxJs "clone"]
  - 15,978 ops/sec
  - 879 times executed
  - 88 runs sampled
[(native) "clone by destructuring"]
  - 2,257,332 ops/sec
  - 116,569 times executed
  - 93 runs sampled
[(native) "Object.assign({}, ..)"]
  - 8,876,789 ops/sec
  - 478,847 times executed
  - 91 runs sampled

⏱ Fastest is (native) "Object.assign({}, ..)" 🚀
   - Vanillas "clone" ..................... 100.92% slower!
   - Lodash "clone" ....................... 540.33% slower!
   - Ramda "clone" ........................ 1,281.85% slower!
   - FxJs "clone" ......................... 55,457.98% slower!
   - (native) "clone by destructuring" .... 293.24% slower!
```

# Compose

Creates a chain of Functions that will be executed in sequnce (from right to left), with the value from the previous Function fed into the next Function.

```
[Vanillas "compose"]
  - 12,673,803 ops/sec
  - 641,742 times executed
  - 95 runs sampled
[Redux "compose"]
  - 7,754,337 ops/sec
  - 395,379 times executed
  - 96 runs sampled
[Ramda "compose"]
  - 664,048 ops/sec
  - 34,458 times executed
  - 91 runs sampled

⏱ Fastest is Vanillas "compose" 🚀
   - Redux "compose" ....... 63.44% slower!
   - Ramda "compose" ....... 1,808.57% slower!
```

# Concat

Adds the values from one Array onto another Array, returned as a new Array (ie, it does not mutate the first Array).

```
[Vanillas "concat"]
  - 26,828,251 ops/sec
  - 1,471,274 times executed
  - 88 runs sampled
[Lodash "concat"]
  - 2,451,582 ops/sec
  - 124,521 times executed
  - 95 runs sampled
[Ramda "concat"]
  - 4,294,240 ops/sec
  - 249,531 times executed
  - 82 runs sampled
[(native) "Array.concat()"]
  - 4,691,318 ops/sec
  - 254,934 times executed
  - 90 runs sampled
[(native) "[ ...val1, ...val2 ]"]
  - 4,090,197 ops/sec
  - 225,370 times executed
  - 85 runs sampled

⏱ Fastest is Vanillas "concat" 🚀
   - Lodash "concat" .................... 994.32% slower!
   - Ramda "concat" ..................... 524.75% slower!
   - (native) "Array.concat()" .......... 471.87% slower!
   - (native) "[ ...val1, ...val2 ]" .... 555.92% slower!
```

# Cond

Several pieces of conditional logic to apply against a value and the _first_ one which matches will have a corresponding transformation applied to it.

```
[Vanillas "cond"]
  - 1,790,634 ops/sec
  - 90,558 times executed
  - 98 runs sampled
[Ramda "cond"]
  - 777,958 ops/sec
  - 39,355 times executed
  - 95 runs sampled
[FxJs "cond"]
  - 79,169 ops/sec
  - 4,551 times executed
  - 87 runs sampled
[(native) "If/Else/ElseIf"]
  - 1,889,885 ops/sec
  - 96,595 times executed
  - 93 runs sampled

⏱ Fastest is (native) "If/Else/ElseIf" 🚀
   - Vanillas "cond" .............. 5.54% slower!
   - Ramda "cond" ................. 142.93% slower!
   - FxJs "cond" .................. 2,287.16% slower!
```

# Contains

Checks if a given value is present in a String OR Array

```
[Vanillas "contains" (array)]
  - 64,617,661 ops/sec
  - 3,262,795 times executed
  - 94 runs sampled
[Lodash "includes" (array)]
  - 13,020,802 ops/sec
  - 663,428 times executed
  - 95 runs sampled
[Ramda "contains" (array)]
  - 42,073,824 ops/sec
  - 2,140,272 times executed
  - 98 runs sampled
[FxJs "includes" (array)]
  - 97,557 ops/sec
  - 5,226 times executed
  - 93 runs sampled
[(native) "Array.includes()"]
  - 43,593,636 ops/sec
  - 2,225,462 times executed
  - 94 runs sampled

⏱ Fastest is Vanillas "contains" (array) 🚀
   - Lodash "includes" (array) ...... 396.26% slower!
   - Ramda "contains" (array) ....... 53.58% slower!
   - FxJs "includes" (array) ........ 66,135.82% slower!
   - (native) "Array.includes()" .... 48.23% slower!

[Vanillas "contains" (string)]
  - 30,367,485 ops/sec
  - 1,564,120 times executed
  - 94 runs sampled
[Lodash "includes" (string)]
  - 30,195,702 ops/sec
  - 1,574,227 times executed
  - 94 runs sampled
[Ramda "contains" (string)]
  - 23,805,729 ops/sec
  - 1,220,270 times executed
  - 94 runs sampled
[FxJs "includes" (string)]
  - 23,577,154 ops/sec
  - 1,227,160 times executed
  - 95 runs sampled
[(native) "String.includes()"]
  - 24,749,467 ops/sec
  - 1,317,255 times executed
  - 93 runs sampled

⏱ Fastest is Vanillas "contains" (string) 🚀
   - Lodash "includes" (string) ...... 0.57% slower!
   - Ramda "contains" (string) ....... 27.56% slower!
   - FxJs "includes" (string) ........ 28.8% slower!
   - (native) "String.includes()" .... 22.7% slower!
```

# Curry

Takes a Function whose params are meant to be supplied all at once and changes it so they can be supplied one at a time.

```
[Vanillas "curry"]
  - 23,802,477 ops/sec
  - 1,214,538 times executed
  - 95 runs sampled
[Lodash "curry"]
  - 735,485 ops/sec
  - 40,474 times executed
  - 88 runs sampled
[Ramda "curry"]
  - 3,353,407 ops/sec
  - 172,099 times executed
  - 94 runs sampled
[FxJs "curry"]
  - 4,092,270 ops/sec
  - 207,136 times executed
  - 98 runs sampled

⏱ Fastest is Vanillas "curry" 🚀
   - Lodash "curry" ...... 3,136.3% slower!
   - Ramda "curry" ....... 609.8% slower!
   - FxJs "curry" ........ 481.64% slower!

[Executing Vanillas 2-arg curried function]
  - 13,492,911 ops/sec
  - 703,879 times executed
  - 89 runs sampled
[Executing Lodash 2-arg curried function]
  - 368,763 ops/sec
  - 19,910 times executed
  - 91 runs sampled
[Executing Ramda 2-arg curried function]
  - 2,383,741 ops/sec
  - 121,314 times executed
  - 91 runs sampled
[Executing FxJs 2-arg curried function]
  - 3,661,884 ops/sec
  - 189,061 times executed
  - 94 runs sampled

⏱ Fastest is Executing Vanillas 2-arg curried function 🚀
   - Executing Lodash 2-arg curried function ...... 3,558.96% slower!
   - Executing Ramda 2-arg curried function ....... 466.04% slower!
   - Executing FxJs 2-arg curried function ........ 268.47% slower!

[Executing Vanillas 3-arg curried function]
  - 10,946,710 ops/sec
  - 553,848 times executed
  - 98 runs sampled
[Executing Lodash 3-arg curried function]
  - 254,618 ops/sec
  - 13,458 times executed
  - 92 runs sampled
[Executing Ramda 3-arg curried function]
  - 2,057,042 ops/sec
  - 104,454 times executed
  - 96 runs sampled

⏱ Fastest is Executing Vanillas 3-arg curried function 🚀
   - Executing Lodash 3-arg curried function ...... 4,199.27% slower!
   - Executing Ramda 3-arg curried function ....... 432.16% slower!

[Executing Vanillas 4-arg curried function]
  - 6,557,769 ops/sec
  - 332,459 times executed
  - 90 runs sampled
[Executing Lodash 4-arg curried function]
  - 160,864 ops/sec
  - 9,001 times executed
  - 90 runs sampled
[Executing Ramda 4-arg curried function]
  - 1,431,981 ops/sec
  - 80,460 times executed
  - 84 runs sampled

⏱ Fastest is Executing Vanillas 4-arg curried function 🚀
   - Executing Lodash 4-arg curried function ...... 3,976.58% slower!
   - Executing Ramda 4-arg curried function ....... 357.95% slower!

[Executing Vanillas 5+arg curried function]
  - 1,867,959 ops/sec
  - 102,178 times executed
  - 90 runs sampled
[Executing Lodash 5+arg curried function]
  - 122,287 ops/sec
  - 6,964 times executed
  - 88 runs sampled
[Executing Ramda 5+arg curried function]
  - 1,239,173 ops/sec
  - 67,545 times executed
  - 88 runs sampled

⏱ Fastest is Executing Vanillas 5+arg curried function 🚀
   - Executing Lodash 5+arg curried function ...... 1,427.53% slower!
   - Executing Ramda 5+arg curried function ....... 50.74% slower!
```

# Difference

Compares two lists of Strings/Numbers and returns the values that are different between the two lists

```
[Vanillas "difference"]
  - 13,883,805 ops/sec
  - 699,428 times executed
  - 97 runs sampled
[Lodash "difference"]
  - 3,130,573 ops/sec
  - 158,207 times executed
  - 95 runs sampled
[FxJs "difference"]
  - 53,837 ops/sec
  - 2,868 times executed
  - 94 runs sampled
[Ramda "difference"]
  - 8,849,290 ops/sec
  - 444,245 times executed
  - 96 runs sampled

⏱ Fastest is Vanillas "difference" 🚀
   - Lodash "difference" ...... 343.49% slower!
   - FxJs "difference" ........ 25,688.74% slower!
   - Ramda "difference" ....... 56.89% slower!

[Vanillas "difference" (curried)]
  - 12,089,513 ops/sec
  - 624,539 times executed
  - 90 runs sampled
[FxJs "difference" (curried)]
  - 52,607 ops/sec
  - 2,831 times executed
  - 92 runs sampled
[Ramda "difference" (curried)]
  - 3,220,686 ops/sec
  - 165,482 times executed
  - 97 runs sampled

⏱ Fastest is Vanillas "difference" (curried) 🚀
   - FxJs "difference" (curried) ........ 22,880.61% slower!
   - Ramda "difference" (curried) ....... 275.37% slower!
```

# Each

A faster forEach that provides the same API as native.

```
[(native) "for..of"]
  - 2,962,967 ops/sec
  - 152,937 times executed
  - 95 runs sampled
[(native) "for"]
  - 4,597,011 ops/sec
  - 231,967 times executed
  - 96 runs sampled
[(native) "while"]
  - 4,645,038 ops/sec
  - 234,034 times executed
  - 98 runs sampled
[Vanillas "each"]
  - 4,441,016 ops/sec
  - 224,821 times executed
  - 98 runs sampled
[FxJs "each"]
  - 439,892 ops/sec
  - 22,577 times executed
  - 97 runs sampled
[Lodash "each"]
  - 3,547,386 ops/sec
  - 179,329 times executed
  - 94 runs sampled
[(native) "Array.forEach"]
  - 4,418,190 ops/sec
  - 225,940 times executed
  - 97 runs sampled

⏱ Fastest is (native) "while" 🚀
   - (native) "for..of" .......... 56.77% slower!
   - (native) "for" .............. 1.04% slower!
   - Vanillas "each" ............. 4.59% slower!
   - FxJs "each" ................. 955.95% slower!
   - Lodash "each" ............... 30.94% slower!
   - (native) "Array.forEach" .... 5.13% slower!
```

# Entries

Extracts an Array of key/value pairs from an Object.

```
[Vanillas "entries"]
  - 10,495,077 ops/sec
  - 546,498 times executed
  - 95 runs sampled
[Lodash "toPairs"]
  - 6,142,506 ops/sec
  - 315,746 times executed
  - 96 runs sampled
[Ramda "toPairs"]
  - 4,037,643 ops/sec
  - 203,586 times executed
  - 96 runs sampled
[FxJs "entries"]
  - 889,965 ops/sec
  - 44,905 times executed
  - 96 runs sampled
[(native) "Object.entries( )"]
  - 15,610,643 ops/sec
  - 787,318 times executed
  - 94 runs sampled

⏱ Fastest is (native) "Object.entries( )" 🚀
   - Vanillas "entries" .............. 48.74% slower!
   - Lodash "toPairs" ................ 154.14% slower!
   - Ramda "toPairs" ................. 286.63% slower!
   - FxJs "entries" .................. 1,654.07% slower!
```

# Escape

Converts ampersands, angle brackets, apostrophes and blockquotes to their HTML encoded equivalents

```
[Vanillas "escapeHtml"]
  - 958,875 ops/sec
  - 51,563 times executed
  - 89 runs sampled
[Lodash "escape"]
  - 997,647 ops/sec
  - 51,257 times executed
  - 95 runs sampled

⏱ Fastest is Lodash "escape" 🚀
   - Vanillas "escapeHtml" .... 4.04% slower!
```

# Filter

Applies a filtering function you provide over a value you provide, according to its type.

```
[Vanillas "filter"]
  - 6,978,032 ops/sec
  - 353,271 times executed
  - 96 runs sampled
[Lodash "filter"]
  - 5,214,575 ops/sec
  - 267,097 times executed
  - 95 runs sampled
[Ramda "filter"]
  - 3,637,837 ops/sec
  - 183,120 times executed
  - 97 runs sampled
[FxJs "filter"]
  - 119,015 ops/sec
  - 6,609 times executed
  - 90 runs sampled
[(native) "Array.filter()"]
  - 6,743,873 ops/sec
  - 355,037 times executed
  - 91 runs sampled

⏱ Fastest is Vanillas "filter" 🚀
   - Lodash "filter" .............. 33.82% slower!
   - Ramda "filter" ............... 91.82% slower!
   - FxJs "filter" ................ 5,763.14% slower!
   - (native) "Array.filter()" .... 3.47% slower!

[Vanillas (curried) "filter"]
  - 5,157,612 ops/sec
  - 263,021 times executed
  - 96 runs sampled
[Ramda (curried) "filter"]
  - 2,111,690 ops/sec
  - 110,185 times executed
  - 96 runs sampled
[FxJs (curried) "filter"]
  - 122,587 ops/sec
  - 6,522 times executed
  - 91 runs sampled

⏱ Fastest is Vanillas (curried) "filter" 🚀
   - Ramda (curried) "filter" ....... 144.24% slower!
   - FxJs (curried) "filter" ........ 4,107.31% slower!
```

# FilterObject

Applies a filtering function you provide over every value in a given Object.

```
[Vanillas "filterObject"]
  - 4,742,136 ops/sec
  - 244,252 times executed
  - 92 runs sampled
[Ramda "filter"]
  - 1,284,917 ops/sec
  - 65,066 times executed
  - 95 runs sampled
[(native) "Object.entries().filter().reduce()"]
  - 825,214 ops/sec
  - 41,738 times executed
  - 95 runs sampled

⏱ Fastest is Vanillas "filterObject" 🚀
   - Ramda "filter" ................................... 269.06% slower!
   - (native) "Object.entries().filter().reduce()" .... 474.66% slower!
```

# Find

Find a single value from an array of values, based on criteria defined in a predicate function.

```
[Vanillas "find"]
  - 8,360,981 ops/sec
  - 432,806 times executed
  - 96 runs sampled
[Lodash "find"]
  - 5,262,398 ops/sec
  - 270,277 times executed
  - 92 runs sampled
[Ramda "find"]
  - 5,401,366 ops/sec
  - 275,462 times executed
  - 96 runs sampled
[FxJs "find"]
  - 146,027 ops/sec
  - 7,878 times executed
  - 86 runs sampled
[(native) "Array.find()"]
  - 8,583,865 ops/sec
  - 436,513 times executed
  - 98 runs sampled

⏱ Fastest is (native) "Array.find()" 🚀
   - Vanillas "find" ............ 2.67% slower!
   - Lodash "find" .............. 63.12% slower!
   - Ramda "find" ............... 58.92% slower!
   - FxJs "find" ................ 5,778.29% slower!
```

# FindIndex

Find the index of a single value from an array of values, based on criteria defined in a predicate function.

```
[Vanillas "findIndex"]
  - 8,564,031 ops/sec
  - 456,807 times executed
  - 91 runs sampled
[Lodash "findIndex"]
  - 8,519,431 ops/sec
  - 461,167 times executed
  - 91 runs sampled
[Ramda "findIndex"]
  - 5,383,555 ops/sec
  - 280,764 times executed
  - 96 runs sampled
[FxJs "findIndex"]
  - 56,560 ops/sec
  - 3,249 times executed
  - 80 runs sampled
[(native) "Array.findIndex()"]
  - 9,107,004 ops/sec
  - 462,689 times executed
  - 94 runs sampled

⏱ Fastest is (native) "Array.findIndex()" 🚀
   - Vanillas "findIndex" ............ 6.34% slower!
   - Lodash "findIndex" .............. 6.9% slower!
   - Ramda "findIndex" ............... 69.16% slower!
   - FxJs "findIndex" ................ 16,001.49% slower!
```

# Flatten

Extracts nested arrays (of any depth) from a provided array, placing them onto on single new array.

```
[Vanillas "flatten"]
  - 13,212,116 ops/sec
  - 668,462 times executed
  - 93 runs sampled
[Lodash "flatten"]
  - 10,815,631 ops/sec
  - 547,652 times executed
  - 97 runs sampled
[Ramda "flatten"]
  - 398,414 ops/sec
  - 20,154 times executed
  - 92 runs sampled
[FxJs "flat"]
  - 388,061 ops/sec
  - 20,009 times executed
  - 94 runs sampled

⏱ Fastest is Vanillas "flatten" 🚀
   - Lodash "flatten" ...... 22.16% slower!
   - Ramda "flatten" ....... 3,216.18% slower!
   - FxJs "flat" ........... 3,304.65% slower!
```

# Fuzzy

Performs a fuzzy search on a list of strings or objects.

```
[Vanillas Fuzzy (search for 'dickinson')]
  - 8,686 ops/sec
  - 443 times executed
  - 96 runs sampled
[Fuzzy (search for 'dickinson')]
  - 6,282 ops/sec
  - 319 times executed
  - 95 runs sampled
[Fuzzy-Search (search for 'dickinson')]
  - 5,589 ops/sec
  - 286 times executed
  - 95 runs sampled
[FuzzyJs (search for 'dickinson')]
  - 4,532 ops/sec
  - 229 times executed
  - 97 runs sampled

⏱ Fastest is Vanillas Fuzzy (search for 'dickinson') 🚀
   - Fuzzy (search for 'dickinson') ............. 38.28% slower!
   - Fuzzy-Search (search for 'dickinson') ...... 55.41% slower!
   - FuzzyJs (search for 'dickinson') ........... 91.67% slower!
```

# Intersection

Compares two lists of Strings/Numbers and returns the values that are in common (intersect) between the two lists

```
[Vanillas "intersection"]
  - 9,925,247 ops/sec
  - 521,106 times executed
  - 92 runs sampled
[Lodash "intersection"]
  - 2,423,806 ops/sec
  - 122,834 times executed
  - 90 runs sampled
[Ramda "intersection"]
  - 603,835 ops/sec
  - 31,787 times executed
  - 94 runs sampled
[FxJs "intersection"]
  - 37,258 ops/sec
  - 2,079 times executed
  - 89 runs sampled

⏱ Fastest is Vanillas "intersection" 🚀
   - Lodash "intersection" ...... 309.49% slower!
   - Ramda "intersection" ....... 1,543.7% slower!
   - FxJs "intersection" ........ 26,539.26% slower!

[Vanillas "intersection" (curried)]
  - 8,769,176 ops/sec
  - 464,133 times executed
  - 88 runs sampled
[Ramda "intersection" (curried)]
  - 542,169 ops/sec
  - 28,002 times executed
  - 95 runs sampled
[FxJs "intersection" (curried)]
  - 38,059 ops/sec
  - 2,101 times executed
  - 83 runs sampled

⏱ Fastest is Vanillas "intersection" (curried) 🚀
   - Ramda "intersection" (curried) ....... 1,517.43% slower!
   - FxJs "intersection" (curried) ........ 22,941.08% slower!
```

# Invert

Swaps the values for keys in a given object. So the values in that object should be the kind that _can_ be converted to unique string values

```
[Vanillas "invert"]
  - 6,658,873 ops/sec
  - 345,758 times executed
  - 92 runs sampled
[Lodash "invert"]
  - 5,243,861 ops/sec
  - 268,413 times executed
  - 94 runs sampled
[Ramda "invertObj"]
  - 1,835,326 ops/sec
  - 92,889 times executed
  - 98 runs sampled
[FxJs "invert"]
  - 273,704 ops/sec
  - 13,956 times executed
  - 98 runs sampled
[(native) "Object.keys( ).reduce()"]
  - 434,392 ops/sec
  - 22,125 times executed
  - 98 runs sampled

⏱ Fastest is Vanillas "invert" 🚀
   - Lodash "invert" ....................... 26.98% slower!
   - Ramda "invertObj" ..................... 262.82% slower!
   - FxJs "invert" ......................... 2,332.88% slower!
   - (native) "Object.keys( ).reduce()" .... 1,432.92% slower!
```

# IsEmpty

Checks if a value is empty. Arrays, Objects, Strings, Sets, and Null/Undefined values are considered empty if their length (or size) prop is zero (or if they are Null or Undefined).

```
[Vanillas "isEmpty"]
  - 70,520,454 ops/sec
  - 3,625,102 times executed
  - 97 runs sampled
[Lodash "isEmpty"]
  - 16,680,084 ops/sec
  - 846,738 times executed
  - 94 runs sampled
[Ramda "isEmpty"]
  - 477,788 ops/sec
  - 24,189 times executed
  - 94 runs sampled
[FxJs "isEmpty"]
  - 26,550,237 ops/sec
  - 1,343,427 times executed
  - 98 runs sampled

⏱ Fastest is Vanillas "isEmpty" 🚀
   - Lodash "isEmpty" ...... 322.78% slower!
   - Ramda "isEmpty" ....... 14,659.77% slower!
   - FxJs "isEmpty" ........ 165.61% slower!
```

# IsEqual

Checks if two provided values are deeply equal.

Seems that FxJs doesn't have a deep equality util (just strict equals).

```
[Vanillas "isEqual" (object equality)]
  - 543,029 ops/sec
  - 28,254 times executed
  - 92 runs sampled
[Lodash "isEqual" (object equality)]
  - 155,431 ops/sec
  - 7,844 times executed
  - 98 runs sampled
[Ramda "equals" (object equality)]
  - 44,470 ops/sec
  - 2,244 times executed
  - 95 runs sampled

⏱ Fastest is Vanillas "isEqual" (object equality) 🚀
   - Lodash "isEqual" (object equality) ...... 249.37% slower!
   - Ramda "equals" (object equality) ........ 1,121.1% slower!

[Vanillas "isEqual" (array equality)]
  - 8,330,301 ops/sec
  - 427,905 times executed
  - 96 runs sampled
[Lodash "isEqual" (array equality)]
  - 4,177,529 ops/sec
  - 211,539 times executed
  - 94 runs sampled
[Ramda "equals" (array equality)]
  - 398,668 ops/sec
  - 20,229 times executed
  - 98 runs sampled

⏱ Fastest is Vanillas "isEqual" (array equality) 🚀
   - Lodash "isEqual" (array equality) ...... 99.41% slower!
   - Ramda "equals" (array equality) ........ 1,989.53% slower!

[Vanillas (curried) "isEqual"]
  - 558,691 ops/sec
  - 28,219 times executed
  - 94 runs sampled
[Ramda (curried) "equals"]
  - 42,563 ops/sec
  - 2,215 times executed
  - 93 runs sampled

⏱ Fastest is Vanillas (curried) "isEqual" 🚀
   - Ramda (curried) "equals" ........ 1,212.63% slower!

```

# IsObject

A high-speed, mostly adequate check of a value which may be an Object.

```
[Vanillas "isObject"]
  - 31,020,567 ops/sec
  - 1,587,798 times executed
  - 93 runs sampled
[FxJs "isObject"]
  - 28,525,656 ops/sec
  - 1,451,321 times executed
  - 93 runs sampled
[Lodash "isPlainObject"]
  - 2,685,637 ops/sec
  - 136,289 times executed
  - 93 runs sampled

⏱ Fastest is Vanillas "isObject" 🚀
   - FxJs "isObject" ........... 8.75% slower!
   - Lodash "isPlainObject" .... 1,055.05% slower!
```

# IsPromise

Checks if a value is a JavaScript Promise. This just means a deferred object/function with a method named `then`.

```
[Vanillas "isPromise"]
  - 77,166,859 ops/sec
  - 3,883,588 times executed
  - 96 runs sampled
[is-promise "isPromise"]
  - 75,184,395 ops/sec
  - 3,786,113 times executed
  - 99 runs sampled

⏱ Fastest is Vanillas "isPromise" 🚀
   - is-promise "isPromise" .... 2.64% slower!
```

# Map

Applies a mapping function you provide over a value you provide, according to its type.

```
[Vanillas "map"]
  - 4,680,389 ops/sec
  - 243,830 times executed
  - 95 runs sampled
[Lodash "map"]
  - 3,594,430 ops/sec
  - 195,787 times executed
  - 90 runs sampled
[FxJs "map"]
  - 509,073 ops/sec
  - 25,726 times executed
  - 95 runs sampled
[Ramda "map"]
  - 2,883,170 ops/sec
  - 145,448 times executed
  - 98 runs sampled
[(native) "Array.map()"]
  - 4,701,595 ops/sec
  - 246,278 times executed
  - 94 runs sampled

⏱ Fastest is (native) "Array.map()" 🚀
   - Vanillas "map" ............ 0.45% slower!
   - Lodash "map" .............. 30.8% slower!
   - FxJs "map" ................ 823.56% slower!
   - Ramda "map" ............... 63.07% slower!

[Vanillas (curried) "map"]
  - 4,465,414 ops/sec
  - 225,680 times executed
  - 96 runs sampled
[FxJs (curried) "map"]
  - 506,728 ops/sec
  - 25,803 times executed
  - 95 runs sampled
[Ramda (curried) "map"]
  - 1,998,895 ops/sec
  - 101,559 times executed
  - 97 runs sampled

⏱ Fastest is Vanillas (curried) "map" 🚀
   - FxJs (curried) "map" ........ 781.23% slower!
   - Ramda (curried) "map" ....... 123.39% slower!
```

# MapObject

Applies a mapping function you provide over every value in a given Object.

```
[Vanillas "mapObject"]
  - 2,889,412 ops/sec
  - 148,743 times executed
  - 90 runs sampled
[Lodash "mapValues"]
  - 2,139,009 ops/sec
  - 109,883 times executed
  - 95 runs sampled
[FxJs "map"]
  - 103,457 ops/sec
  - 5,747 times executed
  - 87 runs sampled
[Ramda "map"]
  - 1,052,848 ops/sec
  - 54,611 times executed
  - 93 runs sampled
[(native) "Object.keys( ).reduce()"]
  - 388,654 ops/sec
  - 20,263 times executed
  - 95 runs sampled
[(native) "Object.entries().reduce()"]
  - 401,434 ops/sec
  - 20,348 times executed
  - 97 runs sampled

⏱ Fastest is Vanillas "mapObject" 🚀
   - Lodash "mapValues" ...................... 35.08% slower!
   - FxJs "map" .............................. 2,692.87% slower!
   - Ramda "map" ............................. 174.44% slower!
   - (native) "Object.keys( ).reduce()" ...... 643.44% slower!
   - (native) "Object.entries().reduce()" .... 619.77% slower!
```

# MapSpec

Applies one or more mapping functions to the value in a given Object.

```
[Vanillas "mapSpec"]
  - 639,165 ops/sec
  - 32,495 times executed
  - 95 runs sampled
[Ramda "evolve"]
  - 690,027 ops/sec
  - 35,467 times executed
  - 94 runs sampled
[(native) recursive "Object.keys(spec).forEach()"]
  - 637,274 ops/sec
  - 33,035 times executed
  - 93 runs sampled

⏱ Fastest is Ramda "evolve" 🚀
   - Vanillas "mapSpec" .................................. 7.96% slower!
   - (native) recursive "Object.keys(spec).forEach()" .... 8.28% slower!

[Vanillas (curried) "mapSpec"]
  - 612,348 ops/sec
  - 32,428 times executed
  - 94 runs sampled
[Ramda (curried) "evolve"]
  - 603,434 ops/sec
  - 31,468 times executed
  - 94 runs sampled

⏱ Fastest is Vanillas (curried) "mapSpec" 🚀
   - Ramda (curried) "evolve" ........ 1.48% slower!
```

# MapString

Applies a mapping function you provide over every character in a given string.

```
[Vanillas "mapString"]
  - 333,090 ops/sec
  - 17,429 times executed
  - 93 runs sampled
[Char array]
  - 269,090 ops/sec
  - 13,637 times executed
  - 98 runs sampled
[(native) "String.split().map().join()"]
  - 257,446 ops/sec
  - 12,954 times executed
  - 95 runs sampled

⏱ Fastest is Vanillas "mapString" 🚀
   - Char array ................................ 23.78% slower!
   - (native) "String.split().map().join()" .... 29.38% slower!
```

# Merge

Merges the values from 2 or more Objects together into a new Object.

```
[Vanillas "merge"]
  - 2,493,139 ops/sec
  - 126,519 times executed
  - 94 runs sampled
[Lodash "merge"]
  - 989,684 ops/sec
  - 53,375 times executed
  - 90 runs sampled
[Ramda "merge"]
  - 1,778,871 ops/sec
  - 93,334 times executed
  - 89 runs sampled
[FxJs "merge"]
  - 7,893 ops/sec
  - 417 times executed
  - 89 runs sampled
[(native) "Object.assign({}, ..)"]
  - 5,226,049 ops/sec
  - 264,801 times executed
  - 95 runs sampled

⏱ Fastest is (native) "Object.assign({}, ..)" 🚀
   - Vanillas "merge" .................... 109.62% slower!
   - Lodash "merge" ...................... 428.05% slower!
   - Ramda "merge" ....................... 193.78% slower!
   - FxJs "merge" ........................ 66,115.02% slower!

[Vanillas (curried) "merge"]
  - 2,095,788 ops/sec
  - 105,955 times executed
  - 98 runs sampled
[Ramda (curried) "merge"]
  - 2,427,646 ops/sec
  - 124,765 times executed
  - 92 runs sampled
[FxJs (curried) "merge"]
  - 7,489 ops/sec
  - 417 times executed
  - 86 runs sampled

⏱ Fastest is Ramda (curried) "merge" 🚀
   - Vanillas (curried) "merge" .... 15.83% slower!
   - FxJs (curried) "merge" ........ 32,315.24% slower!
```

# Omit

Removes specified keys from an object (after cloning the Object).

```
[Vanillas "omit"]
  - 5,703,133 ops/sec
  - 303,216 times executed
  - 94 runs sampled
[Lodash "omit"]
  - 581,194 ops/sec
  - 30,997 times executed
  - 92 runs sampled
[Ramda "omit"]
  - 3,845,172 ops/sec
  - 195,630 times executed
  - 98 runs sampled
[FxJs "omit"]
  - 81,306 ops/sec
  - 4,459 times executed
  - 89 runs sampled
[(native) "Object.keys().filter().reduce()"]
  - 396,759 ops/sec
  - 21,179 times executed
  - 91 runs sampled

⏱ Fastest is Vanillas "omit" 🚀
   - Lodash "omit" ................................. 881.28% slower!
   - Ramda "omit" .................................. 48.32% slower!
   - FxJs "omit" ................................... 6,914.4% slower!
   - (native) "Object.keys().filter().reduce()" .... 1,337.43% slower!

[Vanillas (curried) "omit"]
  - 5,435,407 ops/sec
  - 277,155 times executed
  - 97 runs sampled
[Ramda (curried) "omit"]
  - 2,061,544 ops/sec
  - 106,904 times executed
  - 94 runs sampled
[FxJs (curried) "omit"]
  - 72,777 ops/sec
  - 4,396 times executed
  - 79 runs sampled

⏱ Fastest is Vanillas (curried) "omit" 🚀
   - Ramda (curried) "omit" ....... 163.66% slower!
   - FxJs (curried) "omit" ........ 7,368.61% slower!
```

# Pick

Removes everything _except_ the specified keys from an object (after cloning the Object).

```
[Vanillas "pick"]
  - 6,467,001 ops/sec
  - 341,060 times executed
  - 91 runs sampled
[Lodash "pick"]
  - 904,773 ops/sec
  - 48,273 times executed
  - 91 runs sampled
[Ramda "pick"]
  - 4,920,648 ops/sec
  - 249,840 times executed
  - 94 runs sampled
[FxJs "pick"]
  - 109,847 ops/sec
  - 5,839 times executed
  - 92 runs sampled
[(native) "Array.prototype.reduce"]
  - 614,706 ops/sec
  - 31,209 times executed
  - 96 runs sampled

⏱ Fastest is Vanillas "pick" 🚀
   - Lodash "pick" ........................ 614.77% slower!
   - Ramda "pick" ......................... 31.43% slower!
   - FxJs "pick" .......................... 5,787.26% slower!
   - (native) "Array.prototype.reduce" .... 952.05% slower!

[Vanillas (curried) "pick"]
  - 6,044,688 ops/sec
  - 307,310 times executed
  - 97 runs sampled
[Ramda (curried) "pick"]
  - 2,730,093 ops/sec
  - 139,239 times executed
  - 97 runs sampled
[FxJs (curried) "pick"]
  - 104,182 ops/sec
  - 6,099 times executed
  - 84 runs sampled

⏱ Fastest is Vanillas (curried) "pick" 🚀
   - Ramda (curried) "pick" ....... 121.41% slower!
   - FxJs (curried) "pick" ........ 5,702.03% slower!

```

# Pipe

Creates a chain of Functions that will be executed in sequnce (from left to right), with the value from the previous Function fed into the next Function.

```
[Vanillas "pipe"]
  - 12,311,759 ops/sec
  - 652,307 times executed
  - 92 runs sampled
[Ramda "pipe"]
  - 1,075,853 ops/sec
  - 60,189 times executed
  - 84 runs sampled
[FxJs "pipe"]
  - 5,409,412 ops/sec
  - 315,962 times executed
  - 82 runs sampled

⏱ Fastest is Vanillas "pipe" 🚀
   - Ramda "pipe" ....... 1,044.37% slower!
   - FxJs "pipe" ........ 127.6% slower!
```

# PropAt

Looks for a specified key on an Object you provide.

```
[Vanillas "propAt"]
  - 27,562,592 ops/sec
  - 1,388,476 times executed
  - 98 runs sampled
[Lodash "get"]
  - 19,569,974 ops/sec
  - 986,834 times executed
  - 97 runs sampled
[Ramda "path"]
  - 12,667,146 ops/sec
  - 641,754 times executed
  - 94 runs sampled
[(native) "&& until you find it"]
  - 75,671,758 ops/sec
  - 3,870,093 times executed
  - 97 runs sampled

⏱ Fastest is (native) "&& until you find it" 🚀
   - Vanillas "propAt" .................. 174.55% slower!
   - Lodash "get" ....................... 286.67% slower!
   - Ramda "path" ....................... 497.39% slower!
```

# PropEquals

Looks for a specified key on an Object you provide and checks to see if its corresponding value equals the value you specifiy.

```
[Vanillas "propEquals"]
  - 24,705,515 ops/sec
  - 1,257,125 times executed
  - 94 runs sampled
[Ramda "pathEq"]
  - 8,354,880 ops/sec
  - 423,254 times executed
  - 95 runs sampled
[(native) "&& until you find it"]
  - 76,412,460 ops/sec
  - 3,870,356 times executed
  - 98 runs sampled

⏱ Fastest is (native) "&& until you find it" 🚀
   - Vanillas "propEquals" .............. 209.29% slower!
   - Ramda "pathEq" ..................... 814.58% slower!
```

# Reduce

A simple wrapper around native Array.prototype.reduce(), for use in a compose/pipe chain of functions.

```
[Vanillas "reduce"]
  - 440,625 ops/sec
  - 22,295 times executed
  - 95 runs sampled
[Lodash "reduce"]
  - 436,410 ops/sec
  - 22,587 times executed
  - 95 runs sampled
[Ramda "reduce"]
  - 418,860 ops/sec
  - 21,158 times executed
  - 99 runs sampled
[FxJs "reduce"]
  - 424,599 ops/sec
  - 21,552 times executed
  - 92 runs sampled
[(native) "Array.reduce"]
  - 449,410 ops/sec
  - 22,983 times executed
  - 97 runs sampled

⏱ Fastest is (native) "Array.reduce" 🚀
   - Vanillas "reduce" .......... 1.99% slower!
   - Lodash "reduce" ............ 2.98% slower!
   - Ramda "reduce" ............. 7.29% slower!
   - FxJs "reduce" .............. 5.84% slower!

[Vanillas (curried) "reduce"]
  - 412,420 ops/sec
  - 21,879 times executed
  - 92 runs sampled
[Ramda (curried) "reduce"]
  - 342,038 ops/sec
  - 19,066 times executed
  - 87 runs sampled

⏱ Fastest is Vanillas (curried) "reduce" 🚀
   - Ramda (curried) "reduce" ....... 20.58% slower!

[Vanillas "reduce (object)"]
  - 2,618,120 ops/sec
  - 140,800 times executed
  - 91 runs sampled
[Lodash "reduce (object)"]
  - 2,294,718 ops/sec
  - 120,140 times executed
  - 91 runs sampled

⏱ Fastest is Vanillas "reduce (object)" 🚀
   - Lodash "reduce (object)" ...... 14.09% slower!
```

# Size_array

Checks the length (or size) of many different types of values:
  - Array
  - Set
  - Map
  - Object (num of keys)
  - String (num of chars)
  - Function (num of params)

Arrays:

```
[Vanillas "size"]
  - 72,135,829 ops/sec
  - 3,619,798 times executed
  - 99 runs sampled
[Lodash "size"]
  - 12,044,057 ops/sec
  - 610,691 times executed
  - 98 runs sampled
[Ramda "length"]
  - 5,793,202 ops/sec
  - 293,327 times executed
  - 95 runs sampled

⏱ Fastest is Vanillas "size" 🚀
   - Lodash "size" ...... 498.93% slower!
   - Ramda "length" ..... 1,145.18% slower!
```

Strings:

```
[Vanillas "size"]
  - 72,947,581 ops/sec
  - 3,698,743 times executed
  - 97 runs sampled
[Lodash "size"]
  - 26,317,448 ops/sec
  - 1,328,329 times executed
  - 96 runs sampled
[Ramda "length"]
  - 5,369,647 ops/sec
  - 283,148 times executed
  - 95 runs sampled

⏱ Fastest is Vanillas "size" 🚀
   - Lodash "size" ...... 177.18% slower!
   - Ramda "length" ..... 1,258.52% slower!
```

Objects:

```
[Vanillas "size"]
  - 37,691,727 ops/sec
  - 1,931,076 times executed
  - 92 runs sampled
[Lodash "size"]
  - 15,504,377 ops/sec
  - 788,510 times executed
  - 96 runs sampled

⏱ Fastest is Vanillas "size" 🚀
   - Lodash "size" ...... 143.1% slower!
```

# Uniq

Filters an array of values down to only those which are unique

```
[Vanillas "uniq" (list of nums)]
  - 3,410,703 ops/sec
  - 172,121 times executed
  - 98 runs sampled
[Lodash "uniq" (list of nums)]
  - 2,406,791 ops/sec
  - 121,803 times executed
  - 98 runs sampled
[Ramda "uniq" (list of nums)]
  - 255,874 ops/sec
  - 13,154 times executed
  - 95 runs sampled
[FxJs "uniq" (list of nums)]
  - 45,113 ops/sec
  - 2,464 times executed
  - 88 runs sampled

⏱ Fastest is Vanillas "uniq" (list of nums) 🚀
   - Lodash "uniq" (list of nums) ...... 41.71% slower!
   - Ramda "uniq" (list of nums) ....... 1,232.96% slower!
   - FxJs "uniq" (list of nums) ........ 7,460.35% slower!

[Vanillas "uniq" (list of strings)]
  - 2,960,786 ops/sec
  - 154,464 times executed
  - 94 runs sampled
[Lodash "uniq" (list of strings)]
  - 2,394,386 ops/sec
  - 126,230 times executed
  - 89 runs sampled
[Ramda "uniq" (list of strings)]
  - 360,000 ops/sec
  - 18,118 times executed
  - 98 runs sampled
[FxJs "uniq" (list of strings)]
  - 52,568 ops/sec
  - 2,928 times executed
  - 91 runs sampled

⏱ Fastest is Vanillas "uniq" (list of strings) 🚀
   - Lodash "uniq" (list of strings) ...... 23.66% slower!
   - Ramda "uniq" (list of strings) ....... 722.44% slower!
   - FxJs "uniq" (list of strings) ........ 5,532.25% slower!
```

# UniqBy

Filters an array of values down to only those which are unique, based on a provided predicate function (or shorthand for retrieving a prop inside an object)

```
[Vanillas "uniqBy" (top-level prop)]
  - 2,838,854 ops/sec
  - 145,614 times executed
  - 97 runs sampled
[Lodash "uniqBy" (top-level prop)]
  - 2,470,953 ops/sec
  - 138,336 times executed
  - 88 runs sampled
[Ramda "uniqBy" (top-level prop)]
  - 420,314 ops/sec
  - 22,479 times executed
  - 92 runs sampled
[FxJs "uniqBy" (top-level prop)]
  - 57,862 ops/sec
  - 3,278 times executed
  - 89 runs sampled

⏱ Fastest is Vanillas "uniqBy" (top-level prop) 🚀
   - Lodash "uniqBy" (top-level prop) ...... 14.89% slower!
   - Ramda "uniqBy" (top-level prop) ....... 575.41% slower!
   - FxJs "uniqBy" (top-level prop) ........ 4,806.28% slower!

[Vanillas "uniqBy" (nested prop)]
  - 546,657 ops/sec
  - 29,280 times executed
  - 90 runs sampled
[Lodash "uniqBy" (nested prop)]
  - 473,436 ops/sec
  - 24,884 times executed
  - 92 runs sampled
[Ramda "uniqBy" (nested prop)]
  - 407,479 ops/sec
  - 23,370 times executed
  - 86 runs sampled
[FxJs "uniqBy" (nested prop)]
  - 63,593 ops/sec
  - 3,416 times executed
  - 90 runs sampled

⏱ Fastest is Vanillas "uniqBy" (nested prop) 🚀
   - Lodash "uniqBy" (nested prop) ...... 15.47% slower!
   - Ramda "uniqBy" (nested prop) ....... 34.16% slower!
   - FxJs "uniqBy" (nested prop) ........ 759.62% slower!
```

# Validate

Applies many validations to an object of values.

```
[Joi "validate"]
  - 166,679 ops/sec
  - 8,655 times executed
  - 86 runs sampled
[Yup "validate"]
  - 49,375 ops/sec
  - 2,501 times executed
  - 94 runs sampled
[Spected "validate"]
  - 115,470 ops/sec
  - 5,837 times executed
  - 98 runs sampled
[Vanillas "validate"]
  - 205,052 ops/sec
  - 10,371 times executed
  - 95 runs sampled

⏱ Fastest is Vanillas "validate" 🚀
   - Joi "validate" ......... 23.02% slower!
   - Yup "validate" ......... 315.3% slower!
   - Spected "validate" ..... 77.58% slower!
```

# Values

A simple polyfill for Object.values()

```
[Vanillas "values"]
  - 18,665,820 ops/sec
  - 943,481 times executed
  - 96 runs sampled
[Lodash "values"]
  - 9,464,785 ops/sec
  - 483,961 times executed
  - 94 runs sampled
[Ramda "values"]
  - 2,220,395 ops/sec
  - 112,102 times executed
  - 96 runs sampled
[FxJs "values"]
  - 916,574 ops/sec
  - 47,971 times executed
  - 95 runs sampled
[(native) "Object.values()"]
  - 25,293,618 ops/sec
  - 1,279,028 times executed
  - 96 runs sampled

⏱ Fastest is (native) "Object.values()" 🚀
   - Vanillas "values" ............. 35.51% slower!
   - Lodash "values" ............... 167.24% slower!
   - Ramda "values" ................ 1,039.15% slower!
   - FxJs "values" ................. 2,659.58% slower!
```
