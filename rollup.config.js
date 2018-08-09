import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/vue-queue.js',
    format: 'umd',
    name: 'vueQueue',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    uglify(),
  ],
};
