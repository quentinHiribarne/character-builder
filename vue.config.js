// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
//   devServer: {
//     https: true,
//   },
//   pwa: {
//     name: "My App",
//     themeColor: "#4DBA87",
//     msTileColor: "#000000",
//     appleMobileWebAppCapable: "yes",
//     appleMobileWebAppStatusBarStyle: "black",

//     // // configure the workbox plugin
//     // workboxPluginMode: "InjectManifest",
//     // workboxOptions: {
//     //   // swSrc is required in InjectManifest mode.
//     //   swSrc: "./src/registerServiceWorker.js",
//     //   // ...other Workbox options...
//     // },
//   },
// });
module.exports = {
  transpileDependencies: true,
  devServer: {
    https: true,
  },
  pwa: {
    name: "Character Builder",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",

    // // configure the workbox plugin
    // workboxPluginMode: "InjectManifest",
    // workboxOptions: {
    //   // swSrc is required in InjectManifest mode.
    //   swSrc: "./src/registerServiceWorker.js",
    //   // ...other Workbox options...
    // },
  },
};
