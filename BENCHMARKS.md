# Benchmark tests

| Benchmark Date | Node version | Operating  System |
| -------------- | ------------ | ----------------- |
| 04/05/22       | v16.0.0      | Linux Fedora (35) |

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
  - 7,968,865 ops/sec
  - 423,712 times executed
  - 92 runs sampled
[Lodash "some"]
  - 7,810,206 ops/sec
  - 414,398 times executed
  - 89 runs sampled
[FxJs "some"]
  - 68,720 ops/sec
  - 3,698 times executed
  - 90 runs sampled
[Ramda "any"]
  - 4,598,385 ops/sec
  - 234,863 times executed
  - 91 runs sampled
[(native) "Array.some()"]
  - 7,984,943 ops/sec
  - 426,301 times executed
  - 90 runs sampled

⏱ Fastest is Vanillas "any" 🚀
   - Lodash "some" .............. 2.03% slower!
   - FxJs "some" ................ 11,496.14% slower!
   - Ramda "any" ................ 73.3% slower!
   - (native) "Array.some()" .... -0.2% slower!
```

# Assign

Assigns the values from one or more Objects onto another Object.

```
[Vanillas "assign"]
  - 2,700,511 ops/sec
  - 141,714 times executed
  - 96 runs sampled
[FxJs "assign"]
  - 150,604 ops/sec
  - 7,651 times executed
  - 96 runs sampled
[(native) "Object.assign()"]
  - 3,337,718 ops/sec
  - 175,293 times executed
  - 94 runs sampled

⏱ Fastest is (native) "Object.assign()" 🚀
   - Vanillas "assign" ............. 23.6% slower!
   - FxJs "assign" ................. 2,116.21% slower!
```

# Clone

Recursively copies the content of an Object into a new Object

Separated into two test suites because Lodash separates clone and "deep" cloning into two different util functions.

"Deep" clone:

```
[Vanillas "clone"]
  - 904,547 ops/sec
  - 48,778 times executed
  - 94 runs sampled
[Lodash "cloneDeep"]
  - 174,310 ops/sec
  - 12,658 times executed
  - 67 runs sampled
[Ramda "clone"]
  - 110,334 ops/sec
  - 10,873 times executed
  - 76 runs sampled
[FxJs "clone"]
  - 3,846 ops/sec
  - 215 times executed
  - 90 runs sampled
[(native) "clone by destructuring"]
  - 343,661 ops/sec
  - 17,631 times executed
  - 94 runs sampled

⏱ Fastest is Vanillas "clone" 🚀
   - Lodash "cloneDeep" ................... 418.93% slower!
   - Ramda "clone" ........................ 719.83% slower!
   - FxJs "clone" ......................... 23,421.95% slower!
   - (native) "clone by destructuring" .... 163.21% slower!
```

"Shallow" clone:

```
[Vanillas "clone"]
  - 3,185,950 ops/sec
  - 202,816 times executed
  - 79 runs sampled
[Lodash "clone"]
  - 1,116,931 ops/sec
  - 70,056 times executed
  - 76 runs sampled
[Ramda "clone"]
  - 565,091 ops/sec
  - 31,844 times executed
  - 84 runs sampled
[FxJs "clone"]
  - 14,373 ops/sec
  - 855 times executed
  - 85 runs sampled
[(native) "clone by destructuring"]
  - 2,110,152 ops/sec
  - 113,427 times executed
  - 94 runs sampled
[(native) "Object.assign({}, ..)"]
  - 7,964,828 ops/sec
  - 427,601 times executed
  - 93 runs sampled

⏱ Fastest is (native) "Object.assign({}, ..)" 🚀
   - Vanillas "clone" ..................... 150% slower!
   - Lodash "clone" ....................... 613.1% slower!
   - Ramda "clone" ........................ 1,309.48% slower!
   - FxJs "clone" ......................... 55,313.5% slower!
   - (native) "clone by destructuring" .... 277.45% slower!
```

# Compose

Creates a chain of Functions that will be executed in sequnce (from right to left), with the value from the previous Function fed into the next Function.

```
[Vanillas "compose"]
  - 13,546,202 ops/sec
  - 687,418 times executed
  - 96 runs sampled
[Redux "compose"]
  - 7,415,504 ops/sec
  - 390,809 times executed
  - 93 runs sampled
[Ramda "compose"]
  - 580,739 ops/sec
  - 29,403 times executed
  - 98 runs sampled

⏱ Fastest is Vanillas "compose" 🚀
   - Redux "compose" ....... 82.67% slower!
   - Ramda "compose" ....... 2,232.58% slower!
```

# Concat

Adds the values from one Array onto another Array, returned as a new Array (ie, it does not mutate the first Array).

```
[Vanillas "concat"]
  - 20,914,856 ops/sec
  - 1,115,865 times executed
  - 92 runs sampled
[Lodash "concat"]
  - 2,322,160 ops/sec
  - 120,476 times executed
  - 90 runs sampled
[Ramda "concat"]
  - 3,659,802 ops/sec
  - 193,614 times executed
  - 90 runs sampled
[(native) "Array.concat()"]
  - 4,315,794 ops/sec
  - 228,702 times executed
  - 91 runs sampled
[(native) "[ ...val1, ...val2 ]"]
  - 3,983,910 ops/sec
  - 211,734 times executed
  - 91 runs sampled

⏱ Fastest is Vanillas "concat" 🚀
   - Lodash "concat" .................... 800.66% slower!
   - Ramda "concat" ..................... 471.48% slower!
   - (native) "Array.concat()" .......... 384.61% slower!
   - (native) "[ ...val1, ...val2 ]" .... 424.98% slower!
```

# Cond

Several pieces of conditional logic to apply against a value and the _first_ one which matches will have a corresponding transformation applied to it.

```
[Vanillas "cond"]
  - 1,598,366 ops/sec
  - 87,702 times executed
  - 89 runs sampled
[Lodash "cond"]
  - 825,475 ops/sec
  - 44,135 times executed
  - 90 runs sampled
[Ramda "cond"]
  - 428,248 ops/sec
  - 23,270 times executed
  - 86 runs sampled
[FxJs "cond"]
  - 86,570 ops/sec
  - 4,693 times executed
  - 90 runs sampled
[(native) "If/Else/ElseIf"]
  - 1,827,849 ops/sec
  - 94,787 times executed
  - 94 runs sampled

