import tape from 'tape'
import toTitleCase from '../src/toTitleCase'

tape('"capitalize" will convert the first letter of a word to uppercase', t => {
  t.equal(toTitleCase('lorem'), 'Lorem')
  t.equal(toTitleCase('lorem ipsum'), 'Lorem Ipsum')
  t.equal(toTitleCase(' lorem ipsum dolor sit amet '), ' Lorem Ipsum Dolor Sit Amet ')
  t.end()
})
