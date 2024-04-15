import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pxtovw from "postcss-px-to-viewport"
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [VantResolver()],
        }),
        AutoImport({
            // targets to transform
            include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
            // global imports to register
            imports: [
              // 插件预设支持导入的api
              'vue',
              'vue-router',
              'pinia',
              // 自定义导入的api
            ],
            // Generate corresponding .eslintrc-auto-import.json file.
            // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
            eslintrc: {
              enabled: true, // Default `false`
              filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
              globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
            },
            // Filepath to generate corresponding .d.ts file.
            // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
            // Set `false` to disable.
            dts: './auto-imports.d.ts',
          }),
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
            "@assets": resolve(__dirname, "./src/assets"),
            "@less": resolve(__dirname, "./src/assets/less"),
            "@icons": resolve(__dirname, "./src/assets/icons"),
            "@images": resolve(__dirname, "./src/assets/images"),
            "@components": resolve(__dirname, "./src/components"),
            "@views": resolve(__dirname, "./src/views"),
            "@router": resolve(__dirname, "./src/router"),
            "@store": resolve(__dirname, "./src/store"),
            "@utils": resolve(__dirname, "./src/utils"),
            "@publicFunctions": resolve(__dirname, "./src/publicFunctions"),
        }
    },
    server: {
        /** 设置 host: true 才可以使用 Network 的形式，以 IP 访问项目 */
        host: true, // host: "0.0.0.0"
        /** 端口号 */
        port: 9527,
        /** 是否自动打开浏览器 */
        open: false,
        /** 跨域设置允许 */
        cors: true,
        /** 端口被占用时，是否直接退出 */
        strictPort: false,
        /** 接口代理 */
        proxy: {
        //   "/api/v1": {
        //     target: "https://mock.mengxuegu.com/mock/63218b5fb4c53348ed2bc212",
        //     ws: true,
        //     /** 是否允许跨域 */
        //     changeOrigin: true
        //   }
        },
        /** 预热常用文件，提高初始页面加载速度 */
        warmup: {
          clientFiles: ["./src/layouts/**/*.vue"]
        }
      },
    css: {
        postcss: {
            plugins: [
                pxtovw({
                    // 要转化的单位
                    unitToConvert: 'px',
                    // UI设计稿的大小
                    viewportWidth: 375,
                    // 转换后的精度
                    unitPrecision: 6,
                    // 转换后的单位
                    viewportUnit: 'vw',
                    // 字体转换后的单位
                    fontViewportUnit: 'vw',
                    // 能转换的属性，*表示所有属性，!border表示border不转
                    propList: ['*'],
                    // 指定不转换为视窗单位的类名，
                    selectorBlackList: ['ignore-'],
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
            ],
        },
    },

})
