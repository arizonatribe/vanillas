```
Vanillas "any" x 10,079,213 ops/sec ±0.86% (93 runs sampled)
Lodash "some" x 9,749,531 ops/sec ±0.46% (94 runs sampled)
Ramda "any" x 4,088,328 ops/sec ±0.44% (92 runs sampled)
(native) "Array.some()" x 10,361,659 ops/sec ±0.62% (92 runs sampled)
Fastest is (native) "Array.some()"

Vanillas "assign" x 3,635,201 ops/sec ±0.42% (95 runs sampled)
(native) "Object.assign()" x 622,474 ops/sec ±0.37% (91 runs sampled)
Fastest is Vanillas "assign"

Vanillas "clone" x 6,840,386 ops/sec ±0.60% (95 runs sampled)
Lodash "clone" x 1,579,493 ops/sec ±0.40% (95 runs sampled)
Ramda "clone" x 815,645 ops/sec ±0.90% (95 runs sampled)
(native) "clone by destructuring" x 2,171,739 ops/sec ±0.42% (94 runs sampled)
(native) "Object.assign({}, ..)" x 2,010,918 ops/sec ±0.69% (90 runs sampled)
Fastest is Vanillas "clone"

Vanillas "clone" x 1,013,091 ops/sec ±0.60% (93 runs sampled)
Lodash "cloneDeep" x 283,182 ops/sec ±1.05% (93 runs sampled)
Ramda "clone" x 267,233 ops/sec ±0.47% (96 runs sampled)
(native) "clone by destructuring" x 340,199 ops/sec ±0.39% (94 runs sampled)
Fastest is Vanillas "clone"

Vanillas "compose" x 12,401,855 ops/sec ±2.19% (91 runs sampled)
Redux "compose" x 7,486,017 ops/sec ±0.20% (95 runs sampled)
Ramda "compose" x 779,243 ops/sec ±0.98% (94 runs sampled)
Fastest is Vanillas "compose"

Vanillas "concat" x 34,792,282 ops/sec ±0.24% (94 runs sampled)
Lodash "concat" x 2,838,540 ops/sec ±0.50% (95 runs sampled)
Ramda "concat" x 5,506,781 ops/sec ±1.20% (94 runs sampled)
(native) "Array.concat()" x 6,915,402 ops/sec ±1.02% (94 runs sampled)
(native) "[ ...val1, ...val2 ]" x 6,926,784 ops/sec ±1.38% (94 runs sampled)
Fastest is Vanillas "concat"

Vanillas "curry" x 29,181,050 ops/sec ±0.49% (92 runs sampled)
Lodash "curry" x 992,150 ops/sec ±0.90% (96 runs sampled)
Ramda "curry" x 5,295,414 ops/sec ±0.39% (94 runs sampled)
Fastest is Vanillas "curry"

Executing Vanillas curried function x 2,056,993 ops/sec ±0.30% (95 runs sampled)
Executing Lodash curried function x 243,082 ops/sec ±1.08% (97 runs sampled)
Executing Ramda curried function x 1,996,693 ops/sec ±0.35% (95 runs sampled)
Fastest is Executing Vanillas curried function

Vanillas "each" x 73,984,897 ops/sec ±0.56% (94 runs sampled)
Lodash "each" x 4,535,695 ops/sec ±0.47% (94 runs sampled)
(native) "Array.forEach" x 70,664,821 ops/sec ±0.53% (95 runs sampled)
Fastest is Vanillas "each"

Vanillas "entries" x 4,447,450 ops/sec ±1.86% (80 runs sampled)
Lodash "toPairs" x 7,266,292 ops/sec ±0.27% (96 runs sampled)
Ramda "toPairs" x 5,025,594 ops/sec ±0.36% (95 runs sampled)
(native) "Object.entries( )" x 19,555,913 ops/sec ±0.40% (93 runs sampled)
Fastest is (native) "Object.entries( )"

Vanillas "find" x 10,039,032 ops/sec ±0.83% (94 runs sampled)
Lodash "find" x 5,532,682 ops/sec ±0.62% (92 runs sampled)
Ramda "find" x 3,856,716 ops/sec ±0.46% (93 runs sampled)
(native) "Array.find()" x 10,378,524 ops/sec ±0.73% (95 runs sampled)
Fastest is (native) "Array.find()"

Vanillas "findIndex" x 10,326,278 ops/sec ±0.45% (97 runs sampled)
Lodash "findIndex" x 7,704,056 ops/sec ±0.62% (93 runs sampled)
Ramda "findIndex" x 3,835,179 ops/sec ±0.60% (94 runs sampled)
(native) "Array.findIndex()" x 10,277,125 ops/sec ±0.74% (94 runs sampled)
Fastest is Vanillas "findIndex",(native) "Array.findIndex()"

Vanillas "isEmpty" x 86,233,089 ops/sec ±0.40% (95 runs sampled)
Lodash "isEmpty" x 14,129,869 ops/sec ±0.60% (95 runs sampled)
Ramda "isEmpty" x 530,306 ops/sec ±0.73% (94 runs sampled)
Fastest is Vanillas "isEmpty"

Vanillas "isEqual" x 578,548 ops/sec ±0.34% (95 runs sampled)
Lodash "isEqual" x 191,301 ops/sec ±1.15% (93 runs sampled)
Ramda "equals" x 58,574 ops/sec ±0.32% (94 runs sampled)
Fastest is Vanillas "isEqual"

Vanillas "isObject" x 31,511,340 ops/sec ±0.56% (86 runs sampled)
Lodash "isPlainObject" x 3,167,241 ops/sec ±1.34% (95 runs sampled)
Fastest is Vanillas "isObject"

Vanillas "map" x 5,566,607 ops/sec ±0.51% (94 runs sampled)
Lodash "map" x 4,407,500 ops/sec ±1.44% (95 runs sampled)
Ramda "map" x 2,602,365 ops/sec ±0.45% (95 runs sampled)
(native) "Array.map()" x 5,551,696 ops/sec ±2.41% (94 runs sampled)
Fastest is Vanillas "map"

Vanillas "mapObject" x 3,304,485 ops/sec ±0.67% (94 runs sampled)
Lodash "mapValues" x 2,570,053 ops/sec ±1.53% (91 runs sampled)
Ramda "map" x 1,015,219 ops/sec ±0.54% (94 runs sampled)
(native) "Object.keys( ).reduce()" x 354,667 ops/sec ±0.33% (93 runs sampled)
(native) "Object.entries().reduce()" x 352,553 ops/sec ±1.15% (93 runs sampled)
Fastest is Vanillas "mapObject"

Vanillas "mapSpec" x 1,074,025 ops/sec ±0.48% (94 runs sampled)
Ramda "evolve" x 1,060,846 ops/sec ±1.22% (93 runs sampled)
Fastest is Vanillas "mapSpec"

Vanillas "mapString" x 468,953 ops/sec ±0.47% (92 runs sampled)
(native) "String.split().map().join()" x 323,564 ops/sec ±0.34% (95 runs sampled)
Fastest is Vanillas "mapString"

Vanillas "merge" x 2,390,259 ops/sec ±0.57% (93 runs sampled)
Lodash "merge" x 1,241,154 ops/sec ±0.48% (95 runs sampled)
Ramda "merge" x 893,076 ops/sec ±0.80% (93 runs sampled)
(native) "Object.assign({}, ..)" x 939,338 ops/sec ±0.53% (94 runs sampled)
Fastest is Vanillas "merge"

Vanillas "omit" x 8,888,844 ops/sec ±0.42% (95 runs sampled)
Lodash "omit" x 564,051 ops/sec ±1.24% (91 runs sampled)
Ramda "omit" x 4,786,172 ops/sec ±0.55% (95 runs sampled)
(native) "Object.keys().filter().reduce() (native) x 233,201 ops/sec ±1.14% (93 runs sampled)
Fastest is Vanillas "omit"

Vanillas "pick" x 10,174,095 ops/sec ±0.46% (92 runs sampled)
Lodash "pick" x 1,048,465 ops/sec ±1.04% (93 runs sampled)
Ramda "pick" x 6,316,367 ops/sec ±0.50% (94 runs sampled)
(native) "Array.prototype.reduce" x 521,094 ops/sec ±0.89% (94 runs sampled)
Fastest is Vanillas "pick"

Vanillas "pipe" x 11,698,296 ops/sec ±2.07% (93 runs sampled)
Ramda "pipe" x 1,066,861 ops/sec ±0.47% (95 runs sampled)
Fastest is Vanillas "pipe"

Vanillas "propAt" x 31,891,434 ops/sec ±0.76% (90 runs sampled)
Lodash "get" x 21,236,562 ops/sec ±0.48% (92 runs sampled)
Ramda "path" x 14,100,819 ops/sec ±0.66% (91 runs sampled)
(native) "&& until you find it" x 110,216,376 ops/sec ±0.53% (97 runs sampled)
Fastest is (native) "&& until you find it"

Vanillas "propEquals" x 28,712,651 ops/sec ±0.55% (91 runs sampled)
Ramda "pathEq" x 5,097,387 ops/sec ±0.56% (93 runs sampled)
(native) "&& until you find it" x 98,045,083 ops/sec ±0.59% (93 runs sampled)
Fastest is (native) "&& until you find it"

Vanillas "reduce" x 387,996 ops/sec ±1.09% (91 runs sampled)
Lodash "reduce" x 334,377 ops/sec ±0.49% (94 runs sampled)
Ramda "reduce" x 348,058 ops/sec ±0.53% (95 runs sampled)
(native) "Array.reduce" x 368,252 ops/sec ±1.06% (93 runs sampled)
Fastest is Vanillas "reduce"

Vanillas "size" x 96,491,036 ops/sec ±0.37% (90 runs sampled)
Lodash "size" x 14,129,058 ops/sec ±0.57% (93 runs sampled)
Ramda "length" x 6,986,057 ops/sec ±0.60% (91 runs sampled)
Fastest is Vanillas "size"

Vanillas "size" x 44,127,130 ops/sec ±0.22% (96 runs sampled)
Lodash "size" x 20,732,468 ops/sec ±0.57% (94 runs sampled)
Fastest is Vanillas "size"

Vanillas "size" x 98,345,617 ops/sec ±0.59% (92 runs sampled)
Lodash "size" x 32,174,435 ops/sec ±0.65% (93 runs sampled)
Ramda "length" x 7,182,394 ops/sec ±0.60% (93 runs sampled)
Fastest is Vanillas "size"

```
