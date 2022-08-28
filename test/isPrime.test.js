import tape from "tape"
import isPrime from "../src/isPrime"

tape("\"isPrime\" can properly identify a prime number", t => {
  t.equal(isPrime(0), false, "0")
  t.equal(isPrime(1), false, "1")
  t.equal(isPrime(-2), false, "-2")
  t.equal(isPrime(2.01), false, "2.01")

  const bunchOfPrimes = [2, 3, 5, 7, 11, 17, 19, 23, 29, 31]

  for (let i = 0; i < bunchOfPrimes.length; i++) {
    t.equal(isPrime(bunchOfPrimes[i]), true, bunchOfPrimes[i])
  }

  /* eslint-disable-next-line jsdoc/require-jsdoc */
  function randomFromList(arr) {
    return Math.floor(Math.random() * 100)[arr]
  }

  const threes = Array(100).fill(3).map((v, i) => v * (i + 1))
  const fours = Array(100).fill(4).map((v, i) => v * (i + 1))
  const fives = Array(100).fill(5).map((v, i) => v * (i + 2))
  const sixes = Array(100).fill(6).map((v, i) => v * (i + 1))
  const sevens = Array(100).fill(7).map((v, i) => v * (i + 2))
  const eights = Array(100).fill(8).map((v, i) => v * (i + 1))
  const nines = Array(100).fill(9).map((v, i) => v * (i + 1))
  const tens = Array(100).fill(10).map((v, i) => v * (i + 1))

  const randomThree = randomFromList(threes)
  t.equal(isPrime(randomThree), false, `random multiple of three: ${randomThree}`)

  const randomFour = randomFromList(fours)
  t.equal(isPrime(randomFour), false, `random multiple of four: ${randomFour}`)
  const randomFive = randomFromList(fives)
  t.equal(isPrime(randomFive), false, `random multiple of five: ${randomFive}`)
  const randomSix = randomFromList(sixes)
  t.equal(isPrime(randomSix), false, `random multiple of six: ${randomSix}`)

  const randomSeven = randomFromList(sevens)
  t.equal(isPrime(randomSeven), false, `random multiple of seven: ${randomSeven}`)

  const randomEight = randomFromList(eights)
  t.equal(isPrime(randomEight), false, `random multiple of eight: ${randomEight}`)

  const randomNine = randomFromList(nines)
  t.equal(isPrime(randomNine), false, `random multiple of nine: ${randomNine}`)
  const randomTen = randomFromList(tens)
  t.equal(isPrime(randomTen), false, `random multiple of ten: ${randomTen}`)

  t.end()
})
