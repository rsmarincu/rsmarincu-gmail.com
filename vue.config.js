module.exports = {
  runtimeCompiler: true,
  devServer: {
    port: 9000,
    hot: false,
    liveReload: true,
    watchOptions: {
      "poll": true
    }
  },
  transpileDependencies: [
    "vuetify"
  ],
  configureWebpack: {
    mode: 'development'
  }
}