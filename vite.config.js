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
    // define: {
    //   'process.env.SOME_KEY': JSON.stringify(env.SOME_KEY),
    //   'process.env.API_KEY':"'NDPRDASGDUAGXDCFC8VM'",
    //   'process.env.API_SECRET':"' JBuBpbc89dwxTmFeywNF#vV3f3Z#cxs$e9YFwU#2'",
    // },
    plugins: [
      react(),
      // nodePolyfills()
    ],
  }
})