module.exports = {
  runtimeCompiler: true,
  assetsDir: 'static',
  productionSourceMap: false,
  pwa: {
    name: 'SherlockDocs',
    themeColor: '#303030',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    iconPaths: {
      favicon32: '../public/static/favicon/icon_32x32.png',
      favicon16: '../public/static/favicon/icon_16x16.png',
      appleTouchIcon: '../public/static/favicon/apple-touch-icon-152x152.png',
      maskIcon: '../public/static/favicon/safari-pinned-tab.svg',
      msTileImage: '../public/static/favicon/msapplication-icon-144x144.png'
    },
    // настройки манифеста
    manifestOptions: {
      display: 'standalone',
      background_color: '#303030'
      // ...другие настройки манифеста...
    },

    // настройка workbox-плагина
    workboxPluginMode: 'GenerateSW'
  }
}
