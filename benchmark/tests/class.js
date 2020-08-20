/**
 * This benchmark isn't related to a function that is part of this package,
 * but it is an important demonstration on why new'ing up classes isn't to be preferred
 * (in JavaScript, that is) over object composition.
 * Performance dips of such a high number for new'd up classes that have multiple methods
 * are the "mic drop" of why this is a bad idea
 * (again, in JavaScript only; this has nothing to do with the efficacy of that paradigm
 * in languages that are not derived from Lisp/Scheme/Smalltalk)
 */

class AnimalClass {
  makeSound(noise) {
    return noise
  }

  eatFood(food) {
    return food
  }
}

class DogClass extends AnimalClass {
  constructor() {
    super()
    this.makeSound = this.makeSound.bind(this, "bark")
    this.eatFood = this.eatFood.bind(this, "kibble")
  }
}

class AnimalClass2 {
  makeSound() {
    return this.sound
  }

  eatFood() {
    return this.food
  }
}

class DogClass2 extends AnimalClass2 {
  constructor() {
    super()
    this.sound = "bark"
    this.food = "kibble"
  }
}

class AnimalClass3 {
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

class DogClass3 extends AnimalClass3 {
  constructor() {
    super("bark", "kibble")
  }
}

function AnimalConstructor(sound, food) {
  this.sound = sound
  this.food = food
}

AnimalConstructor.prototype.makeSound = function() {
  return this.sound
}
AnimalConstructor.prototype.eatFood = function() {
  return this.food
}

function DogConstructor() {
  AnimalConstructor.call(this, "bark", "kibble")
}

DogConstructor.prototype = Object.create(AnimalConstructor.prototype)

const eatFood = food => food
const makeSound = noise => noise

const dogObj = {
  makeSound() {
    return makeSound("bark")
  },
  eatFood() {
    return eatFood("kibble")
  }
}

const singleMethodTests = [
  ["New'ing up a class (setting prop using bind)", () => {
    const dog = new DogClass()
    return dog.makeSound()
  }],
  ["New'ing up a class (setting shared prop on instance)", () => {
    const dog = new DogClass2()
    return dog.makeSound()
  }],
  ["New'ing up a class (passing prop via super())", () => {
    const dog = new DogClass3()
    return dog.makeSound()
  }],
  ["New'ing up a class (ES5 constructor Function)", () => {
    const dog = new DogConstructor()
    return dog.makeSound()
  }],
  ["Object composition", () => dogObj.makeSound()]
]

const multipleMethodTests = [
  ["New'ing up a class (setting prop using bind)", () => {
    const dog = new DogClass()
    return dog.makeSound() + dog.eatFood()
  }],
  ["New'ing up a class (setting shared prop on instance)", () => {
    const dog = new DogClass2()
    return dog.makeSound() + dog.eatFood()
  }],
  ["New'ing up a class (passing prop via super())", () => {
    const dog = new DogClass3()
    return dog.makeSound() + dog.eatFood()
  }],
  ["New'ing up a class (ES5 constructor Function)", () => {
    const dog = new DogConstructor()
    return dog.makeSound() + dog.eatFood()
  }],
  ["Object composition", () => dogObj.makeSound() + dogObj.eatFood()]
]

export default { singleMethodTests, multipleMethodTests }
