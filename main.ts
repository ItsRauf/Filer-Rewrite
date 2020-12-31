export * from "@lib/Filter.ts";
export * from "@Plugins/Plugin.ts";
export * from "@Plugins/Image.ts";

/**
 * Example Filer Instance
 */

// import { Filer } from "@lib/Filer.ts";
// import { Images } from "@plugins/Images.ts";

// new Filer({
//   auth: {
//     mode: "password",
//     options: {
//       password: "abcdef123456",
//     },
//   },
//   http: {
//     port: 3000,
//   },
//   plugins: [new Images({ path: "img", filename: "nanoid" })],
// })
//   .init()
//   .then(() => console.log("Filer is up and running"));
