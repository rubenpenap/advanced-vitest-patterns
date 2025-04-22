// 🐨 Import the `EdgeRuntime` class from the `edge-runtime` package.
// 💰 import { EdgeRuntime } from 'edge-runtime
//
// 🐨 Import your handler from the `./handler` module.
// Use a "?raw" import modified to import it as a string.
// 💰 import initialCode from './handler?raw'
//
// 🐨 Declare a new variable called `runtime`.
// Assign it a new instance of `EdgeRuntime` that uses
// the `initialCode` as its initial code.
// 💰 const runtime = new EdgeRuntime({ initialCode })
//
// 🐨 Declare a new test case. Here, ensure that your edge
// runtime handles HTTP requests correctly.
// 💰 test('...', async () => {})
//
// 🐨 Inside the test, call `runtime.dispatchFetch(url)`
// to perform a request.
// 💰 const response = await runtime.dispatchFetch(url)
//
// 🐨 Finally, add an asynchronous assertion over `request.json()`
// that validates the received response body against the
// response returned from the "fetch" event listener in
// the `./handler` module.
// 💰 await expect(response.json()).resolves.toEqual(expected)
