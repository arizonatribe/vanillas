const tape = require('tape')
const capitalize = require('../lib/capitalize')

tape('"capitalize" will convert the first letter of a word to uppercase', t => {
  t.equal(capitalize('lorem'), 'Lorem')
  t.equal(capitalize('lorem ipsum'), 'Lorem Ipsum')
  t.equal(capitalize(' lorem ipsum dolor sit amet '), ' Lorem Ipsum Dolor Sit Amet ')
  t.end()
})
