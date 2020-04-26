import ispromise from 'is-promise'
import { isPromise } from '../../src'

const val = {
  catch() { },
  then() { },
  finally() { }
}

const tests = [
  ['Vanillas "isPromise"', () => isPromise(val)],
  ['is-promise "isPromise"', () => ispromise(val)]
]

export default { tests }
