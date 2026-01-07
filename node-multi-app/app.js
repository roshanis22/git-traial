// Import npm packages
const chalk = require("chalk");
const moment = require("moment");

// Functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

// Logger
function log(message) {
    const time = moment().format("DD-MM-YYYY HH:mm:ss");
    console.log(chalk.green(`[${time}] ${message}`));
}

// Program Start
log("Application Started");

let a = 20;
let b = 10;

log("Addition: " + add(a, b));
log("Subtraction: " + subtract(a, b));
log("Multiplication: " + multiply(a, b));

log("Application Finished");



const math = require("./math");
const logger = require("./logger");

logger.log("Application Started");

let a = 20;
let b = 10;

logger.log("Addition: " + math.add(a, b));
logger.log("Subtraction: " + math.subtract(a, b));
logger.log("Multiplication: " + math.multiply(a, b));

logger.log("Application Finished");
``