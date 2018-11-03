```
Vanillas "any" x 9,192,113 ops/sec ±0.73% (93 runs sampled)
Lodash "some" x 9,025,352 ops/sec ±0.25% (97 runs sampled)
Ramda "any" x 3,534,787 ops/sec ±0.80% (97 runs sampled)
(native) "Array.some()" x 8,982,087 ops/sec ±0.30% (94 runs sampled)
Fastest is Vanillas "any"

Vanillas "assign" x 3,065,410 ops/sec ±0.13% (95 runs sampled)
(native) "Object.assign()" x 3,922,223 ops/sec ±0.29% (94 runs sampled)
Fastest is (native) "Object.assign()"

Vanillas "clone" x 5,553,110 ops/sec ±1.41% (93 runs sampled)
Lodash "clone" x 1,403,774 ops/sec ±0.15% (95 runs sampled)
Ramda "clone" x 701,360 ops/sec ±0.87% (95 runs sampled)
(native) "clone by destructuring" x 1,881,303 ops/sec ±0.26% (97 runs sampled)
(native) "Object.assign({}, ..)" x 8,734,284 ops/sec ±1.04% (95 runs sampled)
Fastest is (native) "Object.assign({}, ..)"

Vanillas "clone" x 822,211 ops/sec ±0.17% (98 runs sampled)
Lodash "cloneDeep" x 262,774 ops/sec ±0.20% (95 runs sampled)
Ramda "clone" x 230,593 ops/sec ±0.74% (96 runs sampled)
(native) "clone by destructuring" x 306,756 ops/sec ±0.13% (99 runs sampled)
Fastest is Vanillas "clone"

Vanillas "compose" x 9,671,469 ops/sec ±1.67% (94 runs sampled)
Redux "compose" x 6,732,768 ops/sec ±0.33% (95 runs sampled)
Ramda "compose" x 676,007 ops/sec ±0.22% (90 runs sampled)
Fastest is Vanillas "compose"

Vanillas "concat" x 22,731,260 ops/sec ±0.46% (95 runs sampled)
Lodash "concat" x 2,433,798 ops/sec ±1.87% (95 runs sampled)
Ramda "concat" x 4,411,919 ops/sec ±0.13% (91 runs sampled)
(native) "Array.concat()" x 5,617,461 ops/sec ±1.25% (96 runs sampled)
(native) "[ ...val1, ...val2 ]" x 5,666,872 ops/sec ±0.52% (95 runs sampled)
Fastest is Vanillas "concat"

Vanillas "cond" x 1,677,586 ops/sec ±0.13% (93 runs sampled)
Ramda "cond" x 1,095,637 ops/sec ±0.63% (96 runs sampled)
(native) "If/Else/ElseIf" x 1,799,832 ops/sec ±0.31% (90 runs sampled)
Fastest is (native) "If/Else/ElseIf"

Vanillas "contains" (array) x 47,397,574 ops/sec ±0.87% (93 runs sampled)
Lodash "includes" (array) x 9,855,705 ops/sec ±0.50% (91 runs sampled)
Ramda "contains" (array) x 17,818,196 ops/sec ±0.77% (93 runs sampled)
(native) "Array.includes()" x 44,568,266 ops/sec ±0.15% (94 runs sampled)
Fastest is Vanillas "contains" (array)

Vanillas "contains" (string) x 33,379,113 ops/sec ±0.26% (92 runs sampled)
Lodash "includes" (string) x 26,724,768 ops/sec ±0.24% (95 runs sampled)
Ramda "contains" (string) x 15,768,012 ops/sec ±0.58% (90 runs sampled)
(native) "String.includes()" x 22,384,482 ops/sec ±0.66% (94 runs sampled)
Fastest is Vanillas "contains" (string)

Vanillas "curry" x 24,960,389 ops/sec ±0.28% (93 runs sampled)
Lodash "curry" x 947,727 ops/sec ±1.69% (90 runs sampled)
Ramda "curry" x 4,347,691 ops/sec ±0.18% (99 runs sampled)
Fastest is Vanillas "curry"

Executing Vanillas 2-arg curried function x 11,667,181 ops/sec ±0.42% (92 runs sampled)
Executing Lodash 2-arg curried function x 364,205 ops/sec ±1.22% (94 runs sampled)
Executing Ramda 2-arg curried function x 2,095,402 ops/sec ±0.29% (96 runs sampled)
Fastest is Executing Vanillas 2-arg curried function

Executing Vanillas 3-arg curried function x 6,982,007 ops/sec ±0.64% (96 runs sampled)
Executing Lodash 3-arg curried function x 196,488 ops/sec ±0.26% (91 runs sampled)
Executing Ramda 3-arg curried function x 1,636,438 ops/sec ±0.24% (98 runs sampled)
Fastest is Executing Vanillas 3-arg curried function

Executing Vanillas 4-arg curried function x 4,519,766 ops/sec ±0.79% (93 runs sampled)
Executing Lodash 4-arg curried function x 139,497 ops/sec ±0.23% (97 runs sampled)
Executing Ramda 4-arg curried function x 1,419,386 ops/sec ±1.11% (95 runs sampled)
Fastest is Executing Vanillas 4-arg curried function

Executing Vanillas 5+arg curried function x 1,623,234 ops/sec ±0.27% (94 runs sampled)
Executing Lodash 5+arg curried function x 104,073 ops/sec ±0.17% (96 runs sampled)
Executing Ramda 5+arg curried function x 1,050,756 ops/sec ±1.39% (91 runs sampled)
Fastest is Executing Vanillas 5+arg curried function

Vanillas "each" x 57,345,182 ops/sec ±0.17% (99 runs sampled)
Lodash "each" x 4,331,495 ops/sec ±0.58% (96 runs sampled)
(native) "Array.forEach" x 56,459,979 ops/sec ±0.17% (99 runs sampled)
Fastest is Vanillas "each"

Vanillas "entries" x 9,405,647 ops/sec ±2.89% (97 runs sampled)
Lodash "toPairs" x 4,960,773 ops/sec ±0.26% (93 runs sampled)
Ramda "toPairs" x 3,997,544 ops/sec ±1.90% (94 runs sampled)
(native) "Object.entries( )" x 12,220,658 ops/sec ±0.70% (89 runs sampled)
Fastest is (native) "Object.entries( )"

Vanillas "find" x 8,237,970 ops/sec ±0.85% (86 runs sampled)
Lodash "find" x 4,711,643 ops/sec ±0.59% (94 runs sampled)
Ramda "find" x 3,352,998 ops/sec ±0.18% (96 runs sampled)
(native) "Array.find()" x 8,976,356 ops/sec ±0.80% (94 runs sampled)
Fastest is (native) "Array.find()"

Vanillas "findIndex" x 9,078,848 ops/sec ±0.23% (96 runs sampled)
Lodash "findIndex" x 7,026,875 ops/sec ±0.59% (95 runs sampled)
Ramda "findIndex" x 3,361,986 ops/sec ±0.11% (97 runs sampled)
(native) "Array.findIndex()" x 8,832,191 ops/sec ±0.24% (94 runs sampled)
Fastest is Vanillas "findIndex"

Vanillas "invert" x 6,756,623 ops/sec ±1.12% (94 runs sampled)
Lodash "invert" x 4,216,083 ops/sec ±0.39% (95 runs sampled)
Ramda "invertObj" x 1,732,235 ops/sec ±0.69% (95 runs sampled)
(native) "Object.keys( ).reduce()" x 333,245 ops/sec ±0.17% (94 runs sampled)
Fastest is Vanillas "invert"

Vanillas "isEmpty" x 66,277,770 ops/sec ±0.33% (93 runs sampled)
Lodash "isEmpty" x 12,304,908 ops/sec ±0.25% (98 runs sampled)
Ramda "isEmpty" x 457,066 ops/sec ±0.17% (98 runs sampled)
Fastest is Vanillas "isEmpty"

Vanillas "isEqual" x 410,763 ops/sec ±0.54% (97 runs sampled)
Lodash "isEqual" x 154,060 ops/sec ±0.14% (95 runs sampled)
Ramda "equals" x 43,406 ops/sec ±0.76% (97 runs sampled)
Fastest is Vanillas "isEqual"

Vanillas (curried) "isEqual" x 413,156 ops/sec ±0.19% (97 runs sampled)
Ramda (curried) "equals" x 42,860 ops/sec ±0.87% (94 runs sampled)
Fastest is Vanillas (curried) "isEqual"

Vanillas "isObject" x 15,441,408 ops/sec ±0.48% (98 runs sampled)
Lodash "isPlainObject" x 2,610,241 ops/sec ±0.17% (94 runs sampled)
Fastest is Vanillas "isObject"

Vanillas "map" x 5,483,322 ops/sec ±2.24% (96 runs sampled)
Lodash "map" x 4,353,927 ops/sec ±0.13% (96 runs sampled)
Ramda "map" x 2,356,321 ops/sec ±0.18% (97 runs sampled)
(native) "Array.map()" x 5,396,181 ops/sec ±2.26% (91 runs sampled)
Fastest is Vanillas "map"

Vanillas (curried) "map" x 3,694,131 ops/sec ±0.12% (96 runs sampled)
Ramda (curried) "map" x 1,329,821 ops/sec ±1.05% (95 runs sampled)
Fastest is Vanillas (curried) "map"

Vanillas "mapObject" x 2,926,647 ops/sec ±0.15% (93 runs sampled)
Lodash "mapValues" x 1,970,233 ops/sec ±1.19% (96 runs sampled)
Ramda "map" x 831,435 ops/sec ±0.16% (97 runs sampled)
(native) "Object.keys( ).reduce()" x 317,487 ops/sec ±0.18% (95 runs sampled)
(native) "Object.entries().reduce()" x 316,737 ops/sec ±1.40% (96 runs sampled)
Fastest is Vanillas "mapObject"

Vanillas "mapSpec" x 952,519 ops/sec ±0.24% (98 runs sampled)
Ramda "evolve" x 947,232 ops/sec ±1.21% (97 runs sampled)
Fastest is Vanillas "mapSpec"

Vanillas (curried) "mapSpec" x 905,343 ops/sec ±0.21% (97 runs sampled)
Ramda (curried) "evolve" x 754,910 ops/sec ±1.09% (96 runs sampled)
Fastest is Vanillas (curried) "mapSpec"

Vanillas "mapString" x 428,012 ops/sec ±0.17% (95 runs sampled)
(native) "String.split().map().join()" x 298,485 ops/sec ±2.35% (94 runs sampled)
Fastest is Vanillas "mapString"

Vanillas "merge" x 2,139,004 ops/sec ±0.16% (96 runs sampled)
Lodash "merge" x 1,072,906 ops/sec ±0.16% (95 runs sampled)
Ramda "merge" x 4,334,528 ops/sec ±1.42% (92 runs sampled)
(native) "Object.assign({}, ..)" x 5,268,015 ops/sec ±0.22% (94 runs sampled)
Fastest is (native) "Object.assign({}, ..)"

Vanillas (curried) "merge" x 1,659,143 ops/sec ±1.55% (91 runs sampled)
Ramda (curried) "merge" x 2,340,373 ops/sec ±0.16% (95 runs sampled)
Fastest is Ramda (curried) "merge"

Vanillas "omit" x 6,245,005 ops/sec ±0.98% (97 runs sampled)
Lodash "omit" x 608,168 ops/sec ±0.31% (97 runs sampled)
Ramda "omit" x 3,416,752 ops/sec ±0.78% (93 runs sampled)
(native) "Object.keys().filter().reduce()" x 170,358 ops/sec ±0.18% (95 runs sampled)
Fastest is Vanillas "omit"

Vanillas (curried) "omit" x 5,117,755 ops/sec ±0.15% (95 runs sampled)
Ramda (curried) "omit" x 2,017,957 ops/sec ±0.80% (95 runs sampled)
Fastest is Vanillas (curried) "omit"

Vanillas "pick" x 8,223,859 ops/sec ±1.03% (91 runs sampled)
Lodash "pick" x 951,217 ops/sec ±1.11% (93 runs sampled)
Ramda "pick" x 5,504,589 ops/sec ±0.18% (92 runs sampled)
(native) "Array.prototype.reduce" x 473,930 ops/sec ±0.11% (98 runs sampled)
Fastest is Vanillas "pick"

Vanillas (curried) "pick" x 6,675,618 ops/sec ±0.68% (94 runs sampled)
Ramda (curried) "pick" x 2,474,992 ops/sec ±0.47% (90 runs sampled)
Fastest is Vanillas (curried) "pick"

Vanillas "pipe" x 9,321,307 ops/sec ±1.93% (94 runs sampled)
Ramda "pipe" x 890,605 ops/sec ±0.19% (96 runs sampled)
Fastest is Vanillas "pipe"

Vanillas "propAt" x 24,376,122 ops/sec ±0.13% (93 runs sampled)
Lodash "get" x 15,446,553 ops/sec ±0.34% (98 runs sampled)
Ramda "path" x 10,612,875 ops/sec ±0.97% (93 runs sampled)
(native) "&& until you find it" x 48,259,710 ops/sec ±0.85% (93 runs sampled)
Fastest is (native) "&& until you find it"

Vanillas (curried) "propAt" x 13,177,846 ops/sec ±0.80% (96 runs sampled)
Ramda (curried) "path" x 3,569,208 ops/sec ±0.20% (98 runs sampled)
Fastest is Vanillas (curried) "propAt"

Vanillas "propEquals" x 23,944,182 ops/sec ±0.17% (97 runs sampled)
Ramda "pathEq" x 4,258,129 ops/sec ±0.55% (97 runs sampled)
(native) "&& until you find it" x 67,220,110 ops/sec ±0.05% (96 runs sampled)
Fastest is (native) "&& until you find it"

Vanillas (curried) "propEquals" x 6,856,686 ops/sec ±0.82% (93 runs sampled)
Ramda (curried) "pathEq" x 2,079,537 ops/sec ±0.25% (92 runs sampled)
Fastest is Vanillas (curried) "propEquals"

Vanillas "reduce" x 347,475 ops/sec ±1.03% (94 runs sampled)
Lodash "reduce" x 336,763 ops/sec ±0.11% (99 runs sampled)
Ramda "reduce" x 292,967 ops/sec ±1.15% (95 runs sampled)
(native) "Array.reduce" x 348,404 ops/sec ±0.25% (97 runs sampled)
Fastest is (native) "Array.reduce"

Vanillas (curried) "reduce" x 328,840 ops/sec ±0.15% (93 runs sampled)
Ramda (curried) "reduce" x 271,557 ops/sec ±1.06% (94 runs sampled)
Fastest is Vanillas (curried) "reduce"

Vanillas "size" x 70,898,731 ops/sec ±2.73% (91 runs sampled)
Lodash "size" x 11,308,975 ops/sec ±0.46% (93 runs sampled)
Ramda "length" x 5,930,611 ops/sec ±0.14% (97 runs sampled)
Fastest is Vanillas "size"

Vanillas "size" x 34,094,028 ops/sec ±0.63% (96 runs sampled)
Lodash "size" x 10,750,495 ops/sec ±0.33% (91 runs sampled)
Fastest is Vanillas "size"

Vanillas "size" x 76,610,365 ops/sec ±0.06% (96 runs sampled)
Lodash "size" x 24,688,372 ops/sec ±0.33% (97 runs sampled)
Ramda "length" x 6,249,337 ops/sec ±0.50% (97 runs sampled)
Fastest is Vanillas "size"

Vanillas "uniq" (list of nums) x 9,741,487 ops/sec ±0.92% (94 runs sampled)
Lodash "uniq" (list of nums) x 8,890,876 ops/sec ±0.35% (95 runs sampled)
Ramda "uniq" (list of nums) x 262,859 ops/sec ±1.13% (92 runs sampled)
Fastest is Lodash "uniq" (list of nums)

Vanillas "uniq" (list of strings) x 4,513,552 ops/sec ±0.33% (97 runs sampled)
Lodash "uniq" (list of strings) x 3,485,505 ops/sec ±0.42% (93 runs sampled)
Ramda "uniq" (list of strings) x 352,517 ops/sec ±0.80% (93 runs sampled)
Fastest is Lodash "uniq" (list of strings)

Vanillas "uniqBy" (top-level prop) x 4,202,434 ops/sec ±0.35% (95 runs sampled)
Lodash "uniqBy" (top-level prop) x 3,004,492 ops/sec ±0.16% (95 runs sampled)
Ramda "uniqBy" (top-level prop) x 380,968 ops/sec ±0.16% (96 runs sampled)
Fastest is Vanillas "uniqBy" (top-level prop)

Vanillas "uniqBy" (nested prop) x 823,376 ops/sec ±1.11% (97 runs sampled)
Lodash "uniqBy" (nested prop) x 446,807 ops/sec ±0.17% (98 runs sampled)
Ramda "uniqBy" (nested prop) x 441,010 ops/sec ±0.08% (99 runs sampled)
Fastest is Vanillas "uniqBy" (nested prop)

Vanillas "validate" x 207,538 ops/sec ±0.11% (98 runs sampled)
Spected "validate" x 101,090 ops/sec ±0.14% (94 runs sampled)
Yup "validate" x 9,447 ops/sec ±0.59% (93 runs sampled)
Joi "validate" x 149,775 ops/sec ±0.94% (92 runs sampled)
=======
Vanillas "any" x 9,893,928 ops/sec ±0.86% (91 runs sampled)
Lodash "some" x 9,397,602 ops/sec ±0.69% (89 runs sampled)
Ramda "any" x 3,945,578 ops/sec ±0.51% (93 runs sampled)
(native) "Array.some()" x 10,182,460 ops/sec ±0.64% (91 runs sampled)
Fastest is (native) "Array.some()"

Vanillas "assign" x 3,545,353 ops/sec ±0.62% (88 runs sampled)
(native) "Object.assign()" x 611,289 ops/sec ±0.86% (93 runs sampled)
Fastest is Vanillas "assign"

Vanillas "clone" x 6,551,288 ops/sec ±0.65% (92 runs sampled)
Lodash "clone" x 1,446,721 ops/sec ±0.66% (92 runs sampled)
Ramda "clone" x 759,415 ops/sec ±0.81% (94 runs sampled)
(native) "clone by destructuring" x 2,072,737 ops/sec ±0.63% (94 runs sampled)
(native) "Object.assign({}, ..)" x 1,547,728 ops/sec ±0.72% (91 runs sampled)
Fastest is Vanillas "clone"

Vanillas "clone" x 891,255 ops/sec ±0.76% (93 runs sampled)
Lodash "cloneDeep" x 264,407 ops/sec ±0.64% (93 runs sampled)
Ramda "clone" x 248,688 ops/sec ±0.86% (91 runs sampled)
(native) "clone by destructuring" x 321,973 ops/sec ±0.71% (93 runs sampled)
Fastest is Vanillas "clone"

Vanillas "compose" x 14,028,031 ops/sec ±2.53% (92 runs sampled)
Redux "compose" x 8,151,203 ops/sec ±0.45% (94 runs sampled)
Ramda "compose" x 745,171 ops/sec ±0.57% (91 runs sampled)
Fastest is Vanillas "compose"

Vanillas "concat" x 34,497,626 ops/sec ±2.65% (93 runs sampled)
Lodash "concat" x 2,702,409 ops/sec ±0.68% (94 runs sampled)
Ramda "concat" x 5,247,332 ops/sec ±1.20% (89 runs sampled)
(native) "Array.concat()" x 6,766,222 ops/sec ±0.52% (93 runs sampled)
(native) "[ ...val1, ...val2 ]" x 6,480,457 ops/sec ±1.82% (91 runs sampled)
Fastest is Vanillas "concat"

Vanillas "cond" x 1,541,974 ops/sec ±3.17% (82 runs sampled)
Ramda "cond" x 639,977 ops/sec ±0.89% (91 runs sampled)
(native) "If/Else/ElseIf" x 1,953,576 ops/sec ±1.14% (92 runs sampled)
Fastest is (native) "If/Else/ElseIf"

Vanillas "contains" (array) x 91,383,993 ops/sec ±0.65% (91 runs sampled)
Lodash "includes" (array) x 11,572,601 ops/sec ±0.85% (91 runs sampled)
Ramda "contains" (array) x 26,094,916 ops/sec ±0.60% (92 runs sampled)
(native) "Array.includes()" x 55,900,152 ops/sec ±0.67% (91 runs sampled)
Fastest is Vanillas "contains" (array)

Vanillas "contains" (string) x 37,806,984 ops/sec ±1.58% (89 runs sampled)
Lodash "includes" (string) x 29,534,798 ops/sec ±0.55% (93 runs sampled)
Ramda "contains" (string) x 18,330,606 ops/sec ±0.63% (90 runs sampled)
(native) "String.includes()" x 25,894,502 ops/sec ±0.62% (94 runs sampled)
Fastest is Vanillas "contains" (string)

Vanillas "curry" x 33,426,620 ops/sec ±0.48% (91 runs sampled)
Lodash "curry" x 998,358 ops/sec ±0.94% (95 runs sampled)
Ramda "curry" x 5,101,280 ops/sec ±0.47% (93 runs sampled)
Fastest is Vanillas "curry"

Executing Vanillas 2-arg curried function x 13,010,347 ops/sec ±0.77% (92 runs sampled)
Executing Lodash 2-arg curried function x 371,541 ops/sec ±1.18% (93 runs sampled)
Executing Ramda 2-arg curried function x 2,133,817 ops/sec ±1.95% (86 runs sampled)
Fastest is Executing Vanillas 2-arg curried function

Executing Vanillas 3-arg curried function x 7,010,839 ops/sec ±1.32% (90 runs sampled)
Executing Lodash 3-arg curried function x 208,288 ops/sec ±0.84% (89 runs sampled)
Executing Ramda 3-arg curried function x 1,649,456 ops/sec ±1.47% (90 runs sampled)
Fastest is Executing Vanillas 3-arg curried function

Executing Vanillas 4-arg curried function x 4,972,954 ops/sec ±0.98% (92 runs sampled)
Executing Lodash 4-arg curried function x 147,172 ops/sec ±1.47% (84 runs sampled)
Executing Ramda 4-arg curried function x 1,407,553 ops/sec ±3.41% (86 runs sampled)
Fastest is Executing Vanillas 4-arg curried function

Executing Vanillas 5+arg curried function x 1,768,674 ops/sec ±0.48% (91 runs sampled)
Executing Lodash 5+arg curried function x 118,200 ops/sec ±1.66% (87 runs sampled)
Executing Ramda 5+arg curried function x 1,152,018 ops/sec ±0.50% (92 runs sampled)
Fastest is Executing Vanillas 5+arg curried function

Vanillas "each" x 73,133,211 ops/sec ±0.75% (90 runs sampled)
Lodash "each" x 3,935,724 ops/sec ±3.62% (85 runs sampled)
(native) "Array.forEach" x 72,742,709 ops/sec ±0.75% (89 runs sampled)
Fastest is Vanillas "each",(native) "Array.forEach"

Vanillas "entries" x 10,318,672 ops/sec ±3.15% (86 runs sampled)
Lodash "toPairs" x 5,413,359 ops/sec ±0.88% (93 runs sampled)
Ramda "toPairs" x 4,718,282 ops/sec ±2.72% (92 runs sampled)
(native) "Object.entries( )" x 19,575,837 ops/sec ±0.74% (93 runs sampled)
Fastest is (native) "Object.entries( )"

Vanillas "find" x 9,868,492 ops/sec ±0.58% (92 runs sampled)
Lodash "find" x 5,289,183 ops/sec ±0.73% (92 runs sampled)
Ramda "find" x 3,654,380 ops/sec ±0.49% (94 runs sampled)
(native) "Array.find()" x 9,944,980 ops/sec ±0.50% (93 runs sampled)
Fastest is (native) "Array.find()",Vanillas "find"

Vanillas "findIndex" x 10,049,268 ops/sec ±0.66% (93 runs sampled)
Lodash "findIndex" x 7,601,249 ops/sec ±0.69% (92 runs sampled)
Ramda "findIndex" x 2,873,502 ops/sec ±5.90% (74 runs sampled)
(native) "Array.findIndex()" x 9,094,122 ops/sec ±4.52% (84 runs sampled)
Fastest is Vanillas "findIndex"

Vanillas "invert" x 7,328,763 ops/sec ±0.54% (92 runs sampled)
Lodash "invert" x 4,725,321 ops/sec ±0.66% (93 runs sampled)
Ramda "invertObj" x 1,950,172 ops/sec ±0.53% (91 runs sampled)
(native) "Object.keys( ).reduce()" x 341,182 ops/sec ±1.25% (89 runs sampled)
Fastest is Vanillas "invert"

Vanillas "isEmpty" x 87,420,364 ops/sec ±0.59% (94 runs sampled)
Lodash "isEmpty" x 13,595,339 ops/sec ±0.81% (92 runs sampled)
Ramda "isEmpty" x 510,433 ops/sec ±0.60% (94 runs sampled)
Fastest is Vanillas "isEmpty"

Vanillas "isEqual" x 407,988 ops/sec ±0.55% (93 runs sampled)
Lodash "isEqual" x 152,833 ops/sec ±1.40% (89 runs sampled)
Ramda "equals" x 49,668 ops/sec ±0.79% (92 runs sampled)
Fastest is Vanillas "isEqual"

Vanillas (curried) "isEqual" x 402,104 ops/sec ±0.77% (91 runs sampled)
Ramda (curried) "equals" x 50,358 ops/sec ±0.46% (92 runs sampled)
Fastest is Vanillas (curried) "isEqual"

Vanillas "isObject" x 19,213,921 ops/sec ±0.62% (93 runs sampled)
Lodash "isPlainObject" x 2,677,050 ops/sec ±0.69% (92 runs sampled)
Fastest is Vanillas "isObject"

Vanillas "map" x 5,261,345 ops/sec ±1.49% (94 runs sampled)
Lodash "map" x 4,088,593 ops/sec ±0.71% (91 runs sampled)
Ramda "map" x 2,373,986 ops/sec ±1.35% (89 runs sampled)
(native) "Array.map()" x 5,358,111 ops/sec ±0.72% (86 runs sampled)
Fastest is (native) "Array.map()"

Vanillas (curried) "map" x 3,927,158 ops/sec ±0.62% (93 runs sampled)
Ramda (curried) "map" x 1,534,328 ops/sec ±0.58% (90 runs sampled)
Fastest is Vanillas (curried) "map"

Vanillas "mapObject" x 3,246,242 ops/sec ±1.43% (88 runs sampled)
Lodash "mapValues" x 2,098,511 ops/sec ±0.90% (91 runs sampled)
Ramda "map" x 886,935 ops/sec ±1.51% (85 runs sampled)
(native) "Object.keys( ).reduce()" x 309,744 ops/sec ±1.60% (89 runs sampled)
(native) "Object.entries().reduce()" x 324,913 ops/sec ±0.59% (93 runs sampled)
Fastest is Vanillas "mapObject"

Vanillas "mapSpec" x 1,015,815 ops/sec ±1.24% (93 runs sampled)
Ramda "evolve" x 1,010,646 ops/sec ±0.61% (91 runs sampled)
Fastest is Ramda "evolve"

Vanillas (curried) "mapSpec" x 951,332 ops/sec ±0.79% (89 runs sampled)
Ramda (curried) "evolve" x 798,663 ops/sec ±0.65% (93 runs sampled)
Fastest is Vanillas (curried) "mapSpec"

Vanillas "mapString" x 450,911 ops/sec ±0.79% (90 runs sampled)
(native) "String.split().map().join()" x 310,226 ops/sec ±0.56% (95 runs sampled)
Fastest is Vanillas "mapString"

Vanillas "merge" x 2,392,649 ops/sec ±1.42% (94 runs sampled)
Lodash "merge" x 1,174,692 ops/sec ±0.50% (94 runs sampled)
Ramda "merge" x 815,933 ops/sec ±0.77% (92 runs sampled)
(native) "Object.assign({}, ..)" x 861,073 ops/sec ±0.85% (91 runs sampled)
Fastest is Vanillas "merge"

Vanillas (curried) "merge" x 1,850,788 ops/sec ±0.48% (93 runs sampled)
Ramda (curried) "merge" x 696,588 ops/sec ±0.83% (91 runs sampled)
Fastest is Vanillas (curried) "merge"

Vanillas "omit" x 7,170,675 ops/sec ±0.61% (90 runs sampled)
Lodash "omit" x 638,812 ops/sec ±1.52% (93 runs sampled)
Ramda "omit" x 3,519,201 ops/sec ±2.66% (83 runs sampled)
(native) "Object.keys().filter().reduce()" x 325,390 ops/sec ±1.14% (89 runs sampled)
Fastest is Vanillas "omit"

Vanillas (curried) "omit" x 5,974,155 ops/sec ±1.34% (90 runs sampled)
Ramda (curried) "omit" x 2,278,172 ops/sec ±0.49% (95 runs sampled)
Fastest is Vanillas (curried) "omit"

Vanillas "pick" x 9,980,614 ops/sec ±1.15% (89 runs sampled)
Lodash "pick" x 1,032,251 ops/sec ±0.55% (94 runs sampled)
Ramda "pick" x 5,959,441 ops/sec ±1.04% (91 runs sampled)
(native) "Array.prototype.reduce" x 497,191 ops/sec ±0.68% (93 runs sampled)
Fastest is Vanillas "pick"

Vanillas (curried) "pick" x 8,076,349 ops/sec ±0.54% (92 runs sampled)
Ramda (curried) "pick" x 2,839,602 ops/sec ±0.71% (94 runs sampled)
Fastest is Vanillas (curried) "pick"

Vanillas "pipe" x 12,808,833 ops/sec ±0.63% (92 runs sampled)
Ramda "pipe" x 918,930 ops/sec ±1.15% (88 runs sampled)
Fastest is Vanillas "pipe"

Vanillas "propAt" x 30,447,029 ops/sec ±0.56% (90 runs sampled)
Lodash "get" x 18,708,858 ops/sec ±1.84% (86 runs sampled)
Ramda "path" x 13,405,207 ops/sec ±0.73% (91 runs sampled)
(native) "&& until you find it" x 99,029,819 ops/sec ±0.85% (89 runs sampled)
Fastest is (native) "&& until you find it"

Vanillas (curried) "propAt" x 18,524,480 ops/sec ±0.80% (89 runs sampled)
Ramda (curried) "path" x 4,015,712 ops/sec ±0.45% (94 runs sampled)
Fastest is Vanillas (curried) "propAt"

Vanillas "propEquals" x 27,194,930 ops/sec ±1.84% (87 runs sampled)
Ramda "pathEq" x 4,394,921 ops/sec ±1.45% (86 runs sampled)
(native) "&& until you find it" x 87,391,472 ops/sec ±1.46% (89 runs sampled)
Fastest is (native) "&& until you find it"

Vanillas (curried) "propEquals" x 8,164,818 ops/sec ±1.87% (87 runs sampled)
Ramda (curried) "pathEq" x 2,476,603 ops/sec ±0.52% (94 runs sampled)
Fastest is Vanillas (curried) "propEquals"

Vanillas "reduce" x 363,112 ops/sec ±1.07% (89 runs sampled)
Lodash "reduce" x 367,947 ops/sec ±0.54% (93 runs sampled)
Ramda "reduce" x 329,913 ops/sec ±0.54% (94 runs sampled)
(native) "Array.reduce" x 370,924 ops/sec ±1.13% (93 runs sampled)
Fastest is (native) "Array.reduce"

Vanillas (curried) "reduce" x 336,008 ops/sec ±0.91% (88 runs sampled)
Ramda (curried) "reduce" x 276,076 ops/sec ±1.15% (89 runs sampled)
Fastest is Vanillas (curried) "reduce"

Vanillas "size" x 94,833,734 ops/sec ±0.95% (86 runs sampled)
Lodash "size" x 12,422,830 ops/sec ±1.56% (85 runs sampled)
Ramda "length" x 6,305,370 ops/sec ±0.75% (89 runs sampled)
Fastest is Vanillas "size"

Vanillas "size" x 40,605,950 ops/sec ±0.57% (93 runs sampled)
Lodash "size" x 11,367,959 ops/sec ±0.64% (91 runs sampled)
Fastest is Vanillas "size"

Vanillas "size" x 101,949,758 ops/sec ±0.61% (91 runs sampled)
Lodash "size" x 31,259,357 ops/sec ±0.92% (89 runs sampled)
Ramda "length" x 7,057,993 ops/sec ±0.67% (93 runs sampled)
Fastest is Vanillas "size"

Vanillas "uniq" x 11,498,621 ops/sec ±0.49% (91 runs sampled)
Lodash "uniq" x 10,408,205 ops/sec ±1.58% (93 runs sampled)
Ramda "uniq" x 302,590 ops/sec ±0.45% (95 runs sampled)
Fastest is Vanillas "uniq"

Vanillas "uniqBy" (top-level prop) x 4,552,613 ops/sec ±0.43% (95 runs sampled)
Lodash "uniqBy" (top-level prop) x 3,076,679 ops/sec ±1.25% (90 runs sampled)
Ramda "uniqBy" (top-level prop) x 399,504 ops/sec ±0.68% (87 runs sampled)
Fastest is Vanillas "uniqBy" (top-level prop)

Vanillas "uniqBy" (nested prop) x 910,823 ops/sec ±1.02% (92 runs sampled)
Lodash "uniqBy" (nested prop) x 475,099 ops/sec ±0.51% (93 runs sampled)
Ramda "uniqBy" (nested prop) x 430,137 ops/sec ±0.47% (93 runs sampled)
Fastest is Vanillas "uniqBy" (nested prop)

Joi "validate" x 165,221 ops/sec ±0.79% (91 runs sampled)
Yup "validate" x 9,138 ops/sec ±0.55% (91 runs sampled)
Spected "validate" x 86,854 ops/sec ±1.06% (90 runs sampled)
Vanillas "validate" x 234,856 ops/sec ±0.93% (90 runs sampled)
Fastest is Vanillas "validate"

```
