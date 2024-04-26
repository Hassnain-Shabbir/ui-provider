import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"
import dts from "rollup-plugin-dts"
import scss from "rollup-plugin-scss"
import postcss from "rollup-plugin-postcss"

//NEW
import terser from "@rollup/plugin-terser"
import peerDepsExternal from "rollup-plugin-peer-deps-external"

const packageJson = require("./package.json")

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      typescript(),
      peerDepsExternal(),

      resolve(),
      commonjs(),

      terser(),

      scss({
        output: "dist/bundle.css", // specify output path for compiled CSS
        modules: true, // enable SCSS modules
      }),
      postcss({
        plugins: [require("autoprefixer")], // add autoprefixer plugin
        extract: true, // extract CSS to a separate file
        minimize: true, // minify CSS
      }),
    ],
  },
  {
    input: "dist/cjs/types/src/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts.default()],
    external: [/\.css$/],
  },
]
