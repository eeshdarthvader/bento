import url from 'rollup-plugin-url'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import svgr from '@svgr/rollup'
import commonjs from 'rollup-plugin-commonjs'
import bundleSize from 'rollup-plugin-bundle-size'
import conditional from "rollup-plugin-conditional";
import uglify from 'rollup-plugin-uglify-es';

import pkg from './package.json'


const isProduction = process.env.MODE === "production";

// rollup.config.js
export default {
  input: 'lib/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  external: [
    'react',
    'react-dom',
    'react-pose',
    'classnames'
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    postcss({
      extract: true,
      minimize: isProduction
    }),
    url(),
    svgr(),
    commonjs({
      namedExports: {
        'node_modules/classnames/index.js': ['classnames']
      }
    }),
    conditional(isProduction, [
      uglify()
    ]),
    bundleSize()
  ],
};
