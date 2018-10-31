```
Vanillas "any" x 9,636,450 ops/sec ±0.54% (93 runs sampled)
Lodash "some" x 9,196,015 ops/sec ±0.85% (91 runs sampled)
Ramda "any" x 3,855,233 ops/sec ±0.65% (90 runs sampled)
(native) "Array.some()" x 9,907,373 ops/sec ±0.82% (93 runs sampled)
Fastest is (native) "Array.some()"

Vanillas "assign" x 3,423,433 ops/sec ±0.60% (92 runs sampled)
(native) "Object.assign()" x 555,974 ops/sec ±0.97% (88 runs sampled)
Fastest is Vanillas "assign"

Vanillas "clone" x 6,325,999 ops/sec ±0.62% (91 runs sampled)
Lodash "clone" x 1,471,572 ops/sec ±1.07% (90 runs sampled)
Ramda "clone" x 767,289 ops/sec ±0.94% (91 runs sampled)
(native) "clone by destructuring" x 2,026,194 ops/sec ±0.72% (91 runs sampled)
(native) "Object.assign({}, ..)" x 1,502,480 ops/sec ±0.69% (93 runs sampled)
Fastest is Vanillas "clone"

Vanillas "clone" x 967,479 ops/sec ±0.58% (93 runs sampled)
Lodash "cloneDeep" x 258,021 ops/sec ±1.38% (89 runs sampled)
Ramda "clone" x 238,289 ops/sec ±1.37% (88 runs sampled)
(native) "clone by destructuring" x 304,161 ops/sec ±1.17% (88 runs sampled)
Fastest is Vanillas "clone"

Vanillas "compose" x 11,228,783 ops/sec ±2.68% (91 runs sampled)
Redux "compose" x 7,142,417 ops/sec ±1.06% (92 runs sampled)
Ramda "compose" x 708,958 ops/sec ±0.63% (91 runs sampled)
Fastest is Vanillas "compose"

Vanillas "concat" x 32,063,934 ops/sec ±3.16% (88 runs sampled)
Lodash "concat" x 2,517,540 ops/sec ±1.45% (89 runs sampled)
Ramda "concat" x 4,961,012 ops/sec ±1.17% (87 runs sampled)
(native) "Array.concat()" x 6,236,747 ops/sec ±1.57% (87 runs sampled)
(native) "[ ...val1, ...val2 ]" x 6,257,986 ops/sec ±0.75% (86 runs sampled)
Fastest is Vanillas "concat"

Vanillas "cond" x 1,772,649 ops/sec ±1.42% (91 runs sampled)
Ramda "cond" x 1,143,834 ops/sec ±1.71% (84 runs sampled)
(native) "If/Else/ElseIf" x 1,945,857 ops/sec ±1.41% (93 runs sampled)
Fastest is (native) "If/Else/ElseIf"

Vanillas "contains" (array) x 84,324,193 ops/sec ±0.89% (91 runs sampled)
Lodash "includes" (array) x 12,051,110 ops/sec ±0.78% (93 runs sampled)
Ramda "contains" (array) x 25,310,981 ops/sec ±1.73% (90 runs sampled)
(native) "Array.includes()" x 48,186,364 ops/sec ±0.82% (89 runs sampled)
Fastest is Vanillas "contains" (array)

Vanillas "contains" (string) x 34,127,555 ops/sec ±1.05% (89 runs sampled)
Lodash "includes" (string) x 27,250,990 ops/sec ±0.87% (89 runs sampled)
Ramda "contains" (string) x 17,733,779 ops/sec ±0.73% (94 runs sampled)
(native) "String.includes()" x 23,379,466 ops/sec ±0.81% (89 runs sampled)
Fastest is Vanillas "contains" (string)

Vanillas "curry" x 28,081,651 ops/sec ±0.63% (92 runs sampled)
Lodash "curry" x 962,882 ops/sec ±1.09% (91 runs sampled)
Ramda "curry" x 5,080,609 ops/sec ±0.50% (90 runs sampled)
Fastest is Vanillas "curry"

Executing Vanillas 2-arg curried function x 12,799,489 ops/sec ±0.62% (91 runs sampled)
Executing Lodash 2-arg curried function x 296,235 ops/sec ±9.94% (73 runs sampled)
Executing Ramda 2-arg curried function x 2,477,584 ops/sec ±0.58% (91 runs sampled)
Fastest is Executing Vanillas 2-arg curried function

Executing Vanillas 3-arg curried function x 8,116,128 ops/sec ±0.81% (92 runs sampled)
Executing Lodash 3-arg curried function x 221,236 ops/sec ±0.95% (90 runs sampled)
Executing Ramda 3-arg curried function x 1,873,092 ops/sec ±0.80% (89 runs sampled)
Fastest is Executing Vanillas 3-arg curried function

Executing Vanillas 4-arg curried function x 5,347,666 ops/sec ±0.80% (93 runs sampled)
Executing Lodash 4-arg curried function x 154,568 ops/sec ±1.03% (88 runs sampled)
Executing Ramda 4-arg curried function x 1,537,567 ops/sec ±1.54% (92 runs sampled)
Fastest is Executing Vanillas 4-arg curried function

Executing Vanillas 5+arg curried function x 1,745,523 ops/sec ±1.71% (88 runs sampled)
Executing Lodash 5+arg curried function x 117,468 ops/sec ±0.69% (92 runs sampled)
Executing Ramda 5+arg curried function x 1,180,579 ops/sec ±1.24% (89 runs sampled)
Fastest is Executing Vanillas 5+arg curried function

Vanillas "each" x 73,288,013 ops/sec ±0.69% (93 runs sampled)
Lodash "each" x 4,454,119 ops/sec ±0.79% (92 runs sampled)
(native) "Array.forEach" x 69,743,363 ops/sec ±0.88% (88 runs sampled)
Fastest is Vanillas "each"

Vanillas "entries" x 10,579,350 ops/sec ±3.42% (90 runs sampled)
Lodash "toPairs" x 5,536,022 ops/sec ±0.60% (95 runs sampled)
Ramda "toPairs" x 4,926,854 ops/sec ±0.47% (94 runs sampled)
(native) "Object.entries( )" x 18,877,270 ops/sec ±4.08% (89 runs sampled)
Fastest is (native) "Object.entries( )"

Vanillas "find" x 9,787,772 ops/sec ±0.80% (89 runs sampled)
Lodash "find" x 5,113,833 ops/sec ±0.84% (92 runs sampled)
Ramda "find" x 3,596,241 ops/sec ±0.64% (92 runs sampled)
(native) "Array.find()" x 9,656,939 ops/sec ±0.79% (89 runs sampled)
Fastest is Vanillas "find"

Vanillas "findIndex" x 7,578,520 ops/sec ±12.76% (75 runs sampled)
Lodash "findIndex" x 6,929,589 ops/sec ±0.52% (90 runs sampled)
Ramda "findIndex" x 3,544,342 ops/sec ±0.50% (93 runs sampled)
(native) "Array.findIndex()" x 9,623,086 ops/sec ±0.93% (89 runs sampled)
Fastest is (native) "Array.findIndex()"

Vanillas "invert" x 7,454,093 ops/sec ±1.14% (92 runs sampled)
Lodash "invert" x 4,969,922 ops/sec ±0.65% (93 runs sampled)
Ramda "invertObj" x 2,011,204 ops/sec ±0.80% (93 runs sampled)
(native) "Object.keys( ).reduce()" x 352,487 ops/sec ±0.52% (93 runs sampled)
Fastest is Vanillas "invert"

Vanillas "isEmpty" x 82,340,090 ops/sec ±0.64% (92 runs sampled)
Lodash "isEmpty" x 13,157,623 ops/sec ±0.89% (92 runs sampled)
Ramda "isEmpty" x 505,444 ops/sec ±0.53% (94 runs sampled)
Fastest is Vanillas "isEmpty"

Vanillas "isEqual" x 455,515 ops/sec ±0.98% (90 runs sampled)
Lodash "isEqual" x 146,391 ops/sec ±1.86% (87 runs sampled)
Ramda "equals" x 45,476 ops/sec ±0.66% (92 runs sampled)
Fastest is Vanillas "isEqual"

Vanillas (curried) "isEqual" x 421,044 ops/sec ±0.95% (90 runs sampled)
Ramda (curried) "equals" x 44,778 ops/sec ±1.09% (92 runs sampled)
Fastest is Vanillas (curried) "isEqual"

Vanillas "isObject" x 16,539,943 ops/sec ±0.72% (87 runs sampled)
Lodash "isPlainObject" x 2,479,453 ops/sec ±0.49% (94 runs sampled)
Fastest is Vanillas "isObject"

Vanillas "map" x 4,907,217 ops/sec ±0.51% (92 runs sampled)
Lodash "map" x 3,886,207 ops/sec ±1.65% (91 runs sampled)
Ramda "map" x 2,307,875 ops/sec ±1.22% (84 runs sampled)
(native) "Array.map()" x 5,228,381 ops/sec ±0.61% (93 runs sampled)
Fastest is (native) "Array.map()"

Vanillas (curried) "map" x 3,847,124 ops/sec ±1.55% (93 runs sampled)
Ramda (curried) "map" x 1,574,436 ops/sec ±0.49% (92 runs sampled)
Fastest is Vanillas (curried) "map"

Vanillas "mapObject" x 3,157,669 ops/sec ±0.60% (91 runs sampled)
Lodash "mapValues" x 2,123,671 ops/sec ±1.21% (91 runs sampled)
Ramda "map" x 909,295 ops/sec ±0.54% (95 runs sampled)
(native) "Object.keys( ).reduce()" x 329,185 ops/sec ±1.11% (93 runs sampled)
(native) "Object.entries().reduce()" x 323,200 ops/sec ±1.08% (93 runs sampled)
Fastest is Vanillas "mapObject"

Vanillas "mapSpec" x 959,853 ops/sec ±1.39% (89 runs sampled)
Ramda "evolve" x 975,826 ops/sec ±1.21% (91 runs sampled)
Fastest is Ramda "evolve"

Vanillas (curried) "mapSpec" x 943,472 ops/sec ±1.26% (92 runs sampled)
Ramda (curried) "evolve" x 783,430 ops/sec ±2.08% (87 runs sampled)
Fastest is Vanillas (curried) "mapSpec"

Vanillas "mapString" x 432,945 ops/sec ±0.79% (89 runs sampled)
(native) "String.split().map().join()" x 303,183 ops/sec ±0.71% (91 runs sampled)
Fastest is Vanillas "mapString"

Vanillas "merge" x 2,296,870 ops/sec ±1.42% (89 runs sampled)
Lodash "merge" x 1,188,438 ops/sec ±0.85% (93 runs sampled)
Ramda "merge" x 786,085 ops/sec ±0.86% (91 runs sampled)
(native) "Object.assign({}, ..)" x 826,190 ops/sec ±0.91% (93 runs sampled)
Fastest is Vanillas "merge"

Vanillas (curried) "merge" x 1,846,264 ops/sec ±0.60% (92 runs sampled)
Ramda (curried) "merge" x 638,426 ops/sec ±1.13% (89 runs sampled)
Fastest is Vanillas (curried) "merge"

Vanillas "omit" x 6,974,610 ops/sec ±1.21% (91 runs sampled)
Lodash "omit" x 652,197 ops/sec ±0.72% (91 runs sampled)
Ramda "omit" x 3,926,550 ops/sec ±1.12% (91 runs sampled)
(native) "Object.keys().filter().reduce() (native) x 169,800 ops/sec ±0.81% (89 runs sampled)
Fastest is Vanillas "omit"

Vanillas (curried) "omit" x 5,738,933 ops/sec ±0.60% (91 runs sampled)
Ramda (curried) "omit" x 1,996,609 ops/sec ±6.50% (81 runs sampled)
Fastest is Vanillas (curried) "omit"

Vanillas "pick" x 9,882,738 ops/sec ±0.81% (91 runs sampled)
Lodash "pick" x 988,811 ops/sec ±1.14% (90 runs sampled)
Ramda "pick" x 6,311,248 ops/sec ±0.64% (91 runs sampled)
(native) "Array.prototype.reduce" x 497,563 ops/sec ±0.70% (94 runs sampled)
Fastest is Vanillas "pick"

Vanillas (curried) "pick" x 7,541,724 ops/sec ±1.05% (91 runs sampled)
Ramda (curried) "pick" x 2,784,238 ops/sec ±0.69% (95 runs sampled)
Fastest is Vanillas (curried) "pick"

Vanillas "pipe" x 10,866,558 ops/sec ±0.52% (93 runs sampled)
Ramda "pipe" x 926,454 ops/sec ±1.28% (88 runs sampled)
Fastest is Vanillas "pipe"

Vanillas "propAt" x 28,384,505 ops/sec ±0.75% (92 runs sampled)
Lodash "get" x 18,968,340 ops/sec ±0.66% (94 runs sampled)
Ramda "path" x 12,885,164 ops/sec ±0.81% (93 runs sampled)
(native) "&& until you find it" x 94,222,588 ops/sec ±0.52% (90 runs sampled)
Fastest is (native) "&& until you find it"

Vanillas (curried) "propAt" x 16,539,283 ops/sec ±0.51% (95 runs sampled)
Ramda (curried) "path" x 3,918,680 ops/sec ±0.75% (91 runs sampled)
Fastest is Vanillas (curried) "propAt"

Vanillas "propEquals" x 26,140,719 ops/sec ±0.63% (93 runs sampled)
Ramda "pathEq" x 4,810,092 ops/sec ±0.50% (94 runs sampled)
(native) "&& until you find it" x 84,810,043 ops/sec ±0.78% (91 runs sampled)
Fastest is (native) "&& until you find it"

Vanillas (curried) "propEquals" x 7,814,891 ops/sec ±0.75% (93 runs sampled)
Ramda (curried) "pathEq" x 2,500,733 ops/sec ±0.45% (93 runs sampled)
Fastest is Vanillas (curried) "propEquals"

Vanillas "reduce" x 362,361 ops/sec ±1.14% (92 runs sampled)
Lodash "reduce" x 364,551 ops/sec ±0.62% (91 runs sampled)
Ramda "reduce" x 315,627 ops/sec ±1.11% (92 runs sampled)
(native) "Array.reduce" x 344,905 ops/sec ±1.29% (90 runs sampled)
Fastest is Lodash "reduce",Vanillas "reduce"

Vanillas (curried) "reduce" x 331,552 ops/sec ±0.93% (91 runs sampled)
Ramda (curried) "reduce" x 276,863 ops/sec ±1.91% (87 runs sampled)
Fastest is Vanillas (curried) "reduce"

Vanillas "size" x 86,341,748 ops/sec ±0.84% (88 runs sampled)
Lodash "size" x 12,786,838 ops/sec ±0.80% (91 runs sampled)
Ramda "length" x 6,413,522 ops/sec ±0.68% (91 runs sampled)
Fastest is Vanillas "size"

Vanillas "size" x 37,675,459 ops/sec ±1.10% (94 runs sampled)
Lodash "size" x 10,280,911 ops/sec ±1.70% (87 runs sampled)
Fastest is Vanillas "size"

Vanillas "size" x 87,469,808 ops/sec ±0.40% (93 runs sampled)
Lodash "size" x 28,197,315 ops/sec ±0.37% (94 runs sampled)
Ramda "length" x 6,426,989 ops/sec ±0.28% (94 runs sampled)
Fastest is Vanillas "size"

Vanillas "uniq" x 10,872,472 ops/sec ±0.62% (94 runs sampled)
Lodash "uniq" x 9,912,823 ops/sec ±0.57% (91 runs sampled)
Ramda "uniq" x 292,950 ops/sec ±0.72% (92 runs sampled)
Fastest is Vanillas "uniq"

Vanillas "validate" x 235,269 ops/sec ±1.25% (94 runs sampled)
Spected "validate" x 72,069 ops/sec ±8.68% (80 runs sampled)
Yup "validate" x 9,267 ops/sec ±2.19% (93 runs sampled)
Joi "validate" x 165,083 ops/sec ±4.11% (89 runs sampled)
Fastest is Vanillas "validate"

```