⏱ Fastest is (native) "If/Else/ElseIf" 🚀
   - Vanillas "cond" .............. 14.36% slower!
   - Lodash "cond" ................ 121.43% slower!
   - Ramda "cond" ................. 326.82% slower!
   - FxJs "cond" .................. 2,011.42% slower!
```

# Contains

Checks if a given value is present in a String OR Array

```
[Vanillas "contains" (array)]
  - 34,212,020 ops/sec
  - 1,885,091 times executed
  - 86 runs sampled
[Lodash "includes" (array)]
  - 8,044,220 ops/sec
  - 452,994 times executed
  - 86 runs sampled
[Ramda "contains" (array)]
  - 17,269,457 ops/sec
  - 962,789 times executed
  - 90 runs sampled
[FxJs "includes" (array)]
  - 86,847 ops/sec
  - 4,829 times executed
  - 91 runs sampled
[(native) "Array.includes()"]
  - 31,813,405 ops/sec
  - 1,752,290 times executed
  - 90 runs sampled

⏱ Fastest is Vanillas "contains" (array) 🚀
   - Lodash "includes" (array) ...... 325.3% slower!
   - Ramda "contains" (array) ....... 98.11% slower!
   - FxJs "includes" (array) ........ 39,293.22% slower!
   - (native) "Array.includes()" .... 7.54% slower!

[Vanillas "contains" (string)]
  - 21,879,425 ops/sec
  - 1,202,298 times executed
  - 89 runs sampled
[Lodash "includes" (string)]
  - 19,751,465 ops/sec
  - 1,049,642 times executed
  - 93 runs sampled
[Ramda "contains" (string)]
  - 13,441,047 ops/sec
  - 755,960 times executed
  - 87 runs sampled
[FxJs "includes" (string)]
  - 14,431,304 ops/sec
  - 793,944 times executed
  - 90 runs sampled
[(native) "String.includes()"]
  - 20,802,657 ops/sec
  - 1,113,768 times executed
  - 91 runs sampled

⏱ Fastest is Vanillas "contains" (string) 🚀
   - Lodash "includes" (string) ...... 10.77% slower!
   - Ramda "contains" (string) ....... 62.78% slower!
   - FxJs "includes" (string) ........ 51.61% slower!
   - (native) "String.includes()" .... 5.18% slower!
```

# Curry

Takes a Function whose params are meant to be supplied all at once and changes it so they can be supplied one at a time.

```
[Vanillas "curry"]
  - 19,894,926 ops/sec
  - 1,053,904 times executed
  - 91 runs sampled
[Lodash "curry"]
  - 896,391 ops/sec
  - 47,744 times executed
  - 91 runs sampled
[Ramda "curry"]
  - 2,954,942 ops/sec
  - 153,225 times executed
  - 93 runs sampled
[FxJs "curry"]
  - 3,484,001 ops/sec
  - 187,047 times executed
  - 91 runs sampled

⏱ Fastest is Vanillas "curry" 🚀
   - Lodash "curry" ...... 2,119.45% slower!
   - Ramda "curry" ....... 573.28% slower!
   - FxJs "curry" ........ 471.04% slower!

Running benchmark test suite: "twoArgCurryTests" . . .

[Executing Vanillas 2-arg curried function]
  - 11,436,564 ops/sec
  - 627,326 times executed
  - 87 runs sampled
[Executing Lodash 2-arg curried function]
  - 388,216 ops/sec
  - 20,028 times executed
  - 97 runs sampled
[Executing Ramda 2-arg curried function]
  - 2,209,581 ops/sec
  - 114,163 times executed
  - 88 runs sampled
[Executing FxJs 2-arg curried function]
  - 3,411,329 ops/sec
  - 178,057 times executed
  - 95 runs sampled

⏱ Fastest is Executing Vanillas 2-arg curried function 🚀
   - Executing Lodash 2-arg curried function ...... 2,845.93% slower!
   - Executing Ramda 2-arg curried function ....... 417.59% slower!
   - Executing FxJs 2-arg curried function ........ 235.25% slower!


[Executing Vanillas 3-arg curried function]
  - 8,239,762 ops/sec
  - 421,382 times executed
  - 95 runs sampled
[Executing Lodash 3-arg curried function]
  - 282,378 ops/sec
  - 14,417 times executed
  - 98 runs sampled
[Executing Ramda 3-arg curried function]
  - 1,647,452 ops/sec
  - 88,164 times executed
  - 89 runs sampled

⏱ Fastest is Executing Vanillas 3-arg curried function 🚀
   - Executing Lodash 3-arg curried function ...... 2,817.99% slower!
   - Executing Ramda 3-arg curried function ....... 400.15% slower!

[Executing Vanillas 4-arg curried function]
  - 5,701,444 ops/sec
  - 297,337 times executed
  - 94 runs sampled
[Executing Lodash 4-arg curried function]
  - 186,500 ops/sec
  - 9,674 times executed
  - 96 runs sampled
[Executing Ramda 4-arg curried function]
  - 1,503,655 ops/sec
  - 76,921 times executed
  - 96 runs sampled

⏱ Fastest is Executing Vanillas 4-arg curried function 🚀
   - Executing Lodash 4-arg curried function ...... 2,957.07% slower!
   - Executing Ramda 4-arg curried function ....... 279.17% slower!
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
  - 1,877,646 ops/sec
  - 96,795 times executed
  - 91 runs sampled
[Executing Lodash 5+arg curried function]
  - 144,379 ops/sec
  - 7,334 times executed
  - 96 runs sampled
[Executing Ramda 5+arg curried function]
  - 1,190,856 ops/sec
  - 61,138 times executed
  - 93 runs sampled

⏱ Fastest is Executing Vanillas 5+arg curried function 🚀
   - Executing Lodash 5+arg curried function ...... 1,200.49% slower!
   - Executing Ramda 5+arg curried function ....... 57.67% slower!
```

# Difference

Compares two lists of Strings/Numbers and returns the values that are different between the two lists

```
[Vanillas "difference"]
  - 5,545,201 ops/sec
  - 292,676 times executed
  - 92 runs sampled
[Lodash "difference"]
  - 2,764,244 ops/sec
  - 142,354 times executed
  - 90 runs sampled
[Radash "diff"]
  - 1,316,933 ops/sec
  - 70,454 times executed
  - 90 runs sampled
