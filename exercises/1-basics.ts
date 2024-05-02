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
// `actualValue` will need to be called as part of your code

// ## Implement .toHaveProperty
// return true or false based on whether the `actualValue` has a property with the name `expectedProperty`
// return true or false based on whether the `actualValue` has a property with the name `expectedProperty` and value `expectedValue`
// `actualValue` will need to be called as part of your code
// HINT: try casting the actualValue - `const obj = actualValue as Record<typeof expectedProperty, unknown>;`

// ### HINT: if the type of the actualValue isn't what is expected for the assertion, throw an Error with a helpful message

// This is your assert library. Add your own implementation for each method
export default function assert(actualValue?: unknown) {
  return {
    toBeTruthy: () => {
      return !!actualValue;
    },

    toBeUndefined: () => {
      return typeof actualValue === "undefined";
    },

    toBeArray: () => {
      return Array.isArray(actualValue);
    },

    toBe: (expectedValue: any) => {
      return expectedValue === actualValue;
    },

    toThrow: (expectedMessage?: string) => {
      if (typeof actualValue === "function") {
        try {
          actualValue();
        } catch (e) {
          if (expectedMessage) {
            return e.message !== expectedMessage;
          }
          return true;
        }
      }
      return false;
    },

    toHaveLength: (expectedLength: number) => {
      if (Array.isArray(actualValue) || typeof actualValue === "string") {
        return actualValue.length === expectedLength;
      }
      return false;
    },

    toHaveProperty: (
      expectedProperty: string | number | symbol,
      expectedValue?: unknown
    ) => {
      if (typeof actualValue === "object") {
        const obj = actualValue as Record<typeof expectedProperty, unknown>;
        if (expectedValue !== undefined) {
          return obj[expectedProperty] === expectedValue;
        }
        return expectedProperty in obj;
      }
      return false;
    },
  };
}
