// Your first exercise is to build an assert library with the below methods.
// You cannot import any library - build it all yourself!

// ## Implement .toBeTruthy
// return true or false based on whether `actualValue` is truthy

// ## Implement .toBeUndefined
// return true or false based on whether `actualValue` is undefined or not
// remember that undefined is a primative type

// ## Implement .toBeArray
// return true or false based on whether `actualValue` is an array or not

// ## Implement .toBe
// return true or false based on whether `actualValue` is equal to `expectedValue`
// the values must be of the same type and, if they are objects, must be the same instance

// ## Implement .toThrow
// return true or false based on whether the function passed as `actualValue` throws an error when you call it
// return true or false based on whether the function passed as `actualValue` throws an error when you call it and if `expectedMessage` matches the error message.
// `actualValue` will need to be called as part of your code

// ## Implement .toHaveLength
// return true or false based on whether the `actualValue` has a length that matches `expectedValue`
// should accept arrays and strings

// ## Implement .toHaveProperty
// return true or false based on whether the `actualValue` has a property with the name `expectedProperty`
// return true or false based on whether the `actualValue` has a property with the name `expectedProperty` and value `expectedValue`

// ## Implement .toHaveType
// return true or false based on whether the `actualValue` is of type `expectedType`

// This is your assert library. Add your own implementation for each method
export default function assert(actualValue?: unknown) {
  return {
    toBeTruthy: () => {
      return false;
    },
    toBeUndefined: () => {
      return false;
    },
    toBeArray: () => {
      return false;
    },
    toBe: (expectedValue: unknown) => {
      return false;
    },
    toThrow: (expectedMessage?: string) => {
      return false;
    },
    toHaveLength: (expectedLength: number) => {
      return false;
    },
    toHaveProperty: (expectedProperty: string, expectedValue?: any) => {
      return false;
    },
    toHaveType: (expectedType: string) => {
      return false;
    },
  };
}
