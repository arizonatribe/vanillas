import R from 'ramda'
import { cond } from '../../src'
import { composers } from '../../test/__mocks__'

const conditionalTransforms = [
  [v => v.Hoffman === 'dustin' || v.Williams === 'robin', () => 'Hook was released in 1991'],
  [v => v.Hoffman === 'albert', () => 'Strange discoveries can happen when researching obstetrics'],
  [v => /^ralph/.test(v.Williams),
    comp => Object.keys(comp).map(key => `${comp[key]} ${key.toLowerCase()}`).join(', ')
  ]
]

function nativeIfElsey(v) {
  if (v.Hoffman === 'dustin' || v.Williams === 'robin') {
    return 'Hook was released in 1991'
  } else if (v.Hoffman === 'albert') {
    return 'Strange discoveries can happen when researching obstetrics'
  } else if (/^ralph/.test(v.Williams)) {
    return Object.keys(v).map(key => `${v[key]} ${key.toLowerCase()}`).join(', ')
  }
}

const tests = [
  ['Vanillas "cond"', () => cond(conditionalTransforms, composers)],
  ['Ramda "cond"', () => R.cond(conditionalTransforms, composers)],
  ['(native) "If/Else/ElseIf"', () => nativeIfElsey(composers)]
]

export default { tests }
