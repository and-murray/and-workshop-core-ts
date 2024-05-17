// Your third exercise is all about design patterns.
// Create a calculator object/constructor/class

// Your calculator should expose the following methods:
// * `sum`
// * `multiply`
// * `getValueOfPI`

// Define an interface for your calculators to implement
interface ICalc {}

// ## Part 1: Module
// Implement the above using a TS object module.

const moduleCalc = {};

// # Part 2: Class implements interface
// Implements the above after defining an interface for the class

class ClassCalc implements ICalc {}

// Exporting so that the tests can use them
export { moduleCalc, ClassCalc };
