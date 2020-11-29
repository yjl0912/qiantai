const path = require("path");

module.exports = {
  //当前的配置会和vue的webpack合并
  configureWebpack: {
    resolve: {
      alias: {
        // 配置路径别名(可以简写路径)
        "@views": path.resolve(__dirname, "src/views"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@comps": path.resolve(__dirname, "src/components"),
        "@store": path.resolve(__dirname, "src/store"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@api": path.resolve(__dirname, "src/api"),
      },
    },
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://182.92.128.115",
        changeOrigin: true,
        // pathRewrite: {
        //   "^/api": "",
        // },
      },
    },
  },
};
