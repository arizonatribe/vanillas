const test = require('tape')
const propAt = require('../lib/propAt')
const propOr = require('../lib/propOr')
const propIs = require('../lib/propIs')
const {
  propOr: propOrCurried,
  propAt: propAtCurried,
  propIs: propIsCurried
} = require('../lib/curried')

class Scrooge {
  constructor(props) {
    Object.keys(props).forEach(k => { this[k] = props[k] })
  }
}

const mcDucks = {
  dingus: {
    mingus: null,
    occupation: 'Coal Miner',
    fergus: {
      occupation: 'Mill Worker',
      scrooge: new Scrooge({ occupation: 'Businessman' }),
      hortense: {
        donald: {
          occupation: 'Navy',
          huey: {
            occupation: 'unemployed'
          },
          dewey: {
            occupation: 'unemployed'
          },
          louie: {
            occupation: 'unemployed'
          }
        }
      }
    }
  }
}

test('"propAt" safely retrieves nested props', t => {
  t.equal(propAt('mallard', mcDucks), undefined)
  t.equal(propAt('mallard', undefined), undefined, 'handles objects that are null/undefined')
  t.deepEqual(propAt('dingus', mcDucks), mcDucks.dingus)
  t.equal(propAt('dingus.fergus.occupation', mcDucks), 'Mill Worker', 'paths as dot syntax')
  t.equal(propAt(['dingus', 'fergus', 'occupation'], mcDucks), 'Mill Worker', 'paths as array syntax')
  t.deepEqual(
    propAt(['dingus', 'fergus', 'hortense', 'donald'], mcDucks),
    mcDucks.dingus.fergus.hortense.donald,
    'deep path traversal'
  )
  t.doesNotThrow(() => propAt('angus.mallard', mcDucks), 'safely handles non-existing props at deep paths')
  t.equal(propAtCurried('dingus.fergus.occupation')(mcDucks), 'Mill Worker', 'can be curried')
  t.equal(propAtCurried(['dingus', 'fergus', 'occupation'])(mcDucks), 'Mill Worker', 'mmm curry')
  t.end()
})

test('"propOr" safely retrieves nested props and can use a fallback value', t => {
  t.equal(propOr('goslyn', 'mallard', mcDucks), 'goslyn')
  t.equal(propOr('goslyn', 'mallard', undefined), 'goslyn')
  t.equal(propOr('goslyn', 'dingus.mingus', mcDucks), null, 'null is considered a value')
  t.deepEqual(propOr('', 'dingus', mcDucks), mcDucks.dingus)
  t.equal(propOr('swimmer', 'dingus.fergus.occupation', mcDucks), 'Mill Worker', 'paths as dot syntax')
  t.equal(propOr('swimmer', ['dingus', 'fergus', 'occupation'], mcDucks), 'Mill Worker', 'paths as array syntax')
  t.deepEqual(
    propOr({wife: 'Daisy'}, ['dingus', 'fergus', 'hortense', 'donald'], mcDucks),
    mcDucks.dingus.fergus.hortense.donald,
    'deep path traversal'
  )
  t.doesNotThrow(() => propOr('', 'angus.mallard', mcDucks), 'safely handles non-existing props at deep paths')
  t.equal(propOrCurried('swimmer', 'dingus.fergus.occupation')(mcDucks), 'Mill Worker', 'can be curried')
  t.equal(propOrCurried('swimmer', ['dingus', 'fergus', 'occupation'])(mcDucks), 'Mill Worker', 'mmm curry')
  t.end()
})


test('"propIs" safely retrieves nested props and can use a fallback value', t => {
  t.equal(propIs(undefined, 'mallard', mcDucks), true)
  t.equal(propIs(undefined, 'mallard', undefined), true)
  t.equal(propIs(null, 'dingus.mingus', mcDucks), true, 'null is considered a value')
  t.deepEqual(propIs(Object, 'dingus', mcDucks), true)
  t.equal(propIs('string', 'dingus.fergus.occupation', mcDucks), true, 'paths as dot syntax')
  t.equal(propIs(String, 'dingus.fergus.occupation', mcDucks), true, 'paths as dot syntax')
  t.equal(propIs(String, ['dingus', 'fergus', 'occupation'], mcDucks), true, 'paths as array syntax')
  t.deepEqual(propIs(RegExp, 'pattern', {pattern: /\s/}), true)
  t.deepEqual(
    propIs(Object, ['dingus', 'fergus', 'hortense', 'donald'], mcDucks),
    true,
    'deep path traversal'
  )
  t.deepEqual(
    propIs(Scrooge, ['dingus', 'fergus', 'scrooge'], mcDucks),
    true,
    'Custom class type'
  )
  t.doesNotThrow(() => propIs(String, 'angus.mallard', mcDucks), 'safely handles non-existing props at deep paths')
  t.equal(propIsCurried(String, 'dingus.fergus.occupation')(mcDucks), true, 'can be curried')
  t.equal(propIsCurried(String, ['dingus', 'fergus', 'occupation'])(mcDucks), true, 'mmm curry')
  t.end()
})
