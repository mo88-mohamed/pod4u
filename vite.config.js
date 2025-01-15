// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import { nodePolyfills } from 'vite-plugin-node-polyfills'
// import meta.
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     // nodePolyfills()
//   ],
// })
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
// import { nodePolyfills } from 'vite-plugin-node-polyfills'


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // const env = loadEnv(mode, process.cwd(), '');
  // console.log(env)
  return {

    plugins: [
      react(),
    ],
    base:'pod4u'
  }
})