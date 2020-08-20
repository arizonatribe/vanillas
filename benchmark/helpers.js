import chalk from "chalk"

const errorLog = (...args) =>
  console.error(...args.map(arg => chalk`{red ${String(arg)}}`))

const log = (...args) =>
  console.log(
    ...args.map(arg => chalk`{yellow.bold ${String(arg)}}`
      .replace(/".*"/g, s => chalk`{red "}{cyan.bold ${s.slice(1, s.length - 1)}}{red.bold "}{white }`)
      .replace(/(\s){1}(x){1}(\s){1}/g, s => chalk`{white }{red.bold ${s}}{white }`)
      .replace(/Fastest is/i, s => chalk`🚀 {white }{green ${s}}{white }`)
      .replace(/±[0-9.]+%/g, s => chalk`{white }{yellow ${s}}{white }`)
      .replace(/[0-9,]+ ops\/sec/,
        s => chalk`{white }{yellow ${s.split(" ")[0]}} {white ${s.split(" ")[1]}}`
      )
    )
  )

export { log, errorLog }