[FxJs "difference"]
  - 45,983 ops/sec
  - 2,543 times executed
  - 83 runs sampled
[Ramda "difference"]
  - 6,258,800 ops/sec
  - 324,817 times executed
  - 89 runs sampled

⏱ Fastest is Ramda "difference" 🚀
   - Vanillas "difference" .... 12.87% slower!
   - Lodash "difference" ...... 126.42% slower!
   - Radash "diff" ............ 375.26% slower!
   - FxJs "difference" ........ 13,511.2% slower!

[Vanillas "difference" (curried)]
  - 5,309,967 ops/sec
  - 279,908 times executed
  - 87 runs sampled
[FxJs "difference" (curried)]
  - 46,015 ops/sec
  - 2,599 times executed
  - 88 runs sampled
[Ramda "difference" (curried)]
  - 2,930,706 ops/sec
  - 149,742 times executed
  - 97 runs sampled

⏱ Fastest is Vanillas "difference" (curried) 🚀
   - FxJs "difference" (curried) ........ 11,439.61% slower!
   - Ramda "difference" (curried) ....... 81.18% slower!
```

# Each

A faster forEach that provides the same API as native.

```
[(native) "for..of"]
  - 2,130,758 ops/sec
  - 154,178 times executed
  - 70 runs sampled
[(native) "for"]
  - 4,053,660 ops/sec
  - 219,895 times executed
  - 89 runs sampled
[(native) "while"]
  - 3,775,533 ops/sec
  - 220,650 times executed
  - 86 runs sampled
[Vanillas "each"]
  - 4,157,339 ops/sec
  - 215,891 times executed
  - 95 runs sampled
[FxJs "each"]
  - 333,805 ops/sec
  - 18,403 times executed
  - 86 runs sampled
[Lodash "each"]
  - 3,216,565 ops/sec
  - 167,776 times executed
  - 94 runs sampled
[(native) "Array.forEach"]
  - 4,138,743 ops/sec
  - 217,172 times executed
  - 92 runs sampled

⏱ Fastest is Vanillas "each" 🚀
   - (native) "for..of" .......... 95.11% slower!
   - (native) "for" .............. 2.56% slower!
   - (native) "while" ............ 10.11% slower!
   - FxJs "each" ................. 1,145.44% slower!
   - Lodash "each" ............... 29.25% slower!
   - (native) "Array.forEach" .... 0.45% slower!
```

# Entries

Extracts an Array of key/value pairs from an Object.

```
[Vanillas "entries"]
  - 9,348,948 ops/sec
  - 495,945 times executed
  - 88 runs sampled
[Lodash "toPairs"]
  - 5,076,083 ops/sec
  - 266,397 times executed
  - 92 runs sampled
[Ramda "toPairs"]
  - 3,392,667 ops/sec
  - 187,872 times executed
  - 87 runs sampled
[FxJs "entries"]
  - 611,002 ops/sec
  - 31,581 times executed
  - 96 runs sampled
[(native) "Object.entries( )"]
  - 13,264,925 ops/sec
  - 702,205 times executed
  - 90 runs sampled

⏱ Fastest is (native) "Object.entries( )" 🚀
   - Vanillas "entries" .............. 41.89% slower!
   - Lodash "toPairs" ................ 161.32% slower!
   - Ramda "toPairs" ................. 290.99% slower!
   - FxJs "entries" .................. 2,071.01% slower!
```

# Escape

Converts ampersands, angle brackets, apostrophes and blockquotes to their HTML encoded equivalents

```
[Vanillas "escapeHtml"]
  - 1,075,112 ops/sec
  - 55,100 times executed
  - 92 runs sampled
[Lodash "escape"]
  - 1,078,971 ops/sec
  - 55,153 times executed
  - 95 runs sampled

⏱ Fastest is Vanillas "escapeHtml" 🚀
   - Lodash "escape" .......... -0.36% slower!
```

# Filter

Applies a filtering function you provide over a value you provide, according to its type.

```
[Vanillas "filter"]
  - 6,045,787 ops/sec
  - 317,649 times executed
  - 95 runs sampled
[Lodash "filter"]
  - 4,818,291 ops/sec
  - 250,302 times executed
  - 92 runs sampled
[Ramda "filter"]
  - 2,662,572 ops/sec
  - 161,622 times executed
  - 79 runs sampled
[FxJs "filter"]
  - 116,770 ops/sec
  - 6,548 times executed
  - 88 runs sampled
[(native) "Array.filter()"]
  - 5,852,829 ops/sec
  - 321,817 times executed
  - 88 runs sampled

⏱ Fastest is Vanillas "filter" 🚀
   - Lodash "filter" .............. 25.48% slower!
   - Ramda "filter" ............... 127.07% slower!
   - FxJs "filter" ................ 5,077.5% slower!
   - (native) "Array.filter()" .... 3.3% slower!

[Vanillas (curried) "filter"]
  - 4,493,030 ops/sec
  - 232,805 times executed
  - 97 runs sampled
[Ramda (curried) "filter"]
  - 1,950,275 ops/sec
  - 99,426 times executed
  - 92 runs sampled
[FxJs (curried) "filter"]
  - 110,549 ops/sec
  - 5,881 times executed
  - 87 runs sampled

⏱ Fastest is Vanillas (curried) "filter" 🚀
   - Ramda (curried) "filter" ....... 130.38% slower!
   - FxJs (curried) "filter" ........ 3,964.28% slower!
```

# FilterObject

Applies a filtering function you provide over every value in a given Object.

```
[Vanillas "filterObject"]
  - 4,321,476 ops/sec
  - 227,017 times executed
  - 88 runs sampled
[Radash "shake"]
  - 1,913,419 ops/sec
  - 99,824 times executed
  - 93 runs sampled
[Ramda "filter"]
  - 1,019,545 ops/sec
  - 53,100 times executed
  - 91 runs sampled
[(native) "Object.entries().filter().reduce()"]
  - 778,488 ops/sec
  - 39,809 times executed
  - 97 runs sampled

⏱ Fastest is Vanillas "filterObject" 🚀
   - Radash "shake" ................................... 125.85% slower!
   - Ramda "filter" ................................... 323.86% slower!
   - (native) "Object.entries().filter().reduce()" .... 455.11% slower!
```

# Find

Find a single value from an array of values, based on criteria defined in a predicate function.

```
[Vanillas "find"]
  - 7,533,163 ops/sec
  - 416,307 times executed
  - 86 runs sampled
