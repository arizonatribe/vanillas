import curry from '../curry'
import uncurriedAppend from '../append'
import uncurriedCond from '../cond'
import uncurriedContains from '../contains'
import uncurriedDifference from '../difference'
import uncurriedEach from '../each'
import uncurriedFind from '../find'
import uncurriedFindIndex from '../findIndex'
import uncurriedFilter from '../filter'
import uncurriedFilterObject from '../filterObject'
import uncurriedFilterString from '../filterString'
import uncurriedHas from '../has'
import uncurriedHasNestedProp from '../hasNestedProp'
import uncurriedIntersection from '../intersection'
import uncurriedIsEqual from '../isEqual'
import uncurriedIsSameType from '../isSameType'
import uncurriedIsStrictEqual from '../isStrictEqual'
import uncurriedMap from '../map'
import uncurriedMapObjectRecursive from '../mapObjectRecursive'
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
import uncurriedPropSet from '../propSet'
import uncurriedReduce from '../reduce'
import uncurriedRenameKeys from '../renameKeys'
import uncurriedMerge from '../merge'
import uncurriedValidate from '../validate'

export const append = curry(uncurriedAppend)
export const cond = curry(uncurriedCond)
export const contains = curry(uncurriedContains)
export const difference = curry(uncurriedDifference)
export const each = curry(uncurriedEach)
export const find = curry(uncurriedFind)
export const findIndex = curry(uncurriedFindIndex)
export const filter = curry(uncurriedFilter)
export const filterObject = curry(uncurriedFilterObject)
export const filterString = curry(uncurriedFilterString)
export const has = curry(uncurriedHas)
export const hasNestedProp = curry(uncurriedHasNestedProp)
export const intersection = curry(uncurriedIntersection)
export const isEqual = curry(uncurriedIsEqual)
export const isSameType = curry(uncurriedIsSameType)
export const isStrictEqual = curry(uncurriedIsStrictEqual)
export const map = curry(uncurriedMap)
export const mapObject = curry(uncurriedMapObject)
export const mapObjectRecursive = curry(uncurriedMapObjectRecursive)
export const mapString = curry(uncurriedMapString)
export const mapSpec = curry(uncurriedMapSpec)
export const omit = curry(uncurriedOmit)
export const pick = curry(uncurriedPick)
export const prepend = curry(uncurriedPrepend)
export const propAt = curry(uncurriedPropAt)
export const propEquals = curry(uncurriedPropEquals)
export const propIs = curry(uncurriedPropIs)
export const propOr = curry(uncurriedPropOr)
export const propSet = curry(uncurriedPropSet)
export const reduce = curry(uncurriedReduce)
export const renameKeys = curry(uncurriedRenameKeys)
export const merge = curry(uncurriedMerge)
export const validate = curry(uncurriedValidate)
