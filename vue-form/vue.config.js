const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,

  devServer: {
    overlay: false,
  },
});