[Lodash "find"]
  - 4,377,423 ops/sec
  - 242,672 times executed
  - 86 runs sampled
[Ramda "find"]
  - 4,400,413 ops/sec
  - 235,531 times executed
  - 92 runs sampled
[FxJs "find"]
  - 128,218 ops/sec
  - 7,499 times executed
  - 88 runs sampled
[(native) "Array.find()"]
  - 8,118,358 ops/sec
  - 427,022 times executed
  - 92 runs sampled

⏱ Fastest is (native) "Array.find()" 🚀
   - Vanillas "find" ............ 7.77% slower!
   - Lodash "find" .............. 85.46% slower!
   - Ramda "find" ............... 84.49% slower!
   - FxJs "find" ................ 6,231.69% slower!
```

# FindIndex

Find the index of a single value from an array of values, based on criteria defined in a predicate function.

```
[Vanillas "findIndex"]
  - 7,719,189 ops/sec
  - 410,994 times executed
  - 86 runs sampled
[Lodash "findIndex"]
  - 6,460,068 ops/sec
  - 351,172 times executed
  - 87 runs sampled
[Ramda "findIndex"]
  - 4,421,640 ops/sec
  - 235,711 times executed
  - 92 runs sampled
[FxJs "findIndex"]
  - 62,400 ops/sec
  - 3,500 times executed
  - 90 runs sampled
[(native) "Array.findIndex()"]
  - 7,947,410 ops/sec
  - 422,190 times executed
  - 94 runs sampled

⏱ Fastest is (native) "Array.findIndex()" 🚀
   - Vanillas "findIndex" ............ 2.96% slower!
   - Lodash "findIndex" .............. 23.02% slower!
   - Ramda "findIndex" ............... 79.74% slower!
   - FxJs "findIndex" ................ 12,636.3% slower!

```

# Flatten

Extracts nested arrays (of any depth) from a provided array, placing them onto on single new array.

```
[Vanillas "flatten"]
  - 11,289,797 ops/sec
  - 593,094 times executed
  - 94 runs sampled
[Lodash "flatten"]
  - 8,875,726 ops/sec
  - 469,896 times executed
  - 92 runs sampled
[Radash "flat"]
  - 1,028,379 ops/sec
  - 55,592 times executed
  - 89 runs sampled
[Ramda "flatten"]
  - 363,743 ops/sec
  - 18,986 times executed
  - 94 runs sampled
[FxJs "flat"]
  - 325,862 ops/sec
  - 18,961 times executed
  - 82 runs sampled

⏱ Fastest is Vanillas "flatten" 🚀
   - Lodash "flatten" ...... 27.2% slower!
   - Radash "flat" ......... 997.82% slower!
   - Ramda "flatten" ....... 3,003.78% slower!
   - FxJs "flat" ........... 3,364.6% slower!
```

# Fuzzy

Performs a fuzzy search on a list of strings or objects.

```
[Vanillas Fuzzy (search for 'dickinson')]
  - 9,017 ops/sec
  - 464 times executed
  - 96 runs sampled
[Fuzzy (search for 'dickinson')]
  - 6,117 ops/sec
  - 322 times executed
  - 91 runs sampled
[Fuzzy-Search (search for 'dickinson')]
  - 5,482 ops/sec
  - 285 times executed
  - 93 runs sampled
[FuzzyJs (search for 'dickinson')]
  - 4,550 ops/sec
  - 234 times executed
  - 96 runs sampled

⏱ Fastest is Vanillas Fuzzy (search for 'dickinson') 🚀
   - Fuzzy (search for 'dickinson') ............. 47.41% slower!
   - Fuzzy-Search (search for 'dickinson') ...... 64.5% slower!
   - FuzzyJs (search for 'dickinson') ........... 98.17% slower!
```

# Intersection

Compares two lists of Strings/Numbers and returns the values that are in common (intersect) between the two lists

```
[Vanillas "intersection"]
  - 3,168,814 ops/sec
  - 162,620 times executed
  - 95 runs sampled
[Lodash "intersection"]
  - 1,975,970 ops/sec
  - 113,698 times executed
  - 84 runs sampled
[Ramda "intersection"]
  - 439,192 ops/sec
  - 26,404 times executed
  - 83 runs sampled
[FxJs "intersection"]
  - 30,669 ops/sec
  - 1,945 times executed
  - 79 runs sampled
[intersection (using a Hashmap)]
  - 4,521,456 ops/sec
  - 239,623 times executed
  - 95 runs sampled

⏱ Fastest is intersection (using a Hashmap) 🚀
   - Vanillas "intersection" ........... 42.69% slower!
   - Lodash "intersection" ............. 128.82% slower!
   - Ramda "intersection" .............. 929.49% slower!
   - FxJs "intersection" ............... 14,642.73% slower!

[Vanillas "intersection" (curried)]
  - 3,158,940 ops/sec
  - 163,303 times executed
  - 96 runs sampled
[Ramda "intersection" (curried)]
  - 475,742 ops/sec
  - 24,511 times executed
  - 94 runs sampled
[FxJs "intersection" (curried)]
  - 35,357 ops/sec
  - 1,946 times executed
  - 88 runs sampled

⏱ Fastest is Vanillas "intersection" (curried) 🚀
   - Ramda "intersection" (curried) ....... 564% slower!
   - FxJs "intersection" (curried) ........ 8,834.46% slower!
```

# Invert

Swaps the values for keys in a given object. So the values in that object should be the kind that _can_ be converted to unique string values

```
[Vanillas "invert"]
  - 6,003,275 ops/sec
  - 312,476 times executed
  - 94 runs sampled
[Lodash "invert"]
  - 4,559,342 ops/sec
  - 234,641 times executed
  - 93 runs sampled
[Radash "invert"]
  - 1,535,841 ops/sec
  - 79,003 times executed
  - 97 runs sampled
[Ramda "invertObj"]
  - 1,711,233 ops/sec
  - 87,867 times executed
  - 97 runs sampled

⏱ Fastest is Vanillas "invert" 🚀
   - Lodash "invert" ...... 31.67% slower!
   - Radash "invert" ...... 290.88% slower!
   - Ramda "invertObj" .... 250.82% slower!
