#!/usr/bin/env node

const eatFood = food => food
const makeSound = noise => noise

class AnimalClass {
  constructor(sound, food) {
    this.sound = sound
    this.food = food
  }

  makeSound() {
    return this.sound
  }

  eatFood() {
    return this.food
  }
}

class Dog extends AnimalClass {
  constructor() {
    super("bark", "kibble")
  }
}

function testComposition(runs) {
  global.gc()

  const {
    heapUsed: heapUsedBaseline
  } = process.memoryUsage()

  const composedDog = {
    makeSound() {
      return makeSound("bark")
    },
    eatFood() {
      return eatFood("kibble")
    }
  }

  /* eslint-disable-next-line no-unused-vars */
  let result = ""
  for (let i = 0; i < runs; i++) {
    result += `${composedDog.makeSound()}${composedDog.eatFood()}`
  }

  const { heapUsed: heapUsedAfter } = process.memoryUsage()

  result = ""
  global.gc()

  const { heapUsed: heapUsedPostGc } = process.memoryUsage()

  return {
    heapUsedBaseline,
    heapUsedAfter,
    heapUsedPostGc
  }
}

function testInheritance(runs) {
  global.gc()

  const {
    heapUsed: heapUsedBaseline
  } = process.memoryUsage()

  const classyDog = new Dog()

  /* eslint-disable-next-line no-unused-vars */
  let result = ""
  for (let i = 0; i < runs; i++) {
    result += `${classyDog.makeSound()}${classyDog.eatFood()}`
  }

  const { heapUsed: heapUsedAfter } = process.memoryUsage()

  result = ""
  global.gc()

  const { heapUsed: heapUsedPostGc } = process.memoryUsage()

  return {
    heapUsedBaseline,
    heapUsedAfter,
    heapUsedPostGc
  }
}

function runMemoryBenchmarks() {
  let stats
  try {
    const args = process.argv.slice(2)

    const [runs = 90] = args
    if (!(+runs > 0)) {
      throw new TypeError(`Invalid number of runs to execute: '${runs}'. Must be a positive integer`)
    }

    console.log(`Testing ${runs} runs`)

    console.log("New'ing up a Class...")
    stats = testInheritance(runs)
    const inheritanceMemory = stats.heapUsedAfter - stats.heapUsedBaseline
    console.log({ name: "New'd up Class (inheritance)", memoryUsed: inheritanceMemory })

    console.log("Object Composition...")
    stats = testComposition(runs)
    const compositionMemory = stats.heapUsedAfter - stats.heapUsedBaseline
    console.log({ name: "Object composition", memoryUsed: compositionMemory })

    console.log(`Winner is ${
      inheritanceMemory > compositionMemory
        ? "Object Composition"
        : "New'ing up a Class"
    } 🚀`)
    console.log("(please gloat responsibly)")

    process.exit(0)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

runMemoryBenchmarks()
