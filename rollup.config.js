import url from 'rollup-plugin-url'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import svgr from '@svgr/rollup'
import commonjs from 'rollup-plugin-commonjs';


// rollup.config.js
export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundled.js',
    format: 'umd',
    name: 'bundled',
    globals: [
      'React'
    ]
  },
  external: [
    'react',
    'react-dom',
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    postcss(),
    url(),
    svgr(),
    commonjs({
      namedExports: {
        'node_modules/classnames/index.js': ['classnames']
      }
    })
  ],
};
