```
Vanillas "any" x 9,774,703 ops/sec ±0.60% (88 runs sampled)
Lodash "some" x 9,386,955 ops/sec ±0.78% (92 runs sampled)
Ramda "any" x 3,800,489 ops/sec ±0.74% (88 runs sampled)
(native) "Array.some()" x 9,971,481 ops/sec ±0.52% (93 runs sampled)
Fastest is (native) "Array.some()"

Vanillas "assign" x 3,379,342 ops/sec ±2.11% (92 runs sampled)
(native) "Object.assign()" x 564,877 ops/sec ±0.62% (89 runs sampled)
Fastest is Vanillas "assign"

Vanillas "clone" x 6,245,173 ops/sec ±1.36% (91 runs sampled)
Lodash "clone" x 1,541,984 ops/sec ±0.50% (93 runs sampled)
Ramda "clone" x 789,012 ops/sec ±0.55% (93 runs sampled)
(native) "clone by destructuring" x 2,049,961 ops/sec ±1.02% (93 runs sampled)
(native) "Object.assign({}, ..)" x 1,872,794 ops/sec ±1.15% (90 runs sampled)
Fastest is Vanillas "clone"

Vanillas "clone" x 906,743 ops/sec ±1.47% (91 runs sampled)
Lodash "cloneDeep" x 261,423 ops/sec ±0.89% (91 runs sampled)
Ramda "clone" x 239,222 ops/sec ±0.72% (91 runs sampled)
(native) "clone by destructuring" x 305,568 ops/sec ±1.08% (88 runs sampled)
Fastest is Vanillas "clone"

Vanillas "compose" x 12,256,705 ops/sec ±0.49% (93 runs sampled)
Redux "compose" x 7,208,747 ops/sec ±0.96% (92 runs sampled)
Ramda "compose" x 684,507 ops/sec ±2.03% (87 runs sampled)
Fastest is Vanillas "compose"

Vanillas "concat" x 32,374,477 ops/sec ±0.61% (92 runs sampled)
Lodash "concat" x 2,702,271 ops/sec ±0.59% (91 runs sampled)
Ramda "concat" x 5,284,904 ops/sec ±0.99% (93 runs sampled)
(native) "Array.concat()" x 6,568,256 ops/sec ±1.22% (90 runs sampled)
(native) "[ ...val1, ...val2 ]" x 6,449,643 ops/sec ±0.66% (87 runs sampled)
Fastest is Vanillas "concat"

Vanillas "cond" x 1,785,610 ops/sec ±1.38% (90 runs sampled)
Ramda "cond" x 1,193,854 ops/sec ±0.65% (92 runs sampled)
(native) "If/Else/ElseIf" x 1,933,525 ops/sec ±0.57% (91 runs sampled)
Fastest is (native) "If/Else/ElseIf"

Vanillas "contains" x 50,899,045 ops/sec ±0.80% (91 runs sampled)
Lodash "includes" x 12,053,375 ops/sec ±1.22% (87 runs sampled)
Ramda "contains" x 25,518,225 ops/sec ±0.84% (90 runs sampled)
(native) "Array.includes()" x 51,306,521 ops/sec ±0.73% (88 runs sampled)
Fastest is (native) "Array.includes()",Vanillas "contains"

Vanillas "contains" x 34,998,947 ops/sec ±0.94% (88 runs sampled)
Lodash "includes" x 26,332,195 ops/sec ±0.81% (90 runs sampled)
Ramda "contains" x 17,045,521 ops/sec ±0.62% (91 runs sampled)
(native) "Array.includes()" x 23,254,689 ops/sec ±0.72% (86 runs sampled)
Fastest is Vanillas "contains"

Vanillas "curry" x 26,942,571 ops/sec ±0.42% (93 runs sampled)
Lodash "curry" x 1,000,986 ops/sec ±0.62% (93 runs sampled)
Ramda "curry" x 5,118,270 ops/sec ±0.67% (93 runs sampled)
Fastest is Vanillas "curry"

Executing Vanillas 2-arg curried function x 12,119,780 ops/sec ±3.50% (89 runs sampled)
Executing Lodash 2-arg curried function x 383,402 ops/sec ±1.28% (93 runs sampled)
Executing Ramda 2-arg curried function x 2,486,880 ops/sec ±0.85% (93 runs sampled)
Fastest is Executing Vanillas 2-arg curried function

Executing Vanillas 3-arg curried function x 8,305,625 ops/sec ±0.41% (95 runs sampled)
Executing Lodash 3-arg curried function x 238,537 ops/sec ±1.18% (93 runs sampled)
Executing Ramda 3-arg curried function x 1,954,060 ops/sec ±0.38% (95 runs sampled)
Fastest is Executing Vanillas 3-arg curried function

Executing Vanillas 4-arg curried function x 5,447,716 ops/sec ±0.91% (90 runs sampled)
Executing Lodash 4-arg curried function x 174,474 ops/sec ±0.38% (94 runs sampled)
Executing Ramda 4-arg curried function x 1,623,579 ops/sec ±1.02% (93 runs sampled)
Fastest is Executing Vanillas 4-arg curried function

Executing Vanillas 5+arg curried function x 1,812,584 ops/sec ±0.45% (93 runs sampled)
Executing Lodash 5+arg curried function x 124,604 ops/sec ±0.48% (93 runs sampled)
Executing Ramda 5+arg curried function x 1,177,895 ops/sec ±1.23% (91 runs sampled)
Fastest is Executing Vanillas 5+arg curried function

Vanillas "each" x 71,875,290 ops/sec ±0.82% (92 runs sampled)
Lodash "each" x 4,495,542 ops/sec ±0.70% (91 runs sampled)
(native) "Array.forEach" x 71,826,954 ops/sec ±0.80% (91 runs sampled)
Fastest is Vanillas "each",(native) "Array.forEach"

Vanillas "entries" x 10,539,695 ops/sec ±2.80% (91 runs sampled)
Lodash "toPairs" x 5,458,495 ops/sec ±0.59% (93 runs sampled)
Ramda "toPairs" x 4,886,084 ops/sec ±0.73% (92 runs sampled)
(native) "Object.entries( )" x 19,233,035 ops/sec ±3.78% (92 runs sampled)
Fastest is (native) "Object.entries( )"

Vanillas "find" x 9,785,359 ops/sec ±0.62% (90 runs sampled)
Lodash "find" x 5,388,797 ops/sec ±0.65% (93 runs sampled)
Ramda "find" x 3,700,891 ops/sec ±0.46% (93 runs sampled)
(native) "Array.find()" x 10,262,533 ops/sec ±0.48% (93 runs sampled)
Fastest is (native) "Array.find()"

Vanillas "findIndex" x 10,143,381 ops/sec ±0.74% (93 runs sampled)
Lodash "findIndex" x 7,607,042 ops/sec ±0.45% (94 runs sampled)
Ramda "findIndex" x 3,705,977 ops/sec ±0.80% (96 runs sampled)
(native) "Array.findIndex()" x 10,194,810 ops/sec ±0.60% (95 runs sampled)
Fastest is (native) "Array.findIndex()",Vanillas "findIndex"

Vanillas "isEmpty" x 83,455,881 ops/sec ±0.54% (92 runs sampled)
Lodash "isEmpty" x 14,118,053 ops/sec ±0.42% (90 runs sampled)
Ramda "isEmpty" x 523,435 ops/sec ±0.23% (96 runs sampled)
Fastest is Vanillas "isEmpty"

Vanillas "isEqual" x 466,910 ops/sec ±0.57% (92 runs sampled)
Lodash "isEqual" x 163,500 ops/sec ±0.44% (95 runs sampled)
Ramda "equals" x 50,986 ops/sec ±0.74% (93 runs sampled)
Fastest is Vanillas "isEqual"

Vanillas (curried) "isEqual" x 469,885 ops/sec ±0.31% (95 runs sampled)
Ramda (curried) "equals" x 49,096 ops/sec ±1.24% (90 runs sampled)
Fastest is Vanillas (curried) "isEqual"

Vanillas "isObject" x 18,003,915 ops/sec ±0.56% (95 runs sampled)
Lodash "isPlainObject" x 2,625,151 ops/sec ±0.84% (92 runs sampled)
Fastest is Vanillas "isObject"

Vanillas "map" x 5,320,596 ops/sec ±1.62% (92 runs sampled)
Lodash "map" x 4,216,347 ops/sec ±0.49% (93 runs sampled)
Ramda "map" x 2,464,673 ops/sec ±0.55% (91 runs sampled)
(native) "Array.map()" x 5,432,411 ops/sec ±2.23% (93 runs sampled)
Fastest is (native) "Array.map()"

Vanillas (curried) "map" x 3,954,324 ops/sec ±0.36% (95 runs sampled)
Ramda (curried) "map" x 1,593,919 ops/sec ±1.13% (90 runs sampled)
Fastest is Vanillas (curried) "map"

Vanillas "mapObject" x 3,187,712 ops/sec ±0.58% (93 runs sampled)
Lodash "mapValues" x 2,220,214 ops/sec ±1.35% (94 runs sampled)
Ramda "map" x 952,795 ops/sec ±0.81% (91 runs sampled)
(native) "Object.keys( ).reduce()" x 341,840 ops/sec ±0.33% (94 runs sampled)
(native) "Object.entries().reduce()" x 332,701 ops/sec ±1.24% (95 runs sampled)
Fastest is Vanillas "mapObject"

Vanillas "mapSpec" x 1,062,141 ops/sec ±0.35% (94 runs sampled)
Ramda "evolve" x 1,051,202 ops/sec ±1.33% (92 runs sampled)
Fastest is Vanillas "mapSpec",Ramda "evolve"

Vanillas (curried) "mapSpec" x 992,891 ops/sec ±0.53% (95 runs sampled)
Ramda (curried) "evolve" x 845,166 ops/sec ±0.46% (89 runs sampled)
Fastest is Vanillas (curried) "mapSpec"

Vanillas "mapString" x 456,169 ops/sec ±0.54% (95 runs sampled)
(native) "String.split().map().join()" x 313,881 ops/sec ±0.37% (93 runs sampled)
Fastest is Vanillas "mapString"

Vanillas "merge" x 2,385,891 ops/sec ±1.27% (96 runs sampled)
Lodash "merge" x 1,213,133 ops/sec ±0.38% (95 runs sampled)
Ramda "merge" x 865,544 ops/sec ±0.77% (95 runs sampled)
(native) "Object.assign({}, ..)" x 911,911 ops/sec ±0.40% (95 runs sampled)
Fastest is Vanillas "merge"

Vanillas (curried) "merge" x 1,871,267 ops/sec ±0.37% (94 runs sampled)
Ramda (curried) "merge" x 736,738 ops/sec ±0.72% (94 runs sampled)
Fastest is Vanillas (curried) "merge"

Vanillas "omit" x 7,434,599 ops/sec ±0.48% (93 runs sampled)
Lodash "omit" x 670,170 ops/sec ±1.19% (94 runs sampled)
Ramda "omit" x 4,123,439 ops/sec ±0.72% (93 runs sampled)
(native) "Object.keys().filter().reduce() (native) x 185,877 ops/sec ±1.16% (89 runs sampled)
Fastest is Vanillas "omit"

Vanillas (curried) "omit" x 6,018,125 ops/sec ±0.29% (94 runs sampled)
Ramda (curried) "omit" x 2,214,164 ops/sec ±0.48% (94 runs sampled)
Fastest is Vanillas (curried) "omit"

Vanillas "pick" x 9,883,493 ops/sec ±1.12% (89 runs sampled)
Lodash "pick" x 1,053,600 ops/sec ±0.46% (92 runs sampled)
Ramda "pick" x 6,353,355 ops/sec ±0.82% (95 runs sampled)
(native) "Array.prototype.reduce" x 512,086 ops/sec ±0.43% (94 runs sampled)
Fastest is Vanillas "pick"

Vanillas (curried) "pick" x 7,444,293 ops/sec ±1.27% (93 runs sampled)
Ramda (curried) "pick" x 2,860,202 ops/sec ±1.21% (88 runs sampled)
Fastest is Vanillas (curried) "pick"

Vanillas "pipe" x 11,109,408 ops/sec ±2.91% (90 runs sampled)
Ramda "pipe" x 1,026,307 ops/sec ±0.83% (93 runs sampled)
Fastest is Vanillas "pipe"

Vanillas "propAt" x 29,376,793 ops/sec ±0.99% (91 runs sampled)
Lodash "get" x 19,964,122 ops/sec ±0.38% (94 runs sampled)
Ramda "path" x 12,509,132 ops/sec ±0.49% (95 runs sampled)
(native) "&& until you find it" x 95,633,557 ops/sec ±0.49% (93 runs sampled)
Fastest is (native) "&& until you find it"

Vanillas (curried) "propAt" x 16,581,396 ops/sec ±0.54% (95 runs sampled)
Ramda (curried) "path" x 3,994,274 ops/sec ±0.35% (94 runs sampled)
Fastest is Vanillas (curried) "propAt"

Vanillas "propEquals" x 26,838,618 ops/sec ±0.52% (91 runs sampled)
Ramda "pathEq" x 4,825,442 ops/sec ±0.60% (92 runs sampled)
(native) "&& until you find it" x 87,003,028 ops/sec ±0.44% (94 runs sampled)
Fastest is (native) "&& until you find it"

Vanillas (curried) "propEquals" x 8,089,904 ops/sec ±0.70% (91 runs sampled)
Ramda (curried) "pathEq" x 2,502,080 ops/sec ±0.38% (94 runs sampled)
Fastest is Vanillas (curried) "propEquals"

Vanillas "reduce" x 366,005 ops/sec ±1.20% (92 runs sampled)
Lodash "reduce" x 354,951 ops/sec ±1.64% (89 runs sampled)
Ramda "reduce" x 333,650 ops/sec ±0.39% (95 runs sampled)
(native) "Array.reduce" x 376,630 ops/sec ±1.10% (90 runs sampled)
Fastest is (native) "Array.reduce"

Vanillas (curried) "reduce" x 359,576 ops/sec ±0.50% (93 runs sampled)
Ramda (curried) "reduce" x 289,313 ops/sec ±1.05% (95 runs sampled)
Fastest is Vanillas (curried) "reduce"

Vanillas "size" x 90,913,199 ops/sec ±0.78% (88 runs sampled)
Lodash "size" x 14,084,509 ops/sec ±0.52% (92 runs sampled)
Ramda "length" x 6,716,577 ops/sec ±0.58% (91 runs sampled)
Fastest is Vanillas "size"

Vanillas "size" x 39,562,983 ops/sec ±0.35% (91 runs sampled)
Lodash "size" x 11,049,910 ops/sec ±0.78% (93 runs sampled)
Fastest is Vanillas "size"

Vanillas "size" x 88,721,999 ops/sec ±1.24% (88 runs sampled)
Lodash "size" x 29,862,911 ops/sec ±1.26% (91 runs sampled)
Ramda "length" x 7,012,550 ops/sec ±0.61% (95 runs sampled)
Fastest is Vanillas "size"

Vanillas "validate" x 234,292 ops/sec ±0.34% (95 runs sampled)
Spected "validate" x 86,159 ops/sec ±1.03% (92 runs sampled)
Joi "validate" x 172,168 ops/sec ±0.45% (93 runs sampled)
Fastest is Vanillas "validate"

```