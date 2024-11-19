import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";
import postcssoxtiviewport from "postcss-px-to-viewport";
import commpressPlugin from "vite-plugin-compression";
const pathResolve = (dir) => resolve(dir);

export default defineConfig({
  plugins: [react(), commpressPlugin()],
  resolve: {
    alias: {
      "@": pathResolve('./src')
    }
  },
  server: {
    port: 8055
  },
  esbuild: {
    drop: ["console", "debugger"], // 去除打包后的 console 和 debugger
  },
  css: {
    postcss: {
      // plugins: [
      //   postcssoxtiviewport({
      //     unitToConvert: "px",
      //     viewportWidth: 1080,
      //     unitPrecision: 6,
      //     propList: ["*"],
      //     viewportUnit: "vh",
      //     fontViewportUnit: "vh",
      //     selectorBlackList: ["ignore-"],
      //     minPixelValue: 1,
      //     mediaQuery: true,
      //     replace: true,
      //     exclude: [],
      //     lanscape: false, // 是否处理横屏
      //   }),
      // ],
    },
  },
})