```

# IsEmpty

Checks if a value is empty. Arrays, Objects, Strings, Sets, and Null/Undefined values are considered empty if their length (or size) prop is zero (or if they are Null or Undefined).

```
[Vanillas "isEmpty"]
  - 43,541,030 ops/sec
  - 2,408,628 times executed
  - 88 runs sampled
[Lodash "isEmpty"]
  - 10,661,563 ops/sec
  - 576,560 times executed
  - 91 runs sampled
[Ramda "isEmpty"]
  - 445,131 ops/sec
  - 23,062 times executed
  - 94 runs sampled
[FxJs "isEmpty"]
  - 11,959,200 ops/sec
  - 632,364 times executed
  - 95 runs sampled

⏱ Fastest is Vanillas "isEmpty" 🚀
   - Lodash "isEmpty" ...... 308.39% slower!
   - Ramda "isEmpty" ....... 9,681.61% slower!
   - FxJs "isEmpty" ........ 264.08% slower!
```

# IsEqual

Checks if two provided values are deeply equal.

Seems that FxJs doesn't have a deep equality util (just strict equals).

```
[Vanillas "isEqual" (object equality)]
  - 558,096 ops/sec
  - 28,318 times executed
  - 98 runs sampled
[Lodash "isEqual" (object equality)]
  - 162,384 ops/sec
  - 8,403 times executed
  - 96 runs sampled
[Ramda "equals" (object equality)]
  - 44,322 ops/sec
  - 2,316 times executed
  - 94 runs sampled

⏱ Fastest is Vanillas "isEqual" (object equality) 🚀
   - Lodash "isEqual" (object equality) ...... 243.69% slower!
   - Ramda "equals" (object equality) ........ 1,159.17% slower!

[Vanillas "isEqual" (array equality)]
  - 8,161,292 ops/sec
  - 421,989 times executed
  - 92 runs sampled
[Lodash "isEqual" (array equality)]
  - 4,502,054 ops/sec
  - 234,429 times executed
  - 88 runs sampled
[Ramda "equals" (array equality)]
  - 449,309 ops/sec
  - 23,275 times executed
  - 95 runs sampled

⏱ Fastest is Vanillas "isEqual" (array equality) 🚀
   - Lodash "isEqual" (array equality) ...... 81.28% slower!
   - Ramda "equals" (array equality) ........ 1,716.41% slower!

[Vanillas (curried) "isEqual"]
  - 494,534 ops/sec
  - 25,379 times executed
  - 95 runs sampled
[Ramda (curried) "equals"]
  - 44,305 ops/sec
  - 2,283 times executed
  - 88 runs sampled

⏱ Fastest is Vanillas (curried) "isEqual" 🚀
   - Ramda (curried) "equals" ........ 1,016.2% slower!
```

# IsObject

A high-speed, mostly adequate check of a value which may be an Object.

```
[Vanillas "isObject"]
  - 29,903,066 ops/sec
  - 1,601,689 times executed
  - 90 runs sampled
[FxJs "isObject"]
  - 28,060,251 ops/sec
  - 1,448,391 times executed
  - 96 runs sampled
[Lodash "isPlainObject"]
  - 2,636,525 ops/sec
  - 137,298 times executed
  - 92 runs sampled

⏱ Fastest is Vanillas "isObject" 🚀
   - FxJs "isObject" ........... 6.57% slower!
   - Lodash "isPlainObject" .... 1,034.18% slower!
```

__Note__: The FxJs util function is missing a few cases where a value _should_ be interpreted as an Object:

* Traditional Object hashmaps - Created by `Object.create(null)`
* New'd up classes which have their own custom constructor functions other than the native JavaScript `Object` constructor

This is why Vanillas is checking whether the prototype and constructor are missing (as wish hashmaps) and that the constructor name isn't among a select list of obvious non-Objects.

# IsPromise

Checks if a value is a JavaScript Promise. This just means a deferred object/function with a method named `then`.

```
[Vanillas "isPromise"]
  - 68,141,417 ops/sec
  - 3,878,187 times executed
  - 86 runs sampled
[is-promise "isPromise"]
  - 71,552,174 ops/sec
  - 3,870,964 times executed
  - 88 runs sampled

⏱ Fastest is is-promise "isPromise" 🚀
   - Vanillas "isPromise" ...... 5.01% slower!
```

# Map

Applies a mapping function you provide over a value you provide, according to its type.

```
[Vanillas "map"]
  - 4,489,025 ops/sec
  - 233,274 times executed
  - 95 runs sampled
[Lodash "map"]
  - 2,718,548 ops/sec
  - 181,677 times executed
  - 74 runs sampled
[FxJs "map"]
  - 347,235 ops/sec
  - 20,510 times executed
  - 86 runs sampled
[Ramda "map"]
  - 2,007,116 ops/sec
  - 131,408 times executed
  - 76 runs sampled
[(native) "Array.map()"]
  - 4,340,854 ops/sec
  - 230,175 times executed
  - 90 runs sampled

⏱ Fastest is Vanillas "map" 🚀
   - Lodash "map" .............. 65.13% slower!
   - FxJs "map" ................ 1,192.79% slower!
   - Ramda "map" ............... 123.66% slower!
   - (native) "Array.map()" .... 3.41% slower!
[Vanillas (curried) "map"]
  - 3,945,375 ops/sec
  - 204,468 times executed
  - 95 runs sampled
[FxJs (curried) "map"]
  - 408,710 ops/sec
  - 21,080 times executed
  - 90 runs sampled
[Ramda (curried) "map"]
  - 1,759,191 ops/sec
  - 90,700 times executed
  - 94 runs sampled

⏱ Fastest is Vanillas (curried) "map" 🚀
   - FxJs (curried) "map" ........ 865.32% slower!
   - Ramda (curried) "map" ....... 124.27% slower!
```

# MapObject

Applies a mapping function you provide over every value in a given Object.

```
[Vanillas "mapObject"]
  - 2,353,406 ops/sec
  - 131,904 times executed
  - 87 runs sampled
[Lodash "mapValues"]
  - 2,030,623 ops/sec
  - 103,412 times executed
  - 96 runs sampled
[Radash "mapValues"]
  - 1,082,159 ops/sec
  - 56,068 times executed
  - 95 runs sampled
[FxJs "map"]
  - 83,192 ops/sec
  - 5,138 times executed
  - 89 runs sampled
[Ramda "map"]
  - 816,332 ops/sec
  - 45,557 times executed
  - 89 runs sampled
