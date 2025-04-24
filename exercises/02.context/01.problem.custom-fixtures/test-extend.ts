// 🐨 Import the `test` function from `vitest`.
// Since you're going to create a custom version of that function,
// alias its import as `testBase`.
// 💰 import { this as that } from 'pkg'
//
// 🐨 Import the `faker` object from `@faker-js/faker`.
// You will use this object to generate random data for your mock cart.
//
// 🐨 Lastly, import types `Cart` and `CartItem` from `./src/cart-utils`.
// These will help you keep your custom fixture type-safe.
//
// 🐨 Declare a new TypeScript interface called `Fixtures`.
// This interface will describe the types of your custom fixtures.
// 💰 interface Fixtures {}
//
// 🐨 In the `Fixtures` interface, declare a property called `createMockCart`.
// Assign an arrow function as the value of that property.
// The function accepts a single argument called `items` of type `Array<Partial<CartItem>>`
// and returns a `Cart` object.
// 💰 fn: (arg: T) => R
//
// 🐨 Now, create a new variable called `test` and export it from this module.
// As the value, assign it the result of calling `testBase.extend({})`.
// Narrow down the types of custom fixtures by providing the `Fixtures` interface
// as the type argument to the `testBase.extend()` method.
// 💰 export const test = testBase.extend({})
// 💰 testBase.extend<T>({})
//
// 🐨 In the object argument to `testBase.extend()`, declare a new async function
// called `createMockCart()`. It will accept two arguments:
// - Text context (an empty object);
// - The `use` function to apply custom fixtures.
// 💰 async createMockCart({}, use ) {}
//
// 🐨 In the `createMockCart` function body, await the call to the `use()` function.
// As the argument to `use()`, pass an arrow function that accepts a single argument called `items`.
// 💰 await use((items) => {})
//
// At this point, you can see TypeScript complaining about your `use()` function
// as it's expected to return a `Cart` object!
// 🐨 Return the result of iterating over the given `items` array.
// 💰 return items.map((item) => {})
//
// 🐨 In the return of the `.map()`, return an object matching the `Cart` type.
// Use various methods on the `faker` object to create a cart object populated with random data.
// 💰
// {
//   id: faker.string.ulid(),
//   name: faker.commerce.productName(),
//   price: faker.number.int({ min: 1, max: 25 }),
//   quantity: faker.number.int({ min: 1, max: 10 }),
// }
//
// 🐨 Finally, at the end of the returned `Cart` object, spread the `item` object
// from the `.map()` argument to enable value overrides from tests.
// 💰 return { id, name, price, quantity, ...item }
