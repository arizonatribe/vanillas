```
Futilities "any" x 9,654,489 ops/sec ±0.83% (86 runs sampled)
Lodash "some" x 8,742,842 ops/sec ±1.07% (89 runs sampled)
Ramda "any" x 3,497,293 ops/sec ±1.53% (89 runs sampled)
(native) "Array.some()" x 9,801,633 ops/sec ±2.00% (90 runs sampled)
Fastest is (native) "Array.some()"

Futilities "assign" x 3,490,040 ops/sec ±0.48% (91 runs sampled)
(native) "Object.assign()" x 600,103 ops/sec ±0.80% (90 runs sampled)
Fastest is Futilities "assign"

Futilities "clone" x 6,396,225 ops/sec ±0.63% (93 runs sampled)
Lodash "clone" x 1,576,525 ops/sec ±0.75% (92 runs sampled)
Ramda "clone" x 814,888 ops/sec ±0.50% (92 runs sampled)
(native) "clone by destructuring" x 2,128,693 ops/sec ±0.43% (96 runs sampled)
(native) "Object.assign({}, ..)" x 1,926,228 ops/sec ±0.93% (91 runs sampled)
Fastest is Futilities "clone"

Futilities "clone" x 1,153,816 ops/sec ±0.53% (95 runs sampled)
Lodash "cloneDeep" x 286,435 ops/sec ±0.52% (96 runs sampled)
Ramda "clone" x 261,734 ops/sec ±0.83% (93 runs sampled)
(native) "clone by destructuring" x 336,158 ops/sec ±0.50% (95 runs sampled)
Fastest is Futilities "clone"

Futilities "compose" x 11,693,068 ops/sec ±2.21% (93 runs sampled)
Redux "compose" x 7,213,446 ops/sec ±0.35% (94 runs sampled)
Ramda "compose" x 759,282 ops/sec ±0.49% (93 runs sampled)
Fastest is Futilities "compose"

Futilities "concat" x 30,797,580 ops/sec ±0.40% (94 runs sampled)
Lodash "concat" x 2,821,031 ops/sec ±0.51% (91 runs sampled)
Ramda "concat" x 6,303,379 ops/sec ±1.29% (93 runs sampled)
(native) "Array.concat()" x 6,484,493 ops/sec ±1.01% (89 runs sampled)
(native) "[ ...val1, ...val2 ]" x 6,214,862 ops/sec ±2.15% (85 runs sampled)
Fastest is Futilities "concat"

Executing Futilities curried function x 2,026,040 ops/sec ±2.26% (93 runs sampled)
Executing Lodash curried function x 259,720 ops/sec ±0.36% (96 runs sampled)
Executing Ramda curried function x 1,967,305 ops/sec ±0.92% (94 runs sampled)
Fastest is Executing Futilities curried function

Futilities "each" x 72,267,857 ops/sec ±0.70% (92 runs sampled)
Lodash "each" x 4,579,929 ops/sec ±0.70% (87 runs sampled)
(native) "Array.forEach" x 70,762,089 ops/sec ±0.63% (94 runs sampled)
Fastest is Futilities "each"

Futilities "entries" x 10,652,626 ops/sec ±0.43% (96 runs sampled)
Lodash "toPairs" x 5,360,516 ops/sec ±0.39% (94 runs sampled)
Ramda "toPairs" x 4,736,914 ops/sec ±2.39% (94 runs sampled)
(native) "Object.entries( )" x 20,092,159 ops/sec ±0.42% (93 runs sampled)
Fastest is (native) "Object.entries( )"

Futilities "find" x 9,754,899 ops/sec ±0.74% (92 runs sampled)
Lodash "find" x 6,287,737 ops/sec ±0.41% (95 runs sampled)
Ramda "find" x 3,597,226 ops/sec ±0.76% (94 runs sampled)
(native) "Array.find()" x 9,908,906 ops/sec ±0.37% (95 runs sampled)
Fastest is (native) "Array.find()"

Futilities "findIndex" x 9,933,882 ops/sec ±0.49% (94 runs sampled)
Lodash "findIndex" x 7,413,689 ops/sec ±0.86% (93 runs sampled)
Ramda "findIndex" x 3,687,513 ops/sec ±0.36% (92 runs sampled)
(native) "Array.findIndex()" x 10,077,179 ops/sec ±0.68% (93 runs sampled)
Fastest is (native) "Array.findIndex()"

Futilities "isEmpty" x 83,870,953 ops/sec ±0.63% (94 runs sampled)
Lodash "isEmpty" x 15,768,779 ops/sec ±0.64% (91 runs sampled)
Ramda "isEmpty" x 539,066 ops/sec ±0.86% (94 runs sampled)
Fastest is Futilities "isEmpty"

Futilities "isEqual" x 567,478 ops/sec ±0.43% (94 runs sampled)
Lodash "isEqual" x 187,153 ops/sec ±1.28% (92 runs sampled)
Ramda "equals" x 58,490 ops/sec ±0.35% (95 runs sampled)
Fastest is Futilities "isEqual"

Futilities "isObject" x 18,168,914 ops/sec ±0.82% (91 runs sampled)
Lodash "isPlainObject" x 2,763,747 ops/sec ±0.51% (93 runs sampled)
Fastest is Futilities "isObject"

Futilities "map" x 5,596,225 ops/sec ±0.40% (93 runs sampled)
Lodash "map" x 4,239,751 ops/sec ±1.57% (91 runs sampled)
Ramda "map" x 2,561,048 ops/sec ±0.42% (95 runs sampled)
(native) "Array.map()" x 5,526,590 ops/sec ±1.78% (90 runs sampled)
Fastest is Futilities "map",(native) "Array.map()"

Futilities "mapObject" x 3,331,982 ops/sec ±0.47% (95 runs sampled)
Lodash "mapValues" x 2,256,176 ops/sec ±0.55% (92 runs sampled)
Ramda "map" x 938,972 ops/sec ±0.90% (95 runs sampled)
(native) "Object.keys( ).reduce()" x 349,992 ops/sec ±0.51% (96 runs sampled)
(native) "Object.entries().reduce()" x 344,129 ops/sec ±1.31% (92 runs sampled)
Fastest is Futilities "mapObject"

Futilities "mapSpec" x 1,034,817 ops/sec ±0.49% (95 runs sampled)
Ramda "evolve" x 1,082,014 ops/sec ±1.29% (93 runs sampled)
Fastest is Ramda "evolve"

Futilities "mapString" x 460,976 ops/sec ±0.51% (94 runs sampled)
(native) "String.split().map().join()" x 319,169 ops/sec ±2.27% (92 runs sampled)
Fastest is Futilities "mapString"

Futilities "merge" x 3,208,330 ops/sec ±0.75% (93 runs sampled)
Lodash "merge" x 2,906,666 ops/sec ±0.48% (92 runs sampled)
Ramda "merge" x 736,665 ops/sec ±0.72% (93 runs sampled)
(native) "Object.assign({}, ..)" x 757,582 ops/sec ±0.76% (92 runs sampled)
Fastest is Futilities "merge"

Futilities "omit" x 8,559,688 ops/sec ±0.90% (93 runs sampled)
Lodash "omit" x 566,407 ops/sec ±0.50% (93 runs sampled)
Ramda "omit" x 4,529,306 ops/sec ±0.61% (96 runs sampled)
(native) "Object.keys().filter().reduce() (native) x 230,409 ops/sec ±1.04% (93 runs sampled)
Fastest is Futilities "omit"

Futilities "pick" x 9,892,323 ops/sec ±0.63% (92 runs sampled)
Lodash "pick" x 1,050,789 ops/sec ±1.21% (92 runs sampled)
Ramda "pick" x 6,366,504 ops/sec ±0.56% (96 runs sampled)
(native) "Array.prototype.reduce" x 514,070 ops/sec ±0.94% (94 runs sampled)
Fastest is Futilities "pick"

Futilities "pipe" x 19,739,729 ops/sec ±0.43% (96 runs sampled)
Ramda "pipe" x 12,820,245 ops/sec ±0.54% (91 runs sampled)
Fastest is Futilities "pipe"

Futilities "propAt" x 27,395,944 ops/sec ±1.57% (83 runs sampled)
Lodash "get" x 19,425,895 ops/sec ±0.57% (91 runs sampled)
Ramda "path" x 13,441,720 ops/sec ±0.44% (93 runs sampled)
(native) "&& until you find it" x 76,207,320 ops/sec ±0.64% (94 runs sampled)
Fastest is (native) "&& until you find it"

Futilities "propEquals" x 24,885,633 ops/sec ±1.75% (85 runs sampled)
Ramda "pathEq" x 5,089,509 ops/sec ±0.53% (94 runs sampled)
(native) "&& until you find it" x 67,225,421 ops/sec ±0.45% (91 runs sampled)
Fastest is (native) "&& until you find it"

Futilities "reduce" x 358,468 ops/sec ±0.55% (92 runs sampled)
Lodash "reduce" x 375,003 ops/sec ±1.09% (91 runs sampled)
Ramda "reduce" x 346,397 ops/sec ±0.50% (94 runs sampled)
(native) "Array.reduce" x 384,788 ops/sec ±1.05% (92 runs sampled)
Fastest is (native) "Array.reduce"

Futilities "size" x 91,534,999 ops/sec ±0.58% (93 runs sampled)
Lodash "size" x 15,042,315 ops/sec ±0.49% (93 runs sampled)
Ramda "length" x 6,732,059 ops/sec ±0.70% (93 runs sampled)
Fastest is Futilities "size"

Futilities "size" x 38,746,049 ops/sec ±0.37% (93 runs sampled)
Lodash "size" x 11,398,215 ops/sec ±0.61% (94 runs sampled)
Fastest is Futilities "size"

Futilities "size" x 85,802,529 ops/sec ±0.44% (95 runs sampled)
Lodash "size" x 8,243,595 ops/sec ±0.56% (94 runs sampled)
Ramda "length" x 6,913,292 ops/sec ±0.88% (93 runs sampled)
Fastest is Futilities "size"

```
