// Your fourth exercise is to get to grips with promises

//## Part 1: A basic promise
// Implement a `myFirstPromise` function which accepts a boolean value and returns a promise
// * If the passed value is true the response should be "Yarrr!"
// * If the passed value is false the response should be "Narrr!"

function myFirstPromise() {}

//## Part 2: .then
// Implement an `arrayConverter` function that accepts a promise which resolves to an array
// Then loop over that array and convert each item to an object with the keys `id` and `value`
// Finally, return a promise with the new array

function arrayConverter(arrayPromise: Promise<[]>) {
  return arrayPromise;
}

//## Part 3: Caught promises
// Implement a `caughtPromise` function that accepts a promise which will reject
// Catch the rejection and throw an error with the message "Promise rejected: " followed by the message from the caught rejection
// E.G "Promise rejected: too many bees"

function caughtPromise(rejected: Promise<any>) {
  return rejected.catch((e) => {
    throw new Error();
  });
}

export { myFirstPromise, arrayConverter, caughtPromise };
