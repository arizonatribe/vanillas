import curry from '../curry'
import uncurriedAppend from '../append'
import uncurriedEach from '../each'
import uncurriedFind from '../find'
import uncurriedFindIndex from '../findIndex'
import uncurriedHas from '../has'
import uncurriedIsEqual from '../isEqual'
import uncurriedIsSameType from '../isSameType'
import uncurriedIsStrictEqual from '../isStrictEqual'
import uncurriedMap from '../map'
import uncurriedMapObject from '../mapObject'
import uncurriedMapSpec from '../mapSpec'
import uncurriedMapString from '../mapString'
import uncurriedOmit from '../omit'
import uncurriedPick from '../pick'
import uncurriedPrepend from '../prepend'
import uncurriedPropAt from '../propAt'
import uncurriedPropEquals from '../propEquals'
import uncurriedPropIs from '../propIs'
import uncurriedPropOr from '../propOr'
import uncurriedReduce from '../reduce'
import uncurriedMerge from '../merge'

export const append = curry(uncurriedAppend)
export const each = curry(uncurriedEach)
export const find = curry(uncurriedFind)
export const findIndex = curry(uncurriedFindIndex)
export const has = curry(uncurriedHas)
export const isEqual = curry(uncurriedIsEqual)
export const isSameType = curry(uncurriedIsSameType)
export const isStrictEqual = curry(uncurriedIsStrictEqual)
export const map = curry(uncurriedMap)
export const mapObject = curry(uncurriedMapObject)
export const mapString = curry(uncurriedMapString)
export const mapSpec = curry(uncurriedMapSpec)
export const omit = curry(uncurriedOmit)
export const pick = curry(uncurriedPick)
export const prepend = curry(uncurriedPrepend)
export const propAt = curry(uncurriedPropAt)
export const propEquals = curry(uncurriedPropEquals)
export const propIs = curry(uncurriedPropIs)
export const propOr = curry(uncurriedPropOr)
export const reduce = curry(uncurriedReduce)
export const merge = curry(uncurriedMerge)