[(native) "Object.keys( ).reduce()"]
  - 369,853 ops/sec
  - 20,522 times executed
  - 91 runs sampled
[(native) "Object.entries().reduce()"]
  - 378,537 ops/sec
  - 20,290 times executed
  - 91 runs sampled

⏱ Fastest is Vanillas "mapObject" 🚀
   - Lodash "mapValues" ...................... 15.9% slower!
   - Radash "mapValues" ...................... 117.47% slower!
   - FxJs "map" .............................. 2,728.9% slower!
   - Ramda "map" ............................. 188.29% slower!
   - (native) "Object.keys( ).reduce()" ...... 536.31% slower!
   - (native) "Object.entries().reduce()" .... 521.71% slower!
```

# MapSpec

Applies one or more mapping functions to the value in a given Object.

```
[Vanillas "mapSpec"]
  - 681,986 ops/sec
  - 36,370 times executed
  - 88 runs sampled
[Ramda "evolve"]
  - 776,085 ops/sec
  - 39,947 times executed
  - 97 runs sampled
[(native) recursive "Object.keys(spec).forEach()"]
  - 731,781 ops/sec
  - 37,592 times executed
  - 93 runs sampled

⏱ Fastest is Ramda "evolve" 🚀
   - Vanillas "mapSpec" .................................. 13.8% slower!
   - (native) recursive "Object.keys(spec).forEach()" .... 6.05% slower!

[Vanillas (curried) "mapSpec"]
  - 611,970 ops/sec
  - 35,842 times executed
  - 84 runs sampled
[Ramda (curried) "evolve"]
  - 665,052 ops/sec
  - 33,839 times executed
  - 94 runs sampled

⏱ Fastest is Ramda (curried) "evolve" 🚀
   - Vanillas (curried) "mapSpec" .... 8.67% slower!
```

# MapString

Applies a mapping function you provide over every character in a given string.

```
[Vanillas "mapString"]
  - 349,760 ops/sec
  - 18,250 times executed
  - 94 runs sampled
[Char array]
  - 286,693 ops/sec
  - 14,677 times executed
  - 97 runs sampled
[(native) "String.split().map().join()"]
  - 272,309 ops/sec
  - 13,930 times executed
  - 91 runs sampled

⏱ Fastest is Vanillas "mapString" 🚀
   - Char array ................................ 22% slower!
   - (native) "String.split().map().join()" .... 28.44% slower!
```

# Merge

Merges the values from 2 or more Objects together into a new Object.

```
[Vanillas "merge"]
  - 2,065,872 ops/sec
  - 114,811 times executed
  - 88 runs sampled
[Lodash "merge"]
  - 653,384 ops/sec
  - 52,415 times executed
  - 63 runs sampled
[Ramda "merge"]
  - 1,342,072 ops/sec
  - 86,149 times executed
  - 78 runs sampled
[FxJs "merge"]
  - 7,684 ops/sec
  - 410 times executed
  - 93 runs sampled
[(native) "Object.assign({}, ..)"]
  - 3,906,679 ops/sec
  - 245,192 times executed
  - 78 runs sampled

⏱ Fastest is (native) "Object.assign({}, ..)" 🚀
   - Vanillas "merge" .................... 89.11% slower!
   - Lodash "merge" ...................... 497.91% slower!
   - Ramda "merge" ....................... 191.09% slower!
   - FxJs "merge" ........................ 50,743.93% slower!
[Vanillas (curried) "merge"]
  - 1,909,402 ops/sec
  - 101,961 times executed
  - 84 runs sampled
[Ramda (curried) "merge"]
  - 2,194,414 ops/sec
  - 113,373 times executed
  - 95 runs sampled
[FxJs (curried) "merge"]
  - 7,218 ops/sec
  - 402 times executed
  - 88 runs sampled

⏱ Fastest is Ramda (curried) "merge" 🚀
   - Vanillas (curried) "merge" .... 14.93% slower!
   - FxJs (curried) "merge" ........ 30,300.11% slower!
```

# Omit

Removes specified keys from an object (after cloning the Object).

```
[Vanillas "omit"]
  - 3,206,583 ops/sec
  - 168,449 times executed
  - 91 runs sampled
[Lodash "omit"]
  - 430,403 ops/sec
  - 28,509 times executed
  - 78 runs sampled
[Radash "omit"]
  - 685,528 ops/sec
  - 45,046 times executed
  - 76 runs sampled
[Ramda "omit"]
  - 2,962,059 ops/sec
  - 162,917 times executed
  - 90 runs sampled
[FxJs "omit"]
  - 62,884 ops/sec
  - 3,932 times executed
  - 83 runs sampled
[(native) "Object.keys().filter().reduce()"]
  - 361,048 ops/sec
  - 21,022 times executed
  - 86 runs sampled

⏱ Fastest is Vanillas "omit" 🚀
   - Lodash "omit" ................................. 645.02% slower!
   - Radash "omit" ................................. 367.75% slower!
   - Ramda "omit" .................................. 8.26% slower!
   - FxJs "omit" ................................... 4,999.17% slower!
   - (native) "Object.keys().filter().reduce()" .... 788.13% slower!
[Vanillas (curried) "omit"]
  - 3,207,914 ops/sec
  - 165,075 times executed
  - 97 runs sampled
[Ramda (curried) "omit"]
  - 1,867,502 ops/sec
  - 94,794 times executed
  - 94 runs sampled
[FxJs (curried) "omit"]
  - 73,444 ops/sec
  - 3,889 times executed
  - 92 runs sampled

⏱ Fastest is Vanillas (curried) "omit" 🚀
   - Ramda (curried) "omit" ....... 71.78% slower!
   - FxJs (curried) "omit" ........ 4,267.81% slower!
```

# Pick

Removes everything _except_ the specified keys from an object (after cloning the Object).

```
[Vanillas "pick"]
  - 6,218,219 ops/sec
  - 328,361 times executed
  - 93 runs sampled
[Lodash "pick"]
  - 767,714 ops/sec
  - 46,503 times executed
  - 82 runs sampled
[Radash "pick"]
  - 1,893,583 ops/sec
  - 106,714 times executed
  - 91 runs sampled
[Ramda "pick"]
  - 4,422,267 ops/sec
  - 246,147 times executed
  - 90 runs sampled
[FxJs "pick"]
  - 83,599 ops/sec
  - 4,950 times executed
  - 81 runs sampled
