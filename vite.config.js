import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import path from "path"


console.log(path.resolve(__dirname, "./src/features/events"))
console.log("hey im on the vite config page")
// import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },

  resolve: {

    
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@events": path.resolve(__dirname, "./src/features/events")
    }
  },
  base: '/trip-planner/', // Replace 'repo-name' with your GitHub repository name

});
