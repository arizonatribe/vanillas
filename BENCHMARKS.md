```
Futilities "any" x 8,637,377 ops/sec ±0.19% (94 runs sampled)
Lodash "some" x 8,617,839 ops/sec ±0.71% (94 runs sampled)
Ramda "any" x 3,388,501 ops/sec ±0.15% (96 runs sampled)
(native) "Array.some()" x 8,676,745 ops/sec ±0.63% (95 runs sampled)
Fastest is (native) "Array.some()"

Futilities "assign" x 2,980,567 ops/sec ±0.18% (96 runs sampled)
(native) "Object.assign()" x 3,654,731 ops/sec ±0.17% (95 runs sampled)
Fastest is (native) "Object.assign()"

Futilities "clone" x 5,409,081 ops/sec ±0.09% (98 runs sampled)
Lodash "clone" x 1,380,186 ops/sec ±0.78% (95 runs sampled)
Ramda "clone" x 708,505 ops/sec ±0.09% (96 runs sampled)
(native) "clone by destructuring" x 1,853,707 ops/sec ±0.99% (91 runs sampled)
(native) "Object.assign({}, ..)" x 9,108,434 ops/sec ±0.53% (96 runs sampled)
Fastest is (native) "Object.assign({}, ..)"

Futilities "clone" x 953,069 ops/sec ±1.25% (94 runs sampled)
Lodash "cloneDeep" x 255,395 ops/sec ±0.06% (98 runs sampled)
Ramda "clone" x 229,909 ops/sec ±0.17% (97 runs sampled)
(native) "clone by destructuring" x 304,042 ops/sec ±0.99% (96 runs sampled)
Fastest is Futilities "clone"

Futilities "compose" x 9,504,171 ops/sec ±0.26% (98 runs sampled)
Redux "compose" x 6,413,200 ops/sec ±0.90% (92 runs sampled)
Ramda "compose" x 664,887 ops/sec ±0.10% (96 runs sampled)
Fastest is Futilities "compose"

Futilities "concat" x 20,686,699 ops/sec ±2.30% (95 runs sampled)
Lodash "concat" x 2,500,454 ops/sec ±0.15% (97 runs sampled)
Ramda "concat" x 4,381,908 ops/sec ±0.09% (94 runs sampled)
(native) "[ ...val1, ...val2 ]" x 5,448,496 ops/sec ±1.19% (95 runs sampled)
Fastest is Futilities "concat"

Futilities "each" x 55,767,822 ops/sec ±0.05% (94 runs sampled)
Lodash "each" x 4,274,031 ops/sec ±0.52% (97 runs sampled)
(native) "Array.forEach" x 54,793,811 ops/sec ±0.14% (97 runs sampled)
Fastest is Futilities "each"

Futilities "entries" x 9,414,423 ops/sec ±0.72% (94 runs sampled)
Lodash "toPairs" x 4,628,961 ops/sec ±0.28% (94 runs sampled)
Ramda "toPairs" x 3,875,343 ops/sec ±2.23% (95 runs sampled)
(native) "Object.entries( )" x 13,985,146 ops/sec ±0.32% (92 runs sampled)
Fastest is (native) "Object.entries( )"

Futilities "find" x 8,577,937 ops/sec ±0.83% (96 runs sampled)
Lodash "find" x 4,606,363 ops/sec ±0.15% (95 runs sampled)
Ramda "find" x 3,129,855 ops/sec ±0.88% (94 runs sampled)
(native) "Array.find()" x 8,605,096 ops/sec ±0.13% (93 runs sampled)
Fastest is (native) "Array.find()"

Futilities "findIndex" x 8,471,957 ops/sec ±0.29% (94 runs sampled)
Lodash "findIndex" x 6,294,572 ops/sec ±0.71% (93 runs sampled)
Ramda "findIndex" x 3,084,456 ops/sec ±0.31% (95 runs sampled)
(native) "Array.findIndex()" x 7,994,334 ops/sec ±0.35% (97 runs sampled)
Fastest is Futilities "findIndex"

Futilities "isEmpty" x 43,749,083 ops/sec ±0.77% (95 runs sampled)
Lodash "isEmpty" x 10,916,299 ops/sec ±0.50% (95 runs sampled)
Ramda "isEmpty" x 443,174 ops/sec ±0.20% (97 runs sampled)
Fastest is Futilities "isEmpty"

Futilities "isEqual" x 488,662 ops/sec ±0.53% (94 runs sampled)
Lodash "isEqual" x 173,650 ops/sec ±0.12% (95 runs sampled)
Ramda "equals" x 50,952 ops/sec ±0.13% (92 runs sampled)
Fastest is Futilities "isEqual"

Futilities "isObject" x 14,867,530 ops/sec ±0.15% (98 runs sampled)
Lodash "isPlainObject" x 2,596,792 ops/sec ±0.79% (98 runs sampled)
Fastest is Futilities "isObject"

Futilities "map" x 5,205,589 ops/sec ±0.44% (94 runs sampled)
Lodash "map" x 3,923,372 ops/sec ±1.62% (96 runs sampled)
Ramda "map" x 2,332,606 ops/sec ±0.09% (95 runs sampled)
(native) "Array.map()" x 5,404,522 ops/sec ±0.12% (97 runs sampled)
Fastest is (native) "Array.map()"

Futilities "mapObject" x 2,859,967 ops/sec ±1.39% (97 runs sampled)
Lodash "mapValues" x 1,956,795 ops/sec ±0.14% (98 runs sampled)
Ramda "map" x 832,729 ops/sec ±1.11% (92 runs sampled)
(native) "Object.keys( ).reduce()" x 319,377 ops/sec ±0.16% (97 runs sampled)
(native) "Object.entries().reduce()" x 313,205 ops/sec ±1.07% (97 runs sampled)
Fastest is Futilities "mapObject"

Futilities "map" x 428,119 ops/sec ±0.21% (93 runs sampled)
(native) "String.split().map().join()" x 295,052 ops/sec ±0.12% (97 runs sampled)
Fastest is Futilities "map"

Futilities "merge" x 2,233,517 ops/sec ±1.18% (95 runs sampled)
Lodash "merge" x 2,661,554 ops/sec ±0.11% (97 runs sampled)
Ramda "merge" x 3,639,358 ops/sec ±1.33% (95 runs sampled)
(native) "Object.assign({}, ..)" x 4,294,452 ops/sec ±0.24% (98 runs sampled)
Fastest is (native) "Object.assign({}, ..)"

Futilities "omit" x 7,306,535 ops/sec ±0.77% (96 runs sampled)
Lodash "omit" x 491,970 ops/sec ±1.12% (92 runs sampled)
Ramda "omit" x 3,934,179 ops/sec ±0.16% (98 runs sampled)
(native) "Object.keys().filter().reduce() (native) x 205,679 ops/sec ±0.99% (96 runs sampled)
Fastest is Futilities "omit"

Futilities "pick" x 8,413,898 ops/sec ±0.30% (96 runs sampled)
Lodash "pick" x 931,260 ops/sec ±0.90% (94 runs sampled)
Ramda "pick" x 5,263,905 ops/sec ±0.16% (95 runs sampled)
(native) "Array.prototype.reduce" x 465,974 ops/sec ±0.08% (95 runs sampled)
Fastest is Futilities "pick"

Futilities "pipe" x 14,568,588 ops/sec ±1.57% (90 runs sampled)
Ramda "pipe" x 9,875,220 ops/sec ±0.57% (96 runs sampled)
Fastest is Futilities "pipe"

Futilities "propAt" x 25,487,762 ops/sec ±0.07% (99 runs sampled)
Lodash "get" x 17,753,446 ops/sec ±0.41% (99 runs sampled)
Ramda "path" x 11,088,132 ops/sec ±0.24% (95 runs sampled)
(native) "&& until you find it" x 68,432,435 ops/sec ±0.08% (97 runs sampled)
Fastest is (native) "&& until you find it"

Futilities "reduce" x 345,796 ops/sec ±0.98% (94 runs sampled)
Lodash "reduce" x 339,650 ops/sec ±0.10% (99 runs sampled)
Ramda "reduce" x 309,438 ops/sec ±0.11% (98 runs sampled)
(native) "Array.reduce" x 348,630 ops/sec ±0.26% (96 runs sampled)
Fastest is (native) "Array.reduce"

Futilities "size" x 46,663,084 ops/sec ±1.07% (94 runs sampled)
Lodash "size" x 12,088,492 ops/sec ±0.18% (97 runs sampled)
Ramda "length" x 5,768,310 ops/sec ±0.72% (95 runs sampled)
Fastest is Futilities "size"

Futilities "size" x 31,741,461 ops/sec ±0.20% (97 runs sampled)
Lodash "size" x 10,089,401 ops/sec ±0.36% (95 runs sampled)
Fastest is Futilities "size"

Futilities "size" x 63,282,742 ops/sec ±0.04% (97 runs sampled)
Lodash "size" x 6,458,257 ops/sec ±0.05% (96 runs sampled)
Ramda "length" x 6,102,982 ops/sec ±0.68% (93 runs sampled)
Fastest is Futilities "size"

```