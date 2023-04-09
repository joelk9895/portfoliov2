import css from "rollup-plugin-css-only";

export default {
  input: "js/app.js",
  // ...other Rollup configuration options...
  build: {
    // ...other build options...
    rollupOptions: {
      external: ["css/main.css"],
    },
  },
  output: {
    file: "dist/bundle.js",
    format: "iife",
  },
  plugins: [css({ output: "css/main.css" })],
};
