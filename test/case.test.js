import tape from 'tape'
import toTitleCase from '../src/toTitleCase'
import toKebabCase from '../src/toKebabCase'

tape('"toTitleCase" will convert the first letter of a word to uppercase', t => {
  t.equal(toTitleCase('lorem'), 'Lorem')
  t.equal(toTitleCase('lorem ipsum'), 'Lorem Ipsum')
  t.equal(toTitleCase(' lorem ipsum dolor sit amet '), ' Lorem Ipsum Dolor Sit Amet ')
  t.end()
})

tape('"toKebabCase" will hyphenate a camelcased, titlecased, or snakecased string', t => {
  t.equal(toKebabCase('lorem'), 'lorem')
  t.equal(toKebabCase('loremIpsum'), 'lorem-ipsum')
  t.equal(toKebabCase(' lorem_ipsum_dolorSitAmet '), ' lorem-ipsum-dolor-sit-amet ')
  t.equal(toKebabCase('lorem99Ipsum'), 'lorem99-ipsum')
  t.end()
})
