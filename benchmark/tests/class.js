/* eslint-disable jsdoc/require-jsdoc, func-names, max-classes-per-file */

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

  getQualities(qualities) {
    return qualities
  }
}

class DogClass extends AnimalClass {
  constructor() {
    super()
    this.makeSound = this.makeSound.bind(this, "bark")
    this.eatFood = this.eatFood.bind(this, "kibble")
    this.getQualities = this.getQualities.bind(this, ["excitable", "loveable", "smelly", "messy", "ain't too proud to beg"])
  }
}

class AnimalClass2 {
  makeSound() {
    return this.sound
  }

  eatFood() {
    return this.food
  }

  getQualities() {
    return this.qualities
  }
}

class DogClass2 extends AnimalClass2 {
  constructor() {
    super()
    this.sound = "bark"
    this.food = "kibble"
    this.qualities = ["excitable", "loveable", "smelly", "messy", "ain't too proud to beg"]
  }
}

class AnimalClass3 {
  constructor(sound, food, qualities) {
    this.sound = sound
    this.food = food
    this.qualities = qualities
  }

  makeSound() {
    return this.sound
  }

  eatFood() {
    return this.food
  }

  getQualities() {
    return this.qualities
  }
}

class DogClass3 extends AnimalClass3 {
  constructor() {
    super("bark", "kibble", ["excitable", "loveable", "smelly", "messy", "ain't too proud to beg"])
  }
}

function AnimalConstructor(sound, food, qualities) {
  this.sound = sound
  this.food = food
  this.qualities = qualities
}

AnimalConstructor.prototype.makeSound = function() {
  return this.sound
}
AnimalConstructor.prototype.eatFood = function() {
  return this.food
}
AnimalConstructor.prototype.getQualities = function() {
  return this.qualities
}

function DogConstructor() {
  AnimalConstructor.call(
    this,
    "bark",
    "kibble",
    ["excitable", "loveable", "smelly", "messy", "ain't too proud to beg"]
  )
}

DogConstructor.prototype = Object.create(AnimalConstructor.prototype)

function createDog(sound, food, qualities) {
  return {
      makeSound() {
        return sound
      },
      eatFood() {
        return food
      },
      getQualities() {
        return qualities
      }
  }
}

const dogObj = createDog(
    "bark",
    "kibble",
    ["excitable", "loveable", "smelly", "messy", "ain't too proud to beg"]
)

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

const doubleMethodTests = [
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

const tripleMethodTests = [
  ["New'ing up a class (setting prop using bind)", () => {
    const dog = new DogClass()
    return dog.makeSound() + dog.eatFood() + dog.getQualities()
  }],
  ["New'ing up a class (setting shared prop on instance)", () => {
    const dog = new DogClass2()
    return dog.makeSound() + dog.eatFood() + dog.getQualities()
  }],
  ["New'ing up a class (passing prop via super())", () => {
    const dog = new DogClass3()
    return dog.makeSound() + dog.eatFood() + dog.getQualities()
  }],
  ["New'ing up a class (ES5 constructor Function)", () => {
    const dog = new DogConstructor()
    return dog.makeSound() + dog.eatFood() + dog.getQualities()
  }],
  ["Object composition", () => dogObj.makeSound() + dogObj.eatFood() + dogObj.getQualities()]
]

export default { singleMethodTests, doubleMethodTests, tripleMethodTests }