[(native) "Array.prototype.reduce"]
  - 481,666 ops/sec
  - 30,540 times executed
  - 79 runs sampled

⏱ Fastest is Vanillas "pick" 🚀
   - Lodash "pick" ........................ 709.97% slower!
   - Radash "pick" ........................ 228.38% slower!
   - Ramda "pick" ......................... 40.61% slower!
   - FxJs "pick" .......................... 7,338.18% slower!
   - (native) "Array.prototype.reduce" .... 1,190.98% slower!

[Vanillas (curried) "pick"]
  - 5,326,506 ops/sec
  - 280,343 times executed
  - 94 runs sampled
[Ramda (curried) "pick"]
  - 2,292,216 ops/sec
  - 118,226 times executed
  - 94 runs sampled
[FxJs (curried) "pick"]
  - 90,804 ops/sec
  - 4,749 times executed
  - 95 runs sampled

⏱ Fastest is Vanillas (curried) "pick" 🚀
   - Ramda (curried) "pick" ....... 132.37% slower!
   - FxJs (curried) "pick" ........ 5,765.92% slower!
```

# Pipe

Creates a chain of Functions that will be executed in sequnce (from left to right), with the value from the previous Function fed into the next Function.

```
[Vanillas "pipe"]
  - 11,743,176 ops/sec
  - 613,853 times executed
  - 95 runs sampled
[Ramda "pipe"]
  - 966,996 ops/sec
  - 49,961 times executed
  - 96 runs sampled
[FxJs "pipe"]
  - 3,052,189 ops/sec
  - 158,672 times executed
  - 92 runs sampled

⏱ Fastest is Vanillas "pipe" 🚀
   - Ramda "pipe" ....... 1,114.4% slower!
   - FxJs "pipe" ........ 284.75% slower!
```

# PropAt

Looks for a specified key on an Object you provide.

```
[Vanillas "propAt"]
  - 18,470,795 ops/sec
  - 976,740 times executed
  - 94 runs sampled
[Lodash "get"]
  - 16,852,860 ops/sec
  - 873,686 times executed
  - 93 runs sampled
[Ramda "path"]
  - 10,899,018 ops/sec
  - 583,184 times executed
  - 89 runs sampled
[(native) "&& until you find it"]
  - 46,788,061 ops/sec
  - 2,556,324 times executed
  - 89 runs sampled

⏱ Fastest is (native) "&& until you find it" 🚀
   - Vanillas "propAt" .................. 153.31% slower!
   - Lodash "get" ....................... 177.63% slower!
   - Ramda "path" ....................... 329.29% slower!

[Vanillas (curried) "propAt"]
  - 12,722,875 ops/sec
  - 673,193 times executed
  - 90 runs sampled
[Ramda (curried) "path"]
  - 3,306,072 ops/sec
  - 169,430 times executed
  - 96 runs sampled

⏱ Fastest is Vanillas (curried) "propAt" 🚀
   - Ramda (curried) "path" ......... 284.83% slower!
```

# PropEquals

Looks for a specified key on an Object you provide and checks to see if its corresponding value equals the value you specifiy.

```
[Vanillas "propEquals"]
  - 17,519,149 ops/sec
  - 923,064 times executed
  - 93 runs sampled
[Ramda "pathEq"]
  - 3,672,056 ops/sec
  - 198,875 times executed
  - 92 runs sampled
[(native) "&& until you find it"]
  - 44,845,287 ops/sec
  - 2,539,200 times executed
  - 83 runs sampled

⏱ Fastest is (native) "&& until you find it" 🚀
   - Vanillas "propEquals" .............. 155.98% slower!
   - Ramda "pathEq" ..................... 1,121.26% slower!

[Vanillas (curried) "propEquals"]
  - 7,536,101 ops/sec
  - 393,060 times executed
  - 91 runs sampled
[Ramda (curried) "pathEq"]
  - 2,175,721 ops/sec
  - 114,059 times executed
  - 93 runs sampled

⏱ Fastest is Vanillas (curried) "propEquals" 🚀
   - Ramda (curried) "pathEq" ........... 246.37% slower!
```

# Reduce

A simple wrapper around native Array.prototype.reduce(), for use in a compose/pipe chain of functions.

```
[Vanillas "reduce"]
  - 345,839 ops/sec
  - 21,951 times executed
  - 77 runs sampled
[Lodash "reduce"]
  - 387,802 ops/sec
  - 22,204 times executed
  - 85 runs sampled
[Ramda "reduce"]
  - 315,247 ops/sec
  - 19,015 times executed
  - 82 runs sampled
[FxJs "reduce"]
  - 317,620 ops/sec
  - 20,183 times executed
  - 77 runs sampled
[(native) "Array.reduce"]
  - 396,654 ops/sec
  - 22,807 times executed
  - 89 runs sampled

⏱ Fastest is (native) "Array.reduce" 🚀
   - Vanillas "reduce" .......... 14.69% slower!
   - Lodash "reduce" ............ 2.28% slower!
   - Ramda "reduce" ............. 25.82% slower!
   - FxJs "reduce" .............. 24.88% slower!

[Vanillas "reduce (object)"]
  - 2,821,816 ops/sec
  - 147,056 times executed
  - 90 runs sampled
[Lodash "reduce (object)"]
  - 2,341,488 ops/sec
  - 118,382 times executed
  - 97 runs sampled

⏱ Fastest is Vanillas "reduce (object)" 🚀
   - Lodash "reduce (object)" ...... 20.51% slower!

[Vanillas (curried) "reduce"]
  - 424,346 ops/sec
  - 21,509 times executed
  - 94 runs sampled
[Ramda (curried) "reduce"]
  - 352,467 ops/sec
  - 18,141 times executed
  - 98 runs sampled

⏱ Fastest is Vanillas (curried) "reduce" 🚀
   - Ramda (curried) "reduce" ....... 20.39% slower!
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
  - 43,842,987 ops/sec
  - 2,437,298 times executed
  - 85 runs sampled
[Lodash "size"]
  - 10,393,008 ops/sec
  - 560,704 times executed
  - 89 runs sampled
[Ramda "length"]
  - 4,843,279 ops/sec
  - 252,316 times executed
  - 94 runs sampled

⏱ Fastest is Vanillas "size" 🚀
   - Lodash "size" ...... 321.85% slower!
   - Ramda "length" ..... 805.23% slower!
