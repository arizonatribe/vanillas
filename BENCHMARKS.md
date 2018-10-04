```
Futilities "any" x 10,161,117 ops/sec ±0.64% (93 runs sampled),
Lodash "some" x 9,837,811 ops/sec ±0.33% (93 runs sampled),
Ramda "any" x 3,974,278 ops/sec ±0.84% (92 runs sampled),
(native) "Array.some()" x 10,528,253 ops/sec ±0.35% (92 runs sampled),
Fastest is (native) "Array.some()"

Futilities "assign" x 3,712,097 ops/sec ±1.11% (95 runs sampled),
(native) "Object.assign()" x 597,970 ops/sec ±0.73% (96 runs sampled),
Fastest is Futilities "assign"

Futilities "clone" x 7,020,858 ops/sec ±0.71% (94 runs sampled),
Lodash "clone" x 1,621,753 ops/sec ±0.82% (96 runs sampled),
Ramda "clone" x 847,569 ops/sec ±0.59% (95 runs sampled),
(native) "clone by destructuring" x 2,256,049 ops/sec ±0.31% (95 runs sampled),
(native) "Object.assign({}, ..)" x 1,933,056 ops/sec ±0.54% (94 runs sampled),
Fastest is Futilities "clone"

Futilities "clone" x 1,194,254 ops/sec ±1.06% (95 runs sampled),
Lodash "cloneDeep" x 297,997 ops/sec ±0.35% (92 runs sampled),
Ramda "clone" x 272,445 ops/sec ±0.91% (95 runs sampled),
(native) "clone by destructuring" x 350,368 ops/sec ±0.41% (97 runs sampled),
Fastest is Futilities "clone"

Futilities "compose" x 12,253,422 ops/sec ±0.90% (94 runs sampled),
Redux "compose" x 7,450,920 ops/sec ±0.81% (94 runs sampled),
Ramda "compose" x 776,301 ops/sec ±0.58% (95 runs sampled),
Fastest is Futilities "compose"

Futilities "concat" x 30,980,844 ops/sec ±2.89% (95 runs sampled),
Lodash "concat" x 2,926,089 ops/sec ±0.53% (95 runs sampled),
Ramda "concat" x 5,544,031 ops/sec ±1.18% (98 runs sampled),
(native) "[ ...val1, ...val2 ]" x 6,977,559 ops/sec ±0.70% (95 runs sampled),
Fastest is Futilities "concat"

Futilities "each" x 76,002,414 ops/sec ±0.57% (91 runs sampled),
Lodash "each" x 4,862,889 ops/sec ±0.52% (97 runs sampled),
(native) "Array.forEach" x 74,828,764 ops/sec ±0.59% (91 runs sampled),
Fastest is Futilities "each"

Futilities "entries" x 10,722,317 ops/sec ±3.47% (93 runs sampled),
Lodash "toPairs" x 5,549,703 ops/sec ±0.37% (93 runs sampled),
Ramda "toPairs" x 5,002,804 ops/sec ±0.67% (95 runs sampled),
(native) "Object.entries( )" x 20,038,327 ops/sec ±4.21% (94 runs sampled),
Fastest is (native) "Object.entries( )"

Futilities "find" x 9,931,554 ops/sec ±1.09% (93 runs sampled),
Lodash "find" x 5,244,453 ops/sec ±0.63% (93 runs sampled),
Ramda "find" x 3,797,007 ops/sec ±0.64% (90 runs sampled),
(native) "Array.find()" x 10,342,403 ops/sec ±0.57% (97 runs sampled),
Fastest is (native) "Array.find()"

Futilities "findIndex" x 10,120,940 ops/sec ±1.18% (93 runs sampled),
Lodash "findIndex" x 7,855,744 ops/sec ±0.33% (96 runs sampled),
Ramda "findIndex" x 3,733,924 ops/sec ±1.14% (93 runs sampled),
(native) "Array.findIndex()" x 10,476,886 ops/sec ±0.29% (96 runs sampled),
Fastest is (native) "Array.findIndex()"

Futilities "isEmpty" x 87,150,473 ops/sec ±0.46% (97 runs sampled),
Lodash "isEmpty" x 14,123,452 ops/sec ±0.48% (96 runs sampled),
Ramda "isEmpty" x 545,047 ops/sec ±0.63% (94 runs sampled),
Fastest is Futilities "isEmpty"

Futilities "map" x 5,549,143 ops/sec ±3.57% (91 runs sampled),
Lodash "map" x 4,455,941 ops/sec ±0.31% (97 runs sampled),
Ramda "map" x 2,612,857 ops/sec ±1.59% (93 runs sampled),
(native) "Array.map()" x 5,713,203 ops/sec ±0.35% (96 runs sampled),
Fastest is (native) "Array.map()"

Futilities "mapObject" x 3,446,416 ops/sec ±1.85% (95 runs sampled),
Lodash "mapValues" x 2,359,645 ops/sec ±0.26% (97 runs sampled),
Ramda "map" x 1,004,375 ops/sec ±0.73% (93 runs sampled),
(native) "Object.keys( ).reduce()" x 363,171 ops/sec ±1.09% (95 runs sampled),
(native) "Object.entries().reduce()" x 367,433 ops/sec ±0.32% (97 runs sampled),
Fastest is Futilities "mapObject"

Futilities "map" x 480,449 ops/sec ±1.09% (92 runs sampled),
(native) "String.split().map().join()" x 334,788 ops/sec ±0.36% (96 runs sampled),
Fastest is Futilities "map"

Futilities "merge" x 3,222,797 ops/sec ±0.82% (89 runs sampled)
Lodash "merge" x 3,024,125 ops/sec ±0.80% (93 runs sampled)
Ramda "merge" x 778,630 ops/sec ±1.20% (94 runs sampled)
(native) "Object.assign({}, ..)" x 811,217 ops/sec ±1.00% (96 runs sampled)
Fastest is Futilities "merge"

Futilities "omit" x 8,206,574 ops/sec ±1.19% (92 runs sampled),
Lodash "omit" x 583,664 ops/sec ±1.25% (94 runs sampled),
Ramda "omit" x 4,882,747 ops/sec ±0.62% (91 runs sampled),
(native) "Object.keys().filter().reduce() 
(native) x 240,332 ops/sec ±0.59% (95 runs sampled),
Fastest is Futilities "omit"

Futilities "pick" x 9,887,745 ops/sec ±1.28% (94 runs sampled),
Lodash "pick" x 1,112,719 ops/sec ±0.28% (97 runs sampled),
Ramda "pick" x 6,414,047 ops/sec ±1.00% (94 runs sampled),
(native) "Array.prototype.reduce" x 542,867 ops/sec ±0.47% (95 runs sampled),
Fastest is Futilities "pick"

Futilities "pipe" x 20,938,754 ops/sec ±1.04% (96 runs sampled),
Ramda "pipe" x 13,398,883 ops/sec ±0.34% (96 runs sampled),
Fastest is Futilities "pipe"

Futilities "propAt" x 31,739,470 ops/sec ±0.52% (95 runs sampled),
Lodash "get" x 22,273,535 ops/sec ±0.50% (96 runs sampled),
Ramda "path" x 14,484,803 ops/sec ±0.50% (92 runs sampled),
(native) "&& until you find it" x 77,961,751 ops/sec ±0.44% (92 runs sampled),
Fastest is (native) "&& until you find it"

Futilities "reduce" x 396,431 ops/sec ±1.02% (95 runs sampled),
Lodash "reduce" x 393,294 ops/sec ±0.43% (94 runs sampled),
Ramda "reduce" x 354,290 ops/sec ±1.22% (93 runs sampled),
(native) "Array.reduce" x 400,369 ops/sec ±0.44% (94 runs sampled),
Fastest is (native) "Array.reduce",Futilities "reduce"

Futilities "size" x 95,129,704 ops/sec ±0.50% (94 runs sampled),
Lodash "size" x 13,932,927 ops/sec ±0.43% (97 runs sampled),
Ramda "length" x 6,959,251 ops/sec ±0.65% (95 runs sampled),
Fastest is Futilities "size"

Futilities "size" x 39,473,162 ops/sec ±1.90% (94 runs sampled),
Lodash "size" x 11,861,828 ops/sec ±0.28% (96 runs sampled),
Fastest is Futilities "size"

Futilities "size" x 88,136,229 ops/sec ±0.41% (94 runs sampled),
Lodash "size" x 8,272,321 ops/sec ±0.37% (97 runs sampled),
Ramda "length" x 7,363,320 ops/sec ±0.72% (95 runs sampled),
Fastest is Futilities "size"
```
