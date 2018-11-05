import tape from 'tape'
import {
  compose,
  toPairs,
  filter,
  map,
  join,
  test as regTest
} from 'ramda'
import mapSpec from '../src/mapSpec'
import toTitleCase from '../src/toTitleCase'
import { sphere } from './__mocks__'

const spec = {
  hendrix: str => `${str}mi`,
  carter: str => `${str}my`,
  dean: 'james',
  jims: (_, i, obj) => compose(
    map(join(', ')),
    toPairs,
    filter(regTest(/^jim/))
  )(obj)
}
const inputObj = {
  morrison: 'jim',
  hendrix: 'jim',
  carter: 'jim'
}
const specResult = {
  morrison: 'jim',
  hendrix: 'jimmi',
  carter: 'jimmy'
}

tape('"mapSpec" will run any function it finds', t => {
  const transforms = {
    Hoffman: toTitleCase,
    Jackson: toTitleCase,
    Stone: toTitleCase,
    Schreiber: 'Liev',
    Latifah: alias => `Dana (aka "${toTitleCase(alias)}")`
  }
  t.deepEqual(
    mapSpec(transforms, sphere), {
      Hoffman: 'Dustin',
      Jackson: 'Samuel',
      Stone: 'Sharon',
      Schreiber: 'Liev',
      Latifah: 'Dana (aka "Queen")'
    },
    'maps function transforms over props'
  )
  t.deepEqual(
    sphere, {
      Hoffman: 'dustin',
      Jackson: 'samuel',
      Stone: 'sharon',
      Latifah: 'queen'
    },
    'does not mutate original object'
  )
  t.deepEqual(
    mapSpec(spec, inputObj), {
      ...specResult,
      dean: 'james',
      jims: ['morrison, jim', 'hendrix, jimmi', 'carter, jimmy']
    }
  )
  t.deepEqual(
    mapSpec({morrison: 'Van'}, specResult),
    {...specResult, morrison: 'Van'},
    'can overwrite an existing prop with a hard-coded value'
  )
  t.deepEqual(
    mapSpec({morrison: 'Van'}, specResult),
    {...specResult, morrison: 'Van'},
    'default export is synonymous with named export "shapeLoosely"'
  )
  t.end()
})
