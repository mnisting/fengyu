import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import pxtovw from 'postcss-px-to-viewport';
import { resolve } from 'path';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()]
    })
  ],
  server: {
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@assets': resolve(__dirname, './src/assets'),
      '@less': resolve(__dirname, './src/assets/less'),
      '@icons': resolve(__dirname, './src/assets/icons'),
      '@images': resolve(__dirname, './src/assets/images'),
      '@components': resolve(__dirname, './src/components'),
      '@views': resolve(__dirname, './src/views'),
      '@router': resolve(__dirname, './src/router'),
      '@store': resolve(__dirname, './src/store'),
      '@utils': resolve(__dirname, './src/utils'),
      '@publicFunctions': resolve(__dirname, './src/publicFunctions')
    }
  },
  css: {
    postcss: {
      plugins: [
        pxtovw({
          // 要转化的单位
          unitToConvert: 'px',
          // UI设计稿的大小
          viewportWidth: 750,
          // 转换后的精度
          unitPrecision: 6,
          // 转换后的单位
          viewportUnit: 'vw',
          // 字体转换后的单位
          fontViewportUnit: 'vw',
          // 能转换的属性，*表示所有属性，!border表示border不转
          propList: ['*'],
          // 指定不转换为视窗单位的类名，
          selectorBlackList: ['ignore-van'],
          // 最小转换的值，小于等于1不转
          minPixelValue: 1,
          // 是否在媒体查询的css代码中也进行转换，默认false
          mediaQuery: false,
          // 是否转换后直接更换属性值
          replace: true,
          // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
          exclude: [],
          // 包含那些文件或者特定文件
          include: [],
          // 是否处理横屏情况
          landscape: false
        })
      ]
    }
  }
});
