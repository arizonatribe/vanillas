import tape from 'tape'
import toUriEncoded from '../src/toUriEncoded'

tape('"toUriEncoded" will convert the a given value to an integer', t => {
  t.equal(toUriEncoded(), '', 'empty args means empty string returned')
  t.equal(toUriEncoded({ lorem: 'ipsum' }), 'lorem=ipsum')
  t.equal(
    toUriEncoded({ lorem: 'ipsum dolor sit amet' }),
    'lorem=ipsum%20dolor%20sit%20amet',
    'should be URI encoded'
  )
  t.equal(
    toUriEncoded({ lorem: 'ipsum dolor sit amet', consectetur: 'adipiscing elit' }),
    'lorem=ipsum%20dolor%20sit%20amet&consectetur=adipiscing%20elit',
    'multiple key/val pairs serialized into a single string'
  )
  t.equal(
    toUriEncoded({ latin: ['lorem', (new Date()), (new RegExp()), 'ipsum', 'dolor', 'sit', 'amet'] }),
    'latin=lorem,ipsum,dolor,sit,amet',
    'handles arrays'
  )
  const objWithProtoStuff = {
    one: 101,
    two: 202,
    three: 303,
    sub: {
      red: 'october',
      u: 'boat',
      yellow: 'submarine'
    },
    presentParticiple: l => `${l}ing`
  }
  t.equal(
    toUriEncoded(objWithProtoStuff),
    'one=101&two=202&three=303',
    'no functions or sub-objects serialized'
  )

  t.end()
})
