```
Vanillas "any" x 10,305,846 ops/sec ±1.16% (91 runs sampled)
Lodash "some" x 9,225,137 ops/sec ±1.30% (92 runs sampled)
Ramda "any" x 3,856,389 ops/sec ±1.29% (90 runs sampled)
(native) "Array.some()" x 10,247,148 ops/sec ±1.07% (92 runs sampled)
Fastest is Vanillas "any",(native) "Array.some()"

Vanillas "assign" x 3,466,449 ops/sec ±1.35% (90 runs sampled)
(native) "Object.assign()" x 626,053 ops/sec ±1.32% (87 runs sampled)
Fastest is Vanillas "assign"

Vanillas "clone" x 7,068,700 ops/sec ±0.59% (96 runs sampled)
Lodash "clone" x 1,582,436 ops/sec ±0.72% (95 runs sampled)
Ramda "clone" x 819,560 ops/sec ±0.59% (89 runs sampled)
(native) "clone by destructuring" x 2,087,282 ops/sec ±1.36% (93 runs sampled)
(native) "Object.assign({}, ..)" x 1,819,992 ops/sec ±1.06% (92 runs sampled)
Fastest is Vanillas "clone"

Vanillas "clone" x 890,356 ops/sec ±2.34% (84 runs sampled)
Lodash "cloneDeep" x 261,544 ops/sec ±2.54% (86 runs sampled)
Ramda "clone" x 249,382 ops/sec ±1.94% (89 runs sampled)
(native) "clone by destructuring" x 322,225 ops/sec ±1.72% (90 runs sampled)
Fastest is Vanillas "clone"

Vanillas "compose" x 11,228,542 ops/sec ±2.52% (86 runs sampled)
Redux "compose" x 6,029,362 ops/sec ±5.07% (78 runs sampled)
Ramda "compose" x 686,295 ops/sec ±2.28% (84 runs sampled)
Fastest is Vanillas "compose"

Vanillas "concat" x 29,031,374 ops/sec ±4.03% (78 runs sampled)
Lodash "concat" x 2,726,020 ops/sec ±2.66% (89 runs sampled)
Ramda "concat" x 5,162,453 ops/sec ±1.92% (89 runs sampled)
(native) "Array.concat()" x 5,880,441 ops/sec ±2.44% (79 runs sampled)
(native) "[ ...val1, ...val2 ]" x 6,050,087 ops/sec ±2.76% (83 runs sampled)
Fastest is Vanillas "concat"

Vanillas "curry" x 26,737,208 ops/sec ±2.44% (92 runs sampled)
Lodash "curry" x 935,357 ops/sec ±3.30% (89 runs sampled)
Ramda "curry" x 5,053,444 ops/sec ±1.67% (88 runs sampled)
Fastest is Vanillas "curry"

Executing Vanillas 2-arg curried function x 12,550,785 ops/sec ±1.96% (90 runs sampled)
Executing Lodash 2-arg curried function x 381,163 ops/sec ±2.36% (90 runs sampled)
Executing Ramda 2-arg curried function x 2,176,231 ops/sec ±4.59% (81 runs sampled)
Fastest is Executing Vanillas 2-arg curried function

Executing Vanillas 3-arg curried function x 7,561,112 ops/sec ±3.66% (86 runs sampled)
Executing Lodash 3-arg curried function x 241,204 ops/sec ±1.61% (93 runs sampled)
Executing Ramda 3-arg curried function x 1,984,088 ops/sec ±0.93% (94 runs sampled)
Fastest is Executing Vanillas 3-arg curried function

Executing Vanillas 4-arg curried function x 5,521,547 ops/sec ±0.79% (93 runs sampled)
Executing Lodash 4-arg curried function x 174,862 ops/sec ±0.25% (97 runs sampled)
Executing Ramda 4-arg curried function x 1,667,318 ops/sec ±0.24% (93 runs sampled)
Fastest is Executing Vanillas 4-arg curried function

Executing Vanillas 5+arg curried function x 1,904,903 ops/sec ±2.21% (94 runs sampled)
Executing Lodash 5+arg curried function x 130,044 ops/sec ±1.19% (96 runs sampled)
Executing Ramda 5+arg curried function x 1,153,478 ops/sec ±2.22% (91 runs sampled)
Fastest is Executing Vanillas 5+arg curried function

Vanillas "each" x 65,235,227 ops/sec ±1.60% (80 runs sampled)
Lodash "each" x 4,172,660 ops/sec ±2.25% (85 runs sampled)
(native) "Array.forEach" x 68,580,926 ops/sec ±1.01% (88 runs sampled)
Fastest is (native) "Array.forEach"

Vanillas "entries" x 8,854,220 ops/sec ±4.51% (78 runs sampled)
Lodash "toPairs" x 4,952,687 ops/sec ±3.66% (80 runs sampled)
Ramda "toPairs" x 4,674,613 ops/sec ±1.94% (89 runs sampled)
(native) "Object.entries( )" x 18,698,051 ops/sec ±1.71% (92 runs sampled)
Fastest is (native) "Object.entries( )"

Vanillas "find" x 9,783,338 ops/sec ±1.81% (90 runs sampled)
Lodash "find" x 5,477,445 ops/sec ±1.89% (90 runs sampled)
Ramda "find" x 3,563,026 ops/sec ±1.54% (88 runs sampled)
(native) "Array.find()" x 9,570,835 ops/sec ±2.23% (85 runs sampled)
Fastest is Vanillas "find",(native) "Array.find()"

Vanillas "findIndex" x 9,662,701 ops/sec ±2.80% (82 runs sampled)
Lodash "findIndex" x 7,200,695 ops/sec ±1.67% (87 runs sampled)
Ramda "findIndex" x 3,513,557 ops/sec ±2.17% (87 runs sampled)
(native) "Array.findIndex()" x 9,184,417 ops/sec ±2.99% (84 runs sampled)
Fastest is Vanillas "findIndex"

Vanillas "isEmpty" x 79,265,387 ops/sec ±0.72% (89 runs sampled)
Lodash "isEmpty" x 13,219,522 ops/sec ±1.36% (85 runs sampled)
Ramda "isEmpty" x 502,619 ops/sec ±2.00% (86 runs sampled)
Fastest is Vanillas "isEmpty"

Vanillas "isEqual" x 423,552 ops/sec ±2.46% (85 runs sampled)
Lodash "isEqual" x 138,698 ops/sec ±3.41% (82 runs sampled)
Ramda "equals" x 44,352 ops/sec ±3.47% (83 runs sampled)
Fastest is Vanillas "isEqual"

Vanillas (curried) "isEqual" x 422,963 ops/sec ±1.76% (91 runs sampled)
Ramda (curried) "equals" x 45,266 ops/sec ±2.74% (83 runs sampled)
Fastest is Vanillas (curried) "isEqual"

Vanillas "isObject" x 16,588,399 ops/sec ±1.21% (87 runs sampled)
Lodash "isPlainObject" x 1,866,679 ops/sec ±7.80% (64 runs sampled)
Fastest is Vanillas "isObject"

Vanillas "map" x 5,057,540 ops/sec ±2.99% (83 runs sampled)
Lodash "map" x 3,770,876 ops/sec ±2.70% (83 runs sampled)
Ramda "map" x 2,213,271 ops/sec ±2.98% (82 runs sampled)
(native) "Array.map()" x 4,898,496 ops/sec ±2.77% (82 runs sampled)
Fastest is Vanillas "map",(native) "Array.map()"

Vanillas (curried) "map" x 3,673,733 ops/sec ±2.56% (85 runs sampled)
Ramda (curried) "map" x 950,662 ops/sec ±7.53% (56 runs sampled)
Fastest is Vanillas (curried) "map"

Vanillas "mapObject" x 2,048,065 ops/sec ±6.94% (86 runs sampled)
Lodash "mapValues" x 2,116,642 ops/sec ±2.02% (86 runs sampled)
Ramda "map" x 888,164 ops/sec ±1.48% (91 runs sampled)
(native) "Object.keys( ).reduce()" x 343,799 ops/sec ±0.86% (90 runs sampled)
(native) "Object.entries().reduce()" x 329,470 ops/sec ±1.93% (88 runs sampled)
Fastest is Lodash "mapValues",Vanillas "mapObject"

Vanillas "mapSpec" x 1,017,533 ops/sec ±1.40% (90 runs sampled)
Ramda "evolve" x 1,062,234 ops/sec ±1.86% (91 runs sampled)
Fastest is Ramda "evolve"

Vanillas (curried) "mapSpec" x 1,009,106 ops/sec ±0.79% (89 runs sampled)
Ramda (curried) "evolve" x 862,042 ops/sec ±0.81% (95 runs sampled)
Fastest is Vanillas (curried) "mapSpec"

Vanillas "mapString" x 459,611 ops/sec ±1.41% (87 runs sampled)
(native) "String.split().map().join()" x 314,009 ops/sec ±1.51% (91 runs sampled)
Fastest is Vanillas "mapString"

Vanillas "merge" x 2,210,325 ops/sec ±4.53% (87 runs sampled)
Lodash "merge" x 583,755 ops/sec ±2.33% (88 runs sampled)
Ramda "merge" x 816,670 ops/sec ±3.74% (86 runs sampled)
(native) "Object.assign({}, ..)" x 462,344 ops/sec ±1.36% (87 runs sampled)
Fastest is Vanillas "merge"

Vanillas (curried) "merge" x 1,500,793 ops/sec ±6.72% (88 runs sampled)
Ramda (curried) "merge" x 546,067 ops/sec ±8.65% (67 runs sampled)
Fastest is Vanillas (curried) "merge"

Vanillas "omit" x 3,588,545 ops/sec ±1.49% (86 runs sampled)
Lodash "omit" x 435,948 ops/sec ±6.64% (80 runs sampled)
Ramda "omit" x 2,000,822 ops/sec ±2.58% (56 runs sampled)
(native) "Object.keys().filter().reduce() (native) x 92,322 ops/sec ±1.80% (81 runs sampled)
Fastest is Vanillas "omit"

Vanillas (curried) "omit" x 3,361,545 ops/sec ±3.92% (88 runs sampled)
Ramda (curried) "omit" x 2,308,770 ops/sec ±1.31% (92 runs sampled)
Fastest is Vanillas (curried) "omit"

Vanillas "pick" x 5,421,665 ops/sec ±5.94% (51 runs sampled)
Lodash "pick" x 501,043 ops/sec ±1.84% (80 runs sampled)
Ramda "pick" x 3,029,360 ops/sec ±2.10% (82 runs sampled)
(native) "Array.prototype.reduce" x 257,705 ops/sec ±1.66% (86 runs sampled)
Fastest is Vanillas "pick"

Vanillas (curried) "pick" x 6,637,104 ops/sec ±8.87% (84 runs sampled)
Ramda (curried) "pick" x 1,732,175 ops/sec ±9.36% (55 runs sampled)
Fastest is Vanillas (curried) "pick"

Vanillas "pipe" x 5,915,706 ops/sec ±1.92% (85 runs sampled)
Ramda "pipe" x 450,527 ops/sec ±2.81% (82 runs sampled)
Fastest is Vanillas "pipe"

Vanillas "propAt" x 14,603,270 ops/sec ±1.05% (88 runs sampled)
Lodash "get" x 9,888,909 ops/sec ±1.02% (85 runs sampled)
Ramda "path" x 6,226,812 ops/sec ±2.29% (83 runs sampled)
(native) "&& until you find it" x 47,506,696 ops/sec ±0.51% (91 runs sampled)
Fastest is (native) "&& until you find it"

Vanillas (curried) "propAt" x 8,745,938 ops/sec ±2.97% (83 runs sampled)
Ramda (curried) "path" x 1,951,601 ops/sec ±1.86% (80 runs sampled)
Fastest is Vanillas (curried) "propAt"

Vanillas "propEquals" x 13,215,292 ops/sec ±1.09% (86 runs sampled)
Ramda "pathEq" x 2,424,611 ops/sec ±1.66% (84 runs sampled)
(native) "&& until you find it" x 44,278,582 ops/sec ±0.37% (90 runs sampled)
Fastest is (native) "&& until you find it"

Vanillas (curried) "propEquals" x 4,054,265 ops/sec ±1.80% (86 runs sampled)
Ramda (curried) "pathEq" x 1,091,285 ops/sec ±2.19% (83 runs sampled)
Fastest is Vanillas (curried) "propEquals"

Vanillas "reduce" x 194,401 ops/sec ±1.36% (87 runs sampled)
Lodash "reduce" x 189,038 ops/sec ±1.37% (87 runs sampled)
Ramda "reduce" x 172,964 ops/sec ±1.47% (90 runs sampled)
(native) "Array.reduce" x 194,176 ops/sec ±1.37% (88 runs sampled)
Fastest is Vanillas "reduce",(native) "Array.reduce"

Vanillas (curried) "reduce" x 185,343 ops/sec ±1.33% (87 runs sampled)
Ramda (curried) "reduce" x 156,598 ops/sec ±1.37% (90 runs sampled)
Fastest is Vanillas (curried) "reduce"

Vanillas "size" x 46,326,994 ops/sec ±1.51% (90 runs sampled)
Lodash "size" x 7,087,150 ops/sec ±0.51% (89 runs sampled)
Ramda "length" x 3,504,248 ops/sec ±0.93% (89 runs sampled)
Fastest is Vanillas "size"

Vanillas "size" x 21,078,691 ops/sec ±0.98% (92 runs sampled)
Lodash "size" x 5,890,915 ops/sec ±0.53% (91 runs sampled)
Fastest is Vanillas "size"

Vanillas "size" x 48,330,700 ops/sec ±0.20% (94 runs sampled)
Lodash "size" x 15,440,602 ops/sec ±0.74% (90 runs sampled)
Ramda "length" x 3,606,379 ops/sec ±0.80% (88 runs sampled)
Fastest is Vanillas "size"

```