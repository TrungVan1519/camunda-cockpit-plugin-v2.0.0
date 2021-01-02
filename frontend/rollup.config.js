import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import scss from "rollup-plugin-scss";

export default {
  input: "src/plugin.js",
  output: {
    file: "dist/plugin.js",
  },
  plugins: [
    resolve(),
    babel({
      babelHelpers: "runtime",
      skipPreflightCheck: true,
      compact: true,
    }),
    commonjs({
      include: "node_modules/**",
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    scss(),
  ],
};
