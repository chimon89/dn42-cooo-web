import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePluginMd2vue from "./plugins/vite-plugin-md2vue.js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePluginMd2vue()]
})
