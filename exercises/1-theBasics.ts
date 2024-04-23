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
// `actualValue` will need to be called as part of your code

// This is your assert library. Add your own implementation for each method
export default function assert(actualValue?: any) {
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
    toBe: (expectedValue: any) => {
      return false;
    },
    toThrow: () => {
      return false;
    },
    toHaveLength: (len: number) => {
      return false;
    },
    toContain: (expected: any) => {},
  };
}

// TODO: a bunch more
