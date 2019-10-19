const validator = require('validator')
const yargs = require('yargs')
const chalk = require('chalk')
const getNotes = require('./notes')
getNotes('hi')
console.log(validator.isEmail("jinen"));
console.log(validator.isURL("ww.jinen.com"));
console.log(chalk.green.underline.bold("Success!"))
console.log(chalk.blue.inverse(process.argv[1]))
console.log(yargs.argv);