```

Strings:

```
[Vanillas "size"]
  - 45,379,763 ops/sec
  - 2,471,763 times executed
  - 91 runs sampled
[Lodash "size"]
  - 6,458,217 ops/sec
  - 337,696 times executed
  - 87 runs sampled
[Ramda "length"]
  - 4,457,466 ops/sec
  - 258,449 times executed
  - 84 runs sampled

⏱ Fastest is Vanillas "size" 🚀
   - Lodash "size" ...... 602.67% slower!
   - Ramda "length" ..... 918.06% slower!
```

Objects:

```
[Vanillas "size"]
  - 34,649,074 ops/sec
  - 1,751,361 times executed
  - 96 runs sampled
[Lodash "size"]
  - 15,790,874 ops/sec
  - 800,054 times executed
  - 97 runs sampled

⏱ Fastest is Vanillas "size" 🚀
   - Lodash "size" ...... 119.42% slower!
```

# Uniq

Filters an array of values down to only those which are unique

```
[Vanillas "uniq" (list of nums)]
  - 3,063,484 ops/sec
  - 166,327 times executed
  - 91 runs sampled
[Lodash "uniq" (list of nums)]
  - 2,249,316 ops/sec
  - 117,448 times executed
  - 92 runs sampled
[Radash "unique" (list of nums)]
  - 60,783 ops/sec
  - 3,223 times executed
  - 90 runs sampled
[Ramda "uniq" (list of nums)]
  - 204,300 ops/sec
  - 12,829 times executed
  - 76 runs sampled
[FxJs "uniq" (list of nums)]
  - 41,122 ops/sec
  - 2,309 times executed
  - 88 runs sampled

⏱ Fastest is Vanillas "uniq" (list of nums) 🚀
   - Lodash "uniq" (list of nums) ...... 36.2% slower!
   - Radash "unique" (list of nums) .... 4,940% slower!
   - Ramda "uniq" (list of nums) ....... 1,399.5% slower!
   - FxJs "uniq" (list of nums) ........ 7,349.71% slower!

[Vanillas "uniq" (list of strings)]
  - 2,834,700 ops/sec
  - 151,649 times executed
  - 90 runs sampled
[Lodash "uniq" (list of strings)]
  - 2,433,333 ops/sec
  - 125,833 times executed
  - 91 runs sampled
[Ramda "uniq" (list of strings)]
  - 354,895 ops/sec
  - 18,113 times executed
  - 94 runs sampled
[FxJs "uniq" (list of strings)]
  - 49,885 ops/sec
  - 2,775 times executed
  - 89 runs sampled

⏱ Fastest is Vanillas "uniq" (list of strings) 🚀
   - Lodash "uniq" (list of strings) ...... 16.49% slower!
   - Ramda "uniq" (list of strings) ....... 698.74% slower!
   - FxJs "uniq" (list of strings) ........ 5,582.48% slower!
```

# UniqBy

Filters an array of values down to only those which are unique, based on a provided predicate function (or shorthand for retrieving a prop inside an object)

```
[Vanillas "uniqBy" (top-level prop)]
  - 2,033,259 ops/sec
  - 103,370 times executed
  - 96 runs sampled
[Lodash "uniqBy" (top-level prop)]
  - 2,175,894 ops/sec
  - 110,190 times executed
  - 95 runs sampled
[Ramda "uniqBy" (top-level prop)]
  - 414,910 ops/sec
  - 21,418 times executed
  - 95 runs sampled
[FxJs "uniqBy" (top-level prop)]
  - 58,045 ops/sec
  - 3,317 times executed
  - 83 runs sampled

⏱ Fastest is Lodash "uniqBy" (top-level prop) 🚀
   - Vanillas "uniqBy" (top-level prop) .... 7.02% slower!
   - Ramda "uniqBy" (top-level prop) ....... 424.43% slower!
   - FxJs "uniqBy" (top-level prop) ........ 3,648.65% slower!

[Vanillas "uniqBy" (nested prop)]
  - 514,748 ops/sec
  - 26,448 times executed
  - 92 runs sampled
[Lodash "uniqBy" (nested prop)]
  - 465,297 ops/sec
  - 23,705 times executed
  - 96 runs sampled
[Ramda "uniqBy" (nested prop)]
  - 440,555 ops/sec
  - 22,627 times executed
  - 96 runs sampled
[FxJs "uniqBy" (nested prop)]
  - 64,745 ops/sec
  - 3,487 times executed
  - 89 runs sampled

⏱ Fastest is Vanillas "uniqBy" (nested prop) 🚀
   - Lodash "uniqBy" (nested prop) ...... 10.63% slower!
   - Ramda "uniqBy" (nested prop) ....... 16.84% slower!
   - FxJs "uniqBy" (nested prop) ........ 695.04% slower!
```

# Validate

Applies many validations to an object of values.

```
[Joi "validate"]
  - 260,447 ops/sec
  - 13,457 times executed
  - 92 runs sampled
[Yup "validate"]
  - 45,764 ops/sec
  - 2,408 times executed
  - 94 runs sampled
[Spected "validate"]
  - 99,979 ops/sec
  - 5,628 times executed
  - 86 runs sampled
[Vanillas "validate"]
  - 291,696 ops/sec
  - 16,076 times executed
  - 89 runs sampled

⏱ Fastest is Vanillas "validate" 🚀
   - Joi "validate" ......... 12% slower!
   - Yup "validate" ......... 537.39% slower!
   - Spected "validate" ..... 191.76% slower!
```

# Values

A simple polyfill for Object.values()

```
[Vanillas "values"]
  - 14,668,356 ops/sec
  - 791,357 times executed
  - 93 runs sampled
[Lodash "values"]
  - 7,120,543 ops/sec
  - 377,821 times executed
  - 91 runs sampled
[Ramda "values"]
  - 1,968,807 ops/sec
  - 103,771 times executed
  - 90 runs sampled
[FxJs "values"]
  - 567,555 ops/sec
  - 32,837 times executed
  - 84 runs sampled
[(native) "Object.values()"]
  - 15,349,158 ops/sec
  - 1,068,582 times executed
  - 74 runs sampled

⏱ Fastest is Vanillas "values" 🚀
   - Lodash "values" ............... 106% slower!
   - Ramda "values" ................ 645.04% slower!
   - FxJs "values" ................. 2,484.48% slower!
   - (native) "Object.values()" .... -4.44% slower!

```

