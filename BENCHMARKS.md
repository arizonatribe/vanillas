```
Vanillas "any" x 9,372,100 ops/sec ±0.24% (94 runs sampled)
Lodash "some" x 8,982,747 ops/sec ±0.44% (97 runs sampled)
Ramda "any" x 3,286,294 ops/sec ±1.84% (93 runs sampled)
(native) "Array.some()" x 9,155,835 ops/sec ±0.75% (94 runs sampled)
Fastest is Vanillas "any"

Vanillas "assign" x 2,961,012 ops/sec ±0.31% (94 runs sampled)
(native) "Object.assign()" x 3,796,142 ops/sec ±2.39% (92 runs sampled)
Fastest is (native) "Object.assign()"

New'ing up a class (setting prop using bind) x 28,475,990 ops/sec ±0.70% (94 runs sampled)
New'ing up a class (setting shared prop on instance) x 35,870,924 ops/sec ±0.19% (95 runs sampled)
New'ing up a class (passing prop via super()) x 86,765,994 ops/sec ±0.06% (99 runs sampled)
New'ing up a class (ES5 constructor Function) x 82,345,440 ops/sec ±0.17% (93 runs sampled)
Object composition x 82,442,581 ops/sec ±0.05% (98 runs sampled)
Fastest is New'ing up a class (passing prop via super())

New'ing up a class (setting prop using bind) x 19,078,805 ops/sec ±0.64% (94 runs sampled)
New'ing up a class (setting shared prop on instance) x 25,192,029 ops/sec ±0.45% (91 runs sampled)
New'ing up a class (passing prop via super()) x 43,686,722 ops/sec ±1.99% (93 runs sampled)
New'ing up a class (ES5 constructor Function) x 33,212,769 ops/sec ±0.97% (94 runs sampled)
Object composition x 80,438,089 ops/sec ±0.04% (96 runs sampled)
Fastest is Object composition

Vanillas "clone" x 4,213,619 ops/sec ±0.21% (97 runs sampled)
Lodash "clone" x 1,343,911 ops/sec ±0.17% (96 runs sampled)
Ramda "clone" x 692,912 ops/sec ±0.76% (98 runs sampled)
(native) "clone by destructuring" x 1,909,628 ops/sec ±0.12% (97 runs sampled)
(native) "Object.assign({}, ..)" x 9,425,013 ops/sec ±1.18% (94 runs sampled)
Fastest is (native) "Object.assign({}, ..)"

Vanillas "clone" x 708,416 ops/sec ±0.11% (98 runs sampled)
Lodash "cloneDeep" x 255,737 ops/sec ±0.24% (95 runs sampled)
Ramda "clone" x 230,805 ops/sec ±0.09% (97 runs sampled)
(native) "clone by destructuring" x 300,585 ops/sec ±0.91% (95 runs sampled)
Fastest is Vanillas "clone"

Vanillas "compose" x 10,921,347 ops/sec ±1.22% (92 runs sampled)
Redux "compose" x 6,648,072 ops/sec ±1.24% (92 runs sampled)
Ramda "compose" x 658,425 ops/sec ±0.43% (97 runs sampled)
Fastest is Vanillas "compose"

Vanillas "concat" x 26,320,515 ops/sec ±0.70% (93 runs sampled)
Lodash "concat" x 2,465,141 ops/sec ±1.46% (97 runs sampled)
Ramda "concat" x 4,476,073 ops/sec ±0.12% (95 runs sampled)
(native) "Array.concat()" x 5,642,948 ops/sec ±1.31% (93 runs sampled)
(native) "[ ...val1, ...val2 ]" x 5,696,556 ops/sec ±0.16% (94 runs sampled)
Fastest is Vanillas "concat"

Vanillas "cond" x 1,622,430 ops/sec ±1.20% (95 runs sampled)
Ramda "cond" x 426,884 ops/sec ±2.19% (91 runs sampled)
(native) "If/Else/ElseIf" x 1,778,531 ops/sec ±1.61% (95 runs sampled)
Fastest is (native) "If/Else/ElseIf"

Vanillas "contains" (array) x 67,452,205 ops/sec ±0.17% (94 runs sampled)
Lodash "includes" (array) x 9,560,048 ops/sec ±0.24% (95 runs sampled)
Ramda "contains" (array) x 15,809,597 ops/sec ±1.13% (92 runs sampled)
(native) "Array.includes()" x 46,786,338 ops/sec ±0.13% (95 runs sampled)
Fastest is Vanillas "contains" (array)

Vanillas "contains" (string) x 33,259,380 ops/sec ±1.92% (90 runs sampled)
Lodash "includes" (string) x 22,574,989 ops/sec ±0.76% (94 runs sampled)
Ramda "contains" (string) x 14,450,930 ops/sec ±0.65% (92 runs sampled)
(native) "String.includes()" x 24,332,445 ops/sec ±0.06% (92 runs sampled)
Fastest is Vanillas "contains" (string)

Vanillas "curry" x 29,875,468 ops/sec ±0.47% (97 runs sampled)
Lodash "curry" x 957,321 ops/sec ±0.21% (97 runs sampled)
Ramda "curry" x 4,396,621 ops/sec ±0.28% (95 runs sampled)
Fastest is Vanillas "curry"

Executing Vanillas 2-arg curried function x 10,590,677 ops/sec ±0.38% (93 runs sampled)
Executing Lodash 2-arg curried function x 348,068 ops/sec ±1.69% (92 runs sampled)
Executing Ramda 2-arg curried function x 2,092,902 ops/sec ±0.51% (96 runs sampled)
Fastest is Executing Vanillas 2-arg curried function

Executing Vanillas 3-arg curried function x 6,137,239 ops/sec ±0.59% (93 runs sampled)
Executing Lodash 3-arg curried function x 210,449 ops/sec ±1.63% (88 runs sampled)
Executing Ramda 3-arg curried function x 1,677,032 ops/sec ±0.29% (92 runs sampled)
Fastest is Executing Vanillas 3-arg curried function

Executing Vanillas 4-arg curried function x 4,506,726 ops/sec ±0.93% (96 runs sampled)
Executing Lodash 4-arg curried function x 162,297 ops/sec ±0.22% (96 runs sampled)
Executing Ramda 4-arg curried function x 1,431,848 ops/sec ±0.31% (95 runs sampled)
Fastest is Executing Vanillas 4-arg curried function

Executing Vanillas 5+arg curried function x 1,625,353 ops/sec ±2.27% (96 runs sampled)
Executing Lodash 5+arg curried function x 124,286 ops/sec ±0.17% (94 runs sampled)
Executing Ramda 5+arg curried function x 1,056,712 ops/sec ±1.15% (93 runs sampled)
Fastest is Executing Vanillas 5+arg curried function

Vanillas "difference" x 5,203,042 ops/sec ±0.16% (96 runs sampled)
Lodash "difference" x 2,852,244 ops/sec ±0.12% (95 runs sampled)
Ramda "difference" x 3,759,266 ops/sec ±0.24% (94 runs sampled)
Fastest is Vanillas "difference"

Vanillas "difference" (curried) x 4,720,365 ops/sec ±1.28% (94 runs sampled)
Ramda "difference" (curried) x 2,152,953 ops/sec ±0.21% (97 runs sampled)
Fastest is Vanillas "difference" (curried)

Vanillas "each" x 59,193,944 ops/sec ±0.37% (95 runs sampled)
Lodash "each" x 4,368,403 ops/sec ±0.17% (96 runs sampled)
(native) "Array.forEach" x 42,226,456 ops/sec ±0.91% (92 runs sampled)
Fastest is Vanillas "each"

Vanillas "entries" x 8,767,181 ops/sec ±3.44% (95 runs sampled)
Lodash "toPairs" x 4,961,914 ops/sec ±0.36% (90 runs sampled)
Ramda "toPairs" x 4,083,548 ops/sec ±2.40% (95 runs sampled)
(native) "Object.entries( )" x 13,784,414 ops/sec ±0.16% (95 runs sampled)
Fastest is (native) "Object.entries( )"

Vanillas "filter" x 6,676,996 ops/sec ±1.45% (94 runs sampled)
Lodash "filter" x 4,989,178 ops/sec ±0.26% (93 runs sampled)
Ramda "filter" x 2,559,327 ops/sec ±0.39% (92 runs sampled)
(native) "Array.filter()" x 6,635,349 ops/sec ±1.43% (92 runs sampled)
Fastest is Vanillas "filter"

Vanillas (curried) "filter" x 4,496,091 ops/sec ±0.21% (96 runs sampled)
Ramda (curried) "filter" x 1,557,608 ops/sec ±1.05% (94 runs sampled)
Fastest is Vanillas (curried) "filter"

Vanillas "filterObject" x 3,888,844 ops/sec ±0.34% (94 runs sampled)
Ramda "filter" x 924,865 ops/sec ±0.94% (95 runs sampled)
(native) "Object.entries().filter().reduce()" x 642,470 ops/sec ±0.18% (96 runs sampled)
Fastest is Vanillas "filterObject"

Vanillas "find" x 9,221,001 ops/sec ±0.31% (96 runs sampled)
Lodash "find" x 4,336,383 ops/sec ±0.55% (97 runs sampled)
Ramda "find" x 3,342,448 ops/sec ±0.15% (97 runs sampled)
(native) "Array.find()" x 9,084,879 ops/sec ±0.85% (94 runs sampled)
Fastest is Vanillas "find"

Vanillas "findIndex" x 8,959,409 ops/sec ±0.31% (96 runs sampled)
Lodash "findIndex" x 6,999,453 ops/sec ±0.86% (95 runs sampled)
Ramda "findIndex" x 3,332,719 ops/sec ±0.23% (96 runs sampled)
(native) "Array.findIndex()" x 9,165,846 ops/sec ±0.30% (95 runs sampled)
Fastest is (native) "Array.findIndex()"

Vanillas "flatten" x 14,659,208 ops/sec ±0.17% (94 runs sampled)
Lodash "flatten" x 9,713,324 ops/sec ±2.22% (93 runs sampled)
Ramda "flatten" x 402,766 ops/sec ±0.11% (96 runs sampled)
Fastest is Vanillas "flatten"

Vanillas "intersection" x 11,177,894 ops/sec ±0.55% (93 runs sampled)
Lodash "intersection" x 2,907,770 ops/sec ±1.30% (91 runs sampled)
Ramda "intersection" x 656,015 ops/sec ±0.37% (95 runs sampled)
Fastest is Vanillas "intersection"

Vanillas "intersection" (curried) x 9,836,929 ops/sec ±0.64% (93 runs sampled)
Ramda "intersection" (curried) x 565,872 ops/sec ±1.08% (94 runs sampled)
Fastest is Vanillas "intersection" (curried)

Vanillas "invert" x 6,472,978 ops/sec ±1.19% (92 runs sampled)
Lodash "invert" x 4,311,255 ops/sec ±0.16% (95 runs sampled)
Ramda "invertObj" x 1,772,358 ops/sec ±0.13% (97 runs sampled)
(native) "Object.keys( ).reduce()" x 334,585 ops/sec ±0.14% (96 runs sampled)
Fastest is Vanillas "invert"

Vanillas "isEmpty" x 69,396,419 ops/sec ±0.27% (96 runs sampled)
Lodash "isEmpty" x 12,522,666 ops/sec ±0.44% (92 runs sampled)
Ramda "isEmpty" x 433,022 ops/sec ±0.12% (98 runs sampled)
Fastest is Vanillas "isEmpty"

Vanillas "isEqual" (array equality) x 8,990,731 ops/sec ±0.71% (92 runs sampled)
Lodash "isEqual" (array equality) x 4,009,106 ops/sec ±0.93% (95 runs sampled)
Ramda "equals" (array equality) x 459,716 ops/sec ±0.97% (95 runs sampled)
Fastest is Vanillas "isEqual" (array equality)

Vanillas "isEqual" (object equality) x 552,412 ops/sec ±1.44% (90 runs sampled)
Lodash "isEqual" (object equality) x 164,996 ops/sec ±1.50% (92 runs sampled)
Ramda "equals" (object equality) x 51,133 ops/sec ±1.50% (92 runs sampled)
Fastest is Vanillas "isEqual" (object equality)

Vanillas (curried) "isEqual" x 501,780 ops/sec ±1.56% (88 runs sampled)
Ramda (curried) "equals" x 48,462 ops/sec ±2.05% (84 runs sampled)
Fastest is Vanillas (curried) "isEqual"

Vanillas "isObject" x 15,465,431 ops/sec ±0.57% (96 runs sampled)
Lodash "isPlainObject" x 2,632,993 ops/sec ±0.12% (98 runs sampled)
Fastest is Vanillas "isObject"

Vanillas "isPromise" x 119,001,434 ops/sec ±0.71% (93 runs sampled)
is-promise "isPromise" x 114,679,247 ops/sec ±1.13% (92 runs sampled)
Fastest is Vanillas "isPromise"

Vanillas "map" x 5,302,718 ops/sec ±2.49% (90 runs sampled)
Lodash "map" x 4,282,006 ops/sec ±0.17% (98 runs sampled)
Ramda "map" x 2,315,701 ops/sec ±1.68% (94 runs sampled)
(native) "Array.map()" x 5,587,824 ops/sec ±0.17% (95 runs sampled)
Fastest is (native) "Array.map()"

Vanillas (curried) "map" x 3,803,888 ops/sec ±2.27% (95 runs sampled)
Ramda (curried) "map" x 1,467,352 ops/sec ±0.15% (96 runs sampled)
Fastest is Vanillas (curried) "map"

Vanillas "mapObject" x 2,845,619 ops/sec ±0.16% (97 runs sampled)
Lodash "mapValues" x 1,960,938 ops/sec ±1.17% (96 runs sampled)
Ramda "map" x 744,172 ops/sec ±0.17% (92 runs sampled)
(native) "Object.keys( ).reduce()" x 316,504 ops/sec ±1.04% (95 runs sampled)
(native) "Object.entries().reduce()" x 315,240 ops/sec ±0.08% (96 runs sampled)
Fastest is Vanillas "mapObject"

Vanillas "mapSpec" x 823,609 ops/sec ±1.12% (94 runs sampled)
Ramda "evolve" x 950,402 ops/sec ±0.26% (98 runs sampled)
(native) recursive "Object.keys(spec).forEach()" x 860,944 ops/sec ±0.21% (98 runs sampled)
Fastest is Ramda "evolve"

Vanillas (curried) "mapSpec" x 793,202 ops/sec ±1.09% (97 runs sampled)
Ramda (curried) "evolve" x 771,461 ops/sec ±0.27% (98 runs sampled)
Fastest is Vanillas (curried) "mapSpec"

Vanillas "mapString" x 430,642 ops/sec ±0.25% (95 runs sampled)
(native) "String.split().map().join()" x 302,381 ops/sec ±0.11% (93 runs sampled)
Fastest is Vanillas "mapString"

Vanillas "merge" x 3,492,597 ops/sec ±0.65% (93 runs sampled)
Lodash "merge" x 1,365,372 ops/sec ±0.55% (91 runs sampled)
Ramda "merge" x 2,476,789 ops/sec ±1.16% (91 runs sampled)
(native) "Object.assign({}, ..)" x 7,302,692 ops/sec ±0.46% (96 runs sampled)
Fastest is (native) "Object.assign({}, ..)"

Vanillas (curried) "merge" x 2,533,380 ops/sec ±0.98% (92 runs sampled)
Ramda (curried) "merge" x 3,082,700 ops/sec ±0.44% (96 runs sampled)
Fastest is Ramda (curried) "merge"

Vanillas "omit" x 4,559,041 ops/sec ±0.27% (95 runs sampled)
Lodash "omit" x 534,407 ops/sec ±1.26% (93 runs sampled)
Ramda "omit" x 3,489,672 ops/sec ±0.15% (96 runs sampled)
(native) "Object.keys().filter().reduce()" x 290,875 ops/sec ±0.98% (94 runs sampled)
Fastest is Vanillas "omit"

Vanillas (curried) "omit" x 4,052,955 ops/sec ±0.31% (92 runs sampled)
Ramda (curried) "omit" x 2,022,546 ops/sec ±0.17% (93 runs sampled)
Fastest is Vanillas (curried) "omit"

Vanillas "pick" x 10,353,509 ops/sec ±0.46% (91 runs sampled)
Lodash "pick" x 1,132,053 ops/sec ±1.32% (93 runs sampled)
Ramda "pick" x 9,913,334 ops/sec ±0.56% (93 runs sampled)
(native) "Array.prototype.reduce" x 553,590 ops/sec ±0.86% (88 runs sampled)

Vanillas (curried) "pick" x 6,778,471 ops/sec ±1.08% (96 runs sampled)
Ramda (curried) "pick" x 2,531,976 ops/sec ±0.29% (95 runs sampled)
Fastest is Vanillas (curried) "pick"

Vanillas "pipe" x 9,697,211 ops/sec ±1.49% (97 runs sampled)
Ramda "pipe" x 931,620 ops/sec ±0.14% (98 runs sampled)
Fastest is Vanillas "pipe"

Vanillas "propAt" x 20,220,625 ops/sec ±0.04% (99 runs sampled)
Lodash "get" x 17,496,313 ops/sec ±0.42% (97 runs sampled)
Ramda "path" x 11,273,469 ops/sec ±0.12% (98 runs sampled)
(native) "&& until you find it" x 77,452,882 ops/sec ±0.47% (98 runs sampled)
Fastest is (native) "&& until you find it"

Vanillas (curried) "propAt" x 13,183,397 ops/sec ±0.43% (95 runs sampled)
Ramda (curried) "path" x 3,592,979 ops/sec ±0.33% (93 runs sampled)
Fastest is Vanillas (curried) "propAt"

Vanillas "propEquals" x 16,734,938 ops/sec ±0.49% (97 runs sampled)
Ramda "pathEq" x 4,318,214 ops/sec ±0.19% (94 runs sampled)
(native) "&& until you find it" x 72,118,007 ops/sec ±0.20% (98 runs sampled)
Fastest is (native) "&& until you find it"

Vanillas (curried) "propEquals" x 6,690,540 ops/sec ±0.79% (97 runs sampled)
Ramda (curried) "pathEq" x 2,159,725 ops/sec ±0.48% (97 runs sampled)
Fastest is Vanillas (curried) "propEquals"

Vanillas "reduce" x 314,966 ops/sec ±0.13% (95 runs sampled)
Lodash "reduce" x 312,844 ops/sec ±0.43% (96 runs sampled)
Ramda "reduce" x 294,472 ops/sec ±0.88% (94 runs sampled)
(native) "Array.reduce" x 325,962 ops/sec ±0.25% (98 runs sampled)
Fastest is (native) "Array.reduce"

Vanillas "reduce" x 2,744,128 ops/sec ±0.40% (95 runs sampled)
Lodash "reduce" x 2,059,279 ops/sec ±1.49% (93 runs sampled)
Fastest is Vanillas "reduce"

Vanillas (curried) "reduce" x 295,030 ops/sec ±0.16% (98 runs sampled)
Ramda (curried) "reduce" x 271,807 ops/sec ±0.98% (96 runs sampled)
Fastest is Vanillas (curried) "reduce"

Vanillas "size" x 77,559,259 ops/sec ±0.24% (93 runs sampled)
Lodash "size" x 12,342,531 ops/sec ±0.28% (97 runs sampled)
Ramda "length" x 5,942,741 ops/sec ±0.69% (95 runs sampled)
Fastest is Vanillas "size"

Vanillas "size" x 31,986,926 ops/sec ±0.40% (94 runs sampled)
Lodash "size" x 10,177,203 ops/sec ±0.61% (95 runs sampled)
Fastest is Vanillas "size"

Vanillas "size" x 79,870,003 ops/sec ±0.22% (96 runs sampled)
Lodash "size" x 22,502,164 ops/sec ±1.74% (82 runs sampled)
Ramda "length" x 5,952,551 ops/sec ±0.53% (98 runs sampled)
Fastest is Vanillas "size"

Vanillas "uniq" (list of nums) x 4,711,315 ops/sec ±0.07% (97 runs sampled)
Lodash "uniq" (list of nums) x 3,546,158 ops/sec ±0.79% (95 runs sampled)
Ramda "uniq" (list of nums) x 251,308 ops/sec ±0.13% (96 runs sampled)
Fastest is Vanillas "uniq" (list of nums)

Vanillas "uniq" (list of strings) x 4,468,575 ops/sec ±0.28% (95 runs sampled)
Lodash "uniq" (list of strings) x 3,659,648 ops/sec ±0.21% (97 runs sampled)
Ramda "uniq" (list of strings) x 344,901 ops/sec ±0.97% (94 runs sampled)
Fastest is Vanillas "uniq" (list of strings)

Vanillas "uniqBy" (top-level prop) x 3,342,219 ops/sec ±0.38% (95 runs sampled)
Lodash "uniqBy" (top-level prop) x 2,366,415 ops/sec ±0.15% (96 runs sampled)
Ramda "uniqBy" (top-level prop) x 410,049 ops/sec ±0.15% (97 runs sampled)
Fastest is Vanillas "uniqBy" (top-level prop)

Vanillas "uniqBy" (nested prop) x 806,792 ops/sec ±0.12% (95 runs sampled)
Lodash "uniqBy" (nested prop) x 435,161 ops/sec ±0.97% (96 runs sampled)
Ramda "uniqBy" (nested prop) x 456,587 ops/sec ±0.07% (96 runs sampled)
Fastest is Vanillas "uniqBy" (nested prop)

Joi "validate" x 154,947 ops/sec ±1.08% (96 runs sampled)
Yup "validate" x 9,099 ops/sec ±0.63% (92 runs sampled)
Spected "validate" x 99,457 ops/sec ±0.80% (96 runs sampled)
Vanillas "validate" x 202,448 ops/sec ±0.14% (98 runs sampled)
Fastest is Vanillas "validate"

Vanillas "omit" x 20,955,915 ops/sec ±0.22% (95 runs sampled)
Lodash "omit" x 6,646,783 ops/sec ±0.53% (91 runs sampled)
Ramda "omit" x 2,040,914 ops/sec ±0.89% (96 runs sampled)
(native) "Object.keys().filter().reduce() (native) x 24,200,109 ops/sec ±0.23% (98 runs sampled)
Fastest is (native) "Object.keys().filter().reduce() (native)

```
