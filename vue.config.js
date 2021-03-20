module.exports = {
  pluginOptions: {
    i18n: {
      locale: undefined,
      fallbackLocale: undefined,
      localeDir: undefined,
      enableInSFC: undefined,
    },
    vite: {
      vitePluginVue2Options: {
        vueTemplateOptions: {
          compilerOptions: {
            whitespace: "condense",
          },
          transformAssetUrlsOptions: {
            forceRequire: false,
          },
        },
      },
    },
    css: {
      loaderOptions: {
        scss: {
          [IS_VITE_ENV ? "additionalData" : "prependData"]: `
            $main-color: #123456;
          `,
        },
      },
    },
  },
  configureWebpack: {
    output: {
      filename: "[name].js",
    },
  },
  devServer: {
    port: 33333,
    writeToDisk: true,
  },
  publicPath: `/foo/bar/`,
  transpileDependencies: ["vuetify"],
};
const IS_VITE_ENV = "BROWSER" in process.env;
