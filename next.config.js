// //taken from stackoverflow while setting up env webpack

// // Within your project, whereever you would be using the environment variable e.g.

// // // index.js
// // require('dotenv').config();

// // // export const authToken = {
// // //   API_TOKEN: process.env.API_TOKEN
// // // };

// // module.exports = {
// //   env: {
// //     API_TOKEN: process.env.API_TOKEN,
// //   }
// // };


// Update for modern Next.js (9.4+)
// You can safely use fs within getStaticProps or getServerSideProps, no extra configuration required. Be sure you're referencing the variable in your data lifecycle so it's correctly tree shaken away.

// You can use this tool to learn visually how it works!

// If you're still building on a legacy Next.js version with getInitialProps, read below 👇

// The provided code is not valid -- this file would never be available on the client side during rendering:

// https://github.com/TidyIQ/nextjs-issue/blob/aef67b12d91d299d0978550005a40cbb34f74b71/pages/index.js#L5

// Remember, you can only do FS-related operations while on the server. This means you cannot use fs while rendering.

// If you use fs, be sure it's only within getInitialProps.

// You may also need to create a next.config.js file with the following content to get the client bundle to build:

// module.exports = {
//   webpack: (config, { isServer }) => {
//     // Fixes npm packages that depend on `fs` module
//     if (!isServer) {
//       config.node = {
//         fs: 'empty'
//       }
//     }

//     return config
//   }
// }
// build: {
//   extend(config, {}) {
//       config.node = {
//           fs: 'empty'
//       }
//   }
// }