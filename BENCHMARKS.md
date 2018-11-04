```
Vanillas "any" x 9,503,746 ops/sec ±4.34% (84 runs sampled)
Lodash "some" x 9,741,393 ops/sec ±0.69% (94 runs sampled)
Ramda "any" x 4,082,106 ops/sec ±0.94% (93 runs sampled)
(native) "Array.some()" x 10,432,905 ops/sec ±0.58% (91 runs sampled)
Fastest is (native) "Array.some()"

Vanillas "assign" x 3,709,762 ops/sec ±1.08% (93 runs sampled)
(native) "Object.assign()" x 614,639 ops/sec ±0.71% (94 runs sampled)
Fastest is Vanillas "assign"

Vanillas "clone" x 7,038,711 ops/sec ±1.60% (92 runs sampled)
Lodash "clone" x 1,538,523 ops/sec ±0.90% (92 runs sampled)
Ramda "clone" x 824,159 ops/sec ±1.03% (89 runs sampled)
(native) "clone by destructuring" x 2,215,772 ops/sec ±0.65% (95 runs sampled)
(native) "Object.assign({}, ..)" x 2,012,361 ops/sec ±0.66% (94 runs sampled)
Fastest is Vanillas "clone"

Vanillas "clone" x 921,326 ops/sec ±0.72% (93 runs sampled)
Lodash "cloneDeep" x 283,504 ops/sec ±0.42% (93 runs sampled)
Ramda "clone" x 267,368 ops/sec ±0.92% (91 runs sampled)
(native) "clone by destructuring" x 342,336 ops/sec ±0.45% (93 runs sampled)
Fastest is Vanillas "clone"

Vanillas "compose" x 13,937,540 ops/sec ±3.14% (91 runs sampled)
Redux "compose" x 8,189,803 ops/sec ±0.57% (94 runs sampled)
Ramda "compose" x 792,324 ops/sec ±0.69% (93 runs sampled)
Fastest is Vanillas "compose"

Vanillas "concat" x 35,178,814 ops/sec ±5.50% (92 runs sampled)
Lodash "concat" x 2,441,654 ops/sec ±0.33% (93 runs sampled)
Ramda "concat" x 5,591,134 ops/sec ±1.33% (92 runs sampled)
(native) "Array.concat()" x 7,304,770 ops/sec ±0.34% (93 runs sampled)
(native) "[ ...val1, ...val2 ]" x 7,220,389 ops/sec ±1.35% (94 runs sampled)
Fastest is Vanillas "concat"

Vanillas "cond" x 1,910,518 ops/sec ±0.82% (96 runs sampled)
Ramda "cond" x 699,425 ops/sec ±1.27% (91 runs sampled)
(native) "If/Else/ElseIf" x 2,072,934 ops/sec ±0.50% (98 runs sampled)
Fastest is (native) "If/Else/ElseIf"

Vanillas "contains" (array) x 99,425,447 ops/sec ±0.47% (93 runs sampled)
Lodash "includes" (array) x 13,401,260 ops/sec ±0.52% (95 runs sampled)
Ramda "contains" (array) x 28,149,739 ops/sec ±0.55% (94 runs sampled)
(native) "Array.includes()" x 60,603,908 ops/sec ±0.33% (95 runs sampled)
Fastest is Vanillas "contains" (array)

Vanillas "contains" (string) x 41,630,627 ops/sec ±0.64% (96 runs sampled)
Lodash "includes" (string) x 31,337,371 ops/sec ±0.48% (95 runs sampled)
Ramda "contains" (string) x 19,481,440 ops/sec ±0.53% (95 runs sampled)
(native) "String.includes()" x 28,250,333 ops/sec ±0.30% (95 runs sampled)
Fastest is Vanillas "contains" (string)

Vanillas "curry" x 34,674,397 ops/sec ±1.63% (91 runs sampled)
Lodash "curry" x 1,016,382 ops/sec ±0.26% (95 runs sampled)
Ramda "curry" x 5,372,690 ops/sec ±0.76% (92 runs sampled)
Fastest is Vanillas "curry"

Executing Vanillas 2-arg curried function x 13,591,326 ops/sec ±0.71% (90 runs sampled)
Executing Lodash 2-arg curried function x 406,869 ops/sec ±0.24% (97 runs sampled)
Executing Ramda 2-arg curried function x 2,624,995 ops/sec ±1.06% (92 runs sampled)
Fastest is Executing Vanillas 2-arg curried function

Executing Vanillas 3-arg curried function x 8,358,702 ops/sec ±0.28% (94 runs sampled)
Executing Lodash 3-arg curried function x 246,981 ops/sec ±1.23% (92 runs sampled)
Executing Ramda 3-arg curried function x 2,024,427 ops/sec ±0.51% (92 runs sampled)
Fastest is Executing Vanillas 3-arg curried function

Executing Vanillas 4-arg curried function x 5,305,332 ops/sec ±0.77% (95 runs sampled)
Executing Lodash 4-arg curried function x 182,784 ops/sec ±0.56% (94 runs sampled)
Executing Ramda 4-arg curried function x 1,678,756 ops/sec ±0.30% (94 runs sampled)
Fastest is Executing Vanillas 4-arg curried function

Executing Vanillas 5+arg curried function x 1,905,548 ops/sec ±2.23% (92 runs sampled)
Executing Lodash 5+arg curried function x 139,364 ops/sec ±0.53% (95 runs sampled)
Executing Ramda 5+arg curried function x 1,221,017 ops/sec ±1.12% (95 runs sampled)
Fastest is Executing Vanillas 5+arg curried function

Vanillas "difference" x 11,380,068 ops/sec ±0.68% (93 runs sampled)
Lodash "difference" x 3,281,923 ops/sec ±1.66% (90 runs sampled)
Ramda "difference" x 4,652,770 ops/sec ±0.63% (91 runs sampled)
Fastest is Vanillas "difference"

Vanillas "difference" (curried) x 9,791,505 ops/sec ±0.33% (93 runs sampled)
Ramda "difference" (curried) x 2,586,242 ops/sec ±0.88% (96 runs sampled)
Fastest is Vanillas "difference" (curried)

Vanillas "each" x 80,344,848 ops/sec ±0.34% (96 runs sampled)
Lodash "each" x 4,575,691 ops/sec ±1.18% (94 runs sampled)
(native) "Array.forEach" x 81,845,217 ops/sec ±1.02% (92 runs sampled)
Fastest is (native) "Array.forEach"

Vanillas "entries" x 9,856,986 ops/sec ±3.23% (87 runs sampled)
Lodash "toPairs" x 5,560,254 ops/sec ±0.48% (89 runs sampled)
Ramda "toPairs" x 5,135,076 ops/sec ±0.57% (93 runs sampled)
(native) "Object.entries( )" x 19,562,007 ops/sec ±4.10% (92 runs sampled)
Fastest is (native) "Object.entries( )"

Vanillas "find" x 10,686,489 ops/sec ±1.43% (94 runs sampled)
Lodash "find" x 5,560,161 ops/sec ±0.97% (91 runs sampled)
Ramda "find" x 3,924,039 ops/sec ±0.55% (92 runs sampled)
(native) "Array.find()" x 10,578,659 ops/sec ±0.84% (93 runs sampled)
Fastest is Vanillas "find"

Vanillas "findIndex" x 10,405,943 ops/sec ±1.12% (92 runs sampled)
Lodash "findIndex" x 8,113,058 ops/sec ±0.41% (95 runs sampled)
Ramda "findIndex" x 3,925,421 ops/sec ±1.01% (92 runs sampled)
(native) "Array.findIndex()" x 11,010,660 ops/sec ±0.41% (95 runs sampled)
Fastest is (native) "Array.findIndex()"

Vanillas "flatten" x 18,401,559 ops/sec ±0.57% (93 runs sampled)
Lodash "flatten" x 13,499,273 ops/sec ±1.21% (93 runs sampled)
Ramda "flatten" x 461,306 ops/sec ±1.54% (93 runs sampled)
Fastest is Vanillas "flatten"

Vanillas "intersection" x 11,648,638 ops/sec ±1.93% (90 runs sampled)
Lodash "intersection" x 3,018,181 ops/sec ±0.39% (95 runs sampled)
Ramda "intersection" x 591,150 ops/sec ±1.27% (91 runs sampled)
Fastest is Vanillas "intersection"

Vanillas "intersection" (curried) x 10,248,658 ops/sec ±0.51% (94 runs sampled)
Ramda "intersection" (curried) x 529,774 ops/sec ±0.35% (92 runs sampled)
Fastest is Vanillas "intersection" (curried)

Vanillas "invert" x 8,023,866 ops/sec ±1.40% (96 runs sampled)
Lodash "invert" x 5,227,090 ops/sec ±0.69% (96 runs sampled)
Ramda "invertObj" x 2,168,291 ops/sec ±0.87% (94 runs sampled)
(native) "Object.keys( ).reduce()" x 377,858 ops/sec ±0.40% (94 runs sampled)
Fastest is Vanillas "invert"

Vanillas "isEmpty" x 93,972,465 ops/sec ±0.48% (92 runs sampled)
Lodash "isEmpty" x 15,004,221 ops/sec ±0.67% (93 runs sampled)
Ramda "isEmpty" x 533,918 ops/sec ±0.60% (95 runs sampled)
Fastest is Vanillas "isEmpty"

Vanillas "isEqual" x 439,008 ops/sec ±1.11% (92 runs sampled)
Lodash "isEqual" x 172,246 ops/sec ±0.48% (95 runs sampled)
Ramda "equals" x 53,240 ops/sec ±0.92% (94 runs sampled)
Fastest is Vanillas "isEqual"

Vanillas (curried) "isEqual" x 431,785 ops/sec ±0.37% (95 runs sampled)
Ramda (curried) "equals" x 52,925 ops/sec ±0.33% (96 runs sampled)
Fastest is Vanillas (curried) "isEqual"

Vanillas "isObject" x 18,797,462 ops/sec ±0.88% (93 runs sampled)
Lodash "isPlainObject" x 2,852,309 ops/sec ±0.41% (96 runs sampled)
Fastest is Vanillas "isObject"

Vanillas "map" x 5,539,577 ops/sec ±2.59% (93 runs sampled)
Lodash "map" x 4,405,002 ops/sec ±0.70% (93 runs sampled)
Ramda "map" x 2,621,134 ops/sec ±0.73% (92 runs sampled)
(native) "Array.map()" x 5,685,349 ops/sec ±2.47% (95 runs sampled)
Fastest is (native) "Array.map()"

Vanillas (curried) "map" x 4,244,999 ops/sec ±0.44% (91 runs sampled)
Ramda (curried) "map" x 1,694,434 ops/sec ±1.24% (96 runs sampled)
Fastest is Vanillas (curried) "map"

Vanillas "mapObject" x 3,403,235 ops/sec ±1.25% (93 runs sampled)
Lodash "mapValues" x 2,345,532 ops/sec ±0.47% (95 runs sampled)
Ramda "map" x 968,075 ops/sec ±1.10% (92 runs sampled)
(native) "Object.keys( ).reduce()" x 358,879 ops/sec ±0.53% (91 runs sampled)
(native) "Object.entries().reduce()" x 353,854 ops/sec ±1.28% (94 runs sampled)
Fastest is Vanillas "mapObject"

Vanillas "mapSpec" x 1,097,350 ops/sec ±0.55% (96 runs sampled)
Ramda "evolve" x 1,093,015 ops/sec ±1.32% (92 runs sampled)
(native) recursive "Object.keys(spec).forEach()" x 1,010,338 ops/sec ±0.74% (93 runs sampled)
Fastest is Vanillas "mapSpec",Ramda "evolve"

Vanillas (curried) "mapSpec" x 1,060,021 ops/sec ±0.48% (94 runs sampled)
Ramda (curried) "evolve" x 844,277 ops/sec ±1.29% (90 runs sampled)
Fastest is Vanillas (curried) "mapSpec"

Vanillas "mapString" x 477,799 ops/sec ±0.73% (91 runs sampled)
(native) "String.split().map().join()" x 324,391 ops/sec ±2.33% (93 runs sampled)
Fastest is Vanillas "mapString"

Vanillas "merge" x 2,438,617 ops/sec ±1.16% (93 runs sampled)
Lodash "merge" x 1,034,258 ops/sec ±0.52% (96 runs sampled)
Ramda "merge" x 936,158 ops/sec ±0.89% (93 runs sampled)
(native) "Object.assign({}, ..)" x 991,152 ops/sec ±0.53% (96 runs sampled)
Fastest is Vanillas "merge"

Vanillas (curried) "merge" x 1,922,118 ops/sec ±2.20% (94 runs sampled)
Ramda (curried) "merge" x 795,311 ops/sec ±0.56% (96 runs sampled)
Fastest is Vanillas (curried) "merge"

Vanillas "omit" x 7,651,549 ops/sec ±1.17% (95 runs sampled)
Lodash "omit" x 720,002 ops/sec ±0.53% (96 runs sampled)
Ramda "omit" x 4,383,426 ops/sec ±0.62% (94 runs sampled)
(native) "Object.keys().filter().reduce()" x 345,053 ops/sec ±1.13% (91 runs sampled)
Fastest is Vanillas "omit"

Vanillas (curried) "omit" x 6,571,468 ops/sec ±0.45% (95 runs sampled)
Ramda (curried) "omit" x 2,378,330 ops/sec ±1.08% (93 runs sampled)
Fastest is Vanillas (curried) "omit"

Vanillas "pick" x 10,854,067 ops/sec ±1.02% (94 runs sampled)
Lodash "pick" x 1,086,466 ops/sec ±1.08% (95 runs sampled)
Ramda "pick" x 6,043,423 ops/sec ±0.64% (92 runs sampled)
(native) "Array.prototype.reduce" x 536,209 ops/sec ±0.45% (94 runs sampled)
Fastest is Vanillas "pick"

Vanillas (curried) "pick" x 8,623,104 ops/sec ±1.08% (90 runs sampled)
Ramda (curried) "pick" x 3,074,849 ops/sec ±0.46% (94 runs sampled)
Fastest is Vanillas (curried) "pick"

Vanillas "pipe" x 12,748,710 ops/sec ±3.03% (90 runs sampled)
Ramda "pipe" x 1,084,145 ops/sec ±0.45% (94 runs sampled)
Fastest is Vanillas "pipe"

Vanillas "propAt" x 33,420,677 ops/sec ±0.35% (96 runs sampled)
Lodash "get" x 21,549,863 ops/sec ±0.41% (96 runs sampled)
Ramda "path" x 14,216,466 ops/sec ±0.70% (93 runs sampled)
(native) "&& until you find it" x 108,337,402 ops/sec ±0.48% (95 runs sampled)
Fastest is (native) "&& until you find it"

Vanillas (curried) "propAt" x 19,411,981 ops/sec ±0.47% (92 runs sampled)
Ramda (curried) "path" x 4,179,784 ops/sec ±0.61% (89 runs sampled)
Fastest is Vanillas (curried) "propAt"

Vanillas "propEquals" x 30,127,341 ops/sec ±0.67% (97 runs sampled)
Ramda "pathEq" x 5,072,543 ops/sec ±0.54% (95 runs sampled)
(native) "&& until you find it" x 96,499,533 ops/sec ±0.54% (96 runs sampled)
Fastest is (native) "&& until you find it"

Vanillas (curried) "propEquals" x 8,733,700 ops/sec ±0.43% (91 runs sampled)
Ramda (curried) "pathEq" x 2,588,726 ops/sec ±0.34% (89 runs sampled)
Fastest is Vanillas (curried) "propEquals"

Vanillas "reduce" x 387,137 ops/sec ±1.51% (90 runs sampled)
Lodash "reduce" x 390,105 ops/sec ±0.45% (93 runs sampled)
Ramda "reduce" x 341,994 ops/sec ±1.28% (93 runs sampled)
(native) "Array.reduce" x 394,858 ops/sec ±0.47% (94 runs sampled)
Fastest is (native) "Array.reduce"

Vanillas (curried) "reduce" x 374,917 ops/sec ±1.16% (94 runs sampled)
Ramda (curried) "reduce" x 323,601 ops/sec ±0.52% (96 runs sampled)
Fastest is Vanillas (curried) "reduce"

Vanillas "size" x 105,429,165 ops/sec ±0.54% (93 runs sampled)
Lodash "size" x 14,838,973 ops/sec ±0.70% (92 runs sampled)
Ramda "length" x 7,159,838 ops/sec ±0.73% (95 runs sampled)
Fastest is Vanillas "size"

Vanillas "size" x 40,813,248 ops/sec ±1.89% (94 runs sampled)
Lodash "size" x 9,294,186 ops/sec ±1.05% (91 runs sampled)
Fastest is Vanillas "size"

Vanillas "size" x 99,327,719 ops/sec ±1.01% (85 runs sampled)
Lodash "size" x 31,568,724 ops/sec ±1.11% (89 runs sampled)
Ramda "length" x 7,124,656 ops/sec ±0.99% (91 runs sampled)
Fastest is Vanillas "size"

Vanillas "uniq" (list of nums) x 11,905,931 ops/sec ±0.81% (89 runs sampled)
Lodash "uniq" (list of nums) x 10,772,816 ops/sec ±1.14% (92 runs sampled)
Ramda "uniq" (list of nums) x 324,727 ops/sec ±1.10% (89 runs sampled)
Fastest is Vanillas "uniq" (list of nums)

Vanillas "uniq" (list of strings) x 5,518,906 ops/sec ±0.97% (92 runs sampled)
Lodash "uniq" (list of strings) x 4,512,854 ops/sec ±1.32% (93 runs sampled)
Ramda "uniq" (list of strings) x 423,423 ops/sec ±1.24% (92 runs sampled)
Fastest is Vanillas "uniq" (list of strings)

Vanillas "uniqBy" (top-level prop) x 4,650,161 ops/sec ±1.84% (90 runs sampled)
Lodash "uniqBy" (top-level prop) x 2,831,141 ops/sec ±0.80% (90 runs sampled)
Ramda "uniqBy" (top-level prop) x 476,499 ops/sec ±0.99% (93 runs sampled)
Fastest is Vanillas "uniqBy" (top-level prop)

Vanillas "uniqBy" (nested prop) x 972,507 ops/sec ±0.72% (94 runs sampled)
Lodash "uniqBy" (nested prop) x 535,923 ops/sec ±0.80% (95 runs sampled)
Ramda "uniqBy" (nested prop) x 538,715 ops/sec ±0.52% (91 runs sampled)
Fastest is Vanillas "uniqBy" (nested prop)

Joi "validate" x 179,304 ops/sec ±1.22% (94 runs sampled)
Yup "validate" x 10,269 ops/sec ±0.42% (92 runs sampled)
Spected "validate" x 94,189 ops/sec ±0.70% (93 runs sampled)
Vanillas "validate" x 247,531 ops/sec ±1.21% (93 runs sampled)
Fastest is Vanillas "validate"

Vanillas "omit" x 23,189,809 ops/sec ±1.70% (96 runs sampled)
Lodash "omit" x 8,206,938 ops/sec ±0.92% (92 runs sampled)
Ramda "omit" x 2,375,683 ops/sec ±0.62% (96 runs sampled)
(native) "Object.keys().filter().reduce() (native) x 28,556,588 ops/sec ±2.62% (94 runs sampled)
Fastest is (native) "Object.keys().filter().reduce() (native)

```